# User Interview Guide — Coach & Athlete
> Interviewer: Richard Constantine
> Phase: Discovery → Develop (ongoing validation)
> Target: 5–10 conversations (mix of coaches + athletes), 15–20 minutes each
> Personas: Coach Jason (scales 40 athletes), Wei Lin (31yo banker/athlete)

---

## Problem Hypotheses to Validate

### Coach Hypotheses
| ID | Hypothesis | Signal We're Looking For |
|----|-----------|------------------------|
| HC1 | Coaches can't personalize programming at scale beyond ~15 athletes | Time pressure, copy-paste programming, athletes falling through cracks |
| HC2 | Coaches lack tools to systematically track individual athlete weaknesses across a roster | Spreadsheets, memory-based, inconsistent assessment methods |
| HC3 | Coaches lose athletes (and revenue) because they can't deliver enough personalization | Athlete churn, complaints about generic programming, price sensitivity |
| HC4 | Coaches would adopt AI if it reduces programming time without sacrificing professional judgment | Willingness to review/approve AI output |
| HC5 | Athletes would pay for AI personalization if credibility signals are strong (coach-reviewed, results-backed) | Trust signals, price sensitivity |

### Athlete Hypotheses
| ID | Hypothesis | Signal We're Looking For |
|----|-----------|------------------------|
| HA1 | Self-coached athletes plateau because they can't objectively assess and adjust their programming | Frustration with stalled progress, lack of feedback loops, guessing at what to change |
| HA2 | Athletes waste training time on wrong movements because they lack data-driven weakness analysis | Time spent on strengths vs weaknesses, surprise at competition results |
| HA3 | Recovery and injury prevention are guesswork — athletes under/over-train because they lack personalized signals | Injuries from overtraining, feeling run down, no system for load management |

---

# PART A: COACH INTERVIEW TEMPLATE

## A1. Intro Scripts

**In person:**
> "Hey [Name], I'm working on a product management project exploring how CrossFit coaches handle programming across their roster. I'm trying to understand what's genuinely hard about personalizing at scale. Not selling anything — just want to learn from someone who does it daily. Got 15 minutes?"

**Via text / DM:**
> "Hey [Name]! Quick favor — I'm doing a PM project studying how CrossFit coaches manage personalized programming for their athletes. Not selling anything, just research. Could I grab 15 min this week to hear what's actually hard about it?"

**If they ask "what product?":**
> "Still in research mode — figuring out if there's a real problem worth solving. Your day-to-day experience is way more valuable than my assumptions."

## A2. Screening Questions
| Question | Looking For | Disqualify If... |
|---------|------------|-----------------|
| "How many athletes do you actively program for?" | 10+ athletes | Fewer than 5 or no programming responsibility |
| "Do you write individualized programs or run everyone on the same track?" | Some individualization attempt | Zero interest in personalization |
| "How long have you been coaching CrossFit?" | 2+ years | Less than 1 year |

**Good candidates**: Head programmers, box owners who also coach, online coaches managing remote athletes.

## A3. Core Questions

### Warm-Up (2 min)
**CQ1**: "Walk me through how you build programming for your athletes in a typical week."
- Listen for: time spent, process, tools used
- Follow-up: "How many hours a week does programming take you?"

**CQ2**: "How do you handle the difference between your strongest and weakest athletes?"
- Listen for: scaling approach, individualization depth
- Follow-up: "Is that working, or do people fall through the cracks?"

### HC1: Scaling Personalization (5 min)
**CQ3**: "At what point did you hit a wall with personalizing programming? What does that wall look like?"
- Listen for: specific athlete count, time constraints, quality trade-offs
- Follow-up: "What did you have to give up?"

**CQ4**: "If an athlete came to you and said 'I want a program built just for me,' what would you say?"
- Follow-up: "How much would you need to charge to make it worth your time?"

**CQ5**: "How do you decide who gets more attention in your programming?"
- Listen for: competition athletes vs paying more vs squeaky wheel

### HC2: Tracking Athlete Weaknesses (4 min)
**CQ6**: "How do you track each athlete's strengths and weaknesses across your roster?"
- Listen for: spreadsheets, memory, apps, no system at all
- Follow-up: "How confident are you in those assessments?"

**CQ7**: "When an athlete asks 'what should I work on?' — how do you answer?"
- Listen for: data-driven vs intuition
- Follow-up: "How long does that take per athlete?"

**CQ8**: "Have you ever been surprised by an athlete's performance — better or worse than expected?"
- Listen for: blind spots in assessment, missed signals

### HC3: Retention & Revenue (4 min)
**CQ9**: "Have you lost athletes because they felt the programming wasn't personalized enough?"
- Listen for: churn stories, athlete complaints
- Follow-up: "What did they switch to?"

**CQ10**: "How do you handle athletes who are also following an outside program (HWPO, CompTrain, etc.)?"

**CQ11**: "If you could offer truly personalized programming to every athlete without extra time, how would that change your business?"
- Listen for: pricing potential, retention impact, scaling dreams

