# Deployment Guide

This guide defines the recommended production deployment path for Sessiono.

## 1) Target architecture

- Frontend/API: containerized web app (recommended: Next.js full-stack or equivalent)
- Database: managed PostgreSQL
- Object storage: audio stems, mixes, references, exports
- AI orchestration worker: routes accompaniment requests to model providers and rendering jobs
- Queue/worker: async jobs for audio processing and notifications
- CDN: static assets and file delivery acceleration

## 2) Environment requirements

- `APP_ENV=production`
- `DATABASE_URL` (managed Postgres connection string)
- `OBJECT_STORAGE_BUCKET`
- `OBJECT_STORAGE_REGION`
- `OBJECT_STORAGE_ACCESS_KEY`
- `OBJECT_STORAGE_SECRET_KEY`
- `PAYMENTS_PROVIDER_KEY`
- `AUTH_PROVIDER_SECRET`
- `SESSION_SECRET`
- `AI_MODEL_PROVIDER_KEY`
- `AI_AGENT_POLICY_VERSION`

## 3) Security baseline

- Enforce HTTPS everywhere
- Encrypt data in transit and at rest
- Use signed URLs for private file downloads
- Principle of least privilege for storage/database credentials
- Enable audit logging for payment and file access events
- Store prompt, generation, and export provenance for copyright/licensing review

## 4) CI/CD deployment flow

1. Run lint + tests
2. Build production image
3. Run DB migrations
4. Deploy to staging
5. Smoke test core flow (brief -> hire -> deliver)
6. Smoke test AI accompaniment flow (brief -> generate piano/guitar idea -> export stems/MIDI)
7. Promote to production

## 5) Post-deploy checks

- Auth sign-in and session persistence works
- New project brief creation works
- AI accompaniment generation works and exports expected assets
- File upload/download works
- Payment milestone creation succeeds
- Alerts/monitoring healthy (error rate, latency, queue depth)
