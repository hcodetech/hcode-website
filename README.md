# Hcode Website

Company website for [hcode.tech](https://www.hcode.tech). Built with Next.js 16, React 19, and Tailwind CSS 3. Hosted on Vercel.

## Getting Started

```bash
yarn install
yarn dev        # Start dev server on http://localhost:3000
```


## Commands

| Command       | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| `yarn dev`    | Start dev server on port 3000                                  |
| `yarn build`  | Production build (runs `next build` then `next-sitemap`)       |

## Project Structure

```
pages/              # Next.js pages router (file-based routing)
  blog/             # Blog listing and individual post pages
  our-services/     # Service pages
  technologies/     # Technology pages
  api/              # Client-side API helpers (not server-side routes)
components/         # Shared React components (Navbar, Footer, MetaTags, etc.)
constants/          # Static data (testimonials, services, team, SVG icons)
content/blog/       # Markdown blog posts (89 posts, converted from WordPress)
utils/blog.js       # Blog utilities (getAllPosts, getPostBySlug)
scripts/            # One-time scripts (e.g., WordPress post conversion)
styles/global.scss  # Global styles and Tailwind component layer
public/assets/      # Static assets (images, icons, blog images)
```

## Blog

The blog lives at `/blog` and is built from Markdown files in `content/blog/`. Posts were migrated from the WordPress installation at `blog.hcode.tech`.

- **Blog listing:** `pages/blog/index.js` — grid of all posts sorted by date
- **Blog post:** `pages/blog/[slug].js` — individual post with SEO meta tags
- **Data utilities:** `utils/blog.js` — reads and parses markdown with `gray-matter` + `marked`
- **Blog images:** `public/assets/blog/` — images from WordPress `wp-content/uploads/`

### Adding a new blog post

1. Create a markdown file in `content/blog/your-slug.md` with frontmatter:

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

Your markdown content here.
```

2. Place any images in `public/assets/blog/` and reference as `/assets/blog/...`.
3. The sitemap is auto-generated on build — no manual steps needed.
4. Categories must match existing ones to appear in the filter (see current categories in any existing post). To add a new category, just use it in frontmatter — it will appear automatically.

## Key Constraints

- **Static export only** — do not use `getServerSideProps` or any feature requiring a Node.js server. Use `getStaticProps`/`getStaticPaths` only.
- **Tailwind custom colors:** `primary` (#276EF1), `secondary` (#FFC043), `cyan` (#61DAFB). Font: Poppins.
- **Google reCAPTCHA v3** wraps the app in `_app.js`.

## Git Branches

- `master` — Production-ready code
- `Deploy` — Dev/testing branch

## Deployment

Hosted on Vercel. Pushes to `master` trigger automatic production deployments.
