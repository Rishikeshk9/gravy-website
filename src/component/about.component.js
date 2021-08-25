/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import logo from "../assets/1x/gravy-logo.png";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import Chefs from "../assets/1x/chefs.jpeg";
import Rohit from "../assets/1x/rohit.jpg";
import Vir from "../assets/1x/vir.jpg";
import About from "../assets/1x/booking.JPG";
import About2 from "../assets/1x/about-2.jpg";
import Dish from "../assets/1x/gallery/23.jpg";
import Team from "../assets/1x/team.jpeg";
import Tray from "../assets/1x/tray.png";
import Tray_light from "../assets/1x/tray-light.png";

import Charity1 from "../assets/1x/charity/1.jpg";
import Charity2 from "../assets/1x/charity/2.jpg";
import Charity3 from "../assets/1x/charity/3.jpg";
import Charity4 from "../assets/1x/charity/4.jpg";
import Charity5 from "../assets/1x/charity/5.jpg";
import Charity6 from "../assets/1x/charity/6.jpg";
import Charity7 from "../assets/1x/charity/7.jpg";

export default function Example() {
  return (
    <div className="grid grid-cols-1 bg-gravy pb-10">
      <div className=" ">
        <img
          className=" shadow lg:h-screen lg:w-screen"
          alt="gallery"
          src={About}
        ></img>
      </div>
      <h1 className=" text-6xl font-bold text-gravy_accent hidden lg:block text-center mt-10">
        <span className="text-white">ABOUT</span> US
      </h1>

      <div className="m-5   lg:grid lg:grid-cols-2 ">
        <img
          className="col-span-1 lg:h-2/3 lg:ml-auto self-center  shadow-lg "
          src={Dish}
          alt=""
        ></img>
        <p className="text-white col-span-1 lg:mx-24 lg:self-center text-center my-3 lg:text-justify">
          <span className="text-4xl font-semibold text-gravy_accent">G</span>
          ravy first opened its doors in August 2018 through our Delhi Express.
          Now, in our 3rd year, we've strived to further broaden our cuisine
          served beyond just Delhi. We’ve been blessed throughout with
          fantastic, loyal customers without whom we couldn’t have survived,
          especially during this covid pandemic. For us, we live by the
          following motto. “It takes months to find a customer, and only seconds
          to lose one”. <br />
          <br /> We take both positive and negative feedback very seriously and
          try our best to put our feet in the shoes of our customers. We value
          long-lasting relationships far greater than short term cash inflows,
          and the fact that over 70% of our customers are regulars testify to
          that. At the bottom of it all, we’re just a bunch of down-to-earth
          friendly people trying to serve out delicious food. Come down, try our
          food at Gravy! You won’t be disappointed
        </p>
      </div>

      <div className="lg:hidden block ">
        <div className="bg-white p-5 lg:w-2/3  lg:ml-auto col-span-1 shadow-lg">
          <img className=" shadow-lg " src={Chefs}></img>
        </div>

        <div className="p-5 lg:w-2/3 self-center">
          <div className="bg-white p-5 relative bottom-5 lg:-left-5 lg:top-4  ">
            <h3 className="text-4xl font-bold text-gravy_accent text-center">
              OUR CHEFS
            </h3>
            <p className="text-gravy  mt-5">
              Fiercely Passionate, hardworking and sincere. That sums up the
              very essence of our team of chefs.. Coming from some of the best
              restaurants in India, they bring their flavours across the pond
              into Singapore. To cook many of our dishes, we use large cooking
              pots. Our team of chefs (headed up by Satyendra Singh) slow-cook
              our sauces sometimes for as long as six hours. They season and
              taste every dish to make sure the flavour is just right.
            </p>
          </div>
        </div>
      </div>
      {/* 
      visible only on large screens */}
      <div className="lg:block hidden lg:grid lg:grid-cols-2">
        <div className="bg-white p-5 lg:w-2/3  lg:ml-auto col-span-1 shadow-lg">
          <img className="  shadow-lg " src={Chefs}></img>
        </div>

        <div className="p-5 lg:w-2/3 self-center">
          <h3 className="text-5xl font-bold text-gravy_accent text-center">
            <span className="text-white">OUR</span> CHEFS
          </h3>
          <div className="bg-white p-5 relative bottom-10 lg:-left-5 lg:top-4  ">
            <p className="text-gravy  ">
              Fiercely Passionate, hardworking and sincere. That sums up the
              very essence of our team of chefs.. Coming from some of the best
              restaurants in India, they bring their flavours across the pond
              into Singapore. To cook many of our dishes, we use large cooking
              pots. Our team of chefs (headed up by Satyendra Singh) slow-cook
              our sauces sometimes for as long as six hours. They season and
              taste every dish to make sure the flavour is just right.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:hidden block">
        <div className="bg-white p-5 lg:w-2/3  lg:ml-auto col-span-1">
          <img className="shadow-lg  " src={Team}></img>
        </div>
        <div className="p-5">
          <div className="bg-white p-5 relative bottom-5">
            <h3 className="text-4xl font-bold text-gravy_accent text-center">
              OUR TEAM
            </h3>
            <p className="text-gravy mt-5">
              Cheerful and always ready to help, our team of wait staff always
              make us proud. They work meticulously and efficiently to ensure
              that all our customers are carefully attended to and satisfied
              with their service. This is no mean feat, especially on days when
              we pack out the restaurant in under 20 minutes. Our very own
              super-team.
            </p>
          </div>
        </div>
      </div>
      {/* 
only visible on Large Screens */}
      <div className="lg:block hidden lg:grid lg:grid-cols-2">
        <div className="lg:w-2/3  lg:self-center lg:ml-auto">
          <h3 className="text-5xl font-bold text-gravy_accent text-center mb-5">
            <span className="text-white">OUR</span> TEAM
          </h3>
          <div className="bg-white p-5 relative lg:ml-auto  lg:self-center  ">
            <p className="text-gravy  ">
              Cheerful and always ready to help, our team of wait staff always
              make us proud. They work meticulously and efficiently to ensure
              that all our customers are carefully attended to and satisfied
              with their service. This is no mean feat, especially on days when
              we pack out the restaurant in under 20 minutes. Our very own
              super-team.
            </p>
          </div>
        </div>
        <div className="bg-white p-5 lg:w-2/3    col-span-1  lg:mr-auto shadow-lg">
          <img className=" shadow-lg " src={Team}></img>
        </div>
      </div>

      <div className="bg-black p-5 lg:mt-20 ">
        <h3 className="lg:text-5xl text-3xl font-bold text-gravy_accent text-center my-10 lg:mb-0">
          OUR MANAGEMENT
        </h3>

        <div className="lg:grid lg:grid-cols-2 m-0">
          <div className="bg-gravy p-5 lg:h-2/3 lg:ml-auto lg:mr-20 self-center">
            <img className=" lg:h-full   shadow-lg  " src={Rohit}></img>
          </div>
          <div className="self-center lg:mr-40">
            <h3 className="text-4xl font-bold text-gravy_accent  my-5">
              <span className="text-white">ROHIT JOIS</span>
              <br></br> MD
            </h3>

            <p className="text-white  my-5">
              Born and bred in Singapore, Rohit never spent much time in the
              kitchen grow- ing up. Rather, he learned the importance of
              hospitality through his folks who loved cooking and frequently
              hosted family & friends at home, and an entre- preneurial spirit
              through his small business ventures while he was in school. <br />{" "}
              Rohit's main role is to direct and control all business
              operations. He is responsible for giving strategic guidance and
              direction to the group to help achieve the financial vision,
              mission and long term goals set.
            </p>
          </div>

          <div className="bg-gravy p-5 lg:h-2/3 lg:ml-auto lg:mr-20 self-center">
            <img className=" lg:h-full   shadow-lg  " src={Vir}></img>
          </div>

          <div className="self-center lg:mr-40">
            <h3 className="text-4xl font-bold text-gravy_accent  my-5 ">
              <span className="text-white">VIRBAHADUR YADAV</span> CFO
            </h3>

            <p className="text-white  my-5 pb-10">
              Our hustler in chief. Hailing from a small town in Bihar, Northern
              India, he’s come a long way, originally from a Non-English back-
              ground and humble beginnings. This industrious entrepreneur has
              worked his way up from his time as a bell boy as well as serving
              cus- tomers for long hours in a food court to save up the money to
              open his own restaurant in a foreign country. He handles all
              things finance and manages staffing, quality control across our
              restaurants.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white py-10 pb-15 lg:px-96 ">
        <h3 className="text-4xl font-bold text-gravy_accent text-center my-5">
          CSR
        </h3>

        <p className="text-gravy text-center my-5 p-5">
          Gravy is committed to thinking beyond just our restaurant and giving
          back to the community. We seek out parternships with NGOs and local
          charitable organiza- tions whose mission align with our vision.
          Donation Requests? Please email rj@gravy.sg Our charitable giving and
          community investment is focused at the moment to a few areas that
          connect most with us all, including alleviating hunder, financial as-
          sistance and generating awareness of local community poverty.
          Unfortunately, we may not be able to support every cause due to the
          limit in our own resources even though we may fully believe in your
          mission. Thank you for thinking of Gravy as a partner who can make a
          positive impact on your cause.
        </p>
      </div>

      <div className="bg-csr-background bg-center bg-cover p-5 pt-10 pb-10  grid  grid-cols-1 gap-6 lg:px-52 lg:grid-cols-2">
        <div className="bg-black grid grid-cols-3  py-5">
          <img
            className="p-5 lg:w-1/2 self-center lg:ml-auto"
            src={Tray_light}
          ></img>

          <div className="col-span-2 self-center">
            <h3 className="text-gravy_accent  text-3xl font-bold">
              10,000 Meals
            </h3>
            <p className="text-white lg:mr-5">
              Participants in "Feed the City" initiative by Food- bank
              Singapore. Contributing over 10,000 meals over 1 month during the
              Circuit Breaker period in 2020.
            </p>
          </div>
        </div>

        <div className="bg-black grid grid-cols-3  py-5">
          <img
            className="p-5 lg:w-1/2 self-center lg:ml-auto"
            src={Tray_light}
          ></img>

          <div className="col-span-2 self-center">
            <h3 className="text-gravy_accent  text-3xl font-bold">
              2,000 Meals
            </h3>
            <p className="text-white lg:mr-5">
              Contributed to dormitory workers with Blossom World
            </p>
          </div>
        </div>

        <div className="bg-black grid grid-cols-3  py-5">
          <img
            className="p-5 lg:w-1/2 self-center lg:ml-auto"
            src={Tray_light}
          ></img>

          <div className="col-span-2 self-center">
            <h3 className="text-gravy_accent  text-3xl font-bold">25 Meals</h3>
            <p className="text-white lg:mr-5">
              Provided to the bodys residing in Ramakrishna Boys' Home as part
              of "Feed the boys" initiative.
            </p>
          </div>
        </div>

        <div className="bg-black grid grid-cols-3  py-5">
          <img
            className="p-5 lg:w-1/2 self-center lg:ml-auto"
            src={Tray_light}
          ></img>

          <div className="col-span-2 self-center">
            <h3 className="text-gravy_accent  text-3xl font-bold">50 Meals</h3>
            <p className="text-white lg:mr-5">
              Distributed to underpriviledged families in our first ever charity
              drive in association with Tanjong Pagar Town Council in January
              2021.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-black grid grid-cols-1 p-5 py-8  ">
        <img className="" src={Charity1} alt=""></img>
      </div>
    </div>
  );
}
