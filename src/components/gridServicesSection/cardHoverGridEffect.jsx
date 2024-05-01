import React from "react";
import oooscillate from "../../assets/oooscillate.svg";

import bbblurry1 from "../../assets/bbblurry1.svg";
import { HoverEffect } from "../ui/card-hover-effect/cardHover";
import {
  HtmlTag,
  UiuxIcon,
  Performance,
  Lock,
  GroupOfUsers,
  SupportIcon,
} from "@/components/Icons";

export default function CardHoverGridEffect() {
  const projects = [
    {
      title: "Conception Web Réactive",
      description:
        "Nous excellons dans la création de sites web réactifs, offrant une expérience utilisateur fluide et cohérente sur tous les appareils, renforçant ainsi la présence en ligne de votre entreprise.",
      link: "https://stripe.com",
      icons: <HtmlTag />,
    },
    {
      title: "Design Élégant ",
      description:
        "Fiers de notre expertise en design web, nous concevons des interfaces élégantes et modernes qui reflètent l'image de marque de nos clients avec finesse.",
      link: "https://netflix.com",
      icons: <UiuxIcon />,
    },
    {
      title: "Performance Optimisée",
      description:
        "  Notre équipe s'engage à garantir des performances optimales pour chaque site web que nous créons, assurant ainsi une navigation rapide et réactive.",
      link: "https://google.com",
      icons: <Performance />,
    },
    {
      title: "UX Intuitive et Conviviale",
      description:
        " Chez NovaWeb, nous accordons une importance primordiale à l'expérience utilisateur, en concevant des interfaces intuitives et conviviales qui favorisent l'engagement des utilisateurs.",
      link: "https://meta.com",
      icons: <GroupOfUsers />,
    },
    {
      title: " Sécurité Renforcée",
      description:
        "  La sécurité des données est notre priorité. Nous mettons en place des mesures de sécurité robustes pour protéger les informations sensibles de nos clients.",
      link: "https://amazon.com",
      icons: <Lock />,
    },
    {
      title: " Support Continu",
      description:
        " Nous offrons un soutien technique continu et personnalisé pour garantir le bon fonctionnement de votre site web.",
      link: "https://microsoft.com",
      icons: <SupportIcon />,
    },
  ];

  return (
    <>
      <div className="  ">
        <div className="container mx-auto">
          <h1 className="p-2 text-4xl ">Nos Services</h1>
        </div>
        <HoverEffect items={projects} />
      </div>
      <hr className=" max-w-3xl mx-auto bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 h-1 border-none rounded my-8" />
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
              <p>années d'expériences</p>
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
