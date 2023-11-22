import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";
import { blog_data } from "../constants/constants";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Mvpcards({ data }) {
  return (
    
    
      <div className="hidden md:block">
        <CarouselProvider
          visibleSlides={2}
          totalSlides={blog_data.length}
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
                {blog_data?.map((project) => (
                  <Slide>
                    <div
                      className="mx-2 bg-[#fbfbfb] rounded-lg border h-full hover:transition hover:duration-200 hover:ease-out hover:shadow-2xl hover:scale-100"
                      index={project.id}
                      key={project.id}
                    >
                      <img
                        src={project.image}
                        className="h-[280px] md:h-[390px]   object-cover w-full rounded-tl-lg rounded-tr-lg"
                        width="350px"
                        height="450px"
                        loading="lazy"
                        alt="Hcode work"
                      />
                      <div className=" px-4 pt-2 pb-4 ">
                        <h2 className="font-semibold text-2xl my-1">
                          {project.heading}
                        </h2>
                        <p>{project?.descripition}</p>
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
    
     
    
  )
  
}

export default Mvpcards;
