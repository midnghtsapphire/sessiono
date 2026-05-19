# Sessiono

Sessiono is a session-musician collaboration platform for artists, producers, and vocalists to finish songs faster.

This repository is now aligned to **revvel-standards** for project planning and production readiness.

## Current project status

Sessiono is in planning + foundation mode. This repo currently focuses on product definition, launch planning, security posture, and deployment readiness docs before implementation.

## Product direction (MVP)

- Artist posts a track brief (genre, BPM, key, references, budget)
- Session musicians submit offers and turnaround timelines
- In-app project workspace for file exchange and revisions
- Escrow-style milestone payments
- Final delivery package with stems + metadata

## Repository research used for direction

To satisfy the request to look for similar apps in existing repositories, these public repos were reviewed as references for product framing and naming consistency:

- `midnghtsapphire/muse-maker`
- `midnghtsapphire/talent-ladder`
- `midnghtsapphire/revvel-standards`

## Revvel-standards checklist

- [x] `README.md`
- [x] `CHANGELOG.md`
- [x] `DEPLOYMENT_GUIDE.md`
- [x] `GO_TO_MARKET.md` (with sources)
- [x] `BRAND_GUIDELINES.md`
- [x] `SECURITY.md`

## Next build steps

1. Choose stack (recommended: Next.js + PostgreSQL + object storage)
2. Scaffold app shell and auth
3. Implement project brief + marketplace flow
4. Add messaging, escrow milestones, and deliverables workflow
5. Add moderation + trust and safety controls

## License

TBD by project owner.
