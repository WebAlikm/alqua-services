# Project Rationale

## Problem Statement

Residents in Al Qua'a and similar rural communities may miss useful services, opportunities, and events because information is spread across informal channels, word of mouth, social posts, and separate official sources. This creates a discovery gap: the resource may exist, but the resident may not know about it in time.

## Chosen Challenge

**Challenge 4 - Connecting residents to services, opportunities and events**

The challenge states that residents are not always aware of local services, opportunities, and events, and that there is no simple way to find them or stay informed. AlQua'a Services addresses that specific gap by combining a structured local directory with Arabic-first search, resident-friendly filtering, and WhatsApp-style delivery paths.

## Specific Challenge Details

Challenge 4 is not only a listing problem. It has three parts:

1. **Discovery:** residents need to find services, opportunities, and events that already exist.
2. **Relevance:** residents need to see the items that match their situation, such as family, healthcare, youth, entrepreneurs, or older residents.
3. **Staying informed:** residents need a low-friction way to receive or share updates without checking many separate channels.

The product strategy is to build a focused prototype that proves these three parts through a searchable directory, Arabic RTL interface, AI-assisted query handling, and WhatsApp-first notification or sharing flow.

## Target Users

Primary users:

- Arabic-first residents.
- Families looking for services, education updates, healthcare, or events.
- Youth and entrepreneurs looking for opportunities.
- Farm owners and local service providers.
- Older residents who may need simple contact-first navigation.

Secondary users:

- Community organizations.
- Schools.
- Municipality or public-service teams.
- Volunteer maintainers who can update listings.

## Why This Problem Matters

The value is not only convenience. Better discovery can help residents:

- Find services before a need becomes urgent.
- Attend local events and programs.
- Access opportunities that would otherwise be missed.
- Contact the right provider faster.
- Reduce dependence on scattered forwarding chains.

## Current Alternatives and Gaps

| Alternative | Strength | Gap |
| --- | --- | --- |
| WhatsApp groups | Familiar and fast | Hard to search, information gets buried, not everyone is in the same group |
| Instagram posts | Visual and shareable | Not structured by audience, urgency, or service type |
| Official portals | Authoritative | Often broad, formal, and not organized around local rural discovery |
| Word of mouth | Trusted | Inconsistent and excludes people outside a personal network |

## Proposed Solution

AlQua'a Services is a mobile-first discovery hub for local services, events, and opportunities. It gives residents one place to search, filter, ask simple natural-language questions, and act through contact, WhatsApp, or map links.

## Challenge-to-Feature Mapping

| Challenge Need | Product Response | Evidence Target |
| --- | --- | --- |
| Residents do not know what exists | Directory with 20+ service/opportunity/event listings | `evidence/service-coverage.md` |
| Residents need relevant information | Audience, category, and urgency filters | `evidence/user-testing.md` |
| Arabic-first residents need simple access | RTL Arabic interface and plain labels | `evidence/arabic-interface.md` |
| Residents may ask in natural language | AI-assisted query layer tested against 20 queries | `evidence/ai-accuracy-test.csv` |
| Residents need updates in familiar channels | WhatsApp delivery/share flow with timestamp evidence | `evidence/notification-speed.md` |
| Rural deployment must be realistic | Static-first architecture and low-cost deployment plan | `docs/technical-justification.md` |

## Local Fit

The product is designed for:

- Arabic-first use.
- Low-friction mobile access.
- Rural dispersion.
- Family and community-centered discovery.
- Direct action rather than complex navigation.

## Expected Impact

The project should help residents move from "I do not know where to look" to "I found a relevant listing and know what to do next" in under one minute.

## Boundaries

The hackathon prototype will not claim to be an official government service or emergency system. It will demonstrate a practical discovery layer that can be maintained by a trusted community organization and later connected to official data sources or notification systems.