### AI Coaching Angle (March 2026 update)
- "If a tool automatically suggested programming adjustments based on each athlete's performance history, how would you use it? Would you override it? Under what conditions?"
- "What athlete data do you currently track? What would you track if it were effortless?"
- "Would you send an AI-generated program to an athlete without reviewing it first? What would need to be true for you to trust it?"
- "At what price point does an AI coaching assistant feel like a no-brainer vs. a risk?"

## A4. Follow-Up Probes

**When they mention time pressure:**
- "How many hours would you save if this were automated?"
- "What would you do with that time back?"

**When they mention tools/software:**
- "What's your current stack? (Wodify, SugarWOD, spreadsheets?)"
- "What's the biggest gap in your current tools?"
- "How much are you paying for those tools?"

**When they mention athlete retention:**
- "Roughly what does losing one athlete cost you per month?"
- "What's your current athlete-to-coach ratio?"

## A5. Closing

**Magic wand question:**
> "If you could wave a magic wand and fix one thing about how you manage programming across your roster, what would it be?"

**Pricing signal:**
> "If a tool could give each of your athletes a personalized program based on your coaching methodology — not replacing you, augmenting you — what would that be worth per athlete per month?"

**Ask for referrals.**

---

# PART B: ATHLETE INTERVIEW TEMPLATE

## B1. Intro Scripts

**In person / at the gym:**
> "Hey [Name], I'm working on a product management project focused on how athletes manage their training. I'm trying to understand what's actually hard about getting the right programming for you. Not selling anything — I just want to hear what sucks. Got 15 minutes after the WOD?"

**Via text / DM:**
> "Hey [Name]! Quick favor — I'm doing a PM project studying how CrossFit athletes handle their programming. Not selling anything, just trying to understand what's actually frustrating. Could I grab 15 min this week?"

## B2. Screening Questions
| Question | Looking For | Disqualify If... |
|---------|------------|-----------------|
| "How long have you been doing CrossFit?" | 1+ years | Less than 6 months |
| "Do you follow your own programming, a coach's program, an online program, or just class WODs?" | Any self-direction or desire for more | Exclusively class WODs with no interest in more |
| "Do you have specific goals you're training toward?" | Goal-oriented mindset | "I just show up" with no desire for more |

**Good candidates**: Self-programmers, online program followers (CompTrain, HWPO, Mayhem), competitive/aspiring competitive, supplementing class work.

## B3. Core Questions

### Warm-Up (2 min)
**AQ1**: "Walk me through how you decide what to work on in a given week."
- Follow-up: "How much is planned vs figuring it out day-of?"

**AQ2**: "What does a really good training week look like vs a wasted one?"

### HA1: Programming & Plateaus (5 min)
**AQ3**: "Tell me about the last time you felt stuck — like you weren't improving."
- Follow-up: "What did you do about it?"

**AQ4**: "After a training cycle, how do you know if the programming worked?"
- Follow-up: "What would make you feel confident you're on the right program?"

**AQ5**: "Ever looked back at a month and realized you were doing the wrong thing?"

**AQ6**: "When a lift isn't going up or a skill isn't clicking, what do you do?"
- Follow-up: "How do you figure out WHY it's not working?"

### HA2: Weakness Identification (4 min)
**AQ7**: "Rank your top 3 weaknesses right now. How do you know those are your weaknesses?"
- Listen for: data-backed vs vibes-based
- Follow-up: "Has that assessment ever been wrong?"

**AQ8**: "How do you decide how much time to spend on weaknesses vs strengths?"

**AQ9**: "Last Open or competition — any results that surprised you?"
- Follow-up: "Could you have predicted that with better tracking?"

### HA3: Recovery & Injury Prevention (4 min)
**AQ10**: "How do you decide whether to push through or take a rest day?"
- Follow-up: "How often do you get that wrong?"

**AQ11**: "Tell me about your last injury or close call. Did you see it coming?"

**AQ12**: "Do you track recovery — sleep, soreness, HRV? What do you do with the data?"
- Follow-up: "Does tracking actually help, or is it just data?"

### Coaching Relationship (3 min)
**AQ13**: "How personalized does your current programming feel? Scale of 1–10."
- Follow-up: "What would a 10 look like?"

**AQ14**: "Have you ever looked into 1:1 online coaching? What stopped you?"
- Follow-up: "What would you be willing to pay for truly personalized programming?"

### AI Coaching Angle (March 2026 update)
- "If an app could analyze your training history and tell you exactly which movements are holding back your fitness, would you trust it? What would make it more or less credible?"
- "Would you follow an AI-generated program if your coach was still reviewing or approving it?"
- "If AI coaching gave you 80% of the personalization of a $300/mo human coach for $40/mo, would you switch? What's your hesitation?"
- "What would make you stop using an AI coaching app after 30 days?"

## B4. Closing

**Magic wand question:**
> "If you could wave a magic wand and fix one thing about how you manage your training, what would it be?"

