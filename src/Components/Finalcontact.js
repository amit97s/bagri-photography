import React, { useState } from "react";
import img from "../subassets/bagris images/_AJU1479.jpg";

import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosInformationCircle } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";

import callUs from "../assets/callus.png";

const Finalcontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\d{10}$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim() || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!phone.trim() || !phoneRegex.test(phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!budget.trim()) {
      errors.budget = "Please select a budget";
    }
    if (!city.trim()) {
      errors.city = "Please select a city";
    }

    setError(errors);

    if (Object.keys(errors).length === 0) {
    }
  };

  return (
    <>
      <main className="mx-auto overflow-hidden max-w-screen-xl ">
        <div className="relative ">
          <img
            style={{ filter: "brightness(50%)" }}
            src={img}
            alt="img"
            className="w-screen h-[25rem] lg:h-[38rem] object-cover   "
          />
          <div className=" relative w-full top-2 right-0 bg-white lg:shadow-lg rounded-md lg:w-[28rem] p-4 lg:absolute lg:right-10 lg:top-7  ">
            <form className="flex flex-col gap-2.5" onSubmit={handleSubmit}>
              <div className="flex items-center gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="UserName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name*
                  </label>
                  <input
                    type="text"
                    id="UserName"
                    placeholder={error.name || "John Doe"}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                      error.name ? "border-red-600" : ""
                    }`}
                  />
                  {error.name && (
                    <p className="text-red-500 text-xs">{error.name}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="UserEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder={error.email || "amitmanral@gmail.com"}
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                      error.email ? "border-red-600" : ""
                    }`}
                  />
                  {error.email && (
                    <p className="text-red-500 text-xs">{error.email}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="UserPhone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone*
                </label>
                <input
                  type="text"
                  id="UserPhone"
                  placeholder={error.phone || "+91 1234567890"}
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                    error.phone ? "border-red-600" : ""
                  }`}
                />
                {error.phone && (
                  <p className="text-red-500 text-xs">{error.phone}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="Budget"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Budget*
                  </label>
                  <select
                    id="Budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                      error.budget ? "border-red-600" : ""
                    }`}
                  >
                    <option value="">Select budget</option>
                    <option value="100">$100</option>
                    <option value="200">$200</option>
                    <option value="300">$300</option>
                    <option value="400">$400</option>
                    <option value="500">$500</option>
                  </select>
                  {error.budget && (
                    <p className="text-red-500 text-xs">{error.budget}</p>
                  )}
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="City"
                    className="block text-sm font-medium text-gray-900"
                  >
                    City*
                  </label>
                  <select
                    id="City"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className={`mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2 ${
                      error.city ? "border-red-600" : ""
                    }`}
                  >
                    <option value="">Select city</option>
                    <option value="Noida">Noida</option>
                    <option value="Faridabad">Faridabad</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Ghaziabad">Ghaziabad</option>
                    <option value="Meerut">Meerut</option>
                    <option value="Old Delhi">Old Delhi</option>
                    <option value="Other">Other</option>
                  </select>
                  {error.city && (
                    <p className="text-red-500 text-xs">{error.city}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="Message"
                  className="mt-1 w-full rounded-md sm:text-sm outline-none border py-2.5 px-2"
                  rows="4"
                  placeholder="Enter your message......."
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-block w-full rounded border bg-red-400 px-12 py-3 text-sm font-medium text-white hover:bg-red-500 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="absolute  top-24 lg:top-52 left-0 p-3 w-full    lg:w-[44rem]">
            <h1 className=" text-white text-xl sm:text-3xl ">
              Find The Perfect
            </h1>
            <h1 className=" text-white text-xl sm:text-3xl ">
              WEDDING PHOTOGRAPHER
            </h1>
            <p className="text-white mt-4 sm:text-xl w-fit sm:w-[40rem] lg:w-10/12 ">
              Fill in your requirements sowe can help find the right Wedding
              Photographer for you
            </p>
          </div>
        </div>

        <section className="p-2 sm:p-10 mt-3">
          <div>
            <h1 className="flex items-center gap-2 font-bold pl-4">
              {" "}
              What we offer
            </h1>
          </div>

          <div className="mt-3 ml-2">
            <p className="flex gap-2 items-center">
              <IoIosArrowRoundForward size={20} className="w-6" /> We provide
              best photographer in your town{" "}
            </p>
            <p className="flex gap-2 items-center">
              <IoIosArrowRoundForward size={20} className="w-6" />
              We provide pre weeding and wedding photography{" "}
            </p>

            <p className="flex gap-2 items-center">
              <IoIosArrowRoundForward size={20} className="w-6" /> Capture your
              special moments with our skilled photographers
            </p>
            <p className="flex gap-2 items-center">
              <IoIosArrowRoundForward size={20} className="w-6" />
              Let us immortalize your love story through stunning pre-wedding
              and wedding photography
            </p>
            <p className="flex gap-2 items-center">
              <IoIosArrowRoundForward size={20} className="w-6" /> Transform
              your memories into timeless photographs with our professional
              services
            </p>
          </div>
        </section>

        <section className="bg-white py-5 flex items-center justify-around ">
          <div className=" m-auto md:ml-32">
            <h1 className="flex items-center gap-2 font-bold ">
              You can directly call us!
            </h1>
            <p> Give us a call and discuss your requirements.</p>
            <button className="mt-5 flex items-center justify-center gap-4 bg-green-500 rounded-md hover:bg-green-600 duration-150 text-white py-2.5 px-1 sm:px-5 outline-none border-none font-medium text-base w-full ">
              <MdLocalPhone size={20} /> Call us +91 0987654321
            </button>
          </div>

          <div className="mr-32 hidden md:block">
            <img src={callUs} alt="" className="h-60" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Finalcontact;
