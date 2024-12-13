"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Phone } from "lucide-react";
import { Image } from "@nextui-org/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Voyages", path: "/voyages" },
    { label: "Hotels", path: "/hotels" },
    { label: "Visa", path: "/visa" },
    { label: "VIP", path: "/voyages-daffaires" },
    { label: "Qui somme-nous", path: "/qui-sommes-nous" },
    { label: "Facebook", path: "/" },
    { label: "Instagram", path: "/" },
  ];
  const handleWhatsAppCall = () => {
    const phoneNumber = "19344320976";
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const handleMenuItemClick = () => {
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={"/"} className="font-bold text-inherit">
            <Image src="/GAF.png" alt="logo" width={115} height={115} />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-16 text-lg" justify="center">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger className="cursor-pointer">
              Voyages
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="Produits Dolhpines"
            className="w-auto  text-center"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem>
              <Link className="text-base" href="/voyages?type=voyage-organise">
                Voyages organisés
              </Link>
            </DropdownItem>
            <DropdownItem>
              <Link className="text-base" href="/voyages?type=voyage-carte">
                voyages a la carte
              </Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <NavbarItem>
          <Link color="foreground" href="/hotels">
            Hotels
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-base" href="/voyages-daffaires">
            VIP
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/visa">
            Visa
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            className="flex gap-2"
            href="#"
            variant="bordered"
            onPress={handleWhatsAppCall}
          >
            <Phone size={16} />
            +216 71 352 114
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="flex flex-col  gap-8 pt-4">
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            onClick={handleMenuItemClick}
            key={`${item}-${index}`}
            className="border-b border-gray-300 pb-2 w-auto"
          >
            <Link
              className="w-auto text-xl"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.path}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
