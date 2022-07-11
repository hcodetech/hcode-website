import React, { useState, useEffect } from "react";
import Client from "../../components/Client";
import { client, our_services_hero, Eclipses_Group } from "../../constants/constants";

const MVP = () => {
    const [isDesktop, setIsDesktop] = useState("")
    useEffect(() => {
        window.innerWidth<=750 ? setIsDesktop(false) : setIsDesktop(true) 
         })
    return (
        <>
            <section className="bg-blue-100">
                <div className="new-container min-h-[80vh] pt-32 ">
                    <div className="px-80">
                        <h1 className="text-4xl font-semibold tracking-widest">We design, build and scale digital products and ventures</h1>
                        <p className="pt-6">Extend your tech team with top talent. We oversee the execution and
                            management of your software projects with our proven processes and tech mentorship
                        </p>
                        <div className="mt-12">
                            <a
                                href="/contact"
                                className="bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
                            >
                                Get Started
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="new-container py-10">
                <Client data={client} slides={isDesktop}/>
            </section>

            <section>
                <div className="relative  md:mt-8 ">
                    <img
                        className="object-cover w-screen md:h-[580px] h-[300px]"
                        src={our_services_hero}
                        layout="fill"
                    />
                </div>
                <div className="pt-16 new-container bg-blue-500">
                    <div className="grid grid-cols-12 min-h-[80vh]">
                        <div className="md:col-span-7 px-16">
                            <h1 className="text-5xl font-semibold text-white tracking-wider">
                                Reinventing the
                                <br />
                                Product Ideation
                            </h1>
                            <p className="pt-5 text-white">
                                We help startup to make their idea into reality by helping them with our expertise from entrepreneurship,
                                product design, consulting and engineering with lean and agile processes and high-performing,
                                scalable delivery teams.
                                <br />
                                <br />
                                We create value through products not slides,
                                are acting as builders not consultants and leverage the future of work.
                            </p>
                        </div>
                        <div className="md:col-span-5">
                            <img
                                src={Eclipses_Group}
                                className="w-1/2"
                            // layout='fill'
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section>
                <div className="p-20">
                    <h1 className="text-4xl semibold">
                        We deliver digital
                        <br />
                        impact
                    </h1>
                    <p className="pt-5">
                        We partner with our clients to identify high value digital opportunities
                        and execute them whilst enabling and transferring knowledge to their existing teams.
                        We cover the whole product lifecycle from ideation to development and scaling.
                    </p>
                    <div className="grid grid-cols-12 gap-8 mt-10 md:w-4/5 md:mx-auto">
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Business
                                    <br />
                                    Analysis
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Marketing
                                    <br />
                                    Strategy
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Strategic
                                    <br />
                                    Plan
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Prototype
                                    <br />
                                    Design
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Project
                                    <br />
                                    Development
                                </h2>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-6 lg:col-span-4">
                            <div className="bg-blue-50 px-8 py-6 shadow hover:shadow-2xl hover:bg-white hover:cursor-pointer text-black font-medium text-xl text-left">
                                <h2 className="text-2xl">
                                    Product
                                    <br />
                                    Evolution
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                            <a
                                href="/contact"
                                className="bg-primary px-4 lg:px-24 py-5 text-center text-white rounded-md hover:bg-blue-800 hover:scale-x-105 active:scale-100 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white "
                            >
                                Learn More About Our service
                            </a>
                        </div>
                </div>
            </section>

        </>
    )
}

export default MVP;