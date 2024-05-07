import React from "react";
import { NavLink, Outlet } from "react-router-dom";

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
          <div className="flex flex-col gap-8 justify-items-center  ">
            {profiles.map((profile) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "";
                }}
                key={profile}
                to={`/profil/${profile}`}
              >
                <p className="">{profile}</p>
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
