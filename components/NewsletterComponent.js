import { ArrowRightIcon } from '@heroicons/react/solid';
import { useState } from 'react';

const NewsletterComponent = () => {
  // const MAILCHIMP_URL = process.env.NEXT_PUBLIC_MAILCHIMP_URL;

  const [data, setData] = useState({
    EMAIL: '',
    email_address_check: '',
    locale: 'en',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    var formdata = new FormData();
    for (const name in data) {
      formdata.append(name, data[name]);
    }
    try {
      const response = await fetch(
        'https://03f10e9f.sibforms.com/serve/MUIFAHEhuHI-jlbG5kAb3oNQr2qnxePljtRFvRSmUvtKhnO5ZS8qXVniMI_TQqtsUun4Je2VVmNP2VwB1vHH7uJ4KfvSi6aGW476qVrnlG0SmrsCYXXDXtB3kGcQcFcwssNEeO2YcA196xMN02VVnvyTr39FK5nW9rK5CnbN87yf2tsy-eSG8bycrxkCnGAgEok6_z1QjknVIhsj?isAjax=1',
        {
          method: 'POST',
          body: formdata,
        }
      );
      const result = await response.json();
      setResponseMessage(result.message);
    } catch (err) {
      setResponseMessage('This email is not valid. Please try again.');
    }
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit}>
      <p className="font-bold  text-md mb-3">Subscribe to newsletter</p>
      <div className="flex bg-white  rounded-l-lg   text-sm">
        <input
          placeholder="Email"
          className="border-transparent flex-grow focus:border-transparent rounded-l-lg focus:ring-0 appearance-none block pl-4 pr-6 py-2 w-auto bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
          type="text"
          onChange={(e) => setData({ ...data, EMAIL: e.target.value })}
        />
        <div className="bg-primary border-primary border-2 px-2 focus:outline-none rounded-r-md">
          <button className="cursor-pointer	text-white h-full" type="submit">
            <ArrowRightIcon className="text-white h-6 w-6" />
          </button>
        </div>
      </div>
      {responseMessage && (
        <p className="font-bold text-sm mt-2 ml-1">{responseMessage}</p>
      )}
    </form>
  );
};

export default NewsletterComponent;
