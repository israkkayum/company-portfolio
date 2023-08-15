import React from "react";

import agile from "../../../images/agile.jpg";
import novel from "../../../images/novel.jpg";
import justinian from "../../../images/justinian.jpg";
import innovative from "../../../images/innovative.jpg";

///// data
const features = [
  {
    name: "AGILE",
    description:
      "ELI5; it's simply breaking down a large-enough project into smaller pieces, right? It's what we do to ensure we prioritize what needs to be and no part has been overlooked.",
    icon: agile,
  },
  {
    name: "NOVEL",
    description:
      "...and this is the way we do it. With an experienced and dedicated team of developers, we bring together different approaches and up-to-date methodology to put forward the optimum original solution.",
    icon: novel,
  },
  {
    name: "JUSTINIAN",
    description:
      "Just as Justinian the Great was known for being a man of codes, we codify your ideas as if they are our own, how you want it; justifying your project.",
    icon: justinian,
  },
  {
    name: "INNOVATIVE",
    description:
      "We're not after rediscovering America; but we are well aware that innovation is the key to turning your ideas into successful products. Innovation requires a bit more than just listening to the customer, and here we make sure you're directly included in the process to bring about our signature in the end result : ANJI",
    icon: innovative,
  },
];

const WhatIsAnji = () => {
  return (
    <div className="bg-white-50 py-10 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What is an ANJI
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-2 md:max-w-none lg:gap-y-8 lg:gap-x-5">
            {features.map((feature) => (
              <div class="bg-gray-100 rounded-lg px-6 py-6 shadow-sm hover:shadow-lg hover:border-indigo-700 hover:border-2 hover:bg-white">
                <div>
                  <span class="inline-flex items-center justify-center shadow-sm -m-4">
                    <img
                      className="h-48 w-screen flex-none text-white rounded"
                      aria-hidden="true"
                      src={feature.icon}
                    />
                  </span>
                </div>
                <h3 class="text-neutral-700 mt-5 text-lg font-semibold tracking-tight py-2 font-mono subpixel-antialiased">
                  {feature.name}
                </h3>
                <p class="font-sans mt-2 text-base antialiased font-normal leading-relaxed line-clamp-6 hover:line-clamp-none">
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
