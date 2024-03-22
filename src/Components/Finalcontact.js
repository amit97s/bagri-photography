import React, { useState } from "react";
import img from "../subassets/bagris images/_AJU1479.jpg";
const Finalcontact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!name || !email || !phone) {
      setError(true);
    } else {
      setError(false);
    }
  };

  console.log(error);
  return (
    <>
      <div className="relative ">
        <img src={img} alt="img" className=" w-screen h-[34rem] object-cover" />

        <div className="bg-white shadow-lg rounded-md w-[28rem] p-4 absolute  right-10 top-12 ">
          <form
            className="flex flex-col gap-2.5"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="flex items-center gap-2">
              <div className="w-1/2">
                <label
                  htmlFor="UserEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Name*
                </label>

                <input
                  type="text"
                  placeholder={error ? "Name is required" : "john doe"}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className={`mt-1 w-full rounded-md   sm:text-sm outline-none border  py-2.5 px-2 ${
                    error ? "placeholder-red-600" : ""
                  }`}
                />
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="UserEmail"
                  className="block text-sm font-medium text-gray-700"
                >
                  {" "}
                  Email*{" "}
                </label>

                <input
                  type="email"
                  placeholder={
                    error ? "email is required" : "amitmanral@gmail.com"
                  }
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className={`mt-1 w-full rounded-md   sm:text-sm outline-none border border-gray-900 py-2.5 px-2 ${
                    error ? "placeholder-red-600" : ""
                  }`}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="UserEmail"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Phone*{" "}
              </label>

              <input
                type="text"
                placeholder={
                  error ? "Phone number is required" : "+91 1234567890"
                }
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={`mt-1 w-full rounded-md   sm:text-sm outline-none border border-gray-900 py-2.5 px-2 ${
                  error ? "placeholder-red-600 " : ""
                }`}
              />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1/2">
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm font-medium text-gray-900"
                >
                  {" "}
                  Budget*{" "}
                </label>

                <select
                  name="HeadlineAct"
                  // value={budget}
                  className="mt-1 w-full rounded-md   sm:text-sm outline-none border border-gray-900 py-2.5 px-2"
                >
                  <option value="">select budget</option>
                  <option value="JM">100$</option>
                  <option value="SRV">200$</option>
                  <option value="JH">300$</option>
                  <option value="BBK">400$</option>
                  <option value="AK">500$</option>
                </select>
              </div>

              <div className="w-1/2">
                <label
                  htmlFor="HeadlineAct"
                  className="block text-sm font-medium text-gray-900"
                >
                  {" "}
                  City*{" "}
                </label>

                <select
                  name="HeadlineAct"
                  // value={city}
                  className="mt-1 w-full rounded-md   sm:text-sm outline-none border border-gray-900 py-2.5 px-2"
                >
                  <option value="">Please select</option>
                  <option value="JM">Noida</option>
                  <option value="SRV">Faridabad</option>
                  <option value="JH">New Delhi</option>
                  <option value="BBK">Ghaziabad</option>
                  <option value="AK">Meerut</option>
                  <option value="BG">Old Delhi</option>
                  <option value="EC">other</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="OrderNotes"
                className="block text-sm font-medium text-gray-700"
              >
                {" "}
                Message{" "}
              </label>

              <textarea
                className="mt-1 w-full rounded-md   sm:text-sm outline-none border border-gray-900 py-2.5 px-2"
                rows="4"
                placeholder="Enter your message......."
              ></textarea>
            </div>

            <div>
              <button
                onClick={handleSubmit}
                className="inline-block w-full rounded border bg-red-400 px-12 py-3 text-sm font-medium text-white hover:bg-red-500 hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Finalcontact;
