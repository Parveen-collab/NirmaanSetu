import React from "react";
import EmployeeCardSkeleton from "@/src/components/common/skeletons/EmployeeCardSkeleton";

export default function EmployeeGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <EmployeeCardSkeleton key={index} />
      ))}
    </div>
  );
}