# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hcode Technologies company website (hcode.tech). Built with Next.js 11, React 17, and Tailwind CSS 2 (JIT mode). Statically exported and hosted on AWS S3 + CloudFront — **no server-side rendering**. All pages must work as static HTML exports.

## Commands

- `yarn dev` — Start dev server on port 3000
- `yarn build` — Static export to `out/` directory (runs `next build && next export`, then `next-sitemap`)
- `yarn deploy` — Deploy `out/` to S3 bucket and invalidate CloudFront cache (requires AWS CLI configured)

No test suite or linter is configured.

**Note:** Requires `NODE_OPTIONS=--openssl-legacy-provider` (already set in scripts).

## Architecture

- **Pages router** (`pages/`): Next.js pages router with file-based routing. Key routes: homepage (`index.js`), service pages (`our-services/`), technology pages (`technologies/`), about, contact, work-with-us.
- **Components** (`components/`): Shared React components (Navbar, Footer, HeroSection, MetaTags, etc.). Flat structure with one `atoms/` subdirectory.
- **Constants** (`constants/constants.js`): Static data for testimonials, services, team info, etc. `constants/Icons.jsx` holds SVG icon components.
- **API layer** (`pages/api/APIRoutes.js`, `pages/api/APIHelpers.js`): Client-side API calls to `portal.hcode.tech/api/v1/`. Used for fetching projects/portfolio and submitting contact leads.
- **Styles**: Tailwind CSS as primary styling + `styles/global.scss` for global overrides. SCSS via `sass` package.
- **Static assets**: `public/assets/` for images/icons referenced in components and tailwind config.

## Key Constraints

- **Static export only**: Do not use `getServerSideProps`, API routes that run server-side, or any feature requiring a Node.js server. Use `getStaticProps`/`getStaticPaths` if needed.
- **Google reCAPTCHA v3** wraps the entire app in `_app.js` via `react-google-recaptcha-v3`.
- **Tailwind custom colors**: `primary` (#276EF1), `secondary` (#FFC043), `cyan` (#61DAFB). Font: Poppins.
- **Custom background images** are defined in `tailwind.config.js` under `theme.extend.backgroundImage`.

## Git Branches

- `master` (main): Production-ready code
- `Deploy`: Dev/testing branch
