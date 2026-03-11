/** @format */

import Modal from "./Modal";

import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const GetQuoteResponsePopUp = ({ error, title, description, close }) => {
  return (
    <>
      <Modal
        success
        titleIcon={
          error ? (
            <XMarkIcon className="text-red-700 h-6 w-6" />
          ) : (
            <CheckIcon className="text-green-700 w-6 h-6" />
          )
        }
        close={close}
        color={error ? "bg-red-100" : "bg-green-100"}
        iconColor={""}
        heading={title}
        openModal={true}
        // setOpenModal
        paragraph={description}
      />
    </>
  );
};

export default GetQuoteResponsePopUp;
