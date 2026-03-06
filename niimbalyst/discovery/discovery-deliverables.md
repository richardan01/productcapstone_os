# Discovery Phase Deliverables
> Formal deliverables following the 4D Framework
> Date: February 25, 2026 | Status: Draft — Pending user interview validation

---

## 1. Business Value Map

### 1A. Market — AI Fitness & Wellness Technology
- AI fitness market: **$9.8B (2024)** → **$46B by 2034** (CAGR ~17%)
- AI fitness apps segment: **$23.98B by 2026**
- CrossFit community: **5M+ members globally**, 15,000+ affiliate gyms
- 50%+ of people say they would use AI for personal training

**Headwinds**:
- Saturated general fitness app market
- CrossFit brand/trademark complexity
- User skepticism about AI replacing human coaching expertise
- Complex multi-modal sport makes AI harder than single-domain fitness

**Tailwinds**:
- Major corporates entering AI fitness (Apple, Nike, Google/Fitbit, WHOOP)
- AI-guided training improved strength gains by **11–17%** vs static programs
- Post-COVID home/garage gym movement growing
- WHOOP is now official CrossFit wearable (data ecosystem emerging)
- 2026 CrossFit Open (Feb 26–Mar 16) creates urgency and awareness

**Market Growth Rate**: 15–20% annually in fitness tech

### 1B. Business Model
**Growth Stage**: Pre-launch startup / Capstone MVP

**Revenue Model**: B2B2C SaaS
- **Primary (B2B)**: Coach/box subscription — S$99/mo base + S$5/athlete/mo
- **Secondary (B2C)**: Direct athlete subscription at S$39–59/mo (future)
- B2B-first strategy: coaches as distribution channel to athletes
- Revenue scales with athlete count, not just box count

### 1C. Contrast — Blue Ocean Canvas

| Factor | Traditional Coaching | Online Programs (HWPO, CompTrain) | Tracking Apps (BTWB, SugarWOD) | Our AI Solution |
|--------|---------------------|---------------------------------|-------------------------------|----------------|
| **Price** | High ($200–600/mo) | Medium ($37–60/mo) | Low ($0–8/mo) | Medium (S$39–59/mo athlete) |
| **Personalization** | High (1:1) | None (static tracks) | None | High (AI-driven) |
| **Scalability for Coach** | Low (max ~15 athletes) | N/A | N/A | High (40+ athletes) |
| **Weakness Analysis** | Manual, intuition-based | None | Descriptive only | Prescriptive, data-driven |
| **Recovery Integration** | Manual check-ins | None | None | Wearable data auto-integrated |
| **Adaptation** | Slow (weekly/monthly) | None (same for all) | None | Real-time (per session) |

**Blue Ocean Strategy**:
- **Eliminate**: High per-athlete time cost for coaches
- **Reduce**: Price barrier to personalized programming (from $200–600 to $39–59)
- **Raise**: Personalization quality at scale (AI enables 1:1 quality for all athletes)
- **Create**: Coach-as-curator model (AI generates, coach refines), wearable-to-programming pipeline

---

## 2. Feature Value Map

### Customers/Buyers
| Segment | Role | Decision Factor |
|---------|------|----------------|
| **CrossFit Box Owners/Coaches** (Primary buyer) | Purchase decision-maker, daily user | ROI on athlete retention, time saved on programming |
| **CrossFit Athletes** (End user) | Consumer of personalized programming | Quality of programming, perceived progress, price vs. human coach |

**Most Important User**: Coach Jason (primary) — he is both the buyer and the distribution channel to athletes.

### Core Features Mapped to User Needs
| Feature | Coach Jason's Need | Wei Lin's Need |
|---------|-------------------|----------------|
| **AI Workout Generator** | Personalize for 40 athletes without 40x the work | Get programming that fits MY weaknesses, not a generic template |
| **Weakness Assessment Engine** | Systematically track where each athlete is at | Know what to focus on with data, not guesswork |
| **Recovery-Aware Programming** | Prevent injuries, adjust load for fatigued athletes | Stop getting hurt from overtraining |
| **Coach Override Dashboard** | Stay in control — AI augments, doesn't replace | Know my coach is still involved |
| **Workout Logging** | See what athletes actually did vs. prescribed | Track my progress and see improvement |

---

## 3. User Value Map

### 3A. User Journey — Coach Jason (Head Coach, 40 athletes)

