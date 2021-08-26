import Head from "next/head";
import Image from "next/image";
import {
  work_with_us_1,
  work_with_us_2,
  work_with_us_3,
  work_with_us_blue_circle,
} from "../constants/constants";

function work_with_us() {
  return (
    <>
      <Head>
        <title>Work With Us | Hcode Techonolgies</title>
      </Head>
      <section className="relative bg-work_with_us_hero bg-no-repeat bg-contain">
        <div className="container px-2 pb-40 sm:px-0 sm:mx-auto  grid grid-cols-2">
          <div className="p-32">
            <h1 className="text-4xl font-semibold">
              Help build engaged, high-performing teams — including ours
            </h1>
            <p>
              Hcode works with People teams across the globe to turn employees
              into high performers, managers into leaders, and companies into
              the best places to work.
            </p>
            <button className="bg-white mt-4 p-4 border border-blue-400">
              See Open Position
            </button>
          </div>

          <div className="">
            <div className="relative h-[322px] w-[558px] ">
              <Image
                src={work_with_us_1}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="relative h-[322px] w-[424px]">
                <Image
                  src={work_with_us_2}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative h-[322px] w-[256px]">
                <Image
                  src={work_with_us_3}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-10 container px-2 sm:px-0 sm:mx-auto">
        <div>
          <h1 className="text-4xl  font-semibold">Life at Hcode </h1>
          <p>
          We invest in the personal and professional growth of every Hcode (member of our team) because we believe growth leads to both business impact and personal fulfillment.
          </p>
        </div>
      </section>
    </>
  );
}

export default work_with_us;
