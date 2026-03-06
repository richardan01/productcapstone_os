import axios from "axios";
import { API_TIMEOUT } from "../constants.js";
/**
 * Get Discord webhook URL from environment
 */
function getWebhookUrl() {
    const url = process.env.DISCORD_WEBHOOK_URL;
    if (!url) {
        throw new Error("DISCORD_WEBHOOK_URL environment variable is required");
    }
    return url;
}
/**
 * Send a plain text message via webhook
 */
export async function sendMessage(params) {
    const webhookUrl = getWebhookUrl();
    const response = await axios.post(`${webhookUrl}?wait=true`, {
        content: params.content,
        username: params.username,
        avatar_url: params.avatar_url
    }, {
        timeout: API_TIMEOUT,
        headers: { "Content-Type": "application/json" }
    });
    return response.data;
}
/**
 * Send an embed message via webhook
 */
export async function sendEmbed(params) {
    const webhookUrl = getWebhookUrl();
    const response = await axios.post(`${webhookUrl}?wait=true`, {
        content: params.content,
        embeds: params.embeds,
        username: params.username,
        avatar_url: params.avatar_url
    }, {
        timeout: API_TIMEOUT,
        headers: { "Content-Type": "application/json" }
    });
    return response.data;
}
/**
 * Delete a webhook message
 */
export async function deleteMessage(messageId) {
    const webhookUrl = getWebhookUrl();
    await axios.delete(`${webhookUrl}/messages/${messageId}`, {
        timeout: API_TIMEOUT
    });
}
/**
 * Edit a webhook message
 */
export async function editMessage(messageId, params) {
    const webhookUrl = getWebhookUrl();
    const response = await axios.patch(`${webhookUrl}/messages/${messageId}`, params, {
        timeout: API_TIMEOUT,
        headers: { "Content-Type": "application/json" }
    });
    return response.data;
}
/**
 * Create a notification embed with consistent styling
 */
export function createNotificationEmbed(params) {
    return {
        title: params.title,
        description: params.description,
        color: params.color ?? 5814783, // Default blue
        fields: params.fields,
        url: params.url,
        footer: params.footer ? { text: params.footer } : undefined,
        timestamp: params.timestamp ? new Date().toISOString() : undefined
    };
}
//# sourceMappingURL=discord.js.map