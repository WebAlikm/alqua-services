# AlQua'a Services

An Arabic-first community discovery hub that helps Al Qua'a residents find local services, opportunities, and events from one simple mobile web app.

## Challenge Chosen

**Challenge 4 - Connecting residents to services, opportunities and events**

Our specific focus is the lack of a simple, central place for residents in dispersed rural communities to discover relevant local services, time-sensitive opportunities, and community events.

## Target Demographic

Primary users:

- Al Qua'a residents who rely on word of mouth or scattered WhatsApp messages to learn what is available nearby.
- Arabic-first users who need a simple mobile experience.
- Families, youth, entrepreneurs, farm owners, and community visitors looking for relevant services or events.

## Current Situation

Residents may miss useful services, opportunities, or events because information is fragmented across informal channels. The project aims to make discovery faster, clearer, and easier to verify.

## Solution Overview

AlQua'a Services will provide:

- A searchable directory of local services, events, and opportunities.
- Category and audience filters for common community needs.
- Arabic-first interface direction with English support.
- Contact, WhatsApp, and map actions for each listing.
- A lightweight structure for administrators to add or update listings.

## Impact Claims To Test

The prototype will be evaluated against specific, testable claims:

- A resident can find a relevant service or opportunity in under 3 clicks.
- The app can support service, event, and opportunity records using one reusable data model.
- Listings can be filtered by category, audience, and urgency.
- The same structure can be reused by another rural community by changing the data source and community labels.

## Feasibility

The first version is designed as a low-cost web app that can be deployed on static hosting and maintained by a community organization, school, municipality team, or volunteer admin.

Planned stack:

- Vanilla HTML, CSS, and JavaScript for fast delivery and low maintenance.
- Static JSON data for the first working prototype.
- GitHub Pages or Vercel for deployment.
- No paid infrastructure required for the hackathon version.

## Scalability

The project is structured so new communities can reuse the same app shell with different listing data, categories, languages, and contact channels.

## Evidence Plan

Evidence will be stored in the `docs/` and `data/` folders:

- Sample listings for services, opportunities, and events.
- Search and filter test cases.
- Screenshots of the working resident flow.
- Demo video showing end-to-end discovery.
- Notes on deployment cost and maintenance assumptions.

## How To Run

Setup instructions will be added once the first runnable prototype is committed.

## Repository Structure

```text
/
├─ docs/                 Judging evidence, feasibility, scalability, and team notes
├─ public/               Static assets for deployment
├─ src/                  Application source files
├─ data/                 Sample community listing data
├─ index.html            App entry point
├─ package.json          Development and deployment scripts
└─ README.md             Project pitch, proof, and verification guide
```

## Team

See `docs/team.md`.

## Built For

Tatweer Hackathon 2026 - Solutions for rural communities.
