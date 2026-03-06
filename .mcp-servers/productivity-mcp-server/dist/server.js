import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerNotionTools } from "./tools/notion.js";
import { registerGitHubTools } from "./tools/github.js";
import { registerDiscordTools } from "./tools/discord.js";
/**
 * Create and configure the MCP server
 */
export function createServer() {
    const server = new McpServer({
        name: "productivity-mcp-server",
        version: "1.0.0"
    });
    // Register all tools
    registerNotionTools(server);
    registerGitHubTools(server);
    registerDiscordTools(server);
    return server;
}
//# sourceMappingURL=server.js.map