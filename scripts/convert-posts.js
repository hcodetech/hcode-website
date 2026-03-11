#!/usr/bin/env node

/**
 * One-time script to convert WordPress posts.json → Markdown files in content/blog/
 *
 * Usage: node scripts/convert-posts.js
 */

const fs = require('fs');
const path = require('path');
const TurndownService = require('turndown');

const POSTS_FILE = path.join(__dirname, '..', 'posts.json');
const OUTPUT_DIR = path.join(__dirname, '..', 'content', 'blog');

// Initialize Turndown (HTML → Markdown)
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
});

// Strip WordPress wrapper divs with inline styles
turndown.addRule('stripWrapperDivs', {
  filter: (node) => {
    return (
      node.nodeName === 'DIV' &&
      node.getAttribute('class')?.includes('mce-family')
    );
  },
  replacement: (content) => content,
});

/**
 * Rewrite image URLs from blog.hcode.tech to local paths
 * Also strip resized image suffixes (e.g., -300x200)
 */
function rewriteImageUrl(url) {
  if (!url) return url;
  // Match blog.hcode.tech/blog/wp-content/uploads/...
  const match = url.match(
    /https?:\/\/blog\.hcode\.tech\/blog\/wp-content\/uploads\/(.+)/
  );
  if (match) {
    let imagePath = match[1];
    // Strip WordPress resized variants: image-300x200.png → image.png
    imagePath = imagePath.replace(/-\d+x\d+(\.\w+)$/, '$1');
    return `/assets/blog/${imagePath}`;
  }
  return url;
}

/**
 * Rewrite internal blog links
 */
function rewriteInternalLinks(html) {
  // Rewrite blog.hcode.tech/blog/[slug]/ → /blog/[slug]
  return html.replace(
    /https?:\/\/blog\.hcode\.tech\/blog\/([a-z0-9-]+)\/?/g,
    '/blog/$1'
  );
}

/**
 * Strip WordPress inline styles and classes from HTML
 */
function cleanHtml(html) {
  // Remove style attributes
  html = html.replace(/\s*style="[^"]*"/g, '');
  // Remove class attributes
  html = html.replace(/\s*class="[^"]*"/g, '');
  // Remove data attributes
  html = html.replace(/\s*data-[a-z-]+="[^"]*"/g, '');
  // Remove decoding/loading attributes
  html = html.replace(/\s*decoding="[^"]*"/g, '');
  html = html.replace(/\s*loading="[^"]*"/g, '');
  // Remove srcset and sizes (we'll use original images)
  html = html.replace(/\s*srcset="[^"]*"/g, '');
  html = html.replace(/\s*sizes="[^"]*"/g, '');
  // Remove empty divs
  html = html.replace(/<div>\s*<\/div>/g, '');
  // Remove &nbsp;
  html = html.replace(/&nbsp;/g, ' ');

  return html;
}

/**
 * Rewrite all image src URLs in HTML
 */
function rewriteImageUrls(html) {
  return html.replace(/src="([^"]*blog\.hcode\.tech[^"]*)"/g, (match, url) => {
    return `src="${rewriteImageUrl(url)}"`;
  });
}

/**
 * Escape YAML special characters in strings
 */
function yamlEscape(str) {
  if (!str) return '';
  // Remove HTML tags
  str = str.replace(/<[^>]+>/g, '');
  // Decode HTML entities
  str = str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&hellip;/g, '…')
    .replace(/&#8230;/g, '…')
    .replace(/&quot;/g, '"')
    .replace(/&#187;/g, '»')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, ' ');
  // Trim
  str = str.trim();
  return str;
}

function convertPost(post) {
  const slug = post.slug;
  const title = yamlEscape(post.title?.rendered || '');
  const date = post.date ? post.date.split('T')[0] : '';
  const excerpt = yamlEscape(post.excerpt?.rendered || '');
  const categories = post.categories || [];
  const tags = post.tags || [];

  // Yoast SEO data
  const yoast = post.yoast_head_json || {};
  const ogTitle = yamlEscape(yoast.og_title || '');
  const ogDescription = yamlEscape(yoast.og_description || '');
  const ogImage = rewriteImageUrl(yoast.og_image?.[0]?.url || '');

  // Featured image from Yoast og_image (since _embedded is empty)
  const featuredImage = ogImage || '';

  // Process HTML content
  let html = post.content?.rendered || '';
  html = cleanHtml(html);
  html = rewriteImageUrls(html);
  html = rewriteInternalLinks(html);

  // Convert to Markdown
  const markdown = turndown.turndown(html);

  // Build frontmatter
  const frontmatter = [
    '---',
    `title: "${title.replace(/"/g, '\\"')}"`,
    `date: "${date}"`,
    `excerpt: "${excerpt.replace(/"/g, '\\"')}"`,
    `featuredImage: "${featuredImage}"`,
    `ogTitle: "${ogTitle.replace(/"/g, '\\"')}"`,
    `ogDescription: "${ogDescription.replace(/"/g, '\\"')}"`,
    `categories: [${categories.join(', ')}]`,
    `tags: [${tags.join(', ')}]`,
    '---',
  ].join('\n');

  return { slug, content: `${frontmatter}\n\n${markdown}\n` };
}

// Main
function main() {
  const posts = JSON.parse(fs.readFileSync(POSTS_FILE, 'utf-8'));
  console.log(`Converting ${posts.length} posts...`);

  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let count = 0;
  for (const post of posts) {
    try {
      const { slug, content } = convertPost(post);
      const outputPath = path.join(OUTPUT_DIR, `${slug}.md`);
      fs.writeFileSync(outputPath, content, 'utf-8');
      count++;
    } catch (err) {
      console.error(`Error converting post "${post.slug}":`, err.message);
    }
  }

  console.log(`Done! Converted ${count}/${posts.length} posts to ${OUTPUT_DIR}`);
}

main();
