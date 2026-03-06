import { ResponseFormat, PaginationMeta } from "../types.js";
/**
 * Format a date string to human-readable format
 */
export declare function formatDate(dateString: string): string;
/**
 * Format pagination info for markdown output
 */
export declare function formatPaginationMd(meta: PaginationMeta): string;
/**
 * Format labels as colored badges (markdown)
 */
export declare function formatLabels(labels: Array<{
    name: string;
    color?: string;
}>): string;
/**
 * Format assignees list
 */
export declare function formatAssignees(assignees: Array<{
    login: string;
}>): string;
/**
 * Create standard response with optional structured content
 */
export declare function createResponse<T>(format: ResponseFormat, data: T, markdownFormatter: (data: T) => string): {
    text: string;
    structured: T;
};
/**
 * Notion: Extract plain text from rich text array
 */
export declare function extractPlainText(richText: Array<{
    plain_text: string;
}> | undefined): string;
/**
 * Notion: Format page title from properties
 */
export declare function extractNotionTitle(properties: Record<string, unknown>): string;
//# sourceMappingURL=formatters.d.ts.map