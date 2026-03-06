import { z } from "zod";
/**
 * Send message schema
 */
export declare const DiscordSendMessageSchema: z.ZodObject<{
    content: z.ZodString;
    username: z.ZodOptional<z.ZodString>;
    avatar_url: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    content: string;
    username?: string | undefined;
    avatar_url?: string | undefined;
}, {
    content: string;
    username?: string | undefined;
    avatar_url?: string | undefined;
}>;
export type DiscordSendMessageInput = z.infer<typeof DiscordSendMessageSchema>;
/**
 * Send embed schema
 */
export declare const DiscordSendEmbedSchema: z.ZodObject<{
    content: z.ZodOptional<z.ZodString>;
    embeds: z.ZodArray<z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        url: z.ZodOptional<z.ZodString>;
        color: z.ZodOptional<z.ZodNumber>;
        fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
            inline: z.ZodDefault<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            value: string;
            inline: boolean;
        }, {
            name: string;
            value: string;
            inline?: boolean | undefined;
        }>, "many">>;
        footer: z.ZodOptional<z.ZodObject<{
            text: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            text: string;
        }, {
            text: string;
        }>>;
        timestamp: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            url: z.ZodOptional<z.ZodString>;
            icon_url: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        }, {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        }>>;
        thumbnail: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>>;
        image: z.ZodOptional<z.ZodObject<{
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            url: string;
        }, {
            url: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        title?: string | undefined;
        timestamp?: string | undefined;
        image?: {
            url: string;
        } | undefined;
        url?: string | undefined;
        color?: number | undefined;
        fields?: {
            name: string;
            value: string;
            inline: boolean;
        }[] | undefined;
        footer?: {
            text: string;
        } | undefined;
        author?: {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        } | undefined;
        thumbnail?: {
            url: string;
        } | undefined;
    }, {
        description?: string | undefined;
        title?: string | undefined;
        timestamp?: string | undefined;
        image?: {
            url: string;
        } | undefined;
        url?: string | undefined;
        color?: number | undefined;
        fields?: {
            name: string;
            value: string;
            inline?: boolean | undefined;
        }[] | undefined;
        footer?: {
            text: string;
        } | undefined;
        author?: {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        } | undefined;
        thumbnail?: {
            url: string;
        } | undefined;
    }>, "many">;
    username: z.ZodOptional<z.ZodString>;
    avatar_url: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    embeds: {
        description?: string | undefined;
        title?: string | undefined;
        timestamp?: string | undefined;
        image?: {
            url: string;
        } | undefined;
        url?: string | undefined;
        color?: number | undefined;
        fields?: {
            name: string;
            value: string;
            inline: boolean;
        }[] | undefined;
        footer?: {
            text: string;
        } | undefined;
        author?: {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        } | undefined;
        thumbnail?: {
            url: string;
        } | undefined;
    }[];
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
}, {
    embeds: {
        description?: string | undefined;
        title?: string | undefined;
        timestamp?: string | undefined;
        image?: {
            url: string;
        } | undefined;
        url?: string | undefined;
        color?: number | undefined;
        fields?: {
            name: string;
            value: string;
            inline?: boolean | undefined;
        }[] | undefined;
        footer?: {
            text: string;
        } | undefined;
        author?: {
            name: string;
            url?: string | undefined;
            icon_url?: string | undefined;
        } | undefined;
        thumbnail?: {
            url: string;
        } | undefined;
    }[];
    content?: string | undefined;
    username?: string | undefined;
    avatar_url?: string | undefined;
}>;
export type DiscordSendEmbedInput = z.infer<typeof DiscordSendEmbedSchema>;
/**
 * Delete message schema
 */
export declare const DiscordDeleteMessageSchema: z.ZodObject<{
    message_id: z.ZodString;
}, "strict", z.ZodTypeAny, {
    message_id: string;
}, {
    message_id: string;
}>;
export type DiscordDeleteMessageInput = z.infer<typeof DiscordDeleteMessageSchema>;
export declare const DiscordColors: {
    readonly SUCCESS: 5763719;
    readonly ERROR: 15548997;
    readonly WARNING: 16776960;
    readonly INFO: 5814783;
    readonly DEFAULT: 5793266;
};
//# sourceMappingURL=discord.d.ts.map