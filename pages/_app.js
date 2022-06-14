import "tailwindcss/tailwind.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/global.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-white">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
