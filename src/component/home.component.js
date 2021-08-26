/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import headerImage from "../assets/1x/header.jpeg";
import headerImage2 from "../assets/1x/banner.JPG";
import headerImage3 from "../assets/1x/banner2.JPG";
import headerImage4 from "../assets/1x/banner3.jpg";

export default function Example() {
  return (
    <Transition
      as={Fragment}
      show={true}
      enter="transition ease-in-out duration-1000"
      enterFrom=" opacity-0   translate-x-full"
      enterTo=" opacity-100   translate-x-0"
      leave="transition ease-in-out duration-1000"
      leaveFrom=" opacity-100  translate-x-full"
      leaveTo=" opacity-0 translate-x-0"
    >
      <div className="flex bg-main bg-cover bg-center bg-no-repeat">
        <img
          className="lg:hidden shadow-md    w-full h-screen bg-cover bg-center bg-no-repeat "
          alt="gallery"
          src={headerImage}
        ></img>
        <img
          className=" lg:block hidden shadow-md    w-full h-screen bg-cover bg-center bg-no-repeat opacity-0"
          alt="gallery"
          src={headerImage2}
        ></img>
      </div>
    </Transition>
  );
}
