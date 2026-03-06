/**
 * Handle API errors and return user-friendly messages
 */
export declare function handleApiError(error: unknown, service: string): string;
/**
 * Truncate response if it exceeds character limit
 */
export declare function truncateResponse(content: string, limit: number, itemCount?: number): {
    content: string;
    truncated: boolean;
    message?: string;
};
//# sourceMappingURL=errors.d.ts.map