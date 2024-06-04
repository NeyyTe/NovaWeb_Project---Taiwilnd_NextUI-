import React from "react";
import { Underline } from "../Icons";
import NumberTicker from "../magicUi/NumberTicker";
import "./pourquoinousSection.css";
import Spline from "@splinetool/react-spline";
function PouquoiNousSection() {
  return (
    <>
      <div className="  relative  pt-7 z-[1]">
        <div className=" container mx-auto rounded  bg-gray-800/50 p-8 ">
          <div className="flex p-4">
            <h2 className="text-3xl font-bold  basis-1/4 relative ">
              Pourquoi nous choisir
              <Underline
                fill="#dd62ed"
                size={1250}
                width="100%"
                className="absolute top-[50px] left-0"
              />
            </h2>

            <div className="text-xl basis-3/4 space-y-4 *:tracking-wide px-6">
              <p>
                Nous sommes bien plus qu'une simple entreprise. Chez NovaWeb,
                nous sommes des créateurs passionnés, des innovateurs audacieux
                et des partenaires dévoués. Notre mission est simple :
                transformer les idées en réalité.{" "}
              </p>
              <p>
                Nous avons œuvré sans relâche pour offrir à nos clients des
                solutions exceptionnelles qui dépassent leurs attentes. Notre
                équipe hautement qualifiée combine expertise technique et
                créativité pour façonner des expériences uniques qui inspirent,
                captivent et engagent.
              </p>{" "}
              <p>
                Que vous soyez une start-up ambitieuse ou une grande entreprise
                établie, nous sommes là pour vous accompagner à chaque étape de
                votre parcours vers le succès. Découvrez comment nous pouvons
                donner vie à votre vision et vous aider à atteindre de nouveaux
                sommets.
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-4 mt-8  p-8 divide-x  *:px-20 sm:grid-auto-rows gridPourquoiNous">
            <div className="">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text whitespace-pre-wrap">
                <NumberTicker
                  className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                  value={9}
                />
                +
              </p>
              <p className="">années d'expériences</p>
            </div>
            <div className=" ">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text ">
                <NumberTicker
                  className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                  value={25}
                />
              </p>
              <p>récompenses industrie</p>
            </div>
            <div className=" ">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                <NumberTicker
                  className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                  value={500}
                />
              </p>
              <p>projets complétés</p>
            </div>
            <div className="">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                <NumberTicker
                  className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                  value={450}
                />
                +
              </p>
              <p> clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[32rem] p-4">
        <Spline scene="https://prod.spline.design/nUfdKrDAVw9MfrsJ/scene.splinecode" />
      </div>
    </>
  );
}

export default PouquoiNousSection;
