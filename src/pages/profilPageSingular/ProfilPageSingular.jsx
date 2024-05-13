import Parametres from "@/components/profilTabs/Parametres";
import ServicesHistory from "../profilsPage/ServicesHistory";
import { useParams } from "react-router-dom";

function ProfilPageSingular() {
  const params = useParams();
  const id = params.id;

  // Définit le contenu de chaque onglet
  let content;
  switch (id) {
    case "Paramètres":
      content = <Parametres />;
      break;
    case "Services historique":
      content = <ServicesHistory />;
      break;
    case "Analyses":
      content = <Parametres />;
      break;
    case "Systeme":
      content = <Parametres />;
      break;
    case "Configurations":
      content = <Parametres />;
      break;
    default:
      content = <div>Onglet non trouvé</div>;
  }

  return (
    <>
      <div className="h-screen w-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2]">
        <div className=" ">{content}</div>
      </div>
    </>
  );
}

export default ProfilPageSingular;
