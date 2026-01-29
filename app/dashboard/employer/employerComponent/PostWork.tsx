'use client'

import { CalendarDays, MapPin, IndianRupee, Briefcase } from 'lucide-react'

export default function PostWork() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-3xl mx-auto animate-fade">

        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Post a New Work
          </h1>
          <p className="text-sm text-muted mt-1">
            Create a job to hire skilled workers for your construction project.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-6 shadow-sm space-y-6">

          {/* Work Title */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Work Title
            </label>
            <input
              type="text"
              placeholder="e.g. Mason Required for Residential Building"
              className="w-full rounded-lg border px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          {/* Category & Skill */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Work Category
              </label>
              <select className="w-full rounded-lg border px-4 py-3">
                <option>Residential Building</option>
                <option>Commercial Construction</option>
                <option>Road Construction</option>
                <option>Renovation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Required Skill
              </label>
              <select className="w-full rounded-lg border px-4 py-3">
                <option>Mason</option>
                <option>Electrician</option>
                <option>Plumber</option>
                <option>Helper</option>
              </select>
            </div>
          </div>

          {/* Duration & Wage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Duration (Days)
              </label>
              <div className="relative">
                <CalendarDays className="absolute left-3 top-3.5 w-4 h-4 text-muted" />
                <input
                  type="number"
                  placeholder="e.g. 120"
                  className="w-full rounded-lg border pl-9 pr-4 py-3"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Daily Wage (₹)
              </label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-3.5 w-4 h-4 text-muted" />
                <input
                  type="number"
                  placeholder="e.g. 900"
                  className="w-full rounded-lg border pl-9 pr-4 py-3"
                />
              </div>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Work Location
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="e.g. Kankarbagh, Patna"
                className="w-full rounded-lg border pl-9 pr-4 py-3"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Work Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe the work, requirements, tools, accommodation, etc."
              className="w-full rounded-lg border px-4 py-3 resize-none"
            />
          </div>

          {/* Material Requirement */}
          <div className="rounded-xl border border-dashed p-4">
            <h3 className="text-sm font-semibold mb-2 flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-primary" />
              Material Requirement (Optional)
            </h3>

            <textarea
              rows={2}
              placeholder="e.g. Cement, Steel, Sand (if you want suppliers to respond)"
              className="w-full rounded-lg border px-4 py-2 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            className="w-full rounded-full bg-primary py-3 text-white font-semibold
                       hover:opacity-90 transition"
          >
            Post Work
          </button>
        </div>
      </div>
    </div>
  )
}
