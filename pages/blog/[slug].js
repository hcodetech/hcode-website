import Head from 'next/head';
import MetaTags from '../../components/MetaTags';
import { getPostBySlug, getAllPostSlugs } from '../../utils/blog';

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogPost({ post }) {
  if (!post) return null;

  const pageMeta = {
    title: post.ogTitle || `${post.title} | Hcode Technologies`,
    description: post.ogDescription || post.excerpt,
    url: `https://www.hcode.tech/blog/${post.slug}`,
    share_image: post.featuredImage
      ? `https://www.hcode.tech${post.featuredImage}`
      : 'https://www.hcode.tech/assets/hcode_og.png',
  };

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <MetaTags page={pageMeta} />
      </Head>
      <article className="pt-24 pb-20 bg-white">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-poppins text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
              {post.title}
            </h1>
            <p className="mt-4 text-gray-500">{formatDate(post.date)}</p>
          </div>

          {post.featuredImage && (
            <div className="mb-10">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full rounded-lg object-cover"
              />
            </div>
          )}

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post,
    },
  };
}
