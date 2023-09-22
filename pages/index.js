/** @format */

import { ArrowRightIcon } from '@heroicons/react/solid';
import Head from 'next/head';
import Benefits from '../components/Benefits';
import CTA from '../components/CTA';
import CaseStudiesCard from '../components/CaseStudiesCard';
import Client from '../components/Client';
import HeroSection from '../components/HeroSection';
import Process from '../components/Process';
import ServicesCard from '../components/ServicesCard';
import Team from '../components/Team';
import TechStack from '../components/TechStack';
import Testimonial from '../components/Testimonial';
import {
  TEAM,
  city,
  client,
  homepage,
  how_to_get_started,
  metaData,
  testimonial,
} from '../constants/constants';

import { useEffect, useState } from 'react';
import MetaTags from '../components/MetaTags';
import NewsletterCTA from '../components/NewsletterCTA';
import BackendSVG from '../public/assets/img/backend-illu.svg';
import BlockchainSVG from '../public/assets/img/blockchain-illu.svg';
import MobileSVG from '../public/assets/img/mobile-illu.svg';

export default function Home() {
  const [isDesktop, setIsDesktop] = useState('');

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
    // on scroll, url is changing with section ids with the help of intersectionObserver API
    // Testing the even
    // intersectionObserver API contain two arguements i.e, callback function and options
    let observerOptions = {
      rootMargin: '10px',
      threshold: window.innerWidth <= 750 ? 0.1 : 0.8,
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(sections) {
      if (sections[0].isIntersecting) {
        history.pushState(null, null, '#' + sections[0].target.id);
      }
    }
    document.querySelectorAll('section').forEach((i) => {
      observer.observe(i);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{homepage.title} </title>
        <MetaTags page={metaData.homepage} />
      </Head>

      {/* Crasoual  */}
      <section>
        <HeroSection />
        {/* Client Section */}

        
        <div className=' new-container pt-10'>
          <Client
            logoWidth={250}
            logoHeight={100}
            data={client}
            slides={isDesktop}
          />
        </div>
      </section>

      {/* Our Services */}

      <section id='services' className='mt-4 md:mt-10 '>
        <div className='new-container '>
          <ServicesCard heading={true} />
        </div>
        <div className='hidden'>
          <div className='bg-primary '>
            <div className='text-white bg-serviceIllustration bg-left-bottom bg-no-repeat w-full bg-contain '>
              <div className='new-container text-center pt-32 -mt-20 pb-24 md:pb-24 md:pt-52 md:-mt-32'>
                <h2 className='text-4xl font-semibold w-4/5 md:mx-auto text-left md:text-center md:w-full'>
                  What can we do for you ?
                </h2>
                <p className='text-left md:text-center md:w-4/5 md:mx-auto font-light mt-3 opacity-80'>
                  Are you a startup or an enterprise looking to set up/augment
                  your tech team? If yes, we have the right solution tailored
                  for you. We staff, manage and support your offshore
                  development team and we can get your team up and ready at
                  short notice.
                </p>
                <div className='grid grid-cols-12 gap-8 mt-10 md:w-4/5 md:mx-auto'>
                  <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className='bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left'>
                      <h4 className='text-2xl'>Mobile / Webapp</h4>
                      <img src={MobileSVG} className='mx-auto my-10 max-h-32' />
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className='bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left'>
                      <h5 className='text-2xl'>Backend</h5>
                      <img
                        src={BackendSVG}
                        className='mx-auto my-10 max-h-32'
                      />
                    </div>
                  </div>
                  <div className='col-span-12 md:col-span-6 lg:col-span-4'>
                    <div className='bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left'>
                      <h3 className='text-2xl'>Blockchain</h3>
                      <img
                        src={BlockchainSVG}
                        className='mx-auto my-10 max-h-32'
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center mt-16 md:mt-20'>
                  <a
                    href='/our_services'
                    className='border border-white rounded px-16 py-4 hover:bg-white hover:text-primary  text-center transition transform duration-200 ease-out'
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
      <section id='who_we_are' className='bg-gray-100 mt-14'>
        <div className='new-container py-10'>
          <div className='grid grid-cols-12'>
            <div className='col-span-12 lg:col-span-6'>
              <picture>
                <source
                  srcSet={homepage.who_are_we.image_webp}
                  type='image/webp'
                  media='(min-width:250px)'
                  className='md:rounded-xl h-[102%] max-h-[600px] object-cover w-auto'
                />
                <img
                  src={homepage.who_are_we.image}
                  alt='Team of young, talented, and dynamic engineers.'
                  className='md:rounded-xl h-[102%] max-h-[600px] object-cover w-auto'
                  height='600px'
                  width='500px'
                  loading='lazy'
                />
              </picture>
            </div>
            <div className='lg:px-4 col-span-12 lg:col-span-6 '>
              <h3 className='text-3xl lg:text-4xl font-semibold py-2 mt-4 md:mt-0'>
                {homepage.who_are_we.heading}
              </h3>
              <div className='py-2 lg:py-5'>
                <p className='lg:text-lg break-words'>
                  {homepage.who_are_we.paragraph}
                </p>
                <br />
                <p className='lg:text-lg'>
                  {homepage.who_are_we.paragraph_2nd}
                </p>
              </div>
              <div className=''>
                <h4 className='text-xl font-semibold'>
                  {homepage.who_are_we.clients.heading}
                </h4>
                <Client
                  logoWidth={100}
                  logoHeight={170}
                  data={city}
                  heading={true}
                />
              </div>
              <a
                href='/about'
                className='pt-3 pb-1 border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100'
              >
                Read more about our story
                <ArrowRightIcon className='w-6 ml-2 ' />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id='why_hcode'>
        <Benefits additionalClass='w-3/4 lg:w-1/3' data={homepage.why_hcode} />
      </section>
      <div className='new-container mx-auto -mt-16 pb-16'>
        <div className='text-center'>
          <a
            href='/contact'
            className='pt-10 pb-1  border-b border-primary inline-flex text-primary hover:scale-100  cursor-pointer hover:opacity-100'
          >
            Request Consultation
            <ArrowRightIcon className='w-6 ml-2 ' />
          </a>
        </div>
      </div>

      {/* Testimonial */}
      <section id='testimonial' className='pt-10 pb-0 bg-gray-100'>
        <Testimonial data={testimonial} />
      </section>

      {/* Tech Stack */}
      <section id='tech_stack' className='mt-20'>
        <TechStack />
      </section>

      {/* Process */}
      <section id='process' className='  py-16'>
        <Process data={how_to_get_started} />
      </section>

      {/* Case Studies */}
      <section id='case_studies' className=' '>
        <h2 className='text-4xl font-semibold text-center py-5 mb-4'>
          Our Work
        </h2>
        <CaseStudiesCard />
        <div className='text-center mt-10 mb-14'>
          <a href='/our_work' className='outline-button px-10  text-center'>
            See Our Portfolio
          </a>
        </div>
      </section>

      <NewsletterCTA />
      {/* Core Team  */}
      <section id='our_core_team' className='py-14 bg-gray-100 text-center'>
        <div className='lg:new-container'>
          <h3 className='font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight'>
            Leadership Team
          </h3>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-2  mt-7'>
            {TEAM.map(({ name, image, bio, link, title }, index) => (
              <Team
                key={name}
                name={name}
                image={image}
                bio={bio}
                link={link}
                title={title}
              />
            ))}
          </div>
          <div></div>
        </div>
      </section>

      {/* CTA */}
      <section id='cta' className='my-20 '>
        <CTA />
      </section>
    </>
  );
}
