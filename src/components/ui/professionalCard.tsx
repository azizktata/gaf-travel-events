import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function ProfessionalCard({
  titre,
  image,
}: {
  titre: string;
  image: string;
}) {
  return (
    <Card className="h-[300px]">
      <div className="relative w-full h-full group bg-gray-200">
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={image}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-linear"></div>

        <CardBody className="absolute inset-0 mb-16 z-10 flex flex-col items-center justify-center transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 opacity-0 translate-y-5">
          <h1 className="mb-2 text-center font-medium text-2xl lg:text-4xl tracking-widest text-white">
            {titre}
          </h1>
          <Link href={"/voyages-daffaires"}>
            <Button
              variant={"bordered"}
              className="px-4 py-5 mt-5 rounded-sm text-white font-normal  bg-transparent border-[#B0CEE8]/80"
            >
              voir plus
            </Button>
          </Link>
        </CardBody>
      </div>
    </Card>
  );
}
