import { DiscordSendMessageSchema, DiscordSendEmbedSchema, DiscordDeleteMessageSchema } from "../schemas/discord.js";
import { sendMessage, sendEmbed, deleteMessage } from "../services/discord.js";
import { handleApiError } from "../utils/errors.js";
/**
 * Register all Discord tools
 */
export function registerDiscordTools(server) {
    // Send Message
    server.registerTool("discord_send_message", {
        title: "Send Discord Message",
        description: `Send a plain text message to Discord via webhook.

Args:
  - content (string): Message content (max 2000 chars)
  - username (string, optional): Override webhook username
  - avatar_url (string, optional): Override webhook avatar

Returns:
  Message ID (can be used to delete the message later).`,
        inputSchema: DiscordSendMessageSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const message = await sendMessage({
                content: params.content,
                username: params.username,
                avatar_url: params.avatar_url
            });
            return {
                content: [{
                        type: "text",
                        text: `Sent message to Discord\n- Message ID: \`${message.id}\``
                    }],
                structuredContent: {
                    id: message.id,
                    sent: true
                }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Discord") }],
                isError: true
            };
        }
    });
    // Send Embed
    server.registerTool("discord_send_embed", {
        title: "Send Discord Embed",
        description: `Send a rich embed message to Discord via webhook.

Args:
  - content (string, optional): Text before embeds
  - embeds (array): Embed objects (max 10), each with:
    - title (string, optional): Embed title (max 256)
    - description (string, optional): Embed description (max 4096)
    - url (string, optional): URL for title
    - color (number, optional): Color as decimal (e.g., 5763719 for green)
    - fields (array, optional): Fields with name, value, inline
    - footer (object, optional): Footer text
    - timestamp (string, optional): ISO8601 timestamp
    - author (object, optional): Author info
    - thumbnail (object, optional): Thumbnail image
    - image (object, optional): Main image
  - username (string, optional): Override webhook username
  - avatar_url (string, optional): Override webhook avatar

Common colors:
  - Green (success): 5763719
  - Red (error): 15548997
  - Yellow (warning): 16776960
  - Blue (info): 5814783

Returns:
  Message ID.`,
        inputSchema: DiscordSendEmbedSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: false,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            const message = await sendEmbed({
                content: params.content,
                embeds: params.embeds,
                username: params.username,
                avatar_url: params.avatar_url
            });
            return {
                content: [{
                        type: "text",
                        text: `Sent embed to Discord\n- Message ID: \`${message.id}\`\n- Embeds: ${params.embeds.length}`
                    }],
                structuredContent: {
                    id: message.id,
                    embed_count: params.embeds.length,
                    sent: true
                }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Discord") }],
                isError: true
            };
        }
    });
    // Delete Message
    server.registerTool("discord_delete_message", {
        title: "Delete Discord Message",
        description: `Delete a message sent via webhook.

Args:
  - message_id (string): ID of the message to delete

Returns:
  Deletion confirmation.`,
        inputSchema: DiscordDeleteMessageSchema,
        annotations: {
            readOnlyHint: false,
            destructiveHint: true,
            idempotentHint: true,
            openWorldHint: true
        }
    }, async (params) => {
        try {
            await deleteMessage(params.message_id);
            return {
                content: [{
                        type: "text",
                        text: `Deleted message \`${params.message_id}\``
                    }],
                structuredContent: {
                    id: params.message_id,
                    deleted: true
                }
            };
        }
        catch (error) {
            return {
                content: [{ type: "text", text: handleApiError(error, "Discord") }],
                isError: true
            };
        }
    });
}
//# sourceMappingURL=discord.js.map