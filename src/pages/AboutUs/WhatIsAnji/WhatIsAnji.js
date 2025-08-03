import React from "react";

import agile from "../../../images/agile.jpg";
import novel from "../../../images/novel.jpg";
import justinian from "../../../images/justinian.jpg";
import innovative from "../../../images/innovative.jpg";

///// data
const features = [
  {
    name: "AGILE METHODOLOGY",
    description:
      "We implement proven agile practices to ensure rapid delivery, continuous improvement, and adaptive project management. Our iterative approach guarantees that every requirement is met with precision.",
    icon: agile,
  },
  {
    name: "INNOVATIVE SOLUTIONS",
    description:
      "Our experienced team combines cutting-edge technologies with creative problem-solving to deliver unique, scalable solutions that give you a competitive edge in the market.",
    icon: novel,
  },
  {
    name: "QUALITY ASSURANCE",
    description:
      "We maintain the highest standards of code quality and system reliability. Every solution undergoes rigorous testing and quality assurance processes to ensure optimal performance.",
    icon: justinian,
  },
  {
    name: "CLIENT-CENTRIC APPROACH",
    description:
      "Your success is our priority. We work closely with clients throughout the development process, ensuring transparent communication, regular updates, and solutions that align perfectly with your business objectives.",
    icon: innovative,
  },
];

const WhatIsAnji = () => {
  return (
    <div className="bg-white-50 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            The Fatiksolution Advantage
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Our core values and methodologies that drive exceptional results
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 md:max-w-none lg:gap-y-8 lg:gap-x-5">
            {features.map((feature) => (
              <div className="bg-white rounded-xl px-6 py-8 shadow-lg hover:shadow-2xl hover:border-blue-500 hover:border-2 transition-all duration-300 transform hover:-translate-y-2">
                <div>
                  <span className="inline-flex items-center justify-center shadow-sm -m-4">
                    <img
                      className="h-48 w-full object-cover flex-none text-white rounded-lg"
                      aria-hidden="true"
                      src={feature.icon}
                    />
                  </span>
                </div>
                <h3 className="text-gray-900 mt-6 text-xl font-bold tracking-tight py-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default WhatIsAnji;
