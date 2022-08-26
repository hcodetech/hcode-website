import Head from "next/head";
import { DotGroup } from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import Accordion from "../../components/Accordion";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import CustomModal from "../../components/CustomModal";
import Testimonial from "../../components/Testimonial";
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
  metaData,
  our_services_hero,
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
const mern_Developer = () => {
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
        <title>Hire Mern Developer | Hcode Techonolgies</title>
        <MetaTags page={metaData.developer_as_a_service} />
      </Head>
      {/* Hero Image */}
      {isModalVisible && (
        <CustomModal setOpen={setIsModalVisible} open={isModalVisible} />
      )}
      <section>
        <div className=" relative cursor-pointer">
          <img
            className="w-full object-cover h-[70vh] md:h-full max-h-[75vh] relative z-0 object-left"
            src={our_services_hero}
          />
          <div className="absolute bg-gradient-to-r from-black z-10 w-full h-full top-0 left-0"></div>

          <div className="absolute flex flex-col  justify-center h-full new-container  top-4 z-10 text-white md:w-5/12 space-y-3 md:left-16">
            <h1 className="text-3xl md:text-4xl font-semibold ">
              Augment your teach team with a MERN developer
            </h1>
            <p className=" font-light text-md md:text-lg text-gray-300">
              Augment your engineering team with MERN developer(s) who will give
              you a full stack development solution - front-end, backend,
              testing, and mobile application solutions.
            </p>
            <button
              className="primary-button rounded-none max-w-xs"
              onClick={showModal}
            >
              Hire MERN Developer
            </button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className=" new-container pt-10">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* 1 Best offers */}
      <section id="best-offers" className=" grid grid-cols-12 mt-10 md:mt-28">
        <div className="col-span-12 md:col-span-6 space-y-3 order-2 md:order-1 flex flex-col justify-center max-w-3xl mx-auto md:w-3/4 px-10 my-10 md:my-0">
          <h2 className="text-2xl md:text-4xl font-semibold capitalize md:-mt-10">
            Why you should hire from us ?
          </h2>
          <p className="text-lg md:text-xl font-light pb-5">
            It is the same as hiring in India directly but with us doing the
            most difficult parts so that you can focus on your business.
          </p>
          {/*  */}
          <div className="space-y-7 text-lg">
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
                  Hire the top talent at half the cost
                </h5>
                <p className=" pointer-paragraph">
                  Hire top talent from India at half the cost as per industry
                  standards
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
                  Complete development solution
                </h5>
                <p className="pointer-paragraph">
                  Hire a full stack developer who is equally skilled in
                  front-end and back-end coding
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={zero_risk}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className="pointer-heading ">No risk</h5>
                <p className="pointer-paragraph">
                  You can hire the developer at a trial of 2 weeks
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 order-1 md:order-2">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={bestOthers}
            alt="What makes us the best from others"
          />
        </div>
      </section>
      {/* 2 Rigorous Vetting */}
      <section id="rigorous-vetting" className=" grid grid-cols-12 bg-gray-100">
        <div className="col-span-12 md:col-span-6 ">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={rigorousVetting}
            alt="Rigorous Vetting"
          />
        </div>

        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center max-w-3xl mx-auto md:w-3/4 px-10 my-10 md:my-0">
          <h2 className="text-2xl md:text-4xl font-semibold pb-5 ">
            Diligent Vetting
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
                <h5 className="pointer-heading ">4 Step Vetting</h5>
                <p className=" pointer-paragraph">
                  All our developers go through rigorous testing and vetting
                </p>
              </div>
            </div>
            {/*  */}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={seniority}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" font-bold ">Promising Success Rate</h5>
                <p className=" font-light">
                  Our thorough selective process leads to a ?? trial-to-hire
                  success rate
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Best Others */}
      <section id="best_offers" className="  grid grid-cols-12">
        {/*  */}
        <div className="col-span-12 md:col-span-6 space-y-3  order-2 md:order-1 flex flex-col justify-center max-w-3xl mx-auto md:w-3/4 px-10 my-10 md:my-0">
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
                <h5 className=" font-bold ">Regular Updates</h5>
                <p className=" font-light">
                  HCode's tools gives you even more visibility into your remote
                  developer’s work with automatic time tracking & virtual daily
                  stand-ups
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={easy_to_manage}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" font-bold ">Effective Management</h5>
                <p className=" font-light">
                  Our developers are easy to manage and are trained to ensure
                  that they constantly work on what’s most valuable to you.
                </p>
              </div>
            </div>{" "}
            <div className="flex">
              <div className="bg-blue-100 flex justify-center items-center min-w-[40px] h-10 rounded ">
                <img
                  src={match_your_timezone}
                  alt="Hire Silicon Valley caliber at half the cost"
                  className="h-6 w-10"
                />
              </div>
              <div className="ml-3">
                <h5 className=" font-bold ">Timezone Match-up</h5>
                <p className=" font-light">
                  Our developers match your time zone and overlap a minimum of 1
                  hour with your workday
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-6 order-1 md:order-2">
          <img
            className="h-[50vh] md:h-[80vh] object-cover w-full "
            src={effectiveCollaboration}
          />
        </div>
      </section>

      {/* What Does Hcode Provide */}
      <section className="new-container my-10">
        <div className=" grid grid-cols-12 md:gap-8">
          <h2 className="col-span-12 text-3xl font-semibold my-10 text-center w-full ">
            What does Hcode provide
          </h2>
          {hcode_provide.map((item) => (
            <div className="lg:col-span-4 md:col-span-6 col-span-12 bg-gray-100 mb-20 lg:mt-0 px-10 pb-10  rounded-md border-t-8 border-blue-600 ">
              {/* <div className="w-20 h-20 rounded-full bg-blue-600 mx-auto -mt-10 "></div> */}
              <h5 className="text-xl pb-2 font-bold pt-5">{item.title}</h5>
              <ul
                className="list-disc list-inside"
                dangerouslySetInnerHTML={{ __html: item.info }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="pt-10 pb-0 bg-gray-50 my-20">
        <Testimonial />
      </section>

      {/* CTA */}
      <CTA showModal={showModal} />

      {/* Our Work */}
      <section id="our-work" className=" pt-16 relative">
        <h2 className="text-4xl font-semibold text-center">Our Work</h2>
        <div className=" new-container py-10 grid grid-cols-12 ">
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

      {/* What Does Hcode Provide */}
      <section className="new-container  grid grid-cols-12 md:gap-8">
        <h2 className="col-span-12 text-2xl md:text-3xl font-semibold my-5 md:my-10 text-center">
          How to hire the best MERN developer for your team through HCode?
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

      {/* FAQ */}
      <section className="faqs">
        <Accordion data={daas_faq_services} />
      </section>

      {/* CTA */}
      <CTA showModal={showModal} />
    </>
  );
};

export default mern_Developer;

const CTA = ({ showModal }) => (
  <section id="cta" className="new-container text-center text-white mb-10">
    <div className="bg-gradient-to-r from-primary to-blue-900 p-10">
      <h2 className="col-span-12 text-4xl font-semibold  ">
        Hire Dedicated Developers
      </h2>
      <p className="">Get our top talent working for you right away</p>
      <button onClick={showModal} className="outline-button px-5">
        Hire MERN Developer
      </button>
    </div>
  </section>
);
