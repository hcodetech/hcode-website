import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  let url;
  if (typeof window !== "undefined") {
    url = window.location.pathname;
  }
  return (
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
      {url !== "/newsletter" && <Footer />}
    </div>
  );
}

export default MyApp;
