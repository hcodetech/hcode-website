import Head from "next/head";
import React, { useEffect, useState } from "react";
import Client from "../../components/Client";
import Testimonial from "../../components/Testimonial";
import {
  client,
  hcode_provide,
  our_services_hero,
} from "../../constants/constants";

const daas = () => {
  const [isDesktop, setIsDesktop] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    window.innerWidth <= 750 ? setIsDesktop(false) : setIsDesktop(true);

    // on scroll, url is changing with section ids with the help of intersectionObserver API
    // intersectionObserver API contain two arguements i.e, callback function and options
    let observerOptions = {
      rootMargin: "10px",
      threshold: window.innerWidth <= 750 ? 0.1 : 0.8,
    };

    let observer = new IntersectionObserver(observerCallback, observerOptions);

    function observerCallback(sections) {
      if (sections[0].isIntersecting) {
        history.pushState(null, null, "#" + sections[0].target.id);
      }
    }
    document.querySelectorAll("section").forEach((i) => {
      observer.observe(i);
    });
  }, []);
  return (
    <>
      <Head>
        <title>Our Services | Hcode Techonolgies</title>
      </Head>
      {/* Hero Image */}
      <section>
        <div className="mr-5 relative cursor-pointer">
          <img
            className="w-full object-cover h-full relative z-0"
            src={our_services_hero}
          />
          <div className="absolute bg-gradient-to-r from-black z-10 w-full h-full top-0 left-0   "></div>

          <div className="absolute flex flex-col  justify-center h-full new-container top-4 z-20 text-white w-1/2 space-y-3">
            <h1 className="text-4xl font-semibold ">
              Hire Full-Stack developers Remotely
            </h1>
            <p className="my-4s font-light text-lg">
              Hire senior pre-vetted remote developers with strong technical and
              communication skills at unbeatable prices, ready to work in your
              timezone.
            </p>
            <button className="primary-button rounded-none inline-block">
              Hire MERN Developer
            </button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className=" new-container pt-10">
        <Client data={client} slides={isDesktop} />
      </section>

      {/* 1 Best offers */}
      <section
        id="best-offers"
        className=" new-container my-16 grid grid-cols-12 gap-8"
      >
        {/*  */}
        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold ">
            What Makes Us The Best From Others ?
          </h2>
          <p className="text-lg font-light">
            Hire senior pre-vetted remote developers with strong technical and
            communication skills at unbeatable prices, ready to work in your
            timezone.
          </p>
          {/*  */}
          <div className="flex">
            <img src="" alt="" />
            <div>
              <h5 className="text-md font-semibold ">
                What Makes Us The Best From Others ?
              </h5>
              <p className="text-base font-light">
                Hire senior pre-vetted remote developers with strong technical
                and communication skills at unbeatable prices, ready to work in
                your timezone.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover max-w-md "
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </section>
      {/* 2 Rigorous Vetting */}
      <section
        id="rigorous-vetting"
        className=" new-container my-16 grid grid-cols-12 gap-8"
      >
        {/*  */}
        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover max-w-md "
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold ">Rigorous Vetting</h2>
          {/*  */}
          <div className="flex">
            <img src="" alt="" />
            <div>
              <h5 className="text-md font-semibold ">
                5+ hours of tests and interviews
              </h5>
              <p className="text-base font-light">
                More rigorous than Silicon Valley job interviews. We test for
                100+ skills, data structures, algorithms, systems design,
                software specializations & frameworks.
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex">
            <img src="" alt="" />
            <div>
              <h5 className="text-md font-semibold ">Seniority tests</h5>
              <p className="text-base font-light">
                We select excellent communicators who can proactively take
                ownership of business and product objectives without
                micromanagement.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3 Best Others */}
      <section
        id="best_offers"
        className=" new-container my-16 grid grid-cols-12 gap-8"
      >
        {/*  */}
        <div className="col-span-12 md:col-span-6 space-y-3 flex flex-col justify-center">
          <h2 className="text-4xl font-semibold ">
            What Makes Us The Best From Others ?
          </h2>
          <p className="text-lg font-light">
            Hire senior pre-vetted remote developers with strong technical and
            communication skills at unbeatable prices, ready to work in your
            timezone.
          </p>
          {/*  */}
          <div className="flex">
            <img src="" alt="" />
            <div>
              <h5 className="text-md font-semibold ">
                What Makes Us The Best From Others ?
              </h5>
              <p className="text-base font-light">
                Hire senior pre-vetted remote developers with strong technical
                and communication skills at unbeatable prices, ready to work in
                your timezone.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-span-12 md:col-span-6">
          <img
            className="h-[80vh] object-cover max-w-md "
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          />
        </div>
      </section>

      {/* What Does Hcode Provide */}
      <section className="new-container my-10 grid grid-cols-12 gap-8">
        <h2 className="col-span-12 text-3xl font-semibold my-10 text-center">
          What does Hcode provide
        </h2>
        {hcode_provide.map((item) => (
          <div className="lg:col-span-4 md:col-span-6 col-span-12 bg-gray-100 mt-10 lg:mt-0 px-10 pb-10 text-center rounded-md border-b-8 border-blue-600">
            <div className="w-20 h-20 rounded-full bg-blue-600 mx-auto -mt-10 "></div>
            <h5 className="text-xl pb-2 font-bold pt-5">High ROI</h5>
            <p className="">
              Hire the top 1% of 1.5 million+ developers from 150+ countries who
              have applied to Turing.
            </p>
          </div>
        ))}
      </section>

      {/* Testimonial */}
      <section id="testimonial" className="pt-10 pb-0 ">
        <Testimonial />
      </section>

      {/* CTA */}
      <section id="cta" className="new-container text-center text-white">
        <div className="bg-gradient-to-r from-primary to-blue-900 p-10">
          <h2 className="col-span-12 text-4xl font-semibold  ">
            Hire Dedicated Developers
          </h2>
          <p className="">Get our top talent working for you right away</p>
          <button onClick={showModal} className="outline-button px-5">
            Hire MERN Developer
          </button>
        </div>
      </section>

      {/* Our Work */}
      <section id="our-work" className="new-container">
        <div></div>
      </section>
    </>
  );
};

export default daas;
