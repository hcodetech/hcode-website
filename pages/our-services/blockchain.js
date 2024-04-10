import Head from "next/head";
import React, { useEffect, useState } from "react";
import Benefits from "../../components/Benefits";
import CTA from "../../components/CTA";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import MetaTags from "../../components/MetaTags";
import Testimonial from "../../components/Testimonial";
import Tab from "../../components/atoms/Tab";
// import requirement from
import {
  blockchainBlogData,
  blockchain_benefits,
  blockchain_services,
  blockchain_techStack,
  blockchain_techStack_icon,
  client,
  metaData,
  requirement,
} from "../../constants/constants";
import { getTestimonialData } from "../../utils/config";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";
import SectionHeader from "../../components/SectionHeader";
import { Blogs } from "../../components/Blogs";

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
            Secure your spot early in the decentralized world with Smart
            Contracts, the NFT marketplace, and smart DApps, all powered by our
            intelligent blockchain development services
          </p>

          <div className="text-center mt-10 sm:mt-10">
            <a
              href="/contact"
              className="bg-primary text-white font-light rounded px-16 py-4 text-center"
            >
              Book Your Spot
            </a>
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* our services */}
      <section className="bg-[#F8F9FB] mt-16">
        <SectionHeader
          heading="Create a Secure Network with Blockchain"
          paragraph="Immerse in Robust Security Through Our Cutting-Edge Blockchain App Development Services"
          cta
          ctaText="Develop with Security"
        />
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
            <div className="grid grid-cols-12 ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg">
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
          <Benefits data={blockchain_benefits} additionalClass="max-w-2xl" />
        </div>
      </section>

      {/* process */}

       <div className="mb-32 new-container">
        <SectionHeader heading="Blockchain development Process at HCode" />

        <div className=" grid grid-cols-6 gap-8">
          <div className='col-span-5 md:col-span-2'>
            <h3 className='text-3xl font-semibold leading-normal mt-12'>Blockchain development Process at HCode</h3>
          </div>
          <div className='col-span-6 md:col-span-4'>
          <div className="col-span-12 lg:col-span-11  space-y-3 md:space-y-2 hover:scale-105  ease-in-out duration-500   group  ">
            <div className=" border shadow-sm rounded p-5">
              <h3 className="font-poppins text-xl text-black font-semibold ">
                Requirements
              </h3>
              <p className="font-poppins font-light pt-2 hover:ease-in-out hover:duration-500 text-black text-sm leading-6">
                As a top blockchain software developer, your vision guides us.
                We analyze risks, propose solutions, and suggest optimizations
                using Web 3 + Web 2 architecture to enhance performance while
                maintaining decentralization. We migrate non-blockchain features
                to Web 2 strategically, boosting chain performance and speed to
                match your goals.
              </p>
            </div>
          </div>
          </div>
          <div className='col-span-6 mt-3'>
          <div className="   p-5 space-y-3 md:space-y-2 shadow-sm border rounded  hover:scale-105 translate-y-0 ease-in-out duration-500 hover:ease-in-out hover:duration-500 group px-7 ">
            <h3 className="font-poppins text-xl  text-black font-semibold py-2">
              Solution Designing
            </h3>
            <div className="font-poppins font-light  transition delay-150     ease-in-out duration-500  text-black leading-7 ">
              <h4 className="font-semibold mt-3">-  System Architecture</h4>

              <p className="pl-4 text-sm leading-6 max-w-4xl pt-1">
                We meticulously define how various components within your
                blockchain system will interact seamlessly, optimizing
                communication and data flow for a smooth user experience.
              </p>

              <h4 className="font-semibold mt-3"> - Smart Contracts</h4>

              <p className="pl-4 text-sm leading-6 max-w-4xl pt-1">
                Our experts code self-executing contracts that govern
                transactions and automate processes, ensuring trust and
                transparency through their immutable and publicly verifiable
                nature.
              </p>

              <h4 className="font-semibold mt-3"> - Middleware Architecture</h4>

              <p className="pl-4 text-sm leading-6 max-w-4xl pt-1">
                We design a robust bridge connecting your blockchain network to
                external systems and applications, enabling data exchange and
                broader functionality for enhanced scalability and
                interoperability.
              </p>
              <h4 className=" font-semibold mt-3">
                {" "}
                - Technical Documentation
              </h4>

              <p className="pl-4 text-sm leading-6 max-w-4xl pt-1">
                Detailed guides explaining the system's functionalities,
                components, and usage procedures, empowering developers,
                administrators, and end-users for smooth operation and
                maintenance.
              </p>
            </div>
          </div>
          </div>
          <div className='col-span-6  md:col-span-3 '>
         

         
          <div className="  space-y-3 md:space-y-2 hover:scale-105 mt-3  ease-in-out duration-500 shadow-sm border rounded p-5 ">
            <h3 className="font-poppins text-xl  text-black font-semibold">
              Development
            </h3>
            <p className="font-poppins font-light  text-black text-sm  leading-6">
              Smart contracts are coded based on the architecture. Components
              are integrated iteratively between smart contracts and UI/admin
              including frontend actions like transaction creation, web wallet
              connection, chain messaging, and admin features such as
              transaction analytics and user management.
            </p>
          </div>
          

          </div>
          <div className='col-span-6 md:col-span-3'>
          <div className=" space-y-3 md:space-y-2 mt-3  hover:scale-105  ease-in-out duration-500  p-5 shadow-sm border rounded ">
            <h3 className="font-poppins text-xl text-black font-semibold ">
              Testnet and Deployment
            </h3>
            <p className="font-poppins font-light  text-black  text-sm leading-6 lg:pr-28">
              As a leading blockchain solutions company, we meticulously test
              our blockchain products to guarantee client satisfaction and a
              seamless user experience. We strictly follow development protocols
              and ensure cross-platform accessibility for maximum reach.
            </p>
          </div>
          </div>
         

        </div>
       
      </div>

      {/* Testimonial */}
      <div className="pt-10 pb-0 bg-gray-100 ">
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
      {/* blogs section  */}
      <div className="sm:new-container sm:py-6 ">
        <Blogs data={blockchainBlogData} />
      </div>

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
