import React, { useState } from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Help = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    details: "",
  });

  const [success, setSuccess] = useState(true);
  const [messageActive, setMessageActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // normal data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // form submit
  const handleSubmit = (event) => {
    setIsLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phoneNumber", formData.phoneNumber);
    formDataToSend.append("details", formData.details);

    fetch("http://localhost:6500/send-email-project-details", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccess("true");
        setIsLoading(false);
        setMessageActive(true);
      })
      .catch((error) => {
        console.error(error);
        setSuccess("false");
        setIsLoading(false);
        setMessageActive(true);
      });

    // event.target.reset();
    event.preventDefault();
  };

  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        {/* ///// our mission //////// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                {/* ///////// message ///////// */}
                <div className="lg:max-w-lg">
                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    How can we help you
                  </h3>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    Our staff augmentation services are flexible, customized,
                    and fully tailor-made for your business requirements.
                  </p>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 pt-10">
                    <CheckCircleIcon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="flex-auto">
                      Provide dedicated on demand talented team.
                    </div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      Skilled team use trusted technology to generate
                      significant business result.
                    </div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      Maintain high-security and transparency to secure data
                      effectively.
                    </div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">
                      Scale your team with your changing requirements and make
                      it cost efficient model.
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <NavLink
                    to="/contact"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-1xl font-semibold leading-7 text-indigo-600 hover:bg-gray-50"
                  >
                    Contact US <span aria-hidden="true">&rarr;</span>
                  </NavLink>
                </div>
              </div>
            </div>

            {/* /////// form //////// */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden bg-gray-100 rounded-md">
              <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        autoComplete="firstName"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        autoComplete="lastName"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Business Email
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="tel"
                        name="phoneNumber"
                        id="phoneNumber"
                        autoComplete="phoneNumber"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Project Details
                    </label>
                    <div className="mt-2.5">
                      <textarea
                        name="details"
                        id="details"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={formData.details}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  {isLoading ? (
                    <button
                      disabled
                      type="button"
                      class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Let's talk
                    </button>
                  )}
                </div>
              </form>
              {/* // successful message //  */}

              {messageActive && (
                <div
                  class={
                    success
                      ? "flex items-center justify-center p-4 text-sm font-bold text-green-800 rounded-lg bg-green-50 mt-10 -mb-5 mx-auto max-w-xl"
                      : "flex items-center justify-center p-4 text-sm font-bold text-red-800 rounded-lg bg-red-50 mt-10 -mb-5 mx-auto max-w-xl"
                  }
                  role="alert"
                >
                  <svg
                    class="flex-shrink-0 inline w-4 h-4 mr-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span class="sr-only">Info</span>
                  {success ? (
                    <div>Your Resume Successful Submitted !!</div>
                  ) : (
                    <div>Sorry! Your Resume Submission Failure !!</div>
                  )}
                </div>
              )}

              {/* /// */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
