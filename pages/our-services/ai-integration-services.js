import { useState, useEffect } from 'react';

import { getTestimonialData } from '../../utils/config';

import Client from '../../components/Client';
import Testimonial from '../../components/Testimonial';
import Accordion from '../../components/Accordion';
import CTA from '../../components/CTA';
import { Blogs } from '../../components/Blogs';
import Benefits from '../../components/Benefits';
import CardPortfolio from '../../components/CardPortfolio';

import Head from 'next/head';
import MetaTags from '../../components/MetaTags';

import {
  ai_benefits,
  ai_services,
  ai_technologies,
  faqAi,
  metaData,
  aiBlogData,
  client,
} from '../../constants/constants';
import { getAPIUrl } from '../api/APIHelpers';
import { apiRoutes } from '../api/APIRoutes';
import useGetFetch from '../hooks/useGetFetch';

function AIService() {
  const [isDesktop, setIsDesktop] = useState('');
  const selectedCategory = ['AI'];

  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });

  const testimonialData = getTestimonialData('AI');

  return (
    <>
      <Head>
        <title> Ai Integration Services - Hcode</title>
        <MetaTags page={metaData.AI} />
      </Head>

      <section className="h-[550px] md:h-screen bg-gray-50  bg-ai_bg_img bg-no-repeat bg-cover bg-center ">
        <div className="max-w-2xl sm:px-4 h-2/5 pt-32 md:pt-[275px] sm:pt-48 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-bold text-4xl sm:text-7xl text-primary py-4 w-[94%] sm:w-[102%]">
            AI Integration Services
          </h1>
          <p className="font-poppins text-black  px-5 sm:text-2xl font-light py-3 leading-7 md:leading-10 ">
            Gain a competitive edge and grow beyond limits. Unlock AI's
            potential with our AI integration services and open the doors to
            unparalleled growth.
          </p>

          <div className="text-center mt-10 sm:mt-10">
            <a
              href="/contact"
              className="bg-primary text-white font-light rounded px-16 py-4 text-center "
            >
              Take the leap
            </a>
          </div>
        </div>
      </section>

      <div className=" new-container pt-10 my-9">
        <Client
          logoWidth={250}
          logoHeight={100}
          data={client}
          slides={isDesktop}
        />
      </div>

      {/* our services */}
      <section className="bg-[#F8F9FB] mt-24">
        <SectionHeader
          heading="The world is harnessing AI, what's stopping you?"
          paragraph="Maximize productivity and streamline processes with our customizable AI integration services. We seamlessly integrate Generative AI into your workflows to drive innovation and achieve optimal business performance."
          cta
        />
      </section>

      {/* Our AI Integration Services */}
      <SectionHeader
        heading="Our AI Integration Services"
        paragraph="Our services utilize AI integrational tools to seamlessly embed artificial intelligence into your operations, enhancing efficiency and driving competitiveness."
      />
      <AiIntegrationServices />

      <div className="mt-6 mb-36 text-center">
        <a
          href="/contact"
          className="bg-white text-primary  border-primary border-2 rounded px-5 sm:px-16 py-4 text-center hover:bg-primary hover:text-white hover:border-white"
        >
          Tell us about your project
        </a>
      </div>

      {/* We have experience in following AI Technologies and Integrations */}
      <section className="bg-gray-100 py-10 my-8">
        <div className="py-10 lg:py-16 new-container">
          <div className="text-center ">
            <h3 className="text-2xl lg:text-4xl max-w-xl mx-auto font-semibold  lg:leading-snug">
              We have experience in following AI Technologies and Integrations
            </h3>
          </div>
          <div className="flex justify-center lg:justify-between flex-wrap gap-4 sm:gap-8  mt-16">
            {ai_technologies.map((data) => (
              <div key={data.id}>
                <div
                  className="border bg-white border-gray-300 h-36 w-36 p-1 hover:scale-105 ease-out duration-300 flex justify-center items-center rounded-sm "
                  key={data.id}
                >
                  <img src={data.image} alt="AI technologies" />
                </div>
                <p className="text-center pt-2 font-medium">{data.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className=" pt-12">
        <Benefits data={ai_benefits} additionalClass="max-w-2xl" />
      </section>

      {/* AI Integration Process with HCode */}
      <section className="  w-full md:h-[850px] mt-10 bg-AI_Integration_Process_bg bg-no-repeat  bg-top bg-cover">
        <div className="pb-7 pt-16">
          <div className="new-container mt-4">
            <h3 className=" font-poppins text-3xl sm:text-4xl font-semibold leading-10 text-left text-white mb-6">
              AI Integration Process with HCode
            </h3>
            <div className="">
              <div className="flex flex-col md:grid grid-cols-12 gap-x-0 text-gray-50 md:-ml-10">
                {AiIntegerationProcessData.map(({ heading, description }) => (
                  <AiIntegrationProcessSection
                    heading={heading}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-10 mt-20">
        <div className="new-container py-10">
          <div className="text-center ">
            <h2 className="text-2xl md:text-4xl font-semibold pb-2">
              AI products built by HCode
            </h2>
            <p className="font-light">
              We’ve built the following AI products for our clients
            </p>
          </div>
          <div className="grid col-span-12 py-10">
            {portfolioData?.map((data) => (
              <CardPortfolio
                key={data.id}
                cardData={data}
                selectedCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
      </section>

      {/* testimonial */}
      <div className="py-20 mt-24 bg-gray-100">
        <Testimonial data={testimonialData} />
      </div>

      {/* blogs section  */}
      <div className="sm:new-container  ">
        <Blogs data={aiBlogData} />
      </div>

      {/* FAQ */}
      <section className="bg-gray-100 lg:-mt-56">
        <Accordion data={faqAi} />
      </section>

      <div className="my-20">
        <CTA
          heading="Tap into the disruptive potential of AI "
          paragraph="Allow us to guide you in unlocking the advanced capabilities of artificial intelligence, revolutionizing your operational framework with cutting-edge efficiency."
          buttonText="Speak to our AI Experts."
          widthClass="w-full"
        />
      </div>

      <AIFAQSchema />
    </>
  );
}
export default AIService;

const SectionHeader = ({ heading, paragraph, cta, ctaText }) => (
  <section>
    <div className="new-container text-center mx-auto  py-16 ">
      <div className="max-w-lg mx-auto ">
        <h2 className="font-semibold text-3xl md:text-4xl my-4">{heading}</h2>
        <div className="px-3 py-[2px] max-w-[120px] my-4 bg-blue-500 mx-auto"></div>
        <p className="sm:text-xl font-light sm:font-normal pt-1 pb-6">
          {paragraph}
        </p>
        <div className="mt-6">
          {cta && (
            <a
              href="/contact"
              className="bg-white text-primary  border-primary border-2 rounded px-5 sm:px-16 py-4 text-center hover:bg-primary hover:text-white hover:border-white"
            >
              {ctaText || 'Tell us about your project'}
            </a>
          )}
        </div>
      </div>
    </div>
  </section>
);

function AiIntegrationServices() {
  return (
    <section className=" new-container -mt-9 mb-12  space-y-14">
      {ai_services.points.map(({ heading, image, description }) => (
        <div className="  grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
          <div className="col-span-12 lg:col-span-1  ">
            <img className="w-16 h-16 " src={image} alt={heading} />
          </div>
          <div className="col-span-12 lg:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
            <h3 className=" font-poppins text-2xl md:text-3xl  text-black font-semibold ">
              {heading}
            </h3>
            <p className="font-poppins font-light  sm:text-lg text-black sm:font-normal leading-7">
              {description}
            </p>

            {/* <a
              href="https://calendly.com/gaurav-tomar/30min"
              target="_blank"
              className=" text-lg flex items-center mt-2 w-50 text-gray-500 cursor-pointer hover:underline  "
            >
              Schedule a brief call
              <ArrowRightIcon className="w-6 md:ml-2  h-full text-gray-500" />
            </a> */}
          </div>
        </div>
      ))}
    </section>
  );
}

function AiIntegrationProcessSection({ heading, description, id }) {
  return (
    <section className="flex md:contents ">
      <div className="col-start-1 col-end-2 mr-10 md:mx-auto relative">
        <div className="h-full w-6 flex items-center justify-center mt-12">
          <div className="md:block h-full w-1 bg-white pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 md:w-8 md:h-8 absolute top-[27%]  left-[0.4px] md:left-[-4.6px] -mt-7 md:-mt-3 rounded-full  bg-primary shadow "></div>
      </div>
      <div className=" col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto -ml-12  md:ml-[-33px]  w-full">
        <h4 className="font-poppins text-[20px] sm:text-2xl font-semibold leading-10 mb-1">
          {heading}
        </h4>
        <p className="font-poppins text-base font-light sm:font-normal leading-6 max-w-xl">
          {description}
        </p>
      </div>
    </section>
  );
}

const AiIntegerationProcessData = [
  {
    heading: 'Client Interaction',
    description:
      'We analyze your needs, goals, and infrastructure to identify AI solutions. Then we present an integration plan detailing the chosen AI integration tools, data pipelines, and deployment strategy.',
  },
  {
    heading: 'Integration & Customization',
    description:
      'We prepare and structure your data to be compatible with the chosen AI models. Train and fine-tune the AI models on your specific data. Monitor performance and iterate to optimize accuracy and relevance.',
  },
  {
    heading: 'Deployment & Training',
    description:
      'Then, we seamlessly integrate the trained AI models into your existing workflows and applications using APIs or custom code. We provide user training and ongoing support to ensure smooth adoption.',
  },
  {
    heading: 'Release & Support',
    description:
      'We continuously monitor the performance of your AI integration, track key metrics, and identify areas for improvement. We keep it up-to-date with the latest advancements, ensuring your success story unfolds.',
  },
];

const AIFAQSchema = () => {
  const script = {
    __html: `
    {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "How to Integrate AI into Your Business",
      "description": "A step-by-step guide to integrating artificial intelligence into your business processes",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Understand AI Integration",
          "text": "Learn about AI integration and its benefits for businesses. Understand how AI can automate tasks, provide insights, enhance decision-making, and improve efficiency."
        },
        {
          "@type": "HowToStep",
          "name": "Assess Your Business Needs",
          "text": "Evaluate your business requirements and goals for AI integration. Determine the specific areas where AI can add value and address challenges within your organization."
        },
        {
          "@type": "HowToStep",
          "name": "Plan AI Integration Strategy",
          "text": "Develop a strategy for integrating AI into your existing systems and workflows. Consider factors such as project complexity, timeline, budget, and technology compatibility."
        }
      ],
      "faqSection": {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is AI integration, and how can it benefit my business?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AI integration involves seamlessly incorporating artificial intelligence into your existing systems and workflows. It can benefit your business by automating tasks, providing real-time insights, enhancing decision-making, and improving overall efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to have existing AI systems in place to benefit from your services?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, you don't need existing AI systems. We work with businesses at all stages of AI adoption, from those looking to start integrating AI to those wanting to enhance their existing AI infrastructure."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it typically take to see results from AI integration?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The timeline for seeing results varies depending on the complexity of the project and specific goals. Some businesses may experience improvements in operational efficiency within weeks, while others may see substantial benefits over several months."
            }
          },
          {
            "@type": "Question",
            "name": "What is the typical cost associated with AI integration services, and how can I determine the budget for my project?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The cost of AI integration can vary widely depending on project complexity and scope. We offer customized solutions, and the pricing is tailored to your specific needs. To determine a budget, we recommend discussing your requirements with our team for a detailed estimate."
            }
          },
          {
            "@type": "Question",
            "name": "Are there any potential challenges or risks associated with AI integration, and how do you mitigate them?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While AI integration offers significant benefits, challenges may include data security, ethical concerns, and technology compatibility. We address these by implementing robust security measures, adhering to ethical AI principles, and conducting compatibility assessments."
            }
          },
          {
            "@type": "Question",
            "name": "Is my data secure when integrating AI into my systems?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, data security is a top priority. We implement industry-standard security measures to protect your data throughout the AI integration process, ensuring confidentiality and compliance with privacy regulations."
            }
          }
        ]
      }
    }
    `,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={script} />;
};
