import { ArrowRightIcon } from '@heroicons/react/solid';
import { useState, useEffect } from 'react';
import { Loader } from './Loader';

const NewsletterComponent = () => {

  const [isLoading, setIsLoading] = useState(false)

  const handleSubscriptionFormSubmit = (e) => {
    // e.preventDefault();
    setIsLoading(true)
    if (typeof document !== 'undefined') {
      const form = document.getElementById('sib-form')
      form.submit()
    }


  }

  return (
    <form id="sib-form" action="https://03f10e9f.sibforms.com/serve/MUIFAByIhfN10ItDZjHKGbm9oZZx3DB2fCxWvpaXYnQq4ndeK2SHSMLUlERLNAr9JG9x6NLEcyIitu6TmW0G5OZ8pV8pD6YxsDtBw3Ur3QDWVTAmDMoP_DI_TlEYoKUZxSZwJIuOCeAngRBRgMFpyc2uDOGrcd0GJ7r0vfeqgJrMlXVoBBdhMN-NnIGZuX7vTk-G6sPRcHPPVquv" className="mt-10"
      onSubmit={handleSubscriptionFormSubmit}
      method="POST">
      <p className="font-bold  text-md mb-3">Subscribe to newsletter</p>
      <div className="flex bg-white  rounded-l-lg   text-sm">

        <input className="border-transparent flex-grow focus:border-transparent rounded-l-lg focus:ring-0 appearance-none block pl-4 pr-6 py-2 w-auto bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email" data-required="true" required />

        <div className="bg-primary border-primary border-2 px-2 focus:outline-none rounded-r-md">
          <button className="cursor-pointer	text-white h-full"
            type='submit'
            form="sib-form"
          >
            {isLoading ? <Loader /> : <ArrowRightIcon className="w-4" />}
          </button>
        </div>
      </div>
      <input type="hidden" name="email_address_check" />
      <input type="hidden" name="locale" value="en" />

    </form >

  );
};

export default NewsletterComponent;
