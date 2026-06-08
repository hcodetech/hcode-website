const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Blog posts marked `noindex: true` in frontmatter must not appear in the
// sitemap (a sitemap should only list indexable URLs). Computed at build time
// so future noindex flags are excluded automatically.
function noindexBlogPaths() {
  const dir = path.join(process.cwd(), 'content', 'blog');
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.md'))
      .filter((f) => matter(fs.readFileSync(path.join(dir, f), 'utf-8')).data.noindex === true)
      .map((f) => `/blog/${f.replace(/\.md$/, '')}`);
  } catch (e) {
    return [];
  }
}

module.exports = {
  siteUrl: 'https://www.hcode.tech',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,

  // Keep non-content routes out of the sitemap: a React hook accidentally placed
  // under pages/ (exposed as /hooks/useGetFetch) and an internal color-swatch
  // reference page (/stylesheet). Neither is indexable content.
  exclude: ['/hooks/useGetFetch', '/hooks/*', '/stylesheet', ...noindexBlogPaths()],

  // Additional paths that might not be auto-discovered
  additionalPaths: async (config) => [
    await config.transform(config, '/about/shashank-singla'),
    await config.transform(config, '/about/shweta-singla'),
    await config.transform(config, '/about/rishabh-garg'),
    await config.transform(config, '/about/mudit-sharma'),
    // Machine-readable files for AI discoverability
    {
      loc: '/llms.txt',
      changefreq: 'monthly',
      priority: 0.5,
      lastmod: new Date().toISOString(),
    },
  ],

  // Custom priority and changefreq per page
  transform: async (config, path) => {
    // Higher priority for important pages
    if (path === '/' || path === '/about' || path === '/contact') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Bio pages - medium-high priority
    if (path.startsWith('/about/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Services pages - high priority
    if (path.startsWith('/our-services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Blog pages
    if (path.startsWith('/blog')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.7,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      }
    }

    // Default config
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    }
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot', // OpenAI
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User', // ChatGPT
        allow: '/',
      },
      {
        userAgent: 'Google-Extended', // Google Bard/Gemini
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai', // Claude
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot', // Claude
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot', // Perplexity
        allow: '/',
      },
      {
        userAgent: 'CCBot', // Common Crawl
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
}