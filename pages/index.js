import Head from "next/head";
import {
  homepage,
  how_to_get_started,
  client,
  city,
  TEAM,
} from "../constants/constants";
import Client from "../components/Client";
import ServicesCard from "../components/ServicesCard";
import CTA from "../components/CTA";
import Benefits from "../components/Benefits";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import HeroSection from "../components/HeroSection";
import Team from "../components/Team";
import { ArrowRightIcon } from "@heroicons/react/solid";
import Testimonial from "../components/Testimonial";
import CaseStudiesCard from "../components/CaseStudiesCard";

import MobileSVG from "../public/assets/img/mobile-illu.svg";
import BackendSVG from "../public/assets/img/backend-illu.svg";
import BlockchainSVG from "../public/assets/img/blockchain-illu.svg";
import { apiRoutes } from "./api/APIRoutes";
import { getAPIUrl } from "./api/APIHelpers";
import useGetFetch from "./hooks/useGetFetch";

export default function Home() {
  // const [clientLogos, isClientLogosLoading] = useGetFetch(getAPIUrl(apiRoutes.CLIENT_LOGO));
  return (
    <>
      <Head>
        <title>{homepage.title} </title>
      </Head>

      {/* Crasoual  */}
      <HeroSection />
      {/* Client Section */}
      <div className=" new-container pt-10">
        <Client data={client} />
      </div>

      {/* Our Services */}
      <section className="mt-4 ">
        <div className="new-container ">
          <ServicesCard heading={true} />
        </div>
        <div className="hidden">
          <div className="bg-primary ">
            <div className="text-white bg-serviceIllustration bg-left-bottom bg-no-repeat w-full bg-contain ">
              <div className="new-container text-center pt-32 -mt-20 pb-24 md:pb-24 md:pt-52 md:-mt-32">
                <h1 className="text-4xl font-semibold w-4/5 md:mx-auto text-left md:text-center md:w-full">
                  What can we do for you ?
                </h1>
                <p className="text-left md:text-center md:w-4/5 md:mx-auto font-light mt-3 opacity-80">
                  Are you a startup or an enterprise looking to set up/augment
                  your tech team? If yes, we have the right solution tailored
                  for you. We staff, manage and support your offshore
                  development team and we can get your team up and ready at
                  short notice.
                </p>
                <div className="grid grid-cols-12 gap-8 mt-10 md:w-4/5 md:mx-auto">
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                      <h2 className="text-2xl">Mobile / Webapp</h2>
                      <img src={MobileSVG} className="mx-auto my-10 max-h-32" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                      <h2 className="text-2xl">Backend</h2>
                      <img
                        src={BackendSVG}
                        className="mx-auto my-10 max-h-32"
                      />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-4">
                    <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                      <h2 className="text-2xl">Blockchain</h2>
                      <img
                        src={BlockchainSVG}
                        className="mx-auto my-10 max-h-32"
                      />
                    </div>
                  </div>
                </div>
                <div className="text-center mt-16 md:mt-20">
                  <a
                    href="/our_services"
                    className="border border-white rounded px-16 py-4 hover:bg-white hover:text-primary  text-center transition transform duration-200 ease-out"
                  >
                    Know More About Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Who we are */}
      <section className="bg-gray-100 mt-14">
        <div className="new-container py-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <img
                src={homepage.who_are_we.image}
                alt={homepage.who_are_we.heading}
                className="rounded-lg"
              />
            </div>
            <div className="lg:px-4 col-span-12 lg:col-span-6 ">
              <h1 className="text-3xl lg:text-4xl font-semibold py-2 mt-4 md:mt-0">
                {homepage.who_are_we.heading}
              </h1>
              <div className="py-2 lg:py-5">
                <p className="lg:text-lg break-words">
                  {homepage.who_are_we.paragraph}
                </p>
                <br />
                <p className="lg:text-lg">
                  {homepage.who_are_we.paragraph_2nd}
                </p>
              </div>
              <div className="">
                <h3 className="text-xl font-semibold">
                  {homepage.who_are_we.clients.heading}
                </h3>
                <Client data={city} heading={true} />
              </div>
              <a
                href="/about"
                className="pt-3 pb-1 border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100"
              >
                Read more about our story
                <ArrowRightIcon className="w-6 ml-2 " />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <Benefits data={homepage.why_hcode} />
      <div className="new-container mx-auto -mt-16 pb-16">
        <div className="text-center">
          <a
            href="/contact"
            className="pt-10 pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100"
          >
            Request Consultation
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
      </div>

      {/* Testimonial */}
      <div className="pt-10 pb-0 bg-gray-100">
        <Testimonial />
      </div>

      {/* Tech Stack */}
      <div className="mt-20">
        <TechStack />
      </div>

      {/* Process */}
      <div className="  py-16">
        <Process data={how_to_get_started} />
      </div>

      {/* Case Studies */}
      <div className=" ">
        <h2 className="text-4xl font-semibold text-center py-5 mb-4">
          Our Work
        </h2>
        <CaseStudiesCard />
        <div className="text-center mt-10 mb-14">
          <a href="/our_work" className="outline-button px-10  text-center">
            See Our Portfolio
          </a>
        </div>
      </div>

      {/* Core Team  */}
      <section className="py-14 bg-gray-100 text-center">
        <div className="new-container">
          <h1 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
            Our Core Team
          </h1>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3  xl:grid-cols-5 mt-7">
            {TEAM.map(({ name, image, bio, link }, index) => (
              <Team
                key={index}
                name={name}
                image={image}
                bio={bio}
                link={link}
              />
            ))}
          </div>
          <div></div>
        </div>
      </section>

      {/* CTA */}
      <div className="my-20 ">
        <CTA />
      </div>
    </>
  );
}
