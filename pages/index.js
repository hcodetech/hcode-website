import Head from "next/head";
import { homepage, how_to_get_started, client, city } from "../constants/constants";
import Client from '../components/Client'
import ServicesCard from '../components/ServicesCard'
import CTA from "../components/CTA";
import Benefits from "../components/Benefits";
import TechStack from "../components/TechStack";
import Process from "../components/Process";
import HeroSection from "../components/HeroSection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Hcode Techonolgies </title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HeroSection/>



      {/* Client Section */}
      <div className="py-10 new-container pt-96">
        <Client data={client} />
      </div>

      {/* Our Services */}
      <section className="new-container">
        <ServicesCard heading={true} />
      </section>

      {/* Who we are */}
      <section className="bg-blue-100 my-10">
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
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Benefits */}
      <Benefits data={homepage.why_hcode} />

      {/* Tech Stack */}
      <TechStack />

      {/* Process */}
      <div className="mt-10">
        <Process data={how_to_get_started} />
      </div>
      {/* CTA */}
      <div className="my-20 ">
        <CTA />
      </div>
    </>
  );
}



























































