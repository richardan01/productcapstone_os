import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import {
  GitHubListReposSchema,
  GitHubGetRepoSchema,
  GitHubListIssuesSchema,
  GitHubGetIssueSchema,
  GitHubCreateIssueSchema,
  GitHubUpdateIssueSchema,
  GitHubAddIssueCommentSchema,
  GitHubListPRsSchema,
  GitHubGetPRSchema,
  GitHubCreatePRSchema,
  GitHubAddPRReviewSchema,
  GitHubListReposInput,
  GitHubGetRepoInput,
  GitHubListIssuesInput,
  GitHubGetIssueInput,
  GitHubCreateIssueInput,
  GitHubUpdateIssueInput,
  GitHubAddIssueCommentInput,
  GitHubListPRsInput,
  GitHubGetPRInput,
  GitHubCreatePRInput,
  GitHubAddPRReviewInput
} from "../schemas/github.js";
import {
  listRepos,
  getRepo,
  listIssues,
  getIssue,
  getIssueComments,
  createIssue,
  updateIssue,
  addIssueComment,
  listPRs,
  getPR,
  getPRReviews,
  createPR,
  addPRReview
} from "../services/github.js";
import { handleApiError } from "../utils/errors.js";
import { ResponseFormat } from "../types.js";
import { formatDate, formatLabels, formatAssignees } from "../utils/formatters.js";

/**
 * Register all GitHub tools
 */
export function registerGitHubTools(server: McpServer): void {

  // List Repos
  server.registerTool(
    "github_list_repos",
    {
      title: "List GitHub Repositories",
      description: `List repositories for the authenticated user.

Args:
  - type ('all' | 'owner' | 'public' | 'private' | 'member'): Filter by type
  - sort ('created' | 'updated' | 'pushed' | 'full_name'): Sort field
  - direction ('asc' | 'desc'): Sort direction
  - limit (number): Max results (1-100)
  - offset (number): Skip results for pagination
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of repositories with name, description, URL, and stats.`,
      inputSchema: GitHubListReposSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubListReposInput) => {
      try {
        const page = Math.floor(params.offset / params.limit) + 1;
        const repos = await listRepos({
          type: params.type,
          sort: params.sort,
          direction: params.direction,
          per_page: params.limit,
          page
        });

        const output = {
          count: repos.length,
          repos: repos.map(r => ({
            name: r.name,
            full_name: r.full_name,
            description: r.description,
            html_url: r.html_url,
            private: r.private,
            default_branch: r.default_branch,
            open_issues: r.open_issues_count,
            stars: r.stargazers_count,
            updated_at: r.updated_at
          }))
        };

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const lines = [`# Your Repositories`, ""];
          lines.push(`Showing ${repos.length} repositories`);
          lines.push("");
          for (const repo of repos) {
            lines.push(`## ${repo.name}${repo.private ? " 🔒" : ""}`);
            if (repo.description) lines.push(`> ${repo.description}`);
            lines.push(`- **URL**: ${repo.html_url}`);
            lines.push(`- **Stars**: ${repo.stargazers_count} | **Issues**: ${repo.open_issues_count}`);
            lines.push(`- **Default branch**: \`${repo.default_branch}\``);
            lines.push(`- **Updated**: ${formatDate(repo.updated_at)}`);
            lines.push("");
          }
          text = lines.join("\n");
        } else {
          text = JSON.stringify(output, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: output
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Get Repo
  server.registerTool(
    "github_get_repo",
    {
      title: "Get GitHub Repository",
      description: `Get detailed information about a repository.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - response_format ('markdown' | 'json'): Output format

Returns:
  Repository details including branches, stats, and metadata.`,
      inputSchema: GitHubGetRepoSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubGetRepoInput) => {
      try {
        const repo = await getRepo(params.owner, params.repo);

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const lines = [`# ${repo.full_name}${repo.private ? " 🔒" : ""}`, ""];
          if (repo.description) lines.push(`> ${repo.description}`);
          lines.push("");
          lines.push(`- **URL**: ${repo.html_url}`);
          lines.push(`- **Stars**: ${repo.stargazers_count}`);
          lines.push(`- **Open Issues**: ${repo.open_issues_count}`);
          lines.push(`- **Default Branch**: \`${repo.default_branch}\``);
          lines.push(`- **Last Updated**: ${formatDate(repo.updated_at)}`);
          text = lines.join("\n");
        } else {
          text = JSON.stringify(repo, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: repo
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // List Issues
  server.registerTool(
    "github_list_issues",
    {
      title: "List GitHub Issues",
      description: `List issues for a repository.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - state ('open' | 'closed' | 'all'): Issue state
  - labels (string, optional): Comma-separated label names
  - assignee (string, optional): Filter by assignee
  - sort ('created' | 'updated' | 'comments'): Sort field
  - direction ('asc' | 'desc'): Sort direction
  - limit (number): Max results
  - offset (number): Skip results
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of issues with title, state, labels, and assignees.`,
      inputSchema: GitHubListIssuesSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubListIssuesInput) => {
      try {
        const page = Math.floor(params.offset / params.limit) + 1;
        const issues = await listIssues(params.owner, params.repo, {
          state: params.state,
          labels: params.labels,
          assignee: params.assignee,
          sort: params.sort,
          direction: params.direction,
          per_page: params.limit,
          page
        });

        const output = {
          count: issues.length,
          issues: issues.map(i => ({
            number: i.number,
            title: i.title,
            state: i.state,
            html_url: i.html_url,
            author: i.user.login,
            labels: i.labels.map(l => l.name),
            assignees: i.assignees.map(a => a.login),
            comments: i.comments,
            created_at: i.created_at,
            updated_at: i.updated_at
          }))
        };

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const lines = [`# Issues: ${params.owner}/${params.repo}`, ""];
          lines.push(`Showing ${issues.length} ${params.state} issues`);
          lines.push("");
          for (const issue of issues) {
            const state = issue.state === "open" ? "🟢" : "🔴";
            lines.push(`## ${state} #${issue.number}: ${issue.title}`);
            lines.push(`- **URL**: ${issue.html_url}`);
            lines.push(`- **Author**: @${issue.user.login}`);
            lines.push(`- **Labels**: ${formatLabels(issue.labels)}`);
            lines.push(`- **Assignees**: ${formatAssignees(issue.assignees)}`);
            lines.push(`- **Comments**: ${issue.comments}`);
            lines.push(`- **Updated**: ${formatDate(issue.updated_at)}`);
            lines.push("");
          }
          text = lines.join("\n");
        } else {
          text = JSON.stringify(output, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: output
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Get Issue
  server.registerTool(
    "github_get_issue",
    {
      title: "Get GitHub Issue",
      description: `Get detailed information about an issue.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - issue_number (number): Issue number
  - include_comments (boolean): Include comments
  - response_format ('markdown' | 'json'): Output format

Returns:
  Issue details including body and comments.`,
      inputSchema: GitHubGetIssueSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubGetIssueInput) => {
      try {
        const issue = await getIssue(params.owner, params.repo, params.issue_number);
        let comments: any[] = [];

        if (params.include_comments && issue.comments > 0) {
          comments = await getIssueComments(params.owner, params.repo, params.issue_number);
        }

        const output = {
          ...issue,
          fetched_comments: comments.map(c => ({
            id: c.id,
            author: c.user.login,
            body: c.body,
            created_at: c.created_at,
            html_url: c.html_url
          }))
        };

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const state = issue.state === "open" ? "🟢 Open" : "🔴 Closed";
          const lines = [`# #${issue.number}: ${issue.title}`, ""];
          lines.push(`**Status**: ${state}`);
          lines.push(`**URL**: ${issue.html_url}`);
          lines.push(`**Author**: @${issue.user.login}`);
          lines.push(`**Labels**: ${formatLabels(issue.labels)}`);
          lines.push(`**Assignees**: ${formatAssignees(issue.assignees)}`);
          lines.push(`**Created**: ${formatDate(issue.created_at)}`);
          lines.push("");
          lines.push("## Description");
          lines.push(issue.body || "_No description_");
          lines.push("");

          if (comments.length > 0) {
            lines.push(`## Comments (${comments.length})`);
            for (const comment of comments) {
              lines.push(`### @${comment.user.login} - ${formatDate(comment.created_at)}`);
              lines.push(comment.body);
              lines.push("");
            }
          }
          text = lines.join("\n");
        } else {
          text = JSON.stringify(output, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: output
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Create Issue
  server.registerTool(
    "github_create_issue",
    {
      title: "Create GitHub Issue",
      description: `Create a new issue in a repository.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - title (string): Issue title
  - body (string, optional): Issue body (markdown)
  - labels (array, optional): Labels to apply
  - assignees (array, optional): Usernames to assign

Returns:
  Created issue number and URL.`,
      inputSchema: GitHubCreateIssueSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: GitHubCreateIssueInput) => {
      try {
        const issue = await createIssue(params.owner, params.repo, {
          title: params.title,
          body: params.body,
          labels: params.labels,
          assignees: params.assignees
        });

        return {
          content: [{
            type: "text",
            text: `Created issue #${issue.number}: "${issue.title}"\n- URL: ${issue.html_url}`
          }],
          structuredContent: {
            number: issue.number,
            title: issue.title,
            html_url: issue.html_url,
            created: true
          }
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Update Issue
  server.registerTool(
    "github_update_issue",
    {
      title: "Update GitHub Issue",
      description: `Update an existing issue.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - issue_number (number): Issue number
  - title (string, optional): New title
  - body (string, optional): New body
  - state ('open' | 'closed', optional): New state
  - labels (array, optional): New labels (replaces existing)
  - assignees (array, optional): New assignees (replaces existing)

Returns:
  Update confirmation.`,
      inputSchema: GitHubUpdateIssueSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubUpdateIssueInput) => {
      try {
        const issue = await updateIssue(params.owner, params.repo, params.issue_number, {
          title: params.title,
          body: params.body,
          state: params.state,
          labels: params.labels,
          assignees: params.assignees
        });

        return {
          content: [{
            type: "text",
            text: `Updated issue #${issue.number}: "${issue.title}"\n- State: ${issue.state}\n- URL: ${issue.html_url}`
          }],
          structuredContent: {
            number: issue.number,
            state: issue.state,
            html_url: issue.html_url,
            updated: true
          }
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Add Issue Comment
  server.registerTool(
    "github_add_issue_comment",
    {
      title: "Add Issue Comment",
      description: `Add a comment to an issue.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - issue_number (number): Issue number
  - body (string): Comment body (markdown)

Returns:
  Created comment URL.`,
      inputSchema: GitHubAddIssueCommentSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: GitHubAddIssueCommentInput) => {
      try {
        const comment = await addIssueComment(
          params.owner,
          params.repo,
          params.issue_number,
          params.body
        );

        return {
          content: [{
            type: "text",
            text: `Added comment to issue #${params.issue_number}\n- URL: ${comment.html_url}`
          }],
          structuredContent: {
            id: comment.id,
            html_url: comment.html_url,
            created: true
          }
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // List PRs
  server.registerTool(
    "github_list_prs",
    {
      title: "List Pull Requests",
      description: `List pull requests for a repository.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - state ('open' | 'closed' | 'all'): PR state
  - head (string, optional): Filter by head branch
  - base (string, optional): Filter by base branch
  - sort ('created' | 'updated' | 'popularity' | 'long-running'): Sort field
  - direction ('asc' | 'desc'): Sort direction
  - limit (number): Max results
  - offset (number): Skip results
  - response_format ('markdown' | 'json'): Output format

Returns:
  List of pull requests.`,
      inputSchema: GitHubListPRsSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubListPRsInput) => {
      try {
        const page = Math.floor(params.offset / params.limit) + 1;
        const prs = await listPRs(params.owner, params.repo, {
          state: params.state,
          head: params.head,
          base: params.base,
          sort: params.sort,
          direction: params.direction,
          per_page: params.limit,
          page
        });

        const output = {
          count: prs.length,
          pull_requests: prs.map(pr => ({
            number: pr.number,
            title: pr.title,
            state: pr.state,
            html_url: pr.html_url,
            author: pr.user.login,
            head: pr.head.ref,
            base: pr.base.ref,
            draft: pr.draft,
            created_at: pr.created_at,
            updated_at: pr.updated_at,
            merged_at: pr.merged_at
          }))
        };

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const lines = [`# Pull Requests: ${params.owner}/${params.repo}`, ""];
          lines.push(`Showing ${prs.length} ${params.state} PRs`);
          lines.push("");
          for (const pr of prs) {
            const state = pr.merged_at ? "🟣 Merged" : pr.state === "open" ? "🟢 Open" : "🔴 Closed";
            const draft = pr.draft ? " (Draft)" : "";
            lines.push(`## ${state} #${pr.number}: ${pr.title}${draft}`);
            lines.push(`- **URL**: ${pr.html_url}`);
            lines.push(`- **Author**: @${pr.user.login}`);
            lines.push(`- **Branch**: \`${pr.head.ref}\` → \`${pr.base.ref}\``);
            lines.push(`- **Updated**: ${formatDate(pr.updated_at)}`);
            lines.push("");
          }
          text = lines.join("\n");
        } else {
          text = JSON.stringify(output, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: output
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Get PR
  server.registerTool(
    "github_get_pr",
    {
      title: "Get Pull Request",
      description: `Get detailed information about a pull request.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - pull_number (number): PR number
  - include_reviews (boolean): Include reviews
  - response_format ('markdown' | 'json'): Output format

Returns:
  PR details including body and reviews.`,
      inputSchema: GitHubGetPRSchema,
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: true
      }
    },
    async (params: GitHubGetPRInput) => {
      try {
        const pr = await getPR(params.owner, params.repo, params.pull_number);
        let reviews: any[] = [];

        if (params.include_reviews) {
          reviews = await getPRReviews(params.owner, params.repo, params.pull_number);
        }

        const output = {
          ...pr,
          fetched_reviews: reviews.map(r => ({
            id: r.id,
            author: r.user.login,
            state: r.state,
            body: r.body,
            submitted_at: r.submitted_at
          }))
        };

        let text: string;
        if (params.response_format === ResponseFormat.MARKDOWN) {
          const state = pr.merged_at ? "🟣 Merged" : pr.state === "open" ? "🟢 Open" : "🔴 Closed";
          const lines = [`# #${pr.number}: ${pr.title}`, ""];
          lines.push(`**Status**: ${state}${pr.draft ? " (Draft)" : ""}`);
          lines.push(`**URL**: ${pr.html_url}`);
          lines.push(`**Author**: @${pr.user.login}`);
          lines.push(`**Branch**: \`${pr.head.ref}\` → \`${pr.base.ref}\``);
          lines.push(`**Mergeable**: ${pr.mergeable ?? "unknown"}`);
          lines.push(`**Created**: ${formatDate(pr.created_at)}`);
          lines.push("");
          lines.push("## Description");
          lines.push(pr.body || "_No description_");
          lines.push("");

          if (reviews.length > 0) {
            lines.push(`## Reviews (${reviews.length})`);
            for (const review of reviews) {
              const reviewState = review.state === "APPROVED" ? "✅" :
                review.state === "CHANGES_REQUESTED" ? "❌" : "💬";
              lines.push(`### ${reviewState} @${review.user.login} - ${review.state}`);
              if (review.body) lines.push(review.body);
              lines.push(`_${formatDate(review.submitted_at)}_`);
              lines.push("");
            }
          }
          text = lines.join("\n");
        } else {
          text = JSON.stringify(output, null, 2);
        }

        return {
          content: [{ type: "text", text }],
          structuredContent: output
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Create PR
  server.registerTool(
    "github_create_pr",
    {
      title: "Create Pull Request",
      description: `Create a new pull request.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - title (string): PR title
  - body (string, optional): PR description
  - head (string): Branch with changes
  - base (string): Branch to merge into
  - draft (boolean): Create as draft

Returns:
  Created PR number and URL.`,
      inputSchema: GitHubCreatePRSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: GitHubCreatePRInput) => {
      try {
        const pr = await createPR(params.owner, params.repo, {
          title: params.title,
          body: params.body,
          head: params.head,
          base: params.base,
          draft: params.draft
        });

        return {
          content: [{
            type: "text",
            text: `Created PR #${pr.number}: "${pr.title}"${pr.draft ? " (Draft)" : ""}\n- URL: ${pr.html_url}`
          }],
          structuredContent: {
            number: pr.number,
            title: pr.title,
            html_url: pr.html_url,
            draft: pr.draft,
            created: true
          }
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );

  // Add PR Review
  server.registerTool(
    "github_add_pr_review",
    {
      title: "Add PR Review",
      description: `Add a review to a pull request.

Args:
  - owner (string): Repository owner
  - repo (string): Repository name
  - pull_number (number): PR number
  - body (string): Review comment
  - event ('APPROVE' | 'REQUEST_CHANGES' | 'COMMENT'): Review action

Returns:
  Review confirmation.`,
      inputSchema: GitHubAddPRReviewSchema,
      annotations: {
        readOnlyHint: false,
        destructiveHint: true,
        idempotentHint: false,
        openWorldHint: true
      }
    },
    async (params: GitHubAddPRReviewInput) => {
      try {
        const review = await addPRReview(params.owner, params.repo, params.pull_number, {
          body: params.body,
          event: params.event
        });

        return {
          content: [{
            type: "text",
            text: `Added ${params.event} review to PR #${params.pull_number}`
          }],
          structuredContent: {
            id: review.id,
            state: review.state,
            created: true
          }
        };
      } catch (error) {
        return {
          content: [{ type: "text", text: handleApiError(error, "GitHub") }],
          isError: true
        };
      }
    }
  );
}
