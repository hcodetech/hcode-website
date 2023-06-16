/** @format */

import Modal from "./Modal";

import { CheckIcon, XIcon } from "@heroicons/react/outline";

const GetQuoteResponsePopUp = ({ error, title, description, close }) => {
  return (
    <>
      <Modal
        success
        titleIcon={
          error ? (
            <XIcon className="text-red-700 h-6 w-6" />
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
