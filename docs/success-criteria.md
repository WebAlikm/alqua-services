# Success Criteria

These are the 15 measurable targets for the hackathon prototype. They are written as evidence requirements so the repository can prove progress instead of only describing intentions.

## Evidence Collection for Success Criteria

### Technical Performance: Criteria 1-5

| ID | Success Criterion | Evidence | File | Status |
| --- | --- | --- | --- | --- |
| SC1 | Load time under 3 seconds on simulated 3G. | WebPageTest, Lighthouse throttling, or browser performance screenshot. | `evidence/performance.md` | [ ] Tested [ ] Documented |
| SC2 | Works on iOS and Android mobile browsers. | Screenshots or device/browser test notes from both environments. | `evidence/device-compatibility.md` | [ ] Tested [ ] Documented |
| SC3 | Arabic RTL layout renders correctly. | Screenshot comparison showing Arabic layout, alignment, and readable labels. | `evidence/arabic-interface.md` | [ ] Tested [ ] Documented |
| SC4 | AI-assisted query handling understands at least 85% of test queries. | 20 logged Arabic/English test queries with expected vs actual result. | `evidence/ai-accuracy-test.csv` | [ ] Tested [ ] Documented |
| SC5 | WhatsApp delivery or share flow completes in under 30 seconds. | Timestamp logs from trigger to received/opened WhatsApp message or share intent. | `evidence/notification-speed.md` | [ ] Tested [ ] Documented |

### Usability: Criteria 6-10

| ID | Success Criterion | Evidence | File | Status |
| --- | --- | --- | --- | --- |
| SC6 | At least 80% task completion in user testing. | User testing with up to 15 people, or clearly marked smaller hackathon sample if 15 is not reached. | `evidence/user-testing.md` | [ ] Tested [ ] Documented |
| SC7 | Average task completion time under 3 minutes. | Stopwatch measurements during user testing. | `evidence/user-testing.md` | [ ] Tested [ ] Documented |
| SC8 | Average ease-of-use rating is 4 or higher out of 5. | Post-test survey rating. | `evidence/user-testing.md` | [ ] Tested [ ] Documented |
| SC9 | Zero critical accessibility violations. | WAVE, Lighthouse accessibility, or axe result screenshot. | `evidence/accessibility.md` | [ ] Tested [ ] Documented |
| SC10 | Directory contains at least 20 service, opportunity, or event records. | Data file count and app screenshot. | `evidence/service-coverage.md` | [ ] Tested [ ] Documented |

### Impact: Criteria 11-13

| ID | Success Criterion | Evidence | File | Status |
| --- | --- | --- | --- | --- |
| SC11 | Directory includes at least 3 service categories. | Category list visible in app and data file. | `evidence/service-coverage.md` | [ ] Tested [ ] Documented |
| SC12 | Survey or interview evidence validates the need. | Target: 50+ survey responses if reachable; otherwise document smaller sample and limitation honestly. | `evidence/survey-results.csv` | [ ] Tested [ ] Documented |
| SC13 | At least 70% of surveyed users say they would use it. | Survey question summary. | `evidence/survey-results.md` | [ ] Tested [ ] Documented |

### Scalability: Criteria 14-15

| ID | Success Criterion | Evidence | File | Status |
| --- | --- | --- | --- | --- |
| SC14 | A new community configuration can be created in under 2 hours. | Timed replication test using copied data/config labels. | `evidence/replication-test.md` | [ ] Tested [ ] Documented |
| SC15 | MIT license is included in the repository. | `LICENSE` file exists. | `LICENSE` | [x] Tested [x] Documented |

## Completion Status

Validated criteria: **1 / 15**

Submission readiness: [ ] All evidence documented

## Evidence Priorities

1. Build the 20+ listing data set because it unlocks SC10 and SC11.
2. Implement Arabic RTL layout before final UI polish because it affects SC3 and accessibility.
3. Keep AI scope narrow: classify resident queries into relevant listings, not a general chatbot.
4. Use WhatsApp share or delivery flow that can be timestamped reliably within the hackathon constraints.
5. Collect user-testing evidence early, even if the sample size is smaller than the ideal target.

## Final Evaluation Template

| Criterion | Pass / Partial / Fail | Evidence Link | Notes |
| --- | --- | --- | --- |
| SC1 | Pending | `evidence/performance.md` | Pending |
| SC2 | Pending | `evidence/device-compatibility.md` | Pending |
| SC3 | Pending | `evidence/arabic-interface.md` | Pending |
| SC4 | Pending | `evidence/ai-accuracy-test.csv` | Pending |
| SC5 | Pending | `evidence/notification-speed.md` | Pending |
| SC6 | Pending | `evidence/user-testing.md` | Pending |
| SC7 | Pending | `evidence/user-testing.md` | Pending |
| SC8 | Pending | `evidence/user-testing.md` | Pending |
| SC9 | Pending | `evidence/accessibility.md` | Pending |
| SC10 | Pending | `evidence/service-coverage.md` | Pending |
| SC11 | Pending | `evidence/service-coverage.md` | Pending |
| SC12 | Pending | `evidence/survey-results.csv` | Pending |
| SC13 | Pending | `evidence/survey-results.md` | Pending |
| SC14 | Pending | `evidence/replication-test.md` | Pending |
| SC15 | Pass | `LICENSE` | MIT license added |
