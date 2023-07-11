import React from "react";

import projectOne from "../../../images/project-one.png";

const Projects = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Projects
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Here we share some products that we deliver for our valued
            customers. Scale fast and jump-start your projects with expert
            software development teams.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 lg:gap-y-8">
            {/* /// col -> 1  */}
            <div className=" px-10">
              <img
                src={projectOne}
                className="h-25 w-25 flex-none text-white"
                aria-hidden="true"
              />
              <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                34 Billion Requests
              </h3>
              <p class="text-gray-600 mt-2 text-md">
                Requests handled smoothly with iceberg ad server, everyday.
              </p>
            </div>
            {/* /// col -> 2  */}
            <div className=" px-10">
              <img
                src={projectOne}
                className="h-25 w-25 flex-none text-white"
                aria-hidden="true"
              />
              <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                $2M Daily Transactions
              </h3>
              <p class="text-gray-600 mt-2 text-md">
                200k registered users with 3 levels of agent hierarchy.
              </p>
            </div>
            {/* /// col -> 3  */}
            <div className=" px-10">
              <img
                src={projectOne}
                className="h-25 w-25 flex-none text-white"
                aria-hidden="true"
              />
              <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                300+ Companies
              </h3>
              <p class="text-gray-600 mt-2 text-md">
                Company using PiHR; a SaaS based HR Software developed by xyz.
              </p>
            </div>
            {/* /// col -> 4  */}
            <div className=" px-10">
              <img
                src={projectOne}
                className="h-25 w-25 flex-none text-white"
                aria-hidden="true"
              />
              <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2">
                2M Users
              </h3>
              <p class="text-gray-600 mt-2 text-md">
                Unique users in Flarie and their v2 can handle millions of
                requests/ second.
              </p>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Projects;
