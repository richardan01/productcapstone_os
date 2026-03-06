# /capstone

> AI Product Management Capstone Command Hub - your central dashboard for 4D framework progress.

## Routing

Execute this by combining:
1. **Agent persona**: `@capstone-agent`
2. **User context**: `agents/_shared/context.md`

## What This Does

Displays current capstone status and provides quick access to all capstone features. This is your central command for tracking the 4D process under mentor Migdad Jaffer.

## Available Capstone Commands

### Phase Skills
| Command | Description | Phase |
|---------|-------------|-------|
| `/discovery-phase` | Market research, problem validation, use cases | Discovery |
| `/design-phase` | Solution design, PRD, architecture | Design |
| `/develop-phase` | Sprint planning, development tracking | Develop |
| `/deploy-phase` | Launch planning, presentation prep | Deploy |

### Quick Actions

When invoking `/capstone`, you can add:
- **status** - Full status dashboard (default)
- **mentor-update** - Generate update for next Migdad sync
- **phase-check** - Assess readiness to advance to next phase
- **use-cases** - Review and prioritize use case candidates
- **timeline** - Show critical path and deadline risks

## Usage Examples

```
/capstone
```
Shows current phase status, exit criteria progress, and recommended next actions.

```
/capstone mentor-update
```
Generates a summary for your next sync with Migdad Jaffer.

```
/capstone phase-check
```
Evaluates whether you're ready to transition to the next phase.

```
/capstone use-cases
```
Reviews and helps prioritize AGI pill use case candidates.

## Key Dates

- **PRD Deadline**: February 15, 2026
- **MVP Complete**: March 31, 2026
- **Final Submission**: April 15, 2026

## Status Dashboard Format

```markdown
## Capstone Status - [Date]

### Current Phase: [Phase] ([X]% complete)

**Days to PRD Deadline**: [X]
**Days to Final Submission**: [X]

### Phase Exit Criteria
- [x] Completed items
- [ ] Pending items ([progress])

### Use Case Focus
**Primary**: [Selected use case or "TBD - in Discovery"]
**Candidates**: [List if still exploring]

### This Week's Priorities
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

### Blockers/Risks
- [Risk or "None"]

### Next Mentor Sync
**Date**: [Date or "TBD"]
**Topics**: [List of discussion items]
```
