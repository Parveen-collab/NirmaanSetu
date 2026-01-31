'use client'

import Link from 'next/link'
import { MapPin, Briefcase, Phone, Calendar, Package, Info, Share2 } from 'lucide-react'
import Button from '@/src/components/ui/Button'
import ApplyModal from '@/src/components/ui/ApplyModal'
import MaterialApplyModal from './MaterialApplyModal'
import ShareModal from '@/src/components/ui/ShareModal'
import { useState } from 'react'

export default function WorkDetail() {
  const [openModal, setOpenModal] = useState<
    "apply" | "material" | "share" | null
  >(null);
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10 animate-fade">

        {/* ================= WORK DETAILS ================= */}
        <section className="border rounded-2xl p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Mason Required for House Construction
          </h1>

          <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted mb-6">
            <p className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Skill: Mason
            </p>
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Location: Raipur, Chhattisgarh
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Duration: 15 Days
            </p>
            <p>
              <strong>Payment:</strong> ₹900 / Day
            </p>
          </div>

          <p className="text-muted leading-7 mb-6">
            We are looking for experienced masons for residential house
            construction work. Workers should have basic tools and prior
            experience in brickwork and plastering.
          </p>

          {/* Contractor Info */}
          <div className="border-t pt-4 space-y-2">
            <p><strong>Posted by:</strong> Sharma Contractors</p>
            <p><strong>Work Type:</strong> Full-time</p>
            <p><strong>Start Date:</strong> Immediate</p>
          </div>

          {/* Call Button */}
          <a href="tel:9876543210">
            <button className="mt-6 w-full rounded-full bg-primary py-3 text-red font-semibold hover:opacity-90 transition cursor-pointer">
              📞 Call Now – 9876543210
            </button>
          </a>
        </section>

        {/* ================= OTHER WORKS ================= */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">
            Other Works by This Contractor
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <Link key={index} href="/jobs/another-id">
                <div className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer">
                  <h3 className="font-semibold">
                    Electrician Required for Wiring
                  </h3>
                  <p className="text-sm text-muted">
                    Raipur • ₹1,100 / Day
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
      {/* Actions */}
      <div className="mt-5 flex items-center justify-between gap-3">
        <Button onClick={() => setOpenModal("apply")}>
          Apply
        </Button>

        <Button onClick={() => setOpenModal("share")}>
          <Share2 size={16} />
        </Button>
        {/* Apply for Material */}
        <Button onClick={() => setOpenModal("material")}>
          <Package size={16} />
          Apply for Material
        </Button>
      </div>

      {/* Modals */}
      {openModal === "apply" && (
        <ApplyModal onClose={() => setOpenModal(null)} />
      )}

      {openModal === "material" && (
        <MaterialApplyModal onClose={() => setOpenModal(null)} />
      )}

      {openModal === "share" && (
        <ShareModal onClose={() => setOpenModal(null)} />
      )}
    </div>
  )
}
