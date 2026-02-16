'use client'

import LastUpdated from '@/src/components/features/LastUpdated'
import React from 'react'

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-10">
      <div className="mx-auto max-w-4xl space-y-6">

        <h1 className="text-3xl font-bold text-primary">
          Terms & Conditions
        </h1>

        <LastUpdated/>

        <p>
          Welcome to <strong>NirmaanSetu</strong>. By accessing or using our platform,
          you agree to comply with and be bound by the following terms and conditions.
        </p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By registering, accessing, or using this platform, you agree to be legally
            bound by these Terms & Conditions.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and up-to-date information</li>
            <li>Do not misuse the platform or post false information</li>
            <li>Respect other users and comply with applicable laws</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3. Employer & Worker Interaction</h2>
          <p>
            NirmaanSetu acts as a facilitator connecting employers and workers.
            We are not responsible for any agreements, payments, or disputes
            between users.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4. Payments & Transactions</h2>
          <p>
            Any payments or wage agreements are strictly between the employer and
            the worker. NirmaanSetu does not guarantee payments or employment.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">5. Account Termination</h2>
          <p>
            We reserve the right to suspend or terminate accounts that violate
            these terms without prior notice.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">6. Limitation of Liability</h2>
          <p>
            NirmaanSetu shall not be liable for any direct or indirect damages
            arising from the use of this platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">7. Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time.
            Continued use of the platform indicates acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">8. Contact Information</h2>
          <p>
            For any questions regarding these terms, please contact us at:
            <br />
            <span className="font-medium">support@nirmaansetu.com</span>
          </p>
        </section>

      </div>
    </div>
  )
}

export default TermsConditions
