import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import { MapIcon } from "lucide-react";
import Link from "next/link";

export default function HotelCard({
  nom,
  etoile,
  image,
  prix,
  addresse,
  slug,
}: {
  nom: string;
  etoile: number;
  image: string;
  prix: number;
  addresse: string;
  slug: string;
}) {
  return (
    <Card className="pb-4 ">
      <CardHeader className="overflow-hidden w-full  p-0 ">
        <Image
          isZoomed
          alt="Card background"
          className="object-cover w-full h-full "
          src={image}
        />
      </CardHeader>
      <CardBody className="pb-8 pt-2 px-4 flex-col items-start gap-2">
        <h3 className="text-xl text-black">{nom}</h3>
        <div className="flex items-center gap-2">
          <MapIcon size={16} />
          <p className="text-sm text-gray-500"> {addresse}</p>
          <span className="text-xs">{"⭐".repeat(etoile)}</span>
        </div>
        <p className="text-xs text-[#00A9E0] mt-2">
          Hotel lux - Pieds dans l&apos;eau - Hotel d&apos;affarie
        </p>
      </CardBody>
      <CardFooter className="flex justify-between items-center border-t  py-4">
        <div>
          <p className="text-xs text-gray-500">A partir de</p>
          <p className="text-lg text-gray-700 font-semibold">{prix} TND</p>
        </div>
        <Link href={`/hotels/${slug}`}>
          <Button className="   bg-[#ffce5b] text-lg rounded">Voir plus</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
