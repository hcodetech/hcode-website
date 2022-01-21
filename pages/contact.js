import {
  LocationMarkerIcon,
  PhoneIcon,
  ChatAltIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import {
  contact_us_circle,
  selected_technologies,
} from "../constants/constants";
import DotLoader from "react-spinners/DotLoader";
import Modal from "../components/Modal";
const defaultColor = "#373536";
function contact() {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);

  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [projectLeadRequired, setProjectLeadRequired] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [numberOfDev, setNumberOfDevs] = useState("I don’t know");
  const [numberOfEmployees, setNumberOfEmployees] = useState("1 - 5");

  const [expectedTimeCommitment, setExpectedTimeCommitment] =
    useState("I don’t know");
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
    const conactUsFormData = {
      fullName,
      companyName,
      companyEmail,
      projectType,
      projectLeadRequired,
      projectDesc,
      numberOfDev,
      numberOfEmployees,
      expectedTimeCommitment,
      preferredTechStack,
    };

    const formData = new FormData();
    Object.entries(conactUsFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const url =
      "https://script.google.com/a/hcode.tech/macros/s/AKfycbytrG1hsiIqFlkL4vMMNVRy0WXpEq2E26mU8JGuIA/exec";
    const options = {
      body: formData,
      method: "POST",
      "Content-Type": "application/x-www-form-urlencoded",
    };
    try {
      setLoading(true);
      const res = await fetch(url, options);
      setFullName("");
      setCompanyName("");
      setCompanyEmail("");
      setProjectType("");
      setProjectLeadRequired("");
      setProjectDesc("");
      setNumberOfDevs("I don’t know");
      setNumberOfEmployees("1 - 5");
      setPreferredTechStack([]);
      setExpectedTimeCommitment("I don’t know");
      // alert('Thanks for your interest. We will contact you shortly.')
      // console.log("Success")
      setSuccess(true);
    } catch (e) {
      setFailure(true);
      // alert('We are unable to register your request at current time. Please send us an email at hello@hcode.tech')
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed top-1/2 inset-x-2/4">
          <DotLoader color={defaultColor} size={60} />
        </div>
      )}
      {success && (
        <Modal
          color={"bg-blue-100"}
          iconColor={"text-blue-600"}
          success={true}
          heading={"Thank You !"}
          paragraph={"Thanks for your interest. We will contact you shortly."}
        />
      )}
      {failure && (
        <Modal
          color={"bg-red-100"}
          iconColor={"text-red-600"}
          heading={"Oops !"}
          paragraph={
            "We are unable to register your request at current time. Please send us an email at hello@hcode.tech"
          }
        />
      )}
      <section className="md:new-container grid grid-cols-12 pt-14">
        <div className="bg-primary md:max-w-[450px] max-h-screen text-white p-10  col-span-12 md:col-span-5 relative ">
          <div>
            <h1 className="text-4xl font-semibold">
              Let’s scale your team together
            </h1>
            <p className="text-normal opacity-80 mt-3">
              Fill out the form, including details about your next project (or
              business goals), and we'll be in touch shortly.
            </p>
            <div className="flex mt-4 border-t pt-4">
              <LocationMarkerIcon className="w-6 h-6 mr-2" />
              120/7th Milestone, NH-1, Karnal, Haryana 132001
            </div>
            <div className="flex mt-4 ">
              <PhoneIcon className="w-6 h-6 mr-2" />
              +91-9416033324
            </div>
            <div className="flex mt-4 ">
              <ChatAltIcon className="w-6 h-6 mr-2" />
              hello@hcode.tech
            </div>
          </div>
          <div className=" left-0 bottom-0 hidden md:block md:absolute ">
            <img src={contact_us_circle} alt="" />
          </div>
        </div>
        {/* Form Start Here */}
        <div className="px-4 py-8 md:p-10 col-span-12 md:col-span-7">
          {/* TODO - Show error message and require message in the form */}
          <h1 className="text-4xl font-semibold pb-3">
            Please enter the details{" "}
          </h1>
          <form autoComplete="off" onSubmit={contactUser}>
            <div className="grid grid-cols-6 gap-6">
              {/* Full Name */}
              <div className="col-span-12">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name<sup>*</sup>
                </label>
                <input
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="input-form"
                />
              </div>
              {/* Your Company Details */}
              <div className="col-span-12">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Your Company Details
                </h2>
                {/* Company Name */}
                <div className="col-span-12 mt-4">
                  {/* TODO - remove this field by making company email field don't accept gmail using regex */}
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
                </div>
                {/* Company Email */}
                <div className="col-span-12 mt-4">
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
                </div>
                {/* Number of Employees */}
                <div className="col-span-12 mt-4">
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
                    <option>1 - 5</option>
                    <option>5 - 20</option>
                    <option>20 - 50</option>
                    <option>50+</option>
                  </select>
                </div>
              </div>

              {/* Your Project Details */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Project Details
                </h2>
                {/*  Describe your project briefy */}
                <div className="col-span-12 mt-4">
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
                {/* Number of Developers required */}
                <div className="col-span-12 mt-4">
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
                    <option defaultValue>I don’t know</option>
                    <option value="1 - 2">1 - 2</option>
                    <option value="3 - 5">3 - 5</option>
                    <option value="6 - 10">6 - 10</option>
                    <option value="10+">10+</option>
                  </select>
                </div>

                {/*  Time */}
                <div className="col-span-12 mt-4">
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
                    <option value="I don’t know" defaultValue>
                      I don’t know
                    </option>
                    <option value="3 to 6 Months">3 to 6 Months</option>
                    <option value="6 to 12 Months">6 to 12 Months</option>
                    <option value="More than a year">More than a year</option>
                  </select>
                </div>

                {/* Project manager/Engineering Manger/CTO */}

                <fieldset className="mt-6">
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
                        checked={projectLeadRequired === "Yes"}
                        onChange={(e) => setProjectLeadRequired("Yes")}
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
                        checked={projectLeadRequired === "No"}
                        onChange={(e) => setProjectLeadRequired("No")}
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
                </fieldset>
              </div>
              {/* Technical Details */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
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
                        onChange={(e) => setProjectType("New Project")}
                        checked={projectType === "New Project"}
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
                        onChange={(e) => setProjectType("Existing Code")}
                        checked={projectType === "Existing Code"}
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
                </fieldset>
                {/* Tech Stack */}
                <fieldset className="mt-6">
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
                          className={`block text-sm min-w-[140px] font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3 
                                                ${
                                                  preferredTechStack.includes(
                                                    tech.tech_name
                                                  ) && "bg-blue-200"
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
                </fieldset>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <button
                  disabled={loading}
                  className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default contact;
