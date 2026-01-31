"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Share2, UserPlus, Info } from "lucide-react";
import Button from "@/src/components/ui/Button";
import ShareModal from "@/src/components/ui/ShareModal";
import HireEmployeeModal from "@/app/dashboard/employee/employeeComponent/HireEmployeeModal";

interface Employee {
  id: number;
  name: string;
  category: string;
  specialization: string;
  experience: string;
  availability: "Available" | "Busy";
  photo: string;
}

const employees: Employee[] = [
  {
    id: 1,
    name: "Amit Kumar",
    category: "Electrician",
    specialization: "Industrial Wiring",
    experience: "5 Years",
    availability: "Available",
    photo: "/employees/emp1.jpg",
  },
  {
    id: 2,
    name: "Rahul Verma",
    category: "Plumber",
    specialization: "Pipeline Installation",
    experience: "7 Years",
    availability: "Busy",
    photo: "/employees/emp2.jpg",
  },
  {
    id: 3,
    name: "Suresh Singh",
    category: "Carpenter",
    specialization: "Modular Furniture",
    experience: "4 Years",
    availability: "Available",
    photo: "/employees/emp3.jpg",
  },
];

export default function EmployeePage() {
  const [showHireModal, setShowHireModal] = useState(false);
  const [openModal, setOpenModal] = useState<
    "apply" | "material" | "share" | null
  >(null);
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Employees
        </h1>

        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Search employee..."
            className="w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-2.5 pl-10 pr-4 text-sm text-zinc-900 dark:text-white outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
          />
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((emp) => (
          <div
            key={emp.id}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800">
                <Image
                  src={emp.photo}
                  alt={emp.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white">
                  {emp.name}
                </h3>
                <p className="text-sm text-zinc-500">{emp.category}</p>
              </div>
            </div>

            {/* Info */}
            <div className="mt-4 space-y-2 text-sm">
              <p>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Specialization:
                </span>{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                  {emp.specialization}
                </span>
              </p>
              <p>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Experience:
                </span>{" "}
                <span className="text-zinc-600 dark:text-zinc-400">
                  {emp.experience}
                </span>
              </p>
              <p>
                <span className="font-medium text-zinc-700 dark:text-zinc-300">
                  Availability:
                </span>{" "}
                <span
                  className={`ml-1 rounded-full px-2 py-0.5 text-xs font-medium ${emp.availability === "Available"
                    ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                    }`}
                >
                  {emp.availability}
                </span>
              </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button onClick={() => setShowHireModal(true)}>
                <UserPlus size={16} />
                Hire
              </Button>

              <Button onClick={() => setOpenModal("share")}>
                <Share2 size={16} />
              </Button>

              <Button href="/dashboard/employee/employee-details">
                <Info size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      {openModal === "share" && (
        <ShareModal onClose={() => setOpenModal(null)} />
      )}

      {showHireModal && (
        <HireEmployeeModal onClose={() => setShowHireModal(false)} />
      )}

    </div>
  );
}
