# HW Team Website

Company website for HW Team: services, portfolio, team and contact.

Built with Next.js 16 (App Router, Turbopack), Tailwind CSS v4, Motion and
Phosphor icons. Dark editorial-technical design with a single acid-lime accent.

## Pages

| Route      | Content                                             |
| ---------- | --------------------------------------------------- |
| `/`        | Home: hero, services, work, process, team, CTA      |
| `/services`| Six service lines with deliverables                 |
| `/work`    | Case studies: Dr.Jade, Barbestro, Bossnoi, Camellia, Networkz, Z Intelligence, Digital Product + LMS |
| `/contact` | Quote form + direct contact info                    |

## Stack

- Next.js 16 (App Router, Server Components, Turbopack)
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- Motion (`motion/react`) for hero reveal
- `@phosphor-icons/react` icons
- Geist + Geist Mono via `next/font`

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
npm start        # serve the production build
```

## Structure

```
src/
  app/          # routes: layout, page, services, work, contact
  components/   # Nav, Footer, Hero, Marquee, ServiceList, CaseRows, ...
  lib/data.ts   # services, case studies, team, contact constants
```

## Contact

- Email: czteam6868@gmail.com
- Telegram: @cznakinkul

Built by the HW Team DS Eng Squad. Deployed preview on Coolify.
