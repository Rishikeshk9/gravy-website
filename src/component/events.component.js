import Image1 from "../assets/1x/events.jpg";
import Discounts from "../assets/1x/discount.png";

export default function Example() {
  return (
    <>
      <div>
        <div className="bg-events h-screen bg-cover bg-no-repeat bg-center ">
          <div className=" pt-48 px-5">
            <div className="bg-gravy-light mx-auto  lg:w-1/3 p-5 shadow-lg text-center">
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
