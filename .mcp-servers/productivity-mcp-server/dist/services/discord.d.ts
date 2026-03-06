import { DiscordEmbed, DiscordWebhookMessage } from "../types.js";
/**
 * Send a plain text message via webhook
 */
export declare function sendMessage(params: {
    content: string;
    username?: string;
    avatar_url?: string;
}): Promise<DiscordWebhookMessage>;
/**
 * Send an embed message via webhook
 */
export declare function sendEmbed(params: {
    content?: string;
    embeds: DiscordEmbed[];
    username?: string;
    avatar_url?: string;
}): Promise<DiscordWebhookMessage>;
/**
 * Delete a webhook message
 */
export declare function deleteMessage(messageId: string): Promise<void>;
/**
 * Edit a webhook message
 */
export declare function editMessage(messageId: string, params: {
    content?: string;
    embeds?: DiscordEmbed[];
}): Promise<DiscordWebhookMessage>;
/**
 * Create a notification embed with consistent styling
 */
export declare function createNotificationEmbed(params: {
    title: string;
    description?: string;
    color?: number;
    fields?: Array<{
        name: string;
        value: string;
        inline?: boolean;
    }>;
    url?: string;
    footer?: string;
    timestamp?: boolean;
}): DiscordEmbed;
//# sourceMappingURL=discord.d.ts.map