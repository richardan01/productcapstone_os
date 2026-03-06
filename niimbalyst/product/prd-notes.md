# PRD Notes & Pivots — Niimbalyst
> Running log of product decisions, pivots, and updates

---

## PRD Completion Update (Feb 15, 2026)

**PRD Status**: COMPLETE — All 59 rows filled in Google Sheet
**Product**: AGI Pill — AI-Powered CrossFit Coach
**PRD Link**: Product Faculty AI PRD [Cohort 6 - Richard Constantine]

### 4D Phase Progress
| Phase | Status | Notes |
|-------|--------|-------|
| Discovery | **COMPLETE** | Use case selected, competitive analysis done, 5 pain points validated |
| Design | **COMPLETE** | Future workflow, wireframes, prototype plan, master prompt v1.0, evaluation criteria |
| Develop | **DOCUMENTED** | AI model selection (Claude 3.5 Sonnet), input/output specs, RAG architecture, test cases |
| Deploy | **DOCUMENTED** | Launch strategy (4 phases), success metrics, support plan, monitoring approach |

### MVP Scope Defined
- **Adaptive Workout Engine** — AI-generated daily workouts based on athlete profile + recovery
- **AI Coach Chatbot** — Conversational coaching via chat interface
- **Basic Athlete Dashboard** — Home, workout view, progress tracking

### Key Technical Decisions
| Decision | Choice |
|----------|--------|
| Primary LLM | Claude 3.5 Sonnet (best balance of capability, cost, latency) |
| RAG | Pinecone + text-embedding-3-small for CrossFit knowledge base |
| Wearable integrations | Apple Health, WHOOP, Garmin APIs |
| Pricing | Freemium + Pro ($19–29/mo) + Elite ($49–79/mo) |

### Success Targets (Month 3 — original)
- 1,000 paying users
- $20K MRR
- <5% monthly churn
- NPS > 40

### Next Steps
- User interviews (0/10 completed — highest priority)
- Create interactive prototype in lovable.dev
- Begin Develop phase — MVP implementation
- Schedule mentor sync with Migdad Jaffer

---

## Market Pivot (Feb 15, 2026)

**Target Market**: Singapore CrossFit Coaches + Athletes

### Primary Personas
**Coach Jason**
- CrossFit coach at Tanjong Pagar
- Manages 40 athletes, can only personally program for 12

**Wei Lin**
- 31yo Investment Banking Associate
- Trains 5x/week
- Wants competition prep but can't afford S$500/mo coaching

### Singapore Market
- 30+ CrossFit affiliates in Singapore
- 5,000–8,000 active CrossFit athletes
- Premium fitness market (S$500M+ industry)
- High tech adoption (90%+ smartphone penetration)
- SEA expansion potential: Malaysia, Thailand, Philippines

### Pivoted MVP Scope
- **AI Coaching Assistant** — Generates personalized programs using coach's methodology
- **Coach Dashboard** — Single view of all athletes with AI-generated insights
- **Athlete Communication Bot** — Handles routine questions, escalates complex ones

### Business Model
- **B2B**: Coach subscription S$99/mo + S$5/athlete
- **B2C**: Direct athlete subscription S$50–150/mo (Phase 2)

### Singapore-Specific Features
- Climate-adjusted recovery (32°C/90% humidity year-round)
- Local competition calendar (Singapore Throwdown, Rainmaker, Asia Championships)
- Singapore timezone support and localized content

### Success Targets (Month 3 — revised)
- 20 active coaches on platform
- 500 athletes coached via AI-assisted coaches
- S$10K MRR
- 6+ hours/week saved per coach

---

## Persona Refinement (Feb 15, 2026)

**Key Insight**: Athletes CAN afford premium coaching — they question the **VALUE**.

### Wei Lin's Real Frustration
- "I pay S$500/month but can't tell if my program is actually personalized"
- "Is this a copy-paste template or made for ME?"
- "I want to SEE the data and reasoning, not just trust blindly"

### New Pain Point: Quality Transparency Gap
- Singapore professionals are data-driven and skeptical
- They don't want CHEAPER coaching — they want **PROOF of value**
- Will pay premium if they can SEE personalization happening

### Product Implication: Transparency Features are Key Differentiator
- Show WHY each workout was selected
- Display how recovery data influenced today's program
- Visualize progress toward goals with AI explanations

---

## Competitive Intelligence (Feb 9, 2026)

### Direct Competitors
| Competitor | Note |
|-----------|------|
| WHOOP | Recovery/biometrics, has AI coach but no workout programming ($30/mo) |
| TrainHeroic | Team training platform, no AI personalization |
| Wodify | Gym management focused, not for self-coached athletes |
| FitBudd | Coach platform with AI, but built for coaches not athletes |
| Zing Coach | General fitness AI, not CrossFit-specific |

**Competitive Gap**: No competitor offers AI-powered, CrossFit-specific coaching for self-coached athletes with form analysis.

### Validated Problem Statements
- P1: Self-coached athletes plateau because generic programming doesn't address individual weaknesses — **VALIDATED**
- P2: Athletes can't see their own movement patterns and miss crucial form corrections — **VALIDATED**
- P3: Self-coached athletes struggle to distinguish pain vs injury risk without guidance — **VALIDATED**

**Problem Statement**: Self-coached CrossFit athletes struggle to make consistent progress because they lack personalized programming, can't see their own form errors, and have no guidance on managing pain vs. injury risk.
