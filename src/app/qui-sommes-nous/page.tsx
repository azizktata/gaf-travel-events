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
                GAF Voyages
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
              Bienvenue chez GAF Voyages, où commencent vos voyages inoubliables
              !<span className="block mt-2"></span>
              Basée en Tunisie, notre agence met son expertise et sa passion à
              votre service pour créer des expériences uniques. Que vous rêviez
              de destinations exotiques, d&apos;aventures sur mesure, ou de
              déplacements professionnels bien organisés, nous avons les
              solutions adaptées à vos besoins.
            </p>
          </div>

          <div className="mb-12 lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4 after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Notre mission
            </h3>
            <p className="max-w-[60ch] text-lg text-gray-700 font-light">
              Chez GAF Voyages, notre mission est de fournir des services de
              voyage et d&apos;organisation d&apos;événements d&apos;exception,
              en alliant créativité et professionnalisme.
              <span className="block mt-2"></span>
              Nous sommes passionnés par la mise en valeur du riche patrimoine
              tunisien tout en offrant des solutions personnalisées pour
              répondre à toutes vos attentes.
            </p>
          </div>

          <div className="mb-12 lg:mb-16 ">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Nos services
            </h3>

            <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-700">
                  Voyages organisés
                </span>{" "}
                Explorez les plus belles destinations à travers des itinéraires
                soigneusement préparés pour vous garantir une expérience
                enrichissante et sans stress.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Voyages à la carte
                </span>{" "}
                Composez votre voyage sur mesure selon vos envies et vos
                besoins. Laissez-nous transformer vos rêves en réalité.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Voyages d&apos;affaires
                </span>{" "}
                Simplifiez vos déplacements professionnels grâce à notre service
                dédié, combinant confort, ponctualité et professionnalisme.
              </li>
            </ul>
          </div>
          <div className="mb-12 lg:mb-16 ">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4  after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              {" "}
              Pourquoi choisir GAF Voyages ?
            </h3>
            <ul className="max-w-[70ch] text-lg text-gray-700 font-light space-y-4 leading-relaxed mb-6">
              <li>
                <span className="font-semibold text-gray-700">
                  Expertise internationale :
                </span>{" "}
                Grâce à notre réseau de partenaires, nous vous offrons des
                expériences uniques à travers le monde.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Personnalisation :
                </span>{" "}
                Chaque voyage est conçu sur mesure pour répondre à vos attentes.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Fiabilité et professionnalisme:
                </span>{" "}
                Nous gérons chaque détail pour que vous puissiez voyager en
                toute tranquillité.
              </li>
              <li>
                <span className="font-semibold text-gray-700">
                  Engagement qualité:
                </span>{" "}
                Nous nous efforçons d’offrir un service irréprochable, quelle
                que soit la nature de votre voyage.
              </li>
            </ul>
            <p className="text-lg max-w-[70ch] text-gray-700 font-light leading-relaxed">
              Avec{" "}
              <span className="font-semibold text-gray-700">GAF Voyages</span>
              ,partez à la découverte du monde et créez des souvenirs
              inoubliables. Faites-nous confiance pour transformer vos idées en
              voyages extraordinaires.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
