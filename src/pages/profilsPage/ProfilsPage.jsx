import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Divider } from "@nextui-org/divider";
function ProfilsPage() {
  const profiles = [
    "Mes paramètres",
    "Moyens de paiement",
    "Analyses",
    "Systeme",
    "Configurations",
  ];

  return (
    <>
      <div className="flex  ">
        <div className=" flex flex-col  bg-primary-50/70  *:text-xl w-1/5 justify-between p-8 py-12">
          <div className="flex flex-col  justify-items-center  ">
            {profiles.map((profile) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "";
                }}
                key={profile}
                to={`/profil/${profile}`}
              >
                <p className="">{profile}</p>
                <Divider className="my-8 bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10" />
              </NavLink>
            ))}
          </div>
          <div>
            {" "}
            <NavLink to="/">Retour à l'accueil</NavLink>
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}

export default ProfilsPage;
