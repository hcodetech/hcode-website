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
          <p className="pb-5 text-lg leading-normal font-light mt-4 w-4/5 mx-auto">
            {our_service.paragraph}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/our_services">
        <div className="relative h-[600px] 2xl:h-[700px]  hover:scale-95 active:scale-100  transform transition duration-100 ease-out">
          <img
            src={our_service.developer_as_service_image}
            layout="fill"
            className="object-cover"
          />
          <div className="absolute top-0 text-white p-10">
            <h1 className=" text-3xl md:text-4xl font-semibold md:font-bold lg:w-1/2">{our_service.team_as_service_heading}</h1>
            <p className="mt-3 font-light md:text-xl opacity-80">
              {our_service.team_as_service_paragraph} 
            </p>
          </div>
        </div>
          </Link>
          <Link href="/our_services">
        <div className="relative h-[600px] 2xl:h-[700px]  hover:scale-95 active:scale-100  transform transition duration-100 ease-out">
          <img
            src={our_service.team_as_service_image}
            layout="fill"
            className="object-cover"
          />
          <div className="absolute top-0 text-white p-10">
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
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default ServicesCard;
