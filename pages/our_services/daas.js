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
  daily_updates,
  dollarIcons,
  easy_to_manage,
  effectiveCollaboration,
  faq_services,
  hcode_provide,
  match_your_timezone,
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

const daas = () => {
  const [isDesktop, setIsDesktop] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(["Blockchain"]);
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
        <title>Daas | Hcode Techonolgies</title>
      </Head>
      {/* Hero Image */}
      {isModalVisible && (
        <CustomModal setOpen={setIsModalVisible} open={isModalVisible} />
      )}
      <section>
        <div className=" relative cursor-pointer">
          <img
            className="w-full object-cover h-[70vh] md:h-full relative z-0 object-left"
            src={our_services_hero}
          />
          <div className="absolute bg-gradient-to-r from-black z-10 w-full h-full top-0 left-0"></div>

          <div className="absolute flex flex-col  justify-center h-full new-container  top-4 z-10 text-white md:w-5/12 space-y-3 md:left-16">
            <h1 className="text-3xl md:text-4xl font-semibold ">
              Hire Full-Stack developers Remotely
            </h1>
            <p className=" font-light text-md md:text-lg">
              Hire senior pre-vetted remote developers with strong technical and
              communication skills at unbeatable prices, ready to work in your
              timezone.
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
      <section id="best-offers" className=" grid grid-cols-12 md:mt-28">
        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center max-w-3xl mx-auto w-3/4 ">
          <h2 className="text-4xl font-semibold ">
            What Makes Us The Best From Others?
          </h2>
          <p className="text-xl font-light pb-5">
            Hire senior pre-vetted remote developers with strong technical and
            communication skills at unbeatable prices, ready to work in your
            timezone.
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
                  Hire Silicon Valley caliber at half the cost
                </h5>
                <p className=" pointer-paragraph">
                  Hire the top 1% of 1.5 million+ developers from 150+ countries
                  who have applied to Turing.
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
                <h5 className="pointer-heading ">100+ skills available</h5>
                <p className="pointer-paragraph">
                  Hire React, Node, Python, Angular and more.
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
                <h5 className="pointer-heading ">Zero risk</h5>
                <p className="pointer-paragraph">
                  If you decide to stop within two weeks, you pay nothing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover w-full "
            src={bestOthers}
            alt="What makes us the best from others"
          />
        </div>
      </section>
      {/* 2 Rigorous Vetting */}
      <section id="rigorous-vetting" className=" grid grid-cols-12 bg-gray-100">
        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover w-full "
            src={rigorousVetting}
            alt="Rigorous Vetting"
          />
        </div>

        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center max-w-3xl mx-auto w-3/4">
          <h2 className="text-4xl font-semibold pb-5 ">Rigorous Vetting</h2>
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
                  5+ hours of tests and interviews
                </h5>
                <p className=" pointer-paragraph">
                  More rigorous than Silicon Valley job interviews. We test for
                  100+ skills, data structures, algorithms, systems design,
                  software specializations & frameworks.
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
                <h5 className=" font-bold ">Seniority tests</h5>
                <p className=" font-light">
                  We select excellent communicators who can proactively take
                  ownership of business and product objectives without
                  micromanagement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Best Others */}
      <section id="best_offers" className="  grid grid-cols-12">
        {/*  */}
        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center max-w-3xl mx-auto w-3/4">
          <h2 className="text-4xl font-semibold pb-6">
            Effective collaboration
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
                <h5 className=" font-bold ">Daily updates</h5>
                <p className=" font-light">
                  Turing’s Workspace gives you even more visibility into your
                  remote developer’s work with automatic time tracking & virtual
                  daily stand-ups.
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
                <h5 className=" font-bold ">Easy to manage</h5>
                <p className=" font-light">
                  High visibility makes Turing developers easy to manage and
                  ensures that they constantly work on what’s most valuable to
                  you.
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
                <h5 className=" font-bold ">Match your timezone</h5>
                <p className=" font-light">
                  Our developers match your time zone and overlap a minimum of 4
                  hours with your workday.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover w-full "
            src={effectiveCollaboration}
          />
        </div>
      </section>

      {/* What Does Hcode Provide */}
      <section className="new-container my-10 grid grid-cols-12 gap-8">
        <h2 className="col-span-12 text-3xl font-semibold my-10 text-center">
          What does Hcode provide
        </h2>
        {hcode_provide.map((item) => (
          <div className="lg:col-span-4 md:col-span-6 col-span-12 bg-gray-100 mt-10 lg:mt-0 px-10 pb-10 text-center rounded-md border-b-8 border-blue-600">
            <div className="w-20 h-20 rounded-full bg-blue-600 mx-auto -mt-10 "></div>
            <h5 className="text-xl pb-2 font-bold pt-5">High ROI</h5>
            <p className="">
              Hire the top 1% of 1.5 million+ developers from 150+ countries who
              have applied to Turing.
            </p>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="pt-10 pb-0 ">
        <Testimonial />
      </section>

      {/* CTA */}
      <section id="cta" className="new-container text-center text-white">
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

      {/* Our Work */}
      <section id="our-work" className="new-container py-16">
        <h2 className="text-4xl font-semibold text-center">Our Work</h2>
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12 ">
            {portfolioData.map((data) => (
              <CardPortfolio
                key={data.id}
                cardData={data}
                selectedCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="faqs">
        <Accordion data={faq_services} />
      </section>
      {/* CTA */}
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
    </>
  );
};

export default daas;
