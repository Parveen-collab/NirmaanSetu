"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Share2, Info, Briefcase } from "lucide-react";
import Button from "@/src/components/common/Button";
import ShareModal from "@/src/components/features/ShareModal";
import SearchBar from "@/src/components/features/SearchBar";

interface Employer {
  id: number;
  name: string;
  category: string;
  company: string;
  location: string;
  photo: string;
}

const employers: Employer[] = [
  {
    id: 1,
    name: "Sharma Constructions",
    category: "Building Contractor",
    company: "Residential Projects",
    location: "Patna, India",
    photo: "/employers/employer1.jpg",
  },
  {
    id: 2,
    name: "Verma Infra Ltd.",
    category: "Infrastructure",
    company: "Highway Development",
    location: "Ranchi, India",
    photo: "/employers/employer2.jpg",
  },
  {
    id: 3,
    name: "Singh Builders",
    category: "Commercial Projects",
    company: "Mall & Office Spaces",
    location: "Delhi, India",
    photo: "/employers/employer3.jpg",
  },
  {
    id: 4,
    name: "Singh Builders",
    category: "Commercial Projects",
    company: "Mall & Office Spaces",
    location: "Delhi, India",
    photo: "/employers/employer3.jpg",
  },
];

export default function EmployerPage() {
  const [openModal, setOpenModal] = useState<
    "apply" | "material" | "share" | null
  >(null);
  return (
    <div className="bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Employers
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Find project owners and companies hiring workers
        </p>

        {/* Search */}
        <SearchBar />
      </div>

      {/* Employer Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {employers.map((emp) => (
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
              <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <Briefcase size={16} />
                {emp.company}
              </p>
              <p className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                <MapPin size={16} />
                {emp.location}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button href="/dashboard/employer/post-work">
                Post Work
              </Button>

              <Button onClick={() => setOpenModal("share")}>
                <Share2 size={16} />
              </Button>

              <Button href="/dashboard/employer/employer-details">
                <Info size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>
      {openModal === "share" && (
        <ShareModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
}
