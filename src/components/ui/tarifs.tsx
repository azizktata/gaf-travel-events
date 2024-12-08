"use client";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import React from "react";

import { DatePicker } from "@nextui-org/date-picker";
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
  DropdownSection,
  DropdownItem,
} from "@nextui-org/dropdown";
import { PlusCircle, Users } from "lucide-react";
import ReservationForm from "./reservationForm";

export default function Tarifs() {
  const [show, setShow] = React.useState(true);
  console.log(show);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedAdultsKeys, setSelectedAdultsKeys] = React.useState(
    new Set(["Adulte(s)"])
  );

  const selectedAdultsValue = React.useMemo(
    () => Array.from(selectedAdultsKeys).join(", ").replace(/_/g, ""),
    [selectedAdultsKeys]
  );

  const [selectedEnfantsKeys, setSelectedEnfantsKeys] = React.useState(
    new Set(["Enfant(s)"])
  );

  const selectedEnfantsValue = React.useMemo(
    () => Array.from(selectedEnfantsKeys).join(", ").replace(/_/g, ""),
    [selectedEnfantsKeys]
  );

  const [selectedLitBebeKeys, setSelectedLitBebeKeys] = React.useState(
    new Set(["Lit(s) bébé"])
  );

  const selectedLitBebeValue = React.useMemo(
    () => Array.from(selectedLitBebeKeys).join(", ").replace(/_/g, ""),
    [selectedLitBebeKeys]
  );
  const [selectedPensionKeys, setSelectedPensionKeys] = React.useState(
    new Set(["Pension"])
  );

  const selectedPensionValue = React.useMemo(
    () => Array.from(selectedPensionKeys).join(", ").replace(/_/g, ""),
    [selectedPensionKeys]
  );

  return (
    <div>
      <Card className="rounded-sm">
        <CardHeader>
          <h4 className="text-lg text-gray-800 font-semibold">
            Les tarifs & Réservation
          </h4>
        </CardHeader>
        <CardBody className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-1 flex-wrap md:flex-nowrap gap-4 rounded-xs">
            <DatePicker />
            <DatePicker selectorButtonPlacement="end" />
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
                      <div className="flex gap-2">
                        <Dropdown>
                          <DropdownTrigger>
                            <Button className="capitalize" variant="bordered">
                              {selectedAdultsValue}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            disallowEmptySelection
                            aria-label="Single selection example"
                            selectedKeys={selectedAdultsKeys}
                            selectionMode="single"
                            variant="flat"
                            onSelectionChange={setSelectedAdultsKeys}
                          >
                            <DropdownItem key="1 Adulte">1 Adulte</DropdownItem>
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
                            <Button className="capitalize" variant="bordered">
                              {selectedEnfantsValue}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            disallowEmptySelection
                            aria-label="Single selection example"
                            selectedKeys={selectedEnfantsKeys}
                            selectionMode="single"
                            variant="flat"
                            onSelectionChange={setSelectedEnfantsKeys}
                          >
                            <DropdownItem key="1 Enfant">1 Enfant</DropdownItem>
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
                            <Button className="capitalize" variant="bordered">
                              {selectedLitBebeValue}
                            </Button>
                          </DropdownTrigger>
                          <DropdownMenu
                            disallowEmptySelection
                            aria-label="Single selection example"
                            selectedKeys={selectedLitBebeKeys}
                            selectionMode="single"
                            variant="flat"
                            onSelectionChange={setSelectedLitBebeKeys}
                          >
                            <DropdownItem key="1 Lit">1 Lit</DropdownItem>
                            <DropdownItem key="2 Lits">2 Lits</DropdownItem>
                            <DropdownItem key="3 Lits">3 Lits</DropdownItem>
                            <DropdownItem key="4 Lits">4 Lits</DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </div>

                      <Button variant="light" className="self-start">
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
        <CardFooter>
          <Button color="primary" onPress={() => setShow((prev) => !prev)}>
            Réserver
          </Button>
        </CardFooter>
      </Card>
      {show ? (
        <div className="mt-8 p-2 ">
          <ReservationForm />
        </div>
      ) : null}
    </div>
  );
}
