import Image1 from "../assets/1x/events.jpg";
import Image from "../assets/1x/events/image1.jpeg";
import Image2 from "../assets/1x/events/image2.jpeg";
import Image3 from "../assets/1x/events/image3.jpeg";
import Image4 from "../assets/1x/events/image4.jpeg";
import Discounts from "../assets/1x/discount.png";

export default function Example() {
  return (
    <>
      <div>
        <div className="bg-events h-full bg-cover bg-no-repeat bg-center ">
          <div className=" pt-40 px-5 pb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4  grid-flow-row gap-4">
              <img className="" src={Image}></img>
              <img className="self-center" src={Image2}></img>
              <img className="" src={Image3}></img>
              <img className="" src={Image4}></img>
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
