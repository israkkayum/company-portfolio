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
    name: "Enterprise Architecture",
    description:
      "Design and implement scalable, high-performance systems that grow with your business needs and handle enterprise-level demands.",
    icon: ComputerDesktopIcon,
  },
  {
    name: "Cloud Services",
    description:
      "Comprehensive cloud solutions including migration, optimization, and managed services across AWS, Azure, and Google Cloud platforms.",
    icon: CloudIcon,
  },
  {
    name: "DevOps Services",
    description:
      "Streamline your development lifecycle with modern CI/CD pipelines, automated testing, and infrastructure as code practices.",
    icon: CogIcon,
  },
  {
    name: "Data Analytics & AI",
    description: "Unlock business insights through advanced data analytics, machine learning, and artificial intelligence solutions.",
    icon: ServerStackIcon,
  },
  {
    name: "Database Management",
    description:
      "Optimize data storage and retrieval with expert database design, performance tuning, and management services.",
    icon: CircleStackIcon,
  },
  {
    name: "IoT & Embedded Systems",
    description:
      "Develop connected devices and embedded solutions that bridge the physical and digital worlds.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Mobile Development",
    description: "Create engaging mobile experiences across iOS and Android platforms with native and cross-platform solutions.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "UI/UX Design",
    description:
      "Design intuitive, user-centered interfaces that enhance user experience and drive engagement across all digital touchpoints.",
    icon: WindowIcon,
  },
  {
    name: "Quality Assurance",
    description:
      "Ensure software reliability through comprehensive testing strategies, automated testing frameworks, and quality assurance processes.",
    icon: ScaleIcon,
  },
];

const ExtraSectionTwo = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        {/* //// header /// */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Comprehensive Technology Solutions
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            As your trusted technology partner, Fatiksolution is committed to building long-term relationships that drive your business success. Our comprehensive suite of services covers every aspect of modern software development, from enterprise solutions to cutting-edge mobile applications.
          </p>
        </div>

        {/* ///// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}

          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div className="bg-white rounded-xl px-6 py-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <span className="inline-flex items-center justify-center p-3 bg-blue-600 rounded-lg shadow-lg">
                    <feature.icon
                      className="h-7 w-7 flex-none text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 className="text-gray-900 mt-6 text-xl font-bold tracking-tight py-2">
                  {feature.name}
                </h3>
                <p className="text-gray-600 mt-3 text-base leading-relaxed">{feature.description}</p>
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
