import React from "react";

import { CheckCircleIcon } from "@heroicons/react/24/outline";
import banner from "../../../images/why-work-with-us.jpg";

const WhyWorkWithUs = () => {
  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                {/* ///////// message ///////// */}
                <div className="lg:max-w-lg">
                  <h3 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Why work with us?
                  </h3>
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 pt-10">
                    <CheckCircleIcon
                      className="h-6 w-6 text-indigo-600"
                      aria-hidden="true"
                    />
                    <div className="flex-auto">Fully transparent workflow.</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">Extensive solutions offer.</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">Mobile App</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">Backend Development</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto"> Frontend Development</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">UI/UX Design</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto">Websites (end-to-end)</div>
                  </div>
                  {/* //// */}
                  <div className="group relative flex items-center gap-x-6 rounded-lg text-lg leading-6 mt-6 pl-10">
                    <div>
                      <CheckCircleIcon
                        className="h-6 w-6 text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-auto"> Create Corporate Identity</div>
                  </div>
                </div>
              </div>
            </div>

            {/* /////// image //////// */}
            <div className="lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden rounded-md">
              <img
                className="w-[0rem] max-w-none rounded-xl sm:w-[36rem]"
                src={banner}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;
