# Architecture

## Goal

AlQua'a Services is designed as a low-cost, mobile-first discovery hub for local services, opportunities, and events.

## Hackathon Architecture

```text
Resident browser
  -> Static web app
  -> Local JSON listing data
  -> Search, filter, and listing actions
  -> WhatsApp, phone, or map links
```

## Design Decisions

- Use a static web app first so judges can run and verify it easily.
- Store listings in JSON during the hackathon to avoid backend setup risk.
- Keep discovery open without resident accounts.
- Make Arabic-first UX the default product direction.
- Model services, events, and opportunities with one reusable listing schema.

## Listing Data Model

Expected fields:

- `id`
- `type`
- `title`
- `summary`
- `category`
- `audience`
- `urgency`
- `location`
- `languages`
- `contact`
- `mapUrl`
- `source`

## Future Production Path

1. Replace static JSON with Supabase, Firebase, or another managed data store.
2. Add trusted admin login for community maintainers.
3. Add moderation and listing expiry dates.
4. Add WhatsApp sharing or update opt-in if there is enough validation.
5. Add multi-community configuration.

## Constraints

- The prototype should not depend on paid infrastructure.
- The repo should remain easy to run locally.
- Any use of regional or national proxy data must be clearly labeled.
