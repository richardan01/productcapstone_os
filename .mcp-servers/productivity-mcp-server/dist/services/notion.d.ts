import { Client } from "@notionhq/client";
import { SearchParameters, QueryDatabaseParameters, CreatePageParameters, UpdatePageParameters, BlockObjectRequest, UpdateBlockParameters } from "@notionhq/client/build/src/api-endpoints.js";
/**
 * Get or create Notion client
 */
export declare function getNotionClient(): Client;
/**
 * Search Notion
 */
export declare function searchNotion(params: SearchParameters): Promise<import("@notionhq/client/build/src/api-endpoints.js").SearchResponse>;
/**
 * Get a page
 */
export declare function getPage(pageId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetPageResponse>;
/**
 * Create a page
 */
export declare function createPage(params: CreatePageParameters): Promise<import("@notionhq/client/build/src/api-endpoints.js").CreatePageResponse>;
/**
 * Update a page
 */
export declare function updatePage(pageId: string, params: Omit<UpdatePageParameters, "page_id">): Promise<import("@notionhq/client/build/src/api-endpoints.js").UpdatePageResponse>;
/**
 * Query a database
 */
export declare function queryDatabase(params: QueryDatabaseParameters): Promise<import("@notionhq/client/build/src/api-endpoints.js").QueryDatabaseResponse>;
/**
 * Get database schema
 */
export declare function getDatabase(databaseId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetDatabaseResponse>;
/**
 * Get block children
 */
export declare function getBlockChildren(blockId: string, startCursor?: string, pageSize?: number): Promise<import("@notionhq/client/build/src/api-endpoints.js").ListBlockChildrenResponse>;
/**
 * Append blocks to a page/block
 */
export declare function appendBlocks(blockId: string, children: BlockObjectRequest[]): Promise<import("@notionhq/client/build/src/api-endpoints.js").AppendBlockChildrenResponse>;
/**
 * Get a block
 */
export declare function getBlock(blockId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").GetBlockResponse>;
/**
 * Update a block
 */
export declare function updateBlock(blockId: string, params: Omit<UpdateBlockParameters, "block_id">): Promise<import("@notionhq/client/build/src/api-endpoints.js").UpdateBlockResponse>;
/**
 * Delete a block (archive it)
 */
export declare function deleteBlock(blockId: string): Promise<import("@notionhq/client/build/src/api-endpoints.js").DeleteBlockResponse>;
/**
 * Convert simple markdown to Notion blocks
 */
export declare function markdownToBlocks(markdown: string): BlockObjectRequest[];
//# sourceMappingURL=notion.d.ts.map