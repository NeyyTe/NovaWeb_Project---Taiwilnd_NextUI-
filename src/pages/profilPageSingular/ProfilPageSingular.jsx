// import React from "react";
// import { useParams } from "react-router-dom";

// function ProfilPageSingular() {
//   const params = useParams();
//   return (
//     <>
//       <div className="h-screen bg-black">
//         <div className="container mx-auto  text-2xl">
//           <h1> {params.id}</h1>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProfilPageSingular;

import Parametres from "@/components/profilTabs/Parametres";
import React from "react";
import { useParams } from "react-router-dom";

function ProfilPageSingular() {
  const params = useParams();
  const id = params.id;

  // Définir le contenu de chaque onglet
  let content;
  switch (id) {
    case "Mes parametres":
      content = <Parametres />;
      break;
    case "Mes paramètres d'équipe":
      content = <Parametres />;
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

  // Récupérer le contenu correspondant à l'ID de l'onglet sélectionné

  return (
    <>
      <div className="h-screen bg-black">
        <div className="container mx-auto  text-2xl">
          <h1>{id}</h1>
          {content}
        </div>
      </div>
    </>
  );
}

export default ProfilPageSingular;
