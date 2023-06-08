/** @format */

import { useState } from "react";
import Modal from "./Modal";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { apiRoutes } from "../pages/api/APIRoutes";
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/outline";
import { DotLoader } from "react-spinners/DotLoader";

const QueryPopup = ({ openQueryPopup, setOpenQueryPopup }) => {
  const [firstName, setFirstName] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [projectDesc, setProjectDesc] = useState("");

  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const defaultColor = "#373536";

  const generalQuery = async (event) => {
    setSuccess(false);
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      project_description: projectDesc,
      email: userEmail,
      type: 0,
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
          setSuccess(false);
          return;
        }
        throw new Error(res);
      }
      setFirstName("");
      setUserEmail("");
      setProjectDesc("");
      setSuccess(true);
    } catch (e) {
      // Show the failure Message

      setOpenQueryPopup(false);

      setSuccess(false);
      setError(true);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  {
    loading && (
      <div className="fixed top-1/2 inset-x-2/4">
        <DotLoader color={defaultColor} size={60} />
      </div>
    );
  }

  {
    error && (
      <Modal
        titleIcon={<XIcon className="h-6 w-6 text-green-600" />}
        color={"bg-blue-100"}
        iconColor={"text-blue-600"}
        success
        heading={"Thank You uhuh !"}
        paragraph={
          "Thanks for your interest. We will contact yo diuhdxiu u shortly."
        }
      />
    );
  }

  return (
    <>
      <Modal
        success
        titleIcon={
          !success ? (
            <QuestionMarkCircleIcon className="h-6 w-6 text-green-600" />
          ) : (
            <CheckIcon className="h-6 w-6 text-green-600" />
          )
        }
        color={"bg-green-100"}
        iconColor={"text-green-600"}
        heading={`${
          !success
            ? "Please enter your query"
            : "Thanks for your interest. We will contact you shortly."
        }`}
        openModal={openQueryPopup}
        setOpenModal={setOpenQueryPopup}
        paragraph={
          <>
            {!success ? (
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
                      Email<sup>*</sup>
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

                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50  mt-5 ml-56"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div></div>
            )}
          </>
        }
      />
    </>
  );
};

export default QueryPopup;
