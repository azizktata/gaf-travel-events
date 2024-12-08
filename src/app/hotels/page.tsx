import HotelCard from "@/components/ui/hotelCard";
import React from "react";
import BreadCrumbs from "@/components/ui/breadCrumbs";
import FilterSelect from "@/components/ui/filterSelect";

export default function page() {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto ">
      <div className="my-8">
        <BreadCrumbs BreadcrumbItems={["hotels"]} />
      </div>
      <div className="mb-8">
        <FilterSelect type="hotel" options={["Hotel HalaL", "Hotel Ysidi"]} />
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
          <HotelCard />
        </div>
      </div>
    </div>
  );
}
