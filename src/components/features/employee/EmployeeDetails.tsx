'use client'

import Button from '@/src/components/common/Button'
import ShareModal from '@/src/components/features/ShareModal'
import {
  MapPin,
  Phone,
  Briefcase,
  Star,
  Calendar,
  BadgeCheck,
  UserPlus,
  Share2,
} from 'lucide-react'
import HireEmployeeModal from '@/src/components/features/employee/HireEmployeeModal'
import { useState } from 'react'

interface EmployeeDetailsProps {
  employeeId: string
}

export default function EmployeeDetails({ employeeId }: EmployeeDetailsProps) {
  const [showHireModal, setShowHireModal] = useState(false)
  const [openModal, setOpenModal] = useState<'share' | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        <section className="flex gap-6 border rounded-2xl p-6">
          <div className="w-28 h-28 rounded-full bg-zinc-200 flex items-center justify-center text-xl font-semibold">
            RK
          </div>

          <div>
            <h1 className="text-2xl font-bold text-primary">
              Rakesh Kumar
            </h1>
            <p className="text-sm text-muted">Employee ID: {employeeId}</p>

            <p className="flex items-center gap-2 text-sm">
              <Briefcase size={16} /> Mason
            </p>
            <p className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> Patna, Bihar
            </p>
            <p className="flex items-center gap-2 text-sm">
              <Calendar size={16} /> 8 Years Experience
            </p>
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <BadgeCheck size={16} /> Aadhaar Verified
            </div>
          </div>

          <a href="tel:9876543210">
            <Button>
              <Phone size={16} /> Call Now
            </Button>
          </a>
        </section>

        <section className="border rounded-2xl p-6">
          <h2 className="font-semibold mb-2">Ratings</h2>
          <div className="flex gap-1 text-yellow-500">
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </div>
        </section>
      </div>

      <div className="mt-5 flex justify-between">
        <Button onClick={() => setShowHireModal(true)}>
          <UserPlus size={16} /> Hire
        </Button>

        <Button onClick={() => setOpenModal("share")}>
          <Share2 size={16} />
        </Button>
      </div>

      {openModal && <ShareModal onClose={() => setOpenModal(null)} />}
      {showHireModal && (
        <HireEmployeeModal onClose={() => setShowHireModal(false)} />
      )}
    </div>
  )
}
