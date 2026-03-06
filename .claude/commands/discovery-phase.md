# /discovery-phase

> Execute Discovery phase activities for the AI Capstone - problem validation, market research, and use case development.

## Routing

Execute this skill by combining:
1. **Agent persona**: `@capstone-agent`
2. **Skill instructions**: `skills/capstone/discovery-phase.md`
3. **User context**: `agents/_shared/context.md`

## What This Does

Helps with Discovery phase activities:
- Problem exploration and hypothesis formation
- Market research and competitive analysis
- Use case development and prioritization
- User research planning and synthesis
- Problem validation documentation

## Quick Use

Run `/discovery-phase` and specify what you need:

| Action | Description |
|--------|-------------|
| `status` | Current Discovery phase progress |
| `market-research` | Research AGI pill market opportunities |
| `use-cases` | Develop or evaluate use case candidates |
| `interview-plan` | Create user interview guide |
| `interview-synthesis` | Analyze user interview notes |
| `competitive-analysis` | Map competitive landscape |
| `problem-validation` | Check problem hypothesis status |

## Usage Examples

```
/discovery-phase status
```
Shows Discovery phase progress against exit criteria.

```
/discovery-phase market-research
```
Research and identify AGI pill market opportunities.

```
/discovery-phase use-cases
```
Develop, evaluate, or prioritize use case candidates.

```
/discovery-phase interview-synthesis
[Paste interview notes here]
```
Synthesize user interview findings.

## Exit Criteria

Discovery is complete when:
- [ ] 10+ user interviews conducted
- [ ] 3+ validated problem statements
- [ ] Competitive analysis complete
- [ ] Market sizing estimated
- [ ] Primary use case selected

## Timeline

**Target**: Complete by February 10, 2026 (to allow PRD by Feb 15)
