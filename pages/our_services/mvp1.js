import Navbar from "../../components/Navbar";
import { useState } from "react";
import { mvp_benefits, mvp_services, faq_mvp } from "../../constants/constants";
import Benefits from "../../components/Benefits";
import Client from "../../components/Client";
import Testimonial from "../../components/Testimonial";
import { getTestimonialData } from "../../utils/config";
import Accordion from "../../components/Accordion";
import CTA from "../../components/CTA";
import CaseStudiesCard from "../../components/CaseStudiesCard";
import { client } from "../../constants/constants";
function mvp1() {
  const data = getTestimonialData("mvp");
  const [isDesktop, setIsDesktop] = useState("");
  const posts = [
    {
      id: 1,
      title: "Boost your conversion rate",
      href: "#",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
      date: "Mar 16, 2020",
      datetime: "2020-03-16",
      category: { title: "Marketing", href: "#" },
      author: {
        name: "Michael Foster",
        role: "Co-Founder / CTO",
        href: "#",
        imageUrl:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];
  function Example() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Blogs
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
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
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
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
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-100"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
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
        <div className="max-w-2xl px-4 h-2/5 pt-64 mx-auto flex  flex-col items-center	text-center">
          <h1 className="font-normal text-6xl text-white py-4 w-10/12">
            MVP Development Services
          </h1>
          <p className="font-poppins text-white text-2xl font-normal py-4 leading-10 ">
            Validate your business idea with a real-world beta test of your
            digital product, and launch smarter with HCode MVP development
            services.
          </p>
          <div className="w-64  py-4 bg-primary text-white mt-10 rounded">
            <button className="text-xl">Tell us about your project</button>
          </div>
        </div>
      </section>

      <div className=" new-container pt-10">
        <Client
          logoWidth={250}
          logoHeight={100}
          data={client}
          slides={isDesktop}
        />
      </div>

      <div className="box-border w-7/12	 mx-auto mt-20 mb-14">
        <h1 className=" text-5xl font-poppins font-semibold mb-5">
          SUCCESS OF YOUR PRODUCT STARTS WITH A GREAT MVP
        </h1>
        <p className="text-base font-poppins font-normal  leading-7">
          A minimum viable product (MVP) is a cost-effective and time-efficient
          approach to assess the potential of your idea. It comprises a
          well-balanced mix of essential and unique features that can showcase
          your product's distinctive value proposition. Demonstrate the
          feasibility of your concept to your investors and obtain valuable
          feedback from your target audience before scaling up with MVP
          development services. <br></br> This approach enables you to validate
          your product hypothesis, optimize your resource utilization, and
          mitigate the risks associated with a full-scale product launch.
        </p>
      </div>
      <div className="  bg-gray-100 pb-4">
        <h1 className=" text-5xl  font-poppins font-semibold pt-28 ml-80">
          Our Services
        </h1>

        <div className=" new-container grid  grid-cols-2 grid-rows-2 mb-32 mt-24 gap-y-32 gap-x-7">
          <div className="bg-white px-6 pb-16">
            <div className="bg-primary h-20 w-20 p-4 rounded-full -mt-9">
              <img src="/assets/img/consulting.png" alt="icon" />
            </div>
            <p className="font-poppins text-3xl text-black font-semibold mt-4 mb-4 ">
              CONSULTING
            </p>
            <p className="font-poppins text-lg text-black font-normal leading-9">
              Our consulting services include comprehensive technology and
              business analysis, project requirements identification, and
              feature prioritization. We also provide product development
              strategy, along with time and effort estimates.
            </p>
          </div>
          <div className="bg-white px-6 pb-16">
            <div className="bg-primary w-20 p-4 rounded-full -mt-9">
              <img src="/assets/img/mvp_dev.svg" alt="icon" />
            </div>
            <p className="font-poppins text-3xl text-black font-semibold  mt-4 mb-4 ">
              MVP Development
            </p>
            <p className="font-poppins text-lg text-black font-normal leading-9">
              Our end-to-end custom MVP development services cover everything
              from technology and business analysis, project requirements
              identification, feature prioritization, and product development
              strategy to UX/UI design and prototyping. We also provide full
              product development and delivery services to ensure your complete
              satisfaction.
            </p>
          </div>
          <div className="bg-white px-6 pb-6 pr-20 col-span-2">
            <div className="bg-primary h-20 w-20 pt-3 pl-2 pr-2 rounded-full -mt-9">
              {" "}
              <img src="/assets/img/mvp_design.svg" alt="icon" />
            </div>
            <p className="font-poppins text-3xl text-black font-semibold  mt-4 mb-4 ">
              MVP DESIGN
            </p>
            <p className="font-poppins text-lg text-black font-normal leading-9">
              For MVP design, we offer thorough technology and business
              analysis, project requirements identification, feature
              prioritization, and product development strategy, as well as UX/UI
              design and prototyping services.
            </p>
          </div>
        </div>
      </div>
      <section className=" pt-12 ">
        <div className=" ">
          <Benefits additionalClass="lg:w-1/2" data={mvp_services} />
          {/*  */}
        </div>
      </section>

      {/* <div className="bg-gray-50">
        <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
          
          <section aria-labelledby="details-heading">
            <div className="flex flex-col items-center text-center">
              <h2
                id="details-heading"
                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
              >
                MVPs built by HCode
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-600">
                We have delivered these high quality complete MVP products in
                very competitive timelines for our clients.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg"
                    alt="Drawstring top with elastic loop closure and textured interior padding."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  <p>Magnetiq</p>
                  Built on the Flow blockchain, we created an MVP for Magnetiq,
                  an innovative loyalty platform. It enables brands to offer
                  exclusive perks to their loyal customers through a responsive
                  web application designed for a seamless user experience.
                </p>
              </div>
              <div>
                <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-02.jpg"
                    alt="Front zipper pouch with included key ring."
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <p className="mt-8 text-base text-gray-500">
                  <p>Magnetiq</p>
                  Built on the Flow blockchain, we created an MVP for Magnetiq,
                  an innovative loyalty platform. It enables brands to offer
                  exclusive perks to their loyal customers through a responsive
                  web application designed for a seamless user experience.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <div className=" ">
        <CaseStudiesCard />
      </div>

      <div className="pt-10 pb-0 bg-gray-100">
        <Testimonial data={data} />
      </div>

      {/* mvp transform idea section  */}
      <div> 
        <Example/>
      </div>

      {/* FAQ */}
      <section className="bg-gray-100">
        <Accordion data={faq_mvp} />
      </section>
      {/* CTA */}
      <div className="my-10 ">
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
