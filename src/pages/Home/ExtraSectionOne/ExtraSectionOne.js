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
      "Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: CubeTransparentIcon,
  },
  {
    name: "Project Development",
    description:
      "Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: HomeModernIcon,
  },
  {
    name: "MVP Services",
    description:
      "Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: ChartBarIcon,
  },
  {
    name: "Offshore Development",
    description:
      "Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget. Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
    icon: GlobeAltIcon,
  },
];

const ExtraSectionOne = () => {
  return (
    <div className="bg-violet-50 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How We Works
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We follow agile methodology to deliver a high quality task to meet
            established deadline. A business can choose the software outsourcing
            business model that best matches their needs. We will help them
            augment their core competencies.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div class="bg-white rounded-lg px-6 py-8">
                <div>
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
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionOne;
