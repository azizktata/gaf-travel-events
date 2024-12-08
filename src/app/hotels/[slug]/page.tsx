import BreadCrumbs from "@/components/ui/breadCrumbs";
import Tarifs from "@/components/ui/tarifs";
import { Image } from "@nextui-org/image";
import { LucideCircleDollarSign, MapPinIcon } from "lucide-react";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <div>
      <div className="w-[90%] lg:w-[60%] mx-auto mt-8 lg:mt-16">
        <BreadCrumbs BreadcrumbItems={["hotels", `${params.slug}`]} />
        <div>
          <div className="flex items-center gap-2 mt-8">
            <h1 className="text-2xl  text-gray-800 mt-4 ">{params.slug}</h1>
            <span className="text-sm">{"⭐".repeat(4)}</span>
          </div>

          <div className="md:flex gap-4">
            <p className="text-sm text-gray-600 flex gap-2 mt-4">
              {" "}
              <MapPinIcon size={16} /> Tunis, Hamamet{" "}
            </p>

            <p className="text-sm text-gray-600 flex gap-2 mt-4">
              {" "}
              <LucideCircleDollarSign size={16} /> a partir de{" "}
              <span className="font-semibold">250 TND</span>{" "}
            </p>
          </div>

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
          <h2 className="text-gray-800 text-lg font-semibold">Description</h2>
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
