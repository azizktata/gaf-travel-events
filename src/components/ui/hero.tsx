"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@nextui-org/button";
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
export default function Hero({ offres }: { offres: any }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  m-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {offres.map((offre, index) => (
          <CarouselItem key={index}>
            <div>
              <Card className="relative w-full h-[600px]  overflow-hidden shadow-xl bg-gray-800">
                {/* Price Header */}
                <CardHeader className="absolute z-10 left-0 right-0 flex justify-center mt-32 flex flex-col mx-auto max-w-xs bg-white/90 rounded-xs px-4 py-2">
                  <p className="text-[#005bc4] font-semibold">
                    {offre.duration}
                  </p>
                </CardHeader>

                {/* Background Image */}
                <Image
                  removeWrapper
                  alt="Card background"
                  className="absolute z-0 w-full h-full object-cover"
                  src={
                    offre.mainImage
                      ? urlFor(offre.mainImage)
                          ?.width(1920)
                          .height(1080)
                          .url() || ""
                      : ""
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-linear"></div>

                {/* Body Content */}
                <CardBody className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="text-center">
                    <h1 className="text-white font-bold text-3xl lg:text-5xl tracking-wide">
                      {offre.destination}
                    </h1>
                  </div>
                  <p className="text-xs text-white uppercase font-light mt-10">
                    À partir de
                  </p>
                  <h4 className="text-white font-bold text-2xl">
                    {offre.prix} TND
                  </h4>
                </CardBody>

                {/* Footer Button */}
                <CardFooter className="absolute bottom-20 left-0 right-0 flex justify-center z-10">
                  <Button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl text-lg  hover:bg-primary-700 shadow-lg">
                    J&apos;en profite
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  );
}
