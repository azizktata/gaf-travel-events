import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto mt-8 lg:mt-16 min-h-[100vh]">
      <div className="my-8">
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="mb-8 flex gap-2">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>

      <div className="flex gap-2 mx-auto mb-8">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      </div>

      <div className=" mx-auto flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[150px]" />
        </div>
      </div>
    </div>
  );
}
