import { ArrowRightIcon } from "@heroicons/react/solid";
function FintechCard({ data }) {
  return (
    <div className={`bg-gray-100 grid md:grid-cols-2 lg:bg-fintech bg-no-repeat bg-right px-4 py-8 md:p-16 md:h-[550px]  mb-20`}>
      <div className="">
        <h1 className="font-semibold text-2xl md:text-4xl">{data.heading}</h1>
        <p className="mt-2 text-sm md:text-base">
          {data.paragraph}
        </p>
        {/* <div className="mt-5">
          <a
            href="/about"
            className="pb-1 border-b-2 border-black inline-flex  hover:scale-100  cursor-pointer "
          >
            Learn More
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div> */}
        <div className={'bg-gray-400 md:w-3/4 p-2 md:p-4  mt-44 bottom-2'}>
          <p>{data.highlight}</p>
        </div>
      </div>
    </div>
  );
}

export default FintechCard;
