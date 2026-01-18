'use client'

import { useState } from 'react'

export default function Register() {
  const [role, setRole] = useState<'employee' | 'employer' | 'shop' | ''>('')

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-background">

      {/* ================= LEFT SIDE (INFO) ================= */}
      <div className="hidden md:flex flex-col justify-center px-12 bg-primary text-white">
        <h1 className="text-4xl font-bold mb-6">NirmaanSetu</h1>

        <p className="text-lg mb-8">
          A single platform for construction workers, contractors,
          and material suppliers.
        </p>

        <ul className="space-y-4 text-sm">
          <li>✔ Employees can find jobs nearby</li>
          <li>✔ Employers can post and manage jobs</li>
          <li>✔ Shopkeepers can sell construction materials</li>
        </ul>
      </div>

      {/* ================= RIGHT SIDE (FORM) ================= */}
      <div className="flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-lg bg-white dark:bg-zinc-900 rounded-2xl shadow-md p-8 animate-fade">

          <h2 className="text-2xl font-bold text-primary mb-2">
            Create Account
          </h2>
          <p className="text-sm text-muted mb-6">
            Register to get started with NirmaanSetu
          </p>

          {/* ================= ROLE SELECTION ================= */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">
              Select Role
            </label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Employee', value: 'employee' },
                { label: 'Employer', value: 'employer' },
                { label: 'Shop', value: 'shop' },
              ].map((r) => (
                <button
                  key={r.value}
                  onClick={() => setRole(r.value as any)}
                  type="button"
                  className={`rounded-lg border py-2 text-sm font-medium transition
                    ${
                      role === r.value
                        ? 'bg-primary text-white border-primary'
                        : 'border-zinc-300 hover:border-primary'
                    }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* ================= COMMON FIELDS ================= */}
          <div className="space-y-4">

            <input
              type="tel"
              placeholder="Mobile Number (OTP verified)"
              className="w-full rounded-lg border px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full rounded-lg border px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="text"
              placeholder="Aadhaar Number"
              className="w-full rounded-lg border px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="text"
              placeholder="Current Location / Address"
              className="w-full rounded-lg border px-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />

            <input
              type="file"
              className="w-full rounded-lg border px-4 py-3 bg-background"
            />
            <p className="text-xs text-muted">
              Upload live photo / ID photo
            </p>
          </div>

          {/* ================= EMPLOYEE FIELDS ================= */}
          {role === 'employee' && (
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold">Employee Details</h3>

              <input
                type="text"
                placeholder="Service Category (e.g. Mason)"
                className="w-full rounded-lg border px-4 py-3"
              />

              <input
                type="text"
                placeholder="Service Specialty"
                className="w-full rounded-lg border px-4 py-3"
              />

              <input
                type="number"
                placeholder="Experience (in years)"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
          )}

          {/* ================= EMPLOYER FIELDS ================= */}
          {role === 'employer' && (
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold">Employer Details</h3>

              <input
                type="text"
                placeholder="Company / Contractor Name"
                className="w-full rounded-lg border px-4 py-3"
              />

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  className="w-full rounded-lg border px-4 py-3"
                />
                <input
                  type="date"
                  className="w-full rounded-lg border px-4 py-3"
                />
              </div>

              <p className="text-xs text-muted">
                Availability controls profile visibility in search
              </p>
            </div>
          )}

          {/* ================= SHOP FIELDS ================= */}
          {role === 'shop' && (
            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-semibold">Shop Details</h3>

              <input
                type="text"
                placeholder="Shop Name"
                className="w-full rounded-lg border px-4 py-3"
              />

              <input
                type="text"
                placeholder="Shop Category"
                className="w-full rounded-lg border px-4 py-3"
              />

              <select className="w-full rounded-lg border px-4 py-3">
                <option>Retail</option>
                <option>Bulk</option>
                <option>Retail & Bulk</option>
              </select>

              <input
                type="text"
                placeholder="Shop Address"
                className="w-full rounded-lg border px-4 py-3"
              />
            </div>
          )}

          {/* ================= SUBMIT ================= */}
          <button
            disabled={!role}
            className="mt-8 w-full rounded-full bg-primary py-3 text-white font-semibold
                       hover:opacity-90 transition disabled:opacity-50"
          >
            Register
          </button>

        </div>
      </div>
    </div>
  )
}
