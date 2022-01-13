import { useState } from "react";
import CardPortfolio from "../components/CardPortfolio";
import { portfolioIndustry } from "../constants/constants";
import useGetFetch from './hooks/useGetFetch';

const portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [portfolioData, isLoading] = useGetFetch("http://dev-portal.hcode.tech:8000/api/v1/project/");
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
      {/* Hero Section */}
      <section className="new-container mx-auto text-center w-1/2 ">
        <h2 className="pt-40 text-4xl font-semibold pb-3">
          Recent case studies on how we have helped companies
        </h2>
        <h6>
          Extend your tech team with top talent. We oversee the execution and
          management of your software projects with our proven processes and
          tech mentorship
        </h6>
      </section>

      {/* Selected Industry */}
      <section className="new-container mt-10 ">
        <h2 className="font-semibold text-xl pb-2">Popular Industry</h2>
        <div className="flex overflow-scroll">
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
      <section className="new-container mx-auto mt-10 ">
        {portfolioData.map((data) => (
          <CardPortfolio
            key={data.id}
            cardData={data}
            selectedCategory={selectedCategory}/>
        ))}
      </section>
    </>
  );
};

export default portfolio;
