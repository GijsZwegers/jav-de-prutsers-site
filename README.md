# JAV Luyksgestel De Prutsers — website

Statische Next.js-website voor carnavalsvereniging JAV Luyksgestel De Prutsers.

## Ontwikkelen

```bash
npm install
npm run dev
```

## Statische build genereren

```bash
npm run build
```

De uitvoer komt in de map `out/` (via `output: "export"` in `next.config.ts`) en kan direct op elke statische
hosting (bv. Vercel, Netlify, GitHub Pages, of een gewone webserver) geplaatst worden.

## Pagina's

- `/` — Home met fullscreen achtergrondslider en "Wie zijn wij"
- `/sponsoren` — Overzicht van alle sponsoren
- `/media` — Facebook-integratie
- `/club-van-11` — Informatie over de Club van 11
- `/lid-worden` — Aanmeldformulier voor nieuwe leden

Op elke pagina staat onderaan een doorlopende sponsorslider (`src/components/SponsorSlider.tsx`).
Sponsorgegevens staan in `src/lib/sponsors.ts`.

## Facebook op de Media-pagina

Gebruikt de gratis Facebook Page Plugin (iframe, geen API-key nodig, werkt direct). Pas de paginanaam aan in
`src/components/FacebookFeed.tsx` (`FACEBOOK_PAGE_URL`) als de exacte Facebook-URL afwijkt.

## Deployen

Zie **[DEPLOY.md](DEPLOY.md)** voor het automatisch bouwen en uploaden naar de FTP-server via
GitHub Actions bij elke push naar `main`.

## Afbeeldingen

- `public/images/backgrounds/` — achtergronden voor de homepage-slider
- `public/images/sponsors/` — sponsorlogo's
- `public/images/logo.jpg`, `public/images/logo-transparent-white.png`, `public/images/logo-transparent-black.png` — verenigingslogo (jpg met witte achtergrond, en twee transparante varianten voor donkere/lichte ondergrond)
