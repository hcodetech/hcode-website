import Head from 'next/head';
import { useState, useMemo } from 'react';
import MetaTags from '../../components/MetaTags';
import { getAllPosts } from '../../utils/blog';

const PAGE_META = {
  title: 'Blog | Hcode Technologies',
  description:
    'Insights on software development, AI, blockchain, and technology trends from the Hcode Technologies team.',
  url: 'https://www.hcode.tech/blog',
  share_image: 'https://www.hcode.tech/assets/hcode_og.png',
};

const POSTS_PER_PAGE = 12;

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex({ posts, allCategories }) {
  const [page, setPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState(null);

  const filteredPosts = useMemo(() => {
    if (!activeCategory) return posts;
    return posts.filter((p) => p.categories.includes(activeCategory));
  }, [posts, activeCategory]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  function handleCategoryChange(value) {
    setPage(1);
    setActiveCategory(value === activeCategory ? null : value);
  }

  return (
    <>
      <Head>
        <title>{PAGE_META.title}</title>
        <MetaTags page={PAGE_META} />
      </Head>
      <div className="pt-24 pb-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-poppins text-[26px] font-semibold leading-8 sm:text-4xl">
              Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Insights on software development, technology, and innovation.
            </p>
          </div>

          {/* Category filter */}
          <div className="mt-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-medium text-gray-700 mr-1">
                Categories:
              </span>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-3 py-1 rounded-full text-sm border transition-colors duration-100 ${
                    activeCategory === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white text-gray-600 border-gray-300 hover:border-primary hover:text-primary'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            {activeCategory && (
              <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                <span>
                  Showing {filteredPosts.length} of {posts.length} posts
                </span>
                <button
                  onClick={() => {
                    setActiveCategory(null);
                    setPage(1);
                  }}
                  className="text-primary hover:underline"
                >
                  Clear filter
                </button>
              </div>
            )}
          </div>

          {/* Posts grid */}
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {paginatedPosts.map((post) => (
              <a href={`/blog/${post.slug}`} key={post.slug}>
                <article className="flex flex-col items-start duration-100 hover:scale-105">
                  <div className="relative w-full">
                    {post.featuredImage ? (
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="aspect-[16/9] w-full rounded-md bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] lg:h-[300px]"
                      />
                    ) : (
                      <div className="aspect-[16/9] w-full rounded-md bg-gray-200 flex items-center justify-center sm:aspect-[2/1] lg:aspect-[3/2] lg:h-[300px]">
                        <span className="text-gray-400 text-sm">
                          No image
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="max-w-xl">
                    <div className="mt-3 text-sm text-gray-500">
                      {formatDate(post.date)}
                    </div>
                    <div className="group relative">
                      <h3 className="mt-2 text-[20px] font-semibold leading-6 text-gray-900 group-hover:text-primary">
                        <span className="absolute inset-0" />
                        {post.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-[17px] leading-6 text-gray-600">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>

          {/* No results */}
          {paginatedPosts.length === 0 && (
            <p className="mt-10 text-center text-gray-500">
              No posts found matching the selected filters.
            </p>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setPage(pageNum)}
                    className={`w-10 h-10 rounded text-sm font-medium ${
                      page === pageNum
                        ? 'bg-primary text-white'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                )
              )}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  // Collect unique categories across all posts
  const categorySet = new Set();
  posts.forEach((p) => {
    p.categories.forEach((c) => categorySet.add(c));
  });
  categorySet.delete('Uncategorized');

  return {
    props: {
      posts,
      allCategories: [...categorySet].sort(),
    },
  };
}
