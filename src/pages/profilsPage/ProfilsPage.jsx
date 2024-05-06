import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ProfilsPage() {
  const profiles = [
    "Mes parametres",
    "Mes paramètres d'équipe",
    "Analyses",
    "Systeme",
    "Configurations",
  ];

  return (
    <>
      <div className="flex gap-12">
        <div className="flex flex-col gap-12 *:text-4xl">
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
        <Outlet />
      </div>
    </>
  );
}

export default ProfilsPage;
