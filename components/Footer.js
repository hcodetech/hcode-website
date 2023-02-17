import {
  hcode_footer,
  linkedin_icon,
  twitter_icon,
} from '../constants/constants';
import NewsletterComponent from './NewsletterComponent';

function Footer() {
  return (
    <footer className="footer-1 bg-gray-100 pt-6  pb-12 z-30">
      <div className="new-container mx-auto px-4">
        <div className=" md:py-4 grid grid-cols-12 gap-8">
          <div className="px-4 col-span-12 md:col-span-3 ">
            <div className="md:w-3/4">
              <img
                src={hcode_footer}
                alt="Hcode Technologies"
                className="w-40 mb-3 "
              />
              <p className="text-sm">
                Agile, Predictable, Outcome
                <br />
                Oriented App Development
              </p>
            </div>
            <div className="flex mt-2">
              <a
                href="https://www.linkedin.com/company/hcodetech/"
                target="_blank"
              >
                <img
                  src={linkedin_icon}
                  className="rounded-full w-10 h-10 p-2 hover:bg-blue-200  bg-gray-200 "
                  alt="https://www.linkedin.com/company/hcodetech/"
                />
              </a>
              <a href="https://twitter.com/HcodeTech" target="_blank">
                <img
                  src={twitter_icon}
                  className="rounded-full w-10 h-10 p-2 hover:bg-blue-200  ml-4 bg-gray-200 "
                  alt="https://twitter.com/HcodeTech"
                />
              </a>
            </div>
            <div className="md:hidden sm:w-[auto] md:w-[auto] xl:w-[auto] mt-8 md:mt-[-28px]">
              <NewsletterComponent />
            </div>
          </div>
          <div className="px-4  my-4 md:mt-0 col-span-12 md:col-span-8">
            <ul className="md:flex justify-between  grid grid-cols-12 gap-8">
              <li className=" col-span-12 sm:col-span-6">
                <h5 className="font-bold  text-md mb-1">HQ Karnal</h5>
                <p>
                  120/7 Milestone,
                  <br />
                  Main GT Road,
                  <br />
                  Karnal HR
                  <br />
                  #132001
                </p>
              </li>
              <li className=" col-span-12 sm:col-span-6">
                <h5 className="font-bold text-md mb-1">New Delhi</h5>
                <p>
                  Invento, 3rd Floor,
                  <br />
                  Plot No.8, Sector 12b,
                  <br />
                  Dwarka, New Delhi
                  <br />
                  #110078
                </p>
              </li>
              <li className="col-span-12 sm:col-span-6">
                <h5 className="font-bold text-md mb-1 ">Noida</h5>
                <p>
                  Galaxy Business Park,
                  <br />
                  Electronic City, Sec 62
                  <br />
                  Noida UP
                  <br />
                  #201309
                </p>
              </li>
              <li className="col-span-12 sm:col-span-6">
                <h5 className="font-bold  text-md mb-1">New York</h5>
                <p>
                  675 Hudson
                  <br />
                  St Suite 3S,
                  <br />
                  New York, NY
                  <br />
                  #10014
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 md:flex  md:justify-around border-t md:ml-[25%] xl:ml-[23%]">
          <div className="px-4 sm:w-1/2 md:w-[22%] xl:w-1/6 mt-8 md:mt-3">
            <h5 className="font-bold  text-md mb-3  ">Quick Links</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="/"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/our_services"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/our_work"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Our Work
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/technologies"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Technologies
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-[22%] xl:w-1/6 mt-8 md:mt-3">
            <h5 className="font-bold  text-md mb-3 ">Company</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="/about"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/work_with_us"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Work With Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="https://hcode.tech/blog/"
                  target="_blank"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-[22%] xl:w-1/6 mt-8 md:mt-3">
            <h5 className="font-bold  text-md mb-3 ">Further Information</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a
                  href="/terms_and_conditions"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Terms & Conditions
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/privacy_policy"
                  className="border-b border-solid border-transparent hover:border-primary hover:text-primary"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="hidden md:block px-4 sm:max-w-[250px] sm:min-w-[250px] md:min-w-[250px] xl:min-w-[250px]  md:max-w-[250px] xl:max-w-[250px] mt-8 md:mt-[-28px]">
            <NewsletterComponent />
          </div>
        </div>
        <div className="text-center  border-t pt-5">
          Copyright @ 2022{' '}
          <a href="/" className="text-primary font-semibold underline">
            Hcode.tech
          </a>{' '}
          | All rights reserved by Hcode Techonologies
        </div>
      </div>
    </footer>
  );
}

export default Footer;
