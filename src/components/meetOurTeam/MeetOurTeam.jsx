//Avatars
import Avatar1 from "../../assets/Avatars/Avatar 1.svg";
import Avatar2 from "../../assets/Avatars/Avatar 2.svg";
import Avatar3 from "../../assets/Avatars/Avatar 3.svg";
import Avatar4 from "../../assets/Avatars/Avatar 4.svg";
import Avatar5 from "../../assets/Avatars/Avatar 5.svg";
import Avatar6 from "../../assets/Avatars/Avatar 6.svg";

import { Underline } from "../Icons";

import "./meetOurTeam.css";
export default function MeetOurTeam() {
  return (
    <>
      <div className="  grid grid-cols-1 mt-12  justify-items-center ">
        <div className="relative">
          <h2 className="text-4xl  ">
            Notre équipe
            <Underline
              fill="#dd62ed"
              size={1420}
              width="100%"
              className="absolute top-[50px] left-0"
            />
          </h2>
        </div>

        <div className="team mx-auto max-w-5xl mt-12 grid grid-cols-1 gap-y-6 gap-2 sm:grid-cols-2 xl:grid-cols-3 ">
          <div className=" ">
            <img
              className=" w-[350px] rounded-xl   "
              src={Avatar4}
              alt="Wade Warren,Fondateur & CEO"
            />

            <div className="pt-2">
              <p className="text-lg font-bold">Wade Warren</p>
              <p className="text-primary">Fondateur & CEO</p>
            </div>
          </div>
          <div className=" ">
            <img
              className="w-[350px] rounded-xl"
              src={Avatar3}
              alt="Floyd Miles,Lead Développeur Web"
            />
            <div className="pt-2">
              <p className="text-lg font-bold">Floyd Miles</p>
              <p className="text-primary">Lead Développeur Web</p>
            </div>
          </div>{" "}
          <div className=" ">
            <img
              className=" w-[350px] rounded-xl"
              src={Avatar2}
              alt="Jane Cooper,Marketing Manager"
            />
            <div className="pt-2">
              <p className="text-lg font-bold">Jane Cooper</p>
              <p className="text-primary">Marketing Manager</p>
            </div>
          </div>{" "}
          <div className=" ">
            <img
              className="w-[350px] rounded-xl"
              src={Avatar1}
              alt="Alex Johnson,Senior UI Designer"
            />
            <div className="pt-2">
              <p className="text-lg font-bold">Alex Johnson</p>
              <p className="text-primary">Senior UI Designer</p>
            </div>
          </div>{" "}
          <div className=" ">
            <img
              className="w-[350px] rounded-xl"
              src={Avatar5}
              alt="Devon Lane,Senior Graphic Designer"
            />
            <div className="pt-2">
              <p className="text-lg font-bold">Devon Lane</p>
              <p className="text-primary">Senior Designer Graphique</p>
            </div>
          </div>
          <div className=" ">
            <img
              className="w-[350px] rounded-xl"
              src={Avatar6}
              alt="Cameron Williamson,Spécialiste Marketing Numérique"
            />

            <div className="pt-2">
              <p className="text-lg font-bold">Cameron Williamson</p>
              <p className="text-primary">Spécialiste Marketing Numérique</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
