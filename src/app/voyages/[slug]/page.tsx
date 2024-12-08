import BreadCrumbs from "@/components/ui/breadCrumbs";
import Tarifs from "@/components/ui/tarifs";
import { Image } from "@nextui-org/image";
import { Clock, Hotel, MapPinIcon } from "lucide-react";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="w-[90%] lg:w-[60%] mx-auto mt-8 lg:mt-16">
        <BreadCrumbs BreadcrumbItems={["voyages", `${params.slug}`]} />
        <div>
          <div className="flex items-center gap-2 mt-8">
            <h1 className="text-3xl  text-black mt-4 ">{params.slug}</h1>
          </div>

          <div className="flex items-center justify-between">
            <div className="md:flex gap-4">
              <p className="text-sm text-gray-600 flex gap-2 mt-4">
                {" "}
                <MapPinIcon size={16} /> Tunis, Hamamet{" "}
              </p>

              <p className="text-sm text-gray-600 flex gap-2 mt-4">
                {" "}
                <Clock size={16} />4 jours, 3 nuits{" "}
              </p>
              <p className="text-sm text-gray-600 flex gap-2 mt-4 flex items-center">
                {" "}
                <Hotel size={16} />
                Hotel Sarray <span className="text-xs">{"⭐".repeat(4)}</span>
              </p>
            </div>
            <div className="md:flex gap-4">
              <p className="text-sm text-gray-600 flex flex-col  gap-2 mt-4">
                {" "}
                <span>a partir de </span>
                <span className="font-semibold text-xl text-black">
                  250 TND
                </span>{" "}
              </p>
            </div>
          </div>
          {Array.of(1, 2, 3, 4).map((i) => (
            <span key={i} className="text-sm text-[#00A9E0] ">
              activité
            </span>
          ))}

          <div className="mt-8 flex flex-col md:flex-row gap-2 w-full">
            <div className="w-full ">
              <Image
                src="/hotel-1.jpg"
                alt="hotel"
                width={986} // Use width={0} to enable automatic scaling with Tailwind classes
                height={0}
                className="object-cover h-[400px] w-full rounded-xs"
              />
            </div>
            <div className="columns-2 gap-1 mb-1 md:flex md:flex-col">
              <Image
                src="/hotel-1.jpg"
                alt="hotel"
                width={500}
                height={200}
                className="object-cover rounded-xs"
              />
              <Image
                src="/hotel-1.jpg"
                alt="hotel"
                width={500}
                height={200}
                className="object-cover rounded-xs"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-[74ch]">
          <h2 className="text-gray-800 text-lg font-semibold">Présentation</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptates, cumque quod, nemo, quos dolorum quae quas repellendus
            doloribus voluptatem. Quisquam voluptates, cumque quod, nemo, quos
            dolorum quae quas repellendus doloribus voluptatem. Quisquam
            voluptates, cumque quod, nemo, quos dolorum quae quas repellendus
            doloribus voluptatem.
          </p>
        </div>
        <div className="mt-8 ">
          <Tarifs />
        </div>
        {/* {sejours && (
            <div className="sejours">
              <h1>Programme du séjour</h1>
              <p>{duration && `durée : ${duration}`}</p>
              {sejours.map((sejour) => (
                <div key={sejour._key} className="sejour-card">
                  <p>
                    <strong> {sejour?.jour} </strong>
                  </p>
                  <p>{sejour?.description}</p>
                </div>
              ))}
            </div>
          )}
          {activites && (
            <div className="Activités">
              <h1>Activités</h1>
              {activites.map((service) => (
                <p key={service}>{service}</p>
              ))}
            </div>
          )}

          {serviceInclus && (
            <div className="services-inclus">
              <h1>Service Inclus</h1>
              {serviceInclus.map((service) => (
                <p className="icon-text" key={service}>
                  <CheckIcon
                    style={{ color: "green", width: "20px", height: "20px" }}
                  />
                  {service}
                </p>
              ))}
            </div>
          )}
          {serviceNonInclus && (
            <div className="services-noninclus">
              <h1>Service Non Inclus</h1>
              {serviceNonInclus.map((service) => (
                <p className="icon-text" key={service}>
                  <ExclamationTriangleIcon
                    style={{ color: "orange", width: "16px", height: "16px" }}
                  />{" "}
                  {service}
                </p>
              ))}
            </div>
          )}
          
          {periodes && (
            <TarifVoyage
              periodes={periodes}
              visa={visa || "visa-non-required"}
              destination={destination || ""}
            />
          )}
          */}
      </div>
    </div>
  );
}
