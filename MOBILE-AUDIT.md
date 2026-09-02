# Mobile Audit — Motorana (Next.js)

Method: automated sweep of all 9 routes at 320 / 375 / 390 / 414 / 768px
(document scrollWidth check, per-element viewport-edge check, clipped-text
check, tap-target measurement) plus visual screenshots at 320 and 390px and
manual code review of every interactive component.

**Automated result: 0 horizontal overflow, 0 clipped text, on every route at
every width.** Grids collapse to one column cleanly; forms, accordions,
filters and the chatbot all work by tap (verified in an earlier emulated-touch
pass: menu open/close, chat full flow, fleet filter, both forms).

## Findings

| # | Page | Section | Issue | Severity | File:line | Proposed fix |
|---|------|---------|-------|----------|-----------|--------------|
| 1 | all | Header | Logo image has a fixed 44px height and never shrinks, so below ~380px viewport the hamburger is pushed partly/fully off-screen (untappable at 320px; ~3px clipped at 375px). Doc-level overflow doesn't register because the flex row hides it. | **HIGH** | components/layout/Header.tsx:25-33 | Let the logo shrink: `minWidth:0; flex:'0 1 auto'` on the logo Link and `maxWidth:100%; height:auto; maxHeight:44px` on the img. Desktop unchanged (ample space keeps it at 44px). |
| 2 | all | Mobile menu | If the menu is open and the viewport grows to ≥960px, the menu panel stays visible below the desktop header. The original site auto-closed it on the desktop switch; this port lost that. | **MEDIUM** | components/layout/Header.tsx:126-170 | Hide the mobile-menu nav at ≥960px with the existing `.mobile-only`-style media query (CSS, no JS needed). |
| 3 | all | Mobile menu | No Escape-key close and no tap-outside close. **Matches source behavior** (menu is a push-down panel, not an overlay) — this would be an enhancement beyond the approved design. | LOW (opt-in) | components/layout/Header.tsx | Add a keydown(Escape) listener while open; optionally close on outside tap. Invisible to desktop. Awaiting your go-ahead. |
| 4 | all | Mobile menu | Background can still scroll while the menu is open. **Intentional**: the menu pushes content down (in-flow, same as source) rather than overlaying it, so a scroll lock is neither needed nor present in the original. | INFO | — | None. |
| 5 | all | Footer, promo bar, inline links, chat, filters | Tap targets under 44px: footer page/contact links (~21px tall), Privacy / Rental terms (~18px), promo-bar "Call" link (~20px), inline arrow links ("View all vehicles →", "Enquire →", "All service areas →", "Read all FAQs →", "Send an enquiry"), chat close button (36×36), fleet filter chips (~37px tall). **All match the approved source design's sizes.** | LOW (opt-in) | Footer.tsx, PromoBar.tsx, ChatWidget.tsx, FleetView.tsx, various | Mobile-only hit-area enlargement that doesn't change the visual: add padding and equal negative margin (with a comment) under a max-width:959px query. Desktop untouched. Awaiting your go-ahead. |
| 6 | all | Typography | Some text below 16px: promo bar 14px, trust-stat labels 14px, footer 13–15px, vehicle tags 12px, disclaimers 12–13px. **Intentional — these sizes come straight from the approved source design**; body copy and form inputs are 16px+. | INFO | — | None. |
| 7 | all | Hidden content sweep | Everything hidden at mobile widths is deliberate and has a mobile equivalent: desktop nav + header CTA (`.desktop-only`) → hamburger menu containing the same 8 links + "Enquire now"; mobile sticky bar hidden on desktop; sticky bar + bottom CTA hidden on /contact (source behavior — the page itself is the enquiry form). No other `display:none`, no fixed-height clipping, no line-clamp, no unreachable carousel/tab/accordion content found on any page. | INFO | — | None. |
| 8 | all | Header a11y | Hamburger `aria-label` stays "Open menu" when the menu is open (`aria-expanded` does toggle correctly, as in the source). | LOW | components/layout/Header.tsx:100 | Switch label to "Close menu" when open. |
| 9 | all | Anchors / sticky header | Header is sticky but there is no `scroll-padding-top`. Currently harmless: the site has no in-page anchor navigation (footer `#privacy` / `#terms` are dead placeholders carried over from the source). | INFO (opt-in) | app/globals.css | Optionally add `html { scroll-padding-top: 80px }` future-proofing. |
| 10 | all | Images | Pass: every photo is served through next/image (automatic srcset/sizes, phone-sized files verified — e.g. 828w variant ≈ 57KB vs 768KB original), sits in an `aspect-ratio` container (zero layout shift), photos use `object-fit: cover` with centered subjects, logos use `contain` with intrinsic dimensions. Vehicle/photo grids collapse to one column. | INFO | — | None. |
| 11 | all | Forms | Pass: visible labels on every field, `type="tel"` / `type="email"` give the right keyboards, inputs are full-width, error + success states work by tap. | INFO | — | None. |
| 12 | all | Chat widget | Pass: fits 320px (`min(360px, 100vw − 32px)`), height capped at 70vh, lifts above the sticky CTA bar on mobile, open/close/flow verified by touch emulation. Sticky bar already handles `env(safe-area-inset-bottom)`. | INFO | — | None. |

## Totals

- **12 findings: 1 HIGH, 1 MEDIUM, 3 LOW (of which 2 are opt-in enhancements beyond the approved design), 7 INFO/pass.**
- The two real defects (#1, #2) are both in `components/layout/Header.tsx`.
- Nothing hidden on mobile was found to be unintentional (#7).

## Not a site issue

During the automated sweep, headless Chrome repeatedly wedged after ~10
navigations when loading images; blocking image requests fixed the harness.
Real-browser loads of the same pages (screenshots at 320/390/1440) render all
images fine — tooling artifact, not a site defect.
