// Common response format enum
export enum ResponseFormat {
  MARKDOWN = "markdown",
  JSON = "json"
}

// Pagination metadata
export interface PaginationMeta {
  total?: number;
  count: number;
  offset?: number;
  has_more: boolean;
  next_cursor?: string;
  next_offset?: number;
}

// GitHub types
export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  private: boolean;
  default_branch: string;
  open_issues_count: number;
  stargazers_count: number;
  updated_at: string;
  [key: string]: unknown;
}

export interface GitHubIssue {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: "open" | "closed";
  html_url: string;
  user: { login: string };
  labels: Array<{ name: string; color: string }>;
  assignees: Array<{ login: string }>;
  created_at: string;
  updated_at: string;
  comments: number;
  [key: string]: unknown;
}

export interface GitHubPullRequest {
  id: number;
  number: number;
  title: string;
  body: string | null;
  state: "open" | "closed";
  html_url: string;
  user: { login: string };
  head: { ref: string; sha: string };
  base: { ref: string };
  draft: boolean;
  mergeable: boolean | null;
  created_at: string;
  updated_at: string;
  merged_at: string | null;
  [key: string]: unknown;
}

export interface GitHubComment {
  id: number;
  body: string;
  user: { login: string };
  created_at: string;
  html_url: string;
  [key: string]: unknown;
}

// Discord types
export interface DiscordEmbed {
  title?: string;
  description?: string;
  color?: number;
  fields?: Array<{
    name: string;
    value: string;
    inline?: boolean;
  }>;
  footer?: { text: string };
  timestamp?: string;
  url?: string;
  author?: {
    name: string;
    url?: string;
    icon_url?: string;
  };
  thumbnail?: { url: string };
  image?: { url: string };
}

export interface DiscordWebhookMessage {
  id: string;
  content?: string;
  embeds?: DiscordEmbed[];
}

// Notion types (simplified - using @notionhq/client for full types)
export interface NotionPage {
  id: string;
  url: string;
  created_time: string;
  last_edited_time: string;
  properties: Record<string, unknown>;
  parent: { type: string; [key: string]: unknown };
}

export interface NotionDatabase {
  id: string;
  title: Array<{ plain_text: string }>;
  description: Array<{ plain_text: string }>;
  properties: Record<string, unknown>;
}

export interface NotionBlock {
  id: string;
  type: string;
  has_children: boolean;
  [key: string]: unknown;
}
