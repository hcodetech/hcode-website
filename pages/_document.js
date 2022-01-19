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
      <Html lang="en " className="scroll-smooth">
        <Head >
          {/*  */}

          <meta name="keywords" content="Software, Development Studio, Development, Engineer, Mobile Apps, Web Apps"/>
            
            <meta name="description" content={homepage.description}/>
            <meta name="image" content={homepage.share_image}/>

            <meta itemProp="name" content={homepage.title}/>
            <meta itemProp="description" content={homepage.description}/>
            <meta itemProp="image" content={homepage.share_image}/>


            <meta property="og:title" content={homepage.title}/>
            <meta property="og:type" content="website"/>
            <meta property="og:url" content="https://hcode.tech/"/>
            <meta property="og:image" content={homepage.share_image}/>
            <meta property="og:description" content={homepage.description}/>


            <meta property="twitter:card" content="summary_large_image"/>
            <meta property="twitter:url" content="https://hcode.tech/"/>
            <meta property="twitter:title" content={homepage.title}/>
            <meta property="twitter:description" content={homepage.description}/>
            <meta property="twitter:image" content={homepage.share_image}/>


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
