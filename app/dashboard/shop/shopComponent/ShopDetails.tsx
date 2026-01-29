'use client'

import {
  MapPin,
  Phone,
  Store,
  BadgeCheck,
  Package,
  IndianRupee,
} from 'lucide-react'

export default function ShopDetails() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="max-w-4xl mx-auto space-y-10 animate-fade">

        {/* ================= SHOP HEADER ================= */}
        <section className="flex flex-col sm:flex-row gap-6 items-center sm:items-start border rounded-2xl p-6 shadow-sm">

          {/* Shop Logo */}
          <div className="w-28 h-28 rounded-xl bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xl font-semibold">
            MS
          </div>

          {/* Basic Info */}
          <div className="flex-1 space-y-2">
            <h1 className="text-2xl font-bold text-primary">
              Mahadev Suppliers
            </h1>

            <p className="flex items-center gap-2 text-sm text-muted">
              <Store className="w-4 h-4 text-primary" />
              Construction Material Store
            </p>

            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="w-4 h-4 text-primary" />
              Kankarbagh, Patna, Bihar
            </p>

            <div className="flex items-center gap-2 text-green-600 text-sm">
              <BadgeCheck className="w-4 h-4" />
              Aadhaar & Shop Verified
            </div>

            <p className="text-sm text-muted">
              Sales Type: <strong>Retail & Bulk</strong>
            </p>
          </div>

          {/* Call Button */}
          <a href="tel:9123456789">
            <button className="rounded-full bg-primary px-6 py-3 text-white font-semibold hover:opacity-90 transition">
              <Phone className="inline w-4 h-4 mr-2" />
              Call Now
            </button>
          </a>
        </section>

        {/* ================= ABOUT SHOP ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            About the Shop
          </h2>

          <p className="text-muted leading-7">
            Mahadev Suppliers is a trusted construction material store serving
            Patna and nearby regions for over 10 years. We supply high-quality
            materials at competitive prices with timely delivery.
          </p>
        </section>

        {/* ================= MATERIAL CATEGORIES ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Materials Available
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'Cement',
              'Steel',
              'Bricks',
              'Sand',
              'Gravel',
              'Paint',
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border px-4 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ================= PRODUCT LIST ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Products & Pricing
          </h2>

          <div className="space-y-4">
            {[
              { name: 'Ultratech Cement', price: '₹410 / bag' },
              { name: 'TMT Steel Rod (12mm)', price: '₹62 / kg' },
              { name: 'Red Bricks', price: '₹8 / piece' },
            ].map((product, i) => (
              <div
                key={i}
                className="flex items-center justify-between border rounded-xl p-4"
              >
                <div>
                  <p className="font-medium">{product.name}</p>
                  <p className="text-sm text-muted">
                    Bulk discounts available
                  </p>
                </div>

                <div className="flex items-center gap-2 font-semibold">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  {product.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= OTHER SHOPS ================= */}
        <section className="border rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-primary">
            Other Shops Nearby
          </h2>

          <div className="space-y-4">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="border rounded-xl p-4 hover:shadow-md transition cursor-pointer"
              >
                <p className="font-semibold">
                  Om Sai Construction Store
                </p>
                <p className="text-sm text-muted">
                  Patna • Retail & Bulk
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
