import Accordion from "../../components/Accordion";
import { faq_services, technologies_page } from "../../constants/constants";
import Scroll from "react-scroll";

function technologies() {
  var Link = Scroll.Link;
  var DirectLink = Scroll.DirectLink;
  var Element = Scroll.Element;
  var Events = Scroll.Events;
  var scroll = Scroll.animateScroll;
  var scrollSpy = Scroll.scrollSpy;

  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-blue-100 max-h-[1000px] z-30 relative">
        <div className="new-container grid grid-cols-1 md:grid-cols-12   min-h-[80vh]  ">
          <div className="md:col-span-5">
            <h2 className="pt-40 text-4xl font-semibold">
              {technologies_page.hero_heading}
            </h2>
            <p className="mt-2 mb-10">{technologies_page.hero_paragraph}</p>
            <a
              href="/contact"
              className="bg-primary px-4 lg:px-12 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Contact Us For More Information
            </a>
          </div>
          <div className="md:col-span-7 mt-10 md:mt-20 lg:mt-10 scale-90  lg:absolute lg:-right-8">
            <img
              src={technologies_page.hero_image}
              alt="Image of technologies in rounded circle"
            />
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className=" my-10 relative z-20">
        <div className="top-1/2 float-left fixed pl-10 h-screen hidden lg:block">
          <div className="flex flex-col cursor-pointer">
            <h2 className='font-bold'>Technologies</h2>
            <Link
             activeClass="text-primary font-semibold underline"
              to="Backend"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={-200}

            >
              Backend
            </Link>

            <Link
             activeClass="text-primary font-semibold underline"
              to="Frontend"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={-200}

            >
              Frontend
            </Link>
            <Link
              activeClass="text-primary font-semibold underline"
              to="Blockchain"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={-200}

            >
              Blockchain
            </Link>

            <Link
              activeClass="text-primary font-semibold underline"
              to="Database"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={-200}

            >
              Database
            </Link>
            <Link
              activeClass="text-primary font-semibold underline"
              to="Pipeline"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={-200}

            >
              Pipeline
            </Link>
            {/* <Link
              activeClass="text-primary font-semibold underline"
              to="Other"
              spy={true}
              smooth={true}
              duration={250}
              containerId="containerElement"
              offset={20000}
            >
              Other
            </Link> */}

          </div>
        </div>

        <div className="new-container lg:pl-32 2xl:pl-0 ">
          <Element
            name="test7"
            className="element"
            id="containerElement"
            style={{
              position: "relative",
              height: '100vh',
              overflow: "scroll",
              marginBottom: "100px",
            }}
          >
            {technologies_page.tech_stack.map((tech, index) => (
              <Element id={tech.bookmark} name={tech.bookmark} 
              // offset={100}
              
              >
                <div className="grid grid-cols-12 gap-4 mt-10" key={index}>
                  <div className="col-span-12 grid grid-cols-12 pt-20">
                  <div className=" col-span-12">
                    <h4 className="text-2xl font-semibold">{tech.heading}</h4>
                    <h6 className="text-base font-normal">
                      {tech.paragraph}
                  </h6>
                  </div>
                  {tech.stacks.map((language, index) => (
                    <div className="col-span-12 lg:col-span-4 my-5" key={index}>
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
              </Element>
            ))}
          </Element>
        </div>
      </section>

      {/* FAQs */}
      <section className="z-30 relative bg-white">
        <Accordion data={faq_services} />
      </section>
    </div>
  );
}

export default technologies;
