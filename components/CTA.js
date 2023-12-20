import Link from 'next/link';
function CTA({ heading, paragraph, buttonText, widthClass }) {
  return (
    <div className="new-container ">
      <div className="grid grid-cols-12 bg-primary text-white rounded-lg bg-cta_circle bg-left bg-cover md:bg-contain bg-repeat-x py-10 ">
        <div
          className={`col-span-12 md:col-span-7  px-5 md:px-10 ${
            widthClass ?? 'lg:w-1/2'
          }`}
        >
          <h3 className="text-2xl font-semibold">
            {heading ?? 'Hire Dedicated Developers'}
          </h3>
          <p className=" text-lg mt-2">
            {paragraph ?? 'Get our top talent working for you right away'}
          </p>
        </div>
        <div className="col-span-12 md:col-span-5">
          <Link href="/contact">
            <button className="p-4 whitespace-nowrap ml-4 md:ml-10 md:mr-10 mt-6 cursor-pointer shadow rounded-sm bg-white text-primary px-10 hover:bg-gray-100 hover:shadow-lg hover:text-primary transform transition duration-75 ease-out md:float-right">
              {buttonText ?? 'Hire Now !!'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CTA;
