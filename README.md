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

## Website update — 2026-09-02
- Refreshed the app tour with a current Control Center capture from HalapaBot Desktop `1.0.0-rc.1`.
- Added the supplied English-language UI captures for Control Center, Features, Automatic Clipping, AI Moderation, Settings, Personality, Memory and Analytics.
- The supplied captures are also copied over the existing screenshot filenames used by the original site, keeping the image URLs stable for GitHub and Cloudflare uploads.
- Updated the tour and guide copy to reflect System Flow, runtime resources, quick actions, Local AI / Ollama and performance-aware controls.
- Added Open Graph metadata, Twitter card metadata, theme color and favicon metadata.
- Corrected the mobile hero visual so it stays inside the viewport instead of creating horizontal overflow.
- Changed the top-right call to action from `Download for Windows` to `Join the waitlist` while the Marketplace download is not live.
- The supplied Voice capture was intentionally not used because it still shows Finnish device and language values; replace it with an English capture when available.

## Deployment note

Upload the complete folder contents, including `assets/screenshots/`. The text files alone are not enough: the website will show image alt text when the PNG assets are missing from the deployed `assets/screenshots/` path. The refreshed screenshots replace the existing files `overview.png`, `command-groups.png`, `settings.png`, `automatic-clipping.png`, `diagnostics.png`, `technical-details.png`, `overview-runtime.png` and `twitch-result.png`.


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
