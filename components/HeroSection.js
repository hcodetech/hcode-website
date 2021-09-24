// function HeroSection() {
//     return (
//         <section className=" bg-homepage_hero h-screen text-center w-50 bg-no-repeat bg-center w-screen bg-cover ">
//         <div className="new-container centered">
//           <div className="mx-auto text-white">
//             <h1 className="text-6xl font-semibold ">
//               Bringing your vision to life
//             </h1>
//             <p className="opacity-80 py-2">
//               Get a team of world class developers on your vision as individuals or as a managed team
//             </p>
//             <button className="primary-button">
//               Get Started
//             </button>
//             <a href="#">
//               What is this ?
//             </a>
//           </div>
//         </div>
//       </section>
//     )
// }

// export default HeroSection

import React from 'react';
import { ButtonBack, ButtonFirst, ButtonLast, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { image_slider_1, image_slider_2, image_slider_3 } from '../constants/constants';



export default () => (
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
          <div className="absolute h-screen">
          <h1 className="font-4xl font-semibold w-1/2 text-white ">
          End-To-End Engineering Services
          </h1>
            </div>
          <img src={image_slider_1} alt="" className="h-screen w-screen object-cover" />
        </div>
      </Slide>
      <Slide index={1}>
        <img src={image_slider_2} alt="" className="h-screen" />
      </Slide>
      <Slide index={2}>
        <img src={image_slider_3} alt="" className="h-screen" />
      </Slide>
    </Slider>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
  </CarouselProvider>
);
