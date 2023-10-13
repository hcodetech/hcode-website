import { useState } from "react";
import DotLoader from "react-spinners/DotLoader";

const NewsletterCTA = () => {
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
                  className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white mt-3 sm:mt-0 rounded-md"
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
        </div>
      </div>
    </div>
  );
};

export default NewsletterCTA;
