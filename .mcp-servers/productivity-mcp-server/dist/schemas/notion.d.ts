import { z } from "zod";
/**
 * Notion search schema
 */
export declare const NotionSearchSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    page_size: z.ZodDefault<z.ZodNumber>;
    start_cursor: z.ZodOptional<z.ZodString>;
    query: z.ZodString;
    filter: z.ZodOptional<z.ZodEnum<["page", "database"]>>;
}, "strict", z.ZodTypeAny, {
    page_size: number;
    query: string;
    response_format: import("../types.js").ResponseFormat;
    filter?: "page" | "database" | undefined;
    start_cursor?: string | undefined;
}, {
    query: string;
    filter?: "page" | "database" | undefined;
    page_size?: number | undefined;
    start_cursor?: string | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
}>;
export type NotionSearchInput = z.infer<typeof NotionSearchSchema>;
/**
 * Get page schema
 */
export declare const NotionGetPageSchema: z.ZodObject<{
    page_id: z.ZodString;
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
}, "strict", z.ZodTypeAny, {
    response_format: import("../types.js").ResponseFormat;
    page_id: string;
}, {
    page_id: string;
    response_format?: import("../types.js").ResponseFormat | undefined;
}>;
export type NotionGetPageInput = z.infer<typeof NotionGetPageSchema>;
/**
 * Create page schema
 */
export declare const NotionCreatePageSchema: z.ZodObject<{
    parent_id: z.ZodString;
    parent_type: z.ZodDefault<z.ZodEnum<["page", "database"]>>;
    title: z.ZodString;
    properties: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    content: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    title: string;
    parent_id: string;
    parent_type: "page" | "database";
    properties?: Record<string, unknown> | undefined;
    content?: string | undefined;
}, {
    title: string;
    parent_id: string;
    parent_type?: "page" | "database" | undefined;
    properties?: Record<string, unknown> | undefined;
    content?: string | undefined;
}>;
export type NotionCreatePageInput = z.infer<typeof NotionCreatePageSchema>;
/**
 * Update page schema
 */
export declare const NotionUpdatePageSchema: z.ZodObject<{
    page_id: z.ZodString;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    archived: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    page_id: string;
    properties: Record<string, unknown>;
    archived?: boolean | undefined;
}, {
    page_id: string;
    properties: Record<string, unknown>;
    archived?: boolean | undefined;
}>;
export type NotionUpdatePageInput = z.infer<typeof NotionUpdatePageSchema>;
/**
 * Query database schema
 */
export declare const NotionQueryDatabaseSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    page_size: z.ZodDefault<z.ZodNumber>;
    start_cursor: z.ZodOptional<z.ZodString>;
    database_id: z.ZodString;
    filter: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    sorts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        property: z.ZodOptional<z.ZodString>;
        timestamp: z.ZodOptional<z.ZodEnum<["created_time", "last_edited_time"]>>;
        direction: z.ZodEnum<["ascending", "descending"]>;
    }, "strip", z.ZodTypeAny, {
        direction: "ascending" | "descending";
        property?: string | undefined;
        timestamp?: "created_time" | "last_edited_time" | undefined;
    }, {
        direction: "ascending" | "descending";
        property?: string | undefined;
        timestamp?: "created_time" | "last_edited_time" | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    page_size: number;
    response_format: import("../types.js").ResponseFormat;
    database_id: string;
    filter?: Record<string, unknown> | undefined;
    start_cursor?: string | undefined;
    sorts?: {
        direction: "ascending" | "descending";
        property?: string | undefined;
        timestamp?: "created_time" | "last_edited_time" | undefined;
    }[] | undefined;
}, {
    database_id: string;
    filter?: Record<string, unknown> | undefined;
    page_size?: number | undefined;
    start_cursor?: string | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
    sorts?: {
        direction: "ascending" | "descending";
        property?: string | undefined;
        timestamp?: "created_time" | "last_edited_time" | undefined;
    }[] | undefined;
}>;
export type NotionQueryDatabaseInput = z.infer<typeof NotionQueryDatabaseSchema>;
/**
 * Create database item schema
 */
export declare const NotionCreateDatabaseItemSchema: z.ZodObject<{
    database_id: z.ZodString;
    properties: z.ZodRecord<z.ZodString, z.ZodUnknown>;
}, "strict", z.ZodTypeAny, {
    properties: Record<string, unknown>;
    database_id: string;
}, {
    properties: Record<string, unknown>;
    database_id: string;
}>;
export type NotionCreateDatabaseItemInput = z.infer<typeof NotionCreateDatabaseItemSchema>;
/**
 * Get block children schema
 */
export declare const NotionGetBlockChildrenSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    page_size: z.ZodDefault<z.ZodNumber>;
    start_cursor: z.ZodOptional<z.ZodString>;
    block_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    page_size: number;
    response_format: import("../types.js").ResponseFormat;
    block_id: string;
    start_cursor?: string | undefined;
}, {
    block_id: string;
    page_size?: number | undefined;
    start_cursor?: string | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
}>;
export type NotionGetBlockChildrenInput = z.infer<typeof NotionGetBlockChildrenSchema>;
/**
 * Append blocks schema
 */
export declare const NotionAppendBlocksSchema: z.ZodObject<{
    block_id: z.ZodString;
    children: z.ZodArray<z.ZodRecord<z.ZodString, z.ZodUnknown>, "many">;
}, "strict", z.ZodTypeAny, {
    block_id: string;
    children: Record<string, unknown>[];
}, {
    block_id: string;
    children: Record<string, unknown>[];
}>;
export type NotionAppendBlocksInput = z.infer<typeof NotionAppendBlocksSchema>;
/**
 * Update block schema
 */
export declare const NotionUpdateBlockSchema: z.ZodObject<{
    block_id: z.ZodString;
    content: z.ZodRecord<z.ZodString, z.ZodUnknown>;
    archived: z.ZodOptional<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    content: Record<string, unknown>;
    block_id: string;
    archived?: boolean | undefined;
}, {
    content: Record<string, unknown>;
    block_id: string;
    archived?: boolean | undefined;
}>;
export type NotionUpdateBlockInput = z.infer<typeof NotionUpdateBlockSchema>;
/**
 * Delete block schema
 */
export declare const NotionDeleteBlockSchema: z.ZodObject<{
    block_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    block_id: string;
}, {
    block_id: string;
}>;
export type NotionDeleteBlockInput = z.infer<typeof NotionDeleteBlockSchema>;
//# sourceMappingURL=notion.d.ts.map