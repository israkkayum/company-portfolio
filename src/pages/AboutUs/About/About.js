import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import FuturePlan from "../FuturePlan/FuturePlan";
import Projects from "../Projects/Projects";
import WhatIsAnji from "../WhatIsAnji/WhatIsAnji";
import TeamSection from "../TeamSection/TeamSection";
import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";
import Newsletter from "../Newsletter/Newsletter";

const About = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <WhatIsAnji></WhatIsAnji>
      <FuturePlan></FuturePlan>
      <TeamSection></TeamSection>
      <WhyWorkWithUs></WhyWorkWithUs>
      <Newsletter></Newsletter>
      {/* <Projects></Projects> */}
    </div>
  );
};

export default About;
