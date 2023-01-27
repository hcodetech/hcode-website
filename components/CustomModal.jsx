import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { mern_page_selected_technologies } from "../constants/constants";
import { apiRoutes } from "../pages/api/APIRoutes";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { DotLoader } from "react-spinners";

function CustomModal({ open, setOpen }) {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [responseMessage, setResponseMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");

  const [numberOfDev, setNumberOfDevs] = useState("0");
  const [numberOfMonths, setNumberOfMonths] = useState("0");
  const [currentNumberOfEmployees, setCurrentNumberOfEmployees] = useState("0");
  const [preferredTechStack, setPreferredTechStack] = useState([]);
  const [hiringNeed, setHiringNeed] = useState(1);
  const [checkPage, setCheckPage] = useState();
  const defaultColor = "#373536";

  const setSelectedTech = (e, tech) => {
    if (e.target.checked) {
      setPreferredTechStack((prev) => [...prev, tech]);
    } else {
      setPreferredTechStack((tstack) => {
        return tstack.filter((item) => item !== tech);
      });
    }
  };
  useEffect(() => {
    checkPageUrl();
  }, []);

  const checkPageUrl = () => {
    if (window.location.pathname === "/our_services/hire-developer") {
      setCheckPage("hire Page");
    } else {
      setCheckPage("mern page");
    }
  };

  const contactUser = async (event) => {
    setFormSubmitted(true);
    setSuccess(false);
    setFailure(false);
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      email: companyEmail,
      employee_number: currentNumberOfEmployees,
      hiring_need: hiringNeed,
      number_of_dev: numberOfDev,
      tech_preference: preferredTechStack.join(","),
      project_description: "filled on MERN page",
      coming_from: checkPage,
      is_daas: true,
    };

    try {
      const formData = new FormData();
      Object.entries(contactUsFormData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const url = getAPIUrl(apiRoutes.LEAD_CONTACT);
      const options = {
        body: formData,
        method: "POST",
        "Content-Type": "application/x-www-form-urlencoded",
      };
      setLoading(true);
      const res = await fetch(url, options);
      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          const json = await res.json();
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          setFailure(true);
          return;
        }
        throw new Error(res);
      }

      setFirstName("");
      setCompanyEmail("");
      setNumberOfDevs("0");
      setNumberOfMonths("0");
      setCurrentNumberOfEmployees("0");
      setPreferredTechStack([]);
      // Show the Success Message
      setSuccess(true);
    } catch (e) {
      // Show the failure Message
      console.log("Error", e);
      setFailure(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto "
          onClose={setOpen}
        >
          <div
            className={`flex md:items-end md:justify-center md:min-h-screen  text-center sm:block ${
              formSubmitted ? "items-center h-screen justify-center " : ""
            }`}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* Modal CSS */}
              <div
                className={
                  !formSubmitted
                    ? "inline-block bg-white rounded-lg py-5 px-5 text-left overflow-scroll shadow-xl transform transition-all align-middle min-h-screen md:min-h-full top-0 md:max-h-[600px] w-full md:w-max"
                    : "inline-block bg-white transform transition-all align-middle  rounded-md "
                }
              >
                {loading && (
                  <div className="fixed top-1/2 inset-x-2/4">
                    <DotLoader color={defaultColor} size={60} />
                  </div>
                )}
                {success && (
                  <SuccessModal
                    color={"bg-blue-100"}
                    iconColor={"text-blue-600"}
                    success={true}
                    heading={"Thank You !"}
                    paragraph={
                      "Thanks for your interest. We will contact you shortly."
                    }
                  />
                )}
                {failure && (
                  <SuccessModal
                    color={"bg-red-100"}
                    iconColor={"text-red-600"}
                    heading={"Oops !"}
                    paragraph={
                      responseMessage ??
                      "We are unable to register your request at current time. Please send us an email at hello@hcode.tech"
                    }
                  />
                )}
                {!formSubmitted && (
                  <div className="max-w-2xl mx-auto">
                    {/* Start Here */}
                    <div className="flex justify-between border-b pb-3">
                      <div>
                        <h2 className="font-semibold text-2xl">
                          Find developers to hire
                        </h2>
                      </div>
                      <XIcon
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setOpen(false)}
                      />
                    </div>

                    {/* Form Start Here */}
                    <div className=" mt-4 col-span-12 md:col-span-8">
                      <form autoComplete="off" onSubmit={contactUser}>
                        <div className="grid grid-cols-12 gap-6">
                          {/* Full Name */}
                          <div className="col-span-12 md:col-span-6">
                            <label
                              htmlFor="first-name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Full Name<sup>*</sup>
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
                          {/* Company Email */}
                          <div className="col-span-12 md:col-span-6">
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

                          <div className="col-span-12 ">
                            <h2 className="font-semibold text-xl pb-2 border-b-2">
                              Hiring Needs
                            </h2>
                          </div>

                          {/* Number of Developers required */}
                          <div className="col-span-12 md:col-span-6">
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
                          </div>
                          <div className="col-span-12 md:col-span-6">
                            <label
                              htmlFor="country"
                              className="block text-sm font-medium text-gray-700"
                            >
                              For Duration <sup>*</sup>
                            </label>
                            <select
                              required
                              value={numberOfMonths}
                              onChange={(e) => {
                                setNumberOfMonths(e.target.value);
                              }}
                              id="country"
                              name="country"
                              autoComplete="country"
                              className="mt-1 block w-full py-2 px-3 input-form"
                            >
                              <option value="0" defaultValue>
                                I don’t know
                              </option>
                              <option value="1">6 - 12 Months</option>
                              <option value="2">12 - 24 Months</option>
                              <option value="3">24 - 36 Months</option>
                              <option value="4">36+ Months</option>
                            </select>
                          </div>

                          {/* Technical Details */}

                          {/* Tech Stack */}
                          <fieldset className="col-span-12 ">
                            <div>
                              <legend className="text-sm font-medium text-gray-700">
                                Choose your preferred tech stack
                              </legend>
                            </div>
                            <div className=" grid grid-cols-12">
                              {mern_page_selected_technologies.map(
                                (tech, index) => (
                                  <div
                                    key={index}
                                    style={{ minHeight: 48 }}
                                    className={`flex items-center  col-span-6  md:col-span-4 lg:col-span-3 input-select mt-4`}
                                  >
                                    <input
                                      onChange={(e) =>
                                        setSelectedTech(e, tech.tech_name)
                                      }
                                      id={tech.tech_name}
                                      name={tech.tech_name}
                                      type="checkbox"
                                      className="input-radio hidden"
                                    />
                                    <label
                                      htmlFor={tech.tech_name}
                                      className={`block text-sm min-w-[140px] font-medium text-gray-700 border border-1 rounded-lg text-center px-5 py-3 ${
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
                                )
                              )}
                            </div>
                          </fieldset>
                        </div>
                        <div className="col-span-12 lg:col-span-4 mt-4 ">
                          <button
                            disabled={loading}
                            className="bg-primary w-full hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* End  */}
                  </div>
                )}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default CustomModal;

export const SuccessModal = (props) => (
  <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden  transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
    <div>
      <div
        className={`mx-auto flex items-center justify-center h-12 w-12 rounded-full ${props.color}`}
      >
        {props.success ? (
          <CheckIcon
            className={`h-6 w-6 ${props.iconColor}`}
            aria-hidden="true"
          />
        ) : (
          <XIcon className={`h-6 w-6 ${props.iconColor}`} aria-hidden="true" />
        )}
      </div>
      <div className="mt-3 text-center sm:mt-5">
        <Dialog.Title
          as="h3"
          className="text-lg leading-6 font-medium text-gray-900"
        >
          {props.heading}
        </Dialog.Title>
        <div className="mt-2">
          <p className="text-sm text-gray-500">{props.paragraph}</p>
        </div>
      </div>
    </div>
  </div>
);
