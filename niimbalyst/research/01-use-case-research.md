# Use Case Research — CrossFit vs Solar
> Phase: Discovery | Date: February 5, 2026 | PRD Deadline: February 15, 2026

---

## Use Case 1 — AI for Sports / CrossFit

### Problem Space
- Athletes struggle to optimize training programs
- Personalized coaching is expensive and inaccessible ($200–600/mo for 1:1)
- Recovery and injury prevention need better data analysis
- Competition preparation lacks AI-driven insights

### Potential AI Applications
- Personalized workout programming based on goals, fitness level, recovery
- Movement analysis and form correction using computer vision
- Nutrition and recovery optimization
- Competition strategy and performance prediction
- Community/social features with AI coaching

### Questions to Validate
- How do CrossFit athletes currently plan their training?
- What are the biggest pain points in self-coaching?
- Would athletes pay for AI-powered coaching?
- What data sources are available (wearables, gym data)?

### Market Considerations
- CrossFit community is passionate and engaged
- Growing fitness tech market
- Competition: Wodify, SugarWOD, TrainHeroic
- Differentiation opportunity with true AI personalization

---

## Use Case 2 — AI for Energy Industry / Solar

### Problem Space
- Solar installation sizing and ROI calculations are complex
- Energy consumption optimization is underutilized
- Grid integration and battery storage decisions need intelligence
- Maintenance and performance monitoring could be smarter

### Potential AI Applications
- Intelligent solar system sizing and financial modeling
- Predictive maintenance for solar installations
- Energy consumption optimization for homes/businesses
- Smart battery management and grid arbitrage
- Carbon footprint tracking and sustainability reporting

### Questions to Validate
- Who makes solar purchase decisions? (homeowners, businesses, installers)
- What's the current decision-making process?
- Where do people get stuck or make suboptimal choices?
- What data is available for AI to leverage?

### Market Considerations
- Growing renewable energy market
- Government incentives driving adoption
- Competition: Aurora Solar, EnergySage, various utility tools
- B2B vs B2C positioning decision needed

---

## 7 Use Cases Brainstormed (CrossFit-Specific)

| # | Use Case | Who it Helps | AI Angle |
|---|----------|-------------|---------|
| 1 | **Adaptive Class Programmer** | Head coach / affiliate owner | LLM Planner agent reads prior WODs, balances patterns; Critic agent checks CrossFit principles |
| 2 | **Coach Class Copilot** | On-floor coach during class | Roster agent + Scaling agent + Flow agent; multimodal with movement demo videos |
| 3 | **Athlete Daily Plan & Debrief** | Individual athlete in group classes | Planner personalizes intent/scaling; Reflection agent updates personal profile post-WOD |
| 4 | **Movement QA Micro-Coach** | Coaches & athletes | Pose-estimation CV + Technique agent maps joint angles to coaching language |
| 5 | **Load & Fatigue Sentinel** | Coaches managing frequent classes | Workload agent + Risk agent flags high-risk combinations |
| 6 | **Live Class Insights for Coaches** | On-floor coach | Monitors planned vs actual, learns patterns per coach/time slot |
| 7 | **Habit & Engagement Agent** | Athletes & owner | Engagement agent + Message agent drafts coach-branded outreach |

---

## Evaluation Framework: CrossFit vs Solar

| Criterion | CrossFit/Sports | Solar/Energy |
|-----------|----------------|-------------|
| Problem Severity | Medium-High | High |
| Market Size | Medium | Large |
| AI Advantage | **High** (personalization) | Medium-High |
| Feasibility (MVP) | **High** | Medium |
| Differentiation | **High** | Medium |
| **Weighted Total** | **3.75** | 3.65 |

**Decision: CrossFit selected** — higher AI advantage, faster MVP feasibility, passionate community for validation.

---

## Next Steps
- Research both markets — TAM/SAM/SOM analysis → see [market-research.md](02-market-research.md)
- Identify target users — who specifically would use this?
- Conduct quick interviews — 3-5 people in each domain
- Assess competition — what exists today?
- Evaluate AI advantage — why does this need AI vs. traditional software?
