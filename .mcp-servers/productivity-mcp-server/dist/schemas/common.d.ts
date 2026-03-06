import { z } from "zod";
import { ResponseFormat } from "../types.js";
/**
 * Common pagination schema
 */
export declare const PaginationSchema: z.ZodObject<{
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    limit: number;
    offset: number;
}, {
    limit?: number | undefined;
    offset?: number | undefined;
}>;
/**
 * Cursor-based pagination (for Notion)
 */
export declare const CursorPaginationSchema: z.ZodObject<{
    page_size: z.ZodDefault<z.ZodNumber>;
    start_cursor: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    page_size: number;
    start_cursor?: string | undefined;
}, {
    page_size?: number | undefined;
    start_cursor?: string | undefined;
}>;
/**
 * Response format schema
 */
export declare const ResponseFormatSchema: z.ZodDefault<z.ZodNativeEnum<typeof ResponseFormat>>;
//# sourceMappingURL=common.d.ts.map