/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { hcode_footer, navbar_links } from "../constants/constants";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { pathname } = useRouter();

  useEffect(() => {
    console.log("xx", pathname);
  }, [pathname]);

  return (
    <Disclosure as="nav" className="bg-white shadow fixed w-screen z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <a href="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src={hcode_footer}
                      alt="Hcode Technologies"
                    />
                  </a>
                  <a href="/">
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src={hcode_footer}
                      alt="Hcode Technologies"
                    />
                  </a>

                </div>
                <div className="hidden sm:ml-6 md:flex sm:space-x-8">
                  {navbar_links.map(({ label, link }) => {
                    return (
                      <a
                        href={link}
                        className={` text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium  border-transparent
                      ${pathname === link
                            ? "border-blue-500 border-b-4"
                            : ""
                          }   `}
                      >
                        {label}
                      </a>
                    )
                  })
                  }
                </div>
              </div>
              <div className="hidden sm:ml-6 md:flex sm:items-center">
                {/* Profile dropdown */}
                <a
                  href="/contact"
                  className="primary-outline"
                >
                  <span className="px-5">Contact Us</span>
                </a>


              </div>
              <div className="-mr-2 flex items-center md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">


            {navbar_links.map(({ label, link }) => {
                    return (
                      <a
                        href={link}
                        className={` border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                      ${pathname === link
                            ? "bg-blue-50 border-blue-500 text-blue-700"
                            : ""
                          }   `}
                      >
                        {label}
                      </a>
                    )
                  })
                  }

              
            </div>
            <div className="pt-5 pb-5 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  
                  <a href="/contact" className="primary-outline">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
