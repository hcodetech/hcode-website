module.exports = {
  trailingSlash: true,
  async redirects() {
    return [
      // Blog slugs renamed for SEO-friendly, human-readable URLs (301).
      // Destinations carry the trailing slash (site uses trailingSlash:true) so
      // each resolves in one hop instead of bouncing through the slash redirect.
      {
        source: '/blog/3859-2',
        destination: '/blog/how-hcode-is-embracing-serverless-computing/',
        permanent: true,
      },
      {
        source: '/blog/9_real_world_use_cases_of_ai_in_the_travel_industry',
        destination: '/blog/9-real-world-use-cases-of-ai-in-the-travel-industry/',
        permanent: true,
      },

      // Legacy WordPress-era underscore URLs that still rank/earn impressions but
      // 404 on the current site. Map each to its hyphenated equivalent (301) to
      // recover the traffic and clear the soft-404s. /work_with_us alone had
      // ~170 clicks + 9.6k impressions over 12 months landing on a 404.
      { source: '/work_with_us', destination: '/work-with-us/', permanent: true },
      { source: '/our_work', destination: '/our-work/', permanent: true },
      { source: '/case_studies', destination: '/case-studies/', permanent: true },
      { source: '/our_services', destination: '/our-services/', permanent: true },
      { source: '/our_services/mvp', destination: '/our-services/mvp/', permanent: true },
      { source: '/our_services/blockchain', destination: '/our-services/blockchain/', permanent: true },
      { source: '/our_services/ai-service', destination: '/our-services/ai-service/', permanent: true },
      { source: '/our_services/hire-developer', destination: '/our-services/hire-developer/', permanent: true },
      { source: '/our_services/mern-developer', destination: '/our-services/mern-developer/', permanent: true },
      { source: '/our_services/ai_integration_services', destination: '/our-services/ai-integration-services/', permanent: true },
      { source: '/our_services/team_as_a_service', destination: '/our-services/team-as-a-service/', permanent: true },
      { source: '/our_services/developer_as_a_service', destination: '/our-services/developer-as-a-service/', permanent: true },
    ];
  },
};
