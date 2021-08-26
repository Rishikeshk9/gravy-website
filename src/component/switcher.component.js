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
                    type: "SIGNATURE",
                  },
                  {
                    name: "Papdi Chaat",
                    description:
                      "Papdi (fried flour crispies), boiled chickpeas, potatoes, pakoris (fried black gram fritters) and curd",
                    price: "8",
                  },
                  {
                    name: "Homemade Dry Fruit Kachori",
                    description:
                      "A delicious, spicy, fried puffed pastry with our signature dry-fruit stuffing",
                    price: "8",
                  },
                  {
                    name: "Onion Pakora",
                    description:
                      "Deep fried onion fritters - a traditional favourite",
                    price: "8",
                  },
                  {
                    name: "Masala Pappad / Khakra",
                    description:
                      "A bruschetta-styled Papadum or Khakra (healthy choice)",
                    price: "8",
                  },
                  {
                    name: "Spicy Peanuts",
                    description: "A bruschetta-styled Peanuts",
                    price: "4",
                  },
                  {
                    name: "Smoked Papad Chura",
                    description:
                      "Mixture of smoked crushed papad with ghee, onion and chili powder",
                    price: "8",
                    spicy: true,
                  },
                ],
              },
              {
                name: "Small Plates",
                items: [
                  {
                    name: "Paneer Tikka",
                    description:
                      "The perfect blend of spices and a smoky touch to cottage cheese cubes. Choose your base – Achari or Mint",
                    price: "17",
                  },
                  {
                    name: "Desi Cheese Platter",
                    description: "Assorted cheese platter - desi style",
                    price: "18",
                  },
                  {
                    name: "Tandoori Mushroom",
                    description:
                      "Fresh button mushrooms marinated in yogurt and fresh spices. This delightful blend is then cooked to perfection in the tandoor",
                    price: "16",
                  },
                  {
                    name: "Tandoori Vegetables",
                    description:
                      "Fresh garden vegetables marinated in yogurt and fresh spices. This delightful blend is then cooked to perfection in the tandoor",
                    price: "16",
                  },
                  {
                    name: "Mini Samosa",
                    description:
                      "We heard you all….our homemade samosas now in a bite...mini size",
                    price: "15",
                  },
                  {
                    name: "Ajwaini Soya Chaap",
                    description:
                      "A Delhi favourite, tandoor grilled soya chunks with a touch of Ajwain (carom seed)",
                    price: "18",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Dudhiya Kebab",
                    description:
                      "A milk, cream & cheese kebab. What’s not to love!",
                    price: "18",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Gobi Manchurian",
                    description:
                      "Popular Indian-Chinese dish. Fried cauliflower florets are tossed in a flavorful Manchurian sauce",
                    price: "16",
                    spicy: true,
                  },
                  {
                    name: "Chilli Paneer / Soya Chaap",
                    description: "Assorted cheese platter - desi style",
                    price: "17",
                    spicy: true,
                  },
                  {
                    name: "Baby Potato Fry",
                    description:
                      "Stir-fried baby potatoes topped up with light spices",
                    price: "17",
                  },
                  {
                    name: "Masala Stuffed Rice Balls",
                    description:
                      "Crispy deep fried balls of rice with a mozzarella cheese filling and crunchy breadcrumb coating",
                    price: "15",
                  },
                ],
              },
              {
                name: "Small-Plates",
                non_veg: true,
                items: [
                  {
                    name: "Egg Bhurji",
                    description: "Indian scrambled eggs - masala style",
                    price: "12",
                  },
                  {
                    name: "Chicken Tikka",
                    description:
                      "Grilled boneless chicken, Choose from an achari or mint chutney base",
                    price: "17",
                  },
                  {
                    name: "Tandoori Chicken Half/Full",
                    description: "Grilled chicken on the bone",
                    price: "17/32",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Chilli Chicken",
                    description:
                      "A spicy Indian-Chinese variation of sweet and sour chicken",
                    price: "17",
                    spicy: true,
                  },
                  {
                    name: "Chicken Seekh Kebab",
                    description: "A melt in your mouth minced chicken kebab",
                    price: "18",
                  },
                  {
                    name: "Fish Tikka",
                    description: "Grilled dory fish with an achari base",
                    price: "20",
                  },
                  {
                    name: "Tandoori Pomfret",
                    description:
                      "Grilled whole pomfret, home-made yoghurt & selected spices",
                    price: "20",
                  },
                  {
                    name: "Tandoori Lamb Chop",
                    description:
                      "Grilled lamb chops, red onion, red wine vinegar, yoghurt & spices",
                    price: "22",
                    type: "SIGNATURE",
                  },

                  {
                    name: "Lamb Seekh Kebab",
                    description: "A melt in your mouth minced lamb kebab",
                    price: "20",
                  },
                  {
                    name: "Lasooni Jhinga",
                    description:
                      "Tiger prawns tossed in ginger, garlic and chilli, coated in homemade yoghurt with cardamom, saffron and desi chilli",
                    price: "22",

                    type: "SIGNATURE",
                  },
                  {
                    name: "Prawns Butter Chilli Fry",
                    description:
                      "Prawns pan cooked in butter and garlic, topped up with our ground spices",
                    price: "22",
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
                    type: "SIGNATURE",
                    non_veg: true,
                  },
                  {
                    name: "Jhinga Maharaja",
                    description: "Our signature gravy with tiger prawns",
                    price: "22",
                    non_veg: true,
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
                    type: "SIGNATURE",
                    non_veg: true,
                  },
                  {
                    name: "Hyderabadi Chicken",
                    description:
                      "A rich, full flavoured, spinach based dish. It is made with fried onions, yoghurt and whole spices.",
                    price: "18",
                  },
                  {
                    name: "Prawns Hari Mirch Masala",
                    description:
                      "One of the most loved North Indian dishes, cottage cheese in smooth creamy delicious spinach gravy",
                    price: "20",

                    spicy: true,
                  },
                  {
                    name: "Fish Malwani",
                    description:
                      "A dish originating from Malvan on the Konkan Coast. This colorful dish throws a serious punch - not for the faint hearted! ",
                    price: "20",
                    spicy: true,
                  },
                ],
              },
              {
                name: "Chop Masala Gravy",
                items: [
                  {
                    name: "Tikka Masala",
                    description:
                      "A rich and tangy tomato gravy - Choose between tandoori paneer cubes and grilled chicken",
                    price: "18",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Kofta Dilbahar",
                    description:
                      "Paneer & potato balls dunked in our creamy yellow gravy to make your heart pop ",
                    price: "18",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Do Pyaza",
                    description:
                      "Choose between Stir fried Okra and Mushroom, with a tangy twist ",
                    price: "18",
                  },
                  {
                    name: "Kaju Masala",
                    description:
                      "Rich, creamy cashew gravy. We start from scratch with whole cashews!",
                    price: "18",
                  },
                  {
                    name: "Soya chaap masala",
                    description:
                      "A rich and tangy tomato gravy with grilled soya chunks",
                    price: "18",
                  },
                  {
                    name: "Dum Aloo Punjabi",
                    description:
                      "Yogurt, sunflower seeds, chop masala gravy and baby potatoes.. Our unique take on the classic Dum Aloo",
                    price: "16",
                  },
                ],
              },
              {
                name: "Gosht",
                non_veg: true,
                items: [
                  {
                    name: "Mutton Rogan Josh",
                    description:
                      "A non-vegetarian delicacy native to Kashmir.  The perfect blend of exotic spices and slow cooked mutton",
                    price: "20",
                  },
                  {
                    name: "Mutton Bhuna",
                    description:
                      "A Punjabi speciality, lamb curry simmered over a slow fire seasoned with home ground garam masala, green chillies and coriander",
                    price: "20",
                    type: "SIGNATURE",
                  },
                ],
              },
              {
                name: "Spicy Tawa Gravy",
                items: [
                  {
                    name: "Veg/Chicken/Mutton",
                    description:
                      "Prepared in a flat plan, a unique semi-dry gravy, where the masala forms a thick coating, with diced onions and bell peppers for crunch",
                    price: "15/17/20",
                    spicy: true,
                  },
                ],
              },
              {
                name: "Karahi Gravy",
                items: [
                  {
                    name: "Veg/Paneer/Chicken/Mutton",
                    description:
                      "Cooked in a Karahi pan with a thick blend of Indian spices",
                    price: "15/16/17/20",
                  },
                ],
              },
              {
                name: "Gravy’s Choices",
                items: [
                  {
                    name: "Goan Fish Curry",
                    description:
                      "Coconut based zesty fish curry. A must try for seafood lovers",
                    price: "20",
                  },
                  {
                    name: "Baingan Bharta",
                    description:
                      "Oven-roasted eggplant cooked to perfection with  finely chopped onion and tomato",
                    price: "16",
                  },
                  {
                    name: "Pindi Chole",
                    description:
                      "A popular Chickpeas dish with a spicy onion and tomato masala, best served with Jeera Or Steamed Rice ",
                    price: "16",
                  },
                  {
                    name: "Hing Dhaniya ke Aloo",
                    description:
                      "Baby potatoes cooked with strong Indian spices is having strong flavors of asafoetida (hing) and coriander",
                    price: "16",
                  },
                  {
                    name: "Dal Makhani",
                    description:
                      "The dish literally translates to “buttered lentils”. The taste, is reminiscent of drinking chai—creamy with a slight kick, but very subdued ",
                    price: "18",
                  },
                  {
                    name: "Dal Tadka",
                    description:
                      "The literal translation of Dal Tadka is Dal=lentil and tadka=tempering with a touch of Lasoon (Ginger and Garlic)",
                    price: "15",
                  },
                ],
              },
            ],
          },
          {
            name: "Mains",

            subSubCategory: [
              {
                name: "Biryani",
                items: [
                  {
                    name: "Veg",
                    description: "",
                    price: "16",
                  },
                  {
                    name: "Chicken",
                    description: "",
                    price: "18",

                    non_veg: true,
                  },
                  {
                    name: "Lamb",
                    description: "",
                    price: "20",
                    type: "SIGNATURE",
                    non_veg: true,
                  },
                  {
                    name: "Prawns",
                    description: "",
                    price: "22",
                    non_veg: true,
                  },
                ],
              },
              {
                name: "Rice",
                items: [
                  {
                    name: "Veg/Egg/Chicken Fried Rice",
                    description: "An Indian-Chinese style fried rice",
                    price: "13/14/15",
                  },
                  {
                    name: "Jeera Peas Pulao",
                    description:
                      "Classic Indian rice pulao made from Shameza rice, herbs and green peas",
                    price: "12",
                  },
                  {
                    name: "Dal Khichdi",
                    description:
                      "One’s love for dal khichdi can never be satiated with any food item in the world. Our very own comfort food",
                    price: "12",
                    type: "SIGNATURE",
                  },
                  {
                    name: "Jeera Rice",
                    description:
                      "A perfect match for any curry - Basmati Rice tempered with roasted cumin seeds",
                    price: "8",
                  },
                ],
              },
              {
                name: "Bread",
                items: [
                  {
                    name: "Tandoori/Butter Roti",
                    description: "",
                    price: "4/5",
                  },
                  {
                    name: "Plain/Butter/Garlic/Cheese Naan",
                    description: "",
                    price: "4/5/6/8",
                  },
                  {
                    name: "Laccha Paratha",
                    description: "",
                    price: "5",
                  },
                  {
                    name: "Aloo/Paneer Paratha",
                    description: "",
                    price: "6",
                  },
                  {
                    name: "Aloo/Onion/Paneer Kulcha",
                    description: "",
                    price: "6",
                  },
                ],
              },
              {
                name: "Accompaniments",
                items: [
                  {
                    name: "Mix Raita",
                    description: "",
                    price: "6",
                  },
                  {
                    name: "House Pickle",
                    description: "",
                    price: "2",
                  },
                  {
                    name: "Laccha Salad",
                    description: "",
                    price: "5",
                  },
                  {
                    name: "Steam Rice",
                    description: "",
                    price: "4",
                  },
                ],
              },
            ],
          },
          {
            name: "Desserts",

            subSubCategory: [
              {
                name: "Desserts",
                items: [
                  {
                    name: "Rasmalai",
                    description:
                      "Steamed Indian cheese patties, served in a rich flavoured cold cream sauce with nuts",
                    price: "6",
                  },
                  {
                    name: "Gulab Jamun with Vanilla Ice Cream",
                    description:
                      "A North Indian delicacy made with a special dough, fried golden brown, and soaked in sugar syrup with vanilla ice cream",
                    price: "8",
                  },
                  {
                    name: "Kesar Badam Kulfi",
                    description:
                      "Homemade Indian ice cream flavoured with saffron, pistachio, nuts & cardamom",
                    price: "8",
                  },
                  {
                    name: "Jalebi with Rabri",
                    description:
                      "An Indian pretzel with a sweet, condensed-milk-based dish",
                    price: "22",
                    type: "SIGNATURE",
                  },
                ],
              },
            ],
          },
          {
            name: "Pairing",

            subSubCategory: [
              {
                name: "Gravy's Pairing",
                items: [
                  {
                    name: "Whisky & Food",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Wine & Food",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Craft Beer & Food",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
          {
            name: "Healthy Starters",

            subSubCategory: [
              {
                name: "Soups",
                items: [
                  {
                    name: "Vegetable minestrone soup",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Chicken minestrone soup",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Broccoli low fat soup",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Tomato Dhaniya Sorba ",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Kali Mirch Chicken Soup",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Chaats",
                items: [
                  {
                    name: "Dahi bhalla ",
                    description:
                      "low fat/skimmed dahi, baked vada/shallow fried vada",
                    price: "",
                  },
                  {
                    name: "Chickpea with tomatoes, onion",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Sprouts chaat",
                    description: "",
                    price: "",
                  },
                ],
              },
            ],
          },
          {
            name: "Healthy Gravies",

            subSubCategory: [
              {
                name: "Soya Masala Gravy",
                items: [
                  {
                    name: "Soya Chaap Masala",
                    description: "",
                    price: "",
                  },
                  {
                    name: "Vegetable Paneer Kofta",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Gravy's Choice",
                items: [
                  {
                    name: "Baigan ka bharta",
                    description:
                      "low fat/skimmed dahi, baked vada/shallow fried vada",
                    price: "",
                  },
                  {
                    name: "Goan fish curry or any other fish curry",
                    description: "less/no coconut milk",
                    price: "",
                  },
                ],
              },
            ],
          },
          {
            name: "Healthy Mains",

            subSubCategory: [
              {
                name: "Noodles/pasta (whole wheat)",
                items: [
                  {
                    name: "A. Add veggies + chicken/fish/egg/paneer/tofu",
                    description: "",
                    price: "",
                  },
                  {
                    name: "B. Sauce made without adding refined flour, corn flour etc",
                    description: "",
                    price: "",
                  },
                  {
                    name: "C. Tomato puree used for healthier alternative",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Sandwiches/Burger",
                items: [
                  {
                    name: "A. With soya, paneer, tofu, chicken, mushroom or egg filling, along with veggies like carrot, beetroot, capsicum, lettuce etc",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Stir Fry",
                items: [
                  {
                    name: "Paneer/tofu/fish/chicken with sauteed veggies served with multigrain or whole wheat bread / brown rice",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Rice",
                items: [
                  {
                    name: "A. Dal khichdi",
                    description: "",
                    price: "",
                  },
                  {
                    name: "B. Chicken pulao/ yakhni pulao",
                    description: "",
                    price: "",
                  },
                  {
                    name: "C. Chicken haleem",
                    description: "",
                    price: "",
                  },
                  {
                    name: "D. Veg pulao",
                    description: "",
                    price: "",
                  },
                  {
                    name: "E. Fried rice (egg/chicken, add lots of veggies to add nutrition value)",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Bread",
                items: [
                  {
                    name: "A. Roti/chapati (without ghee/oil)",
                    description: "",
                    price: "",
                  },
                  {
                    name: "B. Vegetable stuffed paratha",
                    description: "",
                    price: "",
                  },
                  {
                    name: "C. Paneer/egg bhurji paratha",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "Accompaniments",
                items: [
                  {
                    name: "A. Raita: cucumber, onion, tomato, coriander etc (no boondi, excess salt)",
                    description: "",
                    price: "",
                  },
                  {
                    name: "B. Masala khakhra",
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

  let [drinks] = useState(
    {
      category: [
        {
          name: "Drinks",
          subCategory: [
            {
              name: "Drinks",
              subSubCategory: [
                {
                  name: "Belgo Craft Brewery",
                  items: [
                    {
                      name: "IPA",
                      description: "BELGIUM, 4.9%",
                      price: "12/14",
                    },
                    {
                      name: "Amber",
                      description: "BELGIUM, 5.1%",
                      price: "12/14",
                    },
                  ],
                },
                {
                  name: "Other Beers",
                  items: [
                    {
                      name: "Heineken",
                      description: "Lager, Netherlands, 5%",
                      price: "10/12",
                    },
                    {
                      name: "Erdinger Weisbeir",
                      description: "Wheat, Germany, 5.6%",
                      price: "10/12",
                    },
                    {
                      name: "Kingfisher Premium",
                      description: "Lager, India, 4.8%",
                      price: "8/10/38",
                    },
                    {
                      name: "Corona Extra",
                      description: "Pale Lager, Mexico, 4.6%",
                      price: "8/10/38",
                    },
                  ],
                },
                {
                  name: "Spirits by The Bottle",
                  items: [
                    {
                      name: "Johnnie Walker Black Label",
                      description: "Blended, Scotland, 40%",
                      price: "110",
                    },
                    {
                      name: "Chivas Regal",
                      description: "Blended, Scotland, 40%",
                      price: "12/110",
                    },
                    {
                      name: "Monkey Shoulder",
                      description: "Blended, Scotland, 43%",
                      price: "120",
                    },
                    {
                      name: "Singleton",
                      description: "Speyside, Scotland, 43%",
                      price: "12/120",
                    },
                    {
                      name: "Glenfiddich",
                      description: "Speyside, 40%",
                      price: "12/130",
                    },
                    {
                      name: "Amrut Fusion",
                      description: "India, 50%",
                      price: "180",
                    },
                    {
                      name: "Macallan Sherry Oak",
                      description: "Speyside, 40%",
                      price: "220",
                    },
                    {
                      name: "Old Monk",
                      description: "Rum, India, 42.8%",
                      price: "90",
                    },
                    {
                      name: "Hendricks Gin",
                      description: "Gin, Scotland, 41.4%",
                      price: "140",
                    },
                    {
                      name: "Grey Goose",
                      description: "Vodka, France, 40%",
                      price: "130",
                    },
                    {
                      name: "Balvenie Double Cask ",
                      description: "Speyside, 40%",
                      price: "220",
                    },
                    {
                      name: "Jose Cuervo",
                      description: "Mexico, 40%",
                      price: "100",
                    },
                    {
                      name: "Bombay Sapphire",
                      description: "Gin, 40%",
                      price: "100",
                    },
                  ],
                },
                {
                  name: "Whiskies by The Peg",

                  items: [
                    {
                      name: "Amrut Fusion",
                      description: "India, 50%",
                      price: "14",
                    },
                    {
                      name: "Amrut Peated",
                      description: "India, Cask Strength, 62.8%",
                      price: "16",
                    },
                    {
                      name: "Amrut Kadhambham",
                      description: "India, 50%",
                      price: "22",
                    },
                    {
                      name: "Rampur Double Cask",
                      description: "India, 45%",
                      price: "14",
                    },
                    {
                      name: "Paul John Bold",
                      description: "India, Cask Strength, 62.8%",
                      price: "15",
                    },
                    {
                      name: "Paul John Classic",
                      description: "India, Cask Strength, 55.2%",
                      price: "17",
                    },
                    {
                      name: "Kavalan Ex Sherry",
                      description: "Taiwan, 46%",
                      price: "15",
                    },
                    {
                      name: "Kavalan Ex Bourbon",
                      description: "Taiwan, 46%",
                      price: "15",
                    },
                    {
                      name: "The Chita",
                      description: "Japan, 43%",
                      price: "14",
                    },
                    {
                      name: "Hibiki",
                      description: "Japan, 43%",
                      price: "130",
                    },
                    {
                      name: "Nikka Coffee Grain",
                      description: "Japan, 43%",
                      price: "14",
                    },
                    {
                      name: "Yamazaki Distiller's Reserve",
                      description: "Japan, 43%",
                      price: "18",
                    },
                    {
                      name: "Bulleit",
                      description: "Rye, USA, 45%",
                      price: "14",
                    },
                    {
                      name: "Blanton's Original",
                      description: "Bourbon, USA, 46.5%",
                      price: "14",
                    },
                    {
                      name: "Westland American Oak",
                      description: "Bourbon, USA, 46%",
                      price: "17",
                    },
                    {
                      name: "Redbeast",
                      description: "Ireland, 46%",
                      price: "15/16",
                    },
                    {
                      name: "Teeling Small Batch",
                      description: "Ireland, 46%",
                      price: "14",
                    },
                    {
                      name: "Macallan Sherry",
                      description: "Speyside, Scotland, 40%",
                      price: "12/14",
                    },
                    {
                      name: "Glenfarclas",
                      description: "Speyside, Scotland, 46%",
                      price: "15/19",
                    },
                    {
                      name: "Glenlivet",
                      description: "Speyside, Scotland, 40%",
                      price: "18/26",
                      type: "2nd place - Best Single Malt Scotch 18 year old",
                    },
                    {
                      name: "Balblair",
                      description: "Highland, Scotland, 46%",
                      price: "15/19",
                    },
                    {
                      name: "Aucentoshan",
                      description: "Lowland, Scotland, 46%",
                      price: "12/14",
                    },
                    {
                      name: "Longrow Peated",
                      description: "Campbeltown, Scotland, 46%",
                      price: "17",
                    },
                    {
                      name: "Hazelburn",
                      description: "Campbeltown, Scotland, 46%",
                      price: "10/17",
                    },
                    {
                      name: "Talisker",
                      description: "Islay, Scotland, 45.8%",
                      price: "10/14",
                    },
                    {
                      name: "Ardbeg Uigeadail",
                      description: "Islay, Scotland, 54.2%",
                      price: "17",
                      type: "2021 whisky of the year",
                    },
                    {
                      name: "Lagavulin",
                      description: "Islay, Scotland, 46%",
                      price: "16/18",
                    },
                    {
                      name: "Bunnahabain Moine",
                      description: "Islay, Scotland, 48%",
                      price: "11/25",
                    },
                    {
                      name: "Port Charlotte",
                      description: "Islay, Scotland, 50%",
                      price: "10/15",
                    },
                  ],
                },
                {
                  name: "Other Spirits by The Peg",

                  items: [
                    {
                      name: "Jaisalmer",
                      description: "Craft Gin, India, 43%",
                      price: "16",
                    },
                    {
                      name: "Jin Jiji Darjeeling",
                      description: "Craft Gin, India, 43%",
                      price: "",
                    },
                    {
                      name: "Jin Jiji India Dry Gin",
                      description: "Craft Gin, India, 43%",
                      price: "",
                    },
                    {
                      name: "Hendricks",
                      description: "Gin, Scotland, 41.4%",
                      price: "14",
                    },
                    {
                      name: "Old Monk",
                      description: "Dark Rum, India, 40%",
                      price: "12",
                    },
                    {
                      name: "Amrut Two Indies",
                      description: "Dark Rum, India, 40%",
                      price: "13",
                    },
                    {
                      name: "Australia 2015 TCRL",
                      description: "Rum, Australia, 48%",
                      price: "16",
                    },
                  ],
                },
                {
                  name: "Vino Wines",

                  items: [
                    {
                      name: "Mejestic Rose",
                      description: "Rose, Macedonia",
                      price: "12",
                    },
                    {
                      name: "Temjanika Special Selection",
                      description: "White, Macedonia",
                      price: "14",
                    },
                    {
                      name: "T'Ga Za Jug",
                      description: "Red, Macedonia",
                      price: "12",
                    },
                    {
                      name: "Vranec Barrique",
                      description: "Red, Macedonia",
                      price: "16",
                    },
                    {
                      name: "Mejestic Temjanika",
                      description: "White, Macedonia",
                      price: "55",
                    },
                    {
                      name: "Plavec Special Selection",
                      description: "Red, Macedonia",
                      price: "55",
                    },
                    {
                      name: "Pete's Pure Shiraz",
                      description: "Red, Australia",
                      price: "49",
                    },
                    {
                      name: "Barovo",
                      description: "Red, Australia",
                      price: "95",
                      type: "97 points, Decanter World Wine Awards, Platinum Medal",
                    },
                  ],
                },
                {
                  name: "Cocktails",

                  items: [
                    {
                      name: "Gravy Negroni",
                      description: "",
                      price: "16",
                    },
                    {
                      name: "We're Old Fashioned",
                      description: "",
                      price: "16",
                    },
                    {
                      name: "South Indian Filter Coffee Martini",
                      description: "",
                      price: "16",
                    },
                  ],
                },
                {
                  name: "Mocktails",

                  items: [
                    {
                      name: "Blue Lagoon",
                      description: "",
                      price: "7",
                    },
                    {
                      name: "Full Moon",
                      description: "",
                      price: "7",
                    },
                  ],
                },
                {
                  name: "Non-Alcoholic Beverages",

                  items: [
                    {
                      name: "Lassi",
                      description: "Salt/Sweet/Mango",
                      price: "6",
                    },
                    {
                      name: "Buttermilk",
                      description: "",
                      price: "5",
                    },
                    {
                      name: "Fresh Lime Soda",
                      description: "",
                      price: "5",
                    },
                    {
                      name: "Soft Drinks",
                      description: "",
                      price: "3",
                    },
                    {
                      name: "Fresh Pressed Juices",
                      description: "",
                      price: "5",
                    },
                  ],
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

  let [pairings] = useState({
    category: [
      {
        name: "Pairing of the Week",
        subCategory: [
          {
            name: "Whisky",
            subSubCategory: [
              {
                name: "Food Veg",
                items: [
                  {
                    name: "Jaisalmer Gin",
                    description: "",
                    price: "70",
                  },
                  {
                    name: "Hot & Sour Soup with Amrut Single Malt",
                    description: "",
                    price: "70",
                  },
                  {
                    name: "Achari Paneer Tikka with Amrut Kadhambham",
                    description: "",
                    price: "70",
                  },
                  {
                    name: "Veg Biryani with Amrut Fusion",
                    description: "",
                    price: "70",
                  },
                  {
                    name: "Aam ki Rasmalai with Amrut Peated",
                    description: "",
                    price: "70",
                  },
                ],
              },
              {
                name: "Food Non-Veg",
                non_veg: true,
                items: [
                  {
                    name: "Jaisalmer Gin",
                    description: "",
                    price: "75",
                  },
                  {
                    name: "Kali Mirch chicken soup with Amrut Single Malt",
                    description: "",
                    price: "75",
                  },
                  {
                    name: "Tandoori Lamb Chop with Amrut Kadhambham",
                    description: "",
                    price: "75",
                  },
                  {
                    name: "Chicken Biryani with Amrut Fusion",
                    description: "",
                    price: "75",
                  },
                  {
                    name: "Aam ki Rasmalai with Amrut Peated",
                    description: "",
                    price: "70",
                  },
                ],
              },
            ],
          },
          {
            name: "Wine",
            subSubCategory: [
              {
                name: "Food Veg",
                items: [
                  {
                    name: "Tandoori Soya Chaap with Majestic Rose",
                    description: "",
                    price: "45",
                  },
                  {
                    name: "Peri Peri Paneer Tikka with Vranec Barrique",
                    description: "",
                    price: "45",
                  },
                  {
                    name: "Subz Makhanwalla & Butter Naan with Plavec",
                    description: "",
                    price: "45",
                  },

                  {
                    name: "Aam ki Rasmalai with Temjanika",
                    description: "",
                    price: "45",
                  },
                ],
              },
              {
                name: "Food Non-Veg",
                non_veg: true,
                items: [
                  {
                    name: "Tandoori Soya Chaap with Majestic Rose",
                    description: "",
                    price: "50",
                  },
                  {
                    name: "Peri Peri Paneer Tikka with Vranec Barrique                    ",
                    description: "",
                    price: "50",
                  },
                  {
                    name: "Subz Makhanwalla & Butter Naan with Plavec",
                    description: "",
                    price: "50",
                  },

                  {
                    name: "Aam ki Rasmalai with Amrut Peated",
                    description: "",
                    price: "50",
                  },
                ],
              },
            ],
          },
          {
            name: "Belgo Craft Brewery",
            subSubCategory: [
              {
                name: "Food Veg",
                items: [
                  {
                    name: "Blonde with Achari Mushroom                     ",
                    description: "",
                    price: "55",
                  },
                  {
                    name: "Wit with Paneer Tikka Masala & Laccha Paratha                    ",
                    description: "",
                    price: "55",
                  },
                  {
                    name: "IPA with Veg Biryani ",
                    description: "",
                    price: "55",
                  },

                  {
                    name: "Amber with Aam Rasmalai ",
                    description: "",
                    price: "55",
                  },
                ],
              },
              {
                name: "Food Non-Veg",
                non_veg: true,
                items: [
                  {
                    name: "Blonde with Tandoori Chicken ",
                    description: "",
                    price: "60",
                  },
                  {
                    name: "Wit with Chicken Tikka Masala & Laccha Paratha ",
                    description: "",
                    price: "60",
                  },
                  {
                    name: "IPA with Lamb Biryani ",
                    description: "",
                    price: "60",
                  },

                  {
                    name: "Amber with Aam Rasmalai ",
                    description: "",
                    price: "60",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });

  let [lunch] = useState({
    category: [
      {
        name: "Lunch",
        subCategory: [
          {
            name: "Healthy Lunches",
            subSubCategory: [
              {
                name: "MON",
                items: [
                  {
                    name: "Gluten-Free Chapati. Stir-Fried Palak/Egg Bhurji. Chole Curry/Fish Curry. Cashews. Kurkure. Salad. Sattu Protein Shake",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "TUE",

                items: [
                  {
                    name: "Sameza Jeera Rice. Tandoori Soya Chaap/Achari Chicken Tikka. Paneer Tikka?Murgh Malai. Khakra. Mint Chutney. Salad. Ragi & Banana Smoothie",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "WED",

                items: [
                  {
                    name: "Oats Upma. Rajma Masala/Homemade Chicken Curry. Aloo Jeera/Egg White Omellete. Peanuts. Tapioca Crisps. Slad. Haldi Doodh",
                    description: "",
                    price: "",
                  },
                ],
              },
              {
                name: "THU",

                items: [
                  {
                    name: "Sameza Khichdi. Tandoori Broccoli/Lasooni Jhinga. Stir-Fried Bhindi?Haryali Chicken Tikka. Walnuts. Lijjat Papad. Salad. Thai Tender Coconut",
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
    <div className="w-full  mx-auto pt-28 h-max min-h-screen bg-menu bg-cover bg-center bg-opacity-25 ">
      <h1 className=" text-4xl text-center font-bold text-gravy_accent">
        MENU
      </h1>
      <div className=" px-2 py-8 sm:px-0  mx-auto bg-dbeats">
        <Tab.Group>
          <Tab.List className="flex p-1 bg-gravy border-2  border-gravy-light shadow-lg space-x-1 mx-auto max-w-md bg-gray-200  rounded-xl transition duration-500 ease-in-out ">
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
            <Form className="" subCategories={drinks} />
          </Tab.Panel>
          <Tab.Panel
            index={2}
            className="  transition-all transform h-64"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            {" "}
            <Form className="" subCategories={pairings} />
          </Tab.Panel>
          <Tab.Panel
            index={3}
            className="  transition-all transform h-64"
            activeClassName="opacity-100 duration-500 translate-x-0"
            inactiveClassName="absolute opacity-0 -translate-x-2"
          >
            {" "}
            <Form className="" subCategories={lunch} />
          </Tab.Panel>
        </Tab.Group>
      </div>
    </div>
  );
}
