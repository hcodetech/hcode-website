/** @format */

import React, { useState } from "react";
import { getAPIUrl } from "../pages/api/APIHelpers";
import Modal from "./Modal";
import { apiRoutes } from "../pages/api/APIRoutes";
import { CheckIcon } from "@heroicons/react/outline";

const UpdateUserLeadPopup = ({
  leadId,
  setShowProjectDetailsPopup,
  showProjectDetailsPopup,
  setLeadId,
  // success,
  // failure,
  setSuccess,
  setFailure,
  close,
  getQuoteCallback,
}) => {
  const [loading, setLoading] = useState(false);
  const [projectLeadRequired, setProjectLeadRequired] = useState();
  const [numberOfDev, setNumberOfDevs] = useState("0");
  const [expectedTimeCommitment, setExpectedTimeCommitment] = useState("0");
  const [isDetailSubmitted, setIsDetailSubmitted] = useState(false);

  const updateUserLead = async (event) => {
    // setSuccess(false);
    // setFailure(false);
    event.preventDefault();
    const contactUsFormData = {
      is_proj_run_by_tech_person: projectLeadRequired,
      number_of_dev: numberOfDev,
      time_commitment: expectedTimeCommitment,
    };

    const formData = new FormData();
    Object.entries(contactUsFormData).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const url = getAPIUrl(apiRoutes.CONTACT + leadId);
    // const url2 =
    //   "https://script.google.com/a/hcode.tech/macros/s/AKfycbytrG1hsiIqFlkL4vMMNVRy0WXpEq2E26mU8JGuIA/exec";
    const options = {
      body: formData,
      method: "PATCH",
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
          // setFailure(true);
          return;
        }
        throw new Error(res);
      } else {
        getQuoteCallback(true);
      }
      // setFailure(false);
      // setSuccess(true);
      // setIsDetailSubmitted(true);
      // const res2 = await fetch(url2, options);
      // setProjectLeadRequired();
      // setNumberOfDevs("0");
      // Show the Success Message
      // setLeadId("");
      // getQuoteCallback(true);

      // setShowProjectDetailsPopup(false);
    } catch (e) {
      // Show the failure Message
      // setFailure(true);
      getQuoteCallback(false);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      <Modal
        success
        color={"bg-green-100"}
        titleIcon={<CheckIcon className="h-6 w-6 text-gray-600" />}
        iconColor="text-green-600"
        heading="Project details"
        openModal={showProjectDetailsPopup}
        close={close}
        // setOpenModal={setShowProjectDetailsPopup}
        paragraph={
          <>
            <form autoComplete="off" onSubmit={updateUserLead}>
              <div className="col-span-12 mt-4 text-left">
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
                    <option value="0" defaultValue>
                      I don’t know
                    </option>
                    <option value="1">1 - 2</option>
                    <option value="2">3 - 5</option>
                    <option value="3">6 - 10</option>
                    <option value="4">10+</option>
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
                    <option value="0" defaultValue>
                      I don’t know
                    </option>
                    <option value="1">3 to 6 Months</option>
                    <option value="2">6 to 12 Months</option>
                    <option value="3">More than a year</option>
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
                </fieldset>
                <div className="grid grid-cols-2 gap-5 mt-5">
                  <a
                    className="primary-outline ml-auto"
                    onClick={() => setShowProjectDetailsPopup(false)}
                  >
                    Close
                  </a>
                  <button
                    disabled={loading}
                    className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </>
        }
      />
    </>
  );
};

export default UpdateUserLeadPopup;
