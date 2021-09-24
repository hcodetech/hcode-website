import Head from "next/head";
import { homepage, how_to_get_started, client, city, TEAM } from "../constants/constants";
import Client from '../components/Client'
import ServicesCard from '../components/ServicesCard'
import CTA from "../components/CTA";
import Benefits from "../components/Benefits";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import HeroSection from "../components/HeroSection";
import Team from "../components/Team";
import { ArrowRightIcon } from "@heroicons/react/solid";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Hcode Techonolgies </title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HeroSection/>



      {/* Client Section */}
      <div className="py-10 new-container pt-10">
        <Client data={client} />
      </div>

      {/* Our Services */}
      <section className="new-container">
        <ServicesCard heading={true} />
        <div className="text-center my-10">
        <a href="/our_services" className="primary-outline  text-center">
          Know More About Our Services
        </a>
        </div>
      </section>

      {/* Who we are */}
      <section className="bg-gray-100 mt-14">
        <div className="new-container py-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-6">
              <img src={homepage.who_are_we.image} alt={homepage.who_are_we.heading} className="rounded-lg" />
            </div>
            <div className="lg:px-4 col-span-12 lg:col-span-6 ">
              <h1 className="text-3xl lg:text-4xl font-semibold py-2">
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
              <a href="/about" className="pt-10 pb-1 border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100">
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
      <a href="/contact" className="pt-10 pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100">
              Request Consultation
      <ArrowRightIcon className="w-6 ml-2 " />
      </a>
    </div>
    </div>
      {/* Tech Stack */}
      <TechStack />

           {/* Process */}
           <div className="mt-10  py-16">
        <Process data={how_to_get_started} />
      </div>

      <section className="new-container pt-14 bg-gray-100 text-center">
        <h1 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
          Our Core Team
        </h1>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-7">
          {TEAM.map(({ name, image, bio, link }, index) => (
            <Team key={index} name={name} image={image} bio={bio} link={link} />
          ))}
        </div>
        <div>

        </div>
      </section>

 
      {/* CTA */}
      <div className="my-20 ">
        <CTA />
      </div>
    </>
  );
}



























