**Pricing signal:**
> "If an AI tool could give you a personalized program each week — adapted to your weaknesses, recovery, and goals — what would you expect to pay for that?"

**Ask for referrals.**

---

# Quick Async Versions

### For Coaches
- **A**: "How do you handle programming differently for your top athletes vs the rest of the class? What breaks when you try to personalize for everyone?"
- **B**: "What tools or systems do you use to track where each athlete is at? Is it working or held together with duct tape?"
- **C**: "Have you ever lost an athlete to an online coaching program? What were they looking for that you couldn't offer?"

### For Athletes
- **A**: "When you're programming for yourself or following an online program, how do you know if it's actually working?"
- **B**: "How do you figure out what your biggest weaknesses are? Gut feel, comp results, testing, or something else?"
- **C**: "How do you decide when to push hard vs back off? System or mostly feel?"
- **D**: "What's the most frustrating thing about managing your own training? The thing that makes you think 'there has to be a better way.'"

*Follow any response with: "Interesting — tell me more about that"*

---

# Post-Interview Templates

## Coach Post-Interview (#X — [Name/Alias])
**Date** / **Duration** / **Format**: [In-person / Call / Text]

**Profile**: Coaching experience | Box/gym | Roster size | Programming approach | Tools used

| Hypothesis | Result | Key Quote | Evidence |
|-----------|--------|----------|---------|
| HC1: Scaling personalization | Confirmed / Partial / Not | "" | |
| HC2: Tracking weaknesses | Confirmed / Partial / Not | "" | |
| HC3: Retention & Revenue | Confirmed / Partial / Not | "" | |

**Signals**: Pain level (1–10) | Hours/week on programming | Current tool spending | Willingness to pay ($/athlete/mo) | Magic wand answer | Referrals

## Athlete Post-Interview (#X — [Name/Alias])
**Date** / **Duration** / **Format**: [In-person / Call / Text]

**Profile**: CF experience | Approach | Level | Goals | Gym

| Hypothesis | Result | Key Quote |
|-----------|--------|----------|
| HA1: Programming & plateaus | Confirmed / Partial / Not | "" |
| HA2: Weakness identification | Confirmed / Partial / Not | "" |
| HA3: Recovery & injury | Confirmed / Partial / Not | "" |

**Signals**: Personalization rating (1–10) | Willingness to pay | Current spending | Tools used | Magic wand answer | Referrals

---

# Cross-Interview Synthesis Template (After 5–10 Conversations)

### Coach Hypothesis Scorecard
| Hypothesis | Confirmed | Partial | Not Confirmed | Confidence |
|-----------|---------|-------|--------------|-----------|
| HC1: Scaling personalization | /X | /X | /X | |
| HC2: Tracking weaknesses | /X | /X | /X | |
| HC3: Retention & revenue | /X | /X | /X | |
| HC4: AI adoption conditions | /X | /X | /X | |
| HC5: AI trust signals | /X | /X | /X | |

### Athlete Hypothesis Scorecard
| Hypothesis | Confirmed | Partial | Not Confirmed | Confidence |
|-----------|---------|-------|--------------|-----------|
| HA1: Programming & plateaus | /X | /X | /X | |
| HA2: Weakness identification | /X | /X | /X | |
| HA3: Recovery & injury | /X | /X | /X | |

### Key Analysis
- **Strongest Problem — Coach Side:**
- **Strongest Problem — Athlete Side:**
- **Do Coach and Athlete Pain Points Align?**
- **Pricing Signals**: Coach WTP (per athlete/mo) vs Athlete WTP (per month)
- **B2B vs B2C signal strength:**
- **Surprises:**
- **Best Quotes for Presentation:**
- **MVP Validation**: Does the proposed MVP solve the #1 pain point?
- **Scope adjustments needed:**

---

# Anti-Patterns

| Don't | Do |
|-------|-----|
| "Would you use an app that..." | "How do you handle [problem] today?" |
| "What features would you want?" | "What's the hardest part?" |
| Leading questions | Neutral: "Tell me about..." |
| Talking 50%+ of the time | Listening 70%+, short follow-ups |
| Accepting "yeah it's fine" | "Walk me through the last time..." |

---

# Logistics Checklist

### Coaches (target: 3–5)
- [ ] Identify 3–5 coach candidates from Singapore CrossFit boxes
- [ ] Mix: 1 box owner, 1 head programmer, 1 online coach
- [ ] Schedule interviews
- [ ] Complete interviews
- [ ] Fill post-interview templates

### Athletes (target: 5–7)
- [ ] Identify 5–7 athlete candidates
- [ ] Mix: 1 competitive, 1 self-programmed, 1 online program follower, 1 recreational goal-oriented
- [ ] Schedule interviews
- [ ] Complete interviews
- [ ] Fill post-interview templates

### General
- [ ] Complete synthesis after all interviews
- [ ] **NEVER** describe the product concept during interviews

*Last Updated: February 25, 2026 (AI coaching angle added March 2026)*
