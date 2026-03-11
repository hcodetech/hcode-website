/** @format */

import { useState } from 'react';
import Modal from './Modal';
import { getAPIUrl } from '../pages/api/APIHelpers';
import { apiRoutes } from '../pages/api/APIRoutes';
import {
  CheckIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { DotLoader } from 'react-spinners/DotLoader';

const QueryResponsePopUp = ({ error, title, description, close }) => {
  return (
    <>
      <Modal
        success
        titleIcon={
          error ? (
            <XMarkIcon className='text-red-700 h-6 w-6' />
          ) : (
            <CheckIcon className='text-green-700 w-6 h-6' />
          )
        }
        color={error ? 'bg-red-100' : 'bg-green-100'}
        iconColor={''}
        close={close}
        heading={title}
        openModal={true}
        // setOpenModal
        paragraph={description}
      />
    </>
  );
};

export default QueryResponsePopUp;
