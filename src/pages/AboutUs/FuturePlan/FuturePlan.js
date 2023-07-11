import React from "react";

import ourMission from "../../../images/our-mission.png";
import ourVision from "../../../images/our-vision.png";

const FuturePlan = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Future Plan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As a leading software development company, Our company is committed
            to delivering exceptional software solutions that meet the unique
            needs of our clients. Our goal is to provide a world-class software
            solution for our clients.
          </p>
        </div>
        {/* ///// our mission //////// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                {/* ///////// message ///////// */}
                <div className="lg:max-w-lg">
                  <p className="text-xl font-semibold leading-7 text-indigo-600">
                    Our Mission
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    To xyz, there is no differentiation between customers, co
                    workers, and the people who run the business. We develop
                    innovative software to help businesses operate more
                    efficiently while maintaining the best possible relations
                    with our customers and coworkers base..
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    Our services are used by some of the country's largest
                    organizations. We have a team of experienced professionals
                    who are passionate about their work and aim to provide our
                    clients with the best possible service.
                  </p>
                </div>
              </div>
            </div>

            {/* /////// banner //////// */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[0rem] max-w-none rounded-xl sm:w-[36rem]"
                src={ourMission}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* ///// our vision ///// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-1 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-1 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                {/* ///////// message ///////// */}
                <div className="lg:max-w-lg">
                  <p className="text-xl font-semibold leading-7 text-indigo-600">
                    Our Vision
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    Our company mission is to inspire, engage, and promote a
                    friendly working space to establish the leading software
                    development company worldwide.
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    Our main goal is to make the company a prime choice for
                    high-tech support and other technical needs. Our company is
                    a software company that provides all sorts of technical
                    services, from simple bug fixes to complex business
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* /////// banner //////// */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-1 lg:row-start-2 lg:overflow-hidden">
              <img
                className="w-[0rem] max-w-none rounded-xl sm:w-[36rem]"
                src={ourVision}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePlan;
