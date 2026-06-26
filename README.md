# Al Qua'a Services Platform

> **Tatweer Hackathon 2026** | Challenge 4: Connecting residents to services, opportunities and events
> Built for Al Qua'a, Al Ain, UAE
> GitHub: [@WebAlikm](https://github.com/WebAlikm)
> Dates: 26-28 June 2026
> Live demo: pending build and deployment
> Demo video: pending prototype recording

Al Qua'a Services is an Arabic-first community discovery platform that helps residents find local services, opportunities, and events from one simple mobile web app.

---

## Systematic Development Approach

This project follows a structured methodology inspired by IB Computer Science Internal Assessment principles, emphasizing:

- Evidence-based problem definition.
- Justified technical decisions.
- Measurable success criteria.
- Comprehensive documentation.
- Systematic evaluation.

### Complete Documentation

| Document | Purpose | Status |
| --- | --- | --- |
| [Project Rationale](docs/rationale.md) | Why this solution, for this community | Complete |
| [Success Criteria](docs/success-criteria.md) | 15 measurable success metrics | 1/15 validated |
| [Technical Justification](docs/technical-justification.md) | Tech stack and library decision rules | Complete |
| [Development Timeline](docs/timeline.md) | Gantt chart and milestone tracking | Active |
| [Methodology](docs/METHODOLOGY.md) | Systematic development and evaluation approach | Complete |
| [Community Research](docs/community-insights.md) | Demographics, pain points, personas, and source confidence | Complete |
| [Judging Criteria](docs/criteria/) | Alignment with all 8 hackathon criteria | 8/8 scaffolded |
| [Evidence](evidence/) | Validation data and test results | In progress |

This structure is designed to make the project transparent, reproducible, and easy for judges to verify from the repository.

---

## The Challenge: Connecting Residents to Services

**Challenge 4 from Tatweer Hackathon 2026**

The challenge brief states that residents are not always aware of local services, opportunities, and events, and that there is no simple way to find them or stay informed.

### Problem Context

Al Qua'a is part of the Al Ain region and fits the hackathon's rural-community context. The issue is not only whether residents have internet access. The deeper gap is service awareness: residents may rely on word of mouth, scattered WhatsApp messages, social posts, or separate official sources.

**The gap is service discovery, relevance, and timely awareness.**

See [Project Rationale](docs/rationale.md) for the full problem analysis.

---

## Our Solution

Al Qua'a Services is a mobile-first discovery hub that will help residents:

1. Search local services, events, and opportunities.
2. Filter by audience, category, and urgency.
3. Use an Arabic-first RTL interface.
4. Ask simple natural-language questions that match to relevant listings.
5. Open direct WhatsApp, phone, or map actions.

### Core Prototype Scope

The hackathon prototype is intentionally narrow:

- 20+ sample listings across at least 3 categories.
- Static data model that supports services, opportunities, and events.
- Local AI-assisted query matching, not a general chatbot.
- WhatsApp share/deep-link flow, not a full broadcast system.
- No resident login required for discovery.

### Current Implementation Status

| Area | Status |
| --- | --- |
| Repository scaffold | Complete |
| Community research | Complete |
| IA-inspired planning docs | Complete |
| Success criteria and evidence structure | Complete |
| Working app prototype | Pending |
| Live deployment | Pending |
| Demo video | Pending |

---

## Success Criteria and Validation

We defined 15 measurable success criteria before building. See [Success Criteria](docs/success-criteria.md).

### Validation Tracker

| Criterion | Target | Current Status | Evidence |
| --- | --- | --- | --- |
| SC1 Load time | Under 3s on simulated 3G | Pending | [Performance](evidence/performance.md) |
| SC2 Device support | iOS and Android mobile browsers | Pending | [Device compatibility](evidence/device-compatibility.md) |
| SC3 Arabic RTL | Correct Arabic layout | Pending | [Arabic interface](evidence/arabic-interface.md) |
| SC4 AI accuracy | 85%+ on 20 queries | Pending | [AI test log](evidence/ai-accuracy-test.csv) |
| SC5 WhatsApp flow | Under 30s | Pending | [Notification speed](evidence/notification-speed.md) |
| SC6 Task completion | 80%+ users | Pending | [User testing](evidence/user-testing.md) |
| SC7 Task time | Under 3 minutes average | Pending | [User testing](evidence/user-testing.md) |
| SC8 Ease rating | 4+/5 average | Pending | [User testing](evidence/user-testing.md) |
| SC9 Accessibility | Zero critical violations | Pending | [Accessibility](evidence/accessibility.md) |
| SC10 Directory coverage | 20+ records | Pending | [Service coverage](evidence/service-coverage.md) |
| SC11 Category coverage | 3+ categories | Pending | [Service coverage](evidence/service-coverage.md) |
| SC12 Need validation | Survey/interview evidence | Pending | [Survey data](evidence/survey-results.csv) |
| SC13 Would-use rate | 70%+ positive | Pending | [Survey summary](evidence/survey-results.md) |
| SC14 Replication | New community in under 2 hours | Pending | [Replication test](evidence/replication-test.md) |
| SC15 License | MIT license included | Complete | [LICENSE](LICENSE) |

**Completion status:** 1/15 criteria validated.

See the [Evidence folder](evidence/) for validation data and test notes.

---

## Technical Implementation

### Technology Stack

The stack is chosen through documented technical justification, with a bias toward speed, reliability, and evidence collection. See [Technical Justification](docs/technical-justification.md).

| Component | Decision | Rationale |
| --- | --- | --- |
| Application type | Static web app | Fast to build, easy to deploy, easy for judges to verify |
| Frontend | HTML, CSS, JavaScript | Keeps bundle small and supports performance target |
| Build tool | Vite | Simple local development and production build workflow |
| Data | Static JSON | Realistic prototype data without backend risk |
| AI query handling | Local intent matching first | Testable without network dependency |
| Notifications | WhatsApp share/deep-link first | Familiar channel and measurable timing |
| Deployment | GitHub Pages or Vercel | Low-cost public hosting |

### Library Selection Rule

Any added library must directly support a success criterion and must not weaken load time, mobile compatibility, or accessibility. Heavy frameworks, mapping SDKs, external AI SDKs, or component libraries are avoided unless they become necessary for a documented criterion.

See [Architecture Documentation](docs/architecture.md) for technical details.

---

## Impact and Community Benefit

### Target Community

Primary focus:

- Al Qua'a residents.
- Arabic-first users.
- Families, youth, entrepreneurs, farm owners, older residents, and visitors.

Regional context:

- SCAD reports Al Ain Region at 986,910 residents in 2024.
- Exact public village-level population data for Al Qua'a was not found, so this repository labels regional and national proxy data clearly.

### Impact Claims To Test

| Claim | How We Will Test It |
| --- | --- |
| Residents can find a relevant listing faster than informal discovery. | Timed user-flow tests |
| Arabic-first layout improves usability for local residents. | RTL screenshots and user feedback |
| One data model can support services, opportunities, and events. | 20+ sample records across categories |
| WhatsApp-style sharing lowers friction. | Timestamped WhatsApp/share flow |
| The platform can be reused by another rural community. | Timed replication test |

See [Project Rationale](docs/rationale.md) and [Scoring Tracker](docs/scoring-tracker.md).

---

## Deployment and Feasibility

### Deployment Status

- Live demo: pending.
- Production build: pending.
- Device testing: pending.
- Accessibility testing: pending.

### Feasibility Assumptions

- Prototype infrastructure can run on free static hosting.
- Listings can initially be maintained by a trusted community organization, school, municipality team, or volunteer admin.
- Future production version can move from static JSON to Supabase, Firebase, or another managed database.
- No resident account is required for basic discovery.

See [Feasibility Documentation](docs/criteria/03-feasibility.md) and [Deployment Notes](docs/deployment.md).

---

## Scalability and Replication

Al Qua'a Services is designed as a configurable framework that can be adapted to another rural community by changing the data and community labels.

Example future configuration:

```json
{
  "community": "Al Qua'a",
  "region": "Al Ain",
  "language": "ar",
  "listingTypes": ["service", "event", "opportunity"],
  "categories": ["healthcare", "education", "business", "community", "farm-services"]
}
```

Replication target:

- Create a new community configuration in under 2 hours.
- Document evidence in [Replication Test](evidence/replication-test.md).

---

## How To Run

The runnable prototype is pending. Current scaffold uses Vite.

Planned local workflow:

```bash
npm install
npm run dev
```

Planned production build:

```bash
npm run build
```

---

## Repository Structure

```text
/
├─ docs/                 Judging criteria, methodology, feasibility, and team notes
├─ docs/criteria/        One document per judging criterion
├─ docs/METHODOLOGY.md   Planning, development, and evaluation method
├─ docs/rationale.md     Problem rationale and stakeholder fit
├─ docs/success-criteria.md
├─ docs/technical-justification.md
├─ docs/timeline.md
├─ evidence/             Validation data, tests, screenshots, and proof
├─ public/               Static assets for deployment
├─ src/                  Application source files
├─ data/                 Sample community listing data
├─ index.html            App entry point
├─ package.json          Development and deployment scripts
├─ LICENSE               MIT license
└─ README.md             Main submission document
```

---

## Team

See [Team Notes](docs/team.md).

---

## Built For

Tatweer Hackathon 2026 - Solutions for rural communities.

## Methodology Footnote

Data synthesized using Abu Dhabi Census reports, TDRA digital government and telecom context, UAE digital adoption metrics, Tatweer Hackathon challenge material, and regional community news coverage of the Al Ain desert region. Village-level Al Qua'a demographic figures were not found in public official sources, so this repo labels regional or national proxy data clearly.
