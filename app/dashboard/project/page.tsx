"use client";

import React from "react";
import { MapPin, Phone, Share2, Info, CalendarDays, IndianRupee, Package } from "lucide-react";
import Button from "@/src/components/ui/Button";

interface Project {
  id: number;
  category: string;
  days: string;
  wages: string;
  address: string;
  contact: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "Residential Building",
    days: "120 Days",
    wages: "₹800/day",
    address: "Kankarbagh, Patna",
    contact: "+91 98765 43210",
  },
  {
    id: 2,
    category: "Road Construction",
    days: "90 Days",
    wages: "₹900/day",
    address: "NH-33, Ranchi",
    contact: "+91 91234 56789",
  },
  {
    id: 3,
    category: "Commercial Complex",
    days: "150 Days",
    wages: "₹1000/day",
    address: "Noida सेक्टर 62",
    contact: "+91 99887 77665",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Projects
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Explore and apply for active construction projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition"
          >
            {/* Top Info */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-zinc-900 dark:text-white">
                {project.category}
              </h3>
            </div>

            {/* Project Details */}
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="flex items-center gap-2">
                <CalendarDays size={16} /> {project.days}
              </p>
              <p className="flex items-center gap-2">
                <IndianRupee size={16} /> {project.wages}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> {project.address}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} /> {project.contact}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex items-center justify-between gap-3">
              <Button>
                Apply
              </Button>
              {/* <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black py-2 text-sm font-medium hover:opacity-90 transition">
                Apply
              </button> */}

              <Button>
                <Share2 size={16} />
              </Button>
              {/* <button className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Share2 size={16} />
              </button> */}

              <Button href="/dashboard/project/work-details">
                <Info size={16} />
              </Button>
              {/* <button className="rounded-xl border border-zinc-200 dark:border-zinc-700 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Info size={16} />
              </button> */}
            </div>

            {/* Apply for Material */}
            <Button>
              <Package size={16} />
              Apply for Material
            </Button>
            {/* <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-300 dark:border-zinc-700 py-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              <Package size={16} />
              Apply for Material
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
}
