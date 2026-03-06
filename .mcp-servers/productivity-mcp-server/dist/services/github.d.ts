import { AxiosInstance } from "axios";
import { GitHubRepo, GitHubIssue, GitHubPullRequest, GitHubComment } from "../types.js";
/**
 * Get or create GitHub API client
 */
export declare function getGitHubClient(): AxiosInstance;
export declare function listRepos(params: {
    type?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    page?: number;
}): Promise<GitHubRepo[]>;
export declare function getRepo(owner: string, repo: string): Promise<GitHubRepo>;
export declare function listIssues(owner: string, repo: string, params: {
    state?: string;
    labels?: string;
    assignee?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    page?: number;
}): Promise<GitHubIssue[]>;
export declare function getIssue(owner: string, repo: string, issueNumber: number): Promise<GitHubIssue>;
export declare function getIssueComments(owner: string, repo: string, issueNumber: number): Promise<GitHubComment[]>;
export declare function createIssue(owner: string, repo: string, data: {
    title: string;
    body?: string;
    labels?: string[];
    assignees?: string[];
}): Promise<GitHubIssue>;
export declare function updateIssue(owner: string, repo: string, issueNumber: number, data: {
    title?: string;
    body?: string;
    state?: string;
    labels?: string[];
    assignees?: string[];
}): Promise<GitHubIssue>;
export declare function addIssueComment(owner: string, repo: string, issueNumber: number, body: string): Promise<GitHubComment>;
export declare function listPRs(owner: string, repo: string, params: {
    state?: string;
    head?: string;
    base?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    page?: number;
}): Promise<GitHubPullRequest[]>;
export declare function getPR(owner: string, repo: string, pullNumber: number): Promise<GitHubPullRequest>;
export declare function getPRReviews(owner: string, repo: string, pullNumber: number): Promise<Array<{
    id: number;
    user: {
        login: string;
    };
    body: string;
    state: string;
    submitted_at: string;
}>>;
export declare function createPR(owner: string, repo: string, data: {
    title: string;
    body?: string;
    head: string;
    base: string;
    draft?: boolean;
}): Promise<GitHubPullRequest>;
export declare function addPRReview(owner: string, repo: string, pullNumber: number, data: {
    body: string;
    event: string;
}): Promise<{
    id: number;
    user: {
        login: string;
    };
    body: string;
    state: string;
    submitted_at: string;
}>;
//# sourceMappingURL=github.d.ts.map