import { useEffect, useRef, useState } from "react";
import Accordion from "../../components/Accordion";
import { faq_services, technologies_page } from "../../constants/constants";
// import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import Head from "next/head";

function technologies(props) {
  // const { asPath } = useRouter();

  // To check if the any category is included in the URL
  // const isTechnologiesStack = (pathname) => asPath.includes(pathname);
  const [hash, setHash] = useState("#");
  const [path, setPath] = useState("");
  const refs = useRef([]); // create empty array for creating multiple refs

  useEffect(() => {
    if (window.location.hash.substring(1) ===
      "Backend" ||
      "Frontend" ||
      "Blockchain" ||
      "Cloud" ||
      "Database" ||
      "CI/CD"
    ) {
      setPath(window.location.hash.substring(1))
    }
  }, [])

  useEffect(() => {
    let observerOptions = {
      rootMargin: "10px",
      threshold: window.innerWidth <= 750 ? 0.3 : 1,
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(sections) {

      if (sections[0].isIntersecting) {
        window.location.hash = sections[0].target.id
        setHash(sections[0].target.id)
        setPath("")
      }
    }
    document.querySelectorAll("section").forEach((i) => {
      // refs.current.forEach((i) => {
      observer.observe(i);
    });
  }, [])


  return (
    <>
      <Head>
        <title>Technologies | Hcode Technologies</title>
      </Head>
      <div className="scroll-smooth">
        {/* Hero Section */}
        <section id="" className="bg-blue-100 max-h-[1000px] z-30 relative overflow-hidden">
          <div className=" grid grid-cols-1 md:grid-cols-12 lg:new-container  min-h-[80vh]  ">
            <div className="md:col-span-5 new-container">
              <h2 className="pt-40 text-4xl font-semibold">
                {technologies_page.hero_heading}
              </h2>
              <p
                className="mt-2 mb-10"
                dangerouslySetInnerHTML={{
                  __html: technologies_page.hero_paragraph,
                }}
              />
              <a
                href="/contact"
                className="bg-primary px-4 lg:px-12 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
              >
                Contact Us for More Information
              </a>
            </div>
            <div className="md:col-span-7 mt-10 md:mt-20 lg:mt-10 lg:scale-90  lg:absolute lg:-right-8">
              <img
                src={technologies_page.hero_image}
                alt="Image of technologies in rounded circle"
              />
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <div className=" my-10 relative z-20">
          <div className="top-1/3 float-left fixed pl-10 h-screen hidden lg:block">
            <div className="flex flex-col cursor-pointer">
              <h2 className="font-bold">Technologies</h2>
              {[
                "Backend",
                "Frontend",
                "Blockchain",
                "Cloud",
                "Database",
                "CI/CD",
              ].map((stack) => (
                <Link href={`#${stack}`} key={stack}>
                  <a
                    className={
                      (hash === stack) || (path === stack)
                        ? "text-blue-600 font-semibold underline"
                        : ""
                    }
                    onClick={(e) => {
                      setHash("");
                      setPath(e.target.text);
                    }}
                  >
                    {stack}
                  </a>
                </Link>
              ))}
            </div>
          </div>

          <div className="new-container lg:pl-32 2xl:pl-0 ">
            <div>
              {technologies_page.tech_stack.map((tech, index) => (
                <section
                  id={tech.bookmark}
                  name={tech.bookmark}
                  key={index}
                  // settings the refs current index
                  ref={(e) => {
                    refs.current[index] = e;
                  }}
                >
                  <div className="grid grid-cols-12 gap-4 mt-10" key={index}>
                    <div className="col-span-12 grid grid-cols-12 pt-20">
                      <div className=" col-span-12">
                        <h4 className="text-2xl font-semibold">
                          {tech.heading}
                        </h4>
                        <h6 className="text-base font-normal">
                          {tech.paragraph}
                        </h6>
                      </div>
                      {tech.stacks.map((language, index) => (
                        <div
                          className="col-span-12 lg:col-span-4 my-5"
                          key={index}
                        >
                          <img src={language.image} alt={language.tech_name} />
                          <h4 className="font-semibold text-lg mt-2">
                            {language.tech_name}
                          </h4>
                          <p className=" text-sm font-light md:text-base opacity-90 pr-5">
                            {language.descripition}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
        {/* {console.log(refs)} */}
        {/* FAQs */}
        {/* <section id="faq" className="z-30 relative bg-white">
        <Accordion data={faq_services} />
      </section> */}
      </div>
    </>
  );
}

export default technologies;
