
import Image1 from "../assets/1x/contact.jpg";

export default function Example() {
    return (
      < >
        <div className=" bg-gravy" >


        <div className="w-full ">
        <img className=" shadow  " alt="gallery" src={Image1}></img>
        <div className="m-5 mt-10">
        <h1 className=" text-4xl font-bold text-gravy_accent">CONTACT</h1>
        </div>
      </div>

      <div className="mt-5 pb-5 mt-0 sm:mt-0 bg-gravy">
        <div className="md:grid md:grid-cols-3 md:gap-6">
           
          <div className="  md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className=" overflow-hidden sm: ">
                <div className="px-4 py-5  sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                       
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Your Name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  "
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        placeholder="Your Email"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300  "
                      />
                    </div> 
                    <div className="col-span-6 sm:col-span-3">
                     
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300  "
                        placeholder="Drop us a line or two"
                        defaultValue={''}
                      />
                    </div>
                     
                  </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-center sm:px-6 mb-5">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium  bg-gravy_accent text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
 
      </>
    )
  }
  