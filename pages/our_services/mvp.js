import Head from "next/head";
import React, { useState } from "react";
import Benefits from "../../components/Benefits";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import CTA from "../../components/CTA";
import Testimonial from "../../components/Testimonial";
import {
  client,
  mvp_benefits,
  MVP_Hero,
  MVP_look_icon,
  MVP_need_icon,
  MVP_want_icon,
} from "../../constants/constants";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";

const mvp = () => {
  const [selectedCategory, setSelectedCategory] = useState(["MVP"]);
  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.PROJECT));

  return (
    <>
      <Head>
        <title>Rapid Prototyping (MVP) | Hcode </title>
      </Head>
      {/* Hero Section */}
      <section className="bg-[#060501] text-white">
        <div className="new-container grid grid-cols-12 min-h-screen md:min-h-[90vh] ">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <h2 className=" md:pt-48 text-3xl md:text-5xl font-semibold leading-loose ">
              MVP Development Services
            </h2>
            <p className=" md:mt-4 mb-6 md:mb-10 text-white tracking-tight md:text-lg opacity-70 md:w-3/4">
              Get your Minimal Viable Product built by a team of experienced
              product builders
            </p>

            <a
              href="/contact"
              className="bg-white block md:inline px-4 lg:px-16 py-5 text-lg text-center text-black rounded-md font-medium hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Contact us
            </a>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 mt-24 md:mt-20 scale-90  lg:absolute lg:right-24 ">
            <img src={MVP_Hero} className="object-cover lg:min-w-[120%]" />
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} />
      </section>

      {/* Why MVP */}
      <section className="lg:py-16 bg-gray-100">
        <div className="new-container ">
          <h1 className="text-4xl font-semibold lg:w-3/4">
            Startups which need MVP,
          </h1>

          <div className="grid grid-cols-12 gap-8 py-8">
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white shadow p-10 min-h-[320px] h-full relative">
                <img src={MVP_want_icon} className="ml-auto pb-8" />
                <div className="absolute bottom-0 pb-10 pr-5">
                  <h6 className="font-light">Want</h6>
                  <h2 className="font-semibold text-2xl">
                    High RoI on their time and money
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white shadow p-10 min-h-[320px] h-full relative">
                <img src={MVP_need_icon} className="ml-auto pb-8" />
                <div className="absolute bottom-0 pb-10 pr-5">
                  <h6 className="font-light align-baseline">Need</h6>
                  <h2 className="font-semibold text-2xl">
                    Clear understanding of timelines
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="bg-white shadow p-10 min-h-[320px] h-full relative">
                <img src={MVP_look_icon} className="ml-auto pb-8" />
                <div className="absolute bottom-0 pb-10 pr-5">
                  <h6 className="font-light">Look for</h6>
                  <h2 className="font-semibold text-2xl">
                    An experienced team for building their MVP
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <h5 className="text-center font-medium text-lg pb-10 md:pb-0">
            We’re proud to say, that we tick all the above boxes for our client
            partners
          </h5>
        </div>
      </section>

      {/* MVP Life cycle */}
      <section className="new-container py-16">
        <div className="lg:pb-10">
          <h6 className="font-light ">Our Approach</h6>
          <h1 className="text-4xl font-semibold pt-1 pb-3 lg:w-5/12">
            You just need a Product Idea, We will do the Rest
          </h1>
          <p className="text-lg font-light lg:w-9/12 ">
            Yes you read it right. Our offering is not just for tech-founders
            who can drive the technology decisions, but equally well tailored
            for even non-tech founders who have Zero experience in development.
            We not only develop for you, but can help you with{" "}
            <strong>Design,</strong> choosing the{" "}
            <strong>right technology</strong> stacks for your product, and build
            the right foundation for scale and security through industry
            standard <strong>Testing & Deployment</strong> practices.
          </p>
        </div>

        <div class="step-indicator lg:my-5">
          <div class="dot-container">
            <div class="step step2">
              <div class="step-icon"></div>
              <p className="text-black font-medium ">Planning</p>
            </div>

            <div class="indicator-line"></div>
            <div class="step step1">
              <div class="step-icon"></div>
              <p className="text-black font-medium">Design</p>
            </div>

            <div class="indicator-line"></div>
            <div class="step step3">
              <div class="step-icon"></div>
              <p>Choosing right Tech</p>
            </div>

            <div class="indicator-line"></div>
            <div class="step step1">
              <div class="step-icon"></div>
              <p>Development</p>
            </div>

            <div class="indicator-line"></div>
            <div class="step step2">
              <div class="step-icon"></div>
              <p>Testing</p>
            </div>

            <div class="indicator-line"></div>
            <div class="step step1">
              <div class="step-icon"></div>
              <p>Release & support</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-16 md:mt-24">
          <a
            href="/our_services"
            className="bg-black text-white rounded px-16 py-4 hover:bg-gray-800   text-center transition transform duration-200 ease-out"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-10">
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 ">
            <h2 className="text-4xl font-semibold pb-2">MVPs built by HCode</h2>
            <p className="font-light text-xl mt-2">
              We have delivered these high quality complete MVP products in very
              competitive timelines for our clients.
            </p>
          </div>
          <div className="col-span-12 py-10">
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

      {/* Testimonial */}
      <div className="pt-10 pb-0 bg-gray-100">
        <Testimonial />
      </div>

      {/* Benefits */}
      <section className=" pt-12 ">
        <div className=" ">
          <Benefits data={mvp_benefits} />
          {/*  */}
        </div>
      </section>

      {/* CTA */}
      <div className="my-10 ">
        <CTA
        widthClass='w-full'
          heading="Get your MVP built by Us"
          paragraph="Hire experienced MVP development team for your Startup Idea"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
};

export default mvp;
