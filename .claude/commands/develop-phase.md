# /develop-phase

> Execute Develop phase activities for the AI Capstone - sprint planning, development tracking, and technical decisions.

## Routing

Execute this skill by combining:
1. **Agent persona**: `@capstone-agent`
2. **Skill instructions**: `skills/capstone/develop-phase.md`
3. **User context**: `agents/_shared/context.md`

## What This Does

Helps with Develop phase activities:
- Sprint planning and goal setting
- Development progress tracking
- Technical decision documentation
- Quality assurance and testing
- Demo preparation

## Quick Use

Run `/develop-phase` and specify what you need:

| Action | Description |
|--------|-------------|
| `status` | Current sprint and development progress |
| `sprint-plan` | Plan the next sprint |
| `progress` | Update progress on current sprint |
| `blocker` | Document and plan around blockers |
| `technical-decision` | Document an architecture decision |
| `demo-prep` | Prepare for stakeholder demo |
| `usability-test` | Plan or synthesize usability testing |

## Usage Examples

```
/develop-phase status
```
Shows current sprint progress and MVP completion status.

```
/develop-phase sprint-plan
```
Plan the next development sprint with goals and stories.

```
/develop-phase progress
```
Update progress on current sprint items.

```
/develop-phase technical-decision
[Describe the decision needed]
```
Document an architecture decision record (ADR).

```
/develop-phase demo-prep
```
Prepare demo highlights for stakeholders.

## Sprint Structure

- **Sprint Length**: 1-2 weeks recommended
- **Capacity Buffer**: 20% for unknowns
- **Demo Cadence**: End of each sprint

## Exit Criteria

Develop is complete when:
- [ ] Core MVP features complete
- [ ] Usability testing conducted (5 sessions)
- [ ] Known issues documented
- [ ] Demo-ready for stakeholders

## Timeline

**MVP Deadline**: March 31, 2026
