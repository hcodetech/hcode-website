import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  image_slider_1,
  image_slider_2,
  image_slider_3,
} from "../constants/constants";
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";

const slides = [
  {
    image: image_slider_1,
    alt: "Engineering Services",
    title: "Technology Services",
    description:
      "When you partner with us, you get our team of developers acting as your engineering team. They take care of your end-to-end engineering needs, including development, deployment, testing, and maintenance",
  },
  {
    image: image_slider_2,
    alt: "Team of young and passionate developers",
    title: (
      <>
        Hire Top Talent as
        <br /> Your Offshore Team
      </>
    ),
    description:
      "You can rely on us for great quality of code written by responsible and driven developers, trained for such engagements",
  },
  {
    image: image_slider_3,
    alt: "Our business services",
    title: (
      <>
        We Focus on your Tech
        <br /> So you can Focus on Business
      </>
    ),
    description:
      "Maximize your RoI by hiring our team of young and passionate developers who deliver value to your business by improving quality and reducing cost",
  },
];

function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="absolute h-screen w-full z-10">
                <div className="centered text-white text-center w-80 md:w-1/2">
                  <h2 className="text-3xl md:text-5xl lg:leading-tight font-bold mx-auto text-white">
                    {slide.title}
                  </h2>
                  <p className="text-xl font-normal opacity-90 mt-4">
                    {slide.description}
                  </p>
                  <div className="flex items-center justify-center">
                    <a
                      href="/contact"
                      className="pt-5 pb-1 mt-2 w-50 whitespace-nowrap flex-nowrap border-b border-white inline-flex text-white hover:scale-100 cursor-pointer hover:opacity-100"
                    >
                      Get In Touch
                      <ArrowRightIcon className="w-6 md:ml-2 h-full" />
                    </a>
                  </div>
                </div>
              </div>
              <img
                src={slide.image}
                className="h-screen w-full object-cover"
                alt={slide.alt}
                height="750px"
                width="1800px"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        className="bg-black absolute left-0 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-80 z-20"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="w-10 h-10 text-white" />
      </button>
      <button
        onClick={scrollNext}
        className="bg-black absolute right-0 top-1/2 -translate-y-1/2 opacity-20 hover:opacity-80 z-20"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="w-10 h-10 text-white" />
      </button>
    </div>
  );
}

export default HeroSection;
