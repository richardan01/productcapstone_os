import { z } from "zod";
import { PaginationSchema, ResponseFormatSchema } from "./common.js";

/**
 * List repos schema
 */
export const GitHubListReposSchema = z.object({
  type: z.enum(["all", "owner", "public", "private", "member"])
    .default("owner")
    .describe("Type of repositories to list"),
  sort: z.enum(["created", "updated", "pushed", "full_name"])
    .default("updated")
    .describe("Sort field"),
  direction: z.enum(["asc", "desc"])
    .default("desc")
    .describe("Sort direction"),
  ...PaginationSchema.shape,
  response_format: ResponseFormatSchema
}).strict();

export type GitHubListReposInput = z.infer<typeof GitHubListReposSchema>;

/**
 * Get repo schema
 */
export const GitHubGetRepoSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner (username or org)"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  response_format: ResponseFormatSchema
}).strict();

export type GitHubGetRepoInput = z.infer<typeof GitHubGetRepoSchema>;

/**
 * List issues schema
 */
export const GitHubListIssuesSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  state: z.enum(["open", "closed", "all"])
    .default("open")
    .describe("Issue state filter"),
  labels: z.string()
    .optional()
    .describe("Comma-separated list of label names"),
  assignee: z.string()
    .optional()
    .describe("Filter by assignee username, or 'none' for unassigned"),
  sort: z.enum(["created", "updated", "comments"])
    .default("updated")
    .describe("Sort field"),
  direction: z.enum(["asc", "desc"])
    .default("desc")
    .describe("Sort direction"),
  ...PaginationSchema.shape,
  response_format: ResponseFormatSchema
}).strict();

export type GitHubListIssuesInput = z.infer<typeof GitHubListIssuesSchema>;

/**
 * Get issue schema
 */
export const GitHubGetIssueSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  issue_number: z.number()
    .int()
    .positive()
    .describe("Issue number"),
  include_comments: z.boolean()
    .default(true)
    .describe("Include issue comments in response"),
  response_format: ResponseFormatSchema
}).strict();

export type GitHubGetIssueInput = z.infer<typeof GitHubGetIssueSchema>;

/**
 * Create issue schema
 */
export const GitHubCreateIssueSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  title: z.string()
    .min(1)
    .max(256)
    .describe("Issue title"),
  body: z.string()
    .optional()
    .describe("Issue body (markdown supported)"),
  labels: z.array(z.string())
    .optional()
    .describe("Labels to apply"),
  assignees: z.array(z.string())
    .optional()
    .describe("Usernames to assign")
}).strict();

export type GitHubCreateIssueInput = z.infer<typeof GitHubCreateIssueSchema>;

/**
 * Update issue schema
 */
export const GitHubUpdateIssueSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  issue_number: z.number()
    .int()
    .positive()
    .describe("Issue number"),
  title: z.string()
    .max(256)
    .optional()
    .describe("New title"),
  body: z.string()
    .optional()
    .describe("New body"),
  state: z.enum(["open", "closed"])
    .optional()
    .describe("New state"),
  labels: z.array(z.string())
    .optional()
    .describe("New labels (replaces existing)"),
  assignees: z.array(z.string())
    .optional()
    .describe("New assignees (replaces existing)")
}).strict();

export type GitHubUpdateIssueInput = z.infer<typeof GitHubUpdateIssueSchema>;

/**
 * Add issue comment schema
 */
export const GitHubAddIssueCommentSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  issue_number: z.number()
    .int()
    .positive()
    .describe("Issue number"),
  body: z.string()
    .min(1)
    .describe("Comment body (markdown supported)")
}).strict();

export type GitHubAddIssueCommentInput = z.infer<typeof GitHubAddIssueCommentSchema>;

/**
 * List PRs schema
 */
export const GitHubListPRsSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  state: z.enum(["open", "closed", "all"])
    .default("open")
    .describe("PR state filter"),
  head: z.string()
    .optional()
    .describe("Filter by head branch (format: 'user:branch')"),
  base: z.string()
    .optional()
    .describe("Filter by base branch"),
  sort: z.enum(["created", "updated", "popularity", "long-running"])
    .default("updated")
    .describe("Sort field"),
  direction: z.enum(["asc", "desc"])
    .default("desc")
    .describe("Sort direction"),
  ...PaginationSchema.shape,
  response_format: ResponseFormatSchema
}).strict();

export type GitHubListPRsInput = z.infer<typeof GitHubListPRsSchema>;

/**
 * Get PR schema
 */
export const GitHubGetPRSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  pull_number: z.number()
    .int()
    .positive()
    .describe("Pull request number"),
  include_reviews: z.boolean()
    .default(true)
    .describe("Include PR reviews in response"),
  response_format: ResponseFormatSchema
}).strict();

export type GitHubGetPRInput = z.infer<typeof GitHubGetPRSchema>;

/**
 * Create PR schema
 */
export const GitHubCreatePRSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  title: z.string()
    .min(1)
    .max(256)
    .describe("PR title"),
  body: z.string()
    .optional()
    .describe("PR description (markdown supported)"),
  head: z.string()
    .min(1)
    .describe("Branch containing changes"),
  base: z.string()
    .min(1)
    .describe("Branch to merge into"),
  draft: z.boolean()
    .default(false)
    .describe("Create as draft PR")
}).strict();

export type GitHubCreatePRInput = z.infer<typeof GitHubCreatePRSchema>;

/**
 * Add PR review schema
 */
export const GitHubAddPRReviewSchema = z.object({
  owner: z.string()
    .min(1)
    .describe("Repository owner"),
  repo: z.string()
    .min(1)
    .describe("Repository name"),
  pull_number: z.number()
    .int()
    .positive()
    .describe("Pull request number"),
  body: z.string()
    .describe("Review comment"),
  event: z.enum(["APPROVE", "REQUEST_CHANGES", "COMMENT"])
    .describe("Review action")
}).strict();

export type GitHubAddPRReviewInput = z.infer<typeof GitHubAddPRReviewSchema>;
