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
  fintech_card,
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
        <div className="   ">
          <div className="new-container p-4 lg:p-16 xl:p-32 xl:pb-0 text-center mx-auto md:w-3/5 ">
            <div className="mt-20 md:mt-4">
              <h1 className=" font-semibold text-3xl  md:text-5xl md:leading-tight">
                {our_services_data.hero_heading}
              </h1>
            </div>
            <p className="py-5  text-xl md:text-2xl font-light  mx-auto">
              {our_services_data.hero_paragraph}
            </p>
          </div>
          <div className="relative  md:mt-8 ">
            <img
              className="object-cover w-screen md:h-[580px] h-[300px]"
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
        <div className="new-container">
          <ServicesCard heading={true} />
        </div>
        {/* <div>
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
        </div> */}
      </section>
      {/* Tech Stack */}
      <section className="mt-14 mb-10 ">
        <TechStack />
      </section>

      {/* Project Showcase */}
      <section className="new-container">
        <Consumer_Card data={consumer_card} />
        <EnterpriseCard data={enterprise_card} />
        <FintechCard data={fintech_card} />
        {/* <Consumer_Card/  data={enterprise_card}/> */}
        <div className="new-container mx-auto -mt-16 pb-16">
          <div className="text-center">
            <a
              href="/our_work"
              className="pt-10 pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100"
            >
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
        <Client data={client} />
      </section>
    </>
  );
}

export default our_services;
