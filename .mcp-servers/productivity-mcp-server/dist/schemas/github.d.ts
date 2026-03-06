import { z } from "zod";
/**
 * List repos schema
 */
export declare const GitHubListReposSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
    type: z.ZodDefault<z.ZodEnum<["all", "owner", "public", "private", "member"]>>;
    sort: z.ZodDefault<z.ZodEnum<["created", "updated", "pushed", "full_name"]>>;
    direction: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strict", z.ZodTypeAny, {
    type: "private" | "all" | "owner" | "public" | "member";
    limit: number;
    offset: number;
    sort: "full_name" | "created" | "updated" | "pushed";
    response_format: import("../types.js").ResponseFormat;
    direction: "asc" | "desc";
}, {
    type?: "private" | "all" | "owner" | "public" | "member" | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: "full_name" | "created" | "updated" | "pushed" | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
    direction?: "asc" | "desc" | undefined;
}>;
export type GitHubListReposInput = z.infer<typeof GitHubListReposSchema>;
/**
 * Get repo schema
 */
export declare const GitHubGetRepoSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
}, "strict", z.ZodTypeAny, {
    response_format: import("../types.js").ResponseFormat;
    owner: string;
    repo: string;
}, {
    owner: string;
    repo: string;
    response_format?: import("../types.js").ResponseFormat | undefined;
}>;
export type GitHubGetRepoInput = z.infer<typeof GitHubGetRepoSchema>;
/**
 * List issues schema
 */
export declare const GitHubListIssuesSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
    owner: z.ZodString;
    repo: z.ZodString;
    state: z.ZodDefault<z.ZodEnum<["open", "closed", "all"]>>;
    labels: z.ZodOptional<z.ZodString>;
    assignee: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodEnum<["created", "updated", "comments"]>>;
    direction: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strict", z.ZodTypeAny, {
    state: "open" | "closed" | "all";
    limit: number;
    offset: number;
    sort: "comments" | "created" | "updated";
    response_format: import("../types.js").ResponseFormat;
    direction: "asc" | "desc";
    owner: string;
    repo: string;
    labels?: string | undefined;
    assignee?: string | undefined;
}, {
    owner: string;
    repo: string;
    state?: "open" | "closed" | "all" | undefined;
    labels?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: "comments" | "created" | "updated" | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
    direction?: "asc" | "desc" | undefined;
    assignee?: string | undefined;
}>;
export type GitHubListIssuesInput = z.infer<typeof GitHubListIssuesSchema>;
/**
 * Get issue schema
 */
export declare const GitHubGetIssueSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
    include_comments: z.ZodDefault<z.ZodBoolean>;
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
}, "strict", z.ZodTypeAny, {
    response_format: import("../types.js").ResponseFormat;
    owner: string;
    repo: string;
    issue_number: number;
    include_comments: boolean;
}, {
    owner: string;
    repo: string;
    issue_number: number;
    response_format?: import("../types.js").ResponseFormat | undefined;
    include_comments?: boolean | undefined;
}>;
export type GitHubGetIssueInput = z.infer<typeof GitHubGetIssueSchema>;
/**
 * Create issue schema
 */
export declare const GitHubCreateIssueSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    title: string;
    owner: string;
    repo: string;
    body?: string | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
}, {
    title: string;
    owner: string;
    repo: string;
    body?: string | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
}>;
export type GitHubCreateIssueInput = z.infer<typeof GitHubCreateIssueSchema>;
/**
 * Update issue schema
 */
export declare const GitHubUpdateIssueSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    body: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodEnum<["open", "closed"]>>;
    labels: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    assignees: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strict", z.ZodTypeAny, {
    owner: string;
    repo: string;
    issue_number: number;
    title?: string | undefined;
    body?: string | undefined;
    state?: "open" | "closed" | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
}, {
    owner: string;
    repo: string;
    issue_number: number;
    title?: string | undefined;
    body?: string | undefined;
    state?: "open" | "closed" | undefined;
    labels?: string[] | undefined;
    assignees?: string[] | undefined;
}>;
export type GitHubUpdateIssueInput = z.infer<typeof GitHubUpdateIssueSchema>;
/**
 * Add issue comment schema
 */
export declare const GitHubAddIssueCommentSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    issue_number: z.ZodNumber;
    body: z.ZodString;
}, "strict", z.ZodTypeAny, {
    body: string;
    owner: string;
    repo: string;
    issue_number: number;
}, {
    body: string;
    owner: string;
    repo: string;
    issue_number: number;
}>;
export type GitHubAddIssueCommentInput = z.infer<typeof GitHubAddIssueCommentSchema>;
/**
 * List PRs schema
 */
export declare const GitHubListPRsSchema: z.ZodObject<{
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
    limit: z.ZodDefault<z.ZodNumber>;
    offset: z.ZodDefault<z.ZodNumber>;
    owner: z.ZodString;
    repo: z.ZodString;
    state: z.ZodDefault<z.ZodEnum<["open", "closed", "all"]>>;
    head: z.ZodOptional<z.ZodString>;
    base: z.ZodOptional<z.ZodString>;
    sort: z.ZodDefault<z.ZodEnum<["created", "updated", "popularity", "long-running"]>>;
    direction: z.ZodDefault<z.ZodEnum<["asc", "desc"]>>;
}, "strict", z.ZodTypeAny, {
    state: "open" | "closed" | "all";
    limit: number;
    offset: number;
    sort: "created" | "updated" | "popularity" | "long-running";
    response_format: import("../types.js").ResponseFormat;
    direction: "asc" | "desc";
    owner: string;
    repo: string;
    head?: string | undefined;
    base?: string | undefined;
}, {
    owner: string;
    repo: string;
    state?: "open" | "closed" | "all" | undefined;
    head?: string | undefined;
    base?: string | undefined;
    limit?: number | undefined;
    offset?: number | undefined;
    sort?: "created" | "updated" | "popularity" | "long-running" | undefined;
    response_format?: import("../types.js").ResponseFormat | undefined;
    direction?: "asc" | "desc" | undefined;
}>;
export type GitHubListPRsInput = z.infer<typeof GitHubListPRsSchema>;
/**
 * Get PR schema
 */
export declare const GitHubGetPRSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    include_reviews: z.ZodDefault<z.ZodBoolean>;
    response_format: z.ZodDefault<z.ZodNativeEnum<typeof import("../types.js").ResponseFormat>>;
}, "strict", z.ZodTypeAny, {
    response_format: import("../types.js").ResponseFormat;
    owner: string;
    repo: string;
    pull_number: number;
    include_reviews: boolean;
}, {
    owner: string;
    repo: string;
    pull_number: number;
    response_format?: import("../types.js").ResponseFormat | undefined;
    include_reviews?: boolean | undefined;
}>;
export type GitHubGetPRInput = z.infer<typeof GitHubGetPRSchema>;
/**
 * Create PR schema
 */
export declare const GitHubCreatePRSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    title: z.ZodString;
    body: z.ZodOptional<z.ZodString>;
    head: z.ZodString;
    base: z.ZodString;
    draft: z.ZodDefault<z.ZodBoolean>;
}, "strict", z.ZodTypeAny, {
    title: string;
    head: string;
    base: string;
    draft: boolean;
    owner: string;
    repo: string;
    body?: string | undefined;
}, {
    title: string;
    head: string;
    base: string;
    owner: string;
    repo: string;
    body?: string | undefined;
    draft?: boolean | undefined;
}>;
export type GitHubCreatePRInput = z.infer<typeof GitHubCreatePRSchema>;
/**
 * Add PR review schema
 */
export declare const GitHubAddPRReviewSchema: z.ZodObject<{
    owner: z.ZodString;
    repo: z.ZodString;
    pull_number: z.ZodNumber;
    body: z.ZodString;
    event: z.ZodEnum<["APPROVE", "REQUEST_CHANGES", "COMMENT"]>;
}, "strict", z.ZodTypeAny, {
    body: string;
    owner: string;
    repo: string;
    pull_number: number;
    event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
}, {
    body: string;
    owner: string;
    repo: string;
    pull_number: number;
    event: "APPROVE" | "REQUEST_CHANGES" | "COMMENT";
}>;
export type GitHubAddPRReviewInput = z.infer<typeof GitHubAddPRReviewSchema>;
//# sourceMappingURL=github.d.ts.map