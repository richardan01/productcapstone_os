import { z } from "zod";
import { CursorPaginationSchema, ResponseFormatSchema } from "./common.js";
/**
 * Notion search schema
 */
export const NotionSearchSchema = z.object({
    query: z.string()
        .min(1)
        .max(200)
        .describe("Search query to find pages or databases"),
    filter: z.enum(["page", "database"])
        .optional()
        .describe("Filter results by type"),
    ...CursorPaginationSchema.shape,
    response_format: ResponseFormatSchema
}).strict();
/**
 * Get page schema
 */
export const NotionGetPageSchema = z.object({
    page_id: z.string()
        .min(1)
        .describe("Notion page ID (UUID format, with or without dashes)"),
    response_format: ResponseFormatSchema
}).strict();
/**
 * Create page schema
 */
export const NotionCreatePageSchema = z.object({
    parent_id: z.string()
        .min(1)
        .describe("Parent page ID or database ID"),
    parent_type: z.enum(["page", "database"])
        .default("page")
        .describe("Type of parent: 'page' or 'database'"),
    title: z.string()
        .min(1)
        .max(2000)
        .describe("Page title"),
    properties: z.record(z.unknown())
        .optional()
        .describe("Additional properties (for database pages)"),
    content: z.string()
        .optional()
        .describe("Initial page content as markdown (will be converted to blocks)")
}).strict();
/**
 * Update page schema
 */
export const NotionUpdatePageSchema = z.object({
    page_id: z.string()
        .min(1)
        .describe("Page ID to update"),
    properties: z.record(z.unknown())
        .describe("Properties to update"),
    archived: z.boolean()
        .optional()
        .describe("Set to true to archive the page")
}).strict();
/**
 * Query database schema
 */
export const NotionQueryDatabaseSchema = z.object({
    database_id: z.string()
        .min(1)
        .describe("Database ID to query"),
    filter: z.record(z.unknown())
        .optional()
        .describe("Notion filter object (see Notion API docs)"),
    sorts: z.array(z.object({
        property: z.string().optional(),
        timestamp: z.enum(["created_time", "last_edited_time"]).optional(),
        direction: z.enum(["ascending", "descending"])
    }))
        .optional()
        .describe("Sort configuration"),
    ...CursorPaginationSchema.shape,
    response_format: ResponseFormatSchema
}).strict();
/**
 * Create database item schema
 */
export const NotionCreateDatabaseItemSchema = z.object({
    database_id: z.string()
        .min(1)
        .describe("Database ID to add item to"),
    properties: z.record(z.unknown())
        .describe("Properties for the new item (must match database schema)")
}).strict();
/**
 * Get block children schema
 */
export const NotionGetBlockChildrenSchema = z.object({
    block_id: z.string()
        .min(1)
        .describe("Block or page ID to get children from"),
    ...CursorPaginationSchema.shape,
    response_format: ResponseFormatSchema
}).strict();
/**
 * Append blocks schema
 */
export const NotionAppendBlocksSchema = z.object({
    block_id: z.string()
        .min(1)
        .describe("Parent block or page ID"),
    children: z.array(z.record(z.unknown()))
        .min(1)
        .max(100)
        .describe("Array of block objects to append (see Notion API block format)")
}).strict();
/**
 * Update block schema
 */
export const NotionUpdateBlockSchema = z.object({
    block_id: z.string()
        .min(1)
        .describe("Block ID to update"),
    content: z.record(z.unknown())
        .describe("New block content (type-specific, see Notion API docs)"),
    archived: z.boolean()
        .optional()
        .describe("Set to true to archive/delete the block")
}).strict();
/**
 * Delete block schema
 */
export const NotionDeleteBlockSchema = z.object({
    block_id: z.string()
        .min(1)
        .describe("Block ID to delete")
}).strict();
//# sourceMappingURL=notion.js.map