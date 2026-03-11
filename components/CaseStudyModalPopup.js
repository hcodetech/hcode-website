/** @format */

import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { getAPIUrl } from '../pages/api/APIHelpers';
import { apiRoutes } from '../pages/api/APIRoutes';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import Modal from './Modal';

const CaseStudyModalPopup = ({ mediaId, downloadCallback, close }) => {
  const [firstName, setFirstName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleCaseStudy = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const token = await executeRecaptcha('case_study_form_submission');

      if (!token) {
        setFailure(true);
        setResponseMessage('ReCAPTCHA verification failed. Please try again.');
        return;
      }

      const contactUsFormData = {
        first_name: firstName,
        email: userEmail,
        type: 2,
        media_id: mediaId,
        recaptcha: token,
      };

      const formData = new FormData();
      Object.entries(contactUsFormData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      const url = getAPIUrl(apiRoutes.CONTACT);

      const options = {
        body: formData,
        method: 'POST',
        'Content-Type': 'application/x-www-form-urlencoded',
      };

      const res = await fetch(url, options);
      const json = await res.json();

      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          setFailure(true);
          setResponseMessage(
            json?.mobile_number || 'An error occurred. Please try again.'
          );
          window.scrollTo(0, 0);
          return;
        }
        throw new Error(res);
      }

      downloadCallback(true, userEmail);
      close();
    } catch (e) {
      setFailure(true);
      setResponseMessage('An error occurred. Please try again.');
      downloadCallback(false, userEmail);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* TODO: Check this is open, at the same time below modal is not closed */}
      <Modal
        success
        titleIcon={<DocumentArrowDownIcon className="h-6 w-6 text-primary" />}
        openModal={true}
        close={close}
        color="bg-blue-100"
        iconColor="text-green-600"
        heading="Please enter your details to get the case study."
        paragraph={
          <div className="">
            {/* Full Name */}
            <form autoComplete="off" onSubmit={handleCaseStudy}>
              <div className="col-span-6 text-left">
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
              <div className="col-span-12 mt-4 text-left">
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
                <div className="text-right">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50  mt-5"
                  >
                    Send
                    {/* Submit Request */}
                  </button>
                </div>
              </div>
            </form>
          </div>
        }
      />
    </>
  );
};

export default CaseStudyModalPopup;
