import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { testimonial } from "../constants/constants";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/outline";

function Testimonial() {
  return (
    <>
      <h2 className='text-3xl font-semibold text-center pb-2'>
        What Client's say about us
      </h2>
      <CarouselProvider
        visibleSlides={1}
        totalSlides={testimonial.length}
        step={1}
        naturalSlideWidth={400}
        naturalSlideHeight={500}
        isIntrinsicHeight
        infinite
        interval={5000}
        isPlaying
        lockOnWindowScroll
        playDirection='forward'
      >
        <div className='relative'>
          <section className='new-container  pt-6 pb-2'>
            <Slider>
              {testimonial.map((message, index) => (
                <Slide index={message.id} key={index}>
                  <div className=' p-10'>
                    <div className='md:flex'>
                      <img
                        src={message.profile_image}
                        alt={message.person_name}
                        className='rounded w-[280px] h-[320px] lg:w-[320px] lg:h-[400px] object-cover'
                      />
                      <div>
                        <div className='md:ml-10 mt-4 md:mt-0'>
                          <h4 className='font-semibold text-2xl'>
                            {message.person_name}
                          </h4>
                          <p className='font-regular text-sm opacity-50 pt-1'>
                            {message.company_name}
                          </p>
                          <p
                            className=' text-lg mt-4 border-t border-black pt-3 lg:leading-loose tracking-tight'
                            dangerouslySetInnerHTML={{
                              __html: message.testimonial_paragraph,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Slide>
              ))}
            </Slider>
          </section>
          <ButtonBack>
            <div className='bg-black absolute left-0 bottom-1/2 opacity-20 hover:opacity-80 px-2 md:px-5'>
              <ArrowNarrowLeftIcon className='w-8 h-10  text-white' />
            </div>
          </ButtonBack>
          <ButtonNext>
            <div className='bg-black absolute right-0 bottom-1/2 opacity-20 hover:opacity-80 px-2 md:px-5 '>
              <ArrowNarrowRightIcon className='w-8 h-10 text-white ' />
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </>
  );
}

export default Testimonial;
