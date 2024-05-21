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
  blockchain_development_process,
  blockchain_services,
  blockchain_techStack,
  blockchain_techStack_icon,
  client,
  faq_blockchain,
  metaData,
} from "../../constants/constants";
import { getTestimonialData } from "../../utils/config";
import { getAPIUrl } from "../api/APIHelpers";
import { apiRoutes } from "../api/APIRoutes";
import useGetFetch from "../hooks/useGetFetch";
import SectionHeader from "../../components/SectionHeader";
import { Blogs } from "../../components/Blogs";
import CaseStudiesCard from "../../components/CaseStudiesCard";
import Accordion from "../../components/Accordion";

const Blockchain = () => {
  const [selectedCategory, setSelectedCategory] = useState(["Blockchain"]);
  const [id, setId] = useState(1);
  const [activeTab, setActiveTab] = useState(0);
  const [isDesktop, setIsDesktop] = useState("");
  const [selectedProcessIndex, setSelectedProcessIndex] = useState(0);
  const toggleExpanded = (index) => {
    setSelectedProcessIndex(index);
  };

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
        <title>Blockchain Development Services | Hcode </title>
        <MetaTags page={metaData.blockchain} />
      </Head>
      {/* Hero Section */}
      <section className="h-[550px] md:h-screen  bg-blockchain_bg_img bg-no-repeat bg-cover bg-center ">
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
      <section className="bg-[#F8F9FB] mt-16 ">
        <div>
          <div className="new-container text-center mx-auto  py-16">
            <div className="max-w-lg mx-auto ">
              <h2 className="font-semibold text-3xl md:text-4xl my-4">Create a Secure Network with Blockchain</h2>
              <div className="px-3 py-[2px] max-w-[120px] my-4 bg-blue-500 mx-auto"></div>
              <p className="sm:text-xl font-light sm:font-normal pt-1 pb-6">
                Immerse in Robust Security Through Our Cutting-Edge <a className='text-primary' target='_blank' href='https://www.wikidata.org/wiki/Q20514253'>Blockchain</a> App Development Services
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="bg-white text-primary  border-primary border-2 rounded px-5 sm:px-16 py-4 text-center hover:bg-primary hover:text-white hover:border-white"
                >
                  Develop with Security
                </a>
              </div>
            </div>
          </div>
        </div>
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
        paragraph="From wallets and smart contracts to NFTs and custom projects, our expertise empowers your business."
      />

      <div className=" new-container -mt-9 mb-12  space-y-12">
        {/* 1st Card */}
        {blockchain_services?.points?.map((blockchain) => (
          <div key={blockchain.heading}>
            <div className="grid grid-cols-12 ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg">
              <div className="col-span-12 lg:col-span-1 h-20 w-20">
                <img
                  className="w-12"
                  src={blockchain.image}
                  alt="MVP Design Services"
                />
              </div>
              <div className="col-span-12 lg:col-span-11 mt-4 md:mt-0 space-y-3">
                <h3 className=" font-poppins text-2xl md:text-3xl  text-black font-semibold   ">
                  {blockchain.heading}
                </h3>
                <p className="font-poppins font-light sm:text-lg text-black sm:font-normal leading-7">
                  {blockchain.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Benefits */}
      <section className=" mt-24 pt-12 bg-[#F8F9FB]">
        <div className="new-container ">
          <Benefits data={blockchain_benefits} additionalClass="max-w-2xl" />
        </div>
      </section>

      {/* process 1 */}

      <div className="my-28 new-container">
        <h2 className="font-semibold text-3xl md:text-4xl  my-16">
          Blockchain development Process at HCode
        </h2>

        <div className="grid grid-cols-12 gap-5 md:gap-8 ">
          <div className="col-span-12 md:col-span-5  rounded">
            {blockchain_development_process[selectedProcessIndex]?.img && (
              <img
                className=" h-[350px] md:h-[420px] max-h-[500px] w-full object-cover mb-3 rounded-md"
                alt="process"
                src={blockchain_development_process[selectedProcessIndex]?.img}
              />
            )}
          </div>
          <div className="col-span-12 space-y-4 md:col-span-7  bg-white">
            {blockchain_development_process?.map((process, index) => (
              <div
                key={index}
                className={` cursor-pointer  pb-4 border-b ${selectedProcessIndex === index ? "" : "last:border-none"
                  }`}
                onClick={() => setSelectedProcessIndex(index)}
              >
                <div
                  className={`text-left items-center  select-none transition-all px-4  flex justify-between flex-row ${selectedProcessIndex === index
                    ? "text-primary bg-blue-50 p-4 duration-200 ease-linear"
                    : "text-black"
                    }`}
                >
                  <h5 className={` flex-1 font-poppins text-xl   font-medium `}>
                    {process.heading}
                  </h5>
                  <div className="flex-none pl-2">
                    {selectedProcessIndex === index ? "-" : "+"}
                  </div>
                </div>
                <div
                  className={` overflow-hidden overflow-y-scroll transition-[max-height]  duration-500 ease-in ${selectedProcessIndex === index
                    ? "max-h-60 border  mt-4"
                    : "max-h-0"
                    }`}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        blockchain_development_process[selectedProcessIndex]
                          ?.paragraph,
                    }}
                    className="font-light flex gap-1 flex-col p-4 rounded-sm  leading-7"
                  />
                </div>
              </div>
            ))}
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

            <div className=" mt-10 sm:mt-10">
              <a
                href="/contact"
                className="bg-primary text-white font-light rounded px-16 py-4 text-center"
              >
                Start your Project!
              </a>
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

          {/* <div className="col-span-12 py-10">
            {portfolioData.map((data) => (
              <CardPortfolio
                key={data.id}
                cardData={data}
                selectedCategory={selectedCategory}
              />
            ))}
          </div> */}
        </div>
      </section>

      <div className="-mt-14">
        <CaseStudiesCard data={portfolioData} loading={isLoading} />
      </div>

      <section className="bg-gray-100 lg:mt-20">
        <Accordion data={faq_blockchain} />
      </section>
      {/* CTA */}
      <div className="my-16 ">
        <CTA
          heading="Hire Blockchain Developers"
          paragraph="Get our top talent working for you right away"
          widthClass="w-full"
        />
      </div>
      {/* blogs section  */}
      <div className="sm:new-container sm:py-6 ">
        <Blogs data={blockchainBlogData} />
      </div>



      <BlockchainFAQSchema />
    </>
  );
};

