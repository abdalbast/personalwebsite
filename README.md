## Abdalbast — AI & Web Portfolio

Minimal, fast portfolio focused on AI/ML and web projects. Built with Next.js (App Router), Tailwind, Framer Motion, MDX content, and static export for GitHub Pages.

### Features
- Content-driven: JSON/MDX under `content/`
- i18n stubs: `locales/en.json`, `sv.json`, `ckb.json`
- Components: `HeroMosaic`, `ProjectCard`, `LogoCloud`, `SkillsCloud`, `Timeline`
- SEO: metadata, JSON-LD, sitemap/robots
- Static export for GitHub Pages

### Local dev
```bash
npm i
npm run dev
```

### Content
- `content/profile.json`, `skills.json`, `timeline.json`, `logos.json`
- Projects: `content/projects/*.mdx` + `content/projects/index.json` order

### Deployment (GitHub Pages)
- GitHub Actions workflow deploys `out/` to Pages
- Base path: `/personalwebsite` (handled via `NEXT_PUBLIC_BASE_PATH`)
- Public URL: https://abdalbast.github.io/personalwebsite/

### Env
See `.env.example`:
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_CONTACT_EMAIL`
- `NEXT_PUBLIC_BASE_PATH`

Note: API routes aren’t used on GitHub Pages. The CTA uses `mailto:`.

### Licence
MIT
