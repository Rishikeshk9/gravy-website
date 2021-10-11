/* This example requires Tailwind CSS v2.0+ */
import Image1 from "../assets/1x/about.jpg";
import { Link } from "react-router-dom";

import React from "react";

import MapChart from "./MapChart/MapChart.component";
import { useHistory } from "react-router-dom";

export default function Example() {
  const history = useHistory();

  return (
    <>
      <div className="w-screen ">
        <img
          className="   shadow-md bg-auto  w-full lg:h-screen bg-no-repeat sm:mt-18 md:mt-0 bg-center "
          alt="gallery"
          src={Image1}
        ></img>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 bg-gravy     ">
        <div className="bg-gravy-light   mx-auto shadow-lg my-5">
          <div className="m-5 shadow-lg">
            {/* <MapChart lat="1.2740388519911165" lon="103.84258291320964" /> */}
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  className="w-full h-96"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=gravy%20Tanjong%20Pagar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>{" "}
            </div>
          </div>
          <div className="m-5 mt-10 text-center">
            <h1 className=" text-4xl font-bold text-gravy_accent">GRAVY@TP</h1>
            <h3 className=" text-xl font-bold text-gravy_accent ">
              OPENING HOURS
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2  grid-flow-row ">
              <div className="self-center">
                <p className="text-white my-3 ">
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Monday</p>{" "}
                    <p className=" text-right">Closed</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Tuesday</p>{" "}
                    <p className=" text-right"> 11:30AM - 10:00PM</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Wednesday</p>{" "}
                    <p className=" text-right"> 11:30AM - 10:00PM</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Thursday</p>{" "}
                    <p className=" text-right"> 11:30AM - 10:00PM</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Friday</p>{" "}
                    <p className=" text-right"> 11:30AM - 10:30PM</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold "> Saturday</p>{" "}
                    <p className=" text-right"> 12:00PM - 10:30PM</p>
                  </div>
                  <div className="flex justify-between mx-5 self-center">
                    <p className="font-bold  "> Sunday</p>{" "}
                    <p className=" text-right"> 12:00PM - 10:00PM</p>
                  </div>
                </p>
              </div>

              <div className=" grid grid-cols-1 md:grid-cols-2 mb-5 self-center gap-6 ">
                <div className="  self-center text-center mt-5">
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
                  <p className="text-gravy_accent font-bold">Tanjong Pagar</p>
                  <p className="text-white">1 Hoe Chiang Road</p>
                  <p className="text-white">Singapore 089310</p>
                </div>

                <div className=" self-center text-center">
                  <p>&nbsp;</p>
                  <p className="text-gravy_accent font-bold">info@gravy.sg</p>
                  <p className="text-white">+65-6909-7554</p>
                  <p className="text-white">+65-9101-5824</p>
                </div>
                <div className="px-4 self-center col-span-2  text-center  mt-5">
                  <button
                    onClick={() => history.push("/reservation")}
                    className=" mx-auto flex hover:rounded motion-safe:hover:scale-110 hover:bg-gravy  hover:text-gravy_accent shadow-lg  justify-center py-2 px-4  text-sm font-medium  bg-gravy_accent text-white "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mx-2 self-center">Reservation</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="  bg-gravy-light   mx-auto shadow-lg my-5">
          <div className="m-5">
            {/* <MapChart lat="1.3064113996833324" lon="103.89570206301592" /> */}
            <div class="mapouter">
              <div class="gmap_canvas">
                <iframe
                  className="w-full h-96"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=gravy%20Tanjong%20Katong&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="m-5 mt-10 text-center ">
            <h1 className=" text-4xl font-bold text-gravy_accent">GRAVY@TK</h1>
            <h3 className=" text-xl font-bold text-gravy_accent ">
              OPENING HOURS
            </h3>

            <div className="grid  grid-cols-1 lg:grid-cols-2">
              <p className="text-white my-3 ">
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Monday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:00PM</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Tuesday</p>{" "}
                  <p className=" text-right"> Closed</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Wednesday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:00PM</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Thursday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:00PM</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Friday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:30PM</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold "> Saturday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:30PM</p>
                </div>
                <div className="flex justify-between mx-5 self-center">
                  <p className="font-bold  "> Sunday</p>{" "}
                  <p className=" text-right"> 11:30AM - 10:30PM</p>
                </div>
              </p>

              <div className=" grid  grid-cols-1 md:grid-cols-2 mb-5 self-center gap-6 ">
                <div className="  self-center text-center mt-5">
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
                  <p className="text-gravy_accent font-bold">Tanjong Katong</p>
                  <p className="text-white">246 Tanjong Katong</p>
                  <p className="text-white">Singapore 437034</p>
                </div>

                <div className=" self-center text-center">
                  <p>&nbsp;</p>
                  <p className="text-gravy_accent font-bold">info@gravy.sg</p>
                  <p className="text-white">+65-8298-2745</p>
                </div>
                <div className="px-4 self-center col-span-2  text-center  mt-5">
                  <button
                    onClick={() => history.push("/reservation")}
                    className=" mx-auto flex hover:rounded motion-safe:hover:scale-110 hover:bg-gravy  hover:text-gravy_accent shadow-lg  justify-center py-2 px-4  text-sm font-medium  bg-gravy_accent text-white "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mx-2 self-center">Reservation</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