export default Blockchain;


const BlockchainFAQSchema = () => {
  const script = {
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How much experience do you have in blockchain development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Over the past 3 years, we've actively engaged in blockchain development, tackling various projects including decentralized applications (dApps) and custom blockchain protocols. We continually update our expertise to deliver innovative solutions, staying abreast of the latest advancements in the field."
        }
      },{
        "@type": "Question",
        "name": "What specific technologies and programming languages are integral to your workflow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our team is well-versed in a comprehensive set of technologies that cater to all aspects of blockchain development. Here's a breakdown of the tools we leverage:
    Languages: Solidity, Cadence, Python, Javascript. 
    Frontend: ReactJS, NextJS. 
    Backend: NodeJS, Django. 
    Databases: Polybase, Postgres. 
    Hardhat for comprehensive development needs.  
    This diverse tech stack ensures efficient blockchain project development."
        }
      },{
        "@type": "Question",
        "name": "What are the decision points I have to make before getting started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If the product is client-facing, you need to decide which devices the product should be built for. Is it a Mobile application, or a Web Application for Desktop and/or Mobile. The more the devices, the more time it will take for development and optimization. Second, you need to tell us what all external integrations, if anything, in particular, are needed for the project, are important as any external dependency need to be evaluated. Third, you need to plan for the phase-wise development plan with respect to features which would help us plan the development."
        }
      },{
        "@type": "Question",
        "name": "How do you effectively manage and address change requests from your clientele?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We manage change requests effectively by maintaining open communication channels, understanding scope and impact, providing regular updates, prioritizing based on impact, and offering ongoing support. This ensures smooth project progress while accommodating your evolving needs."
        }
      }]
    }
   
    `,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={script} />;
};