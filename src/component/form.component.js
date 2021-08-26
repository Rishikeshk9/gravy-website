/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import { useState } from "react";

import React from "react";

import { RadioGroup } from "@headlessui/react";
import non_veg from "../assets/1x/icons/non-veg.svg";

const Form = (props) => {
  const plans = [
    {
      name: "Sstup",
      ram: "12GB",
      cpus: "6 CPUs",
      disk: "160 GB SSD disk",
    },
    {
      name: "Business",
      ram: "16GB",
      cpus: "8 CPUs",
      disk: "512 GB SSD disk",
    },
    {
      name: "Enterprise",
      ram: "32GB",
      cpus: "12 CPUs",
      disk: "1024 GB SSD disk",
    },
  ];

  const [selected, setSelected] = useState(props.subCategories);
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    props.subCategories
  );

  return (
    <div className="mx-auto   px-5 h-max ">
      <div className="  my-3 md:w-max  px-1  mx-auto  text-center w-80   ">
        {Object.values(props.subCategories["category"]).map((category, idx) => (
          <div className="px-1 flex rounded-lg mx-auto border-2 bg-gravy border-gravy-light shadow-lg overflow-x-auto">
            <RadioGroup
              value={selectedSubCategory}
              onChange={setSelectedSubCategory}
            >
              <div className="  flex  ">
                {category.subCategory.map((plan) => (
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                      `${active ? " " : ""}
                  ${
                    checked
                      ? "  text-white bg-gravy_accent shadow-lg"
                      : " text-white opacity-50"
                  }
                    relative   rounded   my-1 p-2  cursor-pointer flex  `
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className=" items-center justify-between  ">
                          <div className="  items-center overflow-x-auto whitespace-nowrap">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${
                                  checked ? "text-white " : " "
                                }`}
                              >
                                {plan.name}

                                {console.log(
                                  selectedSubCategory.subSubCategory
                                )}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className={`inline ${
                                  checked ? "text-sky-100" : "text-gray-500"
                                }`}
                              ></RadioGroup.Description>
                            </div>
                          </div>
                          {checked && (
                            <div className="flex-shrink-0 text-white">
                              <CheckIcon className="w-6 h-6 hidden" />
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        ))}
      </div>
      {/* 3rd category */}
      <div className="    my-3 text-center w-full flex">
        <div className="  px-1 lg:w-max w-80 mx-auto border-2 bg-gravy border-gravy-light shadow-lg rounded-lg">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="flex overflow-x-auto whitespace-nowrap">
              {selectedSubCategory.subSubCategory
                ? selectedSubCategory.subSubCategory.map((plan) => (
                    <RadioGroup.Option
                      key={plan.name}
                      value={plan}
                      className={({ active, checked }) =>
                        `${active ? " " : ""}
                  ${
                    checked
                      ? "  text-white bg-gravy_accent shadow-lg"
                      : " text-white opacity-50"
                  }
                    relative   rounded  my-1 p-2   cursor-pointer flex  `
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium flex ${
                                    checked ? "text-white " : " "
                                  }`}
                                >
                                  {plan.name}
                                  {plan.non_veg ? (
                                    <img
                                      className=" ml-1 opacity-75 shadow  w-4  lg:max-h-96  "
                                      alt="gallery"
                                      src={non_veg}
                                    ></img>
                                  ) : (
                                    ""
                                  )}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked ? "text-sky-100" : "text-gray-500"
                                  }`}
                                ></RadioGroup.Description>
                              </div>
                            </div>
                            {checked && (
                              <div className="flex-shrink-0 text-white">
                                <CheckIcon className="w-6 h-6 hidden" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))
                : ""}
            </div>
          </RadioGroup>
        </div>
      </div>
      {/* Menu                   */}
      <div className=" border-2  bg-gravy border-gravy-light shadow-lg flex p-4  mx-auto  rounded-lg    hover:scale-100 transform transition-all">
        {Object.values(props.subCategories["category"]).map((category, idx) => (
          <div className=" mx-auto ">
            {selected.items ? (
              selected.items.map((item) => (
                <div className=" my-1 divide-y divide-white divide-opacity-25 ">
                  <div className="flex justify-between  my-1 ">
                    <p className="  text-gravy_accent font-semibold flex  justify-between">
                      {item.name}
                      {item.type ? (
                        <p className="bg-gravy_accent shadow-lg rounded ml-2 mr-1 px-1 text-xs self-center   text-white">
                          {item.type}
                        </p>
                      ) : (
                        ""
                      )}

                      {item.spicy ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mx-1 h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        ""
                      )}
                    </p>
                    <p className="  text-gravy_accent font-semibold ">
                      {item.price}
                    </p>
                  </div>
                  <p className="  text-white opacity-50 mb-3">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="  text-white opacity-50 font-sm self-center mx-auto text-center">
                Select Category
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export default Form;
