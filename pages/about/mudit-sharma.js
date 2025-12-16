/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import CTA from '../../components/CTA';
import Team from '../../components/Team';
import { linkedin_icon, TEAM } from '../../constants/constants';

function MuditSharma() {
    return (
        <>
            <Head>
                <title>Mudit Sharma - Engineering Manager | Hcode Technologies</title>
                <meta
                    name="description"
                    content="Learn more about Mudit Sharma, Engineering Manager at Hcode Technologies. Experienced in running multiple SAAS teams at Brevo."
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
                                    MUDIT SHARMA
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 font-light">
                                    Engineering Manager. Hcode.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mb-12">
                                <a
                                    href="mailto:mudit.sharma@hcode.tech"
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
                                    href="https://www.linkedin.com/in/sharma-mudit/"
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
                            </div>

                            {/* Bio Text */}
                            <div className="space-y-6 text-gray-800 leading-relaxed">
                                <p className="text-lg">
                                    Mudit brings over 16 years of product development experience to his role as Engineering Manager at Hcode. A 2008 graduate, he began his career mastering PHP and ASP .Net at Hindustan Times before advancing to Software Architect at SynapseIndia.
                                </p>
                                <p className="text-lg">
                                    He spent 9.5 years at Sendinblue (now Brevo), where he honed his Node.js expertise while successfully managing both technical teams and budgets. This experience gave him a unique perspective on balancing technical excellence with business objectives.
                                </p>
                                <p className="text-lg">
                                    At Hcode, Mudit leads teams specializing in Node.js and React.js development. He embodies a powerful fusion of technical depth and managerial finesse, ensuring project success through strategic leadership and hands-on technical guidance.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Portrait */}
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/assets/img/hcode_about_us_mudit.jpg"
                                    alt="Mudit Sharma"
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

export default MuditSharma;
