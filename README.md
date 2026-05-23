# Sessiono

Sessiono is a hybrid session-musician and live AI accompaniment platform for artists, producers, and vocalists who need songs finished faster.

This repository is now aligned to **revvel-standards** for project planning and production readiness.

## S2M / Revvel-Standards status

Sessiono has the revvel-standards baseline required for a documentation-first product repository.

- README: present
- CHANGELOG: present
- DEPLOYMENT_GUIDE: present
- GO_TO_MARKET: present
- BRAND_GUIDELINES: present
- SECURITY: present
- package.json: present
- baseline scripts: present (`scripts/test-baseline.js`, `scripts/build-baseline.js`)

## Current project status

Sessiono is in planning + foundation mode. This repo currently focuses on product definition, launch planning, security posture, and deployment readiness docs before implementation.

## Product direction (MVP)

- Artist posts a track brief (genre, BPM, key, references, budget, instrumentation needs)
- Live AI music agents generate piano, guitar, pad, and accompaniment options from the brief
- Session musicians can refine, replace, or layer over AI-generated parts
- In-app project workspace tracks files, prompts, revisions, stems, and MIDI exports
- Escrow-style milestone payments support hybrid AI-plus-human delivery packages

## Why this matters

- **Value:** Sessiono shortens the gap between idea and finished arrangement by pairing instant AI accompaniment with higher-trust human session talent.
- **Goal priority:** The highest-priority workflow is helping a creator go from rough demo to usable piano/guitar accompaniment in one session.
- **Portfolio fit:** It complements `revvel-music-studio` by focusing on collaborative creation and hiring, while that repo focuses on production tooling.

## Current use

Use this repository today as the canonical planning, launch, and operating baseline for Sessiono:

- product framing and implementation sequencing for the live AI accompaniment workflow
- sourced market research and revenue planning for launch readiness
- deployment, security, and brand guidance for the eventual website and application surface

## Website in Test (Vercel)

- Status: Not deployed yet
- Target platform: Vercel
- Deployment automation reference: see [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- URL: documented gap until the first testable UI is scaffolded and deployed

## Repository research used for direction

To satisfy the request to look across related music repositories, these public repos were reviewed as references for product framing and adjacent capabilities:

- `midnghtsapphire/revvel-music-studio` for audio processing, stem handling, and MCP/API patterns
- `midnghtsapphire/muse-maker` for creative workflow framing
- `midnghtsapphire/talent-ladder` for marketplace-style talent discovery patterns
- `midnghtsapphire/Music-Videos` for downstream promotional content needs
- `midnghtsapphire/revvel-standards` for documentation and launch-readiness expectations

## Revvel-standards checklist

- [x] `README.md`
- [x] `CHANGELOG.md`
- [x] `DEPLOYMENT_GUIDE.md`
- [x] `GO_TO_MARKET.md` (with sources)
- [x] `BRAND_GUIDELINES.md`
- [x] `SECURITY.md`
- [x] `package.json` (`npm test` + `npm run build`)
- [x] `scripts/test-baseline.js`
- [x] `scripts/build-baseline.js`

## Next build steps

1. Choose stack (recommended: Next.js + PostgreSQL + object storage + AI orchestration worker)
2. Scaffold app shell, auth, and creator dashboard
3. Implement brief-to-accompaniment flow for AI piano/guitar session agents
4. Add musician marketplace, messaging, escrow milestones, and deliverables workflow
5. Add moderation, rights management, and trust/safety controls for prompts and uploads

## License

TBD by project owner.

## Test

Run baseline repository tooling commands:

```bash
npm test
npm run build
```

These commands validate the revvel-standards baseline, including required documentation, Website in Test traceability, and sourced market research coverage.
