import axios from "axios";
/**
 * Handle API errors and return user-friendly messages
 */
export function handleApiError(error, service) {
    if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError.response) {
            const status = axiosError.response.status;
            const data = axiosError.response.data;
            const message = data?.message || data?.error || axiosError.message;
            switch (status) {
                case 400:
                    return `Error: Invalid request to ${service}. ${message}. Check your parameters.`;
                case 401:
                    return `Error: Authentication failed for ${service}. Check your API key/token.`;
                case 403:
                    return `Error: Permission denied for ${service}. You may not have access to this resource.`;
                case 404:
                    return `Error: Resource not found in ${service}. Check the ID is correct.`;
                case 409:
                    return `Error: Conflict in ${service}. ${message}`;
                case 429:
                    return `Error: Rate limit exceeded for ${service}. Please wait before making more requests.`;
                case 500:
                case 502:
                case 503:
                    return `Error: ${service} service is temporarily unavailable. Please try again later.`;
                default:
                    return `Error: ${service} API request failed (${status}). ${message}`;
            }
        }
        else if (axiosError.code === "ECONNABORTED") {
            return `Error: Request to ${service} timed out. Please try again.`;
        }
        else if (axiosError.code === "ENOTFOUND") {
            return `Error: Cannot connect to ${service}. Check your network connection.`;
        }
    }
    // Handle Notion client errors
    if (error && typeof error === "object" && "code" in error) {
        const notionError = error;
        return `Error: Notion API error (${notionError.code}). ${notionError.message}`;
    }
    return `Error: Unexpected error with ${service}: ${error instanceof Error ? error.message : String(error)}`;
}
/**
 * Truncate response if it exceeds character limit
 */
export function truncateResponse(content, limit, itemCount) {
    if (content.length <= limit) {
        return { content, truncated: false };
    }
    const truncatedContent = content.slice(0, limit);
    const message = itemCount
        ? `Response truncated. Showing partial results. Use pagination (offset/limit) or filters to get more specific results.`
        : `Response truncated at ${limit} characters. Use more specific queries to reduce result size.`;
    return {
        content: truncatedContent + "\n\n---\n" + message,
        truncated: true,
        message
    };
}
//# sourceMappingURL=errors.js.map