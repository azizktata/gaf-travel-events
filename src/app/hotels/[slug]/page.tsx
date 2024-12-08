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
export default async function page({ params }: { params: { slug: string } }) {
  const hotel = await fetchHotelBySlug(params);
  if (!hotel) {
    notFound();
  }
  const { nom, etoile, mainImage, prix, adresse, description, listImage } =
    hotel;

  const hotelImageUrl = mainImage
    ? urlFor(mainImage)?.width(550).height(310).url()
    : null;
  const listImagesUrls = listImage.map((image) =>
    image ? urlFor(image)?.width(550).height(310).url() : null
  );
  return (
    <div>
      <div className="w-[90%] lg:w-[60%] mx-auto mt-8 lg:mt-16">
        <BreadCrumbs BreadcrumbItems={["hotels", `${nom}`]} />
        <div>
          <div className="flex items-center gap-2 mt-8">
            <h1 className="text-2xl  text-gray-800 mt-4 ">{nom}</h1>
            <span className="text-sm">{"⭐".repeat(etoile)}</span>
          </div>

          <div className="md:flex gap-4">
            <p className="text-sm text-gray-600 flex gap-2 mt-4">
              {" "}
              <MapPinIcon size={16} /> {adresse}{" "}
            </p>

            <p className="text-sm text-gray-600 flex gap-2 mt-4">
              {" "}
              <LucideCircleDollarSign size={16} /> a partir de{" "}
              <span className="font-semibold text-black">{prix} TND</span>{" "}
            </p>
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
              {listImagesUrls.map((imageUrl, index) => (
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
          <h2 className="text-gray-800 text-lg font-semibold mb-4">
            Description
          </h2>
          {description && <PortableText value={description} />}
        </div>
        <div className="mt-8 ">
          <Tarifs />
        </div>

        <div className="w-full mt-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51055.091839307366!2d10.1815323!3d36.89170609999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34b1c25e38a1%3A0x9f17f7e724020f4d!2sMosqu%C3%A9e%20Les%20Jasmins!5e0!3m2!1sfr!2stn!4v1733604364538!5m2!1sfr!2stn"
            style={{
              border: 0,
              width: "100%",
              height: "480px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="dolphin equipements map"
            aria-placeholder="Angle Rue d’egypte Rue d’espagne 2013, Ben arus Tunis"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
