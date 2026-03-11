import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

function Testimonial({ data }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 10000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (!data || data.length === 0) return null;

  return (
    <>
      <h3 className="text-2xl md:text-4xl font-semibold text-center pb-2 capitalize">
        What Clients say about us
      </h3>
      <div className="relative">
        <div className="new-container pt-6 pb-2">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {data.map((message, index) => (
                <div key={message.id || index} className="flex-[0_0_100%] min-w-0">
                  <div className="p-1 sm:p-10">
                    <div className="md:flex">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={message.profile_image_webp}
                          media="(min-width:250px)"
                        />
                        <img
                          src={message.profile_image}
                          alt={message.person_name}
                          className="rounded w-[280px] h-[320px] md:min-w-[320px] lg:h-[400px] object-cover"
                          loading="lazy"
                          height="400px"
                          width="300px"
                        />
                      </picture>

                      <div>
                        <div className="md:ml-10 mt-4 md:mt-0">
                          <h4 className="font-semibold text-2xl">
                            {message.person_name}
                          </h4>
                          <p className="font-regular text-sm opacity-50 pt-1">
                            {message.company_name}
                          </p>
                          <p
                            className="text-lg mt-4 border-t border-black pt-3 lg:leading-loose tracking-tight"
                            dangerouslySetInnerHTML={{
                              __html: message.testimonial_paragraph,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={scrollPrev}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10"
          aria-label="Previous testimonial"
        >
          <ChevronLeftIcon className="bg-white text-primary shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10"
          aria-label="Next testimonial"
        >
          <ChevronRightIcon className="text-primary bg-white shadow-md rounded-full w-8 h-8 hover:shadow-lg" />
        </button>
      </div>
    </>
  );
}

export default Testimonial;
