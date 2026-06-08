module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      // Blog slugs renamed for SEO-friendly, human-readable URLs (301).
      {
        source: '/blog/3859-2',
        destination: '/blog/how-hcode-is-embracing-serverless-computing',
        permanent: true,
      },
      {
        source: '/blog/9_real_world_use_cases_of_ai_in_the_travel_industry',
        destination: '/blog/9-real-world-use-cases-of-ai-in-the-travel-industry',
        permanent: true,
      },
    ];
  },
};
