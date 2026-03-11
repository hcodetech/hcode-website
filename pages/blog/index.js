import Head from 'next/head';
import MetaTags from '../../components/MetaTags';
import { getAllPosts } from '../../utils/blog';

const PAGE_META = {
  title: 'Blog | Hcode Technologies',
  description:
    'Insights on software development, AI, blockchain, and technology trends from the Hcode Technologies team.',
  url: 'https://www.hcode.tech/blog',
  share_image: 'https://www.hcode.tech/assets/hcode_og.png',
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex({ posts }) {
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
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
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
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
