import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import "react-datepicker/dist/react-datepicker.css";
import HotelList from "./Listbox/listbox.component";

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

export default function Reservation() {
  const [startDate, setStartDate] = useState(new Date());
  const hotels = [
    {
      id: 1,
      name: "Gravy Tanjong Katong",
    },
    {
      id: 2,
      name: "Gravy Tanjong Pagar",
    },
  ];

  const people = [
    {
      id: 1,
      name: "1 Adult",
    },
    {
      id: 2,
      name: "2 Adults",
    },
    {
      id: 2,
      name: "3 Adults",
    },
    {
      id: 2,
      name: "4 Adults",
    },
  ];
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <div className="bg-gravy mt-10 pt-10 lg:w-1/3  mx-auto">
        <div className="w-full bg-gravy">
          <div className="m-5 mt-10">
            <h1 className=" text-4xl text-center font-bold text-gravy_accent">
              RESERVATION
            </h1>
          </div>
        </div>
        <form action="#" method="POST">
          <div className="grid  grid-flow-row grid-cols-2   gap-6 px-5">
            <div className="col-span-2 flex mx-auto  ">
              <p className="text-white text-left self-center   mr-5 opacity-50">
                Select Hotel
              </p>

              <HotelList
                items={hotels}
                selected={{ id: 2, name: "Gravy Tanjong Pagar" }}
              />
            </div>
            <div className="col-span-2  ">
              <p className="text-white mt-3 opacity-50">For</p>
              <HotelList className="" items={people} />
            </div>
            <div className="col-span-2  ">
              <div className="grid grid-cols-2 grid-flow-row gap-6 ">
                <div className="col-span-1  ">
                  <p className="text-white mt-3 opacity-50">When</p>
                  <DatePicker
                    className=" w-full bg-gravy text-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
                <div className="col-span-1  ">
                  <p className="text-white mt-3 opacity-50">At</p>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <div className=" p-1 px-3 w-full bg-gravy text-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent">
                      <KeyboardTimePicker
                        className="bg-gravy text-gravy_accent border-2"
                        id="time-picker"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change time",
                        }}
                      />
                    </div>
                  </MuiPickersUtilsProvider>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <p className="text-white mt-3   opacity-50">Personal Details</p>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
                autoComplete="name"
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder="Mobile Number"
                autoComplete="tel"
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="mail"
                id="mail"
                placeholder="Mail ID"
                autoComplete="email"
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <div className="mt-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="rounded text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg focus:border-gravy_accent mt-1 block w-full sm:text-sm  "
                  placeholder="Your Special Request"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-center pb-10 mt-5">
            <button
              name="booking"
              type="submit"
              className=" shadow-lg inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium  bg-gravy_accent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gravy_accent"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
