import React, { useState } from "react";
import CardPortfolio from "../../components/CardPortfolio";
import Client from "../../components/Client";
import { client, portfolioData, TechSideImage } from "../../constants/constants";

const react = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-100 ">
        <div className="new-container grid grid-cols-1 md:grid-cols-12   min-h-[80vh] ">
          <div className="md:col-span-5">
            <h2 className="pt-40 text-4xl font-semibold">
              React App Development
            </h2>
            <p className="mt-2 mb-10">
              Offer native-like experiences to your users in half the
              development time and cost with our react app development services.
            </p>
            <a
              href="/contact"
              className="bg-primary px-4 lg:px-12 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
            >
              Contact Us For More Information
            </a>
          </div>
          <div className="md:col-span-7 mt-10 md:mt-20 lg:mt-10 scale-90  lg:absolute lg:-right-8"></div>
        </div>
      </section>

      {/* Client Section */}
      <section className="new-container py-10">
        <Client data={client} />
      </section>

      {/* Tech Services */}
      <section className="bg-primary py-10 ">
        <div className="new-container text-white">
          <div className=" grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h1 className="text-4xl font-medium">
                React App Development Service
              </h1>
              <p className="opacity-80 mt-4 leading-relaxed">
                Our react app developer team develop react apps from scratch or
                add the framework to your existing application with a
                single-point agenda to expedite your app delivery without adding
                any extra react app development cost.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8 text-3xl font-medium mt-10">
            <div className="col-span-4">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>
              <h2>App Ideation & Consulting</h2>
            </div>

            <div className="col-span-4">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>

              <h2>App Ideation & Consulting</h2>
            </div>

            <div className="col-span-4">
              <div className="w-3/12 bg-cyan py-1 mb-2"></div>

              <h2>App Ideation & Consulting</h2>
            </div>

            <div className="col-span-4">
              <div className="w-3/12 bg-cyan py-1 mb-2 "></div>

              <h2>App Ideation & Consulting</h2>
            </div>

            <div className="col-span-4">
              <div className="w-3/12 bg-cyan py-1 mb-2"></div>

              <h2>App Ideation & Consulting</h2>
            </div>
          </div>
        </div>
      </section>
      {/* Big Paragraph */}
      <section className="grid grid-cols-12 new-container">
        <div className="col-span-7 py-16 w-4/5">
          <h1 className="text-4xl font-semibold">
            Establishing Multi-Platform Presence in Minimal Investment
          </h1>
          <p className="opacity-80 font-light mt-4">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            <br />
            <br />
            The standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham
          </p>
        </div>

        <div className="col-span-4 min-h-screen object-cover w-full">
          <img src={TechSideImage} />
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-gray-200">
        <div className="new-container py-10 grid grid-cols-12">
          <div className="col-span-12 md:col-span-7 lg:col-span-5 ">
            <h6 className="font-light">Capabilities</h6>
            <h2 className="text-4xl font-semibold">
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
        <div className="new-container pb-10 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Blazing Fast Performance and Speed</h2>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Reusable Code</h2>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Rapid Multi-platform Development </h2>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Live Reload</h2>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Open Source</h2>
          </div>
          <div className="col-span-12 md:col-span-4 bg-white px-8 py-6 shadow hover:shadow-2xl text-black font-medium text-xl text-left ">
            <h2>Great Developer Tools</h2>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="new-container py-10">
        <div className="lg:w-1/2">

          <h2 className="text-4xl font-semibold ">
            We partner with ambitious clients to execute their digital initiatives
          </h2>
          <p className="font-light mt-3">
            Extend your tech team with top talent. We oversee the execution and
            management of your software projects with our proven processes and
            tech mentorship
          </p>
        </div>

      </section>

      <section className=" py-10 bg-blue-100">
        <div className="new-container grid grid-cols-12 gap-8">
       <div className="col-span-7">
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
        <div className="mt-5 col-span-5">
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
