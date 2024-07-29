import { Button } from "@nextui-org/react";

function ContactSection() {
  return (
    <>
      <div className="container w-11/12 mx-auto bg-gradient-to-br from-sky-800 via-fuchsia-600 to-fuchsia-300 rounded-lg md:rounded-full mt-16 ">
        <div className="grid grid-cols-1 place-items-center p-8 *:space-y-8 text-center ">
          <div className=" ">
            <h1 className="text-4xl font-bold text-center">
              Rentrons en contact
            </h1>
            <div>
              <p className="text-lg"> Prêt à commencer ?</p>
              <p className="text-lg">
                Contactez nous des maintenant pour discuter de votre projet and
                apprendre de quel manière nous pouvons vous aider à atteindre
                vos objectifs.
              </p>
            </div>
            <div className="flex">
              <Button
                className="text-lg mx-auto tracking-wide bg-white text-black "
                color="secondary"
              >
                <b>Nous contacter </b>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactSection;
