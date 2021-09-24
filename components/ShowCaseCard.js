import { ArrowRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
function ShowCaseCard() {
  
  return (
    <div className="bg-blue-200 grid grid-cols-2 p-16 bg-showcase_mobile h-[550px] pr-16">
      <div>
        <h1 className="font-semibold text-4xl">Fintech</h1>
        <p className="mt-2">
          More than 40% of our clients have been from Fintech across New York
          and India. We have worked with enterprises with big data and analytics
          needs, as well as with startups to help make their products come to
          life.
        </p>
        <div className="mt-5">
          <a
           onMouseEnter={() => console.log("entering")}
           onMouseLeave={() => console.log("Checking")}
            href="/about"
            className="pb-1 border-b inline-flex border-blue-600 hover:scale-100  cursor-pointer text-blue-600"
          >
            Project Name
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>


        
      </div>
      <div className="">
      <div className="relative h-[500px] w-full ">
              <Image
                src="/assets/img/showcase_demo_image.png"
                layout="fill"
              />
            </div>
      </div>
    </div>
  );
}

export default ShowCaseCard;
