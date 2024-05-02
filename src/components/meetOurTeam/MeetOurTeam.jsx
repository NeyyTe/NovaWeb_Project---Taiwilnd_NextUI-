import React from "react";
import teamWorking from "../../assets/teamWorking.jpg";
import "./meetOurTeam.css";
export default function MeetOurTeam() {
  return (
    <>
      <div className=" container mx-auto flex mt-24  ">
        <div className="">
          <h1 className="text-4xl basis 1/4">Rencontrez notre équipe</h1>
        </div>
        <div className="team basis-3/4">
          <img src={teamWorking} alt="" />
          <img src={teamWorking} alt="" />
          <img src={teamWorking} alt="" />
        </div>
      </div>
    </>
  );
}
