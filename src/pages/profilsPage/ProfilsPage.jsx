// import { Avatar } from "@nextui-org/avatar";
// import { Divider } from "@nextui-org/divider";
// import { NavLink, Outlet } from "react-router-dom";

import { SidebarDemo } from "@/components/sidebar/Sidebar";

function ProfilsPage() {
  // const profiles = [
  //   "Paramètres",
  //   "Services historique",
  //   "Analyses",
  //   "Systeme",
  //   "Configurations",
  // ];

  return (
    <>
      <div className="flex">
        {/* <div className=" flex flex-col bg-primary-50/70  *:text-xl w-1/5 p-8 py-12">
          <div className="flex gap-8">
            <Avatar
              color="danger"
              isBordered
              size="lg"
              className=" mb-12"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
            <div>
              <p>Zoey</p>
              <p className="text-gray-400">zoey@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col  justify-items-center  ">
            {profiles.map((profile) => (
              <NavLink
                className={({ isActive }) => {
                  return isActive && "text-primary";
                }}
                key={profile}
                to={`/profil/${profile}`}
              >
                <p className="">{profile}</p>
                <Divider className="my-8 bg-gradient-to-r from-purple-500/10 via-fuchsia-500 to-violet-800/10" />
              </NavLink>
            ))}
          </div>
          <div className=" flex items-end">
            {" "}
            <NavLink to="/">Retour à l&apos;accueil</NavLink>
          </div>
        </div> */}
        <SidebarDemo />
        {/* <Outlet /> */}
      </div>
    </>
  );
}

export default ProfilsPage;
