'use client'

import {
  Search,
  MapPin,
  IndianRupee,
  Store,
  Package,
} from 'lucide-react'
import Link from 'next/link'

export default function BuyMaterials() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-8">
      <div className="max-w-6xl mx-auto space-y-8 animate-fade">

        {/* ================= HEADER ================= */}
        <div>
          <h1 className="text-3xl font-bold text-primary">
            Buy Construction Materials
          </h1>
          <p className="text-sm text-muted mt-1">
            Find verified shops and buy construction materials near you.
          </p>
        </div>

        {/* ================= SEARCH & FILTER ================= */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3.5 w-4 h-4 text-muted" />
            <input
              type="text"
              placeholder="Search by material, shop name, or category"
              className="w-full rounded-lg border pl-9 pr-4 py-3 bg-background focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <select className="rounded-lg border px-4 py-3">
            <option>All Locations</option>
            <option>Patna</option>
            <option>Ranchi</option>
            <option>Noida</option>
          </select>

          <select className="rounded-lg border px-4 py-3">
            <option>All Categories</option>
            <option>Cement</option>
            <option>Steel</option>
            <option>Bricks</option>
            <option>Sand</option>
            <option>Paint</option>
          </select>
        </div>

        {/* ================= MATERIAL / SHOP LIST ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* CARD */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="border rounded-2xl p-5 shadow-sm hover:shadow-md transition bg-white dark:bg-zinc-900"
            >
              {/* Shop Info */}
              <div className="mb-3">
                <p className="flex items-center gap-2 text-sm text-muted">
                  <Store className="w-4 h-4 text-primary" />
                  Mahadev Suppliers
                </p>
                <p className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="w-4 h-4 text-primary" />
                  Kankarbagh, Patna
                </p>
              </div>

              {/* Product */}
              <h3 className="text-lg font-semibold mb-1">
                Ultratech Cement
              </h3>

              <p className="flex items-center gap-1 font-semibold text-primary mb-3">
                <IndianRupee className="w-4 h-4" />
                410 / bag
              </p>

              <p className="text-sm text-muted mb-4">
                Bulk & retail available • Delivery supported
              </p>

              {/* Actions */}
              <div className="flex gap-3">
                <button className="flex-1 rounded-full bg-primary py-2 text-white font-semibold hover:opacity-90 transition">
                  Buy Now
                </button>

                <Link
                  href="/shops/1"
                  className="flex items-center justify-center rounded-full border px-4 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                >
                  <Package className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ================= EMPTY STATE (OPTIONAL) ================= */}
        {/* 
        <div className="text-center py-20 text-muted">
          No materials found in your area.
        </div>
        */}

      </div>
    </div>
  )
}
