// Next.js exposes a Head component which can be added to a page to modify the head HTML tag on an individual basis.
// The font is required to be available throughout the website so instead of adding a Head to every page
// we can utilise a custom _document.js and only add the Google Font into the Head in a single place.

import Document, { Html, Head, Main, NextScript } from "next/document";
import { fav_icon } from "../constants/constants";
import structuredData from "../public/structured-data.json";
// import NewsletterComponent from "../components/NewsletterComponent";
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en " className="scroll-smooth">
        <Head>
          {/* JSON-LD Structured Data for Google Knowledge Panels */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData),
            }}
          />

          {/* Google Console */}
          <meta
            name="google-site-verification"
            content="p7p1JCWqzYMbOUuHZl6n__1vqE9IJksl6EMduIHHrao"
          />
          {/* MailChimp */}
          {/* <script
            id="mcjs"
            dangerouslySetInnerHTML={{
              __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f5258b0c0d2b6c7561d024d3c/3da1e5017282a765c7865d2a3.js")`,
            }}
          /> */}

          {/* <iframe
            width="540"
            height="305"
            src="https://03f10e9f.sibforms.com/serve/MUIFAB7_tr7Rxeu_Qtakv4I4u0lON-SIpgcZZq5WYYXqQwSbRKtiArhHr2qO3FfhXOuPuvLi6FL7GaNTDXZD4GEHiYuGM_Pt66hkNRjgahy7akXIoHqOkl_2VxQ7rNIQ_nkhV3CI3XZHBNzAMbX7vGT1UlfQhW2mUGYOyCMlMncGVEkU7lJjDPTsL_tM3XTWv4HftJhR3TV8MYt3"
            frameborder="0"
            scrolling="auto"
            allowfullscreen
            style={{display: 'block',marginLeft: 'auto',marginRight: 'auto',maxWidth: '100%'}}
          ></iframe> */}

          {/* Shashank Google analytics account */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-V751ZVXNMP"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-V751ZVXNMP');`,
            }}
          />

          <script
            defer
            src="https://sibforms.com/forms/end-form/build/main.js"
          ></script>

          {/* Shashank Google analytics account */}

          {/* GTAG */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5XWGPH57')`,
            }}
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

          {/* rel="me" identity verification links */}
          <link rel="me" href="https://www.linkedin.com/company/hcodetech/" />
          <link rel="me" href="https://www.linkedin.com/in/shashanksingla/" />
          <link rel="me" href="https://x.com/shashanksingla" />
          <link rel="me" href="http://medium.com/@shashank.singla" />
          <link rel="me" href="https://www.linkedin.com/in/shweta-singla/" />

          {/* LLM-readable profile pointer */}
          <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM-readable profile" />

          {/* Microsoft Clarity tracking code */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "ik50r7bw2q");`,
            }}
          />
        </Head>
        <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5XWGPH57"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
