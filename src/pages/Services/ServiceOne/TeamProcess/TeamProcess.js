import React from "react";

import step1 from "../../../../images/apply-step-1.png";
import step2 from "../../../../images/apply-step-2.png";
import step3 from "../../../../images/apply-step-3.png";
import step4 from "../../../../images/apply-step-4.png";

const TeamProcess = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Team Augmentation Process
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our team augmentation process is designed with flexibility so that
            businesses can easily find and deploy the exact skills needed for
            their project at any given time.
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 md:grid-cols-3 lg:gap-y-8">
            {/* /// col 1 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step1} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Talent Requirements
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Share your talent requirements and team size for the ultimate
                augmentation
              </h3>
            </div>
            {/* /// col 2 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step2} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Contract Signing
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Contract signing for your IT Staff Augmentation
              </h3>
            </div>
            {/* /// col 3 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step3} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Talent Allocation
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Provide ready-to-go teams as per your requirements
              </h3>
            </div>
            {/* /// col 4 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step4} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Project Continues
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Augmented team will seamlessly align with your in-house team to
                ensure on-time project delivery
              </h3>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TeamProcess;
