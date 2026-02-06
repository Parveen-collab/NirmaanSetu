'use client'

import LastUpdated from '@/src/components/ui/LastUpdated'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background text-foreground px-4 py-10">
            <div className="mx-auto max-w-4xl space-y-6">

                <h1 className="text-3xl font-bold text-primary">
                    Privacy Policy
                </h1>

                <LastUpdated/>

                <p>
                    Welcome to <strong>NirmaanSetu</strong>. Your privacy is important to us.
                    This Privacy Policy explains how we collect, use, and protect your information
                    when you use our platform.
                </p>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">1. Information We Collect</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>Personal details such as name and phone number</li>
                        <li>Location details for work matching</li>
                        <li>Usage data to improve our services</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
                    <ul className="list-disc pl-6 space-y-1">
                        <li>To connect workers and employers</li>
                        <li>To communicate important updates</li>
                        <li>To improve platform performance and security</li>
                    </ul>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">3. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your personal data.
                        However, no method of transmission over the internet is 100% secure.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">4. Third-Party Services</h2>
                    <p>
                        We may use trusted third-party services for analytics, notifications,
                        and infrastructure. These services follow their own privacy policies.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">5. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your personal information.
                        You may contact us for any privacy-related concerns.
                    </p>
                </section>

                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">6. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at:
                        <br />
                        <span className="font-medium">support@nirmaansetu.com</span>
                    </p>
                </section>

            </div>
        </div>
    )
}

export default PrivacyPolicy
