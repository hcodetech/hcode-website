import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import Head from "next/head";

import { metaData } from "../constants/constants";
import MetaTags from "../components/MetaTags";

const newsletter = () => {
  const [data, setData] = useState({
    FIRSTNAME: "",
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

    try {
      const response = await fetch(
        "https://03f10e9f.sibforms.com/serve/MUIFAFon6slsvbzyViM6v5hm5konmTHb900cNJkcvCMk-l5Tubm1j_uwDD9fyQ-FxeFObGDgLn2rffxmhaubqfcOHTuTAezf83WhBUca6gc81tBvveeskDpeWvgN2mxAglcqKVnaQSTLcqSvabDOoPrwsKAIdBAtFbr5oeI6Hz8Lnviih0O8Q0H2n5zNTkG3RAiNRb1-Frjd1J0z?isAjax=1",
        {
          method: "POST",
          body: formdata,
        }
      );
      const result = await response.json();
      setResponseMessage(result.message);
    } catch (err) {
      setResponseMessage("This email is not valid. Please try again.");
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
          <div className="mt-8  mx-auto">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                onChange={(e) =>
                  setData({ ...data, FIRSTNAME: e.target.value })
                }
                autoComplete="name"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
                placeholder="First Name"
              />

              <input
                type="email"
                onChange={(e) => setData({ ...data, EMAIL: e.target.value })}
                autoComplete="email"
                required
                className="w-full px-5 mt-4 py-3 placeholder-gray-500 focus:ring-primary focus:border-primary max-w-xl border-gray-300 rounded-md"
                placeholder="Enter your email"
              />

              <button
                type="submit"
                className="max-w-xl mx-auto w-full mt-5 flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Subscribe
              </button>
            </form>
            {responseMessage && (
              <p className=" font-bold text-sm mt-4 ml-1">{responseMessage}</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default newsletter;
