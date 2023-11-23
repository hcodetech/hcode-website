import Navbar from "../../components/Navbar";
import { useState } from "react";
import { mvp_services, faq_mvp } from "../../constants/constants";
import Client from "../../components/Client";
import Testimonial from "../../components/Testimonial";
import { getTestimonialData } from "../../utils/config";
import Accordion from "../../components/Accordion";
import CTA from "../../components/CTA";
import Mvpcards from "../../components/Mvpcards";
import { client } from "../../constants/constants";
import Mvpbenifits from "../../components/Mvpbenifits";
import { posts } from "../../constants/constants";
function mvp1() {
  const data = getTestimonialData("mvp");
  const [isDesktop, setIsDesktop] = useState("");

  function Blogs() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-poppins text-5xl font-semibold leading-10 sm:text-4xl">
              Blogs
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt="currently ofline"
                    className="aspect-[16/9] w-full  bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="h-screen  bg-mvp_bgimg bg-no-repeat bg-cover">
        <div className="max-w-2xl sm:px-4 h-2/5 pt-36 sm:pt-64 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-normal text-4xl sm:text-6xl text-white py-4 w-[95.33%] sm:w-10/12">
            MVP Development Services
          </h1>
          <p className="font-poppins text-white text-[20px] px-5 sm:text-2xl font-normal py-3 leading-7 md:leading-10 ">
            Validate your business idea with a real-world beta test of your
            digital product, and launch smarter with HCode MVP development
            services.
          </p>

          <div className="text-center mt-14 sm:mt-10">
            <a
              href="/our_services"
              className="bg-primary text-white rounded px-16 py-4 text-center"
            >
              Tell us about your project
            </a>
          </div>
        </div>
      </section>

      <div className=" new-container pt-10 my-8">
        <Client
          logoWidth={250}
          logoHeight={100}
          data={client}
          slides={isDesktop}
        />
      </div>

      <div className="box-border sm:w-6/12	mx-7 sm:mx-auto mt-24 mb-24">
        <h1 className=" text-2xl sm:text-5xl font-poppins font-semibold mb-5 text-center">
          SUCCESS OF YOUR PRODUCT STARTS WITH A GREAT MVP
        </h1>
        <p className="text-base font-poppins font-normal  leading-7 text-center">
          A minimum viable product (MVP) is a cost-effective and time-efficient
          approach to assess the potential of your idea. It comprises a
          well-balanced mix of essential and unique features that can showcase
          your product's distinctive value proposition. Demonstrate the
          feasibility of your concept to your investors and obtain valuable
          feedback from your target audience before scaling up with MVP
          development services. 
        </p>
        <p className="text-base font-poppins font-normal  leading-7 mt-6 text-center ">
          This approach enables you to validate your product hypothesis,
          optimize your resource utilization, and mitigate the risks associated
          with a full-scale product launch.
        </p>
      </div>
      {/* our services */}

      <div className="  bg-gray-100 pb-4">
        <h1 className="  text-3xl sm:text-5xl  font-poppins font-semibold px-8 pt-14 sm:pt-28 sm:ml-80">
          Our Services
        </h1>

        <div className=" new-container grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 mb-32 mt-24 gap-y-32 gap-x-7">
          <div className="bg-white px-3 sm:px-6 pb-6 sm:pr-20">
            <div className="bg-primary h-20 w-20 sm:h-28 sm:w-28 sm:pt-6 sm:pl-7 pl-[15.75px] pt-[14.5px] rounded-full -mt-12">
              <img
                className="w-12 h-12 sm:w-14 sm:h-14"
                src="/assets/img/mvp_design.svg"
                alt="icon"
              />
            </div>
            <p className="font-poppins text-xl sm:text-3xl text-black font-semibold  mt-4 mb-4 ">
              MVP DESIGN
            </p>
            <p className="font-poppins text-[16px] text-black font-normal leading-7 sm:leading-9">
              For MVP design, we offer thorough technology and business
              analysis, project requirements identification, feature
              prioritization, and product development strategy, as well as UX/UI
              design and prototyping services.
            </p>
          </div>

          <div className="bg-white  px-3 sm:px-6 pb-12">
            <div className="bg-primary h-20 w-20 sm:h-28 sm:w-28 p-[20px] sm:p-8 rounded-full -mt-12">
              <img className="" src="/assets/img/mvp_dev.svg" alt="icon" />
            </div>
            <p className="font-poppins text-xl sm:text-3xl text-black font-semibold  mt-4 mb-4 ">
              MVP Development
            </p>
            <p className="font-poppins text-[16px] text-black font-normal leading-7 sm:leading-9">
              Our end-to-end custom MVP development services cover everything
              from technology and business analysis, project requirements
              identification, feature prioritization, and product development
              strategy to UX/UI design and prototyping. We also provide full
              product development and delivery services to ensure your complete
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      <section className=" pt-9 ">
        <div className=" ">
          <Mvpbenifits additionalClass="lg:w-1/2" data={mvp_services} />
          {/*  */}
        </div>
      </section>

      <div className="mb-36 mt-20">
        <h1 className="font-poppins text-[28px] px-3 sm:text-[45px] text-black font-semibold  sm:leading-[79px] text-center">
          MVPs built by HCode
        </h1>
        <p className="font-poppins text-[17px] leading-[30px] px-3 text-black font-normal sm:leading-[45px] text-center mb-10 ">
          We have delivered these high quality complete MVP products in very
          competitive timelines for our clients.
        </p>
        <Mvpcards />
      </div>

      <div className="py-20 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* transform idea section */}
      <section className=" new-container flex flex-col mt-24">
        <div className="flex justify-between flex-col lg:flex-row  max-sm:mx-auto">
          <div>
            <h1 className="font-poppins text-[28px] sm:text-4xl font-semibold sm:leading-10 sm:w-[550px] pr-4">
              Transform your ideas into reality with an MVP
            </h1>
            <p className="font-poppins text-[16px] font-normal sm:leading-8 sm:w-[600px] pr-4 mt-2">
              We can help you turn your ideas into successful MVPs that attract
              early adopters.
            </p>
          </div>
          <div className="text-center mt-16 sm:mt-28">
            <a
              href="/our_services"
              className="bg-primary text-white rounded px-16 py-4    text-center"
            >
              Speak with our consultants
            </a>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row  mt-10 mb-16 ">
          <div className="mx-auto sm:mr-10">
            <img
              className=" lg:w-[700px] sm:h-[538px] "
              src="/assets/img/Rectangle 388.png"
              alt="imagee"
            />
          </div>
          <div className="mt-10">
            <h1 className="font-poppins text-4xl font-semibold leading-10">
              How We Develop MVP
            </h1>
            <h2 className="mt-5 font-poppins text-2xl font-semibold leading-10">
              Discovery Meeting
            </h2>
            <p className="mt-3 font-poppins text-sm font-normal leading-6">
              In the discovery phase, we conduct a thorough analysis of your
              business to gather key insights. This enables us to strategically
              prioritize MVP features that align with your vision.
            </p>

            <h2 className=" mt-3 font-poppins text-2xl font-semibold leading-10">
              Desiging
            </h2>
            <p className=" mt-3 font-poppins text-sm font-normal leading-6">
              Our innovative approach ensures that we prioritize your user's
              experience to design a modern MVP that solves real user problems.
            </p>

            <h2 className=" mt-3 font-poppins text-2xl font-semibold leading-10">
              Development
            </h2>
            <p className="mt-3 font-poppins text-sm font-normal leading-6">
              We ensure excellent results by utilizing the latest tech stack and
              implementing rigorous code review and development processes.
            </p>

            <h2 className="mt-3 font-poppins text-2xl font-semibold leading-10">
              Development
            </h2>
            <p className="mt-3 font-poppins text-sm font-normal leading-6">
              We ensure excellent results by utilizing the latest tech stack and
              implementing rigorous code review and development processes.
            </p>
          </div>
        </div>
      </section>

      {/* blogs section  */}
      <div className=" sm:new-container ">
        <Blogs />
      </div>

      {/* FAQ */}
      <section className="bg-gray-100">
        <Accordion data={faq_mvp} />
      </section>
      {/* CTA */}
      <div className="py-10 sm:py-0 sm:m-20">
        <CTA
          widthClass="w-full"
          heading="Get your MVP built by Us"
          paragraph="Hire experienced MVP development team for your Startup Idea"
          buttonText="Get in Touch"
        />
      </div>
    </>
  );
}
export default mvp1;
