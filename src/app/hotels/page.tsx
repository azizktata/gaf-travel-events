import HotelCard from "@/components/ui/hotelCard";
import React from "react";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import FilterSelect from "@/components/ui/filterSelect";
import { fetchHotelsByFilterOpions, fetchNDestOfHotels } from "@/utils/getData";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Hotel } from "@/sanity/types";

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
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { etoile = "", destination = "" } = await searchParams;

  const hotels = await fetchHotelsByFilterOpions(etoile, destination);
  const destinations = (await fetchNDestOfHotels())
    .map((hotel) => hotel.adresse)
    .filter((adresse): adresse is string => adresse !== null);
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto min-h-[100vh] ">
      <div className="my-8">
        <BreadCrumbs BreadcrumbItems={["hotels"]} />
      </div>
      <div className="mb-8">
        <FilterSelect type="hotel" options={destinations} />
      </div>

      <div className=" mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {hotels &&
            hotels.map((hotel: Hotel, index: number) => (
              <HotelCard
                key={index}
                nom={hotel.nom || ""}
                etoile={hotel.etoile || 0}
                image={
                  hotel.mainImage
                    ? urlFor(hotel.mainImage)?.width(550).height(310).url() ||
                      ""
                    : ""
                }
                prix={hotel.prix || 0}
                addresse={hotel.adresse || ""}
                slug={hotel.slug?.current || ""}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
