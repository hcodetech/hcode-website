import Head from "next/head";
import { DotGroup } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import CustomModal from "../../components/CustomModal";
import Testimonial from "../../components/Testimonial";
// import newImg from '/img/our_services_hero1.jpg';
import {
  bestOthers,
  client,
  daas_faq_services,
  daily_updates,
  dollarIcons,
  easy_to_manage,
  effectiveCollaboration,
  faq_services,
  hcode_provide,
  hire_dev_hcode,
  match_your_timezone,
  mern_tech_stack,
  metaData,
  our_services_hero,
  our_services_hero1,
  rigorousVetting,
  seniority,
  skills,
  testIcon,
  zero_risk,
} from "../../constants/constants";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";

import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import MetaTags from "../../components/MetaTags";
import { ArrowRightIcon } from "@heroicons/react/solid";
const Hire_Developer = () => {
  const [isDesktop, setIsDesktop] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

  const showModal = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);

    // on scroll, url is changing with section ids with the help of intersectionObserver API
    // intersectionObserver API contain two arguements i.e, callback function and options
    let observerOptions = {
      rootMargin: "10px",
      threshold: window.innerWidth <= 750 ? 0.1 : 0.8,
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(sections) {
      if (sections[0].isIntersecting) {
        history.pushState(null, null, "#" + sections[0].target.id);
      }
    }
    document.querySelectorAll("section").forEach((i) => {
      observer.observe(i);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Hire Developer | Hcode Technologies</title>
        <MetaTags page={metaData.hire_developer} />
      </Head>
      {/* Hero Image */}
      {isModalVisible && (
        <CustomModal setOpen={setIsModalVisible} open={isModalVisible} />
      )}
      <section>
        <div className="grid grid-cols-6">

          <div className="col-span-3 text-black">
          <div className="text-black flex flex-col  justify-center h-full new-container  top-4 z-10  md:w-5/12 space-y-4 md:left-16">
            <h1 className="text-3xl md:text-4xl font-semibold ">
              Hire Prevetted Developers And Team
            </h1>
            <p className=" font-light text-md md:text-xl ">
              Hire experienced remote developers trained to write{" "}
              <span className="font-bold">good quality of code</span> and
              comfortable working with international tech-clients
            </p>
            <button
              className="primary-button rounded-none max-w-xs text-lg "
              onClick={showModal}
            >
              Hire Now
            </button>
          </div>

          </div>
        <div className="col-span-3 ">
        <img
            className=" object-contain h-[600px] w-[500px] relative z-50"
            src={our_services_hero1}
            alt="our-services"
          />
        </div>

         
          {/* <div className="absolute bg-gradient-to-r from-black z-10 w-full h-full top-0 left-0"></div> */}

          {/* <div className="absolute flex flex-col  justify-center h-full new-container  top-4 z-10 text-white md:w-5/12 space-y-4 md:left-16">
            <h1 className="text-3xl md:text-4xl font-semibold ">
              Hire Prevetted Developers And Team
            </h1>
            <p className=" font-light text-md md:text-xl text-gray-200 ">
              Hire experienced remote developers trained to write{" "}
              <span className="font-bold">good quality of code</span> and
              comfortable working with international tech-clients
            </p>
            <button
              className="primary-button rounded-none max-w-xs text-lg "
              onClick={showModal}
            >
              Hire Now
            </button>
          </div> */}
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className=" new-container pt-10">
        <h2 className="text-center text-2xl md:text-3xl font-semibold capitalize ">
          Our developers are trusted by 50+ global companies and startups.
        </h2>
        <Client data={client} slides={isDesktop} heading />
      </section>

      {/* 1 Best offers */}
      <section id="best-offers" className=" grid grid-cols-12 mt-10 md:mt-28">
        <div className="col-span-12 lg:col-span-6 space-y-3 order-2 lg:order-1 flex flex-col justify-center max-w-3xl mx-auto md:w-4/5 px-10 my-10 lg:my-0">
          <h2 className="text-2xl md:text-4xl font-semibold  lg:-mt-10">
            Why hiring from us is a good choice ?
          </h2>
          <p className="text-lg md:text-xl font-light pb-5">
            It is the same as hiring in India directly but with us doing the
            most difficult parts so that you can focus on your business.
          </p>

          {/*  */}
          <div className="space-y-7 text-lg">
            {/* <h3 className="text-3xl font-semibold">
              High Quality / Cost ratio
            </h3> */}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center  min-w-[40px] h-10 rounded ">
                <img
                  src={dollarIcons}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-5 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">
                  Hire the top talent at competitive rates
                </h5>
                <p className=" pointer-paragraph">
                  You get the best RoI on your investment through our high
                  quality pre-vetted engineers
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={skills}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-5 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className="pointer-heading ">
                  Developers backed by an strong ecosystem
                </h5>
                <p className="pointer-paragraph">
                  Our developers work from in-office environment, where any help
                  they need is handy from a team of experienced developers
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={easy_to_manage}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className="pointer-heading ">
                  Experience of working with CTOs/Tech Clients
                </h5>
                <p className="pointer-paragraph">
                  Our developers have experience of working with global teams
                  and CTOs/Founders
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={bestOthers}
            alt="What makes us the best from others"
          />
        </div>
      </section>
      {/* 2 Rigorous Vetting */}
      <section id="rigorous-vetting" className=" grid grid-cols-12 bg-gray-100">
        <div className="col-span-12 lg:col-span-6 ">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={rigorousVetting}
            alt="Rigorous Vetting"
          />
        </div>

        <div className="col-span-12 lg:col-span-6 space-y-3 flex flex-col justify-center max-w-3xl mx-auto md:w-4/5 px-10 my-10 lg:my-0">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5 ">
            Professionalism Guaranteed
          </h2>
          <div className="text-lg space-y-5">
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={testIcon}
                  alt="5+ hours of tests and interviews"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className="pointer-heading ">
                  Respect Commitments & Timelines
                </h5>
                <p className=" pointer-paragraph">
                  Our developers are trained through systematic procedures to
                  make commitments which are practical and adhere to them
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={zero_risk}
                  alt="Delivery Managers"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">Delivery Managers</h5>
                <p className=" pointer-paragraph">
                  We align delivery managers for each engagement who work
                  closely, especially at beginning to ensure smooth start and
                  continued satisfaction
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={seniority}
                  alt="Quality of efforts and delivery"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">
                  Quality of efforts and delivery
                </h5>
                <p className=" pointer-paragraph">
                  We ensure strong adherence to delivery standards and have
                  systems in place to ensure that our engineers put in effective
                  40hrs weekly
                </p>
              </div>
            </div>
          </div>
          <a
            onClick={showModal}
            className=" pb-1 border-b border-primary inline-flex text-primary cursor-pointer max-w-[240px] pt-5"
          >
            Hire Developer Now
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
      </section>
      {/* 3 Best Others */}
      <section id="best_offers" className="  grid grid-cols-12">
        {/*  */}
        <div className="col-span-12 lg:col-span-6 space-y-3  order-2 lg:order-1 flex flex-col justify-center max-w-3xl mx-auto md:w-4/5 px-10 my-10 lg:my-0">
          <h2 className="text-2xl md:text-4xl font-semibold pb-6">
            Effective Team Collaboration
          </h2>
          {/*  */}
          <div className="space-y-5 text-lg">
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={daily_updates}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">Regular Updates</h5>
                <p className=" pointer-paragraph">
                  We get onboard on your Slack, Chats etc to stay in touch with
                  you. You get regular updates and hustle over virtual standups
                  per your convenience
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={easy_to_manage}
                  alt="Effective Management"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">Effective Management</h5>
                <p className=" pointer-paragraph">
                  Our developers are easy to manage and are trained to ensure
                  that they constantly work on what’s most valuable to you.
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={match_your_timezone}
                  alt="Overlap with international time zones"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" pointer-heading ">
                  Overlap with International time zones
                </h5>
                <p className=" pointer-paragraph">
                  Our typical operating hours are 0930 to 1830 IST, which gives
                  us some day-time overlap with US East to Australian East time
                  zones to work effectively
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={effectiveCollaboration}
          />
        </div>
      </section>
      {/* CTA */}
      <div className="mt-10">
        <CTA showModal={showModal} />
      </div>
      {/* What Does Hcode Provide */}
      <section id="hcode_provide" className="new-container mt-5 mb-10">
        <div className=" grid grid-cols-12 md:gap-8">
          <h2 className="col-span-12 text-3xl font-semibold mb-14 mt-10 md:mb-7 text-center w-full ">
            What Does Hcode Provide
          </h2>
          {hcode_provide.map((item) => (
            <div className="lg:col-span-4 md:col-span-6 col-span-12 mb-20 md:mb-0 bg-gray-100 px-10 pb-10 rounded-md border-b-8 border-blue-600 text-center ">
              <div className="w-20 h-20 rounded-full bg-white mx-auto -mt-10 shadow-md flex justify-center items-center">
                {/* <img src={} /> */}
                <item.icons />
              </div>
              <h5 className="text-xl pb-2 font-bold pt-5 capitalize">
                {item.title}
              </h5>
              <ul
                className="list-disc list-inside"
                MERN_Developer
                dangerouslySetInnerHTML={{ __html: item.info }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="pt-10 pb-0 bg-gray-50 mb-16">
        <Testimonial />
        <div className="mx-auto text-center pb-5">
          <a
            // href="/contact"
            onClick={showModal}
            className=" pb-1 border-b border-primary inline-flex text-primary cursor-pointer max-w-[200px]"
          >
            Request Consultation
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      {/* <section id="tech_stack" className="new-container my-10">
        <div className="md:w-1/2">
          <h2 className=" text-3xl md:text-4xl font-semibold mb-2 mt-10 capitalize  ">
            Check out technology stack
          </h2>
          <p className="pointer-paragraph text-base md:text-lg">
            In delivering scalable, flawlessly working apps, top-notch
            technology stack is a must. Here are the web development solutions
            we rely on to deliver high quality applications.
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 mt-5">
          {mern_tech_stack.map((tech) => (
            <div key={tech.tech_name}>
              <img
                src={tech.image}
                alt={tech.tech_name}
                className="hover:scale-110 duration-100 ease-in-out hover:shadow-sm w-full"
              />
              <h2 className="font-semibold mt-3 text-lg">{tech.tech_name}</h2>
            </div>
          ))}
        </div>
        <div className="mx-auto text-center pb-5 mt-10">
          <button
            onClick={showModal}
            className="  outline-button cursor-pointer"
          >
            Hire  Developer Now
          </button>
        </div>
      </section> */}

      {/* Our Work */}
      <section id="our-work" className=" pt-16 relative bg-gray-50">
        <h2 className="text-4xl font-semibold text-center">Our Work</h2>
        <div className=" new-container pt-10 grid grid-cols-12 ">
          <div className="col-span-12 ">
            <CarouselProvider
              visibleSlides={1}
              totalSlides={portfolioData.length}
              step={1}
              isIntrinsicHeight
              infinite
              interval={4000}
              isPlaying
              lockOnWindowScroll
              playDirection="forward"
            >
              <div className="relative">
                {/* <div className="new-container"> */}
                <Slider>
                  {portfolioData.map((data) => (
                    <Slide>
                      <CardPortfolio
                        key={data.id}
                        cardData={data}
                        selectedCategory={selectedCategory}
                      />
                    </Slide>
                  ))}
                </Slider>
              </div>

              <ButtonBack>
                <ChevronLeftIcon className="bg-white   text-primary  shadow-md absolute left-0 md:left-4 bottom-1/2 rounded-full w-8 h-8   hover:shadow-lg " />
              </ButtonBack>
              <ButtonNext>
                <ChevronRightIcon className="  text-primary bg-white shadow-md absolute right-0 md:right-4 bottom-1/2 rounded-full w-8 h-8   hover:shadow-lg " />
              </ButtonNext>
            </CarouselProvider>
          </div>
        </div>
      </section>

      {/* Hire MERN Developer for your team */}
      <section className="new-container  grid grid-cols-12 md:gap-8 ">
        <h2 className="col-span-12 text-2xl md:text-3xl font-semibold my-5 md:mt-10 text-center capitalize">
          Hire Developer for your team
        </h2>
        {hire_dev_hcode.map((item) => (
          <div
            className={`lg:col-span-4 md:col-span-6 col-span-12  mt-10 lg:mt-0 px-10 py-10 bg-gray-${item.id}00`}
          >
            <div className="bg-black rounded-full p-5 w-10 h-10 text-white flex justify-center items-center">
              {item.id}
            </div>
            <h5 className="text-xl pb-2 font-bold pt-2">{item.title}</h5>
            <p dangerouslySetInnerHTML={{ __html: item.info }} />
          </div>
        ))}
      </section>
      <div className="mx-auto text-center pb-5 mt-10">
        <button onClick={showModal} className="outline-button cursor-pointer">
          Hire Developer Now
        </button>
      </div>

      {/* FAQ */}
      <section id="faq" className="faqs bg-gray-50 my-10">
        <Accordion data={daas_faq_services} />
      </section>

      {/* CTA */}
      <CTA showModal={showModal} buttonText="Hire Developer" />
    </>
  );
};

export default Hire_Developer;

const CTA = ({ showModal, heading, paragraph, buttonText }) => (
  <section id="cta" className="new-container text-center text-white mb-10">
    <div className="bg-gradient-to-r from-primary to-blue-900 p-10">
      <h2 className="col-span-12 text-4xl font-semibold  ">
        {heading ?? "Hire Developers"}
      </h2>
      <p className="mt-1 font-light">
        {paragraph ??
          "Get our experienced developers working for you right away"}
      </p>
      <button onClick={showModal} className="outline-button px-5">
        {buttonText ?? `Let’s Get Started`}
      </button>
    </div>
  </section>
);
