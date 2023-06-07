/** @format */

import { useState } from "react";
import Modal from "./Modal";
import { getAPIUrl } from "../pages/api/APIHelpers";
import { apiRoutes } from "../pages/api/APIRoutes";
import { CheckIcon, MailIcon, DocumentDownloadIcon} from "@heroicons/react/outline";


const CaseStudyModalPopup = ({ mediaId, setCaseStudyModalPopup }) => {
  const [firstName, setFirstName] = useState("");
  // const [description, setDescription] = useState('');
  const [success, setSuccess] = useState(false);

  //   const [projectDesc, setProjectDesc] = useState("");

  const [userEmail, setUserEmail] = useState("");

  const [loading, setLoading] = useState(false);
//   const [failure, setFailure] = useState(false);
  const [leadId, setLeadId] = useState("");


  const handleCaseStudy = async (event) => {
    setSuccess(false);
    // setFailure(false);
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
      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          setSuccess(false);
          return;
        }
        throw new Error(res);
      }
      // const res2 = await fetch(url2, options);
      setFirstName("");

    //   setUserEmail("");

      setSuccess(true);
      console.log(json);
    } catch (e) {
      // Show the failure Message
      setSuccess(false);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  return (
    <Modal
      success
      titleIcon={!success ? <DocumentDownloadIcon className="h-6 w-6 text-primary " /> : <MailIcon className='w-6 h-6 text-green-600'/>}
      setCaseStudyModalPopup={setCaseStudyModalPopup}
      color={`${!success  ?'bg-blue-100' : 'bg-green-100 '}`}
      iconColor={"text-green-600"}
      heading={`${!success ? 'Discover actionable insights in our Case Study': `This case study has been sent to ${userEmail}`}`}
      paragraph={
        <>
          {!success ? (
            <>
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
              {/* {success && <div>Success</div>} */}
            </>
          ) : (
            <>
              <div>
                
                
              </div>
            </>
          )}
        </>
      }
    />
  );
};

export default CaseStudyModalPopup;
