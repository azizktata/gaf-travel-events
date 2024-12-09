import React from "react";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import FilterSelect from "@/components/ui/filterSelect";
import VoyageCard2 from "@/components/ui/voyageCard2";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  fetchDestOfVoyages,
  fetchVoaygesByFilterOpions,
} from "@/utils/getData";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .quality(80)
        .format("webp")
        .auto("format")
    : null;

interface SearchParams {
  type?: string;
  destination?: string;
}
export default async function page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const typeFilter = searchParams.type || "";

  const destinationFilter = searchParams.destination || "";
  const voyages = await fetchVoaygesByFilterOpions(
    typeFilter,
    destinationFilter
  );
  const destinations = (await fetchDestOfVoyages()).map(
    (voyage) => voyage.destination
  );

  return (
    <div className="w-[90%] lg:w-[70%] mx-auto min-h-[100vh]">
      <div className="my-8">
        <BreadCrumbs BreadcrumbItems={["voyages"]} />
      </div>
      <div className="mb-8">
        <FilterSelect type="voyage" options={destinations} />
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {voyages.map((voyage, index) => (
            <VoyageCard2
              key={index}
              titre={voyage.destination}
              image={
                voyage.mainImage
                  ? urlFor(voyage.mainImage)?.width(550).height(310).url() || ""
                  : ""
              }
              destination={voyage.destination}
              duration={voyage.duration}
              prix={voyage.prix}
              periodes={voyage.periodes}
              hotels={voyage.hotels}
              slug={voyage.slug.current}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
