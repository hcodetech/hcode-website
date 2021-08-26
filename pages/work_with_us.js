import Head from "next/head";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/solid";
import {
  work_with_us_1,
  work_with_us_2,
  work_with_us_3,
} from "../constants/constants";
import ImageCarousel from "../components/ImageCarousel";
import Benefits from "../components/Benefits";

function work_with_us() {
  return (
    <>
      <Head>
        <title>Work With Us | Hcode Techonolgies</title>
      </Head>
      <section className="relative bg-work_with_us_hero bg-no-repeat bg-contain">
        <div className="container px-2  sm:px-0 sm:mx-auto  grid grid-cols-1 lg:grid-cols-2 ">
          <div className="p-8 lg:p-16 xl:p-32 xl:pb-0">
            <h1 className="text-2xl lg:text-4xl font-semibold">
              Help build engaged, high-performing teams — including ours
            </h1>
            <p>
              Hcode works with People teams across the globe to turn employees
              into high performers, managers into leaders, and companies into
              the best places to work.
            </p>
            <button className="bg-white mt-4 p-4 border border-blue-400">
              See Open Position
            </button>
          </div>
          <div className="relative h-[322px] w-[558px] mt-16 rounded-lg ">
            <Image
              src={work_with_us_1}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-2 gap-8">
            <div className="relative h-[322px] w-[424px]">
              <Image
                src={work_with_us_2}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="relative h-[322px] w-[256px]">
              <Image
                src={work_with_us_3}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container mt-20 px-32 sm:mx-auto">
        <h1 className="text-4xl  font-semibold">Life at Hcode </h1>
        <p className="mt-4 w-1/2 leading-snug">
          We invest in the personal and professional growth of every Hcode
          (member of our team) because we believe growth leads to both business
          impact and personal fulfillment.
        </p>
        <div className="grid grid-cols-2 md:w-3/4 py-10">
          <div className="">
            <h4 className="text-xl font-semibold py-2">Karnal</h4>
            <a className="pb-1 border-b inline-flex border-black hover:scale-100  cursor-pointer">
              See positions in Karnal, India
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
          <div className="">
            <h4 className="text-xl font-semibold  py-2">Remote</h4>
            <a className="pb-1 border-b inline-flex border-black hover:scale-100  cursor-pointer">
              See positions in Remote
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
        </div>
      </section>
      {/* Image Carousel TODO */}
      <ImageCarousel />

      <section className="mt-10 grid grid-cols-2">
        <div className="bg-blue-200 p-32">
          <h1 className="text-4xl">Why Karnal ? Why Not Karnal ?</h1>
          <p className="leading-normal">
            We invest in the personal and professional growth of every Hcode
            (member of our team) because we believe growth leads to both
            business impact and personal fulfillment.
          </p>
        </div>
        <div className="relative h-full w-full">
          <Image
            src={work_with_us_2}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </section>
      {/* Benefits Carousel TODO */}
      <section className="">
        <Benefits background={true} />
      </section>
      {/* Hiring Process */}
      <section className="container mt-10 px-16 sm:mx-auto">

      </section>
    </>
  );
}

export default work_with_us;
