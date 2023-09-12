/** @format */

import React, { useEffect, useState } from 'react';

import {
  metaData,
  AIService_Hero,
  client,
  ai_services,
  ai_technologies,
  portfolioData,
  ai_benefits,
} from '../../constants/constants';
import Head from 'next/head';
import MetaTags from '../../components/MetaTags';
import Client from '../../components/Client';
import Benefits from '../../components/Benefits';
import CardPortfolio from '../../components/CardPortfolio';
import Testimonial from '../../components/Testimonial';
import CTA from '../../components/CTA';

const AIService = () => {
  const [isDesktop, setIsDesktop] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(['Blockchain']);

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  });

  // Select Industry Card

  const selectedTabsFn = (condition) =>
    condition
      ? 'border-b-4 border-primary pt-2.5 px-2'
      : ' pt-3 pb-2.5 opacity-60';
  const onTabClick = (tab) => {
    setActiveTab(tab);
  };
  // Highlight the selected Tab Function

  // Change the ID of Product List Data Shown
  const filterProductData = (id) => {
    setId(id);
  };

  // Select Industry Card
  const setSelectedTech = (e, industryName) => {
    if (e.target.checked) {
      setSelectedCategory((prev) => [...prev, industryName]);
    } else {
      setSelectedCategory((industry) => {
        return industry.filter((item) => item !== industryName);
      });
    }
  };
  return (
    <div>
      <Head>
        <title>AI services | Hcode Technologies</title>
        <MetaTags page={metaData.work_with_us} />
      </Head>

      {/* Hero Section */}
      <div className='new-container  grid grid-cols-4 pt-16 '>
        <div className='py-5 md:py-24 md:pr-32 mt-20 col-span-2'>
          <h1 className='text-3xl lg:text-4xl font-semibold'>
            Seamless AI Integration Solutions for Your Business
          </h1>

          <p className='py-5 text-lg font-light'>
            With Our Expertise, Your Business Will Seamlessly Integrate AI
            Solutions for Enhanced Efficiency,  Data Insights, and Competitive
            Advantage
          </p>

          <div className='mt-5'>
            <a
              href='https://in.indeed.com/cmp/Hcode-Technologies/jobs'
              target='_blank'
              className='primary-button'
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className='col-span-2'>
          <img src={AIService_Hero} alt='AI services' className='w-full' />
        </div>
      </div>

      <section className='new-container py-20'>
        <Client data={client} slides={isDesktop} />
      </section>

      {/* Tech Services */}
      <section className=' pb-14 '>
        <div className=' '>
          <Benefits data={ai_services} additionalClass='max-w-xl' />
          <div className='text-center pt-2 pb-12'>
            <a
              href='/contact'
              className='bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white '
            >
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className='py-10 lg:py-16 new-container'>
        <div className='text-center '>
          <h6 className='font-light bg-primary max-w-[180px]  p-2 rounded-full mx-auto mb-5 text-white'>
            Capabilities
          </h6>
          <h3 className='text-lg lg:text-3xl font-semibold  lg:leading-snug'>
            We have experience in following <br />
            Blockchain Technologies and Integrations
          </h3>
        </div>
        <div className='flex justify-between mt-16'>
          {ai_technologies.map((data) => (
            <div
              className='bg-gray-100 rounded-md flex justify-center w-[200px] items-center p-4'
              key={data.id}
            >
              <img src={data.image} alt='AI technologies' />
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio */}
      {/* <section className='py-10'>
        <div className=' new-container py-10 grid grid-cols-12'>
          <div className='col-span-12 md:col-span-7 '>
            <h2 className='text-4xl font-semibold pb-2'>
              Blockchain products built by HCode
            </h2>
            <p className='font-light'>
              We’ve built the following Blockchain products for our clients
            </p>
          </div>
          <div className='col-span-12 py-10'>
            {portfolioData.map((data) => (
              <CardPortfolio
                key={data.id}
                cardData={data}
                selectedCategory={selectedCategory}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonial */}
      <div className='pt-10 pb-0 bg-gray-100'>
        <Testimonial />
      </div>

      {/* Benefits */}
      <section className=' pt-12 '>
        <div className='new-container '>
          <Benefits data={ai_benefits} />
        </div>
      </section>

      {/* CTA */}
      <div className='my-10 '>
        <CTA
          heading='Hire Blockchain Developers'
          paragraph='Get our top talent working for you right away'
          widthClass='w-full'
        />
      </div>
    </div>
  );
};

export default AIService;
