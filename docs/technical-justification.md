# Technical Justification

## Technical Goal

Build a reliable, fast, and easy-to-verify prototype that demonstrates the full resident discovery flow without introducing backend risk during the hackathon.

## Stack Decision

| Area | Decision | Justification |
| --- | --- | --- |
| Application type | Static web app | Fast to build, easy to deploy, easy for judges to run |
| Frontend | HTML, CSS, JavaScript | Low complexity and no heavy framework dependency for a small prototype |
| Build tool | Vite | Simple dev server and production build workflow |
| Data | Static JSON | Allows realistic sample listings without backend setup |
| Hosting | GitHub Pages or Vercel | Free or low-cost, public, fast to verify |
| Resident authentication | None for prototype | Reduces friction and matches the discovery-first use case |

## Library Selection Rules

Any library added during the build must support the success criteria in `docs/success-criteria.md`.

| Need | Preferred Choice | Reason |
| --- | --- | --- |
| UI rendering | Plain DOM or small local modules | Keeps load time under 3 seconds on simulated 3G |
| Icons | Inline accessible text/icons or a small icon subset | Avoids heavy bundles |
| Accessibility testing | WAVE, Lighthouse, or axe tooling | Supports accessibility evidence |
| Performance testing | Lighthouse or browser throttling | Supports performance evidence |
| WhatsApp action | `wa.me` links or Web Share API fallback | Familiar action pattern without backend risk |

Do not add a framework, component library, or mapping SDK unless it directly improves a documented criterion and does not weaken load time, mobile usability, or accessibility.

## Why Not a Backend First

A backend would be useful for production, but it is not required to prove the core hackathon value. Starting with a backend would add risk:

- Authentication setup.
- Database schema changes.
- Deployment complexity.
- Possible service limits or configuration issues.
- More moving parts during live judging.

The prototype can still be production-oriented by designing a clean listing data model that can later move to Supabase, Firebase, or another managed database.

## Why Mobile-First

The product is meant to work from a shared link and should be usable by residents who are comfortable with phone-based tools such as WhatsApp. Mobile-first design supports:

- Rural residents using phones as the main device.
- Quick access from chat links.
- Simple direct actions such as call, WhatsApp, or map navigation.

## Why Arabic-First

Arabic-first design fits the target resident context. English support remains useful for bilingual users, visitors, and service providers, but the default experience should not assume English comfort.

## Data Model Justification

One listing model should support:

- Services.
- Events.
- Opportunities.

This avoids building three separate systems and helps scalability. A community can add or remove listing types without changing the app structure.

## Risk Management

| Risk | Mitigation |
| --- | --- |
| Not enough real listings | Use realistic sample listings and clearly label them as sample data |
| Rural digital adoption varies | Keep interface simple, mobile-first, and no-login |
| Data becomes outdated | Add future admin and expiry-date plan |
| Judges question evidence | Store claims, tests, screenshots, and source confidence in the repo |
| App fails live | Keep static build simple and prepare screenshots/demo video backup |

## Future Upgrade Path

1. Replace static JSON with managed database.
2. Add admin login for trusted maintainers.
3. Add listing approval and expiry dates.
4. Add WhatsApp sharing or update opt-in if there is enough validation.
5. Add multi-community deployment configuration.
