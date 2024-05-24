import { Button } from "@nextui-org/react";
import Header from "../header/Header.jsx";
import Spotlight from "../ui/spotlight/Spotlight.jsx";
import Spline from "@splinetool/react-spline";

// import TypewriterEffectSmoothDemo from "./utils/TypewriterEffectTest.jsx";
import { Avatar, AvatarGroup } from "@nextui-org/react";
function HeroSection({ children }) {
  return (
    <>
      <div className=" w-full h-full dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-white/[0.2] -z-20">
        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_45%,black)]"></div> */}

        <Header />
        <Spotlight
          className="-top-40 left-0 md:left-90 md:-top-40"
          fill="white"
        />

        <section className="  w-full  grid grid-cols-2 w-full mx-auto gap-4 items-center">
          <div className=" h-[80vh]   ">
            <Spline scene="https://prod.spline.design/iv6vLiWEDQbUOuwu/scene.splinecode" />
          </div>

          <div className="  space-y-8 w-8/12 ">
            <h1 className="text-8xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ">
              Où vos idées deviennent une{" "}
              <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-fuchsia-700 inline-block text-transparent bg-clip-text">
                réalité
              </span>
            </h1>
            <p className="font-supremeReg  text-lg tracking-wide">
              Nous sommes une équipe passionnée de designers et de développeurs
              web, dédiée à créer{" "}
              <b className="text-foreground">
                des sites web uniques et impactants
              </b>{" "}
              pour nos clients.
            </p>

            <Button className="text-lg tracking-wide " color="primary">
              <b>Acheter </b>
            </Button>

            <div className="flex items-center">
              <AvatarGroup
                className="justify-start "
                max={4}
                total={272}
                isBordered
              >
                <Avatar
                  color="primary"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                />
                <Avatar
                  color="warning"
                  src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
                />
                <Avatar
                  color="success"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
                <Avatar
                  color="danger"
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                />
              </AvatarGroup>
              <ul className="ml-12 list-disc">
                <li>Plus de 450 clients satisfaits</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="">{children}</div>
      </div>
    </>
  );
}

export default HeroSection;
