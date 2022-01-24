import Head from "next/head";
import React, { useState } from "react";
import Benefits from "../../components/Benefits";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import CTA from "../../components/CTA";
import Testimonial from "../../components/Testimonial";

import {
  client,
  portfolioData,
  TechSideImage,
  ReactIcon,
  tass_benefits,
  blockchain_benefits,
} from "../../constants/constants";
import useGetFetch from "../hooks/useGetFetch";

const blockchain = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [portfolioData, isLoading] = useGetFetch("https://portal.hcode.tech/api/v1/project/");
  // Select Industry Card
  const setSelectedTech = (e, industryName) => {
    if (e.target.checked) {
      setSelectedCategory((prev) => [...prev, industryName]);
    } else {
      setSelectedCategory((industry) => {
        return industry.filter((item) => item !== industryName);
      });
    }
  };

  return (
    <>
      <Head>
        <title>Blockchain Services | Hcode </title>
      </Head>
      {/* Hero Section */}
      <section className="bg-[#060501] text-white">
        <div className="new-container grid grid-cols-12 min-h-[90vh] ">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <h2 className="md:pt-40 text-3xl md:text-5xl font-semibold leading-loose ">
              Blockchain Development Company
            </h2>
            <p className="mt-2 md:mt-4 mb-6 md:mb-10 text-white tracking-tight md:text-lg opacity-70">
              Hcode Technologies is the best blockchain development company to
              help you fulfill all your blockchain needs in no-time! Our experts
              have years of experience in delivering top-notch blockchain
              solutions to countless clients across the globe!
            </p>
            {/* <a
              href="/contact"
              className=" block md:inline px-4 lg:px-24 py-5 text-center text-white border-2 border-white font-medium rounded-md  hover:scale-x-105 hover:bg-white hover:text-black hover:transform hover:transition hover:ease-out hover:duration-200 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white "
            >
              Let's Talk
            </a> */}
            <a
              href="/contact"
              className="bg-white block md:inline px-4 lg:px-16 py-5 text-lg text-center text-primary rounded-md font-medium hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Let's Talk
            </a>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 mt-24 md:mt-20 scale-90  lg:absolute lg:-right-8 flex justify-center items-center">
            {/* <img src={ReactIcon} className="w-3/4 md:w-1/2" /> */}
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} />
      </section>

      {/* Tech Services */}
      <section className=" pb-14 pt-24 ">
        <div className="new-container ">
          <div className="lg:text-center">
            <div className="">
              <h6 className="font-light">Services</h6>
              <h1 className="text-4xl md:text-5xl font-medium">
                Blockchain Services
              </h1>
              <p className="opacity-80 mt-4 lg:w-3/4 mx-auto text-lg">
                Whether your project is big or small, easy or complex, urgent or
                with a lengthy timeline, our blockchain developers are skilled
                at providing smart solutions that fit your unique needs.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8  mt-8 lg:mt-16">
            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <h2 className=" text-2xl lg:text-2xl font-medium">
                Smart Contract
              </h2>
              <p className=" opacity-90 pt-2">
                Our blockchain developers understand your needs and accordingly
                come up with smart contract management platforms and eWallet
                apps.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <h2 className=" text-2xl lg:text-2xl font-medium">
                NFT Marketplace
              </h2>
              <p className=" opacity-90 pt-2">
                Our NFT marketplace is very similar to innumerable existing
                online marketplace to ease out your trading and transactions
                through facilitate familiarity.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <h2 className=" text-2xl lg:text-2xl font-medium">
                Tokenization
              </h2>
              <p className=" opacity-90 pt-2">
                Our vendors and developers support a number of tokens such as
                Security Tokens, Asset Tokens and Utility Tokens among others to
                allow transactions between several parties with ease.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <h2 className=" text-2xl lg:text-2xl font-medium">
                Coin Trading
              </h2>
              <p className=" opacity-90 pt-2">
                A coin trading platform is a platform for exchanging crypto
                currencies. To facilitate this, our platform has Polygon,
                Binance, coinGecko APIs among several others.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <h2 className=" text-2xl lg:text-2xl font-medium">
                Dedicated Blockchain Developer
              </h2>
              <p className=" opacity-90 pt-2">
                Our team includes 200+ expert developers who are skilled at
                working private and public blockchain projects with utmost
                efficiency and result-oriented approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="lg:py-10 bg-gray-200">
        <div className="new-container ">
          <h6 className="font-light">Capabilities</h6>
          <h2 className="text-3xl font-semibold lg:w-3/4">
            Our Expert Developers Possess Unmatchable Skill And Experience In A
            Number Of Technologies
          </h2>
        </div>
        {/* TODO: tabs to be added */}
        <div className="text-center pt-2 pb-12">
          <a
            href="/contact"
            className="bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-10">
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 ">
            <h2 className="text-4xl font-semibold pb-2">
              We partner with ambitious clients to execute their digital
              initiatives
            </h2>
            <p className="font-light">
              Extend your tech team with top talent. We oversee the execution
              and management of your software projects with our proven processes
              and tech mentorship
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
        <div className="new-container ">
     

          <Benefits data={blockchain_benefits} />
              {/*  */}
         
        </div>
      </section>
      

      {/* CTA */}
      <div className="my-10 ">
        <CTA />
      </div>
      {/* Process */}
      <section className=" py-10 bg-blue-100 bg-none lg:bg-blendCircle bg-no-repeat bg-right-bottom">
        <div className="new-container grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-light my-1">Our Approach </p>
            <h2 className="text-4xl font-semibold ">
              Your Product Idea Needs a Result Oriented Execution
            </h2>
            <p className="font-light mt-3">
              Our React Native app development process carries innovation & user
              experience at the center of it. Making us a revered and reliable
              React native mobile app development company in the USA, South
              Asia, and European Regions.
            </p>
          </div>
        </div>

        <div className="new-container grid grid-cols-12 gap-8">
          <div className="mt-5 col-span-12 lg:col-span-5">
            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Planning
                </h2>
              </div>
              <div className={"dot-line"}></div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Design
                </h2>
              </div>
              <div className={"dot-line"}></div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Single Codebase Development
                </h2>
              </div>
              <div className={"dot-line"}></div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Quality Assurance
                </h2>
              </div>
              <div className={"dot-line"}></div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Deployment
                </h2>
              </div>
              <div className={"dot-line"}></div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}></div>
                <h2 className="text-black font-medium approch-design-text">
                  Support & Maintenance
                </h2>
              </div>
              <div className={"dot-line-hide dot-line"}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default blockchain;
