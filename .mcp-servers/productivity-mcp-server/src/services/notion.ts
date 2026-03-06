import { Client } from "@notionhq/client";
import {
  SearchParameters,
  QueryDatabaseParameters,
  CreatePageParameters,
  UpdatePageParameters,
  BlockObjectRequest,
  GetBlockParameters,
  UpdateBlockParameters
} from "@notionhq/client/build/src/api-endpoints.js";

let notionClient: Client | null = null;

/**
 * Get or create Notion client
 */
export function getNotionClient(): Client {
  if (!notionClient) {
    const apiKey = process.env.NOTION_API_KEY;
    if (!apiKey) {
      throw new Error("NOTION_API_KEY environment variable is required");
    }
    notionClient = new Client({ auth: apiKey });
  }
  return notionClient;
}

/**
 * Search Notion
 */
export async function searchNotion(params: SearchParameters) {
  const client = getNotionClient();
  return client.search(params);
}

/**
 * Get a page
 */
export async function getPage(pageId: string) {
  const client = getNotionClient();
  return client.pages.retrieve({ page_id: pageId });
}

/**
 * Create a page
 */
export async function createPage(params: CreatePageParameters) {
  const client = getNotionClient();
  return client.pages.create(params);
}

/**
 * Update a page
 */
export async function updatePage(pageId: string, params: Omit<UpdatePageParameters, "page_id">) {
  const client = getNotionClient();
  return client.pages.update({ page_id: pageId, ...params });
}

/**
 * Query a database
 */
export async function queryDatabase(params: QueryDatabaseParameters) {
  const client = getNotionClient();
  return client.databases.query(params);
}

/**
 * Get database schema
 */
export async function getDatabase(databaseId: string) {
  const client = getNotionClient();
  return client.databases.retrieve({ database_id: databaseId });
}

/**
 * Get block children
 */
export async function getBlockChildren(blockId: string, startCursor?: string, pageSize?: number) {
  const client = getNotionClient();
  return client.blocks.children.list({
    block_id: blockId,
    start_cursor: startCursor,
    page_size: pageSize
  });
}

/**
 * Append blocks to a page/block
 */
export async function appendBlocks(blockId: string, children: BlockObjectRequest[]) {
  const client = getNotionClient();
  return client.blocks.children.append({
    block_id: blockId,
    children
  });
}

/**
 * Get a block
 */
export async function getBlock(blockId: string) {
  const client = getNotionClient();
  return client.blocks.retrieve({ block_id: blockId });
}

/**
 * Update a block
 */
export async function updateBlock(blockId: string, params: Omit<UpdateBlockParameters, "block_id">) {
  const client = getNotionClient();
  return client.blocks.update({ block_id: blockId, ...params });
}

/**
 * Delete a block (archive it)
 */
export async function deleteBlock(blockId: string) {
  const client = getNotionClient();
  return client.blocks.delete({ block_id: blockId });
}

/**
 * Convert simple markdown to Notion blocks
 */
export function markdownToBlocks(markdown: string): BlockObjectRequest[] {
  const lines = markdown.split("\n");
  const blocks: BlockObjectRequest[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Heading 1
    if (trimmed.startsWith("# ")) {
      blocks.push({
        object: "block",
        type: "heading_1",
        heading_1: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(2) } }]
        }
      });
    }
    // Heading 2
    else if (trimmed.startsWith("## ")) {
      blocks.push({
        object: "block",
        type: "heading_2",
        heading_2: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(3) } }]
        }
      });
    }
    // Heading 3
    else if (trimmed.startsWith("### ")) {
      blocks.push({
        object: "block",
        type: "heading_3",
        heading_3: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(4) } }]
        }
      });
    }
    // Bullet list
    else if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      blocks.push({
        object: "block",
        type: "bulleted_list_item",
        bulleted_list_item: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(2) } }]
        }
      });
    }
    // Numbered list
    else if (/^\d+\.\s/.test(trimmed)) {
      blocks.push({
        object: "block",
        type: "numbered_list_item",
        numbered_list_item: {
          rich_text: [{ type: "text", text: { content: trimmed.replace(/^\d+\.\s/, "") } }]
        }
      });
    }
    // Todo
    else if (trimmed.startsWith("[ ] ") || trimmed.startsWith("[x] ")) {
      blocks.push({
        object: "block",
        type: "to_do",
        to_do: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(4) } }],
          checked: trimmed.startsWith("[x] ")
        }
      });
    }
    // Quote
    else if (trimmed.startsWith("> ")) {
      blocks.push({
        object: "block",
        type: "quote",
        quote: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(2) } }]
        }
      });
    }
    // Code block (simple, single line)
    else if (trimmed.startsWith("```") && trimmed.endsWith("```") && trimmed.length > 6) {
      blocks.push({
        object: "block",
        type: "code",
        code: {
          rich_text: [{ type: "text", text: { content: trimmed.slice(3, -3) } }],
          language: "plain text"
        }
      });
    }
    // Divider
    else if (trimmed === "---" || trimmed === "***" || trimmed === "___") {
      blocks.push({
        object: "block",
        type: "divider",
        divider: {}
      });
    }
    // Default: paragraph
    else {
      blocks.push({
        object: "block",
        type: "paragraph",
        paragraph: {
          rich_text: [{ type: "text", text: { content: trimmed } }]
        }
      });
    }
  }

  return blocks;
}
