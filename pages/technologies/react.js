import React, { useState } from "react";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import { client, portfolioData, TechSideImage, ReactIcon } from "../../constants/constants";
import useGetFetch from "../hooks/useGetFetch";

const react = () => {

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
      <section className="bg-ReactIconBackground bg-no-repeat bg-cover">
        <div className="new-container grid grid-cols-12 min-h-[80vh] ">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <h2 className="md:pt-40 text-3xl md:text-5xl font-semibold leading-normal ">
              React Web
              Development Services
            </h2>
            <p className="mt-2 md:mt-4 mb-6 md:mb-10 text-gray-600 tracking-tight md:text-lg">
              Delivering flawless web applications is our forte, so if you choose to work with us,
              you can be certain that you’ve left your product in good hands.
              From e-commerce stores to blockchain apps, we’ll leave you with a product that’s functional,
              effective and engaging to your end-users.
            </p>
            <a
              href="/contact"
              className="bg-primary block md:inline px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Get Started
            </a>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2 mt-24 md:mt-20 scale-90  lg:absolute lg:-right-8 flex justify-center items-center">
            <img
              src={ReactIcon}
              className="w-3/4 md:w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} />
      </section>

      {/* Tech Services */}
      <section className="bg-primary pb-14 pt-24 bg-none  lg:bg-groupedCircle bg-no-repeat bg-right-top ">
        <div className="new-container text-white">
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h1 className="text-4xl md:text-5xl font-medium">
                React Application
                Development Services
              </h1>
              <p className="opacity-80 mt-4 leading-relaxed">
              Our react app developer team develop react apps from scratch or add the framework to your existing application with a single-point agenda to expedite your app delivery without adding any extra react app development cost.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 text-2xl lg:text-3xl font-medium mt-8 lg:mt-16">
            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>
              <h2 className="w-3/4 lg:w-3/5">Custom React JS development</h2>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>

              <h2 className="w-3/4 lg:w-2/3">Dynamic Web Apps</h2>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <div className="w-3/12 bg-cyan py-1 mb-2"></div>

              <h2 className="w-3/4 lg:w-2/5">React Migration</h2>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>

              <h2 className="w-3/4 lg:w-3/5">React Support & Maintenance</h2>
            </div>

            <div className="col-span-12 lg:col-span-4 my-2 lg:my-10">
              <div className="w-3/12 bg-cyan py-1 mb-2"></div>

              <h2 className="w-3/4 lg:w-3/5">Publishing on the App & Play Store</h2>
            </div>
          </div>
        </div>
      </section>

      {/* Big Paragraph */}
      <section className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-7 py-16 px-8  lg:px-28 lg:w-4/5">
          <h1 className="text-4xl font-semibold">
            We understand the need for bespoke web solutions
          </h1>
          <p className="opacity-80 font-light mt-4">
            Developing a web product is a complex process and in an increasingly competitive world,
            it might be challenging to make yourself stand out. Here’s where we can help.
            <br />
            <br />
            We have a wealth of experience in web development and design,
            having worked with clients of all sizes across the globe,
            and we understand that every journey is different.
            However, there are some important common things that you need to get right:
          </p>
          <ul className="mt-8 ml-8 list-disc">
            <li className="mt-4">Answering the market’s and users’ needs</li>
            <li className="mt-4">Applying the right tech solutions</li>
            <li className="mt-4">Creating a secure and stable product</li>
            <li className="mt-4">Providing an exceptional user experience</li>
            <li className="mt-4">Following reliable processes.</li>
          </ul>
        </div>

        <div className="col-span-12 lg:col-span-4  min-h-screen object-cover w-full">
          <img src={TechSideImage} />
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-200">
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 lg:col-span-5 ">
            <h6 className="font-light py-2">Capabilities</h6>
            <h2 className="text-4xl font-semibold pb-2">
              React Benefits Go Beyond Cost-Saving
            </h2>
            <p className="font-light">
              Our React mobile development services are engineered to use React
              for more than simply meeting the budget plans. We ensure that our
              mobile app development with react native gives you quality, proper
              communication, transparency and human relations, all in a
              cost-effective manner.
            </p>
          </div>
        </div>
        <div className=" new-container pb-10 grid grid-cols-12 gap-8">
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Blazing Fast Performance and Speed</h2>
          </div>
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Capacity to scale</h2>
          </div>
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Rapid Multi-platform Development </h2>
          </div>
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Security and stability</h2>
          </div>
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Open Source</h2>
          </div>
          <div className="col-span-11 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Great Developer Tools</h2>
          </div>
        </div>
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
      <section className="new-container py-10 lg:py-16">
        <div className="lg:w-1/2">

          <h2 className="text-4xl font-semibold leading-tight ">
            We partner with ambitious clients to execute their digital initiatives
          </h2>
          <p className="font-light mt-3">
            Extend your tech team with top talent. We oversee the execution and
            management of your software projects with our proven processes and
            tech mentorship
          </p>
        </div>
        {portfolioData.map((data) => (
          <CardPortfolio
            key={data.id}
            cardData={data}
            selectedCategory={selectedCategory}/>
        ))}

      </section>

      <section className=" py-10 bg-blue-100 bg-none lg:bg-blendCircle bg-no-repeat bg-right-bottom">
        <div className="new-container grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-light my-1">Our Approach </p>
            <h2 className="text-4xl font-semibold ">
              Your Product Idea Needs a Result Oriented Execution
            </h2>
            <p className="font-light mt-3">
              Our React Native app development process carries innovation & user experience
              at the center of it. Making us a revered and reliable React native mobile
              app development company in the USA, South Asia, and European Regions.
            </p>
          </div>


        </div>

        <div className="new-container grid grid-cols-12 gap-8">
          <div className="mt-5 col-span-12 lg:col-span-5">
            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Planning</h2>
              </div>
              <div className={"dot-line"}>

              </div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Design</h2>
              </div>
              <div className={"dot-line"}>

              </div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Single Codebase Development</h2>
              </div>
              <div className={"dot-line"}>

              </div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Quality Assurance</h2>
              </div>
              <div className={"dot-line"}>

              </div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Deployment</h2>
              </div>
              <div className={"dot-line"}>

              </div>
            </div>

            <div className="dotted pb-7">
              <div className="flex flex-row">
                <div className={"dot-circle"}>

                </div>
                <h2 className="text-black font-medium approch-design-text">Support & Maintenance</h2>
              </div>
              <div className={"dot-line-hide dot-line"}>

              </div>
            </div>

          </div>
        </div>


      </section>

    </>
  );
};

export default react;
