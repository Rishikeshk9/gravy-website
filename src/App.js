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
    <div className=" bg-gravy flex flex-col   font-montserrat shadow overflow-y-auto "></div>
  );
}

export default App;
