import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/global.scss";
import { useEffect, useState } from "react";
import NewsletterPopUp from "../components/NewsletterPopUp";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import Head from "next/head";

const googleRecaptchaSiteKey = "6LftNJEqAAAAAOY_6Lt0mG1g1UimgCqGIPP4pA0j"

function MyApp({ Component, pageProps }) {
  const [showNewsLetterPopup, setShowNewsLetterPopup] = useState(false);
  let url;
  if (typeof window !== "undefined") {
    url = window.location.pathname;
  }

  useEffect(() => {
    const stroredData = sessionStorage.getItem("isSubscriptionPopupVisible");

    if (stroredData === null) {
      setTimeout(() => {
        setShowNewsLetterPopup(true);
      }, [15000]);
    }
    sessionStorage.setItem("isSubscriptionPopupVisible", showNewsLetterPopup);
  }, []);

  // Organization Schema for all pages
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Hcode Technologies Pvt Ltd",
    "alternateName": "Hcode Technologies",
    "url": "https://hcode.tech",
    "email": "hello@hcode.tech",
    "logo": "https://hcode.tech/assets/img/hcode-logo.png",
    "description": "World-class software development teams for startups and enterprises. Specializing in AI integration, blockchain, MVP development, and team augmentation.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karnal",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.linkedin.com/company/hcodetech/",
      "https://x.com/shashanksingla"
    ],
    "founder": [
      {
        "@type": "Person",
        "name": "Shashank Singla",
        "jobTitle": "Co-Founder",
        "url": "https://hcode.tech/about/shashank-singla"
      },
      {
        "@type": "Person",
        "name": "Shweta Singla",
        "jobTitle": "Co-Founder",
        "url": "https://hcode.tech/about/shweta-singla"
      }
    ]
  };

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={googleRecaptchaSiteKey}
    // scriptProps={{
    //   async: false,
    //   defer: false,
    //   appendTo: "head",
    //   nonce: undefined,
    // }}
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <div>
        {showNewsLetterPopup && (
          <NewsletterPopUp
            showNewsLetterPopup={showNewsLetterPopup}
            setShowNewsLetterPopup={setShowNewsLetterPopup}
          />
        )}

        <div className="bg-white">
          {<Navbar />}

          <Component {...pageProps} />
          {url !== "/newsletter" && <Footer />}
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
