import axios, { AxiosInstance } from "axios";
import { GITHUB_API_URL, API_TIMEOUT } from "../constants.js";
import { GitHubRepo, GitHubIssue, GitHubPullRequest, GitHubComment } from "../types.js";

let githubClient: AxiosInstance | null = null;

/**
 * Get or create GitHub API client
 */
export function getGitHubClient(): AxiosInstance {
  if (!githubClient) {
    const token = process.env.GITHUB_TOKEN;
    if (!token) {
      throw new Error("GITHUB_TOKEN environment variable is required");
    }
    githubClient = axios.create({
      baseURL: GITHUB_API_URL,
      timeout: API_TIMEOUT,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      }
    });
  }
  return githubClient;
}

// Repository operations

export async function listRepos(params: {
  type?: string;
  sort?: string;
  direction?: string;
  per_page?: number;
  page?: number;
}): Promise<GitHubRepo[]> {
  const client = getGitHubClient();
  const response = await client.get("/user/repos", { params });
  return response.data;
}

export async function getRepo(owner: string, repo: string): Promise<GitHubRepo> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}`);
  return response.data;
}

// Issue operations

export async function listIssues(
  owner: string,
  repo: string,
  params: {
    state?: string;
    labels?: string;
    assignee?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    page?: number;
  }
): Promise<GitHubIssue[]> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/issues`, { params });
  // Filter out pull requests (they appear in issues endpoint)
  return response.data.filter((issue: GitHubIssue & { pull_request?: unknown }) => !issue.pull_request);
}

export async function getIssue(owner: string, repo: string, issueNumber: number): Promise<GitHubIssue> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/issues/${issueNumber}`);
  return response.data;
}

export async function getIssueComments(
  owner: string,
  repo: string,
  issueNumber: number
): Promise<GitHubComment[]> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`);
  return response.data;
}

export async function createIssue(
  owner: string,
  repo: string,
  data: {
    title: string;
    body?: string;
    labels?: string[];
    assignees?: string[];
  }
): Promise<GitHubIssue> {
  const client = getGitHubClient();
  const response = await client.post(`/repos/${owner}/${repo}/issues`, data);
  return response.data;
}

export async function updateIssue(
  owner: string,
  repo: string,
  issueNumber: number,
  data: {
    title?: string;
    body?: string;
    state?: string;
    labels?: string[];
    assignees?: string[];
  }
): Promise<GitHubIssue> {
  const client = getGitHubClient();
  const response = await client.patch(`/repos/${owner}/${repo}/issues/${issueNumber}`, data);
  return response.data;
}

export async function addIssueComment(
  owner: string,
  repo: string,
  issueNumber: number,
  body: string
): Promise<GitHubComment> {
  const client = getGitHubClient();
  const response = await client.post(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, { body });
  return response.data;
}

// Pull Request operations

export async function listPRs(
  owner: string,
  repo: string,
  params: {
    state?: string;
    head?: string;
    base?: string;
    sort?: string;
    direction?: string;
    per_page?: number;
    page?: number;
  }
): Promise<GitHubPullRequest[]> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/pulls`, { params });
  return response.data;
}

export async function getPR(owner: string, repo: string, pullNumber: number): Promise<GitHubPullRequest> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/pulls/${pullNumber}`);
  return response.data;
}

export async function getPRReviews(
  owner: string,
  repo: string,
  pullNumber: number
): Promise<Array<{
  id: number;
  user: { login: string };
  body: string;
  state: string;
  submitted_at: string;
}>> {
  const client = getGitHubClient();
  const response = await client.get(`/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`);
  return response.data;
}

export async function createPR(
  owner: string,
  repo: string,
  data: {
    title: string;
    body?: string;
    head: string;
    base: string;
    draft?: boolean;
  }
): Promise<GitHubPullRequest> {
  const client = getGitHubClient();
  const response = await client.post(`/repos/${owner}/${repo}/pulls`, data);
  return response.data;
}

export async function addPRReview(
  owner: string,
  repo: string,
  pullNumber: number,
  data: {
    body: string;
    event: string;
  }
): Promise<{
  id: number;
  user: { login: string };
  body: string;
  state: string;
  submitted_at: string;
}> {
  const client = getGitHubClient();
  const response = await client.post(`/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`, data);
  return response.data;
}
