import "./App.css";
import Navbar from "./component/navbar.component";
import Footer from "./component/footer.component";
import Footer_alt from "./component/footer-alt.component";
import "../node_modules/noty/lib/noty.css";
import headerImage from "./assets/1x/header.jpeg";
import Gallery from "./component/gallery.component";
import Career from "./component/careers.component";
import Contact from "./component/contact.component";
import About from "./component/about.component";
import Events from "./component/events.component";
import Reservation from "./component/reservation.component";
import Home from "./component/home.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Booking from "./component/booking.component";

import Footer_new from "./component/footer-new.component";

import Switcher from "./component/switcher.component";

function App({ location }) {
  return (
    <div className=" bg-gravy flex flex-col   font-montserrat shadow overflow-y-auto ">
      <Router>
        <Navbar />
        <Route path="/" exact component={() => <Home />} />
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
              <Footer_new className="fixed bottom-0 z-0" />
              <Footer_alt className="fixed bottom-0 z-0" />
              <Footer className="fixed bottom-0 z-0" />
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
      </Router>
    </div>
  );
}

export default App;
