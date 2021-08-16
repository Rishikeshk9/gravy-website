import Image1 from "../assets/1x/events.jpg";
import Discounts from "../assets/1x/discount.png";

export default function Example() {
  return (
    <>
      <div className="">
        <div className="w-full mb-20">
          <img className=" shadow  " alt="gallery" src={Image1}></img>
        </div>

        <div className="h-32">
          <img
            className="h-32 w-32 z-100 absolute  z-40 align-middle justify-center inset-x-1/3 inset-y-1/4 text-center align-middle"
            src={Discounts}
          ></img>

          <div className="my-5 mt-0 sm:mt-0  z-30">
            <div className="grid grid-cols-1 md:gap-6 bg-black absolute top-60 z-30">
              <form action="#" method="POST">
                <div className="px-4 py-5  sm:p-6">
                  <div className="col-span-1 ">
                    <p className="font-bold text-white text-center my-5 pt-20">
                      Subscribe to our Newsletter and get the Latest Event and
                      Promotions
                    </p>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Your Email"
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  "
                    />
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 mb-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-gravy_accent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
