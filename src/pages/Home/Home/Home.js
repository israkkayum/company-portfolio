import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import ExtraSectionOne from "../ExtraSectionOne/ExtraSectionOne";
import ExtraSectionTwo from "../ExtraSectionTwo/ExtraSectionTwo";
import ExtraSectionThree from "../ExtraSectionThree/ExtraSectionThree";
import Testimonials from "../Testimonials/Testimonials";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <ExtraSectionOne></ExtraSectionOne>
      <ExtraSectionTwo></ExtraSectionTwo>
      <ExtraSectionThree></ExtraSectionThree>
      {/* <Testimonials></Testimonials> */}
      {/* <FAQ></FAQ> */}
    </div>
  );
};

export default Home;
