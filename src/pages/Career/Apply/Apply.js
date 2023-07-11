import React from "react";

const Apply = ({ scrollRef }) => {
  return (
    <div className="bg-white-100 py-10 sm:py-20" ref={scrollRef}>
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Send Us Your Resume
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24 bg-gray-100 p-10 rounded-md">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-0 lg:max-w-none lg:grid-cols-2 md:grid-cols-1 lg:gap-y-8">
            {/* /// col 1 /// */}
            <div>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  First Name
                </span>
                <input
                  type="text"
                  name="first-name"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Israk"
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Phone Number
                </span>
                <input
                  type="tel"
                  name="phone-number"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="0199XXXXXXXX"
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Positions
                </span>
              </label>
              <select
                id="position"
                name="position"
                autoComplete="position"
                className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option>Senior SQA Engineer</option>
                <option>Senior .NET Developer</option>
                <option>Senior Java Developer</option>
              </select>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Address
                </span>
                <input
                  type="text"
                  name="address"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Chittagong,....."
                />
              </label>
            </div>
            {/* /// col 2 /// */}
            <div>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Last Name
                </span>
                <input
                  type="text"
                  name="last-name"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Kayum"
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  class="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="israk.kayum@gmail.com"
                />
              </label>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Experience
                </span>
              </label>
              <select
                id="experience"
                name="experience"
                autoComplete="experience"
                className="mt-1 mb-5 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              >
                <option>3 years</option>
                <option>4 years</option>
                <option>4+ years</option>
              </select>
              <label class="block">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700 mb-1">
                  Resume
                </span>
                <span class="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  class="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-white file:text-violet-700 hover:file:bg-violet-100"
                />
              </label>
            </div>
          </dl>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
