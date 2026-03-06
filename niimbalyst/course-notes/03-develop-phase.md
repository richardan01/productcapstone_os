# AI Capstone — Develop Phase
> Course lesson notes | Tags: 4D - Develop, Week 1, Capstone | Status: Complete
> Session: AI Product Development — Build Phase (Feb 9, 2026)

---

## Overview

The Develop phase transforms models into reliable products through data pipelines and evaluations. Every decision must be anchored to:
- User pain points from Discovery
- Workflows mapped in Design

The complete process: **Pick a model → Specify inputs → Define quality → Engineer a master prompt → Build a data pipeline → Create an evaluation set**

This transforms "playing with AI" into building a system.

---

## 1. Model Selection

> **Model selection is a product decision, not a technical one.** It determines the capability ceiling of the product.

### The Iron Triangle of AI
Balance three competing forces:
- **Cost**
- **Speed**
- **Quality**

### Product Constraints to Consider First
| Constraint | Implication |
|------------|-------------|
| Latency requirements | Instant answers eliminate massive models |
| Privacy requirements | May force open source or enterprise instances |
| Reasoning capability needs | Small open source models may fail for complex analysis |
| Response time | GPT-4 may be too slow for sub-second bots |

### How to Choose
- Use a **decision matrix** with criteria: reasoning capability, context window size, cost per 1K tokens, privacy compliance
- Score each model against your personas and critical flows
- This transforms vibes-based decisions into **defensible strategies for leadership**

> Example: Picking a model with 5-second latency for real-time voice translation means failure before starting.

Keep user personas and critical flows visible as the North Star throughout development.

---

## 2. Input Specification

> **The model is a function (x → y)** — structured inputs are essential for structured outputs.

Inputs act as a bridge between user intent and AI's ability to respond.

### Create an Input Specification Table
| Field Name | Format | Limits | Required? |
|------------|--------|--------|-----------|
| raw text | string | 2000 tokens | Yes |
| tone preference | enum | — | No |
| output length | integer | — | No |

- **Required inputs**: bare minimum for the model to function
- **Optional inputs**: steering wheel for users to refine tone, length, format

Well-designed optional inputs feel like superpowers to users.

**Structured inputs reduce prompt complexity** by offloading cognitive load from the model to the UI. This level of detail writes the spec for engineers with no ambiguity.

---

## 3. Output Quality Definition

> **Define "good" before building.** "Looks good" is not a strategy.

### Key Questions
- Is it accurate? (no hallucinations)
- Is it safe? (no PII leaks)
- Does it sound like us? (brand alignment)

### Break Down into Measurable Traits
- Structure
- Factuality
- Tone
- Format

### Context-Specific Quality Metrics
- Code generation → must compile
- Marketing copy → must convert

Create an **output evaluation checklist** as a grading rubric. The checklist evolves over time as new failure modes are discovered. Test regularly (weekly) as models drift and user expectations shift.

---

## 4. Master Prompt Engineering

Complete all preparatory work (model selection, input spec, output definition) before writing a single word of the prompt.

> The prompt is the **brain of the AI** — it combines structure, format, logic, reasoning steps, and expectations.

Move from rough sketch to system instruction by adding error handling, strict constraints, and few-shot examples.

### Strong Master Prompts Include
| Element | Purpose |
|---------|---------|
| **Instructions** | What should the model do |
| **Persona** | Role and tone to adopt |
| **Inputs** | Data being fed to the model (link to input spec table) |
| **Constraints** | What to include or avoid ("Do not deviate. Never invent data.") |
| **Few-shot Examples** | Optional but powerful — shows structure and tone with real I/O pairs |

### How to Treat Prompts
- **Treat prompts like code** — version them (v1, v2, v3) to track changes
- **The prompt is intellectual property** — it's the logic layer of the application
- Two companies using the same model can have vastly different results — the better prompt wins the market
- Goal: **predictable excellence, not random brilliance**

---

## 5. RAG (Retrieval Augmented Generation)

> **Prompts are great for instructions but terrible for knowledge storage.**

RAG finds the right document, pastes it into the prompt, and asks the model to answer.

### Why RAG Fails
- Wrong or messy documents cause model failure
- **Data preparation is the unsexy work that makes RAG possible**

### RAG Pipeline
1. **Identify & collect** sources reflecting actual user needs
2. **Clean and normalize** — remove outdated info, fix formatting, redact sensitive data
3. **Chunk and tag** — split into useful segments, label for search
4. **Embed and index** — convert to vectors, store for querying
5. **Configure retrieval** — ensure only the most relevant chunks are returned at the right time

### Do This Well
- Keep content fresh
- Break text into meaningful chunks
- Use metadata (tags, timestamps, category)
- Document and test

### Avoid
- Feeding unverified, stale, or irrelevant content
- Chunking too big
- Indexing private/sensitive data
- Skipping testing
- **Biggest pitfall: stale data** — a 2019 policy document gives 2019 answers

---

## 6. Testing & Evaluation Sets

> **Cannot launch based on vibes — need evaluation sets.**
> Evaluation sets are "sleep well at night insurance" — they act as unit tests for intelligence.
> Without evaluation sets: guessing. With them: engineering.

### Two Types of Test Cases
| Type | Examples |
|------|---------|
| **Typical cases** | Happy path, common everyday inputs |
| **Hard cases** | Edge cases (gibberish, competitor pricing requests), jailbreak attempts |

### Process
1. Start with **manual review** — read the logs, read the data
2. Scale to **automated review** — scripts or tools that rate accuracy, completeness, relevance
3. Use an LLM to grade the output of your LLM (e.g., "Did response include citation? Yes/No")

### When You Find Failures
- Don't just fix the prompt
- **Add the failure to the test set** to prevent regressions
- Document the edge case → trace the failure → re-test to confirm it's fixed → repeat

### Goal
**Progress with evidence, not perfection.**

Define exactly how the system should fail gracefully. Each evaluation table should include: Test ID, edge case description, pass criteria.

---

## Develop Phase Summary

| Step | Output |
|------|--------|
| Pick the right model | Scored decision matrix |
| Specify inputs | Input specification table |
| Define good output | Output evaluation checklist |
| Engineer master prompt | Versioned prompt (v1+) |
| Build data pipeline (RAG) | Clean, chunked, indexed knowledge base |
| Create evaluation set | Test cases (typical + edge) |

Once the system is built and tested → proceed to the **Deploy phase**.
