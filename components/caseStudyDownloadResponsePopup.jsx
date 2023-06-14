/** @format */

import { CheckIcon, XIcon } from "@heroicons/react/outline";
import Modal from "./Modal";

const DownloadResponsePopup = ({ error, title, description, close }) => {
  console.log(close, "close function");
  return (
    <>
      <Modal
        success
        titleIcon={
          error ? (
            <XIcon className="text-red-700 w-6 h-6" />
          ) : (
            <CheckIcon className="w-6 h-6 text-green-700" />
          )
        }
        openModal={true}
        close={() => close()}
        color={`${error ? "bg-red-100" : "bg-green-100 "}`}
        iconColor={error ? "text-red-600" : "text-green-600"}
        heading={title}
        paragraph={description}
      />
    </>
  );
};

export default DownloadResponsePopup;
