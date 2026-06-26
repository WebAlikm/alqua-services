# Criterion 3: Feasibility of Implementation

## Scoring Target

Target band: **8-10 / 10**

The solution should look deployable in a rural setting with low cost, minimal maintenance, and realistic operating assumptions.

## Evidence Requirements

- Explain hosting and maintenance cost.
- Avoid depending on government contracts or complex infrastructure for the prototype.
- Name who could maintain listings.
- Show that the app can run from static hosting.

## Project-Specific Examples

- Static web app deployable on GitHub Pages or Vercel.
- JSON-based listing data for prototype verification.
- Future admin workflow can be managed by a school, municipality team, community center, or trusted volunteer.
- No resident login required for discovery.

## Checklist

- [ ] README explains low-cost deployment.
- [ ] `docs/deployment.md` includes hosting plan.
- [ ] App can be built locally.
- [ ] Prototype does not require paid services.
- [ ] Maintenance role is documented.

## Documentation Template

```md
### Feasibility Note

Deployment model:
- [static hosting / Vercel / GitHub Pages]

Operating cost:
- [free prototype / estimated production cost]

Maintainer:
- [community org / school / municipality / volunteer]

Main constraint:
- [data freshness, admin trust, moderation]
```
