'use client'

import Button from "@/src/components/common/Button"

export default function CallToAction() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4 text-primary">
        Start Working, Hiring, or Selling — All in One Platform
      </h2>

      <p className="text-muted mb-8 max-w-2xl mx-auto">
        NirmaanSetu helps workers find jobs, contractors hire faster,
        and suppliers reach verified buyers — with complete transparency.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Button href="/home/login">
          Find Work
        </Button>

        <Button href="/home/login">
          Hire Skilled Workers
        </Button>

        <Button href="/home/login">
          Sell Construction Materials
        </Button>
      </div>

      <p className="text-xs text-muted mt-6">
        Free to join • No middlemen • Transparent process
      </p>
    </section>
  )
}
