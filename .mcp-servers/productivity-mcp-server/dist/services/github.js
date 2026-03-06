import axios from "axios";
import { GITHUB_API_URL, API_TIMEOUT } from "../constants.js";
let githubClient = null;
/**
 * Get or create GitHub API client
 */
export function getGitHubClient() {
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
export async function listRepos(params) {
    const client = getGitHubClient();
    const response = await client.get("/user/repos", { params });
    return response.data;
}
export async function getRepo(owner, repo) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}`);
    return response.data;
}
// Issue operations
export async function listIssues(owner, repo, params) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/issues`, { params });
    // Filter out pull requests (they appear in issues endpoint)
    return response.data.filter((issue) => !issue.pull_request);
}
export async function getIssue(owner, repo, issueNumber) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/issues/${issueNumber}`);
    return response.data;
}
export async function getIssueComments(owner, repo, issueNumber) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`);
    return response.data;
}
export async function createIssue(owner, repo, data) {
    const client = getGitHubClient();
    const response = await client.post(`/repos/${owner}/${repo}/issues`, data);
    return response.data;
}
export async function updateIssue(owner, repo, issueNumber, data) {
    const client = getGitHubClient();
    const response = await client.patch(`/repos/${owner}/${repo}/issues/${issueNumber}`, data);
    return response.data;
}
export async function addIssueComment(owner, repo, issueNumber, body) {
    const client = getGitHubClient();
    const response = await client.post(`/repos/${owner}/${repo}/issues/${issueNumber}/comments`, { body });
    return response.data;
}
// Pull Request operations
export async function listPRs(owner, repo, params) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/pulls`, { params });
    return response.data;
}
export async function getPR(owner, repo, pullNumber) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/pulls/${pullNumber}`);
    return response.data;
}
export async function getPRReviews(owner, repo, pullNumber) {
    const client = getGitHubClient();
    const response = await client.get(`/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`);
    return response.data;
}
export async function createPR(owner, repo, data) {
    const client = getGitHubClient();
    const response = await client.post(`/repos/${owner}/${repo}/pulls`, data);
    return response.data;
}
export async function addPRReview(owner, repo, pullNumber, data) {
    const client = getGitHubClient();
    const response = await client.post(`/repos/${owner}/${repo}/pulls/${pullNumber}/reviews`, data);
    return response.data;
}
//# sourceMappingURL=github.js.map