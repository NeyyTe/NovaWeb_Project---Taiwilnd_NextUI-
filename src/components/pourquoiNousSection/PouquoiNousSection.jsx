/* eslint-disable react/no-unescaped-entities */
import Spline from "@splinetool/react-spline";
import { Underline } from "../Icons";
import NumberTicker from "../magicUi/NumberTicker";
import RevealAnimation from "../revealAnimation/RevealAnimation";
import "./pourquoinousSection.css";

function PouquoiNousSection() {
  return (
    <>
      <RevealAnimation>
        <div className="  relative  p-8 z-[1]">
          <div className=" container mx-auto rounded  bg-gray-800/50 p-8 ">
            <div className="flex flex-col p-4">
              <div className="">
                <h2 className="text-3xl font-bold   relative ">
                  Pourquoi nous choisir
                  <Underline
                    fill="#dd62ed"
                    size={300}
                    width="100%"
                    className="absolute top-[50px] left-0"
                  />
                </h2>
              </div>

              <div className="text-xl basis-3/4 space-y-4 *:tracking-wide px-6 mt-16 text-gray-300">
                <p>
                  Nous sommes bien plus qu'une simple entreprise. Chez NovaWeb,
                  nous sommes des créateurs passionnés, des innovateurs
                  audacieux et des partenaires dévoués. Notre mission est simple
                  :
                  <strong className="text-primary-foreground">
                    {" "}
                    transformer vos idées en réalité
                  </strong>
                  .{" "}
                </p>
                <p>
                  Notre équipe hautement qualifiée combine{" "}
                  <strong className="text-primary-foreground">
                    expertise technique
                  </strong>{" "}
                  et{" "}
                  <strong className="text-primary-foreground">
                    créativité
                  </strong>{" "}
                  pour façonner des expériences uniques qui inspirent, captivent
                  et engagent.
                </p>{" "}
                <p>
                  Que vous soyez une start-up ambitieuse ou une grande
                  entreprise établie, nous sommes là pour vous accompagner à
                  chaque étape de votre parcours vers{" "}
                  <strong className="text-primary-foreground">
                    votre succès
                  </strong>
                  .
                </p>
                <p>
                  {" "}
                  Découvrez comment nous pouvons donner vie à{" "}
                  <strong className="text-primary-foreground">
                    votre vision
                  </strong>{" "}
                  et vous aider à{" "}
                  <strong className="text-primary-foreground">
                    atteindre de nouveaux sommets
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="w-full grid grid-cols-2 gap-2 justify-items-center lg:grid-cols-4 lg:divide-x lg:*:px-12 xl:*:px-16 2xl:*:px-24 2xl:divide-x *:min-w-max text-center mt-8">
              <div className="">
                <p className=" text-5xl 2xl:text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text whitespace-pre-wrap">
                  <NumberTicker
                    className="font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                    value={9}
                  />
                  +
                </p>

                <p className="">années d'expériences</p>
              </div>
              <div className="">
                <p className=" text-5xl 2xl:text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                  <NumberTicker
                    className=" font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                    value={25}
                  />
                </p>
                <p> récompenses industrie</p>
              </div>
              <div className=" ">
                <p className="text-5xl 2xl:text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                  <NumberTicker
                    className=" font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                    value={500}
                  />
                </p>
                <p>projets complétés</p>
              </div>
              <div className="">
                <p className=" text-5xl 2xl:text-7xl font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text">
                  <NumberTicker
                    className=" font-bold bg-gradient-to-br from-fuchsia-100 via-fuchsia-600 to-sky-800 inline-block text-transparent bg-clip-text"
                    value={450}
                  />
                  +
                </p>
                <p> clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[28rem] p-4">
          <Spline scene="https://prod.spline.design/nUfdKrDAVw9MfrsJ/scene.splinecode" />
        </div>
      </RevealAnimation>
    </>
  );
}

export default PouquoiNousSection;
