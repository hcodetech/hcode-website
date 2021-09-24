import React from 'react';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { image_slider_1, image_slider_2, image_slider_3 } from '../constants/constants';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function HeroSection() {
  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={3}
      step={1}
      naturalSlideWidth={400}
      naturalSlideHeight={500}
      isIntrinsicHeight
      infinite
      interval={4000}
      isPlaying
      lockOnWindowScroll
      playDirection="backward"

    >
      <h2 >With intrinsic axis dimension</h2>

      <div class="relative">
        <Slider >
          <Slide index={0}>
            <div className="relative">
              <div className="absolute h-screen w-screen">
                <h1 className="font-4xl font-semibold w-1/2 text-white ">
                  End-To-End Engineering Services
                </h1>
              </div>
              <img src={image_slider_2} alt="" className="h-screen w-screen object-cover" />
            </div>
          </Slide>
          <Slide index={1}>
            <img src={image_slider_3} alt="" className="h-screen w-screen object-cover" />
          </Slide>
          <Slide index={2}>
            <img src={image_slider_1} alt="" className="h-screen w-screen object-cover" />
          </Slide>
        </Slider>
        <ButtonBack >
          <div className="bg-black absolute left-0 bottom-1/2 opacity-20">
            <ChevronLeftIcon className="w-6 h-6 p-6"  />
          </div>

        </ButtonBack>
        <ButtonNext>
          <div className="bg-black absolute right-0 bottom-1/2 opacity-20">
            <ChevronRightIcon className="w-6 h-6 p-6"  />
          </div>

        </ButtonNext >
      </div>

    </CarouselProvider>
  )
};

export default HeroSection