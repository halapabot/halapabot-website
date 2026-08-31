# HalapaBot website documentation expansion — 2026-08-31

## Selected foundation
The website foundation is `HalapaBot-cloudflare-waitlist.zip`, because it is the latest saved website package and contains the working `/api/waitlist` client integration plus the Cloudflare Worker/D1 schema.

The preceding saved website packages were reviewed in order:
- `HalapaBot-website-engines-update.zip`
- `HalapaBot-website-feature-focused.zip`
- `HalapaBot-website-footer-final.zip`
- `HalapaBot-website-waitlist-contact-restored.zip`
- `HalapaBot-cloudflare-waitlist.zip`

## Product source of truth used for feature documentation
`HalapaBot-0.9.12-rc.3.6.1-OBS-BETA-Label.zip` was inspected for the current desktop UI, renderer pages, translations and feature/runtime wording.

## Current website changes
- Landing page expanded around the existing `Data first. AI second.` positioning.
- Supplied 3D H / Data-first visual added to the hero.
- Explore the Engines expanded from the previous three marketing engines into a broader product-level map covering Interaction, Personality, Voice, Automation, Memory and Moderation.
- Features expanded into a concrete inventory of current desktop capabilities.
- New App Tour section with real UI evidence screenshots from the project workspace.
- New `guide.html` covering setup, connections, Overview, Voice, OBS/clipping, Memory, Moderation, Analytics, Content Workspace, Settings, Performance and troubleshooting.
- OBS/Voice beta boundaries are explicitly stated.
- Existing waitlist form and Cloudflare endpoint structure retained.

## Validation
- HTML structure/content checks: PASS
- Local asset reference checks: PASS
- `node --check worker.js`: PASS
- Website package remains static/Cloudflare compatible; no external runtime dependency was introduced.
