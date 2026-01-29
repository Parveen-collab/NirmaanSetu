'use client'

import {
  MapPin,
  Phone,
  Briefcase,
  Calendar,
  BadgeCheck,
  Building2,
} from 'lucide-react'
import Link from 'next/link'

export default function EmployerDetails() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10 animate-fade">

        {/* ================= PROFILE HEADER ================= */}
        <section className="flex flex-col sm:flex-row gap-6 items-center sm:items-start border rounded-2xl p-6 shadow-sm">

          {/* Logo / Avatar */}
          <div className="w-28 h-28 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl font-semibold">
            SC
          </div>

          {/* Basic Info */}
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-primary">
              Sharma Contractors
            </h1>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Building2 className="w-4 h-4 text-primary" />
              Contractor • Residential & Commercial
            </p>

            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-primary" />
              Patna, Bihar
            </p>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Calendar className="w-4 h-4 text-primary" />
              Available: 20 June 2025 – 30 Sept 2025
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm">
              <BadgeCheck className="w-4 h-4" />
              Aadhaar & Business Verified
            </div>
          </div>

          {/* Call Button */}
          <a href="tel:9121912165">
            <button className="rounded-full bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition">
              <Phone className="inline w-4 h-4 mr-2" />
              Call Now
            </button>
          </a>
        </section>

        {/* ================= ABOUT CONTRACTOR ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            About Contractor
          </h2>

          <p className="text-muted leading-7">
            Sharma Contractors is a well-established construction firm with over
            15 years of experience in residential, commercial, and infrastructure
            projects. Known for timely delivery, skilled workforce management,
            and quality construction standards.
          </p>
        </section>

        {/* ================= EXPERTISE ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Areas of Expertise
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Residential Buildings',
              'Commercial Complexes',
              'Road Construction',
              'Renovation Projects',
              'Labour Management',
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ================= ACTIVE WORKS ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Active & Recent Projects
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <Link
                key={i}
                href="/jobs/sample-id"
                className="block rounded-xl border p-4 hover:shadow-md transition"
              >
                <h3 className="font-semibold">
                  Residential Building Construction
                </h3>
                <p className="text-sm text-muted">
                  Patna • 120 Days • ₹900/day
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ================= HIRING INFO ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Hiring Information
          </h2>

          <ul className="space-y-3 text-muted">
            <li>• Hires skilled and unskilled labour</li>
            <li>• Payment on daily basis</li>
            <li>• Accommodation: Site-based (if applicable)</li>
            <li>• Safety equipment provided</li>
          </ul>
        </section>

      </div>
    </div>
  )
}
