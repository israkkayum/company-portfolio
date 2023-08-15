import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";

const Position = () => {
  return (
    <div className="bg-white-100 py-5 sm:py-10">
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Open Position
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have challenging projects for gifted professionals. Let’s create
            great products together!
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 md:grid-cols-2 lg:gap-y-8">
            {/* /// col 1 /// */}
            <div class="bg-gray-100 rounded-lg px-6 py-10">
              <h3 class="text-neutral-700 text-xl font-bold tracking-tight py-2">
                Frontend developer
              </h3>
              <div className="group relative flex items-center rounded-lg">
                <MapPinIcon
                  className="h-8 w-8 text-gray-600 pr-2 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2 pr-10">
                  Poland
                </h3>
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2">
                  {/* Exp : 1-2 Years */}
                </h3>
              </div>
              <div className="pt-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-indigo-600"
                >
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* /// col 2 /// */}
            <div class="bg-gray-100 rounded-lg px-6 py-10">
              <h3 class="text-neutral-700 text-xl font-bold tracking-tight py-2">
                Backend developer
              </h3>
              <div className="group relative flex items-center rounded-lg">
                <MapPinIcon
                  className="h-8 w-8 text-gray-600 pr-2 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2 pr-10">
                  Poland
                </h3>
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2">
                  {/* Exp : 1-2 Years */}
                </h3>
              </div>
              <div className="pt-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-indigo-600"
                >
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* /// col 3 /// */}
            <div class="bg-gray-100 rounded-lg px-6 py-10">
              <h3 class="text-neutral-700 text-xl font-bold tracking-tight py-2">
                Backend developer
              </h3>
              <div className="group relative flex items-center rounded-lg">
                <MapPinIcon
                  className="h-8 w-8 text-gray-600 pr-2 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2 pr-10">
                  Poland
                </h3>
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2">
                  {/* Exp : 1-2 Years */}
                </h3>
              </div>
              <div className="pt-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-indigo-600"
                >
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* /// col 4 /// */}
            <div class="bg-gray-100 rounded-lg px-6 py-10">
              <h3 class="text-neutral-700 text-xl font-bold tracking-tight py-2">
                UI / UX Designers
              </h3>
              <div className="group relative flex items-center rounded-lg">
                <MapPinIcon
                  className="h-8 w-8 text-gray-600 pr-2 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2 pr-10">
                  Poland
                </h3>
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2">
                  {/* Exp : 1-2 Years */}
                </h3>
              </div>
              <div className="pt-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-indigo-600"
                >
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            {/* col 5 */}
            <div class="bg-gray-100 rounded-lg px-6 py-10">
              <h3 class="text-neutral-700 text-xl font-bold tracking-tight py-2">
                Product Manager
              </h3>
              <div className="group relative flex items-center rounded-lg">
                <MapPinIcon
                  className="h-8 w-8 text-gray-600 pr-2 group-hover:text-indigo-600"
                  aria-hidden="true"
                />
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2 pr-10">
                  Poland
                </h3>
                <h3 class="text-neutral-700 text-base font-medium tracking-tight py-2">
                  {/* Exp : 1-2 Years */}
                </h3>
              </div>
              <div className="pt-3">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-medium leading-7 text-indigo-600"
                >
                  Explore <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Position;
