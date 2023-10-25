import React from "react";
import { Thanku_page_img } from "../constants/constants";

const SubscriptionThankuPage = () => {
  return (
    <div className="max-w-xl mx-5 sm:mx-auto pt-24">
      <h4 className="font-bold text-xl mt-4">
        Welcome to the HCode community!{" "}
      </h4>
      <div className=" bg-gray-100 rounded-md p-2 mt-6">
        <img src={Thanku_page_img} className="h-96  w-full object-fill" />
      </div>

      <p className="mt-6 leading-relaxed">
        Hi there,
        <br />
        We're so excited to have you on board! Our newsletters will keep you
        up-to-date on the latest tech trends, insights, and tips, so you can
        stay ahead of the curve.
      </p>
      <p className="mt-4 leading-relaxed">
        Thank you for choosing HCode! We look forward to connecting with you and
        sharing our passion for tech. In the meantime, check out your inbox for
        a welcome email with more information.
      </p>
      <p className="mt-3"> Thanks again for subscribing!</p>

      <p className="font-bold mb-10">- Team HCode</p>
    </div>
  );
};

export default SubscriptionThankuPage;
