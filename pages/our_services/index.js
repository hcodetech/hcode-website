import Head from "next/head";
import Image from "next/image";
import ServicesCard from "../../components/ServicesCard";
import {
  our_services_hero,
  our_services_data,
  faq_services,
  client,
  how_to_get_started
} from "../../constants/constants";
import ShowCaseCard from "../../components/ShowCaseCard";
import Client from "../../components/Client";
import TechStack from "../../components/TechStack";
import Accordion from "../../components/Accordion";
import Process from "../../components/Process";
function our_services() {
  return (
    <>
      <Head>
        <title>Our Services | Hcode Techonolgies</title>
      </Head>
      <section className="relative bg-no-repeat bg-contain">
        <div className="new-container   ">
          <div className="p-8 lg:p-16 xl:p-32 xl:pb-0 text-center mx-auto w-5/6">
            <h1 className="text-2xl lg:text-5xl font-semibold">
              {our_services_data.hero_heading}
            </h1>
            <p className="py-5 text-2xl font-light  mx-auto">
              {our_services_data.hero_paragraph}
            </p>
          </div>
          <div className="relative h-[580px] w-full mt-8">
            <Image
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
          Let’s connect to start your project
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
      <section className="new-container hidden">
        <ShowCaseCard />
      </section>

      {/* Client Section */}
      <section className="new-container">
      <Client data={client}/>
      </section>

      {/* FAQ */}
      <Accordion data={faq_services} />
    </>
  );
}

export default our_services;
