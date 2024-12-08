import VisaForm from "@/components/ui/visaForm";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="w-full mb-16">
        <Card className="h-[400px] rounded-none">
          <div className="relative w-full h-full">
            <Image
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover rounded-none"
              src={"/visa.jpg"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-linear"></div>
          </div>
          <CardBody className="absolute inset-0 mb-16 z-10 flex items-start justify-center">
            <div className="max-w-[60ch] mx-auto flex flex-col items-center">
              <h1 className="mb-2  font-medium text-3xl lg:text-5xl  tracking-widest text-white ">
                {" "}
                Les types de visas
              </h1>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="flex">
        <div className="w-[90%] md:w-auto   mx-auto   self-center lg:self-start  mb-16 flex flex-col items-start ">
          <div className="mb-12  lg:mb-16">
            <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4   after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              Comment obtenir un visa?
            </h3>
            <p className="max-w-[70ch] text-lg text-gray-700 font-light">
              Bienvenue chez Dolphin Équipements, un acteur incontournable dans
              le domaine de l&apos;hydraulique et des services en Tunisie.
              <span className="block mt-2"></span>
              En tant que membre du groupe FLEXIMAT France, fort de plus de 20
              ans d&apos;expertise, nous sommes fiers de proposer des solutions
              innovantes et adaptées aux besoins des professionnels dans divers
              secteurs, tels que l&apos;industrie, le BTP et la marine.
            </p>
          </div>

          {/* {visas && visas?.map((visa, index) => (
          <div key={index} className="mb-12 lg:mb-16">
            
              <h3 className="text-2xl font-medium text-gray-800 lg:text-3xl mb-4 after:content-[''] after:block after:w-1/4 after:h-[1px] after:bg-[#30085E] after:mt-2 after:rounded-md after:scale-x-100 after:origin-left">
              {visa.type}</h3>
              <p className="max-w-[60ch] text-lg text-gray-700 font-light">{visa.description}</p>
          
        </div>
          ))} */}
          <div className="form-main">
            <VisaForm />
          </div>
        </div>
      </div>
    </div>
  );
}
