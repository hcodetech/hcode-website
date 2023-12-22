import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import useGetFetch from "../pages/hooks/useGetFetch";
import { apiRoutes } from "../pages/api/APIRoutes";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function CaseStudiesCard({ data }) {
  
  const [portfolioData, isPortfolioDataLoading] = useGetFetch(
    getAPIUrl(apiRoutes.SHOW_HOMEPAGE_PROJECT)
  );
  return isPortfolioDataLoading ? (
    <div className="new-container grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="w-full h-[400px] border  rounded-md mx-auto mt-10">
        <div className=" animate-pulse flex-row h-full justify-between">
          <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
          <div className="p-4">
            <div className="w-52 bg-gray-300 h-10 rounded-md mb-2 "></div>
            <div className="w-full bg-gray-300 h-20 rounded-md mb-2 "></div>
            <div className="w-24 bg-gray-300 h-4 rounded-md mb-2 "></div>
          </div>
        </div>
      </div>
      <div className="hidden md:block w-full h-[400px] border  rounded-md mx-auto mt-10">
        <div className=" animate-pulse flex-row h-full justify-between">
          <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
          <div className="p-4">
            <div className="w-72 bg-gray-300 h-10 rounded-md mb-2 "></div>
            <div className="w-full bg-gray-300 h-20 rounded-md mb-2 "></div>
            <div className="w-24 bg-gray-300 h-4 rounded-md mb-2 "></div>
          </div>
        </div>
      </div>{" "}
      <div className=" hidden md:block w-full h-[400px] border  rounded-md mx-auto mt-10">
        <div className=" animate-pulse flex-row h-full justify-between">
          <div className="h-1/2 bg-gray-300 w-full mb-4"></div>
          <div className="p-4">
            <div className="w-72 bg-gray-300 h-10 rounded-md mb-2 "></div>
            <div className="w-full bg-gray-300 h-20 rounded-md mb-2 "></div>
            <div className="w-24 bg-gray-300 h-4 rounded-md mb-2 "></div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      {/* Desktop */}
      <div className="hidden md:block">
        <CarouselProvider
          visibleSlides={3}
          totalSlides={portfolioData.length}
          step={1}
          // naturalSlideWidth={400}
          // naturalSlideHeight={500}
          isIntrinsicHeight
          infinite
          interval={4000}
          isPlaying
          lockOnWindowScroll
          playDirection="forward"
        >
          <div className="relative">
            <div className="new-container">
              <Slider>
                {/* <div className="grid grid-cols-12 "> */}
                {portfolioData?.map((project) => (
                  <Slide>
                    <div
                      className="mx-2 bg-[#fbfbfb] rounded-lg border h-full hover:transition hover:duration-200 hover:ease-out hover:shadow-2xl hover:scale-100"
                      index={project.id}
                      key={project.id}
                    >
                      <img
                        src={project?.thumbnail_image}
                        className="h-[280px] md:h-[390px]   object-cover w-full rounded-tl-lg rounded-tr-lg"
                        width='350px'
                        height='450px'
                        loading="lazy"
                        alt='Hcode work'
                      />
                      <div className=" px-4 pt-2 pb-4 ">
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
                        <h2 className="font-semibold text-2xl my-1">
                          {project?.name}
                        </h2>
                        <p>{project?.homepage_description}</p>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>

            <ButtonBack>
              <ChevronLeftIcon className="  text-primary bg-white shadow-md absolute left-0 md:left-4 bottom-2/3 rounded-full w-8 h-8   hover:shadow-lg " />
            </ButtonBack>
            <ButtonNext>
              <ChevronRightIcon className="  text-primary bg-white shadow-md absolute right-0 md:right-4 bottom-2/3 rounded-full w-8 h-8   hover:shadow-lg " />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
      {/* Mobile */}
      <div className="md:hidden">
        <CarouselProvider
          visibleSlides={1}
          totalSlides={portfolioData.length}
          step={1}
          // naturalSlideWidth={400}
          // naturalSlideHeight={500}
          isIntrinsicHeight
          infinite
          interval={4000}
          isPlaying
          lockOnWindowScroll
          playDirection="forward"
        >
          <div className="relative">
            <div className="new-container">
              <Slider>
                {/* <div className="grid grid-cols-12 "> */}
                {portfolioData?.map((project) => (
                  <Slide>
                    <div
                      className="mx-2 bg-[#fbfbfb] rounded-lg border h-full hover:transition hover:duration-200 hover:ease-out hover:shadow-2xl hover:scale-100"
                      index={project.id}
                      key={project.id}
                    >
                      <img
                        src={project?.thumbnail_image}
                        className="h-[280px] md:h-[390px]   object-cover w-full rounded-tl-lg rounded-tr-lg"
                        alt='case studies'
                        width='350px'
                        height='400px'
                        loading='lazy'
                      />
                      <div className=" px-4 pt-2 pb-4 ">
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
                        <h2 className="font-semibold text-2xl my-1">
                          {project?.name}
                        </h2>
                        <p>{project?.homepage_description}</p>
                      </div>
                    </div>
                  </Slide>
                ))}
              </Slider>
            </div>

            <ButtonBack>
              <ChevronLeftIcon className="  text-primary bg-white shadow-md absolute left-0 md:left-4 bottom-2/3 rounded-full w-8 h-8   hover:shadow-lg " />
            </ButtonBack>
            <ButtonNext>
              <ChevronRightIcon className="  text-primary bg-white shadow-md absolute right-0 md:right-4 bottom-2/3 rounded-full w-8 h-8   hover:shadow-lg " />
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default CaseStudiesCard;
