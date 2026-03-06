# Testing the Productivity MCP Server

After configuring your API keys and restarting Claude Desktop, try these test commands:

## Quick Tests

### 1. Test Notion Connection
Ask Claude:
> "Search Notion for any page"

Expected: List of pages/databases from your Notion workspace

### 2. Test GitHub Connection
Ask Claude:
> "List my GitHub repositories"

Expected: List of your repos with names, descriptions, and stats

### 3. Test Discord Connection
Ask Claude:
> "Send a test message to Discord saying 'Hello from MCP!'"

Expected: Message appears in your Discord channel

---

## Full Workflow Test

Try this combined workflow:
> "Create a Notion page called 'Daily Standup' with today's date, then list my open GitHub issues, and send a summary to Discord"

This tests all three integrations working together.

---

## Troubleshooting

### "NOTION_API_KEY environment variable is required"
- Check that your Notion token is correctly set in `claude_desktop_config.json`
- Ensure there are no extra spaces or quotes around the token

### "GITHUB_TOKEN environment variable is required"
- Verify your GitHub token starts with `ghp_`
- Check the token has `repo` and `read:user` scopes

### "DISCORD_WEBHOOK_URL environment variable is required"
- Ensure the webhook URL starts with `https://discord.com/api/webhooks/`
- Verify the webhook hasn't been deleted from Discord

### Server doesn't start
Run this command to test:
```bash
cd C:\Users\RICHIE\Documents\personal_os\.mcp-servers\productivity-mcp-server
set NOTION_API_KEY=your_key
set GITHUB_TOKEN=your_token
set DISCORD_WEBHOOK_URL=your_webhook
node dist/index.js --help
```

### Tools not appearing in Claude
1. Restart Claude Desktop completely (quit and reopen)
2. Check Developer Console for MCP errors
3. Verify the path in config matches: `C:\\Users\\RICHIE\\Documents\\personal_os\\.mcp-servers\\productivity-mcp-server\\dist\\index.js`
