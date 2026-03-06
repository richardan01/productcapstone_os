import { z } from "zod";
import { ResponseFormat } from "../types.js";
import { DEFAULT_PAGE_SIZE, MAX_PAGE_SIZE } from "../constants.js";
/**
 * Common pagination schema
 */
export const PaginationSchema = z.object({
    limit: z.number()
        .int()
        .min(1)
        .max(MAX_PAGE_SIZE)
        .default(DEFAULT_PAGE_SIZE)
        .describe(`Maximum results to return (1-${MAX_PAGE_SIZE})`),
    offset: z.number()
        .int()
        .min(0)
        .default(0)
        .describe("Number of results to skip for pagination")
});
/**
 * Cursor-based pagination (for Notion)
 */
export const CursorPaginationSchema = z.object({
    page_size: z.number()
        .int()
        .min(1)
        .max(100)
        .default(DEFAULT_PAGE_SIZE)
        .describe("Number of results per page (1-100)"),
    start_cursor: z.string()
        .optional()
        .describe("Cursor from previous response for pagination")
});
/**
 * Response format schema
 */
export const ResponseFormatSchema = z.nativeEnum(ResponseFormat)
    .default(ResponseFormat.MARKDOWN)
    .describe("Output format: 'markdown' for human-readable or 'json' for structured data");
//# sourceMappingURL=common.js.map