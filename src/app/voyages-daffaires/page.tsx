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
                Voyages d&apos;affaires
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
                  voyage qui vous ressemble. GAF Voyages vous propose
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
                  voyage qui vous ressemble. GAF Voyages vous propose
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
                      src="/event-1.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/event-2.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/event-3.jpg"
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
                      src="/vip.jpg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <Image
                      src="/vip-2.jpeg"
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <Image
                      src="/vip-3.jpg"
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
                  VIP - Déplacements professionnels
                </h2>
                <p className="mb-5 text-lg text-gray-800 font-light">
                  GAF vous propose aujourd’hui un nouveau regard sur les
                  déplacements professionnels d’entreprise de vos
                  collaborateurs. simplifier les déplacements de vos
                  collaborateurs et à maîtriser durablement votre budget voyage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
