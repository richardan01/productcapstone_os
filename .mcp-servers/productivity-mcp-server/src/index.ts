#!/usr/bin/env node
/**
 * Productivity MCP Server
 *
 * Unified MCP server for Notion, GitHub, and Discord integrations.
 * Provides tools for managing pages, issues, PRs, and notifications.
 *
 * Environment variables:
 *   NOTION_API_KEY    - Notion integration token
 *   GITHUB_TOKEN      - GitHub personal access token
 *   DISCORD_WEBHOOK_URL - Discord webhook URL
 *   TRANSPORT         - 'stdio' (default) or 'http'
 *   PORT              - HTTP port (default 3000)
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

/**
 * Validate environment variables
 */
function validateEnv(): { valid: boolean; missing: string[] } {
  const required = ["NOTION_API_KEY", "GITHUB_TOKEN", "DISCORD_WEBHOOK_URL"];
  const missing = required.filter(key => !process.env[key]);

  if (missing.length > 0) {
    console.error("WARNING: Missing environment variables:");
    missing.forEach(key => console.error(`  - ${key}`));
    console.error("\nSome tools will fail without these. Set them before use.");
  }

  return { valid: missing.length === 0, missing };
}

/**
 * Run server with stdio transport
 */
async function runStdio(): Promise<void> {
  const server = createServer();
  const transport = new StdioServerTransport();

  await server.connect(transport);
  console.error("Productivity MCP server running via stdio");
}

/**
 * Run server with HTTP transport
 */
async function runHttp(): Promise<void> {
  // Dynamic import to avoid loading express when not needed
  const [{ default: express }, { StreamableHTTPServerTransport }] = await Promise.all([
    import("express"),
    import("@modelcontextprotocol/sdk/server/streamableHttp.js")
  ]);

  const app = express();
  app.use(express.json());

  const server = createServer();

  app.post("/mcp", async (req, res) => {
    const transport = new StreamableHTTPServerTransport({
      sessionIdGenerator: undefined,
      enableJsonResponse: true
    });

    res.on("close", () => transport.close());

    await server.connect(transport);
    await transport.handleRequest(req, res, req.body);
  });

  // Health check endpoint
  app.get("/health", (_req, res) => {
    res.json({ status: "ok", name: "productivity-mcp-server" });
  });

  const port = parseInt(process.env.PORT || "3000", 10);
  app.listen(port, () => {
    console.error(`Productivity MCP server running on http://localhost:${port}/mcp`);
  });
}

/**
 * Main entry point
 */
async function main(): Promise<void> {
  // Show help if requested
  if (process.argv.includes("--help") || process.argv.includes("-h")) {
    console.log(`
Productivity MCP Server

Usage: productivity-mcp-server [options]

Options:
  --help, -h     Show this help message
  --version, -v  Show version

Environment variables:
  NOTION_API_KEY      Notion integration token (required for Notion tools)
  GITHUB_TOKEN        GitHub personal access token (required for GitHub tools)
  DISCORD_WEBHOOK_URL Discord webhook URL (required for Discord tools)
  TRANSPORT           Transport type: 'stdio' (default) or 'http'
  PORT                HTTP port when using http transport (default: 3000)

Examples:
  # Run with stdio (default)
  NOTION_API_KEY=xxx GITHUB_TOKEN=yyy productivity-mcp-server

  # Run with HTTP
  TRANSPORT=http PORT=8080 productivity-mcp-server
`);
    process.exit(0);
  }

  if (process.argv.includes("--version") || process.argv.includes("-v")) {
    console.log("1.0.0");
    process.exit(0);
  }

  // Validate environment
  validateEnv();

  // Select transport
  const transport = process.env.TRANSPORT || "stdio";

  try {
    if (transport === "http") {
      await runHttp();
    } else {
      await runStdio();
    }
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

main();
