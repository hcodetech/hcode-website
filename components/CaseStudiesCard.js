import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function CaseStudiesCard({ data, isLoading }) {
  const [emblaRefDesktop, emblaApiDesktop] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [emblaRefMobile, emblaApiMobile] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const scrollPrevDesktop = useCallback(() => {
    if (emblaApiDesktop) emblaApiDesktop.scrollPrev();
  }, [emblaApiDesktop]);

  const scrollNextDesktop = useCallback(() => {
    if (emblaApiDesktop) emblaApiDesktop.scrollNext();
  }, [emblaApiDesktop]);

  const scrollPrevMobile = useCallback(() => {
    if (emblaApiMobile) emblaApiMobile.scrollPrev();
  }, [emblaApiMobile]);

  const scrollNextMobile = useCallback(() => {
    if (emblaApiMobile) emblaApiMobile.scrollNext();
  }, [emblaApiMobile]);

  if (isLoading) {
    return (
      <div className="new-container grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="w-full h-[400px] border rounded-md mx-auto mt-10">
          <div className="animate-pulse flex-row h-full justify-between">
            <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
            <div className="p-4">
              <div className="w-52 bg-gray-300 h-10 rounded-md mb-2"></div>
              <div className="w-full bg-gray-300 h-20 rounded-md mb-2"></div>
              <div className="w-24 bg-gray-300 h-4 rounded-md mb-2"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full h-[400px] border rounded-md mx-auto mt-10">
          <div className="animate-pulse flex-row h-full justify-between">
            <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
            <div className="p-4">
              <div className="w-72 bg-gray-300 h-10 rounded-md mb-2"></div>
              <div className="w-full bg-gray-300 h-20 rounded-md mb-2"></div>
              <div className="w-24 bg-gray-300 h-4 rounded-md mb-2"></div>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full h-[400px] border rounded-md mx-auto mt-10">
          <div className="animate-pulse flex-row h-full justify-between">
            <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
            <div className="p-4">
              <div className="w-72 bg-gray-300 h-10 rounded-md mb-2"></div>
              <div className="w-full bg-gray-300 h-20 rounded-md mb-2"></div>
              <div className="w-24 bg-gray-300 h-4 rounded-md mb-2"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!data || data.length === 0) return null;

  const SlideContent = ({ project }) => (
    <div className="mx-2 bg-[#fbfbfb] rounded-lg border h-full hover:transition hover:duration-200 hover:ease-out hover:shadow-2xl hover:scale-100">
      <img
        src={project?.thumbnail_image}
        className="h-[280px] md:h-[390px] object-cover w-full rounded-tl-lg rounded-tr-lg"
        width="350px"
        height="450px"
        loading="lazy"
        alt="Hcode work"
      />
      <div className="px-4 pt-2 pb-4">
        <div className="flex flex-wrap mb-3">
          {project.category.slice(0, 3).map((industry) => (
            <span
              key={industry.id}
              className="bg-blue-200 rounded-full px-4 py-2 text-xs text-primary mr-2 mt-2 font-semibold whitespace-nowrap"
            >
              {industry.name}
            </span>
          ))}
        </div>
        <h2 className="font-semibold text-2xl my-1">{project?.name}</h2>
        <p>{project?.homepage_description}</p>
      </div>
    </div>
  );

  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <div className="relative">
          <div className="new-container">
            <div className="overflow-hidden" ref={emblaRefDesktop}>
              <div className="flex">
                {data.map((project) => (
                  <div
                    key={project.id}
                    className="flex-[0_0_33.333%] min-w-0 pl-2 pr-2"
                  >
                    <SlideContent project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={scrollPrevDesktop}
            className="absolute left-0 md:left-4 top-1/3 z-10"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="text-primary bg-white shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
          </button>
          <button
            onClick={scrollNextDesktop}
            className="absolute right-0 md:right-4 top-1/3 z-10"
            aria-label="Next project"
          >
            <ChevronRightIcon className="text-primary bg-white shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="relative">
          <div className="new-container">
            <div className="overflow-hidden" ref={emblaRefMobile}>
              <div className="flex">
                {data.map((project) => (
                  <div key={project.id} className="flex-[0_0_100%] min-w-0 px-2">
                    <SlideContent project={project} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={scrollPrevMobile}
            className="absolute left-0 top-1/3 z-10"
            aria-label="Previous project"
          >
            <ChevronLeftIcon className="text-primary bg-white shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
          </button>
          <button
            onClick={scrollNextMobile}
            className="absolute right-0 top-1/3 z-10"
            aria-label="Next project"
          >
            <ChevronRightIcon className="text-primary bg-white shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CaseStudiesCard;
