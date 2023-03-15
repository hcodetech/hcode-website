// Next.js exposes a Head component which can be added to a page to modify the head HTML tag on an individual basis.
// The font is required to be available throughout the website so instead of adding a Head to every page
// we can utilise a custom _document.js and only add the Google Font into the Head in a single place.

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { fav_icon } from '../constants/constants';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en " className="scroll-smooth">
        <Head>
          {/* Google Console */}
          <meta
            name="google-site-verification"
            content="p7p1JCWqzYMbOUuHZl6n__1vqE9IJksl6EMduIHHrao"
          />
          {/* MailChimp */}
          <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f5258b0c0d2b6c7561d024d3c/3da1e5017282a765c7865d2a3.js")`,
            }}
          />
          {/* Google Analytics */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-148478855-1', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-148478855-1`}
          />

          {/* Google Fonts - Poppins */}
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={fav_icon}
          ></link>
          {/* Microsoft Clarity tracking code */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)}
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)
        })(window, document, "clarity", "script", "fkqnyaxcv1");`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
