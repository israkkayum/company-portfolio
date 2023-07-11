import React from "react";
import HeaderSection from "../HeaderSection/HeaderSection";
import TeamService from "../TeamService/TeamService";
import TeamProcess from "../TeamProcess/TeamProcess";
import Help from "../Help/Help";

const ServiceOne = () => {
  return (
    <div>
      <HeaderSection></HeaderSection>
      <TeamService></TeamService>
      <TeamProcess></TeamProcess>
      <Help></Help>
    </div>
  );
};

export default ServiceOne;
