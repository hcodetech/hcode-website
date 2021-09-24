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
      interval={10000}
      isPlaying
      lockOnWindowScroll
      playDirection

    >
      <h2 >With intrinsic axis dimension</h2>

      <div class="relative">
        <Slider >
          <Slide index={0}>
            <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center ">
                <h1 className="text-5xl leading-tight  font-bold  mx-auto text-white shadow ">
                Hire Top Talent As
                <br/> Your Offshore Team
                </h1>
                <p className="text-xl font-normal opacity-80 ">
                You can rely on us for great quality code written by responsible and driven developers, trained for such engagements
                </p>
                <button className="primary-button mt-4">Get Started</button>
                  </div>
              
              </div>
              <img src={image_slider_2} alt="" className="h-screen w-screen object-cover " />
            </div>
          </Slide>
          <Slide index={1}>
          <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center ">
                <h1 className="text-5xl leading-tight  font-bold  mx-auto text-white shadow ">
                We Focus On Your Tech As <br/> You Focus On Your Business
                </h1>
                <p className="text-xl font-normal opacity-80 ">
                Maximise your ROI by hiring our team of young and passionate developers that deliver value to your business by improving quality and reducing cost
                </p>
                <button className="primary-button mt-4">Get Started</button>
                  </div>
              
              </div>
              <img src={image_slider_3} alt="" className="h-screen w-screen object-cover " />
            </div>
          </Slide>
          <Slide index={2}>
          <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center ">
                <h1 className="text-5xl leading-tight  font-bold  mx-auto text-white shadow ">
                We Focus On Your Tech As <br/> You Focus On Your Business
                </h1>
                <p className="text-xl font-normal opacity-80 ">
                Maximise your ROI by hiring our team of young and passionate developers that deliver value to your business by improving quality and reducing cost
                </p>
                <button className="primary-button mt-4">Get Started</button>
                  </div>
              
              </div>
              <img src={image_slider_1} alt="" className="h-screen w-screen object-cover " />
            </div>
          </Slide>
        </Slider>
        <ButtonBack >
          <div className="bg-black absolute left-0 bottom-1/2 opacity-20 hover:opacity-80">
            <ChevronLeftIcon className="w-10 h-10  text-white"  />
          </div>

        </ButtonBack>
        <ButtonNext>
          <div className="bg-black absolute right-0 bottom-1/2 opacity-20 hover:opacity-80 ">
            <ChevronRightIcon className="w-10 h-10 text-white "  />
          </div>

        </ButtonNext >
      </div>

    </CarouselProvider>
  )
};

export default HeroSection