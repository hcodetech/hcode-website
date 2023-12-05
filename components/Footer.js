/** @format */

import {
  hcode_footer,
  linkedin_icon,
  twitter_icon,
  startupindia,
} from '../constants/constants';
import NewsletterComponent from './NewsletterComponent';

function Footer() {
  const year = new Date().getFullYear();
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
                width="150px"
                height="100px"
                loading="lazy"
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
                  width="15px"
                  height="15px"
                  loading="lazy"
                />
              </a>
              <a href="https://twitter.com/HcodeTech" target="_blank">
                <img
                  src={twitter_icon}
                  className="rounded-full w-10 h-10 p-2 hover:bg-blue-200  ml-4 bg-gray-200 "
                  alt="https://twitter.com/HcodeTech"
                  width="15px"
                  height="15px"
                  loading="lazy"
                />
              </a>
            </div>
            <div className="md:hidden sm:w-[auto] md:w-[auto] xl:w-[auto] mt-8 md:mt-[-28px]">
              <NewsletterComponent />
            </div>
          </div>
          <div className="px-4  my-4 md:mt-0 col-span-12 md:col-span-8">
            <ul className="grid grid-cols-12 gap-6">
              <li className="col-span-12 md:col-span-4">
                <h5 className="font-bold  text-md mb-1">HQ Karnal</h5>
                <p>120/7 Milestone, Main GT Road, Karnal HR #132001</p>
              </li>
              <li className="col-span-12  md:col-span-5">
                <h5 className="font-bold  text-md mb-1">Noida</h5>
                <p>
                  India Accelerator, 3rd Floor, <br />
                  The Iconic Corenthum, Sector 62,
                  <br />
                  Noida Uttar Pradesh, 201301
                </p>
              </li>
              <li className="col-span-12  md:col-span-3 ">
                <h5 className="font-bold  text-md mb-1">New York</h5>
                <p>675 Hudson St Suite 3S, New York, NY #10014</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-4 md:flex  md:justify-around border-t md:ml-[25%] xl:ml-[23%]">
          <div className="px-4 sm:w-1/2 md:w-[22%] xl:w-1/6 mt-8 md:mt-3">
            <h5 className="font-bold  text-md mb-3">Quick Links</h5>
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
          <div className="hidden md:block px-4 sm:max-w-[250px] sm:min-w-[250px] md:min-w-[400px] xl:min-w-[250px]  md:max-w-[400px] xl:max-w-[250px] mt-8 md:mt-[-28px]">
            <NewsletterComponent />
          </div>
        </div>
        <div className="flex-col flex md:flex-row justify-between border-t pt-5">
          <div className=" ">
            Copyright @{year}
            <a href="/" className="text-primary font-semibold underline ml-1">
              Hcode.tech
            </a>{' '}
            | All rights reserved by Hcode Technologies
          </div>
          <img
            src={startupindia}
            className="h-10 mt-10 md:mt-0 object-contain"
            alt="hcode startup india"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
