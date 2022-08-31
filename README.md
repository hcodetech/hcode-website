```
cp -r img/\* out/assets/img/.
```

(optional) If sitemap is available

```
cp sitemap.xml out/.
```

final step\*

```
npm run build
cd out
aws s3 cp . s3://hcode.tech --recursive
for old in *.html; do aws s3 mv s3://hcode.tech/$old s3://hcode.tech/`basename $old .html`; done
cd our_services
aws s3 cp . s3://hcode.tech --recursive
for old in *.html; do aws s3 mv s3://hcode.tech/$old s3://hcode.tech/our_services/`basename $old .html`; done
aws cloudfront create-invalidation --distribution-id E2E03LDNL94VC6 --paths "/*"
```

for old in \*.html; do echo $old; done

```
*  need to install awscli first and run aws configure command with the correct key and secret params
```

https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

```

for old in *.html; do mv $old `basename $old .html`'';  aws s3 cp `basename $old .html` s3://hcode.tech --content-type 'text/html'; done

(old process)if deploying from server
```

zip -r out.zip out
scp out.zip hcode:~/.

ssh hcode
unzip -o out

cd out

// aws s3 cp . s3://hcode.tech --recursive --exclude ".git/_" --exclude "_.py" --exclude "**pycache**/_" --exclude "php/_" --exclude "\*.html"

```
final step to check the changes is deployed on live server
http://hcode.tech.s3-website-us-east-1.amazonaws.com/



<!-- aws s3 cp . s3://hcode.tech --recursive  --content-type 'text/html' --exclude "*"  --include "*.html" -->

<!-- https://github.com/github/gitignore/blob/master/Node.gitignore -->


```
