# PLAN — Phase 1+2 (Foundation + Home + all pages)

## Deliverables
1. Next.js 15 App Router + Tailwind v4 + Motion, TypeScript
2. Design system: dark base (near-black), one acid-lime accent, mono eyebrows, display sans
3. Pages: `/` (home), `/services`, `/work`, `/contact` (team folds into home + contact)
4. Components: nav, hero, services grid, case-study rows, team, quote form, footer
5. README + GSD artifacts

## UAT criteria
- [ ] Build passes: `npm run build` exits 0
- [ ] Lint passes: `npm run lint` exits 0
- [ ] Mobile-first: no horizontal scroll at 375px, nav collapses to menu
- [ ] Every nav link resolves to a real page
- [ ] Portfolio lists all 7 named clients
- [ ] Contact form renders with validation; submit path defined
- [ ] Zero em-dashes, one accent color, one radius system, no AI-default layout
- [ ] Lighthouse-style: LCP < 2.5s, no layout shift (self-check via build + browser)

## Atomic commits
1. scaffold: Next.js + Tailwind + tokens
2. home: hero + services + portfolio + team + contact
3. pages: services, work, contact
4. docs: README, GSD artifacts
