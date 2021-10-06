import React from 'react';
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { testimonial } from '../constants/constants';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";


function Testimonial() {
    return (
        <CarouselProvider
            visibleSlides={1}
            totalSlides={testimonial.length}
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
            <div class="relative">
                <section className="new-container bg-blue-100 py-12">
                    <Slider >
                        {testimonial.map((message, index) => (
                            <Slide index={message.id} key={index}>
                                <div className="bg-blue-600 rounded-md p-10 text-white">
                                    <div className="flex">
                                        <img
                                            src={message.profile_image}
                                            alt={message.person_name}
                                            className="rounded-full w-12 h-12" />
                                        <div className="ml-3">
                                            <h5 className="font-semibold">
                                                {message.person_name}
                                            </h5>
                                            <p className="font-light text-sm opacity-70">
                                                {message.company_name}
                                            </p>
                                        </div>
                                    </div>
                                    <h1 className="font-light text-2xl mt-4">
                                        {message.testimonial_paragraph}
                                    </h1>
                                </div>
                            </Slide>
                        ))}
                    </Slider>
                </section>
                <ButtonBack >
                    <div className="bg-black absolute left-0 bottom-1/2 opacity-20 hover:opacity-80">
                        <ChevronLeftIcon className="w-8 h-10  text-white" />
                    </div>

                </ButtonBack>
                <ButtonNext>
                    <div className="bg-black absolute right-0 bottom-1/2 opacity-20 hover:opacity-80 ">
                        <ChevronRightIcon className="w-8 h-10 text-white " />
                    </div>
                </ButtonNext >
            </div>
        </CarouselProvider>


    )
}

export default Testimonial
