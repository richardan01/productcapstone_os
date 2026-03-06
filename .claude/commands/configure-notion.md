# /configure-notion

> Interactive setup wizard for Notion MCP integration - enable Claude to read/write notes directly to Notion.

## Overview

This command guides you through setting up Notion MCP integration step-by-step. You'll:
1. Create a Notion integration
2. Get your API key
3. Share databases with the integration
4. Configure the MCP server
5. Test the connection

---

## Step 1: Create Notion Integration

Follow these steps in your browser:

1. **Go to**: https://www.notion.so/my-integrations
2. **Click** "New integration"
3. **Fill in**:
   - Name: `Personal OS`
   - Associated workspace: (select your workspace)
   - Type: Internal
4. **Click** "Submit"
5. **Copy** the "Internal Integration Secret" (starts with `secret_`)

**Keep this key safe - you'll need it in Step 3!**

---

## Step 2: Share Database with Integration

For each Notion database you want to access:

1. **Open** the database in Notion
2. **Click** the `...` menu (top right)
3. **Click** "Connections" > "Add connections"
4. **Search** for "Personal OS"
5. **Click** to add the connection

**Tip**: Share at least one database for tasks/notes to start.

---

## Step 3: Configure MCP Server

Once you have your API key, I'll update `.claude/settings.local.json` with:

```json
{
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/notion-mcp-server"],
      "env": {
        "NOTION_API_KEY": "secret_your_key_here"
      }
    }
  }
}
```

**Action**: Provide your Notion API key when prompted.

---

## Step 4: Test Connection

After configuration, test with these commands:

```
"Search my Notion workspace for recent pages"
```

```
"List my Notion databases"
```

```
"Create a test page in Notion called 'Personal OS Test'"
```

---

## Notion MCP Tools Available

Once configured, these tools become available:

| Tool | What It Does |
|------|--------------|
| Search | Find pages and databases |
| Get Page | Read page content |
| Create Page | Create new pages |
| Update Page | Edit existing pages |
| Query Database | Get database entries |
| Create Database Item | Add new database entries |

---

## Use Cases for Your Capstone

| Task | How Notion Helps |
|------|------------------|
| Research notes | Save interview findings, market research |
| Use case tracking | Database to track and prioritize use cases |
| PRD sections | Write PRD content as Notion pages |
| Progress logging | Daily capstone progress notes |
| Mentor prep | Prepare sync notes before meetings |

---

## Troubleshooting

### "Integration not found"
- Make sure you shared the database with the integration
- Check the integration name matches

### "Unauthorized"
- Verify API key is correct (starts with `secret_`)
- Ensure API key hasn't been regenerated

### "MCP server not starting"
- Check Node.js is installed: `node --version`
- Try running manually: `npx @notionhq/notion-mcp-server`

---

## Next Steps

After setup:
1. Run `/capstone` to see your capstone status
2. Use Notion to save research notes during Discovery phase
3. Create a use case tracking database in Notion
