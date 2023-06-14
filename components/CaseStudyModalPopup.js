/** @format */

import { DocumentDownloadIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { apiRoutes } from "../pages/api/APIRoutes";
import Modal from "./Modal";

const CaseStudyModalPopup = ({ mediaId, downloadCallback, close }) => {
  const [firstName, setFirstName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCaseStudy = async (event) => {
    event.preventDefault();
    const contactUsFormData = {
      first_name: firstName,
      email: userEmail,
      type: 2,
      media_id: mediaId,
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
      console.log("1");
      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          return;
        }
        throw new Error(res);
      } else {
        console.log("2");
        downloadCallback(true, userEmail);
      }
    } catch (e) {
      console.log("3");
      downloadCallback(false, userEmail);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* TODO: Check this is open, at the same time below modal is not closed */}
      <Modal
        success
        titleIcon={<DocumentDownloadIcon className="h-6 w-6 text-primary " />}
        openModal={true}
        close={close}
        color="bg-blue-100"
        iconColor="text-green-600"
        heading="Discover actionable insights in our Case Study"
        paragraph={
          <div className="text-left">
            {/* Full Name */}
            <form autoComplete="off" onSubmit={handleCaseStudy}>
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

                <button
                  type="submit"
                  className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50  mt-5 ml-56"
                >
                  Download
                </button>
              </div>
            </form>
          </div>
        }
      />
    </>
  );
};

export default CaseStudyModalPopup;
