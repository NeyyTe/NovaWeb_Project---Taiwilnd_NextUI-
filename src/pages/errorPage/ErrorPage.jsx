import React from "react";
import blackhole from "../../assets/blackhole.webm";
import { Button, Link } from "@nextui-org/react";
import { ChevronDown } from "@/components/Icons";

export default function ErrorPage() {
  return (
    <>
      <div className="grid   gap-8 *:col-span-full *:row-span-full">
        <div className="p-6 text-center z-10 space-y-6">
          <h1 className="text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-500">
            Oops ! Erreur 404
          </h1>
          <p className="text-lg">
            Tu t'es perdu dans l'espace temps, reviens parmi-nous !{" "}
          </p>

          <ChevronDown className="mx-auto" fill="currentColor" />

          <Link href="/">
            <Button className="text-lg tracking-wide " color="primary">
              <b>Retour à l'accueil </b>
            </Button>
          </Link>
        </div>

        <video
          src={blackhole}
          autoPlay
          playsInline
          muted
          loop
          className="w-full h-screen object-cover  "
        ></video>
      </div>
    </>
  );
}
