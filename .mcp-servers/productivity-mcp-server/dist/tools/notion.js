import { NotionSearchSchema, NotionGetPageSchema, NotionCreatePageSchema, NotionUpdatePageSchema, NotionQueryDatabaseSchema, NotionCreateDatabaseItemSchema, NotionGetBlockChildrenSchema, NotionAppendBlocksSchema, NotionUpdateBlockSchema, NotionDeleteBlockSchema } from "../schemas/notion.js";
import { searchNotion, getPage, createPage, updatePage, queryDatabase, getBlockChildren, appendBlocks, updateBlock, deleteBlock, markdownToBlocks } from "../services/notion.js";
import { handleApiError } from "../utils/errors.js";
import { ResponseFormat } from "../types.js";
import { extractNotionTitle, formatDate, extractPlainText } from "../utils/formatters.js";
/**
 * Register all Notion tools
 */
export function registerNotionTools(server) {
    // Search
    server.registerTool("notion_search", {
        title: "Search Notion",
        description: `Search for pages and databases in Notion.

Args:
  - query (string): Search query
  - filter ('page' | 'database', optional): Filter by type
  - page_size (number, optional): Results per page (1-100, default 20)
  - start_cursor (string, optional): Pagination cursor
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of matching pages/databases with titles, IDs, and URLs.`,
        inputSchema: NotionSearchSchema,
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const results = await searchNotion({
                query: params.query,
                filter: params.filter ? { property: "object", value: params.filter } : undefined,
                page_size: params.page_size,
                start_cursor: params.start_cursor
            });
            const items = results.results.map((item) => ({
                id: item.id,
                type: item.object,
                title: item.object === "page"
                    ? extractNotionTitle(item.properties)
                    : extractPlainText(item.title),
                url: item.url,
                last_edited: item.last_edited_time
            }));
            const output = {
                count: items.length,
                has_more: results.has_more,
                next_cursor: results.next_cursor,
                items
            };
            let text;
            if (params.response_format === ResponseFormat.MARKDOWN) {
                const lines = [`# Notion Search: "${params.query}"`, ""];
                lines.push(`Found ${items.length} results${results.has_more ? " (more available)" : ""}`);
                lines.push("");
                for (const item of items) {
                    lines.push(`## ${item.title}`);
                    lines.push(`- **Type**: ${item.type}`);
                    lines.push(`- **ID**: \`${item.id}\``);
                    lines.push(`- **URL**: ${item.url}`);
                    lines.push(`- **Last edited**: ${formatDate(item.last_edited)}`);
                    lines.push("");
                }
                text = lines.join("\n");
            }
            else {
                text = JSON.stringify(output, null, 2);
            }
            return {
                content: [{ type: "text", text }],
                structuredContent: output
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Get Page
    server.registerTool("notion_get_page", {
        title: "Get Notion Page",
        description: `Retrieve a Notion page by ID.

Args:
  - page_id (string): Page ID (UUID format)
  - response_format ('markdown' | 'json'): Output format

Returns:
  Page properties, metadata, and parent information.`,
        inputSchema: NotionGetPageSchema,
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const page = await getPage(params.page_id);
            const output = {
                id: page.id,
                url: page.url,
                title: extractNotionTitle(page.properties),
                created_time: page.created_time,
                last_edited_time: page.last_edited_time,
                parent: page.parent,
                properties: page.properties,
                archived: page.archived
            };
            let text;
            if (params.response_format === ResponseFormat.MARKDOWN) {
                const lines = [`# ${output.title}`, ""];
                lines.push(`- **ID**: \`${output.id}\``);
                lines.push(`- **URL**: ${output.url}`);
                lines.push(`- **Created**: ${formatDate(output.created_time)}`);
                lines.push(`- **Last edited**: ${formatDate(output.last_edited_time)}`);
                lines.push(`- **Archived**: ${output.archived}`);
                lines.push("");
                lines.push("## Properties");
                lines.push("```json");
                lines.push(JSON.stringify(output.properties, null, 2));
                lines.push("```");
                text = lines.join("\n");
            }
            else {
                text = JSON.stringify(output, null, 2);
            }
            return {
                content: [{ type: "text", text }],
                structuredContent: output
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Create Page
    server.registerTool("notion_create_page", {
        title: "Create Notion Page",
        description: `Create a new page in Notion.

Args:
  - parent_id (string): Parent page or database ID
  - parent_type ('page' | 'database'): Type of parent
  - title (string): Page title
  - properties (object, optional): Additional properties for database pages
  - content (string, optional): Initial content as markdown

Returns:
  Created page ID and URL.`,
        inputSchema: NotionCreatePageSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const createParams = {
                parent: params.parent_type === "database"
                    ? { database_id: params.parent_id }
                    : { page_id: params.parent_id },
                properties: params.parent_type === "database"
                    ? { ...params.properties, Name: { title: [{ text: { content: params.title } }] } }
                    : { title: { title: [{ text: { content: params.title } }] } }
            };
            if (params.content) {
                createParams.children = markdownToBlocks(params.content);
            }
            const page = await createPage(createParams);
            const output = {
                id: page.id,
                url: page.url,
                title: params.title,
                created: true
            };
            return {
                content: [{
                        type: "text",
                        text: `Created page "${params.title}"\n- ID: \`${page.id}\`\n- URL: ${page.url}`
                    }],
                structuredContent: output
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Update Page
    server.registerTool("notion_update_page", {
        title: "Update Notion Page",
        description: `Update a page's properties.

Args:
  - page_id (string): Page ID to update
  - properties (object): Properties to update
  - archived (boolean, optional): Set to true to archive

Returns:
  Updated page confirmation.`,
        inputSchema: NotionUpdatePageSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const page = await updatePage(params.page_id, {
                properties: params.properties,
                archived: params.archived
            });
            return {
                content: [{
                        type: "text",
                        text: `Updated page \`${params.page_id}\`\n- URL: ${page.url}${params.archived ? "\n- Status: Archived" : ""}`
                    }],
                structuredContent: { id: page.id, url: page.url, updated: true }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Query Database
    server.registerTool("notion_query_database", {
        title: "Query Notion Database",
        description: `Query a Notion database with filters and sorting.

Args:
  - database_id (string): Database ID
  - filter (object, optional): Notion filter object
  - sorts (array, optional): Sort configuration
  - page_size (number, optional): Results per page
  - start_cursor (string, optional): Pagination cursor
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of database items matching the query.`,
        inputSchema: NotionQueryDatabaseSchema,
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const results = await queryDatabase({
                database_id: params.database_id,
                filter: params.filter,
                sorts: params.sorts,
                page_size: params.page_size,
                start_cursor: params.start_cursor
            });
            const items = results.results.map((item) => ({
                id: item.id,
                url: item.url,
                title: extractNotionTitle(item.properties),
                properties: item.properties,
                created_time: item.created_time,
                last_edited_time: item.last_edited_time
            }));
            const output = {
                count: items.length,
                has_more: results.has_more,
                next_cursor: results.next_cursor,
                items
            };
            let text;
            if (params.response_format === ResponseFormat.MARKDOWN) {
                const lines = [`# Database Query Results`, ""];
                lines.push(`Found ${items.length} items${results.has_more ? " (more available)" : ""}`);
                lines.push("");
                for (const item of items) {
                    lines.push(`## ${item.title}`);
                    lines.push(`- **ID**: \`${item.id}\``);
                    lines.push(`- **URL**: ${item.url}`);
                    lines.push("");
                }
                text = lines.join("\n");
            }
            else {
                text = JSON.stringify(output, null, 2);
            }
            return {
                content: [{ type: "text", text }],
                structuredContent: output
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Create Database Item
    server.registerTool("notion_create_database_item", {
        title: "Create Database Item",
        description: `Add a new item to a Notion database.

Args:
  - database_id (string): Database ID
  - properties (object): Item properties (must match database schema)

Returns:
  Created item ID and URL.`,
        inputSchema: NotionCreateDatabaseItemSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const page = await createPage({
                parent: { database_id: params.database_id },
                properties: params.properties
            });
            return {
                content: [{
                        type: "text",
                        text: `Created database item\n- ID: \`${page.id}\`\n- URL: ${page.url}`
                    }],
                structuredContent: { id: page.id, url: page.url, created: true }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Get Block Children
    server.registerTool("notion_get_block_children", {
        title: "Get Block Children",
        description: `Get child blocks of a page or block.

Args:
  - block_id (string): Block or page ID
  - page_size (number, optional): Results per page
  - start_cursor (string, optional): Pagination cursor
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of child blocks with their content.`,
        inputSchema: NotionGetBlockChildrenSchema,
        annotations: {
            readOnlyHint: true,
            destructiveHint: false,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const results = await getBlockChildren(params.block_id, params.start_cursor, params.page_size);
            const blocks = results.results.map((block) => ({
                id: block.id,
                type: block.type,
                has_children: block.has_children,
                content: block[block.type]
            }));
            const output = {
                count: blocks.length,
                has_more: results.has_more,
                next_cursor: results.next_cursor,
                blocks
            };
            let text;
            if (params.response_format === ResponseFormat.MARKDOWN) {
                const lines = [`# Block Children`, ""];
                lines.push(`Found ${blocks.length} blocks${results.has_more ? " (more available)" : ""}`);
                lines.push("");
                for (const block of blocks) {
                    lines.push(`### ${block.type} (${block.id.slice(0, 8)}...)`);
                    if (block.has_children) {
                        lines.push("_Has children_");
                    }
                    lines.push("```json");
                    lines.push(JSON.stringify(block.content, null, 2));
                    lines.push("```");
                    lines.push("");
                }
                text = lines.join("\n");
            }
            else {
                text = JSON.stringify(output, null, 2);
            }
            return {
                content: [{ type: "text", text }],
                structuredContent: output
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Append Blocks
    server.registerTool("notion_append_blocks", {
        title: "Append Blocks",
        description: `Append blocks to a page or block.

Args:
  - block_id (string): Parent block or page ID
  - children (array): Array of block objects to append

Returns:
  Confirmation with appended block IDs.`,
        inputSchema: NotionAppendBlocksSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const results = await appendBlocks(params.block_id, params.children);
            const blockIds = results.results.map((b) => b.id);
            return {
                content: [{
                        type: "text",
                        text: `Appended ${blockIds.length} blocks to \`${params.block_id}\`\nBlock IDs: ${blockIds.map(id => `\`${id}\``).join(", ")}`
                    }],
                structuredContent: { appended: blockIds.length, block_ids: blockIds }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Update Block
    server.registerTool("notion_update_block", {
        title: "Update Block",
        description: `Update a block's content.

Args:
  - block_id (string): Block ID to update
  - content (object): New block content (type-specific)
  - archived (boolean, optional): Set to true to archive

Returns:
  Update confirmation.`,
        inputSchema: NotionUpdateBlockSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            await updateBlock(params.block_id, {
                ...params.content,
                archived: params.archived
            });
            return {
                content: [{
                        type: "text",
                        text: `Updated block \`${params.block_id}\`${params.archived ? " (archived)" : ""}`
                    }],
                structuredContent: { id: params.block_id, updated: true }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
    // Delete Block
    server.registerTool("notion_delete_block", {
        title: "Delete Block",
        description: `Delete (archive) a block.

Args:
  - block_id (string): Block ID to delete

Returns:
  Deletion confirmation.`,
        inputSchema: NotionDeleteBlockSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            await deleteBlock(params.block_id);
            return {
                content: [{
                        type: "text",
                        text: `Deleted block \`${params.block_id}\``
                    }],
                structuredContent: { id: params.block_id, deleted: true }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Notion") }],
                isError: true
            };
        }
    });
}
//# sourceMappingURL=notion.js.map