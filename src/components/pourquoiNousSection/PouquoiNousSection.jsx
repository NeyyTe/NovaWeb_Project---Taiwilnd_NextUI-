import React from "react";

function PouquoiNousSection() {
  return (
    <>
      <div className="  relative  pt-7 z-[1]">
        <div className=" container mx-auto rounded  bg-gray-800/50 p-8 ">
          <div className="flex ">
            <h2 className="text-3xl font-bold mb-4  pr-8 basis-1/4 ">
              Pourquoi nous choisir
            </h2>
            <div className="text-lg basis-3/4 space-y-4">
              <p>
                Nous sommes bien plus qu'une simple entreprise. Chez NovaWeb,
                nous sommes des créateurs passionnés, des innovateurs audacieux
                et des partenaires dévoués. Notre mission est simple :
                transformer les idées en réalité.{" "}
              </p>
              <p>
                Depuis NovaWeb, nous avons œuvré sans relâche pour offrir à nos
                clients des solutions exceptionnelles qui dépassent leurs
                attentes. Notre équipe hautement qualifiée combine expertise
                technique et créativité pour façonner des expériences uniques
                qui inspirent, captivent et engagent.
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

          <div className="w-full flex justify-center mt-8  p-8 divide-x *:px-20">
            <div className="flex flex-col  ">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                9+
              </p>
              <p className="">années d'expériences</p>
            </div>
            <div className=" ">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text ">
                25
              </p>
              <p>récompenses industrie</p>
            </div>
            <div className=" ">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                500
              </p>
              <p>projets complétés</p>
            </div>
            <div className="">
              <p className="text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                450+
              </p>
              <p> clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PouquoiNousSection;
