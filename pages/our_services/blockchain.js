import Head from "next/head";
import React, { useState } from "react";
import Tab from "../../components/atoms/Tab";
import Benefits from "../../components/Benefits";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import CTA from "../../components/CTA";
import Testimonial from "../../components/Testimonial";
import {
  client,
  blockchain_benefits,
  blockchain_services,
  blockchain_techStack,
  blockchain_techStack_icon,
} from "../../constants/constants";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";

const blockchain = () => {
  const [selectedCategory, setSelectedCategory] = useState(["Blockchain"]);
  const [id, setId] = useState(1);
  const [activeTab, setActiveTab] = useState(0);

  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.PROJECT));

  const selectedTabsFn = (condition) =>
    condition
      ? "border-b-4 border-primary pt-2.5 px-2"
      : " pt-3 pb-2.5 opacity-60";
  const onTabClick = (tab) => {
    setActiveTab(tab);
  };
  // Highlight the selected Tab Function

  // Change the ID of Product List Data Shown
  const filterProductData = (id) => {
    setId(id);
  };

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
      <section className=" pb-14 ">
        <div className="new-container ">
          <Benefits data={blockchain_services} />
          <div className="text-center pt-2 pb-12">
            <a
              href="/contact"
              className="bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-10 bg-gray-200">
        <div className="new-container ">
          <h6 className="font-light">Capabilities</h6>
          <h2 className="text-3xl font-semibold lg:w-3/4">
            Our Expert Developers Possess Unmatchable Skill And Experience In A
            Number Of Technologies
          </h2>

          <div>
            <ul className="flex flex-row pt-3 border-b border-black items-center text-black  ">
              {blockchain_techStack.map((tab, index) => (
                <div onClick={() => filterProductData(tab.id)} key={tab.id}>
                  <Tab
                    style={`${selectedTabsFn(activeTab === index)} lg:mr-8`}
                    onTabClick={onTabClick}
                    currentTab={index}
                  >
                    <div className="flex flex-row cursor-pointer">
                      <div className="text-md font-semibold whitespace-nowrap ">
                        {tab.name}
                      </div>
                    </div>
                  </Tab>
                </div>
              ))}
            </ul>

            <div className="grid grid-cols-12 gap-8 py-8">
              {blockchain_techStack_icon[activeTab].icons.map((tech) => (
                <div className="col-span-6 lg:col-span-2">
                  <img src={tech.image} alt={tech.name} />
                  <h4 className="text-center font-semibold text-lg">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
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
        </div>
      </section>

      {/* CTA */}
      <div className="my-10 ">
        <CTA />
      </div>
    </>
  );
};

export default blockchain;