| Stage | Activities | Thinks | Feels | Pain Points |
|-------|-----------|--------|-------|-------------|
| **Weekly Planning** | Reviews last week's data, plans next week | "I need to balance strength, metcons, and skills across the week" | Overwhelmed | Spends 6–10 hrs/week on programming; can't personalize beyond 2–3 tracks |
| **Programming** | Writes WODs, sets scaling options | "I know athlete X needs more gymnastics but I can't write a separate program" | Guilty | Copy-paste programming; athletes fall through cracks |
| **Class Delivery** | Coaches the class, observes athletes | "Wei Lin is struggling but I can't stop class to adjust" | Torn | Real-time adjustments are impossible at scale |
| **Athlete Check-ins** | Reviews athlete progress, responds to questions | "Did the programming actually work for them?" | Uncertain | No systematic way to track 40 athletes' progress |
| **Retention** | Monitors satisfaction, handles churn | "I lost 3 athletes to an online coach last month" | Frustrated | Athletes leave for HWPO/CompTrain because programming isn't personalized enough |

### 3B. User Journey — Wei Lin (31yo banker, recreational CrossFit athlete)

| Stage | Activities | Thinks | Feels | Pain Points |
|-------|-----------|--------|-------|-------------|
| **Goal Setting** | Wants to improve for the Open, get first muscle-up | "I want to compete but I don't know how to structure my training" | Motivated but lost | No structured plan; following generic class WODs |
| **Daily Training** | Shows up to class, sometimes adds accessory work | "Am I even working on the right things?" | Uncertain | Defaults to strengths (lifting) instead of weaknesses (gymnastics, endurance) |
| **Self-Assessment** | Tries to figure out weaknesses | "I think my engine is weak but I'm not sure" | Frustrated | No data-driven way to identify top weaknesses across 10 fitness domains |
| **Recovery** | Tracks sleep on WHOOP, ignores the data | "My recovery score is 40% but I'm going to train anyway" | Conflicted | Wearable data sits in a silo; doesn't connect to training decisions |
| **Progress Review** | Looks back at the month | "I've been working hard but my Fran time hasn't improved" | Defeated | No feedback loop between programming and outcomes; plateau for months |

### 3C. Pain Points (Consolidated)

| ID | Pain Point | Persona | Frequency | Severity | Priority |
|----|-----------|---------|-----------|---------|---------|
| PP1 | Can't personalize programming beyond ~15 athletes | Coach Jason | Daily | High | **Critical** |
| PP2 | No systematic weakness tracking across roster | Coach Jason | Weekly | High | **Critical** |
| PP3 | Athletes leave for online coaches with more personalization | Coach Jason | Monthly | High | **High** |
| PP4 | Plateau from following generic programming | Wei Lin | Ongoing | High | **Critical** |
| PP5 | Weakness identification is guesswork, not data-driven | Wei Lin | Weekly | Medium-High | **High** |
| PP6 | Recovery data doesn't influence training decisions | Wei Lin | Daily | Medium | **Medium** |
| PP7 | No feedback loop between workouts done and future programming | Both | Weekly | High | **High** |

### 3D. AI Suitability Assessment

| Pain Point | AI Pattern | Input | AI Processing | Output |
|-----------|-----------|-------|--------------|--------|
| PP1: Can't personalize at scale | Scaling Pattern | Coach's methodology + 40 athlete profiles | Generate individualized WODs from coach's programming philosophy | 40 personalized daily workouts in coach's style |
| PP2: No systematic weakness tracking | Expertise Pattern | Workout logs, benchmark scores, movement assessments | Analyze patterns, identify gaps, compare against domain benchmarks | Per-athlete weakness report with top 3 areas to target |
| PP4: Plateau from generic programming | Expertise + Scaling | Athlete's training history, goals, current levels, weaknesses | Design progressive programming targeting weaknesses | Periodized program adapted weekly based on logged performance |
| PP5: Weakness ID is guesswork | Expertise Pattern | Benchmark scores, workout results, movement competency ratings | Cross-reference performance across all 10 CrossFit domains | Data-backed weakness ranking with confidence scores |
| PP6: Recovery data siloed | Combination Pattern | Wearable data (HRV, sleep, strain) + training load history | Correlate recovery metrics with training volume, flag overtraining risk | Adjusted workout intensity for the day |
| PP7: No feedback loop | Consistency Pattern | Prescribed workout + actual results logged | Compare intended vs. actual stimulus, track progressive overload | Next session auto-adjusted; coach dashboard shows adaptation trends |

**Prioritization (Frequency × Severity)**:
1. PP1 + PP4 (Scaling + Expertise) — **Highest priority, core MVP**
2. PP2 + PP5 (Expertise) — **High priority, key differentiator**
3. PP7 (Consistency) — **High priority, feedback loop**
4. PP6 (Combination) — **Medium priority, defer wearable integration to v2**

