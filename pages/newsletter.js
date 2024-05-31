import { useState } from "react";
import Head from "next/head";

import { metaData } from "../constants/constants";
import MetaTags from "../components/MetaTags";
import { Loader } from "../components/Loader";

const newsletter = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscriptionFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (typeof document !== "undefined") {
      const form = document.getElementById("sib-form-2");
      form.submit();
    }
  };
  return (
    <>
      <Head>
        <title>HCode | Monthly Newsletter by HCode Technologies</title>
        <MetaTags page={metaData.newsletter} />
      </Head>

      <div className="bg-white h-screen flex items-center new-container">
        <div className="mx-auto text-center">
          <h2 className="inline text-3xl font-extrabold tracking-tight text-gray-900 sm:block sm:text-4xl">
            Want To Hear About The Cool Tech HCode
            <br />& The World Is Building?
          </h2>
          <p className="inline text-3xl font-extrabold tracking-tight text-primary sm:block sm:text-4xl mt-5">
            Sign up for our newsletter{" "}
          </p>

          <form
            onSubmit={handleSubscriptionFormSubmit}
            className="mt-8"
            id="sib-form-2"
            method="POST"
            action="https://03f10e9f.sibforms.com/serve/MUIFACi0qb-LxFwbvXGgXuot0gMS1BTD4Ibcunq_M5f6VHC8Pr4VCnAbiLWxv_PxhBDVop0cbyL9hueAMU2uYmZtH6WnrnmMwMG8Kni2Sby3nYQS2KoEFVxOaJjI72zMRRXpwCAd2e4dm9irAwuMbQGJe3V5Ymhm3l5FHnBZX3geF8Cb_zrdW0z5oeLQxxdwA6CzsxTQdp3waQrA"
            data-type="subscription"
          >
            <input
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
              maxlength="200"
              type="text"
              id="FIRSTNAME"
              name="FIRSTNAME"
              autocomplete="off"
              placeholder="FirsrName"
              data-required="true"
              required
            />

            <input
              className="w-full px-5 mt-4 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
              type="email"
              id="EMAIL"
              name="EMAIL"
              autocomplete="off"
              placeholder="Enter your email"
              data-required="true"
              required
            />

            <input type="hidden" name="email_address_check" value="" />
            <input type="hidden" name="locale" value="en" />

            <button
              className="max-w-xl mx-auto w-full mt-5 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              form="sib-form-2"
              type="submit"
            >
              {isLoading ? <Loader /> : "SUBSCRIBE"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default newsletter;
