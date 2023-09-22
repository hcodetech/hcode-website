import { ArrowRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { our_service } from "../constants/constants";
function ServicesCard({ heading }) {
  return (
    <div className="">
      {heading && (
        <div className="md:w-4/5 text-center mx-auto">
          <h2 className="text-4xl font-bold">{our_service.heading}</h2>
          <p className="pb-5 md:text-lg leading-normal font-light mt-4 md:w-4/5 mx-auto">
            {our_service.paragraph}
          </p>
        </div>
      )}

      <div className="grid grid-cols-12 gap-4 ">
        {/* Taas */}
        <div className="col-span-12 md:col-span-4">
          <Link href="/our_services/developer_as_a_service">
            <div className="bg-daas bg-no-repeat bg-cover  min-h-[300px] 2xl:h-[400px]    transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer ">
              <div className=" text-white p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold md:font-bold">
                  {our_service.developer_as_service_heading}
                </h1>
                <p className="mt-3 font-light md:text-xl ">
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

        {/* Daas */}
        <div className="col-span-12 md:col-span-8">
          <Link href="/our_services/team_as_a_service">
            <div className="bg-taas bg-no-repeat bg-cover bg-center  min-h-[300px] 2xl:h-[400px] h-full    transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer ">
              <div className=" text-white p-8 md:p-10">
                <h1 className=" text-3xl md:text-4xl font-semibold md:font-bold lg:w-1/3">
                  {our_service.team_as_service_heading}
                </h1>
                <p className="mt-3 font-light md:text-xl ">
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
        </div>
        {/* MVP */}
        <div className="col-span-12 md:col-span-7">
          <Link href="/our_services/mvp">
            <div className="bg-mvp bg-no-repeat bg-left bg-cover  min-h-[300px] 2xl:h-[400px] h-full   transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer hover:opacity-95">
              <div className=" text-black p-8 md:p-10">
                <h1 className=" text-3xl md:text-4xl font-semibold md:font-bold lg:w-3/4">
                  {our_service.mvp_heading}
                </h1>
                <p className="mt-3 font-light md:text-xl  w-3/5">
                  {our_service.mvp_paragraph}
                </p>
                <div className=" mt-10">
                  <a
                    href="/our_services/mvp"
                    className=" pb-1  border-b border-black inline-flex  cursor-pointer"
                  >
                    Know More
                    <ArrowRightIcon className="w-6 ml-2 " />
                  </a>
                </div>
              </div>
            </div>
          </Link>
        </div>
          {/* Blockchain */}
          <div className="col-span-12 md:col-span-5">
          <Link href="/our_services/blockchain">
            <div className="bg-blockchain_small md:bg-blockchain bg-[#323941] bg-no-repeat bg-right lg:bg-cover  min-h-[300px] 2xl:h-[400px] h-full   transform transition duration-100 ease-out mb-5 md:mb-0 cursor-pointer hover:opacity-95">
              <div className=" text-white p-8 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold md:font-bold">
                  {our_service.blockchain_heading}
                </h1>
                <p className="mt-3 font-light md:text-xl opacity-80">
                  {our_service.blockchain_paragraph}
                </p>
                <div className=" mt-10">
                  <a
                    href="/our_services/blockchain"
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
    </div>
  );
}

export default ServicesCard;
