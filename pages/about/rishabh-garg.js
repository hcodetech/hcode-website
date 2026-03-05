/** @format */

import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import CTA from '../../components/CTA';
import Team from '../../components/Team';
import { linkedin_icon, TEAM } from '../../constants/constants';

function RishabhGarg() {
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Rishabh Garg",
        "jobTitle": "Engineering Manager",
        "worksFor": {
            "@type": "Organization",
            "name": "Hcode Technologies Pvt Ltd",
            "url": "https://hcode.tech"
        },
        "url": "https://hcode.tech/about/rishabh-garg",
        "email": "rishabh.garg@hcode.tech",
        "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "National Institute of Technology Durgapur"
        },
        "sameAs": [
            "https://www.linkedin.com/in/rishabh-garg-77023ab6/"
        ],
        "description": "Engineering Manager at Hcode Technologies with 14+ years of experience. Expert in Spring Framework, Java, Python, Node.js, and React.js. Previously at Siemens, Samsung, and Infosys.",
        "knowsAbout": ["Spring Framework", "Java", "Python", "Node.js", "React.js", "Enterprise Applications", "Software Architecture"]
    };

    return (
        <>
            <Head>
                <title>Rishabh Garg - Engineering Manager | Hcode Technologies</title>
                <meta
                    name="description"
                    content="Learn more about Rishabh Garg, Engineering Manager at Hcode Technologies. Enterprise app development expert with experience at Siemens and Samsung."
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
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
                                    RISHABH GARG
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 font-light">
                                    Engineering Manager. Hcode.
                                </p>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-4 mb-12">
                                <a
                                    href="mailto:rishabh.garg@hcode.tech"
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
                                    href="https://www.linkedin.com/in/rishabh-garg-77023ab6/"
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
                                    Rishabh is a highly experienced IT professional with over a decade of expertise across multiple technologies including Spring Framework, Core Java, Python, Node.js, and React.js. His technical proficiency extends to building and managing large-scale enterprise applications.
                                </p>
                                <p className="text-lg">
                                    Throughout his career, Rishabh has successfully managed high-performing teams and delivered complex projects for leading organizations including Infosys, Samsung, and Siemens. His experience showcases remarkable adaptability across diverse industries and technical domains.
                                </p>
                                <p className="text-lg">
                                    A graduate of NIT Durgapur (Class of 2010) with over 14 years of experience, Rishabh brings strong technical leadership to Hcode. He focuses on architecting scalable systems, mentoring engineering teams, and ensuring delivery of high-quality enterprise solutions.
                                </p>
                            </div>
                        </div>

                        {/* Right Side - Portrait */}
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <img
                                    src="/assets/img/hcode-rishabh-garg.jpg"
                                    alt="Rishabh Garg"
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

export default RishabhGarg;
