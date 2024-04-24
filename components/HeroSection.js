import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  image_slider_1,
  image_slider_2,
  image_slider_3,
} from "../constants/constants";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/solid";

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
      playDirection="forward"
    >
      <h2>With intrinsic axis dimension</h2>

      <div className="relative">
        <Slider>
          <Slide index={0}>
            <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center w-80 md:w-1/2 ">
                  <h2 className="text-3xl md:text-5xl lg:leading-tight  font-bold  mx-auto text-white  ">
                    Technology Services
                  </h2>
                  <p className="text-xl font-normal opacity-90 mt-4 ">
                    When you partner with us, you get our team of developers
                    acting as your engineering team. They take care of your
                    end-to-end engineering needs, including development,
                    deployment, testing, and maintenance
                  </p>
                  {/* <button className="bg-white px-16 py-4 text-primary rounded hover:bg-gray-100  mt-4">Get In Touch</button> */}
                  <div className="flex items-center justify-center">
                    <a
                      href="/contact"
                      className="pt-5 pb-1  mt-2 w-50 whitespace-nowrap flex-nowrap border-b border-white inline-flex text-white hover:scale-100  cursor-pointer hover:opacity-100 "
                    >
                      Get In Touch
                      <ArrowRightIcon className="w-6 md:ml-2  h-full" />
                    </a>
                  </div>
                </div>
              </div>


              <img
                src={image_slider_1}
                className="h-screen w-screen object-cover"
                alt="Engineering Services"
                height="750px"
                width="1800px"
                loading="lazy"
              />
              {/* <picture>
                <source
                  className="h-screen w-screen object-cover"
                  srcSet={image_slider_1_webp}
                  media="(min-width:250px)"
                  type="image/webp"
                />

                <img
                  src={image_slider_1}
                  className="h-screen w-screen object-cover"
                  alt="Engineering Services"
                  height="750px"
                  width="1800px"
                  loading="lazy"
                />
              </picture> */}
            </div>
          </Slide>
          <Slide index={1}>
            <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center w-80 md:w-1/2">
                  <h3 className="text-3xl lg:text-5xl lg:leading-tight  font-bold  mx-auto text-white   ">
                    Hire Top Talent as
                    <br /> Your Offshore Team
                  </h3>
                  <p className="text-xl font-normal opacity-90 mt-3 ">
                    You can rely on us for great quality of code written by
                    responsible and driven developers, trained for such
                    engagements
                  </p>
                  <a
                    href="/contact"
                    className="pt-5 pb-1  mt-2 whitespace-nowrap flex-nowrap border-b border-white inline-flex text-white hover:scale-100  cursor-pointer hover:opacity-100"
                  >
                    <span className="flex">
                      Get In Touch
                      <ArrowRightIcon className="w-6 ml-2 h-full" />
                    </span>
                  </a>
                </div>
              </div>

              {/* <picture>
                <source
                  srcSet={image_slider_2_webp}
                  className="h-screen w-screen object-cover"
                  type="image/webp"
                  media="(min-width:250px)"
                />

                <img
                  src={image_slider_2}
                  className="h-screen w-screen object-cover"
                  type="image/webp"
                  alt="Team of young and passionate developers"
                  height="750px"
                  width="1800px"
                  loading="lazy"
                />
              </picture> */}

              <img
                src={image_slider_2}
                className="h-screen w-screen object-cover"
                type="image/webp"
                alt="Team of young and passionate developers"
                height="750px"
                width="1800px"
                loading="lazy"
              />
            </div>
          </Slide>
          <Slide index={2}>
            <div className="relative">
              <div className="absolute h-screen w-screen">
                <div className="centered text-white  text-center  w-80 md:w-1/2">
                  <h3 className="text-3xl lg:text-5xl lg:leading-tight  font-bold  mx-auto text-white  ">
                    We Focus on your Tech
                    <br /> So you can Focus on Business
                  </h3>
                  <p className="text-xl font-normal opacity-90 mt-3 ">
                    Maximize your RoI by hiring our team of young and passionate
                    developers who deliver value to your business by improving
                    quality and reducing cost
                  </p>
                  <a
                    href="/contact"
                    className="pt-5 pb-1 whitespace-nowrap flex-nowrap  border-b border-white inline-flex text-white hover:scale-100  cursor-pointer hover:opacity-100"
                  >
                    Get In Touch
                    <ArrowRightIcon className="w-6 ml-2 h-full" />
                  </a>
                </div>
              </div>

              {/* <picture>
                <source
                  srcSet={image_slider_3_webp}
                  className="h-screen w-screen object-cover"
                  type="image/webp"
                  media="(min-width:250px)"
                />

                <img
                  src={image_slider_3}
                  className="h-screen w-screen object-cover"
                  type="image/webp"
                  alt="Our business services"
                  height="750px"
                  width="1800px"
                  loading="lazy"
                />
              </picture> */}
              <img
                src={image_slider_3}
                className="h-screen w-screen object-cover"
                type="image/webp"
                alt="Our business services"
                height="750px"
                width="1800px"
                loading="lazy"
              />
            </div>
          </Slide>
        </Slider>
        <ButtonBack>
          <div className="bg-black absolute left-0 bottom-1/2 opacity-20 hover:opacity-80">
            <ChevronLeftIcon className="w-10 h-10  text-white" />
          </div>
        </ButtonBack>
        <ButtonNext>
          <div className="bg-black absolute right-0 bottom-1/2 opacity-20 hover:opacity-80 ">
            <ChevronRightIcon className="w-10 h-10 text-white " />
          </div>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
}

export default HeroSection;
