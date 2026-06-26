# Criterion 5: Scalability After the Hackathon

## Scoring Target

Target band: **8-10 / 10**

The app should show a realistic path to reuse in other rural communities without a complete rebuild.

## Evidence Requirements

- Configurable data model.
- Clear path from static JSON to a database-backed admin system.
- Reusable categories and audience filters.
- Explain how another community could adopt it.

## Project-Specific Examples

- Replace `data/sample-listings.json` to launch a new community version.
- Keep listing fields generic: type, category, audience, urgency, location, contact, language.
- Add community-specific labels without changing the core app.
- Future admin panel could manage submissions and moderation.

## Checklist

- [ ] Data schema supports multiple listing types.
- [ ] README explains reuse beyond Al Qua'a.
- [ ] Architecture doc names future extension points.
- [ ] No hard-coded assumption prevents another rural community from using it.
- [ ] Scalability section includes operational scaling, not only technical scaling.

## Documentation Template

```md
### Replication Plan

To reuse this app for [community]:

1. Replace listing data.
2. Update community name and categories.
3. Assign a local maintainer.
4. Deploy the same app shell.

Expected effort:
- [hours/days]
```
