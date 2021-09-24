# Next.js + Tailwind CSS Example

npm run-script build
cp -r img/* out/assets/img/.
mv out/our_services.html out/our_services/index.html
cp sitemap.xml out/.

zip -r out.zip out
scp out.zip hcode:~/.

ssh hcode
unzip out

<!-- https://github.com/github/gitignore/blob/master/Node.gitignore -->
