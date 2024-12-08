"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import VoyageCard from "./voyageCard";
export default function CarouselCards({ cards }) {
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
      <CarouselContent className="m-auto flex ">
        {cards.map((card, index) => (
          <CarouselItem
            className=" sm:basis-1/2 md:basis-1/3 flex justify-center items-center"
            key={index}
          >
            <VoyageCard
              destination={card.destination}
              ville={card.ville}
              image={card.image}
              prix={card.prix}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
