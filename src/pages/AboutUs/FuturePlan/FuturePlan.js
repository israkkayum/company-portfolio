import React from "react";

import ourMission from "../../../images/our-mission.png";
import ourVision from "../../../images/our-vision.png";
import { Link, NavLink } from "react-router-dom";

const FuturePlan = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Vision & Mission
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Fatiksolution is committed to delivering exceptional software solutions that drive digital transformation and business growth. We envision a future where technology seamlessly integrates with business objectives.
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
                  <p className="text-2xl font-semibold leading-7 text-blue-600">
                    Our Mission
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    At Fatiksolution, we empower businesses through innovative technology solutions. Every project presents unique challenges, and we ensure our clients gain a competitive advantage through strategic implementation and cutting-edge development practices.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    We develop and deliver IT systems that provide users with intuitive, seamless experiences. Our philosophy centers on making technology adoption effortless and enjoyable, not burdensome.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    Whether you're starting from concept or scaling existing solutions, Fatiksolution provides comprehensive support throughout your digital journey.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    We specialize in end-to-end development solutions, covering every stage of the software development lifecycle. Our comprehensive approach ensures efficient project management, seamless integration, and delivery of high-quality, scalable software solutions.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    Go{" "}
                    <Link
                      className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      to="/contact"
                      reloadDocument
                    >
                      here{" "}
                    </Link>
                    to discuss your project requirements and receive a comprehensive proposal within 24 hours.
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
                  <p className="text-2xl font-semibold leading-7 text-blue-600">
                    Our Vision
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    To become the leading technology partner that transforms businesses through innovative software solutions, playing a pivotal role in shaping the digital future across industries.
                  </p>
                  <p className="mt-6 text-lg leading-8 text-gray-700">
                    We envision a world where businesses leverage technology not just as a tool, but as a strategic advantage that drives growth, efficiency, and innovation.
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
