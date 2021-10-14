import Image1 from "../assets/1x/events.jpg";
import Image from "../assets/1x/events/Amrut Fusion Promo-min.jpg";
import Image2 from "../assets/1x/events/Candlelight -min.jpg";
import Image3 from "../assets/1x/events/Snap promo-min.jpg";
import Image4 from "../assets/1x/events/Wine & Beer Promo-min.jpg";
import Discounts from "../assets/1x/discount.png";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Example() {
  return (
    <>
      <div>
        <div className="bg-events h-full bg-cover bg-no-repeat bg-center ">
          <div className=" pt-40 px-5 pb-20  justify-center">
            <div className="  self-center mx-auto lg:grid lg:grid-cols-5 ">
              <div className="col-span-2"></div>
              <Splide
                options={{
                  type: "loop",
                  perPage: 2,
                  perMove: 1,
                  breakpoints: {
                    640: {
                      perPage: 1,
                    },
                  },
                  rewind: true,
                  width: 1000,
                  gap: "1rem",
                }}
                className="col-span-4 lg:ml-72 self-center"
              >
                <SplideSlide>
                  <img className="" src={Image}></img>{" "}
                </SplideSlide>
                <SplideSlide>
                  <img className="self-center" src={Image2}></img>
                </SplideSlide>
                <SplideSlide>
                  <img className="" src={Image3}></img>{" "}
                </SplideSlide>
                <SplideSlide>
                  <img className="" src={Image4}></img>
                </SplideSlide>
              </Splide>{" "}
            </div>
            <div className="bg-gravy-light mx-auto  lg:w-1/3 p-5 shadow-lg text-center mt-14">
              <div className="  h-24 w-24 mx-auto  mb-5">
                {" "}
                <img
                  className="h-46 w-52"
                  src={Discounts}
                  alt="Gravy-Logo"
                ></img>
              </div>
              <p className="text-gravy_accent text-center font-bold">
                100 Points If You Sign Up For Our Loyalty Program
              </p>
              <input
                placeholder="Enter your Email Address"
                className=" p-2 mx-auto self-center justify-center  w-full my-5"
              ></input>
              <button className="text-white bg-gravy_accent p-2 mx-auto self-center justify-center rounded">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
