"use client";

import React from "react";
import ReservationForm from "./reservationForm";
import { Button } from "@nextui-org/button";
import { Periode } from "@/types";

export default function TarifVoyage({
  periodes,

  destination,
}: {
  periodes: Periode[];
  visa: "visa-required" | "visa-non-required";
  destination: string;
}) {
  const [selectedPeriode, setSelectedPeriode] = React.useState({
    periode: "",
    prix: "",
    destination: destination,
  });

  const handlePeriodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = JSON.parse(e.target.value);

    setSelectedPeriode({
      ...selectedPeriode,
      periode: selectedValue.periode,
      prix: selectedValue.tarif,
    });
  };
  const [show, setShow] = React.useState(false);
  const isDisplayed = show ? { display: "block" } : { display: "none" };
  return (
    <div>
      {periodes && (
        <div className="mb-8 flex flex-col">
          <div className="flex flex-col gap-1 items-start">
            {periodes.map((periode: Periode) => (
              <div key={periode._key}>
                <input
                  type="radio"
                  id={periode._key}
                  name="periode"
                  value={JSON.stringify(periode)}
                  onChange={handlePeriodeChange}
                />
                <label htmlFor={periode._key}>
                  {/* <i className="fa-solid fa-money-check-dollar"></i> */}
                  <span className="periode"> {periode.periode} </span>{" "}
                </label>
              </div>
            ))}

            <p className="text-xl font-bold ml-auto">
              {selectedPeriode.prix && (
                <>
                  {selectedPeriode?.prix}
                  <span className="DT"> TND</span>
                </>
              )}{" "}
            </p>
          </div>
          <div className="flex mt-4 justify-end">
            <Button
              variant="solid"
              color="primary"
              onClick={() => setShow((prev) => !prev)}
            >
              reserver
            </Button>
          </div>
        </div>
      )}
      {show && (
        <div style={isDisplayed} className="form-main">
          <ReservationForm destination={destination} />
        </div>
      )}
    </div>
  );
}
