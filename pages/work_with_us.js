import Head from "next/head";
import { ArrowRightIcon } from "@heroicons/react/solid";
import {
  faq_hiring,
  hiring_process,
  karnal,
  OUR_MENTORS,
  remote,
  TEAM,
  what_we_do,
  work_with_us_1,
  work_with_us_2,
  work_with_us_3,
  work_with_us_benefits,
  work_with_us_content,
  work_with_us_recuriter_image,
} from "../constants/constants";
import ImageCarousel from "../components/ImageCarousel";
import Benefits from "../components/Benefits";
import Accordion from "../components/Accordion";
import Team from "../components/Team";

function work_with_us() {
  return (
    <>
      <Head>
        <title>Work With Us | Hcode Techonolgies</title>
      </Head>
      {/* Hero Section */}
      <section className="relative bg-no-repeat bg-contain ">
        <div className="new-container  grid grid-cols-1 lg:grid-cols-2  ">
          <div className="py-10 md:py-24 md:pr-32 mt-20">
            <h1 className="text-3xl lg:text-4xl font-semibold">
              {work_with_us_content.hero_heading}
            </h1>
            <p
              className="py-5 text-lg font-light"
              dangerouslySetInnerHTML={{
                __html: work_with_us_content.hero_paragraph,
              }}
            />
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
              target="_blank"
              className="primary-outline "
            >
              See Open Positions
            </a>

            <p className="mt-8 ">
              Connect with the HR:{" "}
              <a
                className="text-primary underline"
                href="mailto:hr@hcode.tech"
                target="_blank"
              >
                hr@hcode.tech
              </a>
            </p>
          </div>
          <div className="relative sm:h-[322px] w-full lg:w-[558px] lg:mt-28 ">
            <img
              src={work_with_us_1}
              layout="fill"
              className="rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
        <div className="hidden  lg:grid grid-cols-12 -mt-48">
          <div className="col-start-5 col-end-10 relative sm:h-[322px] w-[500px] mt-12 ">
            <img
              src={work_with_us_2}
              layout="fill"
              className="rounded-lg  shadow-xl object-cover"
            />
          </div>
          <div className="col-start-10 col-end-12 relative sm:h-[322px] w-[256px] ">
            <img
              src={work_with_us_3}
              layout="fill"
              className="rounded-lg  shadow-xl object-cover"
            />
          </div>
        </div>
      </section>
      {/* Campus Overview */}
      <section className="new-container mt-10">
        <div className="sm:mt-10">
          <h1 className="text-4xl  font-semibold font-poppins">
            {work_with_us_content.campus_heading}
          </h1>
        </div>
        <p
          className="mt-4 md:w-3/4 leading-snug font-light text-lg"
          dangerouslySetInnerHTML={{
            __html: work_with_us_content.campus_paragarph,
          }}
        />

        <div className="grid sm:grid-cols-2 md:w-3/4 pt-10">
          <div className="">
            <img src={karnal} alt="" />
            <h4 className="text-xl font-semibold py-2">Karnal</h4>
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs?q=&l=Karnal%2C+Haryana#cmp-skip-header-desktop"
              target="_blank"
              className="pb-1 border-b inline-flex border-black hover:scale-100  cursor-pointer opacity-50 hover:opacity-100"
            >
              See positions in Karnal, India
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
          <div className="mt-8 sm:mt-0">
            <img src={remote} alt="" />
            <h4 className="text-xl font-semibold  py-2">Remote</h4>
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs?q=&l=Remote#cmp-skip-header-desktop"
              target="_blank"
              className="pb-1 border-b inline-flex border-black hover:scale-100  cursor-pointer opacity-50 hover:opacity-100"
            >
              See positions in Remote
              <ArrowRightIcon className="w-6 ml-2 " />
            </a>
          </div>
        </div>
      </section>
      {/* Image Carousel */}
      <div className="py-10 md:py-4">
        <ImageCarousel />
      </div>
      {/* What we offer */}
      <section className="new-container bg">
        <h1 className="font-semibold text-5xl mt-2 mb-4">What we offer</h1>
        <div className="grid grid-cols-12">
          {what_we_do.map((item, index) => (
            <div className="col-span-12 mb-7 md:mb-0 md:col-span-6" key={index}>
              <img src={item.img} alt={item.heading} />
              <h2 className="font-semibold text-2xl mt-3">{item.heading}</h2>
              <ul className="list-disc list-inside mt-2">
                {item.points.map((li, index) => (
                  <li key={index}>{li.point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      {/* Benefits */}
      <section className="my-20 bg-gray-100">
        <Benefits data={work_with_us_benefits} />
      </section>
      {/* Hiring Process */}
      <section className="new-container">
        <div className="text-center sm:w-1/2 mx-auto">
          <h1 className="text-4xl font-semibold">Our hiring process</h1>
          <p className="mt-2 mb-5 font-light">
            We have a 5-step hiring process that generally takes about 2-4 weeks
            from application to offer letter.
          </p>
        </div>
        <div className="mx-auto md:w-1/2 mb-10">
          {hiring_process.map(({ image, heading, descripition }, index) => (
            <div className="md:flex mb-10" key={index}>
              <div className="min-w-[64px] max-w-[64px] min-h-[64px] max-h-[64px] bg-blue-200  rounded-full">
                <img src={image} layout="fill" />
              </div>
              <div className="mt-3 md:mt-0 md:ml-4">
                <h2 className="font-semibold text-xl">{heading}</h2>
                <p className="font-light">{descripition}</p>
              </div>
            </div>
          ))}
          <div className="text-center">
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
              target="_blank"
              className="primary-button text-ce"
            >
              See All Open Positions
            </a>
          </div>
        </div>
      </section>
      {/* Core Team  */}
      <section className="pt-20  text-center">
        <div className="lg:new-container">
          <h1 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
            Our Mentors
          </h1>
          <p className="px-10 md:px-0 md:w-3/4 mx-auto mt-2">
            Learning & Development is an important part of the culture at HCode.
            Our online & offline weekly learning sessions by our experienced
            mentors are there to make sure that our people get the best learning
            experience in different dimensions to propel them in personal and
            professional life.
          </p>
          <div className="flex-wrap flex justify-between mt-7 w-3/4 mx-auto">
            {OUR_MENTORS.map(({ name, image, bio, link, title }, index) => (
              <Team
                key={index}
                name={name}
                image={image}
                bio={bio}
                link={link}
                title={title}
              />
            ))}
          </div>
          <div></div>
        </div>
      </section>
      {/* FAQ */}
      <div className="text-center bg-gray-100  md:my-20">
        <Accordion data={faq_hiring} />
      </div>

      {/* Are your Recuriter */}
      <section className="new-container pt-0 pb-10">
        <div className="grid md:grid-cols-2">
          <img
            src={work_with_us_recuriter_image}
            layout="fill"
            className="rounded-lg"
          />
          <div className="my-4 md:my-auto md:w-4/5 ml-3">
            <h1 className="text-3xl md:text-4xl font-semibold">
              Connect with the HR
            </h1>
            <p className="text-base md:text-lg mt-2 mb-8">
              Are you a Candidate exploring working options with us or a
              Recruiter who can help us with our hiring needs.
            </p>
            <a
              href="mailto:hr@hcode.tech"
              target="_blank"
              className="primary-button text-ce"
            >
              Write to HR
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default work_with_us;
