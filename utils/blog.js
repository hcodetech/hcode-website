const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { marked } = require('marked');

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

/**
 * Get all blog posts sorted by date (newest first)
 */
function getAllPosts() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, '');
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      excerpt: data.excerpt || '',
      featuredImage: data.featuredImage || '',
      ogTitle: data.ogTitle || '',
      ogDescription: data.ogDescription || '',
      categories: data.categories || [],
      tags: data.tags || [],
    };
  });

  // Sort by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return posts;
}

/**
 * Get a single blog post by slug with rendered HTML content
 */
function getPostBySlug(slug) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  // Render markdown to HTML
  const htmlContent = marked(content);

  return {
    slug,
    title: data.title || '',
    date: data.date || '',
    excerpt: data.excerpt || '',
    featuredImage: data.featuredImage || '',
    ogTitle: data.ogTitle || '',
    ogDescription: data.ogDescription || '',
    categories: data.categories || [],
    tags: data.tags || [],
    content: htmlContent,
  };
}

/**
 * Get all post slugs for static path generation
 */
function getAllPostSlugs() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  return files.map((f) => f.replace(/\.md$/, ''));
}

module.exports = { getAllPosts, getPostBySlug, getAllPostSlugs };
