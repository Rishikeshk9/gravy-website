/* This example requires Tailwind CSS v2.0+ */
import Image1 from "../assets/1x/booking.JPG";
import { Link } from "react-router-dom";

import React from "react";

import MapChart from "./MapChart/MapChart.component";
import { useHistory } from "react-router-dom";

export default function Example() {
  const history = useHistory();

  return (
    <div className="grid grid-cols-1 bg-gravy pb-10">
      <div className="w-full">
        <img className="shadow" alt="gallery" src={Image1}></img>
      </div>
      <div className="m-5">
        <MapChart lat="1.2740388519911165" lon="103.84258291320964" />
      </div>
      <div className="m-5 mt-10 text-center">
        <h1 className=" text-4xl font-bold text-gravy_accent">GRAVY@TP</h1>
        <h3 className=" text-xl font-bold text-gravy_accent ">OPENING HOURS</h3>

        <p className="text-white my-3 ">
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Monday</p> <p> 11:30AM - 10:00PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Tuesday</p> <p> 11:30AM - 10:00PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Wednesday</p> <p> 11:30AM - 10:00PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Thursday</p> <p> 11:30AM - 10:00PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Friday</p> <p> 11:30AM - 10:30PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold "> Saturday</p> <p> 12:00PM - 10:30PM</p>
          </div>
          <div className="flex justify-between mx-10 self-center">
            <p className="font-bold  "> Sunday</p> <p> 12:00PM - 10:00PM</p>
          </div>
        </p>

        <div className="px-4 py-3   text-center pb-10 mt-5">
          <button
            onClick={() => history.push("/reservation")}
            className=" mx-auto flex hover:rounded motion-safe:hover:scale-110 hover:bg-gravy-light hover:text-gravy_accent shadow-lg  justify-center py-2 px-4  text-sm font-medium  bg-gravy_accent text-white "
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

        <div className=" grid grid-cols-2 mb-5">
          <div className="col-start-1  ">
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
            <p className="text-white">Singapore 437034</p>
          </div>

          <div className="col-start-2">
            <p>&nbsp;</p>
            <p className="text-gravy_accent">info@gravy.sg</p>
            <p className="text-white">+65-9101-5824</p>
            <p className="text-white">246 Tanjong KAtong</p>
          </div>
        </div>
      </div>

      <div className="my-5">
        <div className="m-5">
          <MapChart lat="1.3064113996833324" lon="103.89570206301592" />
        </div>
        <div className="m-5 mt-10 text-center">
          <h1 className=" text-4xl font-bold text-gravy_accent">GRAVY@TK</h1>
          <h3 className=" text-xl font-bold text-gravy_accent ">
            OPENING HOURS
          </h3>

          <p className="text-white my-3 ">
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Monday</p> <p> 11:30AM - 10:00PM</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Tuesday</p> <p> Closed</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Wednesday</p> <p> 11:30AM - 10:00PM</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Thursday</p> <p> 11:30AM - 10:00PM</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Friday</p> <p> 11:30AM - 10:30PM</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold "> Saturday</p> <p> 11:30AM - 10:30PM</p>
            </div>
            <div className="flex justify-between mx-10 self-center">
              <p className="font-bold  "> Sunday</p> <p> 11:30AM - 10:30PM</p>
            </div>
          </p>

          <div className="px-4 py-3   text-center pb-10 mt-5">
            <button
              onClick={() => history.push("/reservation")}
              className=" mx-auto flex hover:rounded motion-safe:hover:scale-110 hover:bg-gravy-light hover:text-gravy_accent shadow-lg  justify-center py-2 px-4  text-sm font-medium  bg-gravy_accent text-white "
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

          <div className=" grid grid-cols-2 mb-5">
            <div className="col-start-1  ">
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
              <p className="text-white">Singapore 437034</p>
            </div>

            <div className="col-start-2  ">
              <p>&nbsp;</p>

              <p className="text-gravy_accent">info@gravy.sg</p>
              <p className="text-white">+65-6909-7554</p>
              <p className="text-white">+65-91015824</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
