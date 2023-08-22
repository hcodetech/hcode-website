import Head from 'next/head';
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { karnalImages, blog_page } from '../constants/constants';
import { ArrowRightIcon } from '@heroicons/react/solid';
import {
  Delhi,
  faq_hiring,
  hiring_process,
  karnal,
  metaData,
  newyork,
  NewYork,
  Noida,
  office_v3,
  OUR_MENTORS,
  remote,
  TEAM,
  thailand_trip,
  thailand_trip_webp,
  what_we_do,
  work_with_us_1,
  work_with_us_benefits,
  work_with_us_content,
  work_with_us_recuriter_image,
} from '../constants/constants';
import ImageCarousel from '../components/ImageCarousel';
import Benefits from '../components/Benefits';
import Accordion from '../components/Accordion';
import Team from '../components/Team';
import MetaTags from '../components/MetaTags';

function work_with_us() {
  return (
    <div>
      <Head>
        <title>Work With Us | Hcode Technologies</title>
        <MetaTags page={metaData.work_with_us} />
      </Head>
      {/* Hero Section */}
      <section className="relative bg-no-repeat bg-contain ">
        <div className="new-container  grid grid-cols-1 lg:grid-cols-2  ">
          <div className="py-5 md:py-24 md:pr-32 mt-20">
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
              Connect with the HR:{' '}
              <a
                className="text-primary underline"
                href="mailto:hr@hcode.tech"
                target="_blank"
              >
                hr@hcode.tech
              </a>
            </p>
          </div>
          <div className=" grid grid-cols-12 gap-8 overflow-hidden">
            <div className="col-span-12 w-full md:mt-28">
              <img
                src={office_v3}
                layout="fill"
                className="md:rounded-lg object-cover shadow-md md:hover:scale-105 w-auto transition-all duration-100 ease-out "
                loading="lazy"
                width="500px"
                height="350px"
                alt="Hcode team"
              />
            </div>
            <div className="col-span-6 w-full -mt-24 hidden md:block">
              <img
                src={work_with_us_1}
                layout="fill"
                className="rounded-lg object-cover shadow-md md:hover:scale-105 transition-all duration-100 ease-out"
                loading="lazy"
                width="300px"
                height="250px"
                alt="Hcode office"
              />
            </div>{' '}
            <div className="col-span-6 w-full -mt-24 hidden md:block">
              <picture>
                <source
                  srcSet={thailand_trip_webp}
                  media="(min-width:250px)"
                  type="image/webp"
                />
                <img
                  src={thailand_trip}
                  layout="fill"
                  loading="lazy"
                  width="300px"
                  height="350px"
                  alt="Hcode team in Thailand"
                  className="rounded-lg object-cover shadow-md md:hover:scale-105 transition-all duration-100 ease-out max-h-[200px] w-full object-bottom"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
      {/* Glass door Branding  */}
      <section className="py-10">
        <h2 className="text-bold text-center my-3 font-semibold">
          Rating and Reviews
        </h2>
        <a
          href="https://www.glassdoor.co.in/Overview/Working-at-HCODE-Technologies-EI_IE5545851.11,29.htm"
          target="_blank"
        >
          <img
            alt="Find Hcode on Glassdoor."
            className="mx-auto w-full max-w-md px-10"
            src="https://www.glassdoor.co.in/api/widget/horizontalStarRating.htm?e=5545851"
          />
        </a>
      </section>
      {/* Campus Overview */}
      <section className="new-container mt-10">
        <div className="sm:mt-10">
          <h3 className="text-4xl  font-semibold font-poppins">
            <h3 className="text-4xl  font-semibold font-poppins">
              {work_with_us_content.campus_heading}
            </h3>
          </h3>
        </div>
        <p
          className="mt-4 md:w-3/4 leading-snug font-light text-lg"
          dangerouslySetInnerHTML={{
            __html: work_with_us_content.campus_paragarph,
          }}
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 md:w-3/6 pt-10">
          <div className="">
            <img src={karnal} alt="Hcode Karnal Office" />
            <h5 className="text-lg font-medium py-0 text-gray-500">Karnal</h5>
          </div>
          {/* <div className=" ">
            <img
              src={Delhi}
              alt="Hcode Delhi Office"
              className="w-auto"
              height="80px"
              width="75px"
              loading="lazy"
            />
            <h4 className="text-lg font-medium  py-2  text-gray-500">Delhi</h4>
          </div> */}
          <div className="mt-8 sm:mt-0">
            <img src={Noida} alt="Hcode Noida Office" />
            <h5 className="text-lg font-medium  py-2  text-gray-500">Noida</h5>
          </div>
          <div className="">
            <img src={newyork} alt="Hcode New York Office" />
            <h3 className="text-lg font-medium  text-gray-500">New York</h3>
          </div>
        </div>
      </section>

      {/* Image Carousel */}
      <div>
        <div className="flex justify-center -mb-6">
          <a
            href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
            target="_blank"
            className="outline-button flex"
          >
            See current positions
            <ArrowRightIcon className="w-4 ml-2 " />
          </a>
        </div>
        <ImageCarousel />
      </div>
      {/* What we offer */}
      <section className="new-container -mt-4">
        <h4 className="font-semibold text-5xl mt-2 mb-4">What we offer</h4>
        <div className="grid grid-cols-12">
          {what_we_do.map((item, index) => (
            <div className="col-span-12 mb-7 md:mb-0 md:col-span-6" key={index}>
              <img src={item.img} alt={item.heading} />
              <h4 className="font-semibold text-2xl mt-3">{item.heading}</h4>
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
          <h4 className="text-4xl font-semibold">Our hiring process</h4>
          <p className="mt-2 mb-5 font-light">
            We have a 5-step hiring process that generally takes about 2-4 weeks
            from application to offer letter.
          </p>
        </div>
        <div className="mx-auto md:w-1/2 mb-10">
          {hiring_process.map(({ image, heading, descripition }, index) => (
            <div className="md:flex mb-10" key={index}>
              <div className="min-w-[64px] max-w-[64px] min-h-[64px] max-h-[64px] bg-blue-200  rounded-full">
                <img
                  src={image}
                  layout="fill"
                  loading="lazy"
                  height="50px"
                  width="100px"
                />
              </div>
              <div className="mt-3 md:mt-0 md:ml-4">
                <h4 className="font-semibold text-xl">{heading}</h4>
                <p className="font-light">{descripition}</p>
              </div>
            </div>
          ))}
          <div className="text-center">
            <a
              href="https://in.indeed.com/cmp/Hcode-Technologies/jobs"
              target="_blank"
              className="primary-button"
            >
              See All Open Positions
            </a>
          </div>
        </div>
      </section>
      {/* Core Team  */}
      <CarouselProvider
        visibleSlides={1}
        totalSlides={karnalImages.length}
        step={1}
        isIntrinsicHeight
        interval={10000}
        isPlaying
        playDirection="forward"
        infinite
      >
        <div className="relative mb-10 pt-10 md:pt-20 shadow-lg">
          <Slider>
            {karnalImages.map((item, idx) => (
              <Slide index={idx} key={item.img + idx}>
                <div className="relative">
                  <picture>
                    <source
                      srcSet={item.img_webp}
                      type="image/webp"
                      media="(min-width:250px)"
                    />
                    <img
                      src={item.img}
                      alt="Karnal city"
                      className="md:h-[700px] w-screen object-cover "
                      width="100%"
                      height="100%"
                      loading="lazy"
                    />
                  </picture>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="md:max-w-[480px]  bg-white md:absolute md:top-[20%] md:left-[8%] md:p-10 p-5 md:shadow-xl md:rounded-sm">
            <h2 className="font-semibold text-3xl">{blog_page.blog_heading}</h2>
            <div className="space-y-4 font-light tracking-normal">
              <p className="mt-4">{blog_page.blog_para}</p>
              <p>{blog_page.blog_para2}</p>
              <p>{blog_page.blog_para3}</p>
            </div>
            <div className="md:mt-14 hidden">
              <a
                href="https://hcode.tech/blog/"
                target="_blank"
                className="pt-5 pb-1  mt-2 w-50 whitespace-nowrap flex-nowrap border-b border-[#8F929F] inline-flex text-[#8F929F] hover:scale-100  cursor-pointer hover:opacity-100 "
              >
                Read More About Life Karnal
                <ArrowRightIcon className="w-6 md:ml-2  h-full" />
              </a>
            </div>
          </div>
        </div>
      </CarouselProvider>
      <section className="pt-10 md:pt-20  text-center">
        <div className="lg:new-container">
          <h3 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
            <h3 className="font-poppins text-center font-semibold text-3xl  md:text-4xl md:leading-tight">
              Our Mentors
            </h3>
          </h3>
          <p className="px-10 md:px-0 md:w-3/4 mx-auto mt-2">
            Learning & Development is an important part of the culture at HCode.
            Our online & offline weekly learning sessions by our experienced
            mentors are there to make sure that our people get the best learning
            experience in different dimensions to propel them in personal and
            professional life.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2   mt-7 md:w-1/2 mx-auto">
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
            className="rounded-lg w-auto"
            loading="lazy"
            width="500px"
            height="400px"
          />
          <div className="my-4 md:my-auto md:w-4/5 ml-3">
            <h2 className="text-3xl md:text-4xl font-semibold">
              <h2 className="text-3xl md:text-4xl font-semibold">
                Connect with the HR
              </h2>
            </h2>
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
    </div>
  );
}

export default work_with_us;
