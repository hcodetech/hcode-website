import React from 'react';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { image_slider_1, image_slider_2, image_slider_3 } from '../constants/constants';


function HeroSection() {
 return(
  <CarouselProvider
  visibleSlides={1}
  totalSlides={4}
  step={1}
  naturalSlideWidth={400}
  naturalSlideHeight={500}
  isIntrinsicHeight
  infinite

>
  <h2 >With intrinsic axis dimension</h2>
  <p />
  <Slider>
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
  <ButtonBack>Back</ButtonBack>
  <ButtonNext>Next</ButtonNext>
</CarouselProvider>
 )
};

export default HeroSection