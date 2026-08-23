"use client";

import Button from "@/src/components/common/Button";
import ShareModal from "@/src/components/features/ShareModal";
import {
  MapPin,
  Phone,
  Briefcase,
  Star,
  Calendar,
  BadgeCheck,
  UserPlus,
  Share2,
} from "lucide-react";
import HireEmployeeModal from "@/src/components/features/employee/HireEmployeeModal";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/src/services/userService";

interface EmployeeDetailsProps {
  employeeId: string;
}

export default function EmployeeDetails({
  employeeId,
}: EmployeeDetailsProps) {
  const [showHireModal, setShowHireModal] = useState(false);
  const [openModal, setOpenModal] = useState<"share" | null>(null);

  const {
    data: employee,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", employeeId],
    queryFn: () => getUserById(employeeId),
    enabled: !!employeeId,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading employee...</p>
      </div>
    );
  }

  if (isError || !employee) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Employee not found.</p>
      </div>
    );
  }

  const currentAddress = employee.addresses?.find(
    (address) => address.type === "CURRENT"
  );

  const experience =
    employee.employeeProfile?.experienceYears ?? 0;

  const serviceCategory =
    employee.employeeProfile?.serviceCategory ?? "Employee";

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Employee Profile */}
        <section className="flex gap-6 border rounded-2xl p-6">

          {/* Profile Image */}
          <div className="w-28 h-28 rounded-full bg-zinc-200 flex items-center justify-center text-xl font-semibold overflow-hidden">

            {employee.profileImageUrl ? (
              <img
                src={employee.profileImageUrl}
                alt={employee.name}
                className="w-full h-full object-cover"
              />
            ) : (
              employee.name
                .split(" ")
                .map((name) => name[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()
            )}

          </div>

          {/* Employee Information */}
          <div className="flex-1">

            <h1 className="text-2xl font-bold text-primary">
              {employee.name}
            </h1>

            <p className="text-sm text-muted">
              Employee ID: {employee.id}
            </p>

            <p className="flex items-center gap-2 text-sm">
              <Briefcase size={16} />
              {serviceCategory}
            </p>

            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} />

              {currentAddress
                ? `${currentAddress.district}, ${currentAddress.state}`
                : "Location unavailable"}
            </p>

            <p className="flex items-center gap-2 text-sm">
              <Calendar size={16} />

              {experience} Years Experience
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm">
              <BadgeCheck size={16} />
              Aadhaar Verified
            </div>

          </div>

          {/* Call */}
          <a href={`tel:${employee.phoneNumber}`}>
            <Button>
              <Phone size={16} />
              Call Now
            </Button>
          </a>

        </section>

        {/* Ratings */}
        <section className="border rounded-2xl p-6">

          <h2 className="font-semibold mb-2">
            Ratings
          </h2>

          <div className="flex gap-1 text-yellow-500">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </div>

        </section>

      </div>

      {/* Actions */}
      <div className="mt-5 flex justify-between">

        <Button onClick={() => setShowHireModal(true)}>
          <UserPlus size={16} />
          Hire
        </Button>

        <Button onClick={() => setOpenModal("share")}>
          <Share2 size={16} />
        </Button>

      </div>

      {/* Modals */}
      {openModal && (
        <ShareModal
          onClose={() => setOpenModal(null)}
        />
      )}

      {showHireModal && (
        <HireEmployeeModal
          onClose={() => setShowHireModal(false)}
        />
      )}

    </div>
  );
}