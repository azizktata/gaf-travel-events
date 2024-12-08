import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full mb-16">
        <Card className="h-[400px] rounded-none">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={"/destination-1.jpg"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
          </div>
          <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
            <div className="max-w-[60ch] mx-auto flex flex-col items-center">
              <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white ">
                {" "}
                Qui sommes nous?
              </h1>
              <p className="text-lg  text-white/70 tracking-widest font-medium ">
                Gaf Travel & Events
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex">
        <div className="w-[90%] md:w-auto   mx-auto   self-center lg:self-start  mb-16 flex flex-col items-start ">
          <div className="mb-12  lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Qui sommes nous?
            </h3>
            <p className="max-w-[70ch] text-lg text-gray-700 font-light">
              Bienvenue chez Dolphin Équipements, un acteur incontournable dans
              le domaine de l&apos;hydraulique et des services en Tunisie.
              <span className="block mt-2"></span>
              En tant que membre du groupe FLEXIMAT France, fort de plus de 20
              ans d&apos;expertise, nous sommes fiers de proposer des solutions
              innovantes et adaptées aux besoins des professionnels dans divers
              secteurs, tels que l&apos;industrie, le BTP et la marine.
            </p>
          </div>

          <div className="mb-12 lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4 after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Notre mission
            </h3>
            <p className="max-w-[60ch] text-lg text-gray-700 font-light">
              Fournir des produits et services hydrauliques et pneumatiques de
              qualité, conçus pour optimiser vos performances et garantir la
              durabilité de vos équipements.
              <span className="block mt-2"></span>
              Que ce soit pour la vente, la maintenance ou le nettoyage des
              circuits hydrauliques, nous nous engageons à vous accompagner avec
              expertise et professionnalisme.
            </p>
          </div>

          <div className="mb-12 lg:mb-16 ">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Nos valeurs
            </h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              Chez Dolphin Équipements, nos valeurs fondamentales sont le socle
              de notre engagement envers nos clients, nos partenaires et notre
              équipe.
            </p>
            <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed">
              <li>
                <span className="font-medium text-gray-700">
                  Expertise et Excellence
                </span>{" "}
                Nous mettons notre savoir-faire au service de vos besoins en
                garantissant des produits et services de qualité supérieure
              </li>
              <li>
                <span className="font-medium text-gray-700">
                  Innovation Continue
                </span>{" "}
                Nous adoptons des solutions novatrices pour répondre aux défis
                modernes et offrir des performances optimales.{" "}
              </li>
              <li>
                <span className="font-medium text-gray-700">
                  Proximité et Confiance
                </span>{" "}
                Nous construisons des relations durables basées sur la
                transparence et la satisfaction de nos clients.
              </li>
            </ul>
          </div>
          <div className="mb-12 lg:mb-16 ">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              {" "}
              Pourquoi choisir dolphin équipements ?
            </h3>
            <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed mb-6">
              <li>
                <span className="font-medium text-gray-700">
                  Expertise reconnue:
                </span>{" "}
                Grâce à notre appartenance au groupe FLEXIMAT France.
              </li>
              <li>
                <span className="font-medium text-gray-700">
                  Produits de qualité:
                </span>{" "}
                Adaptés aux exigences des secteurs industriels, du BTP et de la
                marine.
              </li>
              <li>
                <span className="font-medium text-gray-700">
                  Services personnalisés:
                </span>{" "}
                Un accompagnement de proximité pour répondre à tous vos besoins.
              </li>
            </ul>
            <p className="text-lg max-w-[70ch] text-gray-700 font-light leading-relaxed">
              Chez{" "}
              <span className="font-medium text-gray-700">
                Dolphin Équipements
              </span>
              , nous faisons bien plus que vendre des équipements : nous
              devenons votre partenaire de confiance pour toutes vos solutions
              hydrauliques et pneumatiques.
              <span className="block mt-2">
                Venez nous rencontrer à{" "}
                <span className="font-medium">Tunis</span> et découvrez comment
                nous pouvons vous aider à optimiser vos performances et garantir
                la fiabilité de vos équipements !
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
