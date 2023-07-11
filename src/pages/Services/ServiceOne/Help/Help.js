import React from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const Help = () => {
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
              <form action="#" method="POST" className="mx-auto max-w-xl">
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
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        name="phone-number"
                        id="phone-number"
                        autoComplete="phone-number"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                        name="message"
                        id="message"
                        rows={4}
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Let's talk
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
