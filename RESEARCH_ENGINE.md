# Research Engine (Sessiono S2M)

## Objective

Deliver a one-iteration, ship-to-market website and product surface backed by explicit research synthesis and implementation-ready suggestions.

## Jules research engine workflow (revvel-standards)

To pass the normal revvel-standards process for S2M work, this research artifact is completed in the following order:

1. Intake the issue/PR scope and extract explicit deliverables (research, assets, artifacts, website scope).
2. Run cross-repository and market research to collect references and implementation comparables.
3. Synthesize findings into prioritized suggestions and one-iteration ship criteria.
4. Map outputs to required companion artifacts (`GO_TO_MARKET.md`, `WEBSITE_ASSETS.md`, `WEBSITE_ARTIFACTS.md`).
5. Verify baseline checks (`npm test`, `npm run build`) before merge.

## Completion criteria (normal process gate)

- Every S2M PR includes research engines, prioritized suggestions, assets inventory, and artifacts register.
- Website-in-Test traceability stays documented in `README.md` and deployment flow remains Vercel-oriented.
- Baseline scripts enforce required files and process markers so incomplete merges fail early.

## Engine 1: Market and demand intelligence

- Benchmark creator-service marketplaces (SoundBetter, AirGigs, Fiverr) for category structure, trust signals, and conversion paths.
- Track AI accompaniment product expectations: speed-to-first-output, controllability, and export quality.
- Translate findings into Sessiono positioning: AI-first draft generation with human refinement workflows.

## Engine 2: User workflow research

- Capture primary jobs-to-be-done:
  1. Create track brief quickly
  2. Generate accompaniment ideas immediately
  3. Hire/refine with human session players
  4. Deliver stems + notes through milestones
- Prioritize friction reductions in onboarding, revision loops, and payment clarity.

## Engine 3: Revenue and pricing intelligence

- Marketplace take-rate model on completed milestones.
- Subscription add-on model for premium AI accompaniment generation/export quotas.
- Conversion model from AI draft creation to paid human collaboration.

## Engine 4: Trust, policy, and safety research

- Copyright/licensing provenance requirements for prompts, source files, and generated outputs.
- Identity and reputation requirements for musician profiles.
- Dispute handling requirements for milestone deliveries and revisions.

## Prioritized implementation suggestions (one iteration)

### P0 (must ship in the first complete iteration)

1. Public website with clear value proposition and CTA into app
2. Creator + musician authentication
3. Project brief creation and AI accompaniment generation flow
4. Session offer acceptance and milestone checkout flow
5. Admin surface for moderation, disputes, and payout oversight

### P1 (next after first full release)

1. Genre-specialized recommendation ranking
2. Advanced project analytics and cohort reporting
3. Deeper collaboration messaging and workflow automation

## Outputs in this repository

- Market narrative and sourced references: `GO_TO_MARKET.md`
- Brand and messaging constraints: `BRAND_GUIDELINES.md`
- Website asset inventory: `WEBSITE_ASSETS.md`
- Website artifact register: `WEBSITE_ARTIFACTS.md`
