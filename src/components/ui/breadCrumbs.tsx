"use client";
import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";

export default function BreadCrumbs({
  BreadcrumbItems,
}: {
  BreadcrumbItems: string[];
}) {
  return (
    <Breadcrumbs className="text-gray-700">
      <BreadcrumbItem href="/">Acceuil</BreadcrumbItem>
      {BreadcrumbItems.map((item) => (
        <BreadcrumbItem key={item} href={`/${item}`}>
          {" "}
          {item}{" "}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}
