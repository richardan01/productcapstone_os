# AI Capstone — Deploy Phase
> Course lesson notes | Tags: 4D - Deploy, Week 1, Capstone | Status: Complete
> Session: AI Product Deployment Guide (Feb 9, 2026)

---

## Overview

The Deploy phase transforms a model from playground to production-ready system. The ultimate goal: **build user trust**.

Coming in with: designed model, tuned prompts, structured data, validated performance.

---

## Four Pillars of Deployment

| Pillar | Question |
|--------|---------|
| **Readiness** | What does "ready to ship" actually mean? |
| **Rollout** | How do we launch safely, scalably, and strategically? |
| **Success** | What does success look like before launch? |
| **Monitor** | How do we know when it breaks? |

> **Key principle: ROLLOUT MODEL must match RISK PROFILE**

---

## 1. Readiness

### Technical Readiness Checklist
Go-live requires a formal checklist, not just intuition:
- [ ] API capacity to handle expected volume
- [ ] Rate limits set to prevent single users from depleting token budgets
- [ ] Known issues documented
- [ ] Team alignment confirmed
- [ ] Support and legal sign-off obtained

Failure to complete these checks means **gambling**, not launching.

### Scale Readiness
- Can the system handle 10x today's traffic?
- What fails when it hits rate limits or latency spikes?
- Has all critical path been tested?

Systems that work for 5 users may fail at 5,000 users.

---

## 2. Rollout Strategies

Choose the rollout model that matches your risk profile:

| Strategy | When to Use |
|----------|-------------|
| **Pilot** | High trust, low volume — best for discovering unknown unknowns |
| **Staged Rollout** | Progressive: 5% → 10% → 50% → 100%. Limits blast radius if issues arise. Expand based on confidence. |
| **Full Release (Big Bang)** | High risk, high reward. Requires rigorous evaluations and rollback tools ready. |

### Simulate Before Launch
- Simulate high traffic or use chaos engineering
- Set auto alerts for latency, error rate, usage spikes
- Use feature flags to control risk and isolate new capabilities

### Pre-Launch Decision Points
Define critical parameters **before** launch day — avoid making decisions "while the building is burning":
- First access criteria
- Kill switch thresholds (e.g., if solution rate hits 10%, trigger rollback)

---

## 3. Success

### Go-To-Market Communication
**External**: Ensure users understand what the AI does. Set expectations that AI may make mistakes. Managing expectations = managing trust.

**Internal**: Equip support teams with scripts for "Why did the AI say that?" questions. Provide documentation and protocols.

### Legal, Privacy & Risk
Red teaming is mandatory, not optional:
- [ ] Test for prompt injection vulnerabilities
- [ ] Identify and mitigate bias
- [ ] Prevent PII leakage
- [ ] Define data storage, encryption, and expiration policy
- [ ] Establish moderation and takedown protocol for rapid shutdown

Don't forget:
- Accessibility and fairness audits
- Disclosures and explainability
- Internal escalation path for legal edge cases

### Success Metrics

Define metrics **before** launch to avoid cherry-picking results post-launch.

**Business Metrics**
- Adoption rates
- Retention
- Conversion
- Support deflection
- Time saved

**AI Metrics**
- Accuracy
- Hallucination rate (target: <5%)
- Latency
- Prompt completion reliability
- Task success rate (target: >80%)

> High accuracy with no users = failure. A popular model that lies to customers = liability. Both matter.

---

## 4. Monitor

### Build Before Launch
- A shared dashboard
- Targets for each key metric
- Monitoring and alerts set up

### Feedback Engine
- Thumbs up / thumbs down (industry standard)
- Creates datasets for model fine-tuning
- Assign a specific owner to review thumbs-down feedback
- **If no one reads the feedback, don't build the system**

### Automated Visibility
- Set up comprehensive logs
- Track token usage
- Monitor latency (alert if response time jumps from 2s to 10s)
- Receive alerts before user churn occurs

### Escalation Path
- Who monitors incoming feedback?
- What is the SLA for reviewing?
- Who owns follow-through?

---

## Post-Launch: Tuning Mode, Not Maintenance Mode

Post-launch is **tuning mode** — the best AI products improve with increased usage.

Build iteration into the roadmap:
- Monthly prompt reviews
- Quarterly evaluation set updates
- Biweekly tuning hours
- Update evaluation sets with new production edge cases
- Continuously assess where to automate more vs. where human oversight is needed

> Success criteria evolve — today's success may become tomorrow's table stakes.

---

## Key Takeaway

Successful AI deployment requires orchestrating **engineering, design, and strategy** together — moving from vague discovery concepts to robust, scalable systems through systematic planning and execution.
