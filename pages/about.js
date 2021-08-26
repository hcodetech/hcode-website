import Head from "next/head";
import Image from "next/image";
import ServicesCard from "../components/ServicesCard";
import Team from "../components/Team";
import { TEAM } from "../constants/constants";
function about() {
  return (
    <>
      <Head>
        <title>About Us | Hcode Techonolgies </title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="container px-2 sm:px-0 sm:mx-auto">
        <div className="text-center font-poppins sm:w-10/12 md:w-10/12 xl:w-1/2  mx-auto py-4">
          <h6 className="pt-4 pb-2">About Us</h6>
          <h1 className="font-semibold text-3xl  md:text-5xl md:leading-tight">
            Offshore custom software development in India
          </h1>
          <p className="font-normal text-gray-900 py-4 ">
            Hcode works with People teams across the globe to turn employees
            into high performers, managers into leaders, and companies into the
            best places to work.
          </p>
        </div>
        <div className="max-w-screen-xl mx-auto pt-4">
          <div className="relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
              src="/assets/img/hcode_about_us_hero.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="bg-gray-50 pt-4">
          <div className="font-poppins sm:w-10/12 md:w-10/12 xl:w-1/2  mx-auto py-10  ">
            <h1 className=" text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
              It all started in 2018.
            </h1>
            <p className="font-normal mt-7 mb-5 leading-relaxed">
              We’re founded by engineers from IIT Delhi (Indian Ivy league
              university) with diverse experience ranging from entrepreneurs
              with successful exits to former executives of MNCs.
            </p>
            <p className="font-normal my-6 leading-relaxed  ">
              We are powered by a team of young and dynamic engineers with a
              strong proven record of building world class software for global
              clients. We’ve shipped quality code to xx clients ranging from
              Startups to Large Enterprises.
            </p>
          </div>
        </div>
        <div className="mx-auto md:px-10 grid grid-cols-12 gap-4 bg-gray-50 py-10">
          <div className="hidden md:inline-block md:col-span-4">
            <div className="relative h-[500px] w-full ">
              <Image
                src="/assets/img/hcode_about_us_vertical.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="col-span-full md:col-span-8">
            <div className="relative h-[500px]">
              <Image
                src="/assets/img/hcode_about_us_horizontal.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
        </div>
        <section className="py-10 mx-auto md:px-10">
          <h1 className=" font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
            Core Team
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-7">
            {TEAM.map(({ name, image, bio }, index) => (
              <Team key={index} name={name} image={image} bio={bio} />
            ))}
          </div>

          <button className="items-center px-4 py-2 rounded border border-blue-400 hover:bg-blue-600 transform transition duration-100 ease-out">
            Check Out Open Opportunities
          </button>
        </section>

        <section className="container mt-10 mx-auto">
          <div className="grid grid-cols-2">
            <div className="bg-blue-200 p-6  rounded-lg">
              <div className="w-3/4">
                <h2 className="text-3xl font-semibold">Inside Hcode</h2>
                <p>
                  We provide work-life balance and sports facilities on a
                  beautiful campus to ensure overall well-being of our
                  employees. This leads to a happy and productive work
                  environment for everybody. We offer our people the opportunity
                  to move ahead more rapidly than is possible at most other
                  places. Advancement depends on merit and we have yet to find
                  the limits to the responsibility our best people are able to
                  assume Located in a small city, employees get to enjoy the
                  countryside without having to compromise on their career.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10">
          <ServicesCard />
        </section>
      </div>
    </>
  );
}

export default about;
