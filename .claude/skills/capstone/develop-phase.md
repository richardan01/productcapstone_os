# Develop Phase - Build & Iterate

## Purpose

Execute Develop phase activities for the AI Capstone: build the prototype/MVP while maintaining quality and learning velocity.

## Context

Reference: `@context:agents/_shared/context`

**Phase Goal**: Complete working prototype by March 31, 2026.

## Inputs Required

- **Development focus**: Sprint planning, progress tracking, or technical decisions
- **Design specs**: PRD, architecture, feature specifications
- **Sprint info**: Current sprint, blockers, capacity

## Develop Phase Activities

### 1. Sprint Planning
- Define sprint goals aligned to MVP milestones
- Break features into stories/tasks
- Estimate and prioritize work
- Map dependencies
- Allocate capacity with buffer (20%)

### 2. Development Tracking
- Monitor sprint progress
- Identify and resolve blockers
- Track velocity and burndown
- Adjust scope as needed
- Maintain demo-readiness

### 3. Technical Decisions
- Evaluate technical approaches
- Document architecture decisions (ADRs)
- Assess build vs. buy options
- Manage technical debt
- Plan for AI model integration

### 4. Quality Assurance
- Define testing strategy
- Track bug/issue status
- Ensure acceptance criteria are met
- Plan for usability testing
- Validate AI behavior and edge cases

### 5. Integration & Demo
- Ensure components integrate
- Prepare demo for mentor/stakeholders
- Document known limitations
- Gather feedback for iteration
- Plan for deployment requirements

## Sprint Planning Template

```markdown
## Sprint [X] Plan - [Date Range]

### Sprint Goal
[One sentence describing what we'll achieve]

### Capacity
- Available days: [X]
- Capacity (with 20% buffer): [X] story points

### Sprint Backlog
| ID | Story | Points | Priority | Acceptance Criteria |
|----|-------|--------|----------|---------------------|
| [ID] | [Story] | [Pts] | P0/P1/P2 | [Criteria] |

### Dependencies
- [Dependency] - [Owner/Status]

### Risks
- [Risk] - [Mitigation]

### Definition of Done
- [ ] Code complete
- [ ] Tests passing
- [ ] Demo-ready
- [ ] Documentation updated
```

## Instructions

1. **Align with Design**
   - Reference PRD and feature specifications
   - Ensure stories trace to requirements
   - Maintain scope boundaries

2. **Execute Development Activity**
   - Use existing `/sprint-plan` patterns
   - Track progress with clear metrics
   - Document decisions and trade-offs

3. **Maintain Quality**
   - Balance speed with quality
   - Track technical debt
   - Ensure demo-readiness at all times

4. **Prepare for Deploy**
   - Consider production requirements early
   - Document operational needs
   - Plan for scaling and monitoring

## Output Format

```markdown
## Develop Phase Update - [Date]

### Current Sprint: Sprint [X]
**Goal**: [Sprint goal]
**Days Remaining**: [X]

### Progress Summary
| Metric | Value |
|--------|-------|
| Sprint Progress | [X]% |
| Stories Completed | [X]/[Total] |
| Story Points Done | [X]/[Total] |
| Blockers | [Count] |

### Completed This Period
- [x] [Feature/Task] - [Outcome]
- [x] [Feature/Task] - [Outcome]

### In Progress
| Item | Status | Blocker |
|------|--------|---------|
| [Story] | [%] | [None/Issue] |

### Blockers & Risks
| Blocker | Impact | Resolution Plan | ETA |
|---------|--------|-----------------|-----|
| [Issue] | H/M/L | [Plan] | [Date] |

### Technical Decisions Made
| Decision | Context | Choice | Trade-offs |
|----------|---------|--------|------------|
| [Topic] | [Why needed] | [What chosen] | [Pros/Cons] |

### AI Component Status
| Component | Status | Notes |
|-----------|--------|-------|
| [AI Feature] | [%] | [Details] |

### Phase Exit Criteria Progress
- [ ] Core MVP features complete ([X]/[Total])
- [ ] Technical milestones achieved ([List])
- [ ] Usability testing conducted ([X]/5 sessions)
- [ ] Known issues documented ([Yes/No])
- [ ] Demo-ready for stakeholders ([Yes/No])

### Timeline Status
**Days to MVP Deadline**: [X]
**MVP Completion**: [%]
**Status**: [On Track / At Risk / Behind]

### Demo Highlights
[What's ready to show this week]

### Mentor Discussion Topics
- [Technical decision to review]
- [Progress or blocker to discuss]

### Recommended Next Steps
1. [Priority action]
2. [Secondary action]
```

## Architecture Decision Record (ADR) Template

```markdown
## ADR-[XXX]: [Title]

### Status
[Proposed / Accepted / Deprecated / Superseded]

### Context
[What is the issue that we're seeing that motivates this decision?]

### Decision
[What is the change that we're proposing and/or doing?]

### Consequences
**Positive:**
- [Benefit 1]

**Negative:**
- [Trade-off 1]

**Risks:**
- [Risk 1]
```

## Quality Checks

- [ ] Sprint goals are clear and measurable
- [ ] Progress is accurately tracked
- [ ] Blockers have resolution plans
- [ ] Quality is not sacrificed for speed
- [ ] Demo preparation is ongoing
- [ ] AI components are being validated
- [ ] Technical debt is tracked

## Exit Criteria

Develop phase is complete when:
- [ ] Core MVP features complete
- [ ] Usability testing conducted (5 sessions)
- [ ] Known issues documented
- [ ] Demo-ready for stakeholders
- [ ] Ready to begin deploy/launch planning
