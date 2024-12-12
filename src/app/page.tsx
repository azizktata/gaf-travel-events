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
          <h2 className="text-2xl font-bold text-center my-8 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
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
          <h2 className="text-2xl font-bold text-center my-8 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
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
      <div className="w-full mb-24">
        <div className="w-[85%] mx-auto flex flex-col">
          <h2 className="text-2xl font-bold text-center my-8 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Voyages à la Carte
          </h2>
          {voyages_cart && <CarouselCards cards={voyages_cart} />}

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
      <div className="w-full mb-24">
        <div className="w-[85%] mx-auto flex flex-col">
          <h2 className="text-2xl font-bold text-center my-8 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
            Optimisez la gestion de vos déplacements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ProfessionalCard
              titre="Véhicule avec chauffeur"
              image="/vip.jpg"
            />
            <ProfessionalCard
              titre="Team Building"
              image="/team-building.jpg"
            />
            <ProfessionalCard titre="Events" image="/event-3.jpg" />
          </div>
          <Link className="mx-auto" href="/voyages-daffaires">
            <Button
              variant="bordered"
              className="btn  mt-16 border-[#00A9E0]/70 text-[#00A9E0] text-lg rounded"
            >
              Voir plus
            </Button>
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 py-8 mb-24">
        <h2 className="text-2xl font-bold text-center my-8 mb-16 relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-primary-600 after:mx-auto after:mt-2">
          Contactez nous
        </h2>
        <div className="max-w-md mx-auto">
          <ContactForm />
        </div>
      </div>

      {/* <div className="w-full">
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
      </div> */}
    </div>
  );
}
// const hotels = [
//   {
//     nom: "Hôtel Le Majestic",
//     etoile: 5,
//     image: "hotel-1.jpg",
//     prix: "250 TND",
//     addresse: "Centre-ville, Tunis",
//   },
//   {
//     nom: "Sahara Palace",
//     etoile: 4,
//     image: "hotel-1.jpg",
//     prix: "180 TND",
//     addresse: "Douz, Kébili",
//   },
//   {
//     nom: "Seaside Resort",
//     etoile: 4,
//     image: "hotel-1.jpg",
//     prix: "200 TND",
//     addresse: "Hammamet, Nabeul",
//   },
//   {
//     nom: "Mountain View Inn",
//     etoile: 3,
//     image: "hotel-1.jpg",
//     prix: "120 TND",
//     addresse: "Aïn Draham, Jendouba",
//   },
//   {
//     nom: "Golden Sands Hotel",
//     etoile: 5,
//     image: "hotel-1.jpg",
//     prix: "300 TND",
//     addresse: "Djerba, Médenine",
//   },
//   {
//     nom: "Oasis Retreat",
//     etoile: 3,
//     image: "hotel-1.jpg",
//     prix: "150 TND",
//     addresse: "Tozeur, Tozeur",
//   },
// ];

// const voyages = [
//   {
//     destination: "Turquie",
//     ville: "Istanbul",
//     image: "/destination-1.jpg",
//     prix: "2000",
//   },
//   {
//     destination: "Egypte",
//     ville: "Le Caire",
//     image: "/destination-2.jpg",
//     prix: "1500",
//   },
//   {
//     destination: "France",
//     ville: "Paris",
//     image: "/destination-3.jpg",
//     prix: "2500",
//   },
//   {
//     destination: "Espagne",
//     ville: "Madrid",
//     image: "/destination-4.jpg",
//     prix: "2200",
//   },
//   {
//     destination: "Italie",
//     ville: "Rome",
//     image: "/destination-5.jpg",
//     prix: "1800",
//   },
//   {
//     destination: "Japon",
//     ville: "Tokyo",
//     image: "/destination-6.jpg",
//     prix: "3000",
//   },
// ];
