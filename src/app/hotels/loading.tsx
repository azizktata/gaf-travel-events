import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="w-[90%] lg:w-[70%] mx-auto ">
      <div className="my-8">
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="mb-8 flex gap-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>

      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
