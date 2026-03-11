import { ArrowRightIcon } from "@heroicons/react/24/solid";
function EnterpriseCard({ data }) {
  return (
    <div className={`bg-[#87A9A6] grid md:grid-cols-2 lg:bg-enterprise_image bg-no-repeat bg-right px-4 py-8 md:p-16 md:h-[550px]  mb-20`}>
      <div className="">
        <h2 className="font-semibold text-2xl md:text-4xl">{data.heading}</h2>
        <p className="mt-2 text-sm md:text-base">
          {data.paragraph}
        </p>
        <div className="mt-5">
          <a
            href="https://www.youtube.com/watch?v=Pi1gdUhzhdk" 
            target="_blank"
            className="pb-1 border-b-2 border-black inline-flex  hover:scale-100  cursor-pointer "
          >
            See Video Demo
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
        <div className={'bg-[#476866] text-white md:w-3/4 p-2 md:p-4  mt-44 bottom-2'}>
          <p>{data.highlight}</p>
        </div>
      </div>
    </div>
  );
}

export default EnterpriseCard;
