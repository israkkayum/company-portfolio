import React from "react";

/// image import
import codetyping from "../../../images/Code-typing.png";
import go from "../../../images/go.png";
import flutter from "../../../images/flutter.png";
import aws from "../../../images/aws.svg";
import dotnet from "../../../images/dotnet.png";
import azure from "../../../images/azure.png";
import phython from "../../../images/phython.png";
import angular from "../../../images/angular.png";
import react from "../../../images/react.png";
import java from "../../../images/java.png";
import vuejs from "../../../images/vuejs.png";

const ExtraSectionThree = () => {
  return (
    <div className="bg-violet-50 py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        {/* /// header /// */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technology We Used
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            It has become a prerequisite for companies to develop custom
            software products to stay competitive. Vivasoft's technical
            expertise use the most popular technology for development
            outsourcing software.
          </p>
        </div>
        {/* //// code typing //// */}
        <div class="mt-20 p-6 max-w-xl mx-auto bg-white rounded-xl flex items-center space-x-4">
          <div class="shrink-0">
            <img class="h-32 w-32" src={codetyping} alt="ChitChat Logo" />
          </div>
          <div>
            <div class="text-xl font-medium text-blue-600">
              Using The most Update Technology
            </div>
            <p class="text-slate-500">
              Entrusting the new technology to the most advanced programmers
              will ensure a more robust and high-performing system.
            </p>
          </div>
        </div>
        {/* //// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-5 md:grid-cols-3 lg:gap-y-8">
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={go} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={flutter} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={aws} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center">
              <img src={dotnet} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={azure} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={phython} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={angular} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={react} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={java} />
            </div>
            <div class="rounded-lg px-6 py-8 text-center inline-flex items-center justify-center">
              <img src={vuejs} />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionThree;
