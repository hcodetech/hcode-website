// Next.js exposes a Head component which can be added to a page to modify the head HTML tag on an individual basis.
// The font is required to be available throughout the website so instead of adding a Head to every page
// we can utilise a custom _document.js and only add the Google Font into the Head in a single place.

import Document, { Html, Head, Main, NextScript } from "next/document";
import { fav_icon, homepage } from "../constants/constants";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/*  */}

          <meta name="keywords" content="Software, Development Studio, Development, startups, Mobile Apps, Web Apps"/>

            <meta prefix="og: http://ogp.me/ns#" property="og:title" content={homepage.title}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:type" content="website"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:url" content="https://hcode.tech/"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:image" content={homepage.share_image}/>
            <meta prefix="og: http://ogp.me/ns#" property="og:site_name" content="HCODE"/>
            <meta prefix="og: http://ogp.me/ns#" property="og:description" content={homepage.description}/>

            <meta itemprop="name" content={homepage.title}/>
            <meta itemprop="description" content={homepage.description}/>
            <meta itemprop="image" content={homepage.share_image}/>

            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={homepage.title}/>
            <meta name="twitter:description" content={homepage.description}/>
            <meta name="twitter:image" content={homepage.share_image}/>


          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=UA-148478855-1`}
          />
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






          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" type="image/png" sizes="16x16" href={fav_icon}></link>

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
