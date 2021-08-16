/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import headerImage from "../assets/1x/header.jpeg";

export default function Example() {
  return ( 
        <img className=" shadow-md  w-full h-screen bg-no-repeat bg-cover bg-center " alt="gallery" src={headerImage}></img>
       
  );
}
