import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let [categories] = useState({
    category: [
      {
        name: "A La Carte",
        subCategory: [
          {
            name: "Starters",
            subSubCategory: [
              {
                name: "Soups",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Chaats & Snacks",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
          {
            name: "Gravies",
            subSubCategory: [
              {
                name: "Makhani Gravy",
                items: [
                  {
                    name: "Makhanwala",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Palak Gravy",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Drinks",
        subCategory: [
          {
            name: "Starters",
            subSubCategory: [
              {
                name: "Soups",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Chaats & Snacks",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
          {
            name: "Gravies",
            subSubCategory: [
              {
                name: "Makhani Gravy",
                items: [
                  {
                    name: "Makhanwala",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Chaats & Snacks",
                items: [
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                  {
                    name: "",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0 mt-52">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {Object.values(categories["category"]).map((category, idx) => (
            <Tab
              key={category.name}
              className={({ selected }) =>
                classNames(
                  "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) =>
            /* chunks categories object */
            posts.map((post) => (
              <Tab.Panel key={idx} className={classNames("   rounded-xl p-3")}>
                {/* chunks subcategories object   */}
                {post.subCategory.map((post) => (
                  <Tab.Group vertical>
                    <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                      <Tab
                        key={post.name}
                        className={({ selected }) =>
                          classNames(
                            "w-full py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg",
                            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                            selected
                              ? "bg-white shadow"
                              : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                          )
                        }
                      >
                        {post.name}
                      </Tab>
                    </Tab.List>

                    <Tab.Panels>
                      <Tab.Panel
                        key={idx}
                        className={classNames("   rounded-xl p-3")}
                      >
                        ass
                      </Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                ))}
              </Tab.Panel>
            ))
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
