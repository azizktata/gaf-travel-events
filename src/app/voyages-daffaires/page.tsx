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
              src={"/vip.jpg"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
          </div>
          <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
            <div className="max-w-[60ch] mx-auto flex flex-col items-center">
              <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white mb-8">
                {" "}
                Voyages d'affaires
              </h1>
              <p className="text-sm max-w-[50ch] text-center  text-white/70  font-medium ">
                excellent partenaire pour beaucoup d’entreprises grâce à des
                offres personnalisées
              </p>
            </div>
          </CardBody>
        </Card>
      </div>
      <section className="overflow-hidden pt-8 lg:pt-20 pb-12  lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-[90%] mx-auto px-4  lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/team-building-3.jpg"
                      alt=""
                      className="w-full  object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[90%] px-4 mx-auto lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Booster la performance de votre équipe avec un Team Building
                </h2>
                <p className="mb-5 text-lg text-gray-800 font-light">
                  Puisez l’inspiration dans nos suggestions avant de créer le
                  voyage qui vous ressemble. GAF travel & events vous propose
                  aujourd’hui un nouveau regard sur les déplacements
                  professionnels d’entreprise de vos collaborateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden pt-8 lg:pt-20 pb-12  lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-[90%] px-4 mx-auto lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  MICE Meetings - Incentive - Conférences Exhibitions / Events
                </h2>
                <p className="mb-5 text-lg text-gray-800 font-light">
                  Puisez l’inspiration dans nos suggestions avant de créer le
                  voyage qui vous ressemble. GAF travel & events vous propose
                  aujourd’hui un nouveau regard sur les déplacements
                  professionnels d’entreprise de vos collaborateurs.
                </p>
              </div>
            </div>

            <div className="w-[90%] mx-auto px-4  lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/team-building-3.jpg"
                      alt=""
                      className="w-full  object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden pt-8 lg:pt-20 pb-12  lg:pb-[90px] bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-[90%] mx-auto px-4  lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/team-building.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/team-building-3.jpg"
                      alt=""
                      className="w-full  object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[90%] px-4 mx-auto lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  simplifier les déplacements de vos collaborateurs et à
                  maîtriser durablement votre budget voyage
                </h2>
                <p className="mb-5 text-lg text-gray-800 font-light">
                  GAF vous propose aujourd’hui un nouveau regard sur les
                  déplacements professionnels d’entreprise de vos
                  collaborateurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex">
        <div className="w-[90%] md:w-auto   mx-auto   self-center lg:self-start  mb-16 flex flex-col items-start ">
          <div className="mb-12  lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              NOS SERVICES
            </h3>
            <p className="max-w-[70ch] text-lg text-gray-700 font-light">
              TTA est un excellent partenaire pour beaucoup d’entreprises grâce
              à des offres personnalisées et adaptées à tous les besoins, Nous
              perfectionnons sans cesse nos services afin que votre voyage ne
              soit plus un coût mais un avantage pour votre entreprise.
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
