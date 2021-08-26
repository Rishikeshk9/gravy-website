import React from "react";
import logo from "../assets/1x/gravy-logo.png";

function IndexPage() {
  return (
    <>
      <div className="   pb-12 bg-black">
        <div className="lg:mx-auto pl-10  lg:items-center lg:justify-center container pt-10 lg:pt-20 flex flex-col ">
          <div>
            <img className="h-46 w-52" src={logo} alt="Gravy-Logo"></img>
          </div>
          <div className="text-gravy_accent flex flex-col md:items-center f-f-l pt-3 font- bold">
            <h1 className="text-2xl font-black">Eat. Drink. Relive.</h1>
            <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
              <a
                className=" md:mr-6 cursor-pointer flex hover:bg-gravy_accent rounded p-2 hover:text-white w-max"
                href="/reservation"
              >
                Book a Table
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <br></br>

              <a
                className="cursor-pointer flex hover:bg-gravy_accent rounded p-2 hover:text-white w-max"
                href="https://take.app/s/6591015824"
              >
                Curbside Pickup/Home Delivery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 self-center"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="my-6 text-base text-color f-f-l">
              <ul className="md:flex items-center ">
                <li className=" md:mr-6 cursor-pointer   lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  <a href="/about">About</a>
                </li>
                <li className=" md:mr-6 cursor-pointer   lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  <a href="/menu">Menu</a>
                </li>
                <li className=" md:mr-6 cursor-pointer   lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  <a href="/careers">Careers</a>
                </li>
                <li className="hidden md:mr-6 cursor-pointer   lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  <a href="/about">Careers</a>
                </li>
                <li className=" md:mr-6 cursor-pointer   lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  <a href="/contact">Contact</a>
                </li>
                <li className="hidden md:mr-6 cursor-pointer pt-4 lg:py-0 hover:bg-gravy_accent rounded p-2 hover:text-white w-max">
                  Help
                </li>
                <li className="hidden cursor-pointer pt-4 lg:py-0">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 grid-flow-row mb-5 gap-6 md:text-center">
              <div className=" align-middle inline-block   ">
                <p className="text-gravy_accent font-semibold">CAREERS</p>
                <p className="text-white">rj@gravy.sg</p>
              </div>

              <div className=" ">
                <p className="text-gravy_accent font-semibold">MORE INFO</p>
                <p className="text-white">info@gravy.sg</p>
              </div>
              <div className=" ">
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
                <p className="text-gravy_accent font-semibold">
                  Tanjong Katong
                </p>
                <p className="text-white">246 Tanjong Katong</p>
                <p className="text-white">Singapore 437034</p>
              </div>
              <div className=" ">
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
                <p className="text-gravy_accent font-semibold">Tanjong Pagar</p>
                <p className="text-white">1 Hoe Chiang Road</p>
                <p className="text-white">Singapore 089310</p>
              </div>

              <div className="  ">
                <p className="text-gravy_accent font-semibold">info@gravy.sg</p>
                <p className="text-white">+65-9101-5824</p>
                <p className="text-white">&nbsp;</p>
              </div>

              <div className=" ">
                <p className="text-gravy_accent font-semibold">info@gravy.sg</p>
                <p className="text-white">+65-6909-7554</p>
                <p className="text-white">+65-9101-5824</p>
              </div>
            </div>
            <div className="text-sm text-color mb-10 f-f-l hidden">
              <p> © 2021 Gravy. All rights reserved</p>
            </div>
          </div>
          <p className="md:self-center md:mx-auto font-semibold text-white">
            Follow us on
          </p>
          <div className="w-9/12  h-0.5  rounded-full" />
          <div className="flex md:justify-between items-center pt-4">
            <div className="mr-4   ">
              <a href="https://www.facebook.com/gravy.sg">
                <img src="https://img.icons8.com/color/48/000000/facebook.png" />
              </a>
            </div>
            <a href="https://www.instagram.com/gravy.sg/?utm_medium=copy_link">
              <img src="https://img.icons8.com/color/48/000000/instagram-new--v2.png" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
