'use client'

import LastUpdated from '@/src/components/ui/LastUpdated'
import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">

        <h1 className="text-3xl font-bold text-primary">
          Refund Policy
        </h1>

        <LastUpdated/>

        <p>
          This Refund Policy outlines the conditions under which refunds may be
          provided on <strong>NirmaanSetu</strong>. Please read this policy carefully
          before making any payments on the platform.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">1. No Guaranteed Refunds</h2>
          <p>
            NirmaanSetu primarily acts as a platform to connect employers and workers.
            We do not guarantee refunds for any services, wages, or agreements made
            between users.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2. Platform Fees (If Applicable)</h2>
          <p>
            Any platform or service fees charged by NirmaanSetu are generally
            non-refundable unless explicitly stated otherwise at the time of payment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3. Duplicate or Erroneous Payments</h2>
          <p>
            In case of duplicate payments or technical errors, users may be eligible
            for a refund after verification by our support team.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4. Refund Request Process</h2>
          <p>
            To request a refund, users must contact our support team within a
            reasonable time frame and provide necessary transaction details.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">5. Processing Time</h2>
          <p>
            Approved refunds will be processed within 7–10 business days, depending
            on the payment method used.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">6. Policy Changes</h2>
          <p>
            NirmaanSetu reserves the right to update or modify this Refund Policy
            at any time without prior notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">7. Contact Us</h2>
          <p>
            For refund-related questions, please contact us at:
            <br />
            <span className="font-medium">support@nirmaansetu.com</span>
          </p>
        </section>

      </div>
    </div>
  )
}

export default RefundPolicy
