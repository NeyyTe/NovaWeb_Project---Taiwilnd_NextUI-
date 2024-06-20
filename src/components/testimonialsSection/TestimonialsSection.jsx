/* eslint-disable react/no-unescaped-entities */
import oooscillate from "../../assets/oooscillate.svg";
import teamWorking from "../../assets/teamWorking.jpg";
import { Underline } from "../Icons";
import RevealAnimation from "../revealAnimation/RevealAnimation";
function TestimonialsSection({ children }) {
  return (
    <>
      <RevealAnimation>
        <div className="testidiv relative z-10">
          <img
            src={oooscillate}
            className=" absolute inset-0 testiimg w-full  -z-10 "
            alt=""
          />
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2  space-x-12  ">
            <div>
              <img src={teamWorking} className="rounded" alt="teamworking" />
            </div>

            <div className="">
              <h2 className="text-4xl relative">
                Témoignages
                <Underline
                  fill="#dd62ed"
                  size={530}
                  width="100%"
                  className="absolute top-[50px] left-0"
                />
              </h2>

              <div className="space-y-6 mt-[72px] *:leading-tight ">
                <p className="text-3xl">
                  " NovaWeb a transformé notre présence en ligne. Leur équipe
                  talentueuse a su capturer notre vision et la traduire en un
                  site web élégant et fonctionnel. "
                </p>

                <p className="text-3xl ">
                  Un grand merci à toute l'équipe pour leur professionnalisme et
                  leur dévouement !{" "}
                </p>
                <div className="pt-8 ">
                  <p className="text-xl"> Sophie</p>
                  <p className="text-[#efedfd99]">CEO de XYZ Company</p>
                </div>
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </RevealAnimation>
    </>
  );
}

export default TestimonialsSection;
