import Navbar from "../../components/Navbar";
import { useState } from "react";
import { mvp_services, faq_mvp } from "../../constants/constants";
import { getTestimonialData } from "../../utils/config";
import { posts } from "../../constants/constants";
import { useEffect } from "react";
import { client } from "../../constants/constants";
import Client from "../../components/Client";
import Testimonial from "../../components/Testimonial";
import Accordion from "../../components/Accordion";
import CTA from "../../components/CTA";
import Mvpcards from "../../components/Mvpcards";
import Mvpbenifits from "../../components/Mvpbenifits";
import { ArrowRightIcon } from "@heroicons/react/solid";

function mvp1() {
  const data = getTestimonialData("mvp");
  const [isDesktop, setIsDesktop] = useState("");

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);
  }, []);

  function Blogs() {
    return (
      <div className="bg-white pt-5 pb-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-poppins text-[26px] font-semibold leading-8 sm:text-4xl">
              Blogs
            </h2>
          </div>
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:h-[700px] ">
            {posts.map((post) => (
              <a href={post.href}>
                <article
                  key={post.id}
                  className="flex flex-col items-start  hover:scale-105"
                >
                  <div className="relative  w-full">
                    <img
                      src={post.imageUrl}
                      alt="currently ofline"
                      className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] lg:h-[300px]"
                    />
                  </div>
                  <div className="max-w-xl">
                    <div className="group relative">
                      <h3 className="mt-3 text-[20px] font-semibold leading-6 text-gray-900 group-hover:text-primary">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-[17px] leading-6 text-gray-600 px-2 -ml-2">
                        {post.description}
                      </p>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="h-screen bg-gray-50  bg-mvp_bgimg_2 bg-no-repeat bg-cover">
        <div className="max-w-2xl sm:px-4 h-2/5 pt-[275px] sm:pt-64 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-bold text-4xl sm:text-7xl text-primary py-4 w-[95.33%] sm:w-[102%]">
            MVP Development Services
          </h1>
          <p className="font-poppins text-black text-[20px] px-5 sm:text-2xl font-medium py-3 leading-7 md:leading-10 ">
            Validate your business idea with a real-world beta test of your
            digital product, and launch smarter with HCode MVP development
            services.
          </p>

          <div className="text-center mt-10 sm:mt-10">
            <a
              href="/our_services"
              className="bg-primary text-white rounded px-16 py-4 text-center"
            >
              Tell us about your project
            </a>
          </div>
        </div>
      </section>

      <div className=" new-container pt-10 my-9">
        <Client
          logoWidth={250}
          logoHeight={100}
          data={client}
          slides={isDesktop}
        />
      </div>
      {/* our services */}
      {/* Greate MVP */}
      <section className="bg-[#F8F9FB] mt-24">
        <div className="new-container text-center mx-auto  py-16 ">
          <div className="max-w-xl mx-auto ">
            <div className="px-3 py-1 max-w-[10px] my-4 bg-blue-500 mx-auto"></div>
            <h2 className="font-semibold text-4xl my-4"> 
              Success of your product starts with a great MVP
            </h2>
            <p className="text-xl my-4">
              An MVP is a cost-effective way to test your idea. It has essential
              and unique features that showcase your product's value. Validate
              your hypothesis, optimize your resources, and get feedback before
              launching at scale.
            </p>
            <div className="text-center my-14">
              <a
                href="/our_services"
                className="bg-white text-primary  border-primary border-2 rounded px-16 py-4 text-center"
              >
                Tell us about your project
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="new-container pb-6  pt-16 ">
        <div className="bg-primary max-w-[20px] h-2 mx-auto mb-3"></div>

        <h1 className="  text-2xl  sm:text-4xl mx-auto text-center  font-poppins font-semibold max-w-[500px]">
          MVP Development Solutions at HCode
        </h1>
        <p className="   text-xl text-center mx-auto font-poppins font-normal pt-2 max-w-[700px]">
          We deliver exceptional ROI and clear timelines for your MVP, ensuring
          your success through our proven MVP as a Service approach.
        </p>
      </div>

      <div className=" new-container my-10 md:my-20 space-y-10">
        {/* 1st Card */}
        <div className="  grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
          <div className="col-span-12 md:col-span-1 h-20 w-20">
            <img
              className=""
              src="/assets/img/Group 574.svg"
              alt="MVP Design Services"
            />
          </div>
          <div className="col-span-12 md:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
            <h4 className=" font-poppins text-3xl  text-black font-semibold   ">
              MVP Design Services
            </h4>
            <p className=" font-poppins text-xl text-black font-normal leading-7  ">
              We transform product ideas into user-friendly prototypes,
              encompassing core feature definition, user-friendly interface
              design, and prototype development. Our MVP design services include
              comprehensive technology and business analysis, project
              requirements identification, feature prioritization, product
              development strategy, and UX/UI design and prototyping.
            </p>

            <a
              href="https://calendly.com/gaurav-tomar/30min"
              target="_blank"
              className=" text-lg flex items-center mt-2 w-50 text-gray-500 cursor-pointer hover:underline  "
            >
              Schedule a brief call
              <ArrowRightIcon className="w-6 md:ml-2  h-full text-gray-500" />
            </a>
          </div>
        </div>

        {/* 2nd Card */}
        <div className="  grid grid-cols-12  ease-in-out duration-500 hover:shadow-md md:px-10 hover:p-10 hover:scale-105 hover:border hover:rounded-lg ">
          <div className="col-span-12 md:col-span-1 h-20 w-20">
            <img
              className=""
              src="/assets/img/Group 573.svg"
              alt="MVP Design Services"
            />
          </div>
          <div className="col-span-12 md:col-span-11 mt-4 md:mt-0 space-y-3 md:space-y-5">
            <h4 className=" font-poppins text-3xl  text-black font-semibold   ">
              End-to-End Custom MVP Development
            </h4>
            <p className=" font-poppins text-xl text-black font-normal leading-7  ">
              HCode's MVP development services provide rapid delivery of
              high-quality MVPs, leveraging cutting-edge technologies to
              accelerate product launch. Our team of experts builds MVPs for
              web, mobile, and desktop platforms, offering comprehensive
              end-to-end development services from technology and business
              analysis to full product delivery.
            </p>

            <a
              href="https://calendly.com/gaurav-tomar/30min"
              target="_blank"
              className=" text-lg flex items-center mt-2 w-50 text-gray-500 cursor-pointer hover:underline  "
            >
              Schedule a brief call
              <ArrowRightIcon className="w-6 md:ml-2  h-full text-gray-500" />
            </a>
          </div>
        </div>
      </div>

      <section className="bg-[#F8F9FB] pt-[35px] sm:pt-16 ">
        <div className="bg-primary max-w-[20px] h-2 mx-auto "></div>

        <div className=" ">
          <Mvpbenifits additionalClass="lg:w-1/2" data={mvp_services} />
          {/*  */}
        </div>
      </section>

      {/* transform idea */}

      <div className="my-24  ">
        <CTA
          heading="Transform your ideas into reality with an MVP"
          paragraph="We can help you turn your ideas into successful MVPs that attract early adopters."
          buttonText="Tell us about your project"
          widthClass="lg:w-[70%]"
        />
      </div>

      <div className="  w-[100%] md:h-[720px] mt-10 mb-16  bg-mvp_transforn_idea bg-no-repeat  bg-left bg-cover">
        <div className="flex flex-col mt-10 text-white  sm:px-1 md:w-[635px] md:ml-[4%] lg:ml-[17%] px-[20px] sm:ml-[33px] sm:mr-[30%] sm:pt-[70px] py-[35px] sm:py-[20px]">
          <h1 className="font-poppins text-[29.6px] sm:text-4xl font-semibold leading-10">
            How We Develop MVP
          </h1>
          <h2 className="mt-8 font-poppins text-[20px] sm:text-2xl font-semibold leading-10">
            Discovery Meeting
          </h2>
          <p className="mt-3 font-poppins text-base font-normal leading-6">
            In the discovery phase, we conduct a thorough analysis of your
            business to gather key insights. This enables us to strategically
            prioritize MVP features that align with your vision.
          </p>

          <h2 className=" mt-8 font-poppins text-[20px] sm:text-2xl font-semibold leading-10">
            Desiging
          </h2>
          <p className=" mt-3 font-poppins text-base font-normal leading-6">
            Our innovative approach ensures that we prioritize your user's
            experience to design a modern MVP that solves real user problems.
          </p>

          <h2 className=" mt-8 font-poppins text-[20px] sm:text-2xl font-semibold leading-10">
            Development
          </h2>
          <p className="mt-3 font-poppins text-base font-normal leading-6">
            We ensure excellent results by utilizing the latest tech stack and
            implementing rigorous code review and development processes.
          </p>

          <h2 className="mt-8 font-poppins text-[20px] sm:text-2xl font-semibold leading-10">
            Release
          </h2>
          <p className="mt-3 font-poppins text-base font-normal leading-6">
            We ensure your product is launch-ready and performs as expected
            through real device testing and user insights.
          </p>
        </div>
      </div>

      <div className="mb-36 mt-16">
        <div className="bg-primary max-w-[20px] h-2 mx-auto mb-1"></div>

        <h1 className="font-poppins text-[28px] px-3 sm:text-[36px] text-black font-semibold  sm:leading-[79px] text-center">
          MVPs built by HCode
        </h1>
        <p className="font-poppins text-[17px] leading-[30px] px-3 text-black font-normal  text-center sm:w-[40%] mx-auto mb-6 ">
          We have delivered these high quality complete MVP products in very
          competitive timelines for our clients.
        </p>
        <Mvpcards />
      </div>

      <div className="py-20 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* blogs section  */}
      <div className="sm:new-container mt-3 ">
        <Blogs />
      </div>

      {/* FAQ */}
      <section className="bg-gray-100 lg:-mt-36">
        <Accordion data={faq_mvp} />
      </section>
      {/* CTA */}
      <div className="py-10 sm:py-0 sm:m-20">
        <CTA
          heading="Get your MVP built by Us"
          paragraph="Hire experienced MVP development team for your Startup Idea"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
}
export default mvp1;

const sectionHeader = ({ heading, paragraph }) => (
  <div>
    <h2>{heading}</h2>
    <p>{paragraph}</p>
  </div>
);
