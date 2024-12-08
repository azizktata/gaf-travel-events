import React from "react";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import FilterSelect from "@/components/ui/filterSelect";
import VoyageCard2 from "@/components/ui/voyageCard2";

export default function page() {
  const voyages = [
    {
      titre: "Medina",
      image: "/destination-1.jpg",
      destination: "Saudi Arabia",
      duration: "5 jours, 4 nuits",
      prix: "2500",
      periodes: ["Décembre"],
      activites: ["Plongée", "Visite"],
      hotels: ["Hotel HalaL"],
    },
    {
      titre: "Istanbul",
      image: "/destination-2.jpg",
      destination: "Turkey",
      duration: "7 jours, 6 nuits",
      prix: "3200",
      periodes: ["Novembre", "Décembre"],
      activites: ["Croisière", "Shopping"],
      hotels: ["Hotel BlueSky"],
    },
    {
      titre: "Marrakech",
      image: "/destination-3.jpg",
      destination: "Morocco",
      duration: "4 jours, 3 nuits",
      prix: "2200",
      periodes: ["Janvier"],
      activites: ["Randonnée", "Cuisine locale"],
      hotels: ["Riad Jardin Secret"],
    },
    {
      titre: "Paris",
      image: "/destination-4.jpg",
      destination: "France",
      duration: "6 jours, 5 nuits",
      prix: "4500",
      periodes: ["Avril", "Mai"],
      activites: ["Visite de monuments", "Dégustation de vin"],
      hotels: ["Hôtel Étoile"],
    },
    {
      titre: "Phuket",
      image: "/destination-5.jpg",
      destination: "Thailand",
      duration: "10 jours, 9 nuits",
      prix: "8000",
      periodes: ["Février", "Mars"],
      activites: ["Plongée sous-marine", "Relaxation sur plage"],
      hotels: ["The Palm Resort"],
    },
  ];
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto ">
      <div className="my-8">
        <BreadCrumbs BreadcrumbItems={["voyages"]} />
      </div>
      <div className="mb-8">
        <FilterSelect
          type="voyage"
          options={["Maldives HalaL", "Turkie Ysidi"]}
        />
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {voyages.map((voyage, index) => (
            <VoyageCard2
              key={index}
              titre={voyage.titre}
              image={voyage.image}
              destination={voyage.destination}
              duration={voyage.duration}
              prix={voyage.prix}
              periodes={voyage.periodes}
              activites={voyage.activites}
              hotels={voyage.hotels}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
