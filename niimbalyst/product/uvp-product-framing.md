# CrossFit AGI Pill — UVP & Product Framing
> Build deadline: April 15, 2026

---

## Goal

Pursue the CrossFit movement analysis & improvement idea but make it feel like a true **AGI-style agentic product** — not just a pose-estimation demo. Define a sharp, defensible UVP and product concept buildable by April 15.

---

## Market Reality Check

There is already a rich ecosystem of AI tools around CrossFit and sports coaching:
- **WODVision** — AI-powered video movement analysis (squat, snatch, clean & jerk) with personalized feedback
- **GymScore** — AI-powered remote coaching with real-time form analysis, automated technique feedback, injury risk alerts
- **MotionAnalytics / Sency** — AI and biomechanics for multi-sport analysis from a single mobile camera
- **CrRETA** (CrossFit Remote Enhanced Training AI) — landmark and object detection for remote CrossFit coaching

**Conclusion**: "An app that analyzes CrossFit movement from video and suggests corrections" is **no longer unique**. Differentiation must come from how **intelligent, agentic, and integrated** the system is in the full coaching loop — not just the CV model.

---

## Shift the UVP: From "AI Form Checker" → "Session Intelligence Agent"

### Core UVP
> **"Your always-on CrossFit session intelligence agent that turns raw training videos into coach-ready insights, prioritized athlete issues, and actionable improvement plans — without replacing the coach."**

Rather than trying to be *the* AI coach, this system is a **coaching co-pilot** that:
- Watches every recorded session for an athlete (or group) and **detects, clusters, and prioritizes issues** across movements and WODs over time
- Generates **structured coach artifacts**: per-athlete issue lists, suggested cues, progression plans, and summary reports that plug directly into the coach's workflow (CoachRx/TrueCoach/Sheets/Notion)
- Acts as an **agent** that can autonomously fetch videos, run analysis, update dashboards, and draft feedback messages — under the coach's oversight

**The unique angle**: Not selling "better rep counting" — selling a **"movement intelligence layer"** that lives between raw videos and human coaching decisions.

---

## Product Concept: CrossFit Session Intelligence Agent

### Target Users
- **Primary**: Remote or hybrid CrossFit coaches who juggle 15–50+ clients, receive many training videos, and struggle to keep up with detailed form feedback
- **Secondary**: Serious CrossFit athletes who self-film and want data-backed feedback but still trust human coaches for nuance

### Job-to-Be-Done
> "When my athletes send me training videos, I want an assistant that pre-analyzes all reps, flags the most important issues, and drafts feedback and progress tracking for me — so I can coach more athletes at higher quality without burning out."

### High-Level System Behavior (Agentic)

**1. Ingest & Organize**
- Agent watches for new videos in a shared folder, app upload, or link list
- Tags each video with: athlete, date, WOD, movements, and context

**2. Analyze & Score**
- For each movement segment, runs movement analysis: basic pose/landmark inference, compares against simple templates or heuristics
- Generates rep-level or set-level scores (0–100 or traffic-light), focusing on safety and efficiency

**3. Summarize & Prioritize**
- Computes athlete-level summaries: top 3 issues (e.g., "early arm bend in cleans," "knees cave in on heavy back squats") with trend over last N sessions
- Groups similar issues across WODs so coaches see **patterns rather than isolated comments**

**4. Draft Coach Outputs**
- For each athlete, drafts:
  - Bullet-point feedback for the session
  - 1–2 key cues or drills to address recurring issues
  - Short progress note comparing to last week
- Drafts are editable and explicitly marked **"coach review required"**

**5. Coach Oversight & Automation Loop**
- Coaches review/edit feedback, approve, and send via existing channels
- Agent logs which feedback was used and can adjust tone/specificity
- Always **review-first, not fully autonomous**

---

## What Makes This an "AGI Pill" (Not Just CV)

1. **End-to-End Coaching Workflow Automation**
   - Manually reviewing videos: 5–10 min/video → caps coaches at ~20–30 clients
   - Agent compresses the feedback loop and scales coaches to many more athletes

2. **Multi-Step Reasoning & Tool Use**
   - Detect movement type → run appropriate checks → interpret scores over time → synthesize into coherent feedback and drill suggestions
   - LLM/agent acts as **planner and summarizer** over structured data from CV

3. **Persistent Memory and Athlete Models**
   - Each athlete has a profile: historic issues, previous feedback, injury history, performance bands for key WODs
   - Agent uses this memory to avoid repeating generic advice and to show concrete progress over time

4. **Human-in-the-Loop Safety & Trust**
   - AI framed as tool to **augment coaches and reduce busywork**, not replace them
   - Explicitly designed review-and-approve flows, clear confidence indicators, and easy overrides

5. **Interfaces & UX as First-Class**
   - The magic is not only the model — it's the **control surface**: how coaches see issues, drill suggestions, and athlete trajectories at a glance
   - Enables discussing product trade-offs, data visualization, and usability for non-technical coaches

---

## Three UVP Angles (Choose One as Main Story)

### UVP 1 — Prioritized Issue Feed for Coaches
> **"Stop drowning in athlete videos. Get a prioritized issue feed so you know exactly who needs what coaching today."**

- Agent ingests all athlete videos and ranks which athletes need attention (severity of detected issues + time since last feedback)
- Coach dashboard: Top 5 athletes to review, key issues per athlete, quick links to AI-drafted comments and drill suggestions
- **Differentiation**: Focus on coach attention allocation and scaling remote coaching businesses

### UVP 2 — Athlete Movement Story Over Time
> **"See your athletes' movement story — what's actually improving, and what's stuck — without manual spreadsheet work."**

- Agent builds longitudinal views: trendlines of form scores on key movements across weeks, highlighted "best rep" and "most problematic rep" clips
- **Differentiation**: Focus on progress proof and retention (showing coaches and athletes objective improvement)

### UVP 3 — Coach-Ready Feedback Drafts in One Click
> **"Go from 10 minutes of manual video review to 2 minutes of edit-and-send coaching feedback."**

- Agent turns each processed session into a draft feedback message: 2–3 observations, 1–2 prioritized cues, 1 short drill recommendation
- Coaches edit tone and details, then send via preferred channel
- **Differentiation**: Focus on saving coach time and enabling them to scale personal feedback

---

## What You Can Realistically Build by April 15

1. **Data Path & Simple CV**
   - Use existing pose-estimation models for a small set of key movements (squat, deadlift, snatch, clean)
   - Implement simple heuristics or rule-based checks (depth, knee valgus heuristic) rather than complex custom ML

2. **LLM-Based Reasoning Layer**
   - Convert raw pose/heuristic outputs into structured JSON describing potential issues
   - Feed into an LLM that produces: movement issue descriptions, prioritization, and suggested cues and drills

3. **Agent Loop & UI**
   - Small agent that watches a folder or upload UI for new videos, automatically processes them, saves results to database
   - Surfaces a coach dashboard with prioritized issues and feedback drafts
   - Implement one key UVP well enough to demo with 2–3 test athletes

4. **Evaluation & Story**
   - Run a tiny pilot with 1–2 coaches or serious athletes
   - Measure: time saved per video, perceived quality of AI drafts, perceived usefulness of prioritization
   - Prepare narrative around **workflow impact** rather than raw model accuracy

---

## One-Sentence UVP Candidates

- "An always-on CrossFit session intelligence agent that turns training videos into prioritized coaching insights and ready-to-send athlete feedback."
- "The movement intelligence layer for CrossFit coaches — watching every rep, surfacing the biggest issues, and drafting feedback while you focus on athletes."
- "From raw WOD videos to coach-ready cues and progress tracking, all powered by an agent that understands CrossFit and your athletes over time."
