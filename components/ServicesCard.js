import Image from "next/image";
import { developer_as_service, team_as_service } from "../constants/constants";
function ServicesCard() {
  return (
    <div className="container sm:px-8  sm:mx-auto">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold py-2">Our Services</h1>
        <p className="pb-5">
          We are on a mission to help successful companies extend their tech
          capabilities. We help companies become innovation leaders by
          delivering on-demand software development teams and services to build
          impeccable digital products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[600px] 2xl:h-[700px]  hover:scale-95 active:scale-100  transform transition duration-100 ease-out">
          <Image
            src={team_as_service}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute text-white p-10">
            <h1 className=" text-4xl font-bold">Team as a Service</h1>
            <p className="mt-3 font-light text-xl opacity-80">
              Building bespoke solutions that make your business workflows
              faster and more efficient
            </p>
          </div>
        </div>
        <div className="relative h-[600px] 2xl:h-[700px]  hover:scale-95 active:scale-100  transform transition duration-100 ease-out">
          <Image
            src={developer_as_service}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="z-0"
          />
          <div className="absolute text-white p-10">
            <h1 className=" text-4xl font-bold">Developer as a Service</h1>
            <p className="mt-3 font-light text-xl opacity-80">
              Building bespoke solutions that make your business workflows
              faster and more efficient
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesCard;
