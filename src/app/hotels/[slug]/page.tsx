import BreadCrumbs from "@/components/ui/breadCrumbs";
import Tarifs from "@/components/ui/tarifs";
import { Image } from "@nextui-org/image";
import { LucideCircleDollarSign, MapPinIcon } from "lucide-react";
import React from "react";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableText } from "next-sanity";
import { fetchHotelBySlug } from "@/utils/getData";
import { notFound } from "next/navigation";

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
  const hotel = await fetchHotelBySlug(await params);
  if (!hotel) {
    notFound();
  }
  const {
    nom,
    etoile,
    mainImage,
    prix,
    adresse,
    description,
    listImage,
    emplacement,
  } = hotel;

  const hotelImageUrl = mainImage
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
        <BreadCrumbs BreadcrumbItems={["hotels", `${nom}`]} />
        <div>
          <div className="flex  items-center gap-2 mt-8">
            <h1 className="text-2xl  text-gray-800  ">{nom}</h1>
            <span className="text-sm">{"⭐".repeat(etoile || 0)}</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="md:flex gap-4">
              <p className="text-sm text-gray-600 flex gap-2 mt-4">
                {" "}
                <MapPinIcon size={16} /> {adresse}{" "}
              </p>

              <p className="text-sm sm:hidden text-gray-600 flex gap-2 mt-4">
                {" "}
                <LucideCircleDollarSign size={16} /> a partir de{" "}
                <span className="font-semibold text-black">{prix} TND</span>{" "}
              </p>
            </div>
            <div className="sm:flex gap-4">
              <p className="text-sm text-gray-600 flex flex-col  gap-2 mt-4">
                {" "}
                <span>a partir de </span>
                <span className="font-semibold text-xl text-black">
                  {prix} TND
                </span>{" "}
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row gap-2 w-full">
            <div className="w-full ">
              <Image
                src={hotelImageUrl || "https://placehold.co/550x310/png"}
                alt="hotel"
                width={986} // Use width={0} to enable automatic scaling with Tailwind classes
                height={0}
                className="object-cover h-[400px] w-full rounded-xs"
              />
            </div>
            <div className="columns-2 gap-1 mb-1 md:flex md:flex-col">
              {listImagesUrls &&
                listImagesUrls.map((imageUrl, index) => (
                  <Image
                    key={index}
                    src={imageUrl || "https://placehold.co/550x310/png"}
                    alt="hotel"
                    width={500}
                    height={200}
                    className="object-cover rounded-xs"
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="mt-8 max-w-[74ch]">
          <h2 className="text-gray-800 text-xl font-semibold mb-4">
            Description
          </h2>
          {description && <PortableText value={description} />}
        </div>
        <div className="mt-8 ">
          <Tarifs destination={nom || ""} />
        </div>

        {emplacement && (
          <div className="w-full mt-8">
            <iframe
              src={emplacement}
              style={{
                border: 0,
                width: "100%",
                height: "480px",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
