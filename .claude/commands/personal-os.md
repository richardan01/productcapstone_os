# /personal-os

> Personal OS Command Center - your AI-powered productivity hub.

## Quick Start

Based on time of day:
- **Morning**: `/daily-plan` - Plan your day
- **Midday**: `/progress-check` - Assess and adjust
- **Evening**: `/daily-summary` - Wrap up

## Available Commands

### Execution
| Command | Description |
|---------|-------------|
| `/today` | Quick daily overview (calendar + tasks) |
| `/daily-plan` | Generate morning daily plan |
| `/progress-check` | Mid-day progress assessment |
| `/daily-summary` | End-of-day summary |

### Planning
| Command | Description |
|---------|-------------|
| `/sprint-plan` | Sprint planning and prioritization |
| `/strategy-check` | OKR alignment check |

### Research
| Command | Description |
|---------|-------------|
| `/discovery` | User research synthesis |

### AI Capstone (4D Framework)
| Command | Description |
|---------|-------------|
| `/capstone` | Capstone status hub and dashboard |
| `/discovery-phase` | Discovery: problem validation, market research |
| `/design-phase` | Design: architecture, PRD, features |
| `/develop-phase` | Develop: sprint planning, tracking |
| `/deploy-phase` | Deploy: launch, presentation prep |

**Key Dates**: PRD by Feb 15 | MVP by Mar 31 | Submission Apr 15

### Communication
| Command | Description |
|---------|-------------|
| `/stakeholder-update` | Status reports for any audience |

### Configuration
| Command | Description |
|---------|-------------|
| `/update-context` | Update your OKRs, priorities, and context interactively |
| `/configure-google-workspace` | Set up Google Workspace integration (Drive, Docs, Sheets, Slides, Calendar, Tasks) |
| `/configure-microsoft-teams` | Set up Microsoft 365 integration (Teams, OneDrive, Outlook, Office docs) |
| `/configure-notion` | Set up Notion MCP integration (notes, databases, documentation) |

## Agents

Invoke agents with `@agent-name`:

| Agent | Purpose |
|-------|---------|
| `@execution-agent` | Daily operations |
| `@strategy-agent` | Strategic planning |
| `@discovery-agent` | User research |
| `@planning-agent` | Sprint planning |
| `@stakeholder-agent` | Communications |
| `@analytics-agent` | Data & metrics |
| `@documentation-agent` | Knowledge management |
| `@learning-agent` | Continuous improvement |
| `@product-manager` | Full PM capabilities |
| `@capstone-agent` | AI Capstone 4D orchestrator |

## Architecture

```
Commands → route to → Agents → execute → Skills
                         ↓
                   Shared Context
```

All agents reference shared context from `agents/_shared/context.md` for consistent user info, OKRs, and priorities.
