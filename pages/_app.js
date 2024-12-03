import '../node_modules/slick-carousel/slick/slick.css';
import '../node_modules/slick-carousel/slick/slick-theme.css';
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import '../styles/global.scss';
import { useEffect, useState } from 'react';
import NewsletterPopUp from '../components/NewsletterPopUp';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function MyApp({ Component, pageProps }) {
  const [showNewsLetterPopup, setShowNewsLetterPopup] = useState(false);
  let url;
  if (typeof window !== 'undefined') {
    url = window.location.pathname;
  }

  useEffect(() => {
    const stroredData = sessionStorage.getItem('isSubscriptionPopupVisible');

    if (stroredData === null) {
      setTimeout(() => {
        setShowNewsLetterPopup(true);
      }, [15000]);
    }
    sessionStorage.setItem('isSubscriptionPopupVisible', showNewsLetterPopup);
  }, []);

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey='6LftNJEqAAAAAOY_6Lt0mG1g1UimgCqGIPP4pA0j'
      // scriptProps={{
      //   async: false,
      //   defer: false,
      //   appendTo: 'head',
      //   nonce: undefined,
      // }}
    >
      <div>
        {showNewsLetterPopup && (
          <NewsletterPopUp
            showNewsLetterPopup={showNewsLetterPopup}
            setShowNewsLetterPopup={setShowNewsLetterPopup}
          />
        )}

        <div className='bg-white'>
          {<Navbar />}

          <Component {...pageProps} />
          {url !== '/newsletter' && <Footer />}
        </div>
      </div>
    </GoogleReCaptchaProvider>
  );
}

export default MyApp;
