import { XCircleIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Newsletter_popup_img } from "../constants/constants";

const NewsletterPopUp = ({ setShowNewsLetterPopup }) => {
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
    <div className=" fixed max-w-lg  z-10 top-28 left-1/3 ">
      <div className="relative bg-black h-6 rounded-full ml-auto top-11 left-1.5 w-6">
        <XCircleIcon
          onClick={() => setShowNewsLetterPopup(false)}
          className="w-8 h-8 cursor-pointer absolute  -top-1 -left-1 text-white"
        />
      </div>

      <div className="bg-white ">
        <div className="mx-auto ">
          <div className="mt-8  mx-auto">
            <img src={Newsletter_popup_img} className="w-full" />

            <div className="mx-8">
              <h2 className="text-3xl mt-3 font-bold">
                Subscribe to our newsletter
              </h2>
              {responseMessage && (
                <p className="font-bold text-sm mt-2 ml-1">{responseMessage}</p>
              )}
              <form onSubmit={handleSubmit} className="flex mt-4 flex-col">
                <label className="font-semibold">First Name</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setData({ ...data, FIRSTNAME: e.target.value })
                  }
                  autoComplete="name"
                  required
                  className=" px-4  mt-2 py-1.5 placeholder-gray-500 focus:ring-primary focus:border-primary  border-gray-300 border-2 rounded-sm"
                  placeholder="Firstname"
                />

                <label className="font-semibold mt-3 ">Email</label>

                <input
                  type="email"
                  onChange={(e) => setData({ ...data, EMAIL: e.target.value })}
                  autoComplete="email"
                  required
                  className=" px-4 mt-2 py-1.5 placeholder-gray-500 focus:ring-primary focus:border-primary border-2 border-gray-300 rounded-sm"
                  placeholder="Enter your email"
                />

                <button
                  type="submit"
                  className="max-w-xl mx-auto mt-5 flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 "
                >
                  Subscribe
                </button>
                <p className="text-center text-gray-700 pb-8 max-w-lg mx-auto mt-4">
                  We share two monthly newsletters, exploring technology trends
                  from our perspective and around the world.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopUp;
