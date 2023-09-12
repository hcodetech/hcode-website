// /** @format */

import React, { useEffect, useState } from "react";

import {
  metaData,
  AIService_Hero,
  client,
  ai_services,
  ai_technologies,
  ai_benefits,
} from "../../constants/constants";
import Head from "next/head";
import MetaTags from "../../components/MetaTags";
import Client from "../../components/Client";
import Benefits from "../../components/Benefits";
import CardPortfolio from "../../components/CardPortfolio";
import Testimonial from "../../components/Testimonial";
import CTA from "../../components/CTA";
import useGetFetch from "../hooks/useGetFetch";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import Parallax from "../../components/AutomaticCarousel";
import MyCarousel from "../../components/AutomaticCarousel";

const AIService = () => {
  const [isDesktop, setIsDesktop] = useState("");
  const selectedCategory = ["Blockchain"];

  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });

  return (
    <div>
      <Head>
        <title>AI services | Hcode Technologies</title>
        <MetaTags page={metaData.work_with_us} />
      </Head>

      {/* Hero Section */}
      <div className="new-container  grid  grid-cols-2 md:grid-cols-4 pt-16 ">
        <div className="py-5 md:py-24 md:pr-28 mt-20 col-span-2 order-2 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Seamless AI Integration Solutions for Your Business
          </h1>

          <p className="py-5 text-lg font-light">
            With Our Expertise, Your Business Will Seamlessly Integrate AI
            Solutions for Enhanced Efficiency,  Data Insights, and Competitive
            Advantage
          </p>

          <div className="mt-5">
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
              target="_blank"
              className="primary-button"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="col-span-2 order-1 md:order-2">
          <img src={AIService_Hero} alt="AI services" className="w-full" />
        </div>
      </div>



{/* <MyCarousel/> */}
      {/* <Parallax baseVelocity={0.5}>
        <div className="flex gap-6">
          {client.map((data) => (
            <div key={1}>
              <img
                src={data.img}
                alt={data.alt}
                // height={450}
                // width={450}
                className="md:min-w-[300px] min-w-[250px] md:h-[300px] h-[250px]"
              />
            </div>
          ))}
        </div>
      </Parallax> */}

      <section className="new-container py-20">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* Tech Services */}
      <section className=" pb-14 new-container ">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-semibold">
            Our AI Integration Services
          </h1>
          <p className="max-w-xl  mx-auto mt-3 text-gray-700">
            Our range of services seamlessly embeds artificial intelligence into
            your operations, enhancing efficiency and driving competitiveness.
            Explore our offerings below to unlock the power of AI for your
            organization.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-10">
          {ai_services.points.map((data) => (
            <div
              className="bg-gray-100 p-8 col-span-2 border-b-4 border-primary "
              key={data.heading}
            >
              <div className="bg-gray-300 w-20 h-20 mb-2 flex justify-center items-center rounded-full">
                <img src={data.image} />
              </div>

              <h3 className="text-2xl mb-1 font-semibold">{data.heading}</h3>
              <p className="text-gray-700 leading-loose pr-8">
                {data.descripition}
              </p>
            </div>
          ))}
        </div>

        <div className=" text-center mt-14 pt-2 pb-8">
          <a
            href="/contact"
            className="bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
          >
            Get Started
          </a>
        </div>
      </section>

      <div className="bg-gray-100 py-10 my-8">
        <section className="py-10 lg:py-16 new-container">
          <div className="text-center ">
            <h6 className="font-light bg-blue-200 max-w-[180px]  p-2 rounded-full mx-auto mb-5 text-black">
              Capabilities
            </h6>
            <h3 className="text-lg lg:text-3xl font-semibold  lg:leading-snug">
              We have experience in following <br />
              Blockchain Technologies and Integrations
            </h3>
          </div>
          <div className="grid grid-cols-6 md:grid-cols-10 gap-8 justify-between mt-16">
            {ai_technologies.map((data) => (
              <div
                className="bg-gray-300 rounded-md flex justify-center col-span-2 items-center p-4"
                key={data.id}
              >
                <img src={data.image} alt="AI technologies" />
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Portfolio */}
      <section className="py-10">
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 ">
            <h2 className="text-4xl font-semibold pb-2">
              AI products built by HCode
            </h2>
            <p className="font-light">
              We’ve built the following AI products for our clients
            </p>
          </div>
          <div className="col-span-12 py-10">
            {portfolioData &&
              portfolioData?.map((data) => (
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
        <div className="new-container ">
          <Benefits data={ai_benefits} additionalClass="max-w-xl" />
        </div>
      </section>

      {/* CTA */}
      <div className="my-10 ">
        <CTA
          heading="Let's work with AI"
          paragraph="Get our top talent working for you right away"
          widthClass="w-full"
        />
      </div>
    </div>
  );
};

export default AIService;
