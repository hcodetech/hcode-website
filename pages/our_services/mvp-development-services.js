import { useState, useEffect } from "react";

import { getTestimonialData } from "../../utils/config";

import Client from "../../components/Client";
import Testimonial from "../../components/Testimonial";
import Accordion from "../../components/Accordion";
import CTA from "../../components/CTA";
import MvpBenefits from "../../components/MvpBenefits";
import { Blogs } from "../../components/Blogs";
import { ArrowRightIcon } from "@heroicons/react/solid";

import Head from "next/head";
import MetaTags from "../../components/MetaTags";

import {
  mvp_services,
  faq_mvp,
  metaData,
  posts,
  client,
} from "../../constants/constants";
import CaseStudiesCard from "../../components/CaseStudiesCard";

function mvp_development_services() {
  const data = getTestimonialData("mvp");
  const [isDesktop, setIsDesktop] = useState("");

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  }, []);

  return (
    <>
      <Head>
        <title> MVP Development Services | Hcode </title>

        <MetaTags page={metaData.mvp} />
      </Head>
      <section className="h-screen bg-gray-50  bg-mvp_bg_img bg-no-repeat bg-cover">
        <div className="max-w-2xl sm:px-4 h-2/5 pt-[275px] sm:pt-64 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-bold text-4xl sm:text-7xl text-primary py-4 w-[95.33%] sm:w-[102%]">
            MVP Development Services
          </h1>
          <p className="font-poppins text-black text-[20px] px-5 sm:text-2xl font-medium py-3 leading-7 md:leading-10 ">
            Validate your business idea with a real-world beta test of your
            digital product, and launch smarter with HCode MVP development
            services.
          </p>

          <div className="text-center mt-10 sm:mt-10">
            <a
              href="/contact"
              className="bg-primary text-white rounded px-16 py-4 text-center"
            >
              Tell us about your project
            </a>
          </div>
        </div>
      </section>

      <div className=" new-container pt-10 my-9">
        <Client
          logoWidth={250}
          logoHeight={100}
          data={client}
          slides={isDesktop}
        />
      </div>
      {/* our services */}
      <section className="bg-[#F8F9FB] mt-24">
        <SectionHeader
          heading="  Success of your product starts with a great MVP"
          paragraph=" An MVP is a cost-effective way to test your idea. It has essential
        and unique features that showcase your product's value. Validate
        your hypothesis, optimize your resources, and get feedback before
        launching at scale."
          cta
        />
      </section>

      <SectionHeader
        heading=" MVP Development Solutions at HCode"
        paragraph=" We deliver exceptional ROI and clear timelines for your MVP, ensuring
        your success through our proven MVP as a Service approach."
      />

      <div className=" new-container -mt-9 mb-12  space-y-12">
        {/* 1st Card */}
        <div className="  grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
          <div className="col-span-12 lg:col-span-1 h-20 w-20">
            <img
              className=""
              src="/assets/img/MVP_Design_Services.svg"
              alt="MVP Design Services"
            />
          </div>
          <div className="col-span-12 lg:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
            <h3 className=" font-poppins text-3xl  text-black font-semibold   ">
              MVP Design Services
            </h3>
            <p className=" font-poppins text-xl text-black font-normal leading-7">
              We transform product ideas into user-friendly prototypes,
              encompassing core feature definition, user-friendly interface
              design, and prototype development. Our MVP design services include
              comprehensive technology and business analysis, project
              requirements identification, feature prioritization, product
              development strategy, and UX/UI design and prototyping.
            </p>

            <a
              href="https://calendly.com/gaurav-tomar/30min"
              target="_blank"
              className=" text-lg flex items-center mt-2 w-50 text-gray-500 cursor-pointer hover:underline  "
            >
              Schedule a brief call
              <ArrowRightIcon className="w-6 md:ml-2  h-full text-gray-500" />
            </a>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="  grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
          <div className="col-span-12 lg:col-span-1 h-20 w-20">
            <img
              className=""
              src="/assets/img/ETE_MVP_Dev.svg"
              alt=" End-to-End Custom MVP Development"
            />
          </div>
          <div className="col-span-12 lg:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
            <h3 className=" font-poppins text-3xl  text-black font-semibold   ">
              End-to-End Custom MVP Development
            </h3>
            <p className=" font-poppins text-xl text-black font-normal leading-7  ">
              HCode's MVP development services provide rapid delivery of
              high-quality MVPs, leveraging cutting-edge technologies to
              accelerate product launch. Our team of experts builds MVPs for
              web, mobile, and desktop platforms, offering comprehensive
              end-to-end development services from technology and business
              analysis to full product delivery.
            </p>

            <a
              href="https://calendly.com/gaurav-tomar/30min"
              target="_blank"
              className=" text-lg flex items-center mt-2 w-50 text-gray-500 cursor-pointer hover:underline  "
            >
              Schedule a brief call
              <ArrowRightIcon className="w-6 md:ml-2  h-full text-gray-500" />
            </a>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F9FB] pt-[35px] sm:pt-16 ">
        <div className=" ">
          <MvpBenefits additionalClassName="lg:w-1/2" data={mvp_services} />
          {/*  */}
        </div>
      </section>

      {/* transform idea */}

      <div className="my-24  ">
        <CTA
          heading="Transform your ideas into reality with an MVP"
          paragraph="We can help you turn your ideas into successful MVPs that attract early adopters."
          buttonText="Tell us about your project"
          widthClass="lg:w-[70%]"
        />
      </div>

      {/* transform v2 */}
      <div className="  w-[100%] md:h-[850px] mt-10   bg-mvp_transform_idea bg-no-repeat  bg-left bg-cover">
        <div className="py-7">
          <div className="new-container  mt-4 ">
            <h3 className=" font-poppins text-[29.6px] sm:text-4xl font-semibold leading-10 text-left text-white mb-6 ">
              How We Develop MVP
            </h3>
            <div className="">
              <div className="flex flex-col md:grid grid-cols-12 gap-x-0 text-gray-50 md:-ml-10">
                <div className="flex md:contents">
                  <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center mt-12">
                      <div className=" md:block h-full w-1 bg-white pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 absolute top-[27%]  left-[0.4px] md:left-[-4.6px] -mt-5 md:-mt-3 rounded-full  bg-primary shadow "></div>
                  </div>
                  <div className=" col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto -ml-12  md:ml-[-33px]  w-full">

                    <h4 className="font-poppins text-[20px] sm:text-2xl font-semibold leading-10 mb-1">

                      {" "}
                      Discovery Meeting
                    </h4>
                    <p className="font-poppins text-base font-normal leading-6 max-w-lg  ">
                      In the discovery phase, we conduct a thorough analysis of
                      your business to gather key insights. This enables us to
                      strategically prioritize MVP features that align with your
                      vision.
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1  bg-white pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8 absolute top-[27%] left-[0.4px] md:left-[-4.6px] -mt-3 rounded-full  bg-primary shadow text-center"></div>
                  </div>
                  <div className=" col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto -ml-12 md:ml-[-33px] w-full">

                    <h4 className="font-poppins text-[20px] sm:text-2xl font-semibold leading-10 mb-1">
                      Designing{" "}
                    </h4>

                    <p className="font-poppins text-base font-normal leading-6 max-w-md">
                      Our innovative approach ensures that we prioritize your
                      user's experience to design a modern MVP that solves real
                      user problems.
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1  bg-white pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8  absolute top-[27%]  left-[0.4px] md:left-[-4.6px] -mt-3 rounded-full  bg-primary shadow text-center"></div>
                  </div>
                  <div className=" col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto -ml-12 md:ml-[-33px] w-full">
                    <h4 className="font-poppins text-[20px] sm:text-2xl font-semibold leading-10 mb-1 ">
                      Development
                    </h4>
                    <p className="font-poppins text-base font-normal leading-6 max-w-md">
                      We ensure excellent results by utilizing the latest tech
                      stack and implementing rigorous code review and
                      development processes.
                    </p>
                  </div>
                </div>

                <div className="flex md:contents">
                  <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
                    <div className="h-full w-6 flex items-center justify-center">
                      <div className="h-full w-1  bg-white pointer-events-none"></div>
                    </div>
                    <div className="w-6 h-6 md:w-8 md:h-8  absolute top-[27%] left-[0.4px] md:left-[-4.6px] -mt-3 rounded-full  bg-primary shadow text-center"></div>
                  </div>
                  <div className=" col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto -ml-12 md:ml-[-33px]  w-full">
                    <h4 className="font-poppins text-[20px] sm:text-2xl font-semibold leading-10 mb-1">
                      Release
                    </h4>
                    <p className="font-poppins text-base font-normal leading-6 max-w-sm">
                      We ensure your product is launch-ready and performs as
                      expected through real device testing and user insights.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mvp built by hcode */}
      <div className=" mt-8 mb-10">
        <SectionHeader
          heading={" MVPs built by HCode"}
          paragraph={
            "We have delivered these high quality complete MVP products in very competitive timelines for our clients"
          }
        />
        <div className="-mt-14">
          <CaseStudiesCard />
        </div>
      </div>

      {/* testimonial */}
      <div className="py-20 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* blogs section  */}
      <div className="sm:new-container  ">
        <Blogs data={posts} />
      </div>

      {/* FAQ */}
      <section className="bg-gray-100 lg:-mt-56">
        <Accordion data={faq_mvp} />
      </section>

      {/* CTA */}
      <div className="py-10 sm:py-0 sm:m-20">
        <CTA
          heading="Get your MVP built by Us"
          paragraph="Hire experienced MVP development team for your Startup Idea"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
}
export default mvp_development_services;

const SectionHeader = ({ heading, paragraph, cta, ctaText }) => (
  <div>
    <div className="new-container text-center mx-auto  py-16 ">
      <div className="max-w-lg mx-auto ">
        <h2 className="font-semibold text-4xl my-4">{heading}</h2>
        <div className="px-3 py-[2px] max-w-[120px] my-4 bg-blue-500 mx-auto"></div>
        <p className="text-xl pt-1 pb-6">{paragraph}</p>
        <div className="mt-6">
          {cta && (
            <a
              href="/contact"
              className="bg-white text-primary  border-primary border-2 rounded px-16 py-4 text-center"
            >
              {ctaText || "Tell us about your project"}
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);
