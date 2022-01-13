import React from "react";
import { pollinateMockup } from "../constants/constants";
import { ArrowRightIcon } from "@heroicons/react/solid";

const CardPortfolio = (props) => {
  const { selectedCategory, cardData } = props;

  if (
    selectedCategory.some((category) => cardData.category.includes(category)) ||
    !selectedCategory.length
  ) {
    return (
      <div
        className={` ${cardData.additionalClass} grid grid-cols-12 rounded mb-10`}
      >
        <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 p-10 ">
          <img src={cardData.logo_image} alt={cardData.name} className="mb-7" />
          <h1 className="text-4xl mt-2 font-semibold mb-3">{cardData.name}</h1>
          <p className="text-xl font-light leading-normal opacity-80">
            {cardData.short_description}
          </p>
          {cardData.product_url && (
            <a
              target="_blank"
              href={cardData.product_url}
              className="flex mt-5 underline"
            >
              Launch Website
              <ArrowRightIcon className="w-7 ml-3" />
            </a>
          )}
        </div>
        <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 ml-auto">
          <img src={cardData.thumbnail_image} alt={cardData.name} />
        </div>
      </div>
    );
  }
  return null;
};

export default CardPortfolio;