import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import Noty from "noty";
import mojs from "@mojs/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/navbar.component";
import Gallery from "./component/gallery.component";

import Career from "./component/careers.component";
import Contact from "./component/contact.component";
import About from "./component/about.component";
import Events from "./component/events.component";
import Reservation from "./component/reservation.component";
import Home from "./component/home.component";
import Booking from "./component/booking.component";

import Footer from "./component/footer.component";
import Footer_alt from "./component/footer-alt.component";
import Footer_new from "./component/footer-new.component";

import Switcher from "./component/switcher.component";

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    Noty.closeAll();
    // Do something before request is sent
    new Noty({
      type: "info",
      text: "Uploading Track",
      theme: "metroui",
      layout: "bottomRight",
    }).show();
    return config;
  },
  function (error) {
    // Do something with request error
    Noty.closeAll();
    new Noty({
      type: "error",
      text: "Error :" + error,
      theme: "metroui",
      layout: "bottomRight",
    }).show();

    return Promise.reject(error);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => {
    Noty.closeAll();
    // Add configurations here
    if (res.status === 201) {
      new Noty({
        type: "success",
        text: res.data,
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
      console.log("Posted Successfully");
      console.log(res);
    }
    return res;
  },
  (err) => {
    Noty.closeAll();
    new Noty({
      type: "error",
      text: "Error :" + err,
      theme: "metroui",
      layout: "bottomRight",
    }).show();
    return Promise.reject(err);
  }
);

ReactDOM.render(
  <Router>
    <Navbar />
    <Route
      path="/"
      exact
      component={() => (
        <>
          {" "}
          <Home /> <Footer className="fixed bottom-0 z-0" />{" "}
        </>
      )}
    />
    <Route
      path="/about"
      exact
      component={() => (
        <>
          <About />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />
    <Route
      path="/menu"
      exact
      component={() => (
        <>
          <Switcher />
        </>
      )}
    />

    <Route
      path="/reservation"
      exact
      component={() => (
        <>
          <Reservation />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />
    <Route
      path="/booking"
      exact
      component={() => (
        <>
          <Booking />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />

    <Route
      path="/events"
      exact
      component={() => (
        <>
          <Events />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />
    <Route
      path="/gallery"
      exact
      component={() => (
        <>
          <Gallery />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />

    <Route
      path="/careers"
      exact
      component={() => (
        <>
          <Career />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />
    <Route
      path="/contact"
      exact
      component={() => (
        <>
          <Contact />
          <Footer_new className="fixed bottom-0 z-0" />
          <Footer_alt className="fixed bottom-0 z-0" />
          <Footer className="fixed bottom-0 z-0" />
        </>
      )}
    />
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
