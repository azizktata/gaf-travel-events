import React from "react";
import { Card, CardHeader, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function VoyageCard({
  destination,

  prix,
  image,
  slug,
}: {
  destination: string;

  prix: number;
  image: string;
  slug: string;
}) {
  return (
    <Card className="h-[300px] w-full">
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <p className=" text-white/80 text-lg uppercase font-bold">
          {destination}
        </p>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={image}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-linear"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-linear"></div>

      <CardFooter className="absolute bg-gray/30 bottom-0 right-0 left-0 gap-4 flex flex-col z-10 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-white/80 text-sm">A partir de</p>
          <p className="text-white text-lg font-semibold">
            {prix} <span className="font-light">TND </span>
          </p>
        </div>

        <Button
          as={Link}
          href={`/voyages/${slug}`}
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded text-lg  hover:bg-primary-700 shadow-lg"
        >
          J&apos;en profite
        </Button>
      </CardFooter>
    </Card>
  );
}
