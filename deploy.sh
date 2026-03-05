#!/bin/bash
# Deploy script for hcode.tech
# Syncs the Next.js static export to S3, stripping .html extensions
# and setting correct content types in a single pass.

set -e

BUCKET="s3://hcode.tech"
OUT_DIR="out"

if [ ! -d "$OUT_DIR" ]; then
  echo "❌ No 'out' directory found. Run 'yarn build' first."
  exit 1
fi

echo "🚀 Deploying to $BUCKET..."

# Step 1: Sync all NON-HTML files (images, CSS, JS, JSON, XML, txt, etc.)
echo "📦 Uploading static assets..."
aws s3 sync "$OUT_DIR" "$BUCKET" \
  --exclude "*.html" \
  --delete

# Step 2: Upload HTML files without .html extension, with correct content-type
echo "📄 Uploading HTML pages (without .html extension)..."
cd "$OUT_DIR"
find . -name "*.html" -type f | while read -r file; do
  # Remove leading ./ and trailing .html
  key="${file#./}"
  key="${key%.html}"

  # index.html stays as index (S3 handles this as the default document)
  aws s3 cp "$file" "$BUCKET/$key" \
    --content-type "text/html; charset=utf-8" \
    --cache-control "public, max-age=0, must-revalidate" \
    --quiet
  
  echo "  ✓ $key"
done
cd ..

echo ""
echo "🔄 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id E2E03LDNL94VC6 \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text

echo ""
echo "✅ Deploy complete!"
echo "   Site: https://www.hcode.tech"
