import React from "react";

import teamService from "../../../../images/team-service.png";

const FuturePlan = () => {
  return (
    <div className="py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            About Team Augmentation Services
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't let understaffing hold you back. Maximize your team's
            performance and reach your business goals with the best IT Staff
            Augmentation services from one of the most promising IT Staffing
            Companies. We provide the resources and support you need to keep
            your project on track and meet your deadlines.
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
                    The Agile Solution for Business Growth: How Team
                    Augmentation Can Help You Succeed
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    Team augmentation is a powerful outsourcing process that
                    enables businesses to expand their team with skilled tech
                    professionals on an on-demand basis. Whether you are a
                    software company looking to access tech talent from around
                    the world or a business seeking to quickly boost your team's
                    capabilities, team augmentation can help you achieve your
                    goals without the hassle of recruiting and onboarding
                    full-time employees.
                  </p>
                  <p className="mt-6 text-base leading-8 text-gray-700">
                    By tapping into specialized talent and expertise, team
                    augmentation provides businesses with a unique solution to
                    stay ahead of the competition and scale their business with
                    ease. This effective strategy allows companies to reach
                    their business goals on schedule and within budget while
                    maintaining the flexibility and agility to adapt to changing
                    business needs. With team augmentation, businesses can
                    confidently take on new projects, expand their services, and
                    deliver exceptional results to their clients.
                  </p>
                </div>
              </div>
            </div>

            {/* /////// banner //////// */}
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
              <img
                className="w-[0rem] max-w-none rounded-xl sm:w-[36rem]"
                src={teamService}
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
