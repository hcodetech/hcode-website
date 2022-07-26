## Intersection Observer API
    On scroll, url is changing with section ids with the help of intersectionObserver API
    The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport. IntersectionObserver API contain two arguements i.e, callback function and options.
    let Options = {
      rootMargin: "10px",
      threshold: 1.0 //percentage of the target's visibility the observer's callback 0 to 1.
    };

    let observer = new IntersectionObserver(observerCallback, Options);

    function observerCallback(sections) {

      if(sections[0].isIntersecting){
        history.pushState(null, null, "#" + sections[0].target.id);
      }
    }
    document.querySelectorAll("section").forEach((i) => {
       observer.observe(i);
    });
    For more explanation checkout 
    https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

## Insert query in url in next js
The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering.we need to use  serversideprops function in which we pass props in return i.e.
export async function getServerSideProps(router) {
  return {
    props: {query: router?.query}
  }
}
For more explanation checkout 
https://nextjs.org/docs/api-reference/next/router

## Deployment steps

create build
```
npm run-script build
```


(optional) If optimized images are available in `img/` folder then
```
cp -r img/\* out/assets/img/.
```

(optional) If sitemap is available
```
cp sitemap.xml out/.
```

final step*
```
npm run build
cd out
aws s3 cp . s3://hcode.tech --recursive
for old in *.html; do aws s3 mv s3://hcode.tech/$old s3://hcode.tech/`basename $old .html`; done
cd our_services
aws s3 cp . s3://hcode.tech --recursive
for old in *.html; do aws s3 mv s3://hcode.tech/$old s3://hcode.tech/our_services/`basename $old .html`; done
```
for old in *.html; do echo $old; done

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

// aws s3 cp . s3://hcode.tech --recursive --exclude ".git/*" --exclude "*.py"  --exclude "__pycache__/*" --exclude "php/*" --exclude "*.html"
```
final step to check the changes is deployed on live server
http://hcode.tech.s3-website-us-east-1.amazonaws.com/



<!-- aws s3 cp . s3://hcode.tech --recursive  --content-type 'text/html' --exclude "*"  --include "*.html" -->

<!-- https://github.com/github/gitignore/blob/master/Node.gitignore -->


