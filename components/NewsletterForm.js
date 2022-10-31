import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import {ArrowRightIcon} from "@heroicons/react/solid"
const NewsletterForm = ({ status, message, onValidated }) => {
  const defaultColor = "#373536";

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);

    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });

    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  };

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = (event) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  };

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if (!message) {
      return null;
    }
    const result = message?.split("-") ?? null;
    if ("0" !== result?.[0]?.trim()) {
      return message;
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? formattedMessage : null;
  };

  return (
    <div>
      <h3 className="mb-1 font-bold  text-md mt-10 ">
        Subscribe to newsletter
      </h3>
      <div className="newsletter-input-fields mt-2 w-auto">
        <div className="mc-field-group flex">
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            placeholder="Email"
            className="border-transparent focus:border-transparent rounded-l-lg focus:ring-0 appearance-none block pl-4 pr-6 py-2 w-auto bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            onKeyUp={(event) => handleInputKeyEvent(event)}
          />
         <div className="bg-primary border-primary border-2 px-2 focus:outline-none rounded-r-md">
          <button
            className="cursor-pointer	text-white h-full"
            onClick={handleFormSubmit}
          > 
          <ArrowRightIcon className="h-5 w-5 "/>
          </button>
        </div>
        </div>
        
      </div>
      <div className="min-h-42px">
        {"sending" === status ? (
          <div className="fixed top-1/2 inset-x-2/4">
            <DotLoader color={defaultColor} size={60} />
          </div>
        ) : null}
        {"error" === status || error ? (
          <div
            className="text-red-700 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage(message) }}
          />
        ) : null}
        {"success" === status && "error" !== status && !error && (
          <div
            className="text-green-500 font-bold pt-2"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
      </div>
    </div>
  );
};

export default NewsletterForm;
