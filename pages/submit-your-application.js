import Head from "next/head";
import {
  ArrowRightIcon
} from "@heroicons/react/solid";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Modal from "../components/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
import { FileUploader } from "react-drag-drop-files";
const defaultColor = "#373536";
const fileTypes = ["JPG", "PNG", "PDF", "DOC"];

function submit_your_application() {
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [alternateCityName, setAlternateCityName] = useState("");
  const [alternateStateName, setAlternateStateName] = useState("");
  const [alternatePostalCode, setAlternatePostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [resume, setResume] = useState("");
  const [textAboutYourself, setTextAboutYourself] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [desiredPay, setDesiredPay] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState(false);
  const [checkedCurrentAddress, setCheckedCurrentAddress] = useState(false);


  const SameAsCurrentAddress = (event) => {
    if (event.target.checked === true) {
      setCheckedCurrentAddress(true)
      // setAlternateStreetName(streetName);
      setAlternateCityName(cityName);
      setAlternateStateName(stateName);
      setAlternatePostalCode(postalCode);
    }
    else {
      setCheckedCurrentAddress(false)
      // setAlternateStreetName("");
      setAlternateCityName("");
      setAlternateStateName("");
      setAlternatePostalCode("");
    }
  }



  const submitApplication = async (event) => {
    setSuccess(false);
    event.preventDefault();
    const submitApplicationFormData = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobileNumber.length > 4 ? `{+${mobileNumber}}` : "",
      city_name: cityName,
      state_name: stateName,
      postal_code: postalCode,
      alternate_city_name: alternateCityName,
      alternate_state_name: alternateStateName,
      alternate_postal_code: alternatePostalCode,
      email: email,
      resume: resume,
      text_about_Yourself: textAboutYourself,
      position: position,
      employe_status: employeeStatus,
      start_date: startDate,
      desired_pay: desiredPay
    };
    console.log(submitApplicationFormData);
    // setLoading(true)
    setSuccess(true)
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Head>
        <title>submit-your-application | Hcode Technologies </title>
      </Head>
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

      <section className="md:new-container grid grid-cols-12 pt-14">
        <div className="bg-blue-900  max-h-screen md:max-h-0  text-white p-10 md:p-0 col-span-12 md:col-span-4 md:sticky md:top-14">
          <div className="bg-gradient-to-b from-blue-900 to-transparent absolute  h-[70vh] w-full z-40 hidden md:block">
          </div>
          <img src="/assets/img/job.jpg" alt="hcode_employees" className="hidden md:block" />
          <div className="z-50 md:absolute top-9 left-7 right-4" >
            <h1 className="text-4xl font-semibold">
              Looking for job?
            </h1>
            <p className="text-normal mt-3">
              Please fill out the form with your correct information, so we can reach you as soon as possible
              whenever we have a opening for you !!!
            </p>
            <a href="https://in.indeed.com/cmp/Hcode-Technologies" className="flex items-center gap-2 text-normal font-semibold mt-4">
              <u>Checkout the current opening</u>
              <ArrowRightIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
        {/* Form Start Here */}
        <div className="px-4 py-8 md:p-10 col-span-12 md:col-span-8">
          <form autoComplete="off" onSubmit={submitApplication}>
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
              {/* Address */}
              <div className="col-span-12">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Address
                </h2>
                <div className="md:flex flex-col-3 gap-2 mt-4">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="city-name"
                      className="block text-sm font-medium text-gray-700 "
                    >
                      City<sup>*</sup>
                    </label>
                    <input
                      required
                      value={cityName}
                      onChange={(e) => setCityName(e.target.value)}
                      type="text"
                      name="city"
                      id="city"
                      className="input-form"
                    />
                  </div>
                  {/* State */}
                  <div>
                    <label
                      htmlFor="state-name"
                      className="block text-sm font-medium text-gray-700 mt-2 md:mt-0"
                    >
                      State<sup>*</sup>
                    </label>
                    <input
                      required
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      type="text"
                      name="state"
                      id="state"
                      className="input-form"
                    />
                  </div>
                  {/* Postal code */}
                  <div>
                    <label
                      htmlFor="postal-code"
                      className="block text-sm font-medium text-gray-700 mt-2 md:mt-0"
                    >
                      Postal code<sup>*</sup>
                    </label>
                    <input
                      required
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      type="number"
                      name="postal-code"
                      id="postal-code"
                      className="input-form"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <input
                    type="checkbox"
                    onClick={(e) => SameAsCurrentAddress(e)}
                  />
                  <label className="text-lg">
                    Same as current address
                  </label>
                </div>


              </div>
              <div className="col-span-12">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Alternate Address
                </h2>
                <div className="md:flex flex-col-3 gap-2 mt-4">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="alternate-city-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      value={checkedCurrentAddress ? cityName : alternateCityName}
                      onChange={(e) => setAlternateCityName(e.target.value)}
                      type="text"
                      name="city"
                      id="city"
                      className="input-form"
                    />
                  </div>
                  {/* State */}
                  <div>
                    <label
                      htmlFor="alternate-state-name"
                      className="block text-sm font-medium text-gray-700 mt-2 md:mt-0"
                    >
                      State
                    </label>
                    <input
                      value={checkedCurrentAddress ? stateName : alternateStateName}
                      onChange={(e) => setAlternateStateName(e.target.value)}
                      type="text"
                      name="state"
                      id="state"
                      className="input-form"
                    />
                  </div>
                  {/* Postal code */}
                  <div>
                    <label
                      htmlFor="alternate-postal-code"
                      className="block text-sm font-medium text-gray-700 mt-2 md:mt-0"
                    >
                      Postal code
                    </label>
                    <input
                      value={checkedCurrentAddress ? postalCode : alternatePostalCode}
                      onChange={(e) => setAlternatePostalCode(e.target.value)}
                      type="number"
                      name="postal-code"
                      id="postal-code"
                      className="input-form"
                    />
                  </div>
                </div>
              </div>
              {/* Your Project Details */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Contact Information
                </h2>
                <div className="md:grid grid-cols-12 gap-6">
                  {/* Mobile Number */}
                  <div className="col-span-6 mt-4 ">
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
                  </div>

                  {/*  Email */}
                  <div className="col-span-6 mt-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email<sup>*</sup>
                    </label>
                    <input
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      className="input-form"
                    />
                  </div>
                </div>
              </div>
              {/* Upload Resume */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Personal Details
                </h2>
                <div className="flex flex-col mt-4">
                  <label
                    htmlFor="file">
                    Upload your Resume
                  </label>
                  <FileUploader
                    handleChange={(file) => setResume(file)}
                    name="file"
                    types={fileTypes}
                    hoverTitle={"DROP HERE"}
                    label="Upload your Resume"
                    classes="py-2 mt-1"
                  />
                  <h3 className="text-sm mt-2">
                    {resume && resume.name + " " + "file uploaded successfully"}
                  </h3>
                </div>
                {/* Tell us about yourself */}
                <div className="col-span-12 mt-4">
                  <label>
                    Tell us about yourself
                  </label>
                  {/* <div className="col-span-12 mt-4"> */}
                  <textarea
                    placeholder="Write something (Optional)"
                    rows={5}
                    onChange={(e) => setTextAboutYourself(e.target.value)}
                    className="input-form"
                  />
                  {/* </div> */}
                </div>
              </div>
              {/* How did you learn about our company */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  How did you learn about our company
                </h2>
                <div className="col-span-12 mt-4">
                  <label>
                    Applied for position<sup>*</sup>
                  </label>
                  <select
                    value={position}
                    onChange={(e) => {
                      setPosition(e.target.value);
                    }}
                    required
                    id="position"
                    name="position"
                    className="mt-1 block w-full py-2 px-3 input-form"
                  >
                    <option value="" disabled>Choose-one</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Mern-Stack">MERN Stack</option>
                    <option value="Python">Python</option>
                  </select>
                </div>
                <div className="col-span-12 mt-4">
                  <label>
                    Available start date<sup>*</sup>
                  </label>
                  <input
                    required
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                    }}
                    type="date"
                    name="position-sought"
                    id="position-sought"
                    className="input-form"
                  />
                </div>
                <div className="col-span-12 mt-4">
                  <label>
                    Desired pay range<sup>*</sup>
                  </label>
                  <input
                    required
                    value={desiredPay}
                    onChange={(e) => {
                      setDesiredPay(e.target.value);
                    }}
                    type="text"
                    name="position-sought"
                    id="position-sought"
                    className="input-form"
                  />
                </div>
                <div className="mt-4 flex">
                  <label className="mr-4">
                    Are you currently employed?
                  </label>
                  <div className="flex items-center">
                    <input
                      required
                      // checked
                      onChange={() => setEmployeeStatus(true)}
                      id="employee-status"
                      name="employee-status"
                      type="radio"
                      className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                    />
                    <label
                      htmlFor="employee-status"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center ml-5">
                    <input
                      required
                      // checked
                      onChange={(e) => setEmployeeStatus(false)}
                      id="employee-status-no"
                      name="employee-status"
                      type="radio"
                      className="focus:ring-primary h-4 w-4 text-primary border-gray-300"
                    />
                    <label
                      htmlFor="employee-status-no"
                      className="ml-3 block text-sm font-medium text-gray-700"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <button
                  disabled={loading}
                  className="bg-primary hover:bg-blue-600 text-white w-full md:w-min rounded-md px-7 py-3 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        {/* </div> */}
      </section >
    </>
  )
}

export default submit_your_application