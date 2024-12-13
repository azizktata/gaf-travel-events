import BreadCrumbs from "@/components/ui/breadCrumbs";
import { Image } from "@nextui-org/image";
import { AlertCircle, CheckIcon, Clock, Hotel, MapPinIcon } from "lucide-react";
import React from "react";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText, PortableTextBlock } from "next-sanity";
import { fetchVoyageBySlug } from "@/utils/getData";
import { notFound } from "next/navigation";
import TarifVoyage from "@/components/ui/tarifVoyage";
import { Periode } from "@/types";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .quality(80)
        .format("webp")
        .auto("format")
    : null;
export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const voyage = await fetchVoyageBySlug(await params);
  if (!voyage) {
    notFound();
  }
  const {
    titre,
    description = [] as PortableTextBlock[],
    destination,
    prix,

    duration,
    periodes,
    serviceInclus,
    serviceNonInclus,
    mainImage,
    listImage,
    activites,
    sejours,
    hotels,
    visa,
  } = voyage;

  const mainImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(310).url()
    : null;
  const listImagesUrls =
    listImage &&
    listImage.map((image) =>
      image ? urlFor(image)?.width(550).height(310).url() : null
    );
  return (
    <div>
      <div className="w-[90%] lg:w-[60%] mx-auto mt-8 lg:mt-16 min-h-[100vh]">
        <BreadCrumbs BreadcrumbItems={["voyages", `${titre}`]} />
        <div>
          <div className="flex justify-between items-center gap-2 mt-8">
            <h1 className="text-3xl  text-black mt-4 ">{titre}</h1>
            <div className="md:flex gap-4">
              <p className="text-sm text-gray-600 flex flex-col  gap-2 mt-4">
                {" "}
                <span>a partir de </span>
                <span className="font-semibold text-xl text-black">
                  {prix} TND
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="md:flex gap-4">
              <p className="text-sm text-gray-600 flex gap-2 mt-4">
                {" "}
                <MapPinIcon size={16} /> {destination}{" "}
              </p>

              <p className="text-sm text-gray-600 flex gap-2 mt-4">
                {" "}
                <Clock size={16} />
                {duration}{" "}
              </p>
              <div className="text-sm text-gray-600 flex gap-2 mt-4 flex items-center mb-6">
                {" "}
                {hotels &&
                  hotels.map((hotel) => (
                    <div key={hotel.hotel} className="flex items-center gap-2">
                      <Hotel size={16} />
                      <span className="text-sm text-gray-500">
                        {hotel.hotel}
                      </span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {periodes &&
              periodes.map((per: Periode, index: number) => (
                <p key={index} className="text-sm text-[#00A9E0] ">
                  {per.periode}
                </p>
              ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-2 w-full">
            <div className="w-full ">
              <Image
                src={mainImageUrl || "https://placehold.co/550x310/png"}
                alt="hotel"
                width={986} // Use width={0} to enable automatic scaling with Tailwind classes
                height={0}
                className="object-cover h-[400px] w-full rounded-xs"
              />
            </div>
            <div className="columns-2 gap-1 mb-1 md:flex md:flex-col">
              {listImagesUrls &&
                listImagesUrls.map((imageUrl, index: number) => (
                  <Image
                    key={index}
                    src={imageUrl || "https://placehold.co/550x310/png"}
                    alt="hotel"
                    width={500}
                    height={200}
                    className="object-cover rounded-xs mb-1"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-[74ch]">
          <h2 className="text-gray-800 text-lg font-semibold">Présentation</h2>

          {description && (
            <div className="text-gray-600 mt-4">
              <PortableText value={description as PortableTextBlock[]} />
            </div>
          )}
        </div>

        {sejours && (
          <div className="mt-8 max-w-[74ch]">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              Programme du séjour
            </h2>
            <p>{duration && `durée : ${duration}`}</p>
            {sejours.map((sejour) => (
              <div key={sejour._key} className="flex flex-col gap-2 mt-4">
                <p>
                  <strong> {sejour?.jour} </strong>
                </p>
                <p>{sejour?.description}</p>
              </div>
            ))}
          </div>
        )}
        {activites && (
          <div className="mt-8 max-w-[74ch]">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              Activités
            </h2>
            {activites.map((service: string) => (
              <p className="py-1" key={service}>
                {service}
              </p>
            ))}
          </div>
        )}

        {serviceInclus && (
          <div className="mt-8 max-w-[74ch]">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              Service Inclus
            </h2>
            {serviceInclus.map((service: string) => (
              <p className="flex items-center gap-2 py-1" key={service}>
                <CheckIcon
                  style={{ color: "green", width: "16px", height: "16px" }}
                />
                {service}
              </p>
            ))}
          </div>
        )}
        {serviceNonInclus && (
          <div className="mt-8 max-w-[74ch]">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">
              Service Non Inclus
            </h2>
            {serviceNonInclus.map((service: string) => (
              <p className="flex items-center gap-2 py-1" key={service}>
                <AlertCircle
                  style={{ color: "orange", width: "16px", height: "16px" }}
                />{" "}
                {service}
              </p>
            ))}
          </div>
        )}
        {hotels && (
          <div className="mt-8 max-w-[74ch]">
            <h2 className="text-gray-800 text-lg font-semibold mb-2">Hôtels</h2>
            {hotels.map((hotel) => (
              <p className="flex flex-wrap items-center gap-2" key={hotel._key}>
                <Hotel style={{ width: "18px", height: "18px" }} />
                {hotel.hotel} : a partir de{" "}
                <span className="font-semibold text-black">
                  {" "}
                  {hotel.prix} TND
                </span>
                (adulte par nuit)
              </p>
            ))}
          </div>
        )}
        <div className="mt-8 max-w-[74ch]">
          <h2 className="text-gray-800 text-lg font-semibold mb-2">Tarifs</h2>
          {periodes && (
            <TarifVoyage
              periodes={periodes}
              visa={visa || "visa-non-required"}
              destination={destination || ""}
            />
          )}
        </div>
      </div>
    </div>
  );
}
