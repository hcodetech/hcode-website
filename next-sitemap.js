module.exports = {
  siteUrl: 'https://www.hcode.tech',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,

  // Additional paths that might not be auto-discovered
  additionalPaths: async (config) => [
    await config.transform(config, '/about/shashank-singla'),
    await config.transform(config, '/about/shweta-singla'),
    await config.transform(config, '/about/rishabh-garg'),
    await config.transform(config, '/about/mudit-sharma'),
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
    ],
    additionalSitemaps: [],
  },
}