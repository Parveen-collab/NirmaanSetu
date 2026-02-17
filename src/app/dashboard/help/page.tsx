'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Mail, Phone } from 'lucide-react'
import Button from '@/src/components/common/Button'

const FAQS = [
  {
    question: 'How do I reset my password?',
    answer: 'Go to the Change Password page from your profile menu and follow the instructions.',
  },
  {
    question: 'How can I update my profile?',
    answer: 'Open the Profile page from the dashboard and edit your personal information.',
  },
  {
    question: 'How do I contact support?',
    answer: 'Use the contact form below or email us at support@nirmaansetu.com.',
  },
  {
    question: 'How can I submit feedback?',
    answer: 'Visit the Feedback page from the dashboard menu and submit your feedback.',
  },
]

const Help = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [search, setSearch] = useState('')

  const filteredFaqs = FAQS.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-zinc-50 dark:bg-black px-4 py-6">
      <div className="mx-auto max-w-4xl">

        {/* Title */}
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Help Center
        </h1>

        {/* Search */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search help topics..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-md border px-3 py-2 bg-white dark:bg-zinc-900
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* FAQ Section */}
        <div className="space-y-3 mb-8">
          {filteredFaqs.length === 0 && (
            <p className="text-center text-zinc-500">
              No results found.
            </p>
          )}

          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-lg border bg-white dark:bg-zinc-900"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between px-4 py-3 text-left font-medium"
                >
                  <span>{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-zinc-600 dark:text-zinc-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Contact Support */}
        <div className="rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow">
          <h2 className="text-lg font-semibold mb-4">
            Still need help?
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-5 w-5 text-blue-600" />
              <span>support@nirmaansetu.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>+91 98765 43210</span>
            </div>
          </div>

          <Button href="/dashboard/feedback">
            Send Feedback
          </Button>
        </div>

      </div>
    </div>
  )
}

export default Help
