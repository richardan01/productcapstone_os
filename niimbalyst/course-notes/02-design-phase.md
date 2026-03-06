# AI Capstone — Design Phase
> Course lesson notes | Tags: 4D - Design, Week 1, Capstone | Status: Complete
> Session: AI Product Design — UX and Prompt Engineering (Feb 9, 2026)

---

## The Dual Challenge of AI Design

Designing AI products requires simultaneously designing two components:
- **The user experience** (container)
- **The intelligence** (content)

A beautiful interface with a weak model fails. A powerful model with a confusing UI fails. Success requires excellence in both.

---

## Two Parallel Design Tracks

### Track 1: User Design
- Map workflows and user flows
- Wireframe screens
- Prototype interactions

### Track 2: AI Prompt Design
- Craft the master prompt that defines the AI's brain, voice, and behavior

By the end of the Design phase, deliverables are a **test prototype and validated prompt strategy** — not just design files.

---

## Grounding Design in Value Drivers

Design choices must serve specific value drivers:
- **Saving time**
- **Reducing effort**
- **Providing access**

If a chat interface adds friction, it's a bad design regardless of how cutting-edge it is.

---

## Workflow Mapping

The target state workflow is the **spine of the product** — aligns the team on where humans hand off to AI and vice versa.

### Key elements to define:
1. **Entry point** — Where does the user discover this feature? (dashboard button, sidebar suggestion, etc.)
2. **Sequence** — Be granular. Don't leave "AI processes" as a black box.
3. **Branches** — AI is non-deterministic. The workflow must account for failure cases.
4. **Exit** — Define how the interaction ends (save, copy, trigger another workflow).

### Building the Workflow:
1. Start with a high-level map/spine from entry point
2. Map each step and account for branches
3. Identify areas where AI adds value
4. Distinguish between what's manual and what's AI-driven

> **Example (AI Description Generator)**: Include a review and edit loop at step 4. This feedback loop is critical — it's how you gather data to improve the model later.

---

## Wireframing for AI Products

### Focus on Structure Over Fidelity
- Wireframes help stakeholders shift from abstract to concrete
- Structure matters more than visual polish
- Focus on input mechanisms and output containers

### Design Principles
- Start with user intent, not trends (search bar vs. chat bubble)
- Mark AI interaction points and make them controllable (editable outputs, dismissible suggestions)
- **Golden rule**: Never force users to accept AI output as final truth — always offer control

### Managing Latency and Building Trust
- AI has latency — design for the wait with informative status indicators (e.g., "reading documents," "analyzing data" — not just "Generating")
- Include explainability: show the "why" behind answers, not just the answer itself
- Example: "Based on these three documents, score is high" builds transparency and trust

### Tool Selection
- Use whatever enables fast iteration (Figma, napkin, etc.)
- Goal is clarity, not pixel perfection

---

## Prototyping the AI Experience

### Why Prototype
- Wireframes are static; AI is dynamic
- Prototyping helps evaluate time to value and interaction weight
- Cheapest form of insurance before spending engineering hours on API integration

### How to Build a Prototype
1. Start with existing wireframes and link them into a simple flow
2. Hard code success and error outputs — you're testing user interaction with intelligence, not the model itself
3. Focus on the AI moment, not peripheral features (login, settings)
4. Turns "I think" conversations into "I see" conversations

---

## Master Prompt Design

### Why Prompts Matter
- In text-based AI features, **the prompt IS the product**
- The prompt determines accuracy, tone, safety, and utility
- Sloppy prompts lead to sloppy products — no amount of UX polish can fix a bad prompt
- Prompt design is foundational for everything downstream (evaluations, fine-tuning, RAG strategy)

### Components of a Master Prompt
| Component | Description |
|-----------|-------------|
| **Role** | Defines the AI's identity ("You are a friendly financial advisor") |
| **Tone & Personality** | Playful creative partner vs. serious medical assistant |
| **Explicit Instructions** | Be specific — "Summarize in three sentences, focusing on actionable next steps" |
| **Formatting Requirements** | Markdown, JSON, CSV — especially if output feeds into other systems |

### Simple Prompt Recipe
1. **Identity**: "You are an expert product marketer"
2. **Direction**: "Write a blog post. Begin with a benefit. Use user-friendly language. Keep sentences short. Highlight one product feature."
3. **Constraints**: "600 words. Keep the tone friendly. No fabricated data."

### Mindset Shift
- Prompts are **living artifacts** — they will be refined, developed, patched, and deployed
- For Design phase: need a viewpoint that works well enough for prototype testing, not perfection
- Don't get stuck in prompt perfectionism yet

---

## Testing and Validation

### Why Testing is Essential
- Cannot predict LLM behavior just by reading the prompt — must poke at it
- Look for drift: Does it refuse harmless requests? Ramble? Hallucinate facts?
- Each test provides data to tighten instructions

### Testing Approach
- Test with real humans: Show output and ask "Is this useful?"
- Often the model does exactly what you asked, but not what you wanted — that's a **prompt bug**
- Feed it real inputs — messy, complex inputs users will actually provide, not just "Hello"

### Evaluation Framework
Use a rubric: **structure, relevance, factuality, terminology, tone, strategy, efficiency**

Test across spectrum:
- **Happy path** — typical use cases
- **Edge cases** — weird formatting, slang, short inputs
- **Negative cases** — things it should refuse to answer

When it fails an edge case → update the master prompt with specific rules.

Save your versions — Prompt v3 might be better than v4. You need the ability to roll back.

---

## Design Phase Deliverables Checklist
- [ ] Map the target state workflow — every step of the AI-powered journey, clarifying user actions and where AI delivers value
- [ ] Develop user flows and wireframes — simple, clear screens visualizing AI integration
- [ ] Create a prototype — hands-on demonstration of the AI experience
- [ ] Craft and refine the initial master prompt — shapes AI behavior, tone, and output
- [ ] Test and improve the prompt for reliability and clarity

---

## Next Steps
With the user experience defined and prompt validated, usability is de-risked. Proceed to the **Develop phase** to turn prototypes into working code with rigorous evaluations and a production-ready solution.
