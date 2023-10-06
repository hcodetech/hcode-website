import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const NewsletterCTA = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const [data, setData] = useState({
    EMAIL: "",
    email_address_check: "",
    locale: "en",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    for (const name in data) {
      formdata.append(name, data[name]);
    }

    const response = await fetch(
      "https://03f10e9f.sibforms.com/serve/MUIFAHEhuHI-jlbG5kAb3oNQr2qnxePljtRFvRSmUvtKhnO5ZS8qXVniMI_TQqtsUun4Je2VVmNP2VwB1vHH7uJ4KfvSi6aGW476qVrnlG0SmrsCYXXDXtB3kGcQcFcwssNEeO2YcA196xMN02VVnvyTr39FK5nW9rK5CnbN87yf2tsy-eSG8bycrxkCnGAgEok6_z1QjknVIhsj?isAjax=1",
      {
        method: "POST",
        body: formdata,
      }
    );
    const result = await response.json();
    setResponseMessage(result.message);
    // console.log(result.message);
  };
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-primary rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Signup For Our Newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-200">
              Stay up to date with the cool tech HCode & the World is building.
            </p>
          </div>

          <div>
            <form className="" onSubmit={handleSubmit}>
              <div className="sm:flex">
                <input
                  placeholder="Enter your email"
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white rounded-md"
                  type="email"
                  onChange={(e) => setData({ ...data, EMAIL: e.target.value })}
                />
                <button
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  type="submit"
                >
                  Submit
                </button>
              </div>
              {responseMessage && (
                <p className="text-white font-bold text-sm mt-2 ml-1">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
          {/* <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <div className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange=""
                type="email"
                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white rounded-md"
                placeholder="Enter your email"
              />
              <button onClick={handleSubmit} className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">
                Submit
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    // <MailchimpSubscribe
    //   url={MAILCHIMP_URL}
    //   render={(props) => {
    //     const { subscribe, status, message } = props || {};
    //     return (
    //       <Newsletter
    //         status={status}
    //         message={message}
    //         onValidated={(formData) => subscribe(formData)}
    //       />
    //     );
    //   }}
    // />
  );
};

export default NewsletterCTA;

function Newsletter({ status, message, onValidated }) {
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
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 bg-primary rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Signup For Our Newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-200">
              Stay up to date with the cool tech HCode & the World is building.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <div className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(event) => setEmail(event?.target?.value ?? "")}
                type="email"
                onKeyUp={(event) => handleInputKeyEvent(event)}
                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white rounded-md"
                placeholder="Enter your email"
              />
              <button
                onClick={handleFormSubmit}
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                Submit
              </button>
            </div>
            <div className="min-h-42px">
              {"sending" === status ? (
                <div className="fixed top-1/2 inset-x-2/4">
                  <DotLoader color={defaultColor} size={60} />
                </div>
              ) : null}
              {"error" === status || error ? (
                <div
                  className="text-red-900 pt-2"
                  dangerouslySetInnerHTML={{
                    __html: error || getMessage(message),
                  }}
                />
              ) : null}
              {"success" === status && "error" !== status && !error && (
                <div
                  className="text-green-300 font-bold pt-2"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