---

## 4. AI Solution Hypothesis

### "How Might We" Ideas
1. HMW help coaches personalize programming for 40+ athletes without 40x the work?
2. HMW give athletes data-driven weakness analysis without expensive 1:1 coaching?
3. HMW connect recovery data to daily training decisions automatically?
4. HMW create a feedback loop between workout performance and future programming?
5. HMW preserve coach expertise and methodology while scaling with AI?
6. HMW make competition preparation accessible to recreational athletes?

### Prioritization Matrix

| Idea | User Impact | Business Impact | Technical Feasibility | Priority |
|------|------------|-----------------|----------------------|---------|
| AI-generated personalized WODs (coach's methodology) | High | High (core value prop) | High (LLM + structured prompts) | **P0** |
| Data-driven weakness analysis across 10 domains | High | High (differentiator) | High (scoring algorithm + LLM) | **P0** |
| Workout logging with AI adaptation | High | High (retention) | Medium-High | **P0** |
| Coach override dashboard | Medium | High (B2B trust) | High | **P1** |
| Recovery/wearable integration | Medium | Medium | Low (API complexity) | **P2 (defer)** |
| Competition periodization | Medium | Medium | Medium | **P2 (defer)** |

---

## 5. AI Opportunity Statement

> Our business operates in the **AI fitness technology** industry and creates value by **enabling CrossFit coaches to deliver truly personalized programming at scale through AI**.
>
> Our product offers **AI-powered workout generation, weakness analysis, and adaptive programming** that meets the needs of **CrossFit coaches managing 15+ athletes and goal-oriented athletes seeking personalized training**.
>
> These users — primarily **coaches like Jason** (who struggle to personalize beyond 15 athletes) and **athletes like Wei Lin** (who plateau on generic programming) — experience **inability to scale personalization, guesswork-based weakness assessment, and no feedback loop between training and results** as they try to achieve **better athletic outcomes and sustainable coaching businesses**.
>
> We propose an AI-powered solution that **generates individualized daily programming from the coach's methodology, identifies athlete weaknesses across all 10 CrossFit fitness domains, and adapts programming based on logged performance** — delivering value to **coaches** (who retain more athletes with less time spent) and **athletes** (who get personalized coaching quality at a fraction of 1:1 pricing).

---

## 6. Validation Status

| Hypothesis | Desk Research | User Interviews | Overall Status |
|-----------|--------------|----------------|---------------|
| Self-coached athletes plateau on generic programming | **VALIDATED** (60–70% HWPO users scale) | Pending (0/10) | Partially validated |
| No AI exists for CrossFit-specific personalization | **VALIDATED** (competitive analysis confirms gap) | Pending | Partially validated |
| Coaches can't personalize beyond ~15 athletes | **VALIDATED** (industry standard) | Pending (0/5 coach interviews) | Partially validated |
| Athletes would pay $39–59/mo for AI coaching | **VALIDATED** (pricing gap exists, 50%+ willingness) | Pending | Partially validated |
| AI can improve training outcomes | **VALIDATED** (11–17% strength gains in studies) | N/A | Validated (external) |
| Recovery data integration is a differentiator | **VALIDATED** (WHOOP data siloed) | Pending | Partially validated |

### What Interviews Need to Confirm
1. **Problem severity** — Is the pain real enough that coaches/athletes will change behavior?
2. **Willingness to pay** — Actual price sensitivity (S$99/mo coach, S$39–59/mo athlete)
3. **Trust in AI** — Will coaches trust AI-generated programming? Will athletes?
4. **Coach override importance** — Must coaches be able to edit AI output before athletes see it?
5. **Current workarounds** — What are they doing today and how much are they spending?

---

## 7. Discovery Exit Criteria

| Criteria | Status | Evidence |
|---------|--------|---------|
| User interviews (target: 10+) | **0/10** | Interview guide ready (coach + athlete templates) |
| Validated problem statements (3+) | **3/3 (desk research)** | PP1, PP4, PP5 validated via secondary sources |
| Competitive analysis | **Complete** | Detailed in market research deep dive |
| Market sizing | **Complete** | TAM/SAM documented |
| Primary use case selected | **Complete** | UC-001: AI CrossFit Coaching (Feb 9) |
| Business Value Map | **Complete** | Documented above |
| User Value Map | **Complete** | Journey + Pain Points + AI Suitability mapped above |
| AI Opportunity Statement | **Complete** | Documented above |

**Remaining Gap**: User interviews (0/10) — the only remaining deliverable. All other Discovery artifacts are drafted and ready for validation.

*Last Updated: February 25, 2026*
