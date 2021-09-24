import { ArrowRightIcon } from "@heroicons/react/solid";
function Consumer_Card({ data }) {
  return (
    <div className={` ${data.card_color} grid grid-cols-2 p-16 bg-showcase_mobile h-[550px] pr-16`}>
      <div>
        <h1 className="font-semibold text-4xl">{data.heading}</h1>
        <p className="mt-2">
          {data.paragraph}
        </p>
        <div className="mt-5">
          <a
            href="/about"
            className="pb-1 border-b inline-flex border-blue-600 hover:scale-100  cursor-pointer text-blue-600"
          >
            Learn More
            <ArrowRightIcon className="w-6 ml-2 " />
          </a>
        </div>
        <div className={''}>
          <p>{data.highlight}</p>
        </div>

      </div>
      <div className="">
        <div className="relative h-[500px] w-full ">

        </div>
      </div>
    </div>
  );
}

export default Consumer_Card;
