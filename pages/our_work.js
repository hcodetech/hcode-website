/** @format */

import Head from "next/head";
import { useState, useEffect } from "react";
import CardPortfolio from "../components/CardPortfolio";
import MetaTags from "../components/MetaTags";
import { metaData, portfolioIndustry } from "../constants/constants";
import { getAPIUrl } from "./api/APIHelpers";
import { apiRoutes } from "./api/APIRoutes";
import useGetFetch from "./hooks/useGetFetch";
import { useRouter } from "next/router";
import Portfolio_skelton from "../components/Portfolio_skelton";

const our_work = (props) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));
  const router = useRouter();

  // useEffect(() => {
  //   if(props?.query?.q){
  //     (Array.isArray(props.query.q) ?
  //     portfolioIndustry.includes(props.query.q[0]) && setSelectedCategory(props.query.q):
  //     portfolioIndustry.includes(props.query.q)) && setSelectedCategory([props.query.q])
  //   }
  // }, [])

  // Select Industry Card
  const setSelectedTech = (e, industryName) => {
    if (e.target.checked) {
      setSelectedCategory((prev) => [...prev, industryName]);
      // router.push({
      //   pathname: router.pathname,
      //   query: { q: [...selectedCategory, industryName] },
      // });
    } else {
      setSelectedCategory((industry) => {
        return industry.filter((item) => item !== industryName);
      });
      // router.push({
      //   pathname: router.pathname,
      //   query: { q: selectedCategory.filter((item) => item !== industryName) },
      // });
    }
  };
  return (
    <>
      <Head>
        <title>Our Work | Hcode Technologies </title>
        <MetaTags page={metaData.our_work} />
      </Head>
      {/* Hero Section */}
      <section className="new-container mx-auto text-center lg:w-1/2 ">
        <h1 className="pt-40 text-4xl font-semibold pb-3 xl:px-20">
          Some of the products we've made for our client partners
        </h1>
        <h6>
          We have worked on a broad range of projects, from algorithm-heavy
          backend projects to beautiful and interactive responsive web products.
          Listed below are some of our creations.
        </h6>
      </section>

      {/* Selected Industry */}
      <section className="new-container mt-10">
        <h2 className="font-semibold text-xl pb-2">Popular Categories</h2>
        <div className="flex overflow-y-scroll scrollbar-hide">
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
                type="checkbox"
                className="input-radio hidden"
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
      </section>

      {/* Card Section */}
      {isLoading ? (
        <Portfolio_skelton />
      ) : (
        <section className="new-container mx-auto mt-10 ">
          {portfolioData.map((data) => (
            <CardPortfolio
              key={data.id}
              cardData={data}
              selectedCategory={selectedCategory}
            />
          ))}
        </section>
      )}
    </>
  );
};

// export async function getServerSideProps(router) {
//   return {
//     props: {query: router?.query}, // will be passed to the page component as props
//   }
// }

export default our_work;
