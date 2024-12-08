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
export default function Hero() {
  const covers = [
    "/destination-1.jpg",
    "/destination-2.jpg",
    "/destination-3.jpg",
  ];
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
        {covers.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl bg-gray-800">
                {/* Price Header */}
                <CardHeader className="absolute z-10 left-0 right-0 flex justify-center mt-32 flex flex-col mx-auto max-w-xs bg-white/90 rounded-xs px-4 py-2">
                  <p className="text-[#005bc4] font-semibold">
                    7 jours / 6 nuités
                  </p>
                </CardHeader>

                {/* Background Image */}
                <Image
                  removeWrapper
                  alt="Card background"
                  className="absolute z-0 w-full h-full object-cover"
                  src={image}
                />

                {/* Body Content */}
                <CardBody className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="text-center">
                    <h1 className="text-white font-bold text-3xl lg:text-5xl tracking-wide">
                      Medina
                    </h1>
                  </div>
                  <p className="text-xs text-white uppercase font-light mt-10">
                    À partir de
                  </p>
                  <h4 className="text-white font-bold text-2xl">250 TND</h4>
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
