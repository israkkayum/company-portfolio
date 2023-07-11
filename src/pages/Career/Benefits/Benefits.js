import React from "react";
import {
  BuildingOffice2Icon,
  LightBulbIcon,
  ChartBarIcon,
  UserGroupIcon,
  BarsArrowUpIcon,
  CakeIcon,
  BoltIcon,
  PuzzlePieceIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

///// data
const features = [
  {
    name: "Flexible Workspace",
    icon: BuildingOffice2Icon,
  },
  {
    name: "Knowledge Share",
    icon: LightBulbIcon,
  },
  {
    name: "Competitive Remuneration",
    icon: ChartBarIcon,
  },
  {
    name: "Meeting Room",
    icon: UserGroupIcon,
  },
  {
    name: "Growth Opportunity",
    icon: BarsArrowUpIcon,
  },
  {
    name: "Inspiring Culture",
    icon: CakeIcon,
  },
  {
    name: "Lunch, Snacks & Coffee",
    icon: BoltIcon,
  },
  {
    name: "Game Zone",
    icon: PuzzlePieceIcon,
  },
  {
    name: "Fitness Centre",
    icon: WrenchScrewdriverIcon,
  },
];

const Benefits = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Benefits and Opportunities
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            we believe in empowering our team to reach their full potential. We
            offer a rich array of benefits and opportunities for professional
            and personal growth.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 lg:gap-y-8">
            {features.map((feature) => (
              <div class="bg-gray-100 rounded-lg px-6 py-8 text-center">
                <div className="text-center">
                  <span class="inline-flex items-center justify-center p-2 rounded-md">
                    <feature.icon
                      className="h-12 w-12 flex-none text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 class="text-neutral-700 mt-3 text-lg font-semibold tracking-tight py-2">
                  {feature.name}
                </h3>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
