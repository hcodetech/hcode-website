import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";
import { Loader } from "./Loader";

const NewsletterCTA = () => {
  const [data, setData] = useState({
    EMAIL: "",
    email_address_check: "",
    locale: "en",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    for (const name in data) {
      formdata.append(name, data[name]);
    }
    try {
      const response = await fetch(
        "https://03f10e9f.sibforms.com/serve/MUIFAHEhuHI-jlbG5kAb3oNQr2qnxePljtRFvRSmUvtKhnO5ZS8qXVniMI_TQqtsUun4Je2VVmNP2VwB1vHH7uJ4KfvSi6aGW476qVrnlG0SmrsCYXXDXtB3kGcQcFcwssNEeO2YcA196xMN02VVnvyTr39FK5nW9rK5CnbN87yf2tsy-eSG8bycrxkCnGAgEok6_z1QjknVIhsj?isAjax=1",
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


  const handleSubscriptionFormSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true)
    if (typeof document !== 'undefined') {
      const form = document.getElementById('sib-form-1')
      form.submit()
    }


  }
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
            <form id="sib-form-1" method="POST" action="https://03f10e9f.sibforms.com/serve/MUIFAByIhfN10ItDZjHKGbm9oZZx3DB2fCxWvpaXYnQq4ndeK2SHSMLUlERLNAr9JG9x6NLEcyIitu6TmW0G5OZ8pV8pD6YxsDtBw3Ur3QDWVTAmDMoP_DI_TlEYoKUZxSZwJIuOCeAngRBRgMFpyc2uDOGrcd0GJ7r0vfeqgJrMlXVoBBdhMN-NnIGZuX7vTk-G6sPRcHPPVquv"
              className=""
              onSubmit={handleSubscriptionFormSubmit}
            >
              <div className="sm:flex">

                <input className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white mt-3 sm:mt-0 rounded-md" type="email" id="EMAIL" name="EMAIL" placeholder="Email" data-required="true" required />
                {/* <input
                  placeholder="Enter your email"
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white mt-3 sm:mt-0 rounded-md"
                  type="email"
                  onChange={(e) => setData({ ...data, EMAIL: e.target.value })}
                /> */}


                <button
                  className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent shadow text-base font-medium rounded-md text-white bg-blue-700  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
                  type="submit"
                  form="sib-form-1"
                >
                  {isLoading ? <Loader className=' px-[18px]' /> : 'Submit'}
                </button>
              </div>

              <input type="hidden" name="email_address_check" />
              <input type="hidden" name="locale" value="en" />


            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;


// https://03f10e9f.sibforms.com/serve/MUIFAFeRtv6AVZm_lILn4jr0833QmBFSEE7n3NbyocvIcQOmEVPvJbxJIZgFjJfGc7WB3E3a3bn0Wx8oE6MOPQIq2dWIxBVfN1qs70_qWGaq5yS-YXqB16GZGqDEGM29Yho-86bqogJ6EZX_VwHZlznsNb7a_yEehOAhbGplhcvgtWzMP1l4hMcxgzm921yhRowhC8PSCENp6POS