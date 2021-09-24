import { ArrowRightIcon } from "@heroicons/react/solid";
function Consumer_Card({ data }) {
  return (
    <div className={`bg-yellow-100 grid md:grid-cols-2 bg-consumer_image px-4 py-8 md:p-16 md:h-[550px]  mb-20`}>
      <div className="">
        <h1 className="font-semibold text-2xl md:text-4xl">{data.heading}</h1>
        <p className="mt-2 text-sm md:text-base">
          {data.paragraph}
        </p>
        <div className="mt-5">
          <a
            href="https://www.youtube.com/watch?v=lXlcIHhD10Y"
            target="_blank"
            className="pb-1 border-b-2 border-black inline-flex  hover:scale-100  cursor-pointer "
          >
            See Video Demo
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
        <div className={'bg-yellow-400 md:w-3/4  md:p-4  mt-44 bottom-2'}>
          <p>{data.highlight}</p>
        </div>

      </div>
 
    </div>
  );
}

export default Consumer_Card;
