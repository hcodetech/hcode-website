import Head from "next/head";
import Link from "next/link";
import Client from "../components/Client";
import CTA from "../components/CTA";
import ServicesCard from "../components/ServicesCard";
import Team from "../components/Team";
import { about_page, client, metaData, TEAM } from "../constants/constants";
import { ArrowRightIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import MetaTags from "../components/MetaTags";
function about() {
  const [isDesktop, setIsDesktop] = useState("");
  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });
  return (
    <>
      <Head>
        <title>About Us | Hcode Technologies </title>
        <MetaTags page={metaData.about} />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <section className="new-container ">
        <div className="text-center font-poppins sm:w-10/12  mx-auto py-4">
          <h6 className="pt-4 pb-2 mt-16">About Us</h6>
          <h1
            className="font-semibold text-3xl  md:text-5xl md:leading-tight  md:w-10/12 xl:w-4/6 mx-auto"
            dangerouslySetInnerHTML={{ __html: about_page.hero_heading }}
          />
          <p
            className="font-normal text-gray-900 py-4  md:w-10/12 xl:w-5/6 mx-auto"
            dangerouslySetInnerHTML={{ __html: about_page.hero_paragraph }}
          />
        </div>
      </section>
      <div className="max-w-screen-xl   mx-auto pt-4">
        <img
          src={about_page.hero_image}
          layout="fill"
          className="min-w-full min-h-[400px] object-cover"
        />
      </div>
      <section className="new-container bg-gray-50 pt-4">
        <div className="font-poppins sm:w-10/12 md:w-10/12 xl:w-1/2 max-w-[700px]  mx-auto py-5 md:py-10  ">
          <h1 className=" text-center font-semibold text-3xl pt-10  md:text-4xl md:leading-tight">
            {about_page.heading_2}
          </h1>
          <p
            className="font-light mt-5 mb-5 leading-relaxed md:text-lg"
            dangerouslySetInnerHTML={{ __html: about_page.paragraph_2 }}
          />
          <h1 className=" text-center pt-10 font-semibold text-3xl  md:text-4xl md:leading-tight">
            {about_page.heading_3}
          </h1>
          <p
            className="font-light mt-5 mb-5 leading-relaxed md:text-lg"
            dangerouslySetInnerHTML={{ __html: about_page.paragraph_3 }}
          />
        </div>
      </section>
      <div className="new-container grid grid-cols-12 gap-4 bg-gray-50 py-2 md:pt-0 lg:pb-20">
        <div className="col-span-12 md:col-span-4">
          <div className="relative lg:h-[500px] w-full ">
            <img
              src="/assets/img/hcode_about_us_vertical.jpg"
              layout="fill"
              className="min-w-full"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="relative h-full lg:h-[500px]">
            <img
              src="/assets/img/hcode_about_us_horizontal.jpg"
              layout="fill"
              className="min-w-full"
            />
          </div>
        </div>
      </div>

      {/* Core Team  */}
      <section className="new-container pt-14  text-center">
        <h1 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
          Our Core Team
        </h1>
        <div className="flex-wrap flex justify-between mt-7  mx-auto">
          {TEAM.map(({ name, image, bio, link, title }, index) => (
            <Team
              key={index}
              name={name}
              image={image}
              bio={bio}
              link={link}
              title={title}
            />
          ))}
        </div>
        <div>
          <h6 className="font-semibold pt-16 pb-5 text-lg">
            Interested in joining the Hcode family?
          </h6>
          <a
            className=" mt-20   primary-outline"
            href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
            target="_blank"
          >
            Check Out Open Opportunities
          </a>
        </div>
      </section>

      {/* Office  View */}
      <section className="md:new-container grid grid-cols-12 lg:mt-24">
        <div className="col-span-12 lg:col-span-6 z-20 bg-blue-200 px-7 py-10 md:px-10 md:py-14 lg:max-h-[700px] lg:max-w-[500px] mt-20 md:rounded-lg">
          <h2
            className="text-3xl font-semibold md:w-3/4 "
            dangerouslySetInnerHTML={{ __html: about_page.office_heading }}
          />
          <p
            className="leading-normal font-light mt-4"
            dangerouslySetInnerHTML={{
              __html: about_page.office_paragraph,
            }}
          />
          <div className="mt-3">
            <Link href="/work_with_us">
              <div className="mt-auto py-3 border-b pb-2 border-black max-w-[180px]  opacity-80 hover:opacity-100 flex cursor-pointer whitespace-nowrap   ">
                Want to work with us
                <ArrowRightIcon className="w-4 h-4 ml-2 mt-1" />
              </div>
            </Link>
          </div>
        </div>
        <div className=" hidden lg:block relative col-span-12 lg:col-span-6 ">
          <img
            src={about_page.office_1}
            layout="fill"
            className="rounded-lg h-full object-cover"
          />
          <div className="hidden xl:block absolute rounded-lg h-[400px] w-[300px] -bottom-3/4 xl:-bottom-5 z-20 -ml-24 border-none">
            <img
              src={about_page.office_2}
              layout="fill"
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Card */}
      <section className="new-container mt-20 ">
        <ServicesCard heading={true} />
      </section>

      {/* Client Section */}
      <div className="my-10 new-container">
        <Client data={client} slides={isDesktop} />
      </div>

      {/* CTA */}
      <div className="new-container mb-10">
        <CTA />
      </div>
    </>
  );
}

export default about;
