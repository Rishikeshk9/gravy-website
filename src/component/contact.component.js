import Image1 from "../assets/1x/storefront.JPG";
import ReCAPTCHA from "react-google-recaptcha";
import React, { Component, useState } from "react";
import Noty from "noty";
import mojs from "@mojs/core";
import "../../node_modules/noty/lib/noty.css";
import * as emailjs from "emailjs-com";
import { init } from "emailjs-com";

import "../../node_modules/noty/lib/themes/metroui.css";

export default function Example() {
  init("user_peVqxaJmK4V02dGueupc9");

  const [toSend, setToSend] = useState({
    user_name: "",

    mail_id: "",
    captcha: "",
    request: "",
  });
  function onChange(value) {
    toSend.captcha = value;
    console.log("Captcha value:", value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    if (toSend.captcha.length > 2) {
      emailjs
        .send(
          "service_a0pxj6k",
          "template_wvdwnsl",
          toSend,
          "user_peVqxaJmK4V02dGueupc9"
        )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          Noty.closeAll();
          new Noty({
            type: "success",
            text: "Your Message has been sent! Our Team will get back in touch shortly.",
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
      console.log("");
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log(toSend);
  };

  return (
    <>
      <div className=" bg-gravy ">
        <div className=" ">
          <img
            className=" shadow  w-full  lg:max-h-96  "
            alt="gallery"
            src={Image1}
          ></img>
        </div>
        <form action="#" method="POST" onSubmit={onSubmit}>
          <div className=" pb-5  sm:mt-0 bg-gravy  my-auto lg:mx-96">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="  md:mt-0 md:col-span-2">
                <div className="m-5 mt-10">
                  <h1 className=" text-4xl font-bold text-gravy_accent">
                    CONTACT
                  </h1>
                </div>
                <div className=" overflow-hidden sm: ">
                  <div className="px-4 py-5  sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="user_name"
                          id="first-name"
                          onChange={handleChange}
                          placeholder="Your Name"
                          autoComplete="given-name"
                          className="mt-1 focus:ring-gravy_accent focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <input
                          type="text"
                          name="mail_id"
                          id="mail_id"
                          placeholder="Your Email"
                          autoComplete="family-name"
                          onChange={handleChange}
                          className="mt-1 focus:ring-gravy_accent focus:border-gravy_accent block w-full shadow-sm sm:text-sm border-gray-300  "
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <div className="mt-1">
                          <textarea
                            id="request"
                            name="request"
                            rows={3}
                            onChange={handleChange}
                            className="shadow-sm focus:ring-gravy_accent focus:border-gravy_accent mt-1 block w-full sm:text-sm border border-gray-300  "
                            placeholder="Drop us a line or two"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <ReCAPTCHA
                        sitekey="6LcWWjgcAAAAAJOTFZopGIfc9DbLvBh1Y2vXLW5n"
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 mb-5">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-gravy_accent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gravy_accent"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
