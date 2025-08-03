import React from "react";
import {
  ChartBarIcon,
  CubeTransparentIcon,
  GlobeAltIcon,
  HomeModernIcon,
} from "@heroicons/react/24/outline";

///// data
const features = [
  {
    name: "Expert Team Augmentation",
    description:
      "Scale your development capacity with our skilled professionals who seamlessly integrate with your existing team. Our experts bring specialized knowledge and proven experience to accelerate your project delivery.",
    icon: CubeTransparentIcon,
  },
  {
    name: "End-to-End Development",
    description:
      "Transform your vision into reality with our comprehensive project development services. From initial concept to final deployment, we ensure seamless execution and successful delivery of high-quality software solutions.",
    icon: HomeModernIcon,
  },
  {
    name: "MVP Development",
    description:
      "Accelerate your time-to-market with our MVP development services. We help you validate your business concept quickly and cost-effectively, building scalable foundations for future growth.",
    icon: ChartBarIcon,
  },
  {
    name: "Global Development Solutions",
    description:
      "Leverage our global expertise and cost-effective development solutions. Our distributed teams deliver world-class software while providing significant cost savings and access to specialized talent pools.",
    icon: GlobeAltIcon,
  },
];

const ExtraSectionOne = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Our Service Excellence
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Fatiksolution delivers comprehensive software solutions through proven methodologies and cutting-edge technologies. We help businesses choose the optimal development approach that aligns with their strategic objectives and enhances their competitive advantage.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div className="bg-white rounded-xl px-6 py-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div>
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

export default ExtraSectionOne;
