# Portfolio Redesign — Progress Notes

> Next Hermes session: read this first. Task = full redesign of Masa Cheung's portfolio
> (`~/Documents/Projects/portfolio`). **User communicates in Cantonese — reply in Cantonese.**

## Current state
- **All code for round 1 is DONE, committed, pushed** to branch `astro-redesign`
  (remote `github.com/masacheung/portfolio`). Latest commit: `2ec26f7`.
- **Build passes.** `npm run build` → green. `dist/` verified: light theme, profile photo,
  3 side-project screenshots, 0 leftover dark classes.
- **Waiting on the user for round-2 feedback.** They preview locally
  (`npm run preview`), then give more comments. Do NOT start new design work until they
  send round-2 notes. When they do: apply → `npm run build` → verify dist → commit → push.
- Old site preserved in `old-site/` dir + `main` branch. Do NOT delete either.
- Deploy: `.github/workflows/deploy.yml` (GitHub Pages via Actions) exists but is **not
  enabled** — user must, after merging: Settings → Pages → Source = "GitHub Actions".

## Stack & layout (so you don't re-derive it)
- **Astro 5 + Tailwind 3** on Node 22.9. Do NOT upgrade Astro (7 needs Node 22.12+; this box
  is 22.9). Pin to what's in package.json.
- Single page, sections in `src/components/`: Header / Hero / About / Experience /
  Projects (+ProjectCard) / Stack / Footer, all composed in `src/layouts/Base.astro`.
- **Theme is LIGHT** (switched from dark in round 1): `bg-white` / `bg-zinc-50` sections,
  `text-zinc-900` headings, `text-zinc-600` body, accent = `cyan-600/700`, cards
  `border-zinc-200`. `theme-color` meta = `#ffffff`. Favicon = `/profile.jpg`.
- **Content data is the source of truth, not the components:**
  - `src/data/site.ts` — name, tagline, email, GitHub/LinkedIn, resume URL, ogImage
  - `src/data/experience.ts` — job timeline bullets
  - `src/data/projects.ts` — 6 projects, each `{ name, tagline, description, highlights[],
    tech[], links[], featured?, image? }`. `featured=true` = work project (big card, no image);
    the 3 side projects carry `image: '/masanote.png' | '/triolingo.png' | '/dropping.png'`.
- Resume PDF: `public/resume.pdf` (from `assets/masa_cheung_resume.pdf`) — read it; it is the
  source of truth for the experience bullets.
- Images in `public/`: `profile.jpg` (cropped from `old-site/images/banner.jpg` — crop coords
  in `scripts/images.mjs`), `masanote.png`, `triolingo.png`, `dropping.png`
  (`dropping.gif` also exists if you want the animation), `og-image.png`
  (regenerate with `scripts/og-image.mjs`).
- Projects shown: Quick History (AI Java→JS rewrite), Volume Match (~4y JS trading),
  Product Builder (~2y React auctions) = featured work; MasaNote / Triolingo / Dropping Down
  = side projects (with screenshots).

## Round 1 (already done — for reference, do NOT redo)
1. Header logo `~/masa-cheung` → profile photo + "Masa Cheung".
2. Whole site dark → light (all components + Base.astro + global.css).
3. Profile photo added to Hero (right column, 340×420, glow).
4. Side-project screenshots rendered in ProjectCard (16:9, object-top, hover zoom, linked).

## Workflow gotchas (learned, apply every time)
- **No Chromium on this box** → browser tool fails ("Chromium missing"). Do NOT try to install
  it mid-task. Verify via `npm run build` + grep `dist/index.html` for expected strings +
  `vision_analyze` on generated images only.
- **No `gh` CLI.** git creds are cached — `git commit && git push` just works.
- MSYS/bash shell: `cd` works, but pass **`C:/Users/...` forward-slash paths** to native tools
  (git, node, rg). Bare `/tmp` won't reach a native tool — use `$LOCALAPPDATA/Temp` or `$TMPDIR`.
- `write_file` refuses to overwrite a file you haven't read in this session → `read_file` first.
- AGENTS.md suggests `astro dev --background` (Astro 7 feature). On Astro 5 use a background
  terminal instead.
- Don't add JSX-style helper `function Card()` inside `.astro` frontmatter — use separate
  `.astro` components (ProjectCard.astro is the pattern).
- `.idea/` is gitignored + was `git rm --cached` once; don't re-commit it.
