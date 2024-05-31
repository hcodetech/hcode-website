import { Newsletter_popup_img } from "../constants/constants";
import React, {  useState } from "react";
import { XCircleIcon } from "@heroicons/react/solid";
import { Loader } from "./Loader";
import NewsletterModal from "./NewsletterModal";

const NewsletterPopUP = ({ showNewsLetterPopup, setShowNewsLetterPopup }) => {
  const [isLoading, setIsLoading] = useState(false);

  let url;
  if (typeof window !== "undefined") {
    url = window.location.pathname;
  }

  const handleSubscriptionFormSubmit = (e) => {
    // e.preventDefault();
    setIsLoading(true);
    if (typeof document !== "undefined") {
      const form = document.getElementById("sib-form-3");
      form.submit();
    }
  };
  if (url?.includes("Thankyou")) return null;

  return (
    <div className="">
      <div className="bg-black inset-0 w-full h-full">
        <NewsletterModal
          showNewsLetterPopup={showNewsLetterPopup}
          setShowNewsLetterPopup={setShowNewsLetterPopup}
        >
          <div className="relative">
            <div className="absolute -top-2 -right-1">
              <div className="relative bg-black h-6 rounded-full ml-auto  left-1.5 w-6">
                <XCircleIcon
                  onClick={() => setShowNewsLetterPopup(false)}
                  className="w-8 h-8 cursor-pointer absolute  -top-1 -left-1 text-white"
                />
              </div>
            </div>

            <img
              src={Newsletter_popup_img}
              className="w-full h-[150px] md:h-auto object-fill"
            />

            <div className="mx-4 sm:mx-8">
              <h2 className="text-xl lg:text-3xl mt-3 font-bold">
                Subscribe to our newsletter
              </h2>

              <form
                id="sib-form-3"
                method="POST"
                action="https://03f10e9f.sibforms.com/serve/MUIFACi0qb-LxFwbvXGgXuot0gMS1BTD4Ibcunq_M5f6VHC8Pr4VCnAbiLWxv_PxhBDVop0cbyL9hueAMU2uYmZtH6WnrnmMwMG8Kni2Sby3nYQS2KoEFVxOaJjI72zMRRXpwCAd2e4dm9irAwuMbQGJe3V5Ymhm3l5FHnBZX3geF8Cb_zrdW0z5oeLQxxdwA6CzsxTQdp3waQrA"
                data-type="subscription"
                onSubmit={handleSubscriptionFormSubmit}
              >
                <div className="flex mt-4  flex-col rounded-2xl bg-white/50">
                  <label className="font-semibold">First Name</label>
                  <input
                    label="Name"
                    className=" px-4  mt-2 py-1.5 placeholder-gray-500 focus:ring-primary focus:border-primary  border-gray-300 border-2 rounded-sm"
                    maxlength="200"
                    type="text"
                    id="FIRSTNAME"
                    name="FIRSTNAME"
                    autocomplete="off"
                    placeholder="FirsrName"
                    data-required="true"
                    required
                  />
                  <label className="font-semibold mt-4 ">Email</label>
                  <input
                    label="Email"
                    className=" px-4 mt-2 py-1.5 placeholder-gray-500 focus:ring-primary focus:border-primary border-2 border-gray-300 rounded-sm"
                    type="text"
                    id="EMAIL"
                    name="EMAIL"
                    autocomplete="off"
                    placeholder="Enter your email"
                    data-required="true"
                    required
                  />
                </div>

                <input type="hidden" name="email_address_check" value="" />
                <input type="hidden" name="locale" value="en" />
                <button
                  className="max-w-xl mx-auto mt-5 mb-7 flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-blue-700 "
                  form="sib-form-3"
                  type="submit"
                >
                  {isLoading ? <Loader className="px-7 py-1 " /> : "Subscribe"}
                </button>

                <p className="text-center text-gray-700 text-sm md:text-base pb-8 max-w-lg mx-auto mt-7">
                  We share two monthly newsletters, exploring technology trends
                  from our perspective and around the world.
                </p>
              </form>
            </div>
          </div>
        </NewsletterModal>
      </div>
    </div>
  );
};

export default NewsletterPopUP;
