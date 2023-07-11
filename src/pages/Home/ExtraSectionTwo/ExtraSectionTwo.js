import React from "react";
import {
  ComputerDesktopIcon,
  CloudIcon,
  CogIcon,
  ServerStackIcon,
  CircleStackIcon,
  WrenchScrewdriverIcon,
  DevicePhoneMobileIcon,
  WindowIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";

///// data
const features = [
  {
    name: "Scalable System Design",
    description:
      "High-performing product giving you a tailored solution for your business.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Cloud Services",
    description:
      "Cloud outsourcing provider managed cloud services for businesses..",
    icon: CloudIcon,
  },
  {
    name: "DevOps Services",
    description:
      "DevOps consulting services based on modern tools & technologies.",
    icon: CogIcon,
  },
  {
    name: "Big Data & Data Science",
    description: "Drive business transformation through data analytics",
    icon: ServerStackIcon,
  },
  {
    name: "Database Management",
    description:
      "DBMS establish the relationship between datasets, and how users interact with them.",
    icon: CircleStackIcon,
  },
  {
    name: "Embedded System Design",
    description:
      "Provide high-quality embedded system design and embedded architecture design services.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Mobile Application Dev",
    description: "We build your apps for all the devices out there.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "UX Design",
    description:
      "UX design ensures the quality of user journey of your digital products and services.",
    icon: WindowIcon,
  },
  {
    name: "SQA",
    description:
      "Software test lifecycle services; from test planning to execution and everything in between.",
    icon: ScaleIcon,
  },
];

const ExtraSectionTwo = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        {/* //// header /// */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Most Effective Software Development Outsourcing Service
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As your software development partner, we are committed to helping
            you establish long-term business relationships. We offer a variety
            of outsourcing services that can be tailored to your specific needs.
            Our team of experts has extensive experience in all aspects of
            software development, from enterprise applications to mobile apps
            and everything in between.
          </p>
        </div>

        {/* ///// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}

          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div class="bg-violet-50 rounded-lg px-6 py-8 text-center">
                <div className="text-center">
                  <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <feature.icon
                      className="h-6 w-6 flex-none text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                  {feature.name}
                </h3>
                <p class="text-gray-600 mt-2 text-md">{feature.description}</p>
              </div>
            ))}
          </dl>

          {/* //// */}
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionTwo;
