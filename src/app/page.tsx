import CarouselCards from "@/components/ui/carouselCards";
import ContactForm from "@/components/ui/contactForm";
import Hero from "@/components/ui/hero";
import HotelCard from "@/components/ui/hotelCard";
import ProfessionalCard from "@/components/ui/professionalCard";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import {
  fetchVoyagesOrg,
  fetchVoyagesCart,
  fetchVoyages3,
  fetchHotels,
} from "@/utils/getData";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset })
        .image(source)
        .quality(80)
        .format("webp")
        .auto("format")
    : null;

export default async function Home() {
  const voyages_org = await fetchVoyagesOrg();
  const voyages_cart = await fetchVoyagesCart();
  const voyages_3 = await fetchVoyages3();
  const hotels = await fetchHotels();
  return (
    <div>
      <Hero offres={voyages_3} />
      <div className="w-full my-24">
        <div className="w-[85%] mx-auto flex flex-col">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-16 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Collection d’hôtels d’exception
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hotels &&
              hotels.map((hotel, index) => (
                <HotelCard
                  key={index}
                  nom={hotel.nom || "hotel"}
                  etoile={hotel.etoile || 1}
                  image={
                    hotel.mainImage
                      ? urlFor(hotel.mainImage)?.width(550).height(310).url() ||
                        ""
                      : ""
                  }
                  prix={hotel.prix || 0}
                  addresse={hotel.adresse || "tunis"}
                  slug={hotel.slug?.current || "not-found"}
                />
              ))}
          </div>
          <Link className="mx-auto" href="/hotels">
            <Button
              variant="bordered"
              className="btn mx-auto mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
            >
              Voir plus
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full mb-24">
        <div className="w-[85%] mx-auto flex flex-col">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-16  relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Circuits Organisés Haut de Gamme
          </h2>
          {voyages_org && <CarouselCards cards={voyages_org} />}

          <Link className="mx-auto" href="/voyages">
            <Button
              variant="bordered"
              className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
            >
              Voir plus
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full bg-[#dfeaf3] py-16 mb-24">
        <div className="w-[85%] mx-auto flex flex-col">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-16  relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Voyages à la Carte
          </h2>
          {voyages_cart && <CarouselCards cards={voyages_cart} />}

          <Link className="mx-auto" href="/voyages">
            <Button
              variant="bordered"
              className="btn  mt-16 bg-white border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
              // className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
            >
              Voir plus
            </Button>
          </Link>
        </div>
      </div>
      <div className="w-full mb-24">
        <div className="w-[85%] mx-auto items-center flex flex-col">
          <h2 className="text-2xl md:text-4xl font-medium text-center mb-16 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Optimisez la gestion de vos déplacements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProfessionalCard titre="VIP" image="/vip.jpg" />
            <ProfessionalCard
              titre="Team Building"
              image="/team-building.jpg"
            />
            <ProfessionalCard titre="Events" image="/event-3.jpg" />
          </div>

          <Button
            variant="bordered"
            as={Link}
            href="/voyages-daffaires"
            className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
          >
            Voir plus
          </Button>
        </div>
      </div>

      <div className="bg-gray-100 py-16 ">
        <h2 className="text-2xl md:text-4xl font-medium text-center mb-16 mb-16 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
          Contactez nous
        </h2>
        <div className="max-w-md mx-auto px-4">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

