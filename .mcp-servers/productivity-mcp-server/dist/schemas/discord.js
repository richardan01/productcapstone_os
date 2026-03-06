import { z } from "zod";
/**
 * Discord embed field schema
 */
const EmbedFieldSchema = z.object({
    name: z.string()
        .min(1)
        .max(256)
        .describe("Field name"),
    value: z.string()
        .min(1)
        .max(1024)
        .describe("Field value"),
    inline: z.boolean()
        .default(false)
        .describe("Display field inline")
});
/**
 * Discord embed schema
 */
const EmbedSchema = z.object({
    title: z.string()
        .max(256)
        .optional()
        .describe("Embed title"),
    description: z.string()
        .max(4096)
        .optional()
        .describe("Embed description"),
    url: z.string()
        .url()
        .optional()
        .describe("URL for the title"),
    color: z.number()
        .int()
        .min(0)
        .max(16777215)
        .optional()
        .describe("Embed color as decimal (e.g., 5814783 for blue)"),
    fields: z.array(EmbedFieldSchema)
        .max(25)
        .optional()
        .describe("Embed fields (max 25)"),
    footer: z.object({
        text: z.string().max(2048)
    })
        .optional()
        .describe("Footer text"),
    timestamp: z.string()
        .datetime()
        .optional()
        .describe("ISO8601 timestamp"),
    author: z.object({
        name: z.string().max(256),
        url: z.string().url().optional(),
        icon_url: z.string().url().optional()
    })
        .optional()
        .describe("Author information"),
    thumbnail: z.object({
        url: z.string().url()
    })
        .optional()
        .describe("Thumbnail image"),
    image: z.object({
        url: z.string().url()
    })
        .optional()
        .describe("Main image")
});
/**
 * Send message schema
 */
export const DiscordSendMessageSchema = z.object({
    content: z.string()
        .min(1)
        .max(2000)
        .describe("Message content (max 2000 characters)"),
    username: z.string()
        .max(80)
        .optional()
        .describe("Override the webhook's default username"),
    avatar_url: z.string()
        .url()
        .optional()
        .describe("Override the webhook's default avatar")
}).strict();
/**
 * Send embed schema
 */
export const DiscordSendEmbedSchema = z.object({
    content: z.string()
        .max(2000)
        .optional()
        .describe("Optional text content before embeds"),
    embeds: z.array(EmbedSchema)
        .min(1)
        .max(10)
        .describe("Embed objects (max 10)"),
    username: z.string()
        .max(80)
        .optional()
        .describe("Override the webhook's default username"),
    avatar_url: z.string()
        .url()
        .optional()
        .describe("Override the webhook's default avatar")
}).strict();
/**
 * Delete message schema
 */
export const DiscordDeleteMessageSchema = z.object({
    message_id: z.string()
        .min(1)
        .describe("ID of the message to delete (returned from send operations)")
}).strict();
// Color presets for convenience
export const DiscordColors = {
    SUCCESS: 5763719, // Green
    ERROR: 15548997, // Red
    WARNING: 16776960, // Yellow
    INFO: 5814783, // Blue
    DEFAULT: 5793266 // Blurple
};
//# sourceMappingURL=discord.js.map