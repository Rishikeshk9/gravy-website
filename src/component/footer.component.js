/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

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
    <>
      <div className="bg-black bg-opacity-75 w-full">
        <p className="text-white text-center py-5">
          Gravy.&nbsp;All rights Reserved | 2021
        </p>
      </div>
    </>
  );
}
