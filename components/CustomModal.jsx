import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";
import { hcode_footer, selected_technologies } from "../constants/constants";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import { apiRoutes } from "../pages/api/APIRoutes";
import { getAPIUrl } from "../pages/api/APIHelpers";
function CustomModal({ open, setOpen }) {
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [numberOfDev, setNumberOfDevs] = useState("0");
  const [numberOfMonths, setNumberOfMonths] = useState("0");
  const [currentNumberOfEmployees, setCurrentNumberOfEmployees] = useState("0");
  const [preferredTechStack, setPreferredTechStack] = useState([]);
  const [hiringNeed, setHiringNeed] = useState();

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
    console.log("2  3");
    setSuccess(false);
    setFailure(false);
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      email: companyEmail,
      employee_number: currentNumberOfEmployees,
      hiring_need: hiringNeed,
      number_of_dev: numberOfDev,
      // number_of_months: numberOfMonths,
      tech_preference: preferredTechStack.join(","),
      is_daas: true,
      //   mobile_number: mobileNumber.length > 4 ? `{+${mobileNumber}}` : "",
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
      setCompanyName("");
      setCompanyEmail("");
      setMobileNumber("");
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
      console.log("2134");
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
          <div className="flex items-end justify-center min-h-screen  text-center sm:block ">
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
                className="inline-block  bg-white  
                          rounded-lg py-5 px-5  text-left overflow-scroll shadow-xl transform transition-all align-middle h-screen md:h-[80vh] top-0"
              >
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
                        <div className="col-span-6">
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
                        <div className="col-span-6">
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
                        {/* <div className="col-span-12 grid grid-cols-12 gap-6">
                          <div className="col-span-6 ">
                            <label
                              htmlFor="no-of-employees"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Current employees in your company<sup>*</sup>
                            </label>
                            <select
                              value={currentNumberOfEmployees}
                              onChange={(e) => {
                                setCurrentNumberOfEmployees(e.target.value);
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
                          </div>
                        </div> */}

                        <div className="col-span-12 ">
                          <h2 className="font-semibold text-xl pb-2 border-b-2">
                            Hiring Needs
                          </h2>
                        </div>
                        {/* === */}

                        {/* <fieldset className="col-span-12">
                          <div>
                            <legend className="text-sm font-medium text-gray-700">
                              Your hiring needs
                              <sup>*</sup>
                            </legend>
                          </div>
                          <div className="mt-4 flex">
                            <div className="flex items-center">
                              <input
                                required
                                checked={hiringNeed === 0}
                                onChange={(e) => setHiringNeed(0)}
                                id="project-lead"
                                name="project-lead"
                                type="radio"
                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                              />
                              <label
                                htmlFor="project-lead"
                                className="ml-3 block text-sm font-medium text-gray-700 whitespace-nowrap"
                              >
                                Part-time
                              </label>
                            </div>
                            <div className="flex items-center ml-5">
                              <input
                                required
                                checked={hiringNeed === 1}
                                onChange={(e) => setHiringNeed(1)}
                                id="project-lead-no"
                                name="project-lead"
                                type="radio"
                                className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                              />
                              <label
                                htmlFor="project-lead-no"
                                className="ml-3 block text-sm font-medium text-gray-700 whitespace-nowrap"
                              >
                                Full time
                              </label>
                            </div>
                          </div>
                        </fieldset> */}

                        {/* Number of Developers required */}
                        <div className="col-span-6">
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
                        <div className="col-span-6">
                          <label
                            htmlFor="country"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Time<sup>*</sup>
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
                            {selected_technologies.map((tech, index) => (
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
                            ))}
                          </div>
                        </fieldset>
                      </div>
                      <div className="col-span-12 lg:col-span-4 mt-4 ">
                        <button
                          disabled={loading}
                          className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* End  */}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

export default CustomModal;
