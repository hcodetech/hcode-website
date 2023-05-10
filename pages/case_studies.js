/** @format */

import Head from "next/head";
import { useState, useEffect } from "react";
import CardPortfolio from "../components/CardPortfolio";
import MetaTags from "../components/MetaTags";
import { metaData, portfolioIndustry } from "../constants/constants";
import { getAPIUrl } from "./api/APIHelpers";
import { apiRoutes } from "./api/APIRoutes";
import useGetFetch from "./hooks/useGetFetch";

const CaseStudies = (props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

  return (
    <>
      <Head>
        <title>Our Work | Hcode Technologies </title>
        <MetaTags page={metaData.our_work} />
      </Head>
      {/* Hero Section */}
      <section className="new-container mx-auto text-center lg:w-1/2 ">
        <h1 className="pt-40 text-4xl font-semibold pb-3 xl:px-20">
          Real examples of our technology solutions in action
        </h1>
        <h6 className="xl:px-48">
          Discover how our services have helped businesses achieve their goals
          and overcome challenges.
        </h6>
      </section>

      {/* Selected Industry */}
      {/* <section className='new-container mt-10'>
        <h2 className='font-semibold text-xl pb-2'>Popular Categories</h2>
        <div className='flex overflow-y-scroll scrollbar-hide'>
          {portfolioIndustry.map((industryName, index) => (
            <div
              key={index}
              style={{ minHeight: 48 }}
              className={`items-center input-select mt-4`}
            >
              <input
                onChange={(e) => setSelectedTech(e, industryName)}
                id={industryName}
                name={industryName}
                type='checkbox'
                className='input-radio hidden'
                checked={selectedCategory.includes(industryName)}
              />
              <label
                htmlFor={industryName}
                className={`block text-sm min-w-[140px] whitespace-nowrap font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3 mr-5 
                ${selectedCategory.includes(industryName) && "bg-blue-200"}
                `}
              >
                {industryName}
              </label>
            </div>
          ))}
        </div>
      </section> */}

      {/* Card Section */}
      {isLoading ? (
        <div className="new-container">
          <div className="w-full h-[400px] border  rounded-md mx-auto mt-10">
            <div className="flex animate-pulse flex-row h-full justify-between">
              <div className="flex flex-col space-y-3 m-10">
                <div className="w-96 bg-gray-300 h-10 rounded-md "></div>
                <div className="w-full bg-gray-300 h-20 rounded-md "></div>
                <div className="w-24 bg-gray-300 h-4 rounded-md "></div>
              </div>
              <div className="w-1/2 bg-gray-300 h-full "></div>
            </div>
          </div>
          <div className="w-full h-[400px] border  rounded-md mx-auto my-10">
            <div className="flex animate-pulse flex-row h-full justify-between">
              <div className="flex flex-col space-y-3 m-10">
                <div className="w-96 bg-gray-300 h-10 rounded-md"></div>
                <div className="w-full bg-gray-300 h-20 rounded-md"></div>
                <div className="w-24 bg-gray-300 h-4 rounded-md"></div>
              </div>
              <div className="w-1/2 bg-gray-300 h-full "></div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <section className="new-container mx-auto mt-10 ">
            {portfolioData.map((data) => (
              <div>
                {data.media.filter((media) => media.type === "case_study")
                  .length > 0 && (
                  <CardPortfolio
                    key={data.id}
                    cardData={data}
                    selectedCategory={selectedCategory}
                  />
                )}
              </div>
            ))}
          </section>
        </div>
      )}
    </>
  );
};

export default CaseStudies;
