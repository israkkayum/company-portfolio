import React from "react";

/// image import
import codetyping from "../../../images/Code-typing.png";
import go from "../../../images/go.png";
import flutter from "../../../images/flutter.png";
import aws from "../../../images/aws.png";
import dotnet from "../../../images/dotnet.png";
import azure from "../../../images/azure.png";
import phython from "../../../images/phython.png";
import angular from "../../../images/angular.png";
import react from "../../../images/react.png";
import java from "../../../images/java.png";
import vuejs from "../../../images/vuejs.png";

const ExtraSectionThree = () => {
  return (
    <div className="bg-white py-10 sm:py-20">
      <div className="container mx-auto px-4 pt-10">
        {/* /// header /// */}
        <div className="mx-auto max-w-5xl text-center">
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Cutting-Edge Technology Stack
          </p>
          <p className="mt-6 text-xl leading-8 text-gray-600">
            Fatiksolution leverages the latest technologies and frameworks to deliver robust, scalable solutions. Our expertise spans across modern development stacks, ensuring your project is built with industry-leading tools and best practices.
          </p>
        </div>
        {/* //// code typing //// */}
        <div className="mt-20 p-8 max-w-2xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl flex items-center space-x-6 shadow-lg">
          <div className="shrink-0">
            <img className="h-32 w-32" src={codetyping} alt="Technology Innovation" />
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-600">
              Innovation-Driven Development
            </div>
            <p className="text-gray-700 mt-2 text-lg">
              Our expert developers utilize cutting-edge technologies and proven methodologies to deliver robust, high-performance systems that exceed expectations.
            </p>
          </div>
        </div>
        {/* //// */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          {/* /// grid -> card /// */}
          <dl className="grid max-w-xl grid-cols-2 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-5 md:grid-cols-3 lg:gap-y-12">
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={go} alt="Go Programming Language" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={flutter} alt="Flutter Framework" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={aws} alt="Amazon Web Services" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={dotnet} alt=".NET Framework" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={azure} alt="Microsoft Azure" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={phython} alt="Python Programming" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={angular} alt="Angular Framework" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={react} alt="React Library" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={java} alt="Java Programming" className="max-h-16 max-w-full object-contain" />
            </div>
            <div className="bg-white rounded-xl px-6 py-8 text-center inline-flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <img src={vuejs} alt="Vue.js Framework" className="max-h-16 max-w-full object-contain" />
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default ExtraSectionThree;
