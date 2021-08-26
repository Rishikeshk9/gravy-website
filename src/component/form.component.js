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
    <div className="mx-auto  h-64">
      <div className=" bg-gravy-light my-3  rounded-lg  px-5  text-center w-full flex">
        {Object.values(props.subCategories["category"]).map((category, idx) => (
          <div className="flex">
            <RadioGroup
              value={selectedSubCategory}
              onChange={setSelectedSubCategory}
            >
              <div className="  flex">
                {category.subCategory.map((plan) => (
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ active, checked }) =>
                      `${active ? " " : ""}
                  ${
                    checked
                      ? "  text-white bg-gravy_accent"
                      : " text-white opacity-50"
                  }
                    relative mx-3 rounded   my-1 p-2  cursor-pointer flex  `
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
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
      <div className=" bg-gravy-light  rounded-lg  px-5 my-3 text-center w-full flex">
        <div className="flex">
          <RadioGroup value={selected} onChange={setSelected}>
            <div className="  flex">
              {selectedSubCategory.subSubCategory
                ? selectedSubCategory.subSubCategory.map((plan) => (
                    <RadioGroup.Option
                      key={plan.name}
                      value={plan}
                      className={({ active, checked }) =>
                        `${active ? " " : ""}
                  ${
                    checked
                      ? "  text-white bg-gravy_accent"
                      : " text-white opacity-50"
                  }
                    relative mx-3 rounded  my-1 p-2   cursor-pointer flex  `
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-white " : " "
                                  }`}
                                >
                                  {plan.name}
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

      <div className=" bg-gravy-light mt-5  rounded-lg  px-5 py-2 mb-5 text-center w-full max-w-md mx-auto flex">
        {Object.values(props.subCategories["category"]).map((category, idx) => (
          <div className="text-left ">
            {selected.items
              ? selected.items.map((item) => (
                  <div className=" my-5">
                    <div className="flex justify-between ">
                      <p className="  text-gravy_accent font-semibold ">
                        {item.name}
                      </p>
                      <p className="  text-gravy_accent font-semibold ">
                        {item.price}
                      </p>
                    </div>
                    <p className="  text-white opacity-50">
                      {item.description}
                    </p>
                  </div>
                ))
              : ""}
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
