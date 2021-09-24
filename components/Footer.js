import { hcode_footer, linkedin_icon, twitter_icon } from "../constants/constants"

function Footer() {
  return (
    <footer className="footer-1 bg-gray-100 py-8 sm:py-12 sm:pb-8">
      <div className="new-container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 flex-grow">
            <div className="w-1/2">
              <img src={hcode_footer} alt="Hcode Technologies" className="h-20"/>
              <p>
                Agile, Predictable, Outcome Oriented App Development
              </p>
              <div className="flex mt-2">
                <a href="https://www.linkedin.com/company/hcodetech/mycompany/" target="_blank" >
                  <img src={linkedin_icon} className="rounded-full w-10 h-10 p-2 hover:bg-blue-200  bg-gray-200 " alt="https://www.linkedin.com/company/hcodetech/mycompany/" />
                </a>
                <a href="https://twitter.com/HcodeTech" target="_blank">
                  <img src={twitter_icon} className="rounded-full w-10 h-10 p-2 hover:bg-blue-200  ml-4 bg-gray-200 " alt="https://twitter.com/HcodeTech" />
                </a>
              </div>
            </div>
            {/* Icons TOdo */}
          </div>

          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="font-bold  text-md mb-3  ">Quick Links</h5>
            <ul className="list-none footer-links">

              <li className="mb-2">
                <a href="/" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Home</a>
              </li>
              <li className="mb-2">
                <a href="/our_services" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Services</a>
              </li>
              <li className="mb-2">
                <a href="/technologies" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Technologies</a>
              </li>
              <li className="mb-2">
                <a href="/case_studies" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Case Studies</a>
              </li>
            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="font-bold  text-md mb-3 ">Company</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="/about_us" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/work_with_us" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Work With Us</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Contact Us</a>
              </li>

            </ul>
          </div>
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
            <h5 className="font-bold  text-md mb-3 ">Further Information</h5>
            <ul className="list-none footer-links">
              <li className="mb-2">
                <a href="/terms_and_conditions" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Terms & Conditions</a>
              </li>
              <li className="mb-2">
                <a href="/privacy_policy" className="border-b border-solid border-transparent hover:border-primary hover:text-primary">Privacy Policy</a>
              </li>
            </ul>
          </div>

        </div>

        <div className="text-center  border-t pt-3">
          All rights reserved by Hcode Techonologies
        </div>

      </div>
    </footer>
  )
}

export default Footer
