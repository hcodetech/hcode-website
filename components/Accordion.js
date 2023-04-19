import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

const Accordion = ({ data }) => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }
    setClicked(index);
  };

  return (
    <div className="new-container py-12">
      <div className="text-center my-4">
        <p className="opacity-50">FAQs</p>
        <h2 className="text-2xl md:text-4xl font-semibold capitalize">
          Got any Questions?
        </h2>
      </div>
      <div className="acc_container mt-8">
        {data.map((item, index) => {
          return (
            <div className="border-b-2 py-3" key={index}>
              <div className="wrap" onClick={() => toggle(index)} key={index}>
                <h3 className="text-left">{item.question}</h3>
                <span>
                  {clicked === index ? (
                    <MinusIcon className="h-6 w-6" />
                  ) : (
                    <PlusIcon className="h-6 w-6" />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className="dropdown">
                  <p
                    className="leading-normal"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  ></p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
