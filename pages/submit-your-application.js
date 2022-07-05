import Head from "next/head";
import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Modal from "../components/Modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/plain.css";
const defaultColor = "#373536";

function submit_your_application() {
  const [success, setSuccess] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [streetName, setStreetName] = useState("");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [alternateStreetName, setAlternateStreetName] = useState("");
  const [alternateCityName, setAlternateCityName] = useState("");
  const [alternateStateName, setAlternateStateName] = useState("");
  const [alternatePostalCode, setAlternatePostalCode] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("+91");
  const [position, setPosition] = useState("0");
  const [startDate, setStartDate] = useState("");
  const [desiredPay, setDesiredPay] = useState("");
  const [employeeStatus, setEmployeeStatus] = useState("");
  const [checked, setChecked] = useState("");


  const check =(event) =>{
    if(event.target.checked == true){
      setChecked(true)
      setAlternateStreetName(streetName);
      setAlternateCityName(cityName);
      setAlternateStateName(stateName);
      setAlternatePostalCode(postalCode);
    }
    else{
      setChecked(false)
      setAlternateStreetName("");
      setAlternateCityName("");
      setAlternateStateName("");
      setAlternatePostalCode("");
    }
  }

  const contactUser = async (event) => {
    setSuccess(false);
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      last_name: lastName,
      mobile_number: mobileNumber.length > 4 ? `{+${mobileNumber}}` : "",
      street_name: streetName,
      city_name: cityName,
      state_name: stateName,
      postal_code: postalCode,
      alternate_street_name: alternateStreetName,
      alternate_city_name: alternateCityName,
      alternate_state_name: alternateStateName,
      alternate_postal_code: alternatePostalCode,
      email: email,
      position: position,
      employe_status: employeeStatus,
      start_date: startDate,
      desired_pay: desiredPay
    };
    console.log(contactUsFormData);
    // setLoading(true)
    setSuccess(true)
    // console.log(mobileNumber.length > 3);
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
      <section className="md:flex justify-center pt-14">

        {/* Form Start Here */}
        <div className="px-4 py-8 md:p-10 col-span-12 md:col-span-8">
          <h1 className="text-4xl font-semibold pb-5">
            Please enter the details{" "}
          </h1>
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
              {/* Address */}
              <div className="col-span-12">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Address
                </h2>
                {/* Street */}
                <div className="col-span-12 mt-4">
                  <label
                    htmlFor="street-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street<sup>*</sup>
                  </label>
                  <input
                    required
                    value={streetName}
                    onChange={(e) => setStreetName(e.target.value)}
                    type="text"
                    name="street-name"
                    id="street-name"
                    className="input-form"
                  />
                </div>
                <div className="flex flex-col-3 gap-2 mt-4">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="company-email"
                      className="block text-sm font-medium text-gray-700"
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
                      htmlFor="company-email"
                      className="block text-sm font-medium text-gray-700"
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
                      htmlFor="no-of-employees"
                      className="block text-sm font-medium text-gray-700"
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
                <div className="mt-4">
                <label>
                <input
                type="checkbox"
                onClick={(e)=>check(e)}
                />
                Same as current address
                </label>
                </div>
                
                
              </div>
              <div className="col-span-12">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  Alternate Address
                </h2>
                {/* Street */}
                <div className="col-span-12 mt-4">
                  <label
                    htmlFor="street-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street<sup>*</sup>
                  </label>
                  <input
                    required
                    value={checked ? streetName :alternateStreetName}
                    onChange={(e) => setAlternateStreetName(e.target.value)}
                    type="text"
                    name="street-name"
                    id="street-name"
                    className="input-form"
                  />
                </div>
                <div className="flex flex-col-3 gap-2 mt-4">
                  {/* City */}
                  <div>
                    <label
                      htmlFor="company-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      City<sup>*</sup>
                    </label>
                    <input
                      required
                      value={checked ? cityName : alternateCityName}
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
                      htmlFor="company-email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      State<sup>*</sup>
                    </label>
                    <input
                      required
                      value={checked ? stateName : alternateStateName}
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
                      htmlFor="no-of-employees"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Postal code<sup>*</sup>
                    </label>
                    <input
                      required
                      value={checked ? postalCode : alternatePostalCode}
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
                {/* Mobile Number */}
                <div className="col-span-12 mt-4 ">
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
                <div className="col-span-12 mt-4">
                  <label
                    htmlFor="company-email"
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
              {/* How did you learn about our company */}
              <div className="col-span-12 mt-4">
                <h2 className="font-semibold text-xl pb-2 border-b-2">
                  How did you learn about our company
                </h2>
                <div className="col-span-12 mt-4">
                  <label>
                    Position sought
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
                  <option value="0">Choose-one</option>
                  <option value="1">Frontend</option>
                  <option value="2">Backend</option>
                  <option value="3">MERN Stack</option>
                  <option value="4">Python</option>
                </select>
                </div>
                <div className="col-span-12 mt-4">
                  <label>
                    Available start date
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
                    Desired pay range
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
                <div className="col-span-12 mt-4">
                  <label className="mr-4">
                    Are you currently employed?
                  </label>
                 <input type="radio" value="Yes" name="employeeStatus" /> Yes
                <input className="ml-4" type="radio" value="No" name="employeeStatus" /> No
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <button
                  // disabled={loading}
                  className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section >
    </>
  )
}

export default submit_your_application