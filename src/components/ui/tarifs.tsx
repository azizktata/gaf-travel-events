"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";

import { DateRangePicker } from "@nextui-org/date-picker";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { PlusCircle, TrashIcon, Users } from "lucide-react";
import ReservationForm from "./reservationForm";
import { parseDate, getLocalTimeZone } from "@internationalized/date";
import { useDateFormatter } from "@react-aria/i18n";
import { HotelFormData } from "@/types";

export default function Tarifs({ destination }: { destination: string }) {
  const [show, setShow] = React.useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [chambres, setChambres] = React.useState([
    {
      id: 1,
      selectedAdultsKeys: new Set(["Adulte(s)"]),
      selectedEnfantsKeys: new Set(["Enfant(s)"]),
      selectedLitBebeKeys: new Set(["Lit(s) bébé"]),
    },
  ]);

  const handleAddChambre = () => {
    setChambres((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        selectedAdultsKeys: new Set(["Adulte(s)"]),
        selectedEnfantsKeys: new Set(["Enfant(s)"]),
        selectedLitBebeKeys: new Set(["Lit(s) bébé"]),
      },
    ]);
  };

  const handleUpdateChambre = (id, key, value) => {
    setChambres((prev) =>
      prev.map((chambre) =>
        chambre.id === id ? { ...chambre, [key]: value } : chambre
      )
    );
  };
  const handleRemoveChambre = (id) => {
    setChambres((prev) => prev.filter((chambre) => chambre.id !== id));
  };

  const [selectedPensionKeys, setSelectedPensionKeys] = React.useState(
    new Set(["Pension"])
  );

  const selectedPensionValue = React.useMemo(
    () => Array.from(selectedPensionKeys).join(", ").replace(/_/g, ""),
    [selectedPensionKeys]
  );

  const [value, setValue] = React.useState({
    start: parseDate("2024-04-01"),
    end: parseDate("2024-04-08"),
  });

  const formatter = useDateFormatter({ dateStyle: "long" });

  const [formData, setFormData] = React.useState({} as HotelFormData);

  // Update aggregated data whenever individual states change
  React.useEffect(() => {
    setFormData({
      chambres: chambres.map((chambre) => ({
        id: chambre.id,
        selectedAdults: Array.from(chambre.selectedAdultsKeys).join(", "),
        selectedEnfants: Array.from(chambre.selectedEnfantsKeys).join(", "),
        selectedLitBebe: Array.from(chambre.selectedLitBebeKeys).join(", "),
      })),
      pension: Array.from(selectedPensionKeys).join(", "),
      dateRange: {
        start: value.start.toString(),
        end: value.end.toString(),
      },
    });
  }, [chambres, selectedPensionKeys, value]);
  return (
    <div className="">
      <Card className="rounded-sm p-2">
        <CardHeader>
          <h4 className="text-lg text-gray-800 font-semibold">
            Les tarifs & Réservation
          </h4>
        </CardHeader>
        <CardBody className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-1 flex-col gap-y-2 flex-wrap md:flex-nowrap gap-4 rounded-xs">
            <DateRangePicker
              className=""
              label="Stay duration"
              selectorButtonPlacement="start"
              value={value}
              onChange={setValue}
            />
            <p className="text-default-500 text-sm">
              Selected date:{" "}
              {value
                ? formatter.formatRange(
                    value.start.toDate(getLocalTimeZone()),
                    value.end.toDate(getLocalTimeZone())
                  )
                : "--"}
            </p>
          </div>
          <Dropdown>
            <DropdownTrigger>
              <Button className="capitalize" variant="bordered">
                {selectedPensionValue}
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              disallowEmptySelection
              aria-label="Single selection example"
              selectedKeys={selectedPensionKeys}
              selectionMode="single"
              variant="flat"
              onSelectionChange={setSelectedPensionKeys}
            >
              <DropdownItem key="Demi-pension">Demi-pension</DropdownItem>
              <DropdownItem key="Pension Compléte">
                Pension Compléte
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <>
            <Button onPress={onOpen}>
              {" "}
              <Users size={16} /> Chambres & occupations
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Sélection des chambres et des passagers
                    </ModalHeader>
                    <ModalBody>
                      {chambres.map((chambre) => {
                        const selectedAdultsValue = Array.from(
                          chambre.selectedAdultsKeys
                        )
                          .join(", ")
                          .replace(/_/g, "");
                        const selectedEnfantsValue = Array.from(
                          chambre.selectedEnfantsKeys
                        )
                          .join(", ")
                          .replace(/_/g, "");
                        const selectedLitBebeValue = Array.from(
                          chambre.selectedLitBebeKeys
                        )
                          .join(", ")
                          .replace(/_/g, "");

                        return (
                          <div
                            key={chambre.id}
                            className="flex flex-col gap-4 mb-4"
                          >
                            <div className="flex justify-between items-end">
                              <p>Chambre {chambre.id}</p>
                              <button
                                className="text-red-500 hover:text-red-700"
                                onClick={() => handleRemoveChambre(chambre.id)}
                              >
                                <TrashIcon size={16} />{" "}
                              </button>
                            </div>
                            <div className="flex gap-2">
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button
                                    className="capitalize"
                                    variant="bordered"
                                  >
                                    {selectedAdultsValue}
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                  disallowEmptySelection
                                  aria-label="Single selection example"
                                  selectedKeys={chambre.selectedAdultsKeys}
                                  selectionMode="single"
                                  variant="flat"
                                  onSelectionChange={(keys) =>
                                    handleUpdateChambre(
                                      chambre.id,
                                      "selectedAdultsKeys",
                                      keys
                                    )
                                  }
                                >
                                  <DropdownItem key="1 Adulte">
                                    1 Adulte
                                  </DropdownItem>
                                  <DropdownItem key="2 Adultes">
                                    2 Adultes
                                  </DropdownItem>
                                  <DropdownItem key="3 Adultes">
                                    3 Adultes
                                  </DropdownItem>
                                  <DropdownItem key="4 Adultes">
                                    4 Adultes
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button
                                    className="capitalize"
                                    variant="bordered"
                                  >
                                    {selectedEnfantsValue}
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                  disallowEmptySelection
                                  aria-label="Single selection example"
                                  selectedKeys={chambre.selectedEnfantsKeys}
                                  selectionMode="single"
                                  variant="flat"
                                  onSelectionChange={(keys) =>
                                    handleUpdateChambre(
                                      chambre.id,
                                      "selectedEnfantsKeys",
                                      keys
                                    )
                                  }
                                >
                                  <DropdownItem key="1 Enfant">
                                    1 Enfant
                                  </DropdownItem>
                                  <DropdownItem key="2 Enfants">
                                    2 Enfants
                                  </DropdownItem>
                                  <DropdownItem key="3 Enfants">
                                    3 Enfants
                                  </DropdownItem>
                                  <DropdownItem key="4 Enfants">
                                    4 Enfants
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                              <Dropdown>
                                <DropdownTrigger>
                                  <Button
                                    className="capitalize"
                                    variant="bordered"
                                  >
                                    {selectedLitBebeValue}
                                  </Button>
                                </DropdownTrigger>
                                <DropdownMenu
                                  disallowEmptySelection
                                  aria-label="Single selection example"
                                  selectedKeys={chambre.selectedLitBebeKeys}
                                  selectionMode="single"
                                  variant="flat"
                                  onSelectionChange={(keys) =>
                                    handleUpdateChambre(
                                      chambre.id,
                                      "selectedLitBebeKeys",
                                      keys
                                    )
                                  }
                                >
                                  <DropdownItem key="1 Lit">1 Lit</DropdownItem>
                                  <DropdownItem key="2 Lits">
                                    2 Lits
                                  </DropdownItem>
                                  <DropdownItem key="3 Lits">
                                    3 Lits
                                  </DropdownItem>
                                  <DropdownItem key="4 Lits">
                                    4 Lits
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        );
                      })}
                      <Button
                        variant="light"
                        onPress={handleAddChambre}
                        className="self-start"
                      >
                        <PlusCircle size={16} />
                        Ajouter une chambre
                      </Button>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Fermer
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Valider
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </>
        </CardBody>
        <CardFooter className="justify-end">
          <Button color="primary" onPress={() => console.log(formData)}>
            Réserver
          </Button>
        </CardFooter>
      </Card>
      {show ? (
        <div className="mt-8 p-2 ">
          <ReservationForm hotelForm={formData} destination={destination} />
        </div>
      ) : null}
    </div>
  );
}
