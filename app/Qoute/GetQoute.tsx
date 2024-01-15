import React from "react";

const GetQuote = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="my-10 mx-auto max-w-4xl">
        <div className="flex flex-col text-center gap-y-5 py-10">
          <div className="text-2xl md:text-4xl font-bold">QUOTATION</div>
        </div>
        <div className="grid md:grid-cols-2 gap-10 p-5 ">
          <div className="col-span-1">
            <div className="flex flex-col space-y-8">
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Name</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Email</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Phone Number</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="service"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col space-y-8">
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Service</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="attachment"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Attach your Plan Details</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="text-start">
                <h3 className="text-md mb-2 mt-2 font-bold">Your Requirement</h3>
                <div className="rounded-full p-4 shadow-md">
                  <input
                    type="text"
                    className="w-full h-full outline-none"
                    placeholder="Requirement"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center">
          <div className="w-40 border border-blue-500 bg-white text-center text-blue-500 py-2 transition duration-500 ease-in-out hover:scale-110 rounded-full hover:bg-blue-500 hover:text-white">
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
