# HalapaBot website — visual rebuild

This package is based on the latest saved Cloudflare waitlist website package and keeps its working waitlist endpoint structure.

## Added
- New landing hero using the supplied Data first. AI second. visual and 3D H logo.
- Expanded Explore the Engines section using the current product structure.
- Comprehensive Features section based on the current desktop application.
- New `guide.html` with setup, connections, Overview, Voice, OBS/clipping, Memory, Moderation, Analytics, Content Workspace, Settings, Performance and troubleshooting.
- Real HalapaBot UI evidence screenshots under `assets/screenshots/`.
- Explicit Beta status for Voice/OBS areas where current project evidence supports it.
- Existing waitlist API form and Cloudflare Worker retained.

## Source basis
The feature wording was derived from the current HalapaBot desktop package and the saved website packages available on 2026-08-31. Where a feature is evolving or dependent on external services/runtime state, the site says so rather than presenting it as universally guaranteed.

## Cloudflare deployment

This package is configured as a Cloudflare Workers Static Assets deployment: the Worker handles `/api/*` and Cloudflare serves the website assets from the repository root. The D1 binding is `DB` and the asset binding is `ASSETS`.

Deploy with `npx wrangler deploy`.

## Deploy
Keep the existing Cloudflare Worker/D1 configuration. The site continues to POST the waitlist form to `/api/waitlist`.

Before deploying, replace `REPLACE_WITH_YOUR_D1_DATABASE_ID` in `wrangler.toml` with the ID of your Cloudflare D1 database. The included schema is `schema/001_create_waitlist.sql`.

## Visual polish
The landing page uses the H-only 3D hero visual with restrained glow, card motion, pointer mouse glow and animated sparkles around the H. The `Data first. AI second.` positioning remains the primary hero message, with the supporting line `HalapaBot only analyzes the data it actually knows.`


## Visual rebuild — 2026-08-31

The landing page has been rebuilt around the agreed product direction:
- Hero headline: “Your AI co-pilot for streaming.”
- The large H-only visual is used in the hero; the old Data-first image/card is no longer placed beside the headline.
- “Data first. AI second.” remains a prominent standalone product principle.
- Supporting line: “HalapaBot only analyzes the data it actually knows.”
- Added animated card hover/glow, pointer mouse glow, scroll reveals and animated sparkles around the H.
- Replaced the baked-background hero image with `assets/brand/halapabot-3d-h-transparent.png`, a genuine transparent PNG. The ground glow and floating sparkles now sit underneath the logo in CSS.
- Generic product/demo language is used instead of personal streamer/bot names.
- The waitlist endpoint remains `/api/waitlist`; `worker.js` and `wrangler.toml` were not changed by this visual rebuild.
