import Head from "next/head";
import ServicesCard from "../../components/ServicesCard";
import {
  our_services_hero,
  our_services_data,
  faq_services,
  client,
  how_to_get_started,
  consumer_card,
  enterprise_card,
  fintech_card
} from "../../constants/constants";
import Consumer_Card from "../../components/Consumer_Card";
import Client from "../../components/Client";
import TechStack from "../../components/TechStack";
import Accordion from "../../components/Accordion";
import Process from "../../components/Process";
import EnterpriseCard from "../../components/EnterpriseCard";
import FintechCard from "../../components/FintechCard";
import { ArrowRightIcon } from "@heroicons/react/solid";
function our_services() {
  return (
    <>
      <Head>
        <title>Our Services | Hcode Techonolgies</title>
      </Head>
      <section className="relative bg-no-repeat bg-contain">
        <div className="new-container   ">
          <div className="p-8 lg:p-16 xl:p-32 xl:pb-0 text-center mx-auto w-5/6">
            <div className="mt-16">
            <h1 className="text-2xl lg:text-5xl font-semibold">
              {our_services_data.hero_heading}
            </h1>
            </div>
            <p className="py-5 text-2xl font-light  mx-auto">
              {our_services_data.hero_paragraph}
            </p>
          </div>
          <div className="relative md:h-[580px] w-full mt-8 ">
            <img className="object-cover w-screen"
              src={our_services_hero}
              layout="fill"
            />
          </div>
        </div>
      </section>


    {/* Process */}
    <div className="my-20">
        <Process data={how_to_get_started} />
        <div className="text-center my-10">
        <a href="/contact" className="primary-outline  text-center">
          Let’s Connect To Start Your Project
        </a>
        </div>
      </div>
      {/* Our Services card */}
      <section className="new-container my-10">
        
        <ServicesCard heading={true}  />
      </section>
      {/* Tech Stack */}
      <section className="mt-14 mb-10 ">
        <TechStack />
      </section>

      {/* Project Showcase */}
      <section className="new-container">
        <Consumer_Card  data={consumer_card}/>
        <EnterpriseCard  data={enterprise_card}/>
        <FintechCard  data={fintech_card}/>
        {/* <Consumer_Card/  data={enterprise_card}/> */}
     
    
       

<div className="new-container mx-auto -mt-16 pb-16">
      <div className="text-center">
      <a href="/portfolio" className="pt-10 pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100">
      See More of Our Work
      <ArrowRightIcon className="w-6 ml-2 " />
      </a>
    </div>
    </div>
      </section>


      {/* FAQ */}
      <div className="bg-gray-100">
      <Accordion data={faq_services} />
      </div>

      {/* Client Section */}
      <section className="new-container py-10">
      <Client data={client}/>
      </section>

    </>
  );
}

export default our_services;
