# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hcode Technologies company website (hcode.tech). Built with Next.js 11, React 17, and Tailwind CSS 2 (JIT mode). Hosted on Vercel — **no server-side rendering**. All pages must work as static exports.

## Commands

- `yarn dev` — Start dev server on port 3000
- `yarn build` — Production build (runs `next build`, then `next-sitemap`)

No test suite or linter is configured.

**Note:** Requires `NODE_OPTIONS=--openssl-legacy-provider` (already set in scripts).

## Architecture

- **Pages router** (`pages/`): Next.js pages router with file-based routing. Key routes: homepage (`index.js`), service pages (`our-services/`), technology pages (`technologies/`), about, contact, work-with-us, blog.
- **Blog** (`pages/blog/`, `content/blog/`, `utils/blog.js`): Markdown-based blog. Posts live in `content/blog/*.md` with YAML frontmatter. Parsed with `gray-matter` + `marked`. Images in `public/assets/blog/`. Sitemap auto-generated via `next-sitemap`.
- **Components** (`components/`): Shared React components (Navbar, Footer, HeroSection, MetaTags, etc.). Flat structure with one `atoms/` subdirectory. `_app.js` renders Navbar and Footer globally — do not add them in individual pages.
- **Constants** (`constants/constants.js`): Static data for testimonials, services, team info, etc. `constants/Icons.jsx` holds SVG icon components.
- **API layer** (`pages/api/APIRoutes.js`, `pages/api/APIHelpers.js`): Client-side API calls to `portal.hcode.tech/api/v1/`. Used for fetching projects/portfolio and submitting contact leads.
- **Styles**: Tailwind CSS as primary styling + `styles/global.scss` for global overrides. SCSS via `sass` package. Blog content uses `.blog-content` class.
- **Static assets**: `public/assets/` for images/icons referenced in components and tailwind config.

## Blog: Adding a New Post

1. Create `content/blog/your-slug.md` with frontmatter:
   ```yaml
   ---
   title: "Post Title"
   date: "2025-09-12"
   excerpt: "Short description"
   featuredImage: "/assets/blog/2025/09/image.png"
   ogTitle: "SEO title"
   ogDescription: "SEO description"
   categories: ["Web development"]
   tags: ["React", "Next.js"]
   ---
   ```
2. Place images in `public/assets/blog/` and reference them as `/assets/blog/...` in markdown.
3. The sitemap is auto-generated on build via `next-sitemap` — no manual steps needed.
4. Blog pages use `getStaticProps`/`getStaticPaths`, so they are statically generated at build time.

## Key Constraints

- **Static export only**: Do not use `getServerSideProps`, API routes that run server-side, or any feature requiring a Node.js server. Use `getStaticProps`/`getStaticPaths` if needed.
- **Global layout in `_app.js`**: Navbar and Footer are rendered in `_app.js` — do not duplicate them in page components.
- **Google reCAPTCHA v3** wraps the entire app in `_app.js` via `react-google-recaptcha-v3`.
- **Tailwind custom colors**: `primary` (#276EF1), `secondary` (#FFC043), `cyan` (#61DAFB). Font: Poppins.
- **Custom background images** are defined in `tailwind.config.js` under `theme.extend.backgroundImage`.

## Deployment

Hosted on Vercel. Pushes to `master` trigger automatic production deployments.

## Git Branches

- `master` (main): Production-ready code
- `Deploy`: Dev/testing branch
