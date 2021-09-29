import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import {
  our_service,
} from "../constants/constants";
function ServicesCard({ heading }) {
  return (
    <div className="">
      {heading && (
        <div className="md:w-4/5 text-center mx-auto">
          <h1 className="text-4xl font-bold">{our_service.heading}</h1>
          <p className="pb-5 md:text-lg leading-normal font-light mt-4 md:w-4/5 mx-auto">
            {our_service.paragraph}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 ">
        <Link href="/our_services/team_as_a_service">
          <div className="relative  2xl:h-[700px]    transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer hover:opacity-95">
            <img
              src={our_service.team_as_service_image}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute top-0 text-white p-5 md:p-10">
              <h1 className=" text-3xl md:text-4xl font-semibold md:font-bold lg:w-1/2">{our_service.team_as_service_heading}</h1>
              <p className="mt-3 font-light md:text-xl opacity-80">
                {our_service.team_as_service_paragraph}
              </p>
              <div className=" mt-10">
                <a
                  href="/our_services/team_as_a_service"
                  className=" pb-1  border-b border-white inline-flex  cursor-pointer"
                >
                  Know More
                  <ArrowRightIcon className="w-6 ml-2 " />
                </a>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/our_services/developer_as_a_service">
          <div className="relative  2xl:h-[700px]    transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer hover:opacity-95">
            <img
              src={our_service.developer_as_service_image}
              layout="fill"
              className="object-cover"
            />
            <div className="absolute top-0 text-white p-5 md:p-10">
              <h1
                className="text-3xl md:text-4xl font-semibold md:font-bold lg:w-1/2"
              >
                {our_service.developer_as_service_heading}
              </h1>
              <p
                className="mt-3 font-light md:text-xl opacity-80"
              >
                {our_service.developer_as_service_paragraph}
              </p>
              <div className=" mt-10">
                <a
                  href="/our_services/team_as_a_service"
                  className=" pb-1  border-b border-white inline-flex  cursor-pointer"
                >
                  Know More
                  <ArrowRightIcon className="w-6 ml-2 " />
                </a>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ServicesCard;
