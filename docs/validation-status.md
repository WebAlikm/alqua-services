# Validation status and evidence quality

**Review scope:** source files and existing evidence documents, not the live app or raw test recordings.

## Confirmed from repository data

- `data/sample-listings.json` contains **20 records** across **5 categories** and **3 types** (`service`, `event`, `opportunity`).
- Each record has an ID, category, audience, bilingual title and summary, urgency, location, contact, WhatsApp link and map link.
- The records explicitly identify themselves as **sample/demo listings**. Their phone numbers, businesses, availability, and official verification must **not** be treated as real services without independent confirmation.

## Reported in existing documents — not independently corroborated here

- `evidence/user-testing.md` reports **3 participants**, **3/3 tasks completed**, and a **2.3-click average**.
- `evidence/performance.md` reports **2.3s on 3G** and **156KB total**, but the document is also a broad evidence index; retain the original test configuration and raw report before making a reproducible claim.
- `evidence/accessibility.md` reports WAVE/Lighthouse results, but currently includes placeholder-like square-bracket values and limited supporting artifacts.

These numbers should be presented as **repository-reported**, not independently verified in a code review. Remove or anonymize participant names before publishing evidence if their consent to public identification is not established.

## Discrepancies to resolve

| Issue | Current evidence | Action |
| --- | --- | --- |
| README says 0/6 tested | Other evidence files report tests | Reconcile each criterion with dated, reproducible proof |
| Reported coverage says 8 listings | Source JSON now contains 20 sample listings | Distinguish historical test snapshot from current source state |
| Repository description advertised Next.js/OpenAI | `package.json` contains Vite only | Change description to actual implementation |
| Accessibility results have placeholders | No verified raw outputs in this review | Attach original WAVE/Lighthouse reports and rerun |
| User outcomes presented as measured | Written session narratives only reviewed | Preserve consent-safe, dated evidence or label outcomes unverified |

## Repeatable validation plan

1. Run `npm test` for listing-data structure and uniqueness.
2. Run `npm run build` and confirm a clean build.
3. Perform mobile and Arabic/RTL exploratory testing with screenshots.
4. Run Lighthouse and WAVE against the current deployment; record date, device, connection profile, browser and outputs.
5. Repeat discovery tasks with consenting participants and anonymize results.
6. Update each success criterion only when supported by evidence.

**Automated JSON checks are not usability, accuracy, security, or accessibility tests.**
