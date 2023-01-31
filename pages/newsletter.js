import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Head from "next/head";

import MailchimpSubscribe from "react-mailchimp-subscribe";
import { metaData } from "../constants/constants";
import MetaTags from "../components/MetaTags";

const newsletter = () => {
  const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;
  return (
    <>
      <Head>
        <title>HCode | Monthly Newsletter by HCode Technologies</title>
        <MetaTags page={metaData.newsletter} />
      </Head>
      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={(props) => {
          const { subscribe, status, message } = props || {};
          return (
            <NewsLetterPage
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          );
        }}
      />
    </>
  );
};

export default newsletter;

export function NewsLetterPage({ status, message, onValidated }) {
  const defaultColor = "#373536";

  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {
    setError(null);
    if (!email && !firstName) {
      setError("Please fill up the form");
      return null;
    }
    if (!email) {
      setError("Please enter a valid email address");
      return null;
    }
    if (!firstName) {
      setError("Please enter a valid firstName address");
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email, FNAME: firstName });

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
    <div className="bg-white h-screen flex items-center new-container">
      <div className="mx-auto text-center">
        <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
          Want To Hear About The Cool Tech HCode
          <br />& The World Is Building?
        </h2>
        <p className="inline text-3xl font-extrabold tracking-tight text-primary sm:block sm:text-4xl mt-5">
          Sign up for our newsletter{" "}
        </p>
        <div className="mt-8  mx-auto">
          <div className="mb-2">
            <input
              onChange={(event) => setFirstName(event?.target?.value ?? "")}
              type="text"
              onKeyUp={(event) => handleInputKeyEvent(event)}
              autoComplete="name"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
              placeholder="First Name"
            />
          </div>
          <input
            onChange={(event) => setEmail(event?.target?.value ?? "")}
            type="email"
            onKeyUp={(event) => handleInputKeyEvent(event)}
            autoComplete="email"
            required
            className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
            placeholder="Enter your email"
          />

          <button
            onClick={handleFormSubmit}
            className="max-w-xl mx-auto w-full mt-5 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Subscribe
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
  );
}
