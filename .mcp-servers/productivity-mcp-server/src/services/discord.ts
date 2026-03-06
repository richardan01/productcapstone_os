import axios from "axios";
import { API_TIMEOUT } from "../constants.js";
import { DiscordEmbed, DiscordWebhookMessage } from "../types.js";

/**
 * Get Discord webhook URL from environment
 */
function getWebhookUrl(): string {
  const url = process.env.DISCORD_WEBHOOK_URL;
  if (!url) {
    throw new Error("DISCORD_WEBHOOK_URL environment variable is required");
  }
  return url;
}

/**
 * Send a plain text message via webhook
 */
export async function sendMessage(params: {
  content: string;
  username?: string;
  avatar_url?: string;
}): Promise<DiscordWebhookMessage> {
  const webhookUrl = getWebhookUrl();

  const response = await axios.post(
    `${webhookUrl}?wait=true`,
    {
      content: params.content,
      username: params.username,
      avatar_url: params.avatar_url
    },
    {
      timeout: API_TIMEOUT,
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
}

/**
 * Send an embed message via webhook
 */
export async function sendEmbed(params: {
  content?: string;
  embeds: DiscordEmbed[];
  username?: string;
  avatar_url?: string;
}): Promise<DiscordWebhookMessage> {
  const webhookUrl = getWebhookUrl();

  const response = await axios.post(
    `${webhookUrl}?wait=true`,
    {
      content: params.content,
      embeds: params.embeds,
      username: params.username,
      avatar_url: params.avatar_url
    },
    {
      timeout: API_TIMEOUT,
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
}

/**
 * Delete a webhook message
 */
export async function deleteMessage(messageId: string): Promise<void> {
  const webhookUrl = getWebhookUrl();

  await axios.delete(`${webhookUrl}/messages/${messageId}`, {
    timeout: API_TIMEOUT
  });
}

/**
 * Edit a webhook message
 */
export async function editMessage(
  messageId: string,
  params: {
    content?: string;
    embeds?: DiscordEmbed[];
  }
): Promise<DiscordWebhookMessage> {
  const webhookUrl = getWebhookUrl();

  const response = await axios.patch(
    `${webhookUrl}/messages/${messageId}`,
    params,
    {
      timeout: API_TIMEOUT,
      headers: { "Content-Type": "application/json" }
    }
  );

  return response.data;
}

/**
 * Create a notification embed with consistent styling
 */
export function createNotificationEmbed(params: {
  title: string;
  description?: string;
  color?: number;
  fields?: Array<{ name: string; value: string; inline?: boolean }>;
  url?: string;
  footer?: string;
  timestamp?: boolean;
}): DiscordEmbed {
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
