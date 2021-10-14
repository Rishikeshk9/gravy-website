import { Listbox } from "@headlessui/react";
import DatePicker from "react-datepicker";
import React, { Component, useState } from "react";
import ReactDOM from "react-dom";

import "react-datepicker/dist/react-datepicker.css";
import HotelList from "./Listbox/listbox.component";
import { init } from "emailjs-com";
import * as emailjs from "emailjs-com";

import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Noty from "noty";
import mojs from "@mojs/core";
import "../../node_modules/noty/lib/noty.css";

import "../../node_modules/noty/lib/themes/metroui.css";
init("user_peVqxaJmK4V02dGueupc9");

export default function Reservation() {
  const [startDate, setStartDate] = useState(new Date());

  // The first commit of Material-UI
  const [selectedTime, setSelectedTime] = React.useState(
    new Date().toLocaleTimeString()
  );

  const handleTimeChange = (selectedTime) => {
    setSelectedTime(selectedTime);
    toSend.booking_time = selectedTime;
  };

  const [toSend, setToSend] = useState({
    hotel_name: "",
    user_name: "",
    mob_number: "",
    mail_id: "",
    for_number: "",
    booking_date: "",
    unformatted_date: "",
    request: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      toSend.hotel_name.length > 1 &&
      toSend.user_name.length > 1 &&
      toSend.mob_number.length > 1 &&
      toSend.mail_id.length > 1 &&
      toSend.for_number.length > 1 &&
      toSend.booking_date.length > 1
    ) {
      emailjs
        .send(
          "service_a0pxj6k",
          "template_7i2stbc",
          toSend,
          "user_peVqxaJmK4V02dGueupc9"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          Noty.closeAll();
          new Noty({
            type: "success",
            text: "Your Reservation has been sent! Our Team will contact you for confirmation.",
            theme: "metroui",
            layout: "bottomRight",

            animation: {
              open: function (promise) {
                var n = this;
                var Timeline = new mojs.Timeline();
                var body = new mojs.Html({
                  el: n.barDom,
                  x: { 500: 0, delay: 0, duration: 500, easing: "elastic.out" },
                  isForce3d: true,
                  onComplete: function () {
                    promise(function (resolve) {
                      resolve();
                    });
                  },
                });

                var parent = new mojs.Shape({
                  parent: n.barDom,
                  width: 200,
                  height: n.barDom.getBoundingClientRect().height,
                  radius: 0,
                  x: { [150]: -150 },
                  duration: 1.2 * 500,
                  isShowStart: true,
                });

                n.barDom.style["overflow"] = "visible";
                parent.el.style["overflow"] = "hidden";

                var burst = new mojs.Burst({
                  parent: parent.el,
                  count: 10,
                  top: n.barDom.getBoundingClientRect().height + 75,
                  degree: 90,
                  radius: 75,
                  angle: { [-90]: 40 },
                  children: {
                    fill: "#EBD761",
                    delay: "stagger(500, -50)",
                    radius: "rand(8, 25)",
                    direction: -1,
                    isSwirl: true,
                  },
                });

                var fadeBurst = new mojs.Burst({
                  parent: parent.el,
                  count: 2,
                  degree: 0,
                  angle: 75,
                  radius: { 0: 100 },
                  top: "90%",
                  children: {
                    fill: "#EBD761",
                    pathScale: [0.65, 1],
                    radius: "rand(12, 15)",
                    direction: [-1, 1],
                    delay: 0.8 * 500,
                    isSwirl: true,
                  },
                });

                Timeline.add(body, burst, fadeBurst, parent);
                Timeline.play();
              },
              close: function (promise) {
                var n = this;
                new mojs.Html({
                  el: n.barDom,
                  x: { 0: 500, delay: 10, duration: 500, easing: "cubic.out" },
                  skewY: {
                    0: 10,
                    delay: 10,
                    duration: 500,
                    easing: "cubic.out",
                  },
                  isForce3d: true,
                  onComplete: function () {
                    promise(function (resolve) {
                      resolve();
                    });
                  },
                }).play();
              },
            },
          }).show();
          console.log("Posted Successfully");
        })
        .catch((err) => {
          console.log("FAILED...", err);
        });
    } else {
      new Noty({
        type: "error",
        text:
          "" + toSend.booking_date.length < 1
            ? "Please choose Booking Date & Time before submitting!"
            : "Please Choose all details before submitting!",
        theme: "metroui",
        layout: "bottomRight",

        animation: {
          open: function (promise) {
            var n = this;
            var Timeline = new mojs.Timeline();
            var body = new mojs.Html({
              el: n.barDom,
              x: { 500: 0, delay: 0, duration: 500, easing: "elastic.out" },
              isForce3d: true,
              onComplete: function () {
                promise(function (resolve) {
                  resolve();
                });
              },
            });

            var parent = new mojs.Shape({
              parent: n.barDom,
              width: 200,
              height: n.barDom.getBoundingClientRect().height,
              radius: 0,
              x: { [150]: -150 },
              duration: 1.2 * 500,
              isShowStart: true,
            });

            n.barDom.style["overflow"] = "visible";
            parent.el.style["overflow"] = "hidden";

            var burst = new mojs.Burst({
              parent: parent.el,
              count: 10,
              top: n.barDom.getBoundingClientRect().height + 75,
              degree: 90,
              radius: 75,
              angle: { [-90]: 40 },
              children: {
                fill: "#EBD761",
                delay: "stagger(500, -50)",
                radius: "rand(8, 25)",
                direction: -1,
                isSwirl: true,
              },
            });

            var fadeBurst = new mojs.Burst({
              parent: parent.el,
              count: 2,
              degree: 0,
              angle: 75,
              radius: { 0: 100 },
              top: "90%",
              children: {
                fill: "#EBD761",
                pathScale: [0.65, 1],
                radius: "rand(12, 15)",
                direction: [-1, 1],
                delay: 0.8 * 500,
                isSwirl: true,
              },
            });

            Timeline.add(body, burst, fadeBurst, parent);
            Timeline.play();
          },
          close: function (promise) {
            var n = this;
            new mojs.Html({
              el: n.barDom,
              x: { 0: 500, delay: 10, duration: 500, easing: "cubic.out" },
              skewY: { 0: 10, delay: 10, duration: 500, easing: "cubic.out" },
              isForce3d: true,
              onComplete: function () {
                promise(function (resolve) {
                  resolve();
                });
              },
            }).play();
          },
        },
      }).show();
    }
  };
  const [selectValue, setSelectValue] = useState("");

  // const handleChange = (e) => {
  //   setSelectValue({ selectValue: e.target.value });
  // };

  const handleChange = (e) => {
    console.log(toSend);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    toSend.unformatted_date = date;
    date = date.toLocaleDateString() + " " + date.toLocaleTimeString();
    console.log(date);
    toSend.booking_date = date;
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
        <form action="#" method="POST" onSubmit={onSubmit}>
          <div className="grid  grid-flow-row grid-cols-2   gap-6 px-5">
            <div className="col-span-2 flex mx-auto  ">
              <p className="text-white text-left self-center   mr-5 opacity-50  whitespace-nowrap">
                Select Hotel
              </p>

              <select
                name="hotel_name"
                onChange={handleChange}
                required
                className="bg-gravy text-gravy_accent relative w-full   border-2 border-gravy-light shadow-lg rounded-md   pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent sm:text-sm"
              >
                <option value="" selected disabled>
                  Select Outlet
                </option>
                <option value="Gravy Tanjong Katong">
                  Gravy Tanjong Katong
                </option>
                <option value="Gravy Tanjong Pagar">Gravy Tanjong Pagar</option>
              </select>
              {/* <HotelList
                className="hidden "
                items={hotels}
                selected={{ id: 2, name: "Gravy Tanjong Pagar" }}
              /> */}
            </div>
            <div className="col-span-2  "></div>
            <div className="col-span-2  ">
              <div className="grid grid-cols-2 grid-flow-row gap-6 ">
                <div className="col-span-1  ">
                  <p className="text-white mt-3 opacity-50">When</p>
                  {/* <DatePicker
                    name="booking_date"
                    className=" w-full bg-gravy text-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  /> */}
                  <MuiPickersUtilsProvider
                    className="bg-gravy   text-gravy_accent border-2  rounded-md shadow-lg    focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent"
                    utils={DateFnsUtils}
                  >
                    <DateTimePicker
                      className="  bg-gravy text-gravy_accent border-2  rounded-md shadow-lg  focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent"
                      value={toSend.unformatted_date}
                      format="hh:mm dd/MM/yyyy"
                      autoOk
                      required
                      invalidDateMessage={false}
                      onChange={handleDateChange}
                      ampm={true}
                      name="booking_date"
                      style={{ color: "#fff" }}
                      minDate={new Date().setHours(new Date().getHours() + 1)}
                    />
                  </MuiPickersUtilsProvider>
                </div>
                <div className="col-span-1  ">
                  <p className="text-white mt-3 opacity-50">For</p>
                  {/* <HotelList className="" items={people} /> */}

                  <select
                    name="for_number"
                    onChange={handleChange}
                    required
                    className="bg-gravy text-gravy_accent relative w-full   border-2 border-gravy-light shadow-lg rounded-md   pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gravy_accent focus:border-gravy_accent sm:text-sm"
                  >
                    <option value="" selected disabled>
                      Select Visitors
                    </option>
                    <option value="1 Adult">1 Adult</option>
                    <option value="1 Adults">2 Adults</option>{" "}
                    <option value="3 Adults">3 Adults</option>{" "}
                    <option value="4 Adults">4 Adults</option>{" "}
                    <option value="5 Adults">5 Adults</option>{" "}
                    <option value="6 Adults">6 Adults</option>{" "}
                    <option value="7 Adults">7 Adults</option>{" "}
                    <option value="8 Adults">8 Adults</option>{" "}
                    <option value="9 Adults">9 Adults</option>{" "}
                    <option value="10 Adults">10 Adults</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="col-span-2">
              <p className="text-white mt-3   opacity-50">Personal Details</p>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="Your Full Name"
                autoComplete="name"
                onChange={handleChange}
                required
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="mob_number"
                id="mobile"
                placeholder="Mobile Number"
                autoComplete="tel"
                onChange={handleChange}
                required
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <input
                type="text"
                name="mail_id"
                id="mail"
                placeholder="Mail ID"
                autoComplete="email"
                onChange={handleChange}
                required
                className="mt-1 text-gravy_accent placeholder-current bg-gravy focus:ring-gravy_accent border-2 border-gravy-light shadow-lg rounded focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
              />
            </div>
            <div className="col-span-2">
              <div className="mt-1">
                <textarea
                  id="request"
                  name="request"
                  rows={3}
                  onChange={handleChange}
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
