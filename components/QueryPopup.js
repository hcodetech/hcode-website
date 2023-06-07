/** @format */

import { useState } from "react";
import Modal from "./Modal";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { apiRoutes } from "../pages/api/APIRoutes";
import { CheckIcon, QuestionMarkCircleIcon } from "@heroicons/react/outline";

const QueryPopup = ({}) => {
  const [firstName, setFirstName] = useState("");
  // const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  const [projectDesc, setProjectDesc] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [leadId, setLeadId] = useState("");

  const generalQuery = async (event) => {

    setSuccess(false);
    setFailure(false);
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      // description: description,
      project_description: projectDesc,

      // last_name: lastName,
      // mobile_number: mobileNumber.length > 4 ? `{+${mobileNumber}}` : "",
      // company_name: companyName,
      email: userEmail,
      project_description: projectDesc,

      type: 0,
      // project_type: projectType,
      // is_proj_run_by_tech_person: projectLeadRequired,
      // project_description: projectDesc,
      // number_of_dev: numberOfDev,
      // employee_number: numberOfEmployees,
      // time_commitment: expectedTimeCommitment,
      // tech_preference: preferredTechStack.join(","),
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
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          setFailure(true);
          return;
        }
        throw new Error(res);
      }
      // const res2 = await fetch(url2, options);
      setFirstName("");
      // setLastName("");
      // setCompanyName("");
      setUserEmail("");
      setMobileNumber("");
      setProjectType("");
      setProjectLeadRequired();
      setProjectDesc("");
      setNumberOfDevs("0");
      setNumberOfEmployees("0");
      setPreferredTechStack([]);
      setExpectedTimeCommitment("0");
      // Show the Success Message
      // setSuccess(true);
      console.log(json);
      setLeadId(json?.id);
      toggleProjectDetailsPopup();
    } catch (e) {
      // Show the failure Message
      setFailure(true);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <Modal
      success

      titleIcon={<QuestionMarkCircleIcon className='h-6 w-6 text-green-600' />}
      
      color={"bg-green-100"}
      iconColor={"text-green-600"}
      heading="Please enter your query"
      paragraph={
        <div className="text-left">
          {/* Full Name */}
          <form autoComplete="off" onSubmit={generalQuery}>
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
            <div className="col-span-12 mt-4">
              <label
                htmlFor="company-email"
                className="block text-sm font-medium text-gray-700"
              >
                Company Email<sup>*</sup>
              </label>
              <input
                required
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="email"
                name="user-email"
                id="user-email"
                className="input-form"
              />

              <div className="col-span-12 mt-4">
                <label
                  htmlFor="project-briefy"
                  className="block text-sm font-medium text-gray-700"
                >
                  Description<sup>*</sup>
                </label>
                <textarea
                  required
                  value={projectDesc}
                  onChange={(e) => setProjectDesc(e.target.value)}
                  id="project-briefy"
                  name="project-briefy"
                  rows={3}
                  className="input-form"
                  // defaultValue={""}
                />
              </div>

              <button type='submit' className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50  mt-5 ml-56">
                Submit
              </button>
            </div>
          </form>
        </div>
      }
    />
  );
};

export default QueryPopup;
