/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Image1 from "../assets/1x/Career picture.jpg";

export default function Example() {
  return (
    <div className="grid grid-cols-1 bg-gravy pb-10">
      <div className="w-full lg:w-1/2 lg:mx-auto">
        <img className=" shadow  " alt="gallery" src={Image1}></img>
      </div>

      <div className="m-5 mt-10 lg:mx-96 lg:text-center ">
        <h1 className=" text-4xl font-bold text-gravy_accent">CAREERS</h1>
        <p className="text-white my-3">
          We at Gravy are always on the lookout for talented individuals to come
          join our team We are an inclusive employer who gives chances to all
          members of society. We’d like to empower people with disabilities to
          lead more independent and meaningful lives while helping to increase
          our productivity and staff morale. We are friendly people with a
          really chill, positive outlook and run our restaurants with our team
          as a family.
        </p>
        <h3 className="text-2xl font-semibold text-gravy_accent">
          Give us a Chance, You won't Regret it.
        </h3>

        <p className="text-gravy_accent text-xl mt-3">Email Us At</p>
        <p className="text-white">rj@gravy.sg</p>
      </div>
    </div>
  );
}
