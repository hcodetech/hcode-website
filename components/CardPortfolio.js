import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
// import  YoutubeIcon  from "..public/assets/icons/youtube_icon.svg"
import YoutubeIcon from "../public/assets/icons/youtube_icon.svg";

const CardPortfolio = (props) => {
  const { selectedCategory, cardData } = props;

  if (
    cardData.category.filter((category) =>
      selectedCategory.includes(category.name)
    ).length ||
    !selectedCategory.length
  ) {
    return (
      <div
        className={` ${cardData.additionalClass} grid grid-cols-12 rounded mb-10 
        bg-[${cardData.background_color_code}] text-[${cardData.font_color_code}]`}
      >
        <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 p-8 md:p-10 flex flex-col ">
          {/* <img src={cardData.logo_image} alt={cardData.name} className="mb-7" /> */}
          <h1 className="text-4xl mt-2 font-bold mb-3">{cardData.name}</h1>
          <div className="flex flex-wrap mb-3">
            {cardData.category.slice(0, 3).map((industry) => (
              <div
                key={industry.id}
                className={`border ${
                  cardData.font_color_code === "#000000"
                    ? `border-[#000]`
                    : `border-[${cardData.font_color_code}]`
                } rounded-full px-4 py-2 text-xs mr-2 font-semibold whitespace-nowrap`}
              >
                {industry.name}
              </div>
            ))}
          </div>
          <p className="text-base md:text-lg font-light leading-normal opacity-80">
            {cardData.short_description}
          </p>
          {cardData.product_url && (
            <a
              target="_blank"
              href={cardData.product_url}
              className="flex mt-5 underline"
            >
              Product Link
              <ArrowRightIcon className="w-7 ml-3" />
            </a>
          )}
          {cardData.video_demo && (
            <a
              target="_blank"
              href={cardData.video_demo}
              className="flex mt-5 underline"
            >
              <img
                src={YoutubeIcon}
                alt="Product Demo"
                className="opacity-90 hover:opacity-100 bg-white rounded-lg hover:shadow-md"
              />
            </a>
          )}
          {cardData?.tech_stack && (
            <div className="mt-10 md:mt-auto">
              <h5 className="text-lg mt-2 font-bold">Technologies Used :</h5>
              <p className="text-base md:text-lg mt-1 font-light leading-normal ">
                {cardData.tech_stack}
              </p>
            </div>
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
