# Design Phase - Solution Architecture & PRD

## Purpose

Execute Design phase activities for the AI Capstone: translate validated problems into a solution design and comprehensive PRD that leverages AI capabilities effectively.

## Context

Reference: `@context:agents/_shared/context`

**Phase Goal**: Complete PRD by February 15, 2026.

## Inputs Required

- **Design focus**: What aspect of design to work on
- **Discovery findings**: Validated problems, use cases, user research
- **Constraints**: Technical, timeline, or resource constraints

## Design Phase Activities

### 1. Solution Ideation
- Generate solution concepts for validated problems
- Evaluate AI/AGI approaches vs. traditional solutions
- Assess technical feasibility
- Select solution direction
- Document why AI is essential (not optional)

### 2. Product Architecture
- Define high-level system architecture
- Identify AI/ML components and their roles
- Map data requirements and flows
- Document technical decisions
- Consider build vs. buy for AI components

### 3. Feature Specification
- Define MVP feature set
- Write user stories with acceptance criteria
- Prioritize using RICE framework
- Define scope boundaries (in/out)
- Map feature dependencies

### 4. User Experience Design
- Create user flows for core journeys
- Design key interactions
- Consider AI-specific UX patterns:
  - Handling uncertainty/confidence
  - Explaining AI decisions
  - Graceful degradation
  - User control and override
- Plan for edge cases and errors

### 5. PRD Development
- Compile comprehensive PRD with all sections
- Include problem, solution, requirements, metrics
- Define success criteria
- Document risks and mitigations
- Prepare for mentor/evaluator review

## PRD Template

```markdown
# Product Requirements Document
## [Product Name] - AGI Pill

### 1. Overview
**Product Vision**: [One paragraph describing the product vision]
**Target User**: [Primary user persona]
**Problem Statement**: [Validated problem from Discovery]

### 2. Background & Context
**Market Opportunity**: [TAM/SAM/SOM from Discovery]
**Competitive Landscape**: [Key competitors and differentiation]
**Why Now**: [Market timing and trends]
**Why AI**: [Why this requires AI/AGI capabilities]

### 3. Goals & Success Metrics
| Metric | Target | Measurement |
|--------|--------|-------------|
| North Star | [Value] | [How measured] |
| Supporting | [Value] | [How measured] |

### 4. User Stories & Requirements

**Epic 1: [Core Capability]**
| ID | User Story | Priority | Acceptance Criteria |
|----|------------|----------|---------------------|
| US-001 | As a [user], I want [action] so that [benefit] | P0/P1/P2 | [Criteria] |

### 5. Solution Architecture
**System Overview**: [Diagram or description]
**AI Components**:
- [Component 1]: [Purpose and approach]
- [Component 2]: [Purpose and approach]

**Data Requirements**:
- Input data: [What data is needed]
- Training data: [If applicable]
- Output data: [What is produced]

### 6. User Flows
[Core user journeys with key screens/interactions]

### 7. Scope
**In Scope (MVP)**:
- [Feature 1]
- [Feature 2]

**Out of Scope (Future)**:
- [Feature X]
- [Feature Y]

### 8. Technical Considerations
- **Dependencies**: [External services, APIs]
- **Constraints**: [Technical limitations]
- **Build vs Buy**: [Decisions on components]

### 9. Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| [Risk] | H/M/L | H/M/L | [Plan] |

### 10. Timeline
| Milestone | Target Date | Deliverable |
|-----------|-------------|-------------|
| PRD Complete | Feb 15, 2026 | This document |
| MVP Complete | Mar 31, 2026 | Working prototype |
| Final Submission | Apr 15, 2026 | Presentation |

### 11. Open Questions
- [Question needing resolution]

### 12. Appendix
- User Research Summary
- Competitive Analysis
- Technical Spike Results
```

## Instructions

1. **Review Discovery Foundation**
   - Ensure validated problems are the basis
   - Reference user personas and JTBD
   - Consider competitive insights

2. **Execute Design Activity**
   - Based on request, execute appropriate activity
   - Leverage `@product-manager` patterns for PRD work
   - Apply AI-native thinking throughout

3. **Validate Design Decisions**
   - Check alignment with discovery findings
   - Consider mentor feedback
   - Plan for user validation if time permits

4. **Document Progress**
   - Update design artifacts
   - Track decisions and rationale
   - Flag items for mentor review

## Output Format

```markdown
## Design Phase Update - [Date]

### Current Focus
[What design activity was performed]

### Design Decisions Made
| Decision | Options Considered | Choice | Rationale |
|----------|-------------------|--------|-----------|
| [Topic] | [A, B, C] | [Selected] | [Why] |

### AI/AGI Approach
**Selected AI Capabilities:**
- [Capability 1]: [How it's used]
- [Capability 2]: [How it's used]

**Why AI-Native:**
[Explanation of why this solution requires AI vs. traditional approach]

### Feature Specification Status
| Feature | Priority | Status | User Story |
|---------|----------|--------|------------|
| [Feature] | P0/P1/P2 | Specified/In Progress | [Brief] |

### PRD Progress
- [ ] Overview & Vision ([%])
- [ ] User Stories ([X]/[Total])
- [ ] Architecture ([%])
- [ ] User Flows ([X]/5)
- [ ] Scope Definition ([%])
- [ ] Risks & Mitigations ([%])

### Phase Exit Criteria Progress
- [ ] Solution architecture documented ([Yes/No])
- [ ] MVP features defined and prioritized ([X]/[Total])
- [ ] User flows created for core journeys ([X]/5)
- [ ] PRD draft complete ([%])
- [ ] Design validated with users ([X]/5 tests)

### Timeline Status
**Days to PRD Deadline**: [X]
**PRD Completion**: [%]
**Status**: [On Track / At Risk / Behind]

### Open Questions
- [Question needing resolution]

### Mentor Discussion Topics
- [Design decision to review with Migdad]

### Recommended Next Steps
1. [Priority action]
2. [Secondary action]
```

## Quality Checks

- [ ] Design traces back to validated discovery insights
- [ ] AI capabilities are clearly justified (not just nice-to-have)
- [ ] MVP scope is realistic for timeline
- [ ] User experience considers AI-specific patterns
- [ ] Technical feasibility is assessed
- [ ] PRD is comprehensive but concise
- [ ] Risks are identified with mitigations

## Exit Criteria

Design phase is complete when:
- [ ] PRD submitted by Feb 15, 2026
- [ ] Solution architecture documented
- [ ] MVP features defined and prioritized
- [ ] User flows created for core journeys
- [ ] Ready to begin development
