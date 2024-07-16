import {
  GroupOfUsers,
  HtmlTag,
  Lock,
  Performance,
  SupportIcon,
  UiuxIcon,
  Underline,
} from "@/components/Icons";
import { HoverEffect } from "../ui/card-hover-effect/cardHover";
import "./GridServicesSection";
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
      <div>
        <div className="container mx-auto px-6">
          <h2 className="px-4 text-4xl relative">
            Nos Services
            <Underline
              fill="#dd62ed"
              size={220}
              width="100%"
              className="absolute top-[45px] left-2"
            />
          </h2>
        </div>

        <div className="mt-4 p-6">
          <HoverEffect items={projects} />
        </div>
      </div>

      <hr className=" max-w-3xl mx-auto bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10 h-1 border-none rounded my-8" />
    </>
  );
}
