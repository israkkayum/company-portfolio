import React from "react";

import step1 from "../../../images/apply-step-1.png";
import step2 from "../../../images/apply-step-2.png";
import step3 from "../../../images/apply-step-3.png";
import step4 from "../../../images/apply-step-4.png";

const HiringProcess = () => {
  return (
    <div className="bg-white-100 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How to Join Our Dynamic Team
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Become a part of the xyz family through our thorough 4-step hiring
            process.
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
                Apply
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Do you want to be a part of the xyz team? Go through our job
                openings and submit your application.
              </h3>
            </div>
            {/* /// col 2 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step2} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Assessment
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                If your skills and experience match our needs, we'll reach out
                to you for a skills assessment.
              </h3>
            </div>
            {/* /// col 3 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step3} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Interview
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                After a successful assessment, we'll invite you for a formal
                interview to discuss your qualifications and experience in more
                detail.
              </h3>
            </div>
            {/* /// col 4 /// */}
            <div class="text-center">
              <div className="inline-flex items-center justify-center">
                <img src={step4} />
              </div>
              <h3 class="text-neutral-700 mt-2 text-lg font-semibold tracking-tight">
                Welcoming You to Our Team
              </h3>
              <h3 class="mt-2 text-base tracking-tight">
                Based on your performance in the assessment and interview, we'll
                make a job offer and welcome you to our dedicated and passionate
                team.
              </h3>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default HiringProcess;
