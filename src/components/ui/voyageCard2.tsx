import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { Clock, Hotel, MapPinIcon } from "lucide-react";
import Link from "next/link";

export default function VoyageCard2({
  titre,
  hotels,
  destination,
  duration,
  prix,
  image,
  periodes,
  slug,
}: {
  titre: string;
  hotels: any;
  destination: string;
  duration: string;
  prix: string;
  image: string;
  periodes: any;
  slug: string;
}) {
  return (
    <Card className="pb-4 ">
      <CardHeader className="overflow-visible pt-0  px-0 w-full ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover w-full h-[300px] "
          src={image}
        />
      </CardHeader>
      <CardBody className="pb-8 pt-2 px-4 flex-col items-start gap-4">
        <h3 className="text-2xl text-black">{titre}</h3>
        <div className="flex items-center gap-2">
          {hotels &&
            hotels.map((hotel) => (
              <div key={hotel.hotel} className="flex items-center gap-2">
                <Hotel size={16} />
                <span className="text-sm text-gray-500">{hotel.hotel}</span>
              </div>
            ))}
        </div>
        <div className="flex gap-2">
          <p className="text-xs text-gray-500 flex gap-2">
            <MapPinIcon size={16} /> {destination}
          </p>
          <p className="text-xs text-gray-500 flex gap-2">
            <Clock size={16} /> {duration}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {periodes &&
            periodes.map((per, index) => (
              <p key={index} className="text-sm text-[#00A9E0] ">
                {per.periode}
              </p>
            ))}
        </div>
      </CardBody>
      <CardFooter className="flex justify-between items-center border-t  py-4">
        <div>
          <p className="text-xs text-gray-500">A partir de</p>
          <p className="text-lg text-gray-700 font-semibold">{prix} TND</p>
        </div>
        <Link href={`/voyages/${slug}`}>
          <Button className="   bg-[#ffce5b] text-lg rounded">Voir plus</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
