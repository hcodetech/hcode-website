/** @format */

import {
  LocationMarkerIcon,
  PhoneIcon,
  ChatAltIcon,
  VideoCameraIcon,
} from '@heroicons/react/solid';
import Head from 'next/head';

import { useState } from 'react';
import { contact_us_circle, metaData } from '../constants/constants';
import DotLoader from 'react-spinners/DotLoader';
import { apiRoutes } from './api/APIRoutes';
import { getAPIUrl } from './api/APIHelpers';
import 'react-phone-input-2/lib/plain.css';
import MetaTags from '../components/MetaTags';
import UpdateUserLeadPopup from '../components/updateUserLeadPopup';
import QueryPopup from '../components/QueryPopup';
import QueryResponsePopUp from '../components/QueryResponsePopUp';
import GetQuoteResponsePopUp from '../components/GetQuoteResponsePopup';
const defaultColor = '#373536';
function contact() {
  const [showProjectDetailsPopup, setShowProjectDetailsPopup] = useState(false);
  const [failure, setFailure] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [leadId, setLeadId] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [companyEmail, setCompanyEmail] = useState('');

  const [projectDesc, setProjectDesc] = useState('');
  const [openQueryPopup, setOpenQueryPopup] = useState(false);
  const [submitQueryResponsePopUp, setSubmitQueryResponsePopUp] = useState({
    show: false,
    title: '',
    description: '',
    error: false,
  });

  const [getQuoteResponsePopup, setGetQuoteResponsePopup] = useState({
    show: false,
    title: '',
    description: '',
    error: false,
  });

  const querySubmitCallback = (success) => {
    setOpenQueryPopup(false);

    if (success)
      setSubmitQueryResponsePopUp({
        show: true,
        title: 'Thank You !',
        description: 'Thanks for your interest. We will contact you shortly.',
        error: false,
      });
    else
      setSubmitQueryResponsePopUp({
        show: true,
        title: 'Oops !',
        description:
          'We are unable to register your request at current time. Please send us an email at hello@hcode.tech',
        error: true,
      });
  };

  const getQuoteCallback = (success) => {
    setShowProjectDetailsPopup(false);

    if (success)
      setGetQuoteResponsePopup({
        show: true,
        title: 'Thank You !',
        description: 'Thanks for your interest. We will contact you shortly.',
        error: false,
      });
    else
      setGetQuoteResponsePopup({
        show: true,
        title: 'Oops !',
        description:
          'We are unable to register your request at current time. Please send us an email at hello@hcode.tech',
        error: true,
      });
  };

  const [preferredTechStack, setPreferredTechStack] = useState([]);
  const setSelectedTech = (e, tech) => {
    if (e.target.checked) {
      setPreferredTechStack((prev) => [...prev, tech]);
    } else {
      setPreferredTechStack((tstack) => {
        return tstack.filter((item) => item !== tech);
      });
    }
  };
  const contactUser = async (event) => {
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      last_name: lastName,
      email: companyEmail,
      project_description: projectDesc,
      type: 1,
    };

    const formData = new FormData();
    Object.entries(contactUsFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const url = getAPIUrl(apiRoutes.CONTACT);
    // const url2 =
    //   "https://script.google.com/a/hcode.tech/macros/s/AKfycbytrG1hsiIqFlkL4vMMNVRy0WXpEq2E26mU8JGuIA/exec";
    const options = {
      body: formData,
      method: 'POST',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();
      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          setFailure(true);
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          return;
        }
        throw new Error(res);
      }
      setFirstName('');
      setLastName('');
      setCompanyEmail('');
      setProjectDesc('');
      setLeadId(json?.id);

      setShowProjectDetailsPopup(true);
    } catch (e) {
      setFailure(true);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>Contact | Hcode Technologies </title>
        <MetaTags page={metaData.contact} />
      </Head>
      {loading && (
        <div className="fixed top-1/2 inset-x-2/4">
          <DotLoader color={defaultColor} size={60} />
        </div>
      )}

      {showProjectDetailsPopup && (
        <UpdateUserLeadPopup
          close={() => setShowProjectDetailsPopup(false)}
          setLeadId={setLeadId}
          setShowProjectDetailsPopup={setShowProjectDetailsPopup}
          showProjectDetailsPopup={showProjectDetailsPopup}
          leadId={leadId}
          getQuoteCallback={getQuoteCallback}
        />
      )}

      {getQuoteResponsePopup?.show && (
        <GetQuoteResponsePopUp
          close={() => setGetQuoteResponsePopup({ show: false })}
          error={getQuoteResponsePopup?.error}
          title={getQuoteResponsePopup.title}
          description={getQuoteResponsePopup?.description}
        />
      )}

      {submitQueryResponsePopUp?.show && (
        <QueryResponsePopUp
          close={() => setSubmitQueryResponsePopUp({ show: false })}
          error={submitQueryResponsePopUp?.error}
          title={submitQueryResponsePopUp.title}
          description={submitQueryResponsePopUp?.description}
        />
      )}

      {openQueryPopup && (
        <QueryPopup
          close={() => setOpenQueryPopup(false)}
          openQueryPopup={openQueryPopup}
          setOpenQueryPopup={setOpenQueryPopup}
          querySubmitCallback={querySubmitCallback}
        />
      )}
      <section className="md:new-container grid grid-cols-12 pt-14">
        <div className="bg-primary md:max-w-[450px] max-h-screen text-white p-10 col-span-12 md:col-span-4 md:sticky top-14">
          <div className="z-50 sticky">
            <h1 className="text-4xl font-semibold">
              Let’s scale your team together !
            </h1>
            <p className="text-normal opacity-80 mt-3">
              Fill out the form, including details about your next project (or
              business goals), and we'll be in touch shortly.
            </p>
            <div className="flex mt-4 border-t pt-4">
              <LocationMarkerIcon className="w-6 h-6 mr-2" />
              120/7th Milestone, NH-1, Karnal, Haryana #132001
            </div>
            <div className="flex mt-4 ">
              <LocationMarkerIcon className="w-6 h-6 mr-1 pr-1 min-w-[24px] min-h-[24px]" />
              India Accelerator, 3rd Floor, The Iconic Corenthum, Sector 62,
              Noida
              <br />
              Uttar Pradesh ,201301
            </div>
            {/* <div className='flex mt-4 '>
              <LocationMarkerIcon className='w-6 h-6 mr-1 pr-1' />
              675 Hudson St Suite 3S, New York, <br />
              NY #10014
            </div> */}
            <div className="flex mt-4 ">
              <PhoneIcon className="w-6 h-6 mr-2" />
              <a href="tel:+919350674450">+91-9350674450</a>
            </div>
            <div className="flex mt-4 ">
              <ChatAltIcon className="w-6 h-6 mr-2" />
              <a href="mailto:hello@hcode.tech">hello@hcode.tech</a>
            </div>
          </div>
          <div className=" left-0 bottom-0 hidden md:block md:absolute ">
            <img src={contact_us_circle} alt="" />
          </div>
        </div>
        {/* Form Start Here */}
        <div className="px-4 py-8 md:p-10 col-span-12 md:col-span-8">
          <h1 className="text-4xl font-semibold pb-5">
            Please enter the details
          </h1>

          {/* Schedule a call with Rakesh Seghal */}
          <div className="flex gap-3 items-center border rounded-lg py-2 px-2.5 mb-10 bg-blue-50">
            <div className="bg-white p-3 rounded-full">
              <VideoCameraIcon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h5 className="text-base sm:text-lg font-semibold">
                Schedule a brief call
              </h5>
            </div>
            <a
              target="_blank"
              href="https://calendly.com/rakesh-sehgal/15min?month=2023-05&date=2023-04-19"
              className="primary-outline ml-auto"
            >
              Schedule
            </a>
          </div>
          <div className="border-b mb-8"></div>

          <form autoComplete="off" onSubmit={contactUser}>
            <div className="grid grid-cols-12 gap-6">
              {/* Full Name */}
              <div className="col-span-6">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name<sup>*</sup>
                </label>
                <input
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="input-form"
                />
              </div>
              {/* Last Name */}
              <div className="col-span-6">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name<sup>*</sup>
                </label>
                <input
                  required
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="input-form"
                />
              </div>
              <div className="col-span-12 mt-1">
                <label
                  htmlFor="company-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Company Email<sup>*</sup>
                </label>
                <input
                  required
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  type="email"
                  name="company-email"
                  id="company-email"
                  className="input-form"
                />
                <br />

                <div className="col-span-12 mt-1">
                  <label
                    htmlFor="project-briefy"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Describe your project briefly<sup>*</sup>
                  </label>
                  <textarea
                    required
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    id="project-briefy"
                    name="project-briefy"
                    rows={3}
                    className="input-form"
                    defaultValue={''}
                  />
                </div>
              </div>

              <div className="col-span-12 lg:col-span-4">
                <button
                  disabled={loading}
                  className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                >
                  Get Quote
                </button>
              </div>
            </div>
          </form>

          <button
            onClick={() => setOpenQueryPopup(true)}
            className="mt-5 text-gray-700 italic"
          >
            For any other queries,{' '}
            <span className="border-b border-primary text-primary">
              {' '}
              Click here.
            </span>
          </button>
        </div>
      </section>
    </>
  );
}

export default contact;
