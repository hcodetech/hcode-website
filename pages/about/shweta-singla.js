/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import CTA from '../../components/CTA';
import Team from '../../components/Team';
import { linkedin_icon, TEAM } from '../../constants/constants';

function ShwetaSingla() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Shweta Singla",
        "jobTitle": "Co-Founder",
        "worksFor": {
            "@type": "Organization",
            "name": "Hcode Technologies Pvt Ltd",
            "url": "https://hcode.tech"
        },
        "url": "https://hcode.tech/about/shweta-singla",
        "email": "shweta@hcode.tech",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Indian Institute of Technology Delhi",
            "sameAs": "https://www.iitd.ac.in/"
        },
        "sameAs": [
            "https://www.linkedin.com/in/shweta-singla/"
        ],
        "description": "Co-Founder of Hcode Technologies. Ex-Vice President at Goldman Sachs with 9+ years as Quantitative Strategist. Expert in Machine Learning, Big Data, and Optimizations.",
        "knowsAbout": ["Machine Learning", "Big Data", "Quantitative Analysis", "Optimization", "NP-hard Problems", "Software Development"]
    };

    return (
        <>
            <Head>
                <title>Shweta Singla - Co-Founder | Hcode Technologies</title>
                <meta
                    name="description"
                    content="Learn more about Shweta Singla, Co-Founder of Hcode Technologies. Led high-performing teams at Goldman Sachs, IIT Delhi graduate."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
            </Head>

            {/* Back Link */}
            <section className="new-container pt-8 pb-4">
                <Link href="/about" className="inline-flex items-center text-gray-600 hover:text-primary transition-opacity text-sm">
                    <ArrowLeftIcon className="w-4 h-4 mr-2" />
                    Back to About
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
                                    SHWETA SINGLA
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 font-light">
                                    Co-Founder. Hcode.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mb-12">
                                <a
                                    href="mailto:shweta@hcode.tech"
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
                                    href="https://www.linkedin.com/in/shweta-singla/"
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
                                    Shweta is an ex-Vice President at Goldman Sachs with over 9 years of experience as a Quantitative Strategist. She has successfully started, grown, and led multiple high-performing teams, bringing deep expertise in Machine Learning, Big Data, and Optimizations.
                                </p>
                                <p className="text-lg">
                                    Her technical expertise includes building heuristic solutions for NP-hard problems, combining theoretical computer science with practical business applications. Shweta's global experience spans offices in New York, London, Bengaluru, and Delhi, working with teams from more than 15 countries.
                                </p>
                                <p className="text-lg">
                                    An IIT Delhi graduate (Class of 2010) with over 14 years of experience, Shweta brings a unique blend of technical depth and leadership excellence to Hcode. She focuses on building robust engineering practices and fostering a culture of innovation and continuous improvement.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Portrait */}
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/assets/img/hcode-shweta-singla.jpg"
                                    alt="Shweta Singla"
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

export default ShwetaSingla;
