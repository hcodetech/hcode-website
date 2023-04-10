import React, { useState, useEffect } from "react";
import {
  client,
  faq_services,
  metaData,
  tass,
  tass_benefits,
} from "../../constants/constants";
import Client from "../../components/Client";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Head from "next/head";
import Benefits from "../../components/Benefits";
import Accordion from "../../components/Accordion";
import CTA from "../../components/CTA";
import TechStack from "../../components/TechStack";
import MetaTags from "../../components/MetaTags";

function team_as_a_service() {
  const [isDesktop, setIsDesktop] = useState("");
  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });
  return (
    <>
      <Head>
        <title>Team as a Service | Hcode Technologies </title>
        <MetaTags page={metaData.team_as_a_service} />
      </Head>
      {/* Hero Section */}
      <section className="text-center ">
        <h1 className="new-container pt-32 font-semibold text-3xl md:text-4xl  ">
          {tass.hero_heading}
        </h1>
        <p className="new-container md:w-9/12  text-base mx-auto mt-3 font-light leading-normal">
          {tass.hero_paragraph}
        </p>
        <img
          src={tass.hero_image}
          alt={tass.hero_heading}
          className="w-screen my-10"
        />
      </section>

      {/* Clients */}
      <section className="new-container">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* Who is it for ? */}
      <section className="new-container mt-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center ">
          {tass.who_is_it_for}
        </h2>
        <p className="md:w-4/6 mx-auto mt-3 font-light leading-normal text-center ">
          {tass.who_is_it_for_paragraph}
          <br />
          (Looking to hire 1 or 2 developers? please check out our{" "}
          <a
            href="/our_services/developer_as_a_service"
            className="text-primary"
          >
            Developer-as-a-Service
          </a>{" "}
          model)
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {/* Startup */}
          <div className="p-8 bg-gradient-to-br  from-purple-200 to-white ">
            <button className="px-4 py-2 rounded-full bg-purple-800 text-white cursor-default mb-5 ">
              {tass.startup.tag}
            </button>
            <h2 className="text-2xl font-semibold">
              {tass.startup.main_heading}
            </h3>
            <ul className="list-outside list-disc text-sm px-4 py-2">
              {tass.startup.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {/*  */}
            <h3 className="text-2xl font-semibold mt-5">
              {tass.startup.secondary_heading}
            </h3>
            <ul className="list-outside list-disc text-sm px-4 py-2">
              {tass.startup.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a
              href="/contact"
              className="pt-3 pb-1 border-b border-purple-600 inline-flex text-purple-600 hover:scale-100  cursor-pointer "
            >
              Get Started
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
          {/* Enterprise */}
          <div className="p-8 bg-gradient-to-br  from-blue-200 to-white ">
            <button className="px-4 py-2 rounded-full bg-primary text-white cursor-default mb-5 ">
              {tass.enterprise.tag}
            </button>
            <h3 className="text-2xl font-semibold">
              {tass.enterprise.main_heading}
            </h3>
            <ul className="list-outside list-disc text-sm px-4 py-2">
              {tass.enterprise.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            {/*  */}
            <h3 className="text-2xl font-semibold mt-5">
              {tass.enterprise.secondary_heading}
            </h3>
            <ul className="list-outside list-disc text-sm px-4 py-2">
              {tass.enterprise.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <a
              href="/contact"
              className="pt-3 pb-1 border-b border-blue-600 inline-flex text-blue-600 hover:scale-100  cursor-pointer "
            >
              Get Started
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
        </div>
        {/* Get Started CTA */}
        <div className="p-8 bg-gradient-to-br  from-green-200 to-white text-center mt-8 ">
          <div className="mb-6">
            <h3 className="text-3xl font-semibold mb-2">{tass.cta.heading}</h3>
            <p className="font-light">{tass.cta.main_paragraph}</p>
          </div>
          <a
            href="/contact"
            className="text-white py-4 px-10 rounded-md  bg-green-600"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* What makes it a great choice */}
      <section className="new-container mt-10">
        <Benefits data={tass_benefits} />
        <div className="text-center mb-10">
          <a
            href="/contact"
            className="pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100"
          >
            Request Consultation
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
      </section>

      <TechStack />
      {/* FAQ */}
      <section>
        <Accordion data={faq_services} />
      </section>

      {/* Cta */}
      <section className="my-10">
        <CTA />
      </section>
    </>
  );
}

export default team_as_a_service;
