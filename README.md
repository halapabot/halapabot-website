# HalapaBot website — Features + Guide expansion

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
