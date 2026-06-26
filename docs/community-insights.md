# Community Insights

This section documents the community assumptions behind AlQua'a Services. Where village-level Al Qua'a data is not publicly available, the project uses the nearest defensible proxy and labels it clearly.

## Research Confidence

| Topic | Status | How It Is Used |
| --- | --- | --- |
| Al Qua'a exact population | Not found in public official sources during research | Do not claim an exact village population. Use Al Ain Region context instead. |
| Al Ain Region population | Official SCAD census source available | Use as regional context for deployment and scalability. |
| Average age | Abu Dhabi emirate source available; Al Qua'a-specific source not found | Use Abu Dhabi median age as a proxy only. |
| Internet and mobile adoption | UAE national source available | Use to justify mobile web delivery, not to claim rural adoption is identical. |
| Challenge pain point | Official hackathon README available | Use as the documented problem basis for Challenge 4. |

## Demographics: Al Qua'a, Al Ain

| Field | Research Finding | Source / Confidence |
| --- | --- | --- |
| Population | Exact Al Qua'a population was not found in an official public source. The closest useful official proxy is Al Ain Region, which SCAD reports at 986,910 residents in 2024, representing 23.9% of Abu Dhabi emirate. | SCAD Abu Dhabi Census 2024; high confidence for regional figure, low confidence for village-level figure. |
| Average age | Exact Al Qua'a average age was not found. SCAD reports Abu Dhabi emirate median age as 33 in 2024, with 54% of residents in the 25-44 age range. | SCAD Abu Dhabi Census 2024; use as emirate-level proxy only. |
| Primary languages | Arabic should be treated as the primary interface language. English support is useful for bilingual residents, visitors, and service providers. | Product assumption based on UAE/Al Ain context; should be validated locally. |
| Internet penetration | DataReportal reports 11.3 million UAE internet users in October 2025, equal to 99.0% internet penetration nationally. | National proxy; does not prove Al Qua'a rural penetration. |
| Mobile access | DataReportal reports 23.0 million UAE cellular mobile connections in late 2025, equal to 202% of population, and states that 100% of mobile connections are broadband. | National proxy; supports mobile-first design. |
| Smartphone adoption | A clean public Al Qua'a-specific smartphone adoption figure was not found. The safest proxy is high national mobile/broadband adoption, paired with a conservative UX assumption. | Use simple mobile web and WhatsApp-style interactions. |
| Digital literacy | Treat as mixed: younger entrepreneurs may be comfortable with Instagram and common apps; older residents may need family help or a very simple Arabic interface. | Conservative product assumption; validate through user interviews if time allows. |

## Documented Pain Points

### 1. Residents may not know what services, opportunities, and events exist

The hackathon's Challenge 4 states that residents are not always aware of local services, opportunities, and events, and that there is no simple way to find them or stay informed.

Product implication: create one searchable hub for services, events, and opportunities, with clear categories and contact actions.

### 2. Al Qua'a belongs to a dispersed rural context, so discovery must work without complex navigation

The Tatweer brief describes Al Qua'a as a community in the Al Ain region and frames the track around rural communities. The same brief notes local characteristics such as camel farms and stargazing, which reinforces that the product should feel local instead of generic.

Product implication: design for mobile use, simple filters, map/contact buttons, and locally relevant categories such as family services, farm needs, youth opportunities, and community events.

### 3. Digital adoption is high nationally, but rural and older-user usability should be treated conservatively

National UAE data supports a digital delivery model, but it does not remove the need for low-friction UX. A rural community hub should work even for users whose main digital habit is opening a link from WhatsApp.

Product implication: avoid forcing account creation in the prototype, make Arabic the default direction, keep actions obvious, and provide direct WhatsApp/contact/map links.

## User Personas

### Persona 1: Fatima, 45, Homemaker

- Needs: healthcare access, children's education updates, family services, community events.
- Tech comfort: low; comfortable opening WhatsApp links and reading simple pages.
- Language: Arabic only.
- Pain point: useful announcements may be scattered across informal chats, so she may miss a clinic schedule, school activity, or family service.
- Design response: Arabic-first home screen, audience filter for families, large service cards, direct contact buttons.

### Persona 2: Ahmed, 28, Small Business Owner

- Needs: customer reach, local event visibility, government/business support opportunities, digital payment/service contacts.
- Tech comfort: moderate; uses Instagram, WhatsApp, and basic business tools.
- Language: Arabic primary, some English.
- Pain point: he may not know where to promote a local offer or find relevant opportunities for small businesses.
- Design response: opportunity category, entrepreneur audience filter, shareable listing links, future admin submission flow.

### Persona 3: Mariam, 67, Retiree

- Needs: healthcare services, government service guidance, transport/location clarity, family-assisted access.
- Tech comfort: very low; family often helps with phone tasks.
- Language: Arabic only.
- Pain point: online government or service information can be hard to navigate without help, especially if the path requires multiple websites or logins.
- Design response: no-login browsing, simple Arabic labels, phone/WhatsApp-first contact actions, clear "urgent" and "nearby" tags.

## Product Requirements From Research

- Arabic-first interface with optional English labels.
- Mobile-first layout that works from a shared WhatsApp link.
- No account required for resident discovery in the prototype.
- Search and filters by category, audience, urgency, and type.
- Each listing should show what it is, who it helps, when it is available, and how to contact or navigate to it.
- Data model should support services, events, and opportunities together.
- Repository should include sample listings and test cases rather than relying on unsupported claims.

## Source Links

- SCAD Abu Dhabi Census 2024: https://census.scad.gov.ae/home/population?tab=webreport&year=2024&lang=en
- DataReportal, Digital 2026: The United Arab Emirates: https://datareportal.com/reports/digital-2026-united-arab-emirates
- Tatweer Hackathon participant handbook and challenge descriptions: https://github.com/TatweerHackathon/Tatweer-Hackathon
- Associated Press coverage of Al Quaa Desert stargazing context: https://apnews.com/article/ee678e1b535df81edc96f5140ad5e998
