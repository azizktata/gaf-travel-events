"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@nextui-org/button";
import { RefreshCcw } from "lucide-react";

export default function FilterSelect({
  options,
  type = "voyage",
}: {
  options: string[];
  type: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleChange(e: any) {
    const name = e.target.name;
    const value = e.target.value;
    if (value !== 0) {
      router.push(pathname + "?" + createQueryString(name, value));
    }
    if (value == 0) {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(name);
      router.push(pathname + "?" + params.toString());
    }
  }
  const currentType = searchParams.get("type") || "";

  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-4">
        {type === "voyage" ? (
          <select
            onChange={handleChange}
            name="type"
            value={currentType}
            className=" border border-gray-300 rounded-md p-2  "
          >
            <option value={0}>tous les voyages</option>
            <option value="voyage-organise">Organisés</option>
            <option value="voyage-carte">A la carte</option>
          </select>
        ) : (
          <select
            onChange={handleChange}
            name="etoile"
            className=" border border-gray-300 rounded-md p-2  "
          >
            <option value={0}>tous les hotels</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        )}

        <select
          className=" border border-gray-300 rounded-md p-2  "
          onChange={handleChange}
          name="destination"
        >
          <option value={0}>tous les destinations</option>
          {options?.map((destination: string) => (
            <option key={destination} value={destination}>
              {destination}
            </option>
          ))}
        </select>
      </div>
      <Button variant="light" onClick={() => router.push(pathname)}>
        {" "}
        <RefreshCcw size={16} />{" "}
      </Button>
    </div>
  );
}
