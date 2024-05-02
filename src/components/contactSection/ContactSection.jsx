import React from "react";
import { Button } from "@nextui-org/react";
function ContactSection() {
  return (
    <>
      <div className="container mx-auto bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full mt-16 ">
        <div className="grid grid-cols-1 place-items-center p-8">
          <div className="w-[70ch] space-y-8">
            <h1 className="text-4xl font-bold text-center">
              Rentrons en contact
            </h1>
            <p className="text-lg">
              Prêt à commencer ? Contactez nous des maintenant pour discuter de
              votre projet and apprendre de quel manière nous pouvons vous aider
              à atteindre vos objectifs.
            </p>
            <div className="flex">
              <Button
                className="text-lg mx-auto tracking-wide content-center"
                color="secondary"
              >
                <b>Contactez</b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
