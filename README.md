# EKBHR PORTAL — Core Web Vitals Starter

A Next.js + Tailwind boilerplate optimized for fast CWV scores and publisher-monetization content.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## What’s inside
- Next.js App Router
- Tailwind CSS
- Minimal components (Header, Footer, CTA)
- Pages from approved sitemap
- `/ads.txt` and `/sellers.json`
- `/robots.txt` and `/sitemap.xml`
- Lightweight forms with server routes wired for email notifications
- Brand palette with gradients (primary slate, emerald accent, sky secondary)

## Core Web Vitals choices
- System font stack (no render-blocking external fonts)
- Static hero (no carousel), fixed image sizes
- AVIF/WebP image formats enabled
- Minimal JS, no heavy UI kit
- Accessible landmarks, skip link

## Email delivery setup
Forms call server actions that send an email via SMTP. Provide the following environment variables before running in production:

- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `SMTP_SECURE` (`"true"` for port 465, otherwise `"false"`)
- `EMAIL_FROM` (defaults to the SMTP user) and optionally `EMAIL_TO` (defaults to `info@ekbhr.com`)

Without these values, submissions fall back to server console logs so you can still test locally.
