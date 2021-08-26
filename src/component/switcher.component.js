import { useState } from "react";
import { Tab } from "@headlessui/react";
import Form from "./form.component";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Switcher() {
  let [headers] = useState({
    "A La Carte": [],
    Drinks: [],
    Pairings: [],
    Lunch: [],
  });

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
                    name: "Tomato Dhaniya Sorba",
                    description:
                      "A rich tomato blend seasoned with a delicate touch of herbs and spices",
                    price: "6",
                  },
                  {
                    name: "Kali Mirch Chicken Soup",
                    description:
                      "Slow-boiled chicken soup, seasoned generously with crushed black pepper",
                    price: "7",
                  },
                ],
              },
              {
                name: "Chaats & Snacks",
                items: [
                  {
                    name: "Samosa Chaat",
                    description:
                      "Our in-house crispy Punjabi Samosa, mint chutney, dahi, fried sev",
                    price: "10",
                  },
                  {
                    name: "Papdi Chaat",
                    description:
                      "Papdi (fried flour crispies), boiled chickpeas, potatoes, pakoris (fried black gram fritters) and curd",
                    price: "8",
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
                    description:
                      "Creamy tomato and cashew gravy, with an interesting blend with powdered watermelon seed - Choose between Paneer or Garden Vegetables",
                    price: "18",
                  },
                  {
                    name: "Butter Chicken",
                    description:
                      "Our signature gravy with grilled chicken tikka pieces. A must try",
                    price: "22",
                  },
                ],
              },
              {
                name: "Palak Gravy",
                items: [
                  {
                    name: "Palak Paneer",
                    description:
                      "One of the most loved North Indian dishes, cottage cheese in smooth creamy delicious spinach gravy",
                    price: "18",
                  },
                  {
                    name: "Hyderabadi Chicken",
                    description:
                      "A riich, full flavoured, spinach based dish. It is made with fried onions, yoghurt and whole spices.",
                    price: "18",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  let [categoriess] = useState(
    {
      category: [
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
    }
  );
  return (
    <div className="w-full max-w-full mx-auto mt-24">
      <div className=" px-2 py-8 sm:px-0  mx-auto bg-dbeats">
        <Tab.Group>
          <Tab.List className="flex p-1 bg-gravy-light space-x-1 mx-auto max-w-md bg-gray-200  rounded-xl transition duration-500 ease-in-out ">
            {Object.keys(headers).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-sm leading-5 font-medium   rounded-lg text-white ",
                    "focus:outline-none   ",
                    selected
                      ? "bg-gradient-to-r from-green-400 to-blue-500 font-bold shadow text-white bg-gravy_accent"
                      : "text-gray-400 hover:bg-white/[0.12] hover:text-gray-600 "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panel
            index={0}
            className="  transition-all transform h-64 flex flex-col"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <Form
              className=""
              name="audio"
              subCategories={categories}
              subSubCategories={""}
            />
          </Tab.Panel>
          <Tab.Panel
            index={1}
            className="  transition-all transform h-64 flex flex-col"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            <Form className="" name="video" />
          </Tab.Panel>
          <Tab.Panel
            index={2}
            className="  transition-all transform h-64"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            {" "}
            <Form className="" name="nft" />
          </Tab.Panel>
        </Tab.Group>
      </div>
    </div>
  );
}
