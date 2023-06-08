/** @format */

import {
  LocationMarkerIcon,
  PhoneIcon,
  ChatAltIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import Head from "next/head";

import { useState } from "react";
import {
  contact_us_circle,
  metaData,
  selected_technologies,
} from "../constants/constants";
import DotLoader from "react-spinners/DotLoader";
import Modal from "../components/Modal";
import { apiRoutes } from "./api/APIRoutes";
import { getAPIUrl } from "./api/APIHelpers";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import MetaTags from "../components/MetaTags";
import UpdateUserLeadPopup from "../components/updateUserLeadPopup";
import QueryPopup from "../components/QueryPopup";
import { CheckIcon } from "@heroicons/react/outline";
const defaultColor = "#373536";
function contact() {
  const [success, setSuccess] = useState(false);
  const [showProjectDetailsPopup, setShowProjectDetailsPopup] = useState(false);
  const [failure, setFailure] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [leadId, setLeadId] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyEmail, setCompanyEmail] = useState("");

  const [projectDesc, setProjectDesc] = useState("");
  const [numberOfDev, setNumberOfDevs] = useState("0");
  const [openQueryPopup, setOpenQueryPopup] = useState(false);

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
    setSuccess(false);
    setFailure(false);
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
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded",
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
      // const res2 = await fetch(url2, options);
      setFirstName("");
      setLastName("");
      setCompanyEmail("");
      setProjectDesc("");
      setLeadId(json?.id);
      setFailure(false);
      // setSuccess(true);
      setShowProjectDetailsPopup(true);
    } catch (e) {
      // Show the failure Message
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
      {success && (
        <Modal
          titleIcon={<CheckIcon className="h-6 w-6 text-green-600" />}
          color={"bg-blue-100"}
          iconColor={"text-blue-600"}
          success={true}
          heading={"Thank You !"}
          paragraph={"Thanks for your interest. We will contact you shortly."}
        />
      )}
      {failure && (
        <Modal
          setOpenModal={setShowProjectDetailsPopup}
          openModal={failure}
          color={"bg-red-100"}
          setFailure={setFailure}
          iconColor={"text-red-600"}
          heading={"Oops !"}
          paragraph={
            responseMessage ??
            "We are unable to register your request at current time. Please send us an email at hello@hcode.tech"
          }
        />
      )}
      {showProjectDetailsPopup && (
        <UpdateUserLeadPopup
          success={success}
          failure={failure}
          setSuccess={setSuccess}
          setFailure={setFailure}
          setLeadId={setLeadId}
          setShowProjectDetailsPopup={setShowProjectDetailsPopup}
          showProjectDetailsPopup={showProjectDetailsPopup}
          leadId={leadId}
        />
      )}
      {openQueryPopup && (
        <QueryPopup
          openQueryPopup={openQueryPopup}
          setOpenQueryPopup={setOpenQueryPopup}
        />
      )}
      <section className="md:new-container grid grid-cols-12 pt-14 md:h-[80vh]">
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
              <LocationMarkerIcon className="w-6 h-6 mr-1 pr-1" />
              675 Hudson St Suite 3S, New York, <br />
              NY #10014
            </div>
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
                    defaultValue={""}
                  />
                </div>
              </div>

              {/* Your Company Details */}
              {/* <div className="col-span-12"> */}
              {/* <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Your Company Details
                </h2> */}
              {/* Company Name */}
              {/* <div className="col-span-12 mt-4">
                  <label
                    htmlFor="company-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Company Name<sup>*</sup>
                  </label>
                  <input
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    type="text"
                    name="company-name"
                    id="company-name"
                    className="input-form"
                  />
                </div> */}
              {/* Company Email */}
              {/* <div className="col-span-12 mt-4">
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
                </div> */}
              {/* Mobile Number */}
              {/* <div className="col-span-12 mt-4 hidden ">
                  <label
                    htmlFor="mobile-number"
                    className="block text-sm  font-medium text-gray-700"
                  >
                    Mobile Number{" "}
                    <span className="text-gray-400 font-medium">
                      (optional)
                    </span>
                  </label>

                  <PhoneInput
                    value={mobileNumber}
                    onChange={setMobileNumber}
                    autoFormat
                    inputStyle={{
                      width: "100%",
                      marginTop: "2px",
                      borderRadius: "4px",
                    }}
                    containerClass="mt-1 focus:ring-primary focus:border-primary block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    buttonStyle={{ borderRadius: "4px 0 0 4px" }}
                  />
                  <small className="italic text-xs">
                    Please enter the mobile number with your country code.
                  </small>
                </div> */}

              {/* Number of Employees */}
              {/* <div className="col-span-12 mt-4">
                  <label
                    htmlFor="no-of-employees"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Employees<sup>*</sup>
                  </label>
                  <select
                    value={numberOfEmployees}
                    onChange={(e) => {
                      setNumberOfEmployees(e.target.value);
                    }}
                    required
                    id="no-of-employees"
                    name="no-of-employees"
                    className="mt-1 block w-full py-2 px-3 input-form"
                  >
                    <option value="0">1 - 5</option>
                    <option value="1">5 - 20</option>
                    <option value="2">20 - 50</option>
                    <option value="3">50+</option>
                  </select>
                </div> */}
              {/* </div> */}
              {/* Your Project Details */}
              {/* <div className="col-span-12 mt-4"> */}
              {/* <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Project Details
                </h2> */}
              {/*  Describe your project briefy */}
              {/* <div className="col-span-12 mt-4">
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
                    defaultValue={""}
                  />
                </div> */}
              {/* Number of Developers required */}
              {/* <div className="col-span-12 mt-4">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Number of Developers required<sup>*</sup>
                  </label>
                  <select
                    required
                    value={numberOfDev}
                    onChange={(e) => {
                      setNumberOfDevs(e.target.value);
                    }}
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="mt-1 block w-full py-2 px-3 input-form"
                  >
                    <option value="0" defaultValue>
                      I don’t know
                    </option>
                    <option value="1">1 - 2</option>
                    <option value="2">3 - 5</option>
                    <option value="3">6 - 10</option>
                    <option value="4">10+</option>
                  </select>
                </div> */}

              {/*  Time */}
              {/* <div className="col-span-12 mt-4">
                  <label
                    htmlFor="time-commitment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Expected Time Commitment<sup>*</sup>
                  </label>
                  <select
                    required
                    onChange={(e) => {
                      setExpectedTimeCommitment(e.target.value);
                    }}
                    value={expectedTimeCommitment}
                    id="time-commitment"
                    name="time-commitment"
                    className="mt-1 block w-full py-2 px-3 input-form"
                  >
                    <option value="0" defaultValue>
                      I don’t know
                    </option>
                    <option value="1">3 to 6 Months</option>
                    <option value="2">6 to 12 Months</option>
                    <option value="3">More than a year</option>
                  </select>
                </div> */}

              {/* Project manager/Engineering Manger/CTO */}

              {/* <fieldset className="mt-6">
                  <div>
                    <legend className="text-sm font-medium text-gray-700">
                      Will the project be run by a technical person like a
                      Project manager/Engineering Manger/CTO etc?<sup>*</sup>
                    </legend>
                  </div>
                  <div className="mt-4 flex">
                    <div className="flex items-center">
                      <input
                        required
                        checked={projectLeadRequired === true}
                        onChange={(e) => setProjectLeadRequired(true)}
                        id="project-lead"
                        name="project-lead"
                        type="radio"
                        className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                      />
                      <label
                        htmlFor="project-lead"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="flex items-center ml-5">
                      <input
                        required
                        checked={projectLeadRequired === false}
                        onChange={(e) => setProjectLeadRequired(false)}
                        id="project-lead-no"
                        name="project-lead"
                        type="radio"
                        className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                      />
                      <label
                        htmlFor="project-lead-no"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </fieldset> */}
              {/* </div> */}
              {/* Technical Details */}
              {/* <div className="col-span-12 mt-4"> */}
              {/* <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Technical Details
                </h2>

                <fieldset className="mt-6">
                  <div>
                    <legend className="text-sm font-medium text-gray-700">
                      Is this requirement related to?
                    </legend>
                  </div>
                  <div className="mt-4 flex">
                    <div className="flex items-center">
                      <input
                        onChange={(e) => setProjectType("0")}
                        checked={projectType === "0"}
                        id="project-type1"
                        name="project-type"
                        type="radio"
                        className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                      />
                      <label
                        htmlFor="project-type1"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        New Project
                      </label>
                    </div>
                    <div className="flex items-center ml-5">
                      <input
                        onChange={(e) => setProjectType("1")}
                        checked={projectType === "1"}
                        id="project-type"
                        name="project-type"
                        type="radio"
                        className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                      />
                      <label
                        htmlFor="project-type"
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        Existing Codebase
                      </label>
                    </div>
                  </div>
                </fieldset> */}
              {/* Tech Stack */}
              {/* <fieldset className="mt-6">
                  <div>
                    <legend className="text-sm font-medium text-gray-700">
                      Choose your preferred tech stack
                    </legend>
                  </div>
                  <div className=" grid grid-cols-12">
                    {selected_technologies.map((tech, index) => (
                      <div
                        key={index}
                        style={{ minHeight: 48 }}
                        className={`flex items-center  col-span-6  md:col-span-4 lg:col-span-3 input-select mt-4`}
                      >
                        <input
                          onChange={(e) => setSelectedTech(e, tech.tech_name)}
                          id={tech.tech_name}
                          name={tech.tech_name}
                          type="checkbox"
                          className="input-radio hidden"
                        />
                        <label
                          htmlFor={tech.tech_name}
                          className={`block text-sm min-w-[140px] font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3 ${
                            preferredTechStack.includes(tech.tech_name) &&
                            "bg-blue-200"
                          }`}
                        >
                          {tech.tech_name}
                          <br />
                          <span className="text-gray-500 text-xs font-normal">
                            {" "}
                            {tech.tech}
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset> */}
              {/* </div> */}
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
            className="mt-5 text-gray-800 border-b italic"
          >
            For other queries, Click here.
          </button>
        </div>
      </section>
    </>
  );
}

export default contact;
