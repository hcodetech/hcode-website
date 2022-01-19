# Next.js + Tailwind CSS Example

npm run-script build
cp -r img/\* out/assets/img/.
cp sitemap.xml out/.

zip -r out.zip out
scp out.zip hcode:~/.

ssh hcode
unzip -o out

cd out

// aws s3 cp . s3://hcode.tech --recursive --exclude ".git/*" --exclude "*.py"  --exclude "__pycache__/*" --exclude "php/*" --exclude "*.html"


<!-- aws s3 cp . s3://hcode.tech --recursive  --content-type 'text/html' --exclude "*"  --include "*.html" -->

<!-- https://github.com/github/gitignore/blob/master/Node.gitignore -->

for old in *.html; do mv $old `basename $old .html`''; done 

