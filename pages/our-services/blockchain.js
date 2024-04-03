import Head from "next/head";
import React, { useEffect, useState } from "react";
import Benefits from "../../components/Benefits";
import CTA from "../../components/CTA";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import MetaTags from "../../components/MetaTags";
import Testimonial from "../../components/Testimonial";
import Tab from "../../components/atoms/Tab";
import {
  blockchain_benefits,
  blockchain_services,
  blockchain_techStack,
  blockchain_techStack_icon,
  client,
  metaData,
} from "../../constants/constants";
import { getTestimonialData } from "../../utils/config";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";
import SectionHeader from "../../components/SectionHeader";

const Blockchain = () => {
  const [selectedCategory, setSelectedCategory] = useState(["Blockchain"]);
  const [id, setId] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState("");
  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });
  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

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
  const data = getTestimonialData("blockchain");

  return (
    <>
      <Head>
        <title>Blockchain Services | Hcode </title>
        <MetaTags page={metaData.blockchain} />
      </Head>
      {/* Hero Section */}
      <section className="h-[550px] md:h-screen bg-gray-50  bg-blockchain_bg_img bg-no-repeat bg-cover bg-center ">
        <div className="max-w-4xl px-4 pt-28 md:pt-52 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-bold text-3xl sm:text-7xl text-primary py-4">
            Blockchain <br /> Development Services
          </h1>
          <p className="font-poppins text-black  px-5 sm:text-2xl font-light sm:py-3 leading-7 md:leading-10 ">
            We’re proficient in various Blockchain services including, but not
            limited to, <strong>Dapps, Smart Contracts, NFT</strong> marketplace
            and <strong>Blockchain Security Audit.</strong>
          </p>

          <div className="text-center mt-10 sm:mt-10">
            <a
              href="/contact"
              className="bg-primary text-white font-light rounded px-16 py-4 text-center"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* Tech Services */}
      {/* <section className=' pb-14 '>
        <div className=' '>
          <Benefits data={blockchain_services} />
          <div className='text-center pt-2 pb-12'>
            <a
              href='/contact'
              className='bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white '
            >
              Get Started
            </a>
          </div>
        </div>
      </section> */}

      <SectionHeader
        heading=" Our Blockchain Services"
        paragraph="Whether you are looking for a Blockchain Wallet, Smart Contract, NFT, or Custom Blockchain Solution, we can help you with our Blockchain expertise"
      />

      <div className=" new-container -mt-9 mb-12  space-y-12">
        {/* 1st Card */}
        {blockchain_services?.points?.map((blockchain) => (
          <div key={blockchain.heading}>
            <div className="grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
              <div className="col-span-12 lg:col-span-1 h-20 w-20">
                <img
                  className="w-16"
                  src={blockchain.image}
                  alt="MVP Design Services"
                />
              </div>
              <div className="col-span-12 lg:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
                <h3 className=" font-poppins text-2xl md:text-3xl  text-black font-semibold   ">
                  {blockchain.heading}
                </h3>
                <p className="font-poppins font-light  sm:text-lg text-black sm:font-normal leading-7">
                  {blockchain.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Benefits */}
      <section className=" pt-12 ">
        <div className="new-container ">
          <Benefits data={blockchain_benefits} />
        </div>
      </section>
      {/* Testimonial */}
      <div className="pt-10 pb-0 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* Tech Stack */}
      <section className="py-10 lg:py-16 bg-gray-200">
        <div className="new-container ">
          <h6 className="font-light">Capabilities</h6>
          <h3 className="text-lg lg:text-3xl font-semibold  lg:leading-snug">
            We have experience in following <br />
            Blockchain Technologies and Integrations
          </h3>

          <div>
            <ul className="flex flex-row pt-3 border-b border-black items-center text-black overflow-scroll  ">
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
              {blockchain_techStack_icon[activeTab].icons.map((tech, index) => (
                <div key={index} className="col-span-4 lg:col-span-2">
                  <picture>
                    <source type="image/webp" srcSet={tech.image_webp} />
                    <img
                      src={tech.image}
                      alt={tech.name}
                      height="200px"
                      width="200px"
                      loading="lazy"
                    />
                  </picture>
                  {/* <h4 className="text-center font-semibold text-lg">{tech.name}</h4> */}
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
              Blockchain products built by HCode
            </h2>
            <p className="font-light">
              We’ve built the following Blockchain products for our clients
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

      {/* CTA */}
      <div className="my-10 ">
        <CTA
          heading="Hire Blockchain Developers"
          paragraph="Get our top talent working for you right away"
          widthClass="w-full"
        />
      </div>
    </>
  );
};

export default Blockchain;
