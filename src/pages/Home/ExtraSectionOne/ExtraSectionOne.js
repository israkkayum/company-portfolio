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
    name: "Team Augmentation",
    description:
      "At ANJI, we've got your back in the fast-paced world of IT. Our Team Augmentation services bring top-notch professionals to your team, boosting your capabilities and flexibility for those critical projects.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Project Development",
    description:
      "Fuel Your Vision with Expert Project Development Transforming ideas into reality is our expertise at ANJI. Our Project Development services are designed to take your vision from concept to completion, ensuring a seamless and successful journey.",
    icon: HomeModernIcon,
  },
  {
    name: "MVP Services",
    description:
      "Fast-Track Your Idea to Market with MVP Services at ANJI, we specialize in turning your groundbreaking concepts into Minimum Viable Products (MVPs) that capture your vision and resonate with your audience.",
    icon: ChartBarIcon,
  },
  {
    name: "Offshore Development",
    description:
      "Unlock Global Talent with Offshore Development at ANJI, we offer Offshore Development services that transcend borders, connecting you with a world of exceptional tech talent to fuel your projects.",
    icon: GlobeAltIcon,
  },
];

const ExtraSectionOne = () => {
  return (
    <div className="bg-gray-100 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We follow the Agile methodology to deliver high-quality tasks that
            meet established deadlines. A business can choose the software
            outsourcing model that best matches its needs. We will assist them
            in enhancing their core competencies.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div class="bg-white rounded-lg px-6 py-8 shadow-sm hover:shadow-lg">
                <div>
                  <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md">
                    <feature.icon
                      className="h-6 w-6 flex-none text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                  {feature.name}
                </h3>
                <p class="text-gray-600 mt-2 text-bae font-sans antialiased font-normal leading-relaxed">
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
