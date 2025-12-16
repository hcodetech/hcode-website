/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import CTA from '../../components/CTA';
import Team from '../../components/Team';
import { linkedin_icon, TEAM } from '../../constants/constants';

function ShashankSingla() {
    return (
        <>
            <Head>
                <title>Shashank Singla - Co-Founder | Hcode Technologies</title>
                <meta
                    name="description"
                    content="Learn more about Shashank Singla, Co-Founder of Hcode Technologies. Product builder with 2 AI exits and serial entrepreneur."
                />
            </Head>

            {/* Back Link */}
            <section className="new-container pt-8 pb-4">
                <Link href="/about">
                    <a className="inline-flex items-center text-gray-600 hover:text-primary transition-opacity text-sm">
                        <ArrowLeftIcon className="w-4 h-4 mr-2" />
                        Back to About
                    </a>
                </Link>
            </section>

            {/* Bio Section */}
            <section className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
                <div className="new-container py-16">
                    <div className="grid grid-cols-12 gap-16">
                        {/* Left Side - Text Content */}
                        <div className="col-span-12 lg:col-span-6 flex flex-col justify-center">
                            {/* Name and Title */}
                            <div className="mb-8">
                                <h1 className="text-5xl md:text-6xl font-light mb-2 tracking-tight">
                                    SHASHANK SINGLA
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 font-light">
                                    Co-Founder. Hcode.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mb-12">
                                <a
                                    href="mailto:shashank@hcode.tech"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/shashanksingla/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                >
                                    <img
                                        src={linkedin_icon}
                                        alt="LinkedIn"
                                        className="w-5 h-5"
                                    />
                                </a>
                                <a
                                    href="https://x.com/shashanksingla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                                <a
                                    href="http://medium.com/@shashank.singla"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Bio Text */}
                            <div className="space-y-6 text-gray-800 leading-relaxed">
                                <p className="text-lg">
                                    Shashank has built several tech companies and products from the ground up. He currently acts as CTO for an Adtech startup where the infrastructure handles 350 million requests per day with 100ms response time. He has also served as Head of Engineering for a New York-based blockchain startup.
                                </p>
                                <p className="text-lg">
                                    Shashank has successfully exited multiple companies, including Dextro, a New York-based AI video understanding platform that was acquired by Axon, a publicly traded US company. His entrepreneurial journey combines deep technical expertise with strategic business acumen.
                                </p>
                                <p className="text-lg">
                                    With experience at Human Ventures and Goldman Sachs, and as an IIT Delhi graduate (Class of 2010), Shashank brings over 14 years of experience in building and scaling technology companies. At Hcode, he focuses on creating world-class development teams that deliver exceptional value to clients worldwide.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Portrait */}
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/assets/img/hcode_about_us_shashank.jpg"
                                    alt="Shashank Singla"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                    width="500px"
                                    height="600px"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership Team Section */}
            <section className="py-14 bg-gray-100 text-center">
                <div className="lg:new-container">
                    <h3 className="font-poppins text-center font-semibold text-3xl md:text-4xl md:leading-tight">
                        Leadership Team
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-7">
                        {TEAM.map(({ name, image, bio, link, designation, bioSlug }) => (
                            <Team
                                key={name}
                                name={name}
                                image={image}
                                bio={bio}
                                link={link}
                                designation={designation}
                                bioLink={bioSlug ? `/about/${bioSlug}` : null}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="my-16">
                <CTA />
            </section>
        </>
    );
}

export default ShashankSingla;
