// /** @format */

import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Accordion from '../../components/Accordion';
import Benefits from '../../components/Benefits';
import CTA from '../../components/CTA';
import CardPortfolio from '../../components/CardPortfolio';
import Client from '../../components/Client';
import MetaTags from '../../components/MetaTags';
import Testimonial from '../../components/Testimonial';
import {
  AIService_Hero,
  ai_benefits,
  ai_services,
  ai_technologies,
  client,
  faqAi,
  metaData,
} from '../../constants/constants';
import { getTestimonialData } from '../../utils/config';
import { getAPIUrl } from '../api/APIHelpers';
import { apiRoutes } from '../api/APIRoutes';
import useGetFetch from '../hooks/useGetFetch';

const AIService = () => {
  const [isDesktop, setIsDesktop] = useState('');
  const selectedCategory = ['AI'];

  const [portfolioData, isLoading] = useGetFetch(getAPIUrl(apiRoutes.OUR_WORK));

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });

  useEffect(() => {
    const redirectPage = '/our-services/ai-integration-services';
    window.location.href = redirectPage;
  }, []);

  const data = getTestimonialData('AI');

  return (
    <div>
      <Head>
        <title>Ai Integration Services - Hcode</title>
        <MetaTags page={metaData.AI} />
      </Head>

      {/* Hero Section */}
      <div className="new-container  grid  grid-cols-2 md:grid-cols-4 pt-16 ">
        <div className="py-5 md:py-24 md:pr-28 mt-20 col-span-2 order-2 md:order-1">
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Seamless AI Integration Solutions for Your Business
          </h1>

          <p className="py-5 text-lg font-light">
            With Our Expertise, Your Business Will Seamlessly Integrate AI
            Solutions for Enhanced Efficiency,  Data Insights, and Competitive
            Advantage
          </p>

          <div className="mt-5">
            <a href="/contact" target="_blank" className="primary-button">
              Get in Touch
            </a>
          </div>
        </div>
        <div className="col-span-2 order-1 md:order-2">
          <img src={AIService_Hero} alt="AI services" className="w-full" />
        </div>
      </div>

      <section className="new-container pt-20 pb-32">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* Tech Services */}
      <section className=" pb-14 new-container">
        <div className="text-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">
            Our AI Integration Services
          </h1>
          <p className="max-w-xl  mx-auto mt-3 leading-relaxed text-lg text-gray-700">
            Our range of services seamlessly embeds artificial intelligence into
            your operations, enhancing efficiency and driving competitiveness.
            Explore our offerings below to unlock the power of AI for your
            organization.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-10">
          {ai_services.points.map((data) => (
            <div
              className="bg-gray-100 p-8 col-span-2 border-b-[6px] border-primary hover:bg-gray-50 "
              key={data.heading}
            >
              <div className="bg-gray-300 w-20 h-20 mb-2 flex justify-center items-center rounded-full">
                <img src={data.image} />
              </div>

              <h3 className="text-xl pt-2 font-semibold">{data.heading}</h3>
              <p className="text-gray-700 mt-1 leading-relaxed sm:pr-8">
                {data.description}
              </p>
            </div>
          ))}
        </div>

        <div className=" text-center mt-14 pt-2 pb-8">
          <a href="/contact" className="primary-outline">
            <span className="px-5">Contact Us</span>
          </a>
        </div>
      </section>

      <div className="bg-gray-100 py-10 my-8">
        <section className="py-10 lg:py-16 new-container">
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
        </section>
      </div>

      {/* Portfolio */}
      <section className="py-10">
        <div className=" new-container py-10 grid grid-cols-12">
          <div className="col-span-12  text-center ">
            <h2 className="text-2xl md:text-4xl font-semibold pb-2">
              AI products built by HCode
            </h2>
            <p className="font-light">
              We’ve built the following AI products for our clients
            </p>
          </div>
          <div className="col-span-12 py-10">
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

      {/* Testimonial */}
      <div className="pt-10 pb-0 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* Benefits */}
      <section className=" pt-12">
        <div className="new-container ">
          <Benefits data={ai_benefits} additionalClass="max-w-2xl" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100">
        <Accordion data={faqAi} />
      </section>

      {/* CTA */}
      <div className="my-10 ">
        <CTA
          heading="Let's work with AI"
          paragraph="Get our top talent working for you right away"
          widthClass="w-full"
        />
      </div>

      <AIFAQSchema />
    </div>
  );
};

export default AIService;

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
