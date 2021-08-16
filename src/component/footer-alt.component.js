/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navigation = [
  { name: "About", href: "#", current: true },
  { name: "Menu", href: "#", current: false },
  { name: "Reservation", href: "#", current: false },
  { name: "Events & Promotions", href: "#", current: false },
  { name: "Gallery", href: "#", current: false },

  { name: "Careers", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
     
      <div className="bg-footer-image font-montserrat  font-normal	 bg-cover  p-5 ">
      
        <div className="h-90 grid grid-rows-4  mt-5 gap-4">
          <div className=" col-start-1 col-end-3">
            <img src={logo} alt="Gravy-Logo"></img>
          </div>
          <div className=" col-start-4 col-end-6">
            <p className="text-gravy_accent">Home</p>
            <p className="text-white ">About Gravy</p>
            <p className="text-white">Events</p>
            <p className="text-white">Careers</p>
            <p className="text-white">Book A Table</p>
          </div>

          <div className="col-start-1 col-end-3 align-middle inline-block mt-10  row-start-2 row-end-2">
            <p className="text-gravy_accent font-bold">CAREERS</p>
            <p className="text-white">info@gravy.sg</p>
          </div>

          <div className="col-start-4 col-end-6 row-start-2 row-end-2 mt-10">
            <p className="text-gravy_accent font-bold">MORE INFO</p>
            <p className="text-white">info@gravy.sg</p>
          </div>

          <div className="col-start-1 col-end-3 row-start-3">
            <span className="font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gravy_accent inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Gravy@
            </span>
            <p className="text-gravy_accent">Tanjong Pagar</p>
            <p className="text-white">1 Hoe Chiang Road</p>
            <p className="text-white">Singapor 437034</p>
          </div>

          <div className="col-start-4 col-end-6 row-start-3 ">
            <p>&nbsp;</p>
            <p className="text-gravy_accent">info@gravy.sg</p>
            <p className="text-white">+65-9101-5824</p>
            <p className="text-white">246 Tanjong KAtong</p>
          </div>

          <div className="col-start-1 col-end-3 row-start-4">
            <span className="font-bold text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gravy_accent inline-block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              Gravy@
            </span>
            <p className="text-gravy_accent">Tanjong Katong</p>
            <p className="text-white">246 Tanjong Katong</p>
            <p className="text-white">Singapor 437034</p>
          </div>

          <div className="col-start-4 col-end-6 row-start-4">
          <p>&nbsp;</p>

            <p className="text-gravy_accent">info@gravy.sg</p>
            <p className="text-white">+65-6909-7554</p>
            <p className="text-white">+65-91015824</p>
          </div>
        </div>
      </div>
     
  );
}
