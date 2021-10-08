# Next.js + Tailwind CSS Example

npm run-script build
cp -r img/\* out/assets/img/.
cp sitemap.xml out/.

zip -r out.zip out
scp out.zip hcode:~/.

ssh hcode
unzip -o out

<!-- https://github.com/github/gitignore/blob/master/Node.gitignore -->
