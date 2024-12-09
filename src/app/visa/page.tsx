import VisaForm from "@/components/ui/visaForm";
import { fetchVisa } from "@/utils/getData";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

export default async function page() {
  const visa = await fetchVisa();
  return (
    <div>
      <div className="w-full mb-16 ">
        <Card className="h-[400px] rounded-none">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={"/visa.jpg"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
          </div>
          <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
            <div className="max-w-[60ch] mx-auto flex flex-col items-center">
              <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white ">
                {" "}
                DEMANDE DE VISA
              </h1>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex">
        <div className="w-[90%] md:w-auto   mx-auto   self-center lg:self-start  mb-16 flex flex-col items-start ">
          <div className="mb-12  lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Comment obtenir un visa?
            </h3>
            <p className="max-w-[70ch] text-lg text-gray-700 font-light">
              Obtenir un visa pour voyager à l&apos;étranger peut parfois
              sembler complexe, mais avec les bonnes étapes, cela devient simple
              et rapide. Voici les étapes principales :
              <span className="block mt-2"></span>{" "}
              <span className="font-semibold text-gray-700">
                Choisir la destination
              </span>{" "}
              : Vérifiez si le pays que vous souhaitez visiter exige un visa
              pour les citoyens tunisiens.
              <span className="block mt-2"></span>{" "}
              <span className="font-semibold text-gray-700">
                Préparer les documents nécessaires
              </span>{" "}
              : Un passeport valide, des photos d&apos;identité, un formulaire
              de demande rempli, des preuves de ressources financières,
              d’hébergement, et d’assurance voyage.
              <span className="block mt-2"></span>{" "}
              <span className="font-semibold text-gray-700">
                Déposer la demande
              </span>{" "}
              : Rendez-vous au consulat ou à l&apos;ambassade pour soumettre
              votre dossier et payer les frais nécessaires.
              <span className="block mt-2"></span>{" "}
              <span className="font-semibold text-gray-700">
                Suivre la demande
              </span>{" "}
              : Attendez la réponse officielle pour connaître le statut de votre
              visa.
            </p>
          </div>
          <div className="mb-12 lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-8  after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Les types de visa?
            </h3>
            {visa &&
              visa?.map((visa, index) => (
                <div key={index} className="mb-8 ">
                  <h3 className="text-xl font-semibold text-gray-800  mb-2 ">
                    {visa.type}
                  </h3>
                  <p className="max-w-[60ch] text-lg text-gray-700 font-light">
                    {visa.description}
                  </p>
                </div>
              ))}
          </div>
          <div className="mb-12  lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Simplifiez vos démarches avec GAF Travel & Events
            </h3>
            <p className="max-w-[70ch] text-lg text-gray-700 font-light">
              Faites-nous confiance pour un accompagnement professionnel et
              voyagez en toute sérénité.
              <span className="block mt-2"></span>- Conseils personnalisés
              adaptés à votre destination.
              <span className="block mt-2"></span>- Vérification de vos
              documents pour garantir un dossier complet.
              <span className="block mt-2"></span>- Assistance au remplissage
              des formulaires et prise de rendez-vous.
              <span className="block mt-2"></span>- Suivi complet de votre
              dossier jusqu’à l’obtention du visa.
              <span className="block mt-2"></span>
            </p>
          </div>

          <div className="form-main">
            <VisaForm />
          </div>
        </div>
      </div>
    </div>
  );
}
