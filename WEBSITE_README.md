# Sessiono Website

AI Music Collaboration Platform - Landing Page

## Deployment

### Vercel Deployment

The website is configured for deployment to Vercel.

**GitHub Actions Workflow:** `.github/workflows/deploy.yml`

To deploy manually:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd sessiono
vercel --prod website/
```

## Required GitHub Secrets

To enable automatic deployment, add these secrets to the repository:

| Secret | Description | Where to Get |
|--------|-------------|--------------|
| `VERCEL_TOKEN` | Vercel API token | vercel.com/account/tokens |
| `VERCEL_ORG_ID` | Vercel organization ID | vercel.com/dashboard |
| `VERCEL_PROJECT_ID` | Vercel project ID | vercel.com/dashboard |

## Live URL

Once deployed, the production URL will be:
- **Production:** https://sessiono.vercel.app (or custom domain)

## Local Development

Open `website/index.html` in any browser to preview locally.

## Files

```
sessiono/
├── website/
│   └── index.html     # Complete landing page
├── vercel.json        # Vercel configuration
├── .github/
│   └── workflows/
│       └── deploy.yml # Auto-deploy workflow
└── README.md         # This file
```