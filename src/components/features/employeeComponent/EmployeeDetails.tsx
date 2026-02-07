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
import HireEmployeeModal from './HireEmployeeModal'
import { useState } from 'react'

export default function EmployeeDetails() {
  const [showHireModal, setShowHireModal] = useState(false);
  const [openModal, setOpenModal] = useState<
    "apply" | "material" | "share" | null
  >(null);
  // function setShowHireModal(arg0: boolean): void {
  //   throw new Error('Function not implemented.')
  // }

  // function setOpenModal(arg0: string): void {
  //   throw new Error('Function not implemented.')
  // }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10 animate-fade">

        {/* ================= PROFILE HEADER ================= */}
        <section className="flex flex-col sm:flex-row gap-6 items-center sm:items-start border rounded-2xl p-6 shadow-sm">

          {/* Photo */}
          <div className="w-28 h-28 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl font-semibold">
            RK
          </div>

          {/* Basic Info */}
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-primary">
              Rakesh Kumar
            </h1>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Briefcase className="w-4 h-4 text-primary" />
              Mason • Brickwork Specialist
            </p>

            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-primary" />
              Patna, Bihar
            </p>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Calendar className="w-4 h-4 text-primary" />
              8 Years Experience
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm">
              <BadgeCheck className="w-4 h-4" />
              Aadhaar Verified
            </div>
          </div>

          {/* Call Button */}
          <a href="tel:9876543210">
            <button className="rounded-full bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition">
              <Phone className="inline w-4 h-4 mr-2" />
              Call Now
            </button>
          </a>
        </section>

        {/* ================= SKILLS ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Skills & Expertise
          </h2>

          <div className="flex flex-wrap gap-3">
            {['Brickwork', 'Plastering', 'Concrete Work', 'Site Setup'].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-4 py-2 text-sm"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* ================= AVAILABILITY ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Availability
          </h2>

          <p className="text-muted">
            Available from <strong>20 June 2025</strong> to{' '}
            <strong>30 September 2025</strong>
          </p>
        </section>

        {/* ================= WORK HISTORY ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Previous Work Experience
          </h2>

          <ul className="space-y-3 text-muted">
            <li>• Residential Building – Patna (6 months)</li>
            <li>• Commercial Complex – Gaya (1 year)</li>
            <li>• Road Construction – Bihta (3 months)</li>
          </ul>
        </section>

        {/* ================= RATINGS ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Ratings & Reviews
          </h2>

          <div className="flex items-center gap-2 text-yellow-500">
            <Star className="w-4 h-4 fill-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500" />
            <Star className="w-4 h-4 fill-yellow-500" />
            <Star className="w-4 h-4" />
            <span className="text-sm text-muted ml-2">
              4.0 (23 reviews)
            </span>
          </div>
        </section>

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
      </div>
      {openModal === "share" && (
        <ShareModal onClose={() => setOpenModal(null)} />
      )}

      {showHireModal && (
        <HireEmployeeModal onClose={() => setShowHireModal(false)} />
      )}
    </div>
  )
}
