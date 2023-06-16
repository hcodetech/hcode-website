/** @format */

import { useState } from 'react';
import Modal from './Modal';
import { getAPIUrl } from '../pages/api/APIHelpers';
import { apiRoutes } from '../pages/api/APIRoutes';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { DotLoader } from 'react-spinners/DotLoader';

const QueryPopup = ({
  openQueryPopup,
  setOpenQueryPopup,
  querySubmitCallback,
  close,
}) => {
  const [firstName, setFirstName] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const defaultColor = '#373536';

  const generalQuery = async (event) => {
    event.preventDefault();
    // setSuccess(false);
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

    const options = {
      body: formData,
      method: 'POST',
      'Content-Type': 'application/x-www-form-urlencoded',
    };
    try {
      setLoading(true);
      const res = await fetch(url, options);
      const json = await res.json();
      if (!res.ok) {
        if (res.status >= 400 && res.body) {
          window.scrollTo(0, 0);
          setResponseMessage(json?.mobile_number);
          return;
        }
        throw new Error(res);
      } else {
        querySubmitCallback(true);
      }
    } catch (e) {
      querySubmitCallback(false);
    } finally {
      setLoading(false);
    }

    window.scrollTo(0, 0);
  };

  {
    loading && (
      <div className='fixed top-1/2 inset-x-2/4'>
        <DotLoader color={defaultColor} size={60} />
      </div>
    );
  }

  return (
    <>
      <Modal
        success
        titleIcon={
          <QuestionMarkCircleIcon className='h-6 w-6 text-green-600' />
        }
        close={close}
        color='bg-green-100'
        iconColor='text-green-600'
        heading={`Please reach out to us below, <br/> we would love to connect with you !`}
        openModal={openQueryPopup}
        setOpenModal={setOpenQueryPopup}
        paragraph={
          <>
            <div className='pt-2'>
              {/* Full Name */}
              <form autoComplete='off' onSubmit={generalQuery}>
                <div className='col-span-6 text-left'>
                  <label
                    htmlFor='first-name'
                    className='block text-sm font-medium text-gray-700'
                  >
                    First Name<sup>*</sup>
                  </label>
                  <input
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type='text'
                    name='first-name'
                    id='first-name'
                    className='input-form'
                  />
                </div>
                <div className='col-span-12 mt-4 text-left'>
                  <label
                    htmlFor='company-email'
                    className='block text-sm font-medium text-gray-700'
                  >
                    Email<sup>*</sup>
                  </label>
                  <input
                    required
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    type='email'
                    name='user-email'
                    id='user-email'
                    className='input-form'
                  />

                  <div className='col-span-12 mt-4 text-left'>
                    <label
                      htmlFor='project-briefy'
                      className='block text-sm font-medium text-gray-700'
                    >
                      Description<sup>*</sup>
                    </label>
                    <textarea
                      required
                      value={projectDesc}
                      onChange={(e) => setProjectDesc(e.target.value)}
                      id='project-briefy'
                      name='project-briefy'
                      rows={3}
                      className='input-form'
                    />
                  </div>

                  <div className=' text-right'>
                    <button
                      type='submit'
                      disabled={loading}
                      className='bg-primary hover:bg-blue-600 text-white rounded-md px-7 py-3 disabled:opacity-50  mt-5'
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </>
        }
      />
    </>
  );
};

export default QueryPopup;
