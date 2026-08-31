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

## Deploy
Keep the existing Cloudflare Worker/D1 configuration. The site continues to POST the waitlist form to `/api/waitlist`.

## Visual polish
The landing page uses the H-only 3D hero visual with restrained glow, card motion, pointer mouse glow and animated sparkles around the H. The `Data first. AI second.` positioning remains the primary hero message, with the supporting line `HalapaBot only analyzes the data it actually knows about.`


## Visual rebuild — 2026-08-31

The landing page has been rebuilt around the agreed product direction:
- Hero headline: “Your AI co-pilot for streaming.”
- The large H-only visual is used in the hero; the old Data-first image/card is no longer placed beside the headline.
- “Data first. AI second.” remains a prominent standalone product principle.
- Supporting line: “HalapaBot only analyzes the data it actually knows about.”
- Added animated card hover/glow, pointer mouse glow, scroll reveals and animated sparkles around the H.
- Generic product/demo language is used instead of personal streamer/bot names.
- The waitlist endpoint remains `/api/waitlist`; `worker.js` and `wrangler.toml` were not changed by this visual rebuild.
