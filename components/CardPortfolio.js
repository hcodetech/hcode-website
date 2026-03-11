/** @format */

import React, { useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import YoutubeIcon from "../public/assets/icons/youtube_icon.svg";
import { useRouter } from "next/router";
import CaseStudyModalPopup from "./CaseStudyModalPopup";
import DownloadResponsePopup from "./caseStudyDownloadResponsePopup";

const CardPortfolio = (props) => {
  const { selectedCategory, cardData } = props;
  const { pathname } = useRouter();
  const [caseStudyModalPopup, setCaseStudyModalPopup] = useState(false);
  const [caseStudyResponsePopup, setCaseStudyResponsePopup] = useState({
    show: false,
    title: "",
    description: "",
    error: false,
  });
  const [mediaId, setMediaId] = useState();

  const handleCaseStudyBtnClick = (media_id) => {
    setCaseStudyModalPopup(true);
    setMediaId(media_id);
  };

  const downloadCallback = (success, userEmail) => {
    setCaseStudyModalPopup(false);
    if (success)
      setCaseStudyResponsePopup({
        show: true,
        title: "Thank You !",
        description: `This case study has been sent to  ${userEmail}`,
        error: false,
      });
    else
      setCaseStudyResponsePopup({
        show: true,
        title: "Oops !",
        description:
          "We are unable to register your request at current time. Please send us an email at hello@hcode.tech",
        error: true,
      });
  };

  //filter case studies feild
  const filterCaseStudies = cardData.media?.filter(
    (mediaFile) => mediaFile.type === "case_study"
  );

  if (
    cardData.category?.filter((category) =>
      selectedCategory.includes(category?.name)
    ).length ||
    !selectedCategory.length
  ) {
    return (
      <>
        {caseStudyModalPopup && (
          <CaseStudyModalPopup
            close={() => setCaseStudyModalPopup(false)}
            mediaId={mediaId}
            downloadCallback={downloadCallback}
            caseStudyModalPopup={caseStudyModalPopup}
            setCaseStudyModalPopup={setCaseStudyModalPopup}
          />
        )}
        {caseStudyResponsePopup?.show && (
          <DownloadResponsePopup
            close={() => setCaseStudyResponsePopup({ show: false })}
            error={caseStudyResponsePopup?.error}
            title={caseStudyResponsePopup.title}
            description={caseStudyResponsePopup?.description}
          />
        )}

        <div
          className={` ${cardData.additionalClass} grid grid-cols-12 rounded mb-10
        bg-[${cardData.background_color_code}] text-[${cardData.font_color_code}] `}
        >
          <div className="col-span-12 order-2 lg:order-1 lg:col-span-6 p-8 md:p-10 flex flex-col ">
            <h2 className="text-4xl mt-2 font-bold mb-3">{cardData.name}</h2>
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
            <p className="text-base md:text-lg font-light leading-normal pt-4 opacity-80">
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
                  className="opacity-90 hover:opacity-100 bg-white w-auto rounded-lg hover:shadow-md"
                  height="50px"
                  width="80px"
                  loading="lazy"
                />
              </a>
            )}
            <div>
              {cardData?.tech_stack && (
                <div className="mt-10 md:mt-auto">
                  <h5 className="text-lg mt-2 font-bold">
                    Technologies Used :
                  </h5>
                  <p className="text-base md:text-lg mt-1 font-light leading-normal">
                    {cardData.tech_stack}
                  </p>
                </div>
              )}
            </div>

            {/* button on our work page cards  */}
            <div className="lg:mt-auto mt-16 sm:ml-auto">
              {pathname === "/our-work" && filterCaseStudies.length > 0 && (
                <a href="/case-studies" className="primary-outline">
                  Get case study
                </a>
              )}

              {/* button on case studies page cards*/}
              {pathname === "/case-studies" &&
                filterCaseStudies.length > 0 &&
                filterCaseStudies.map((media) => (
                  <a
                    onClick={() => handleCaseStudyBtnClick(media.id)}
                    className="primary-button cursor-pointer"
                  >
                    Request case study
                  </a>
                ))}
            </div>
          </div>
          <div className="col-span-12 order-1 lg:order-2 lg:col-span-6 ml-auto">
            <img
              src={cardData.thumbnail_image}
              alt={cardData.name}
              className="h-full w-full object-cover"
              loading="lazy"
              width="500px"
              height="500px"
            />
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default CardPortfolio;
