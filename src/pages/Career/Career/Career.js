import React, { useRef } from "react";
import HeaderSection from "../../Career/HeaderSection/HeaderSection";
import Position from "../Position/Position";
import Benefits from "../Benefits/Benefits";
import HiringProcess from "../HiringProcess/HiringProcess";
import Apply from "../Apply/Apply";

const Career = () => {
  const scrollRef = useRef(null);

  const scrollToComponent = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <HeaderSection scrollToComponent={scrollToComponent}></HeaderSection>
      <Position></Position>
      <Benefits></Benefits>
      <HiringProcess></HiringProcess>
      <Apply scrollRef={scrollRef}></Apply>
    </div>
  );
};

export default Career;
