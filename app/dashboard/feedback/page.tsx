'use client'

import React, { useState } from 'react'
import Button from '@/src/components/ui/Button'

const Feedback = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [rating, setRating] = useState<number | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!name || !email || !message || rating === null) {
      setError('All fields are required')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    try {
      setLoading(true)

      // 🔌 Replace with real API call
      await new Promise((res) => setTimeout(res, 1500))

      setSuccess('Thank you for your feedback!')
      setName('')
      setEmail('')
      setMessage('')
      setRating(null)
    } catch (err) {
      setError('Failed to submit feedback. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-lg rounded-xl border bg-white dark:bg-zinc-900 p-6 shadow">

        {/* Title */}
        <h1 className="text-xl font-semibold mb-4 text-center">
          Feedback
        </h1>

        {/* Feedback Messages */}
        {error && (
          <div className="mb-3 rounded-md bg-red-50 dark:bg-red-900/30 p-3 text-sm text-red-600 dark:text-red-400">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-3 rounded-md bg-green-50 dark:bg-green-900/30 p-3 text-sm text-green-600 dark:text-green-400">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-md border px-3 py-2 bg-white dark:bg-zinc-800
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Your Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-md border px-3 py-2 bg-white dark:bg-zinc-800
                focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setRating(star)}
                  className={`h-10 w-10 rounded-full border flex items-center justify-center text-sm font-medium transition
                    ${
                      rating === star
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                >
                  {star}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-md border px-3 py-2 bg-white dark:bg-zinc-800
                focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Write your feedback..."
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            fullWidth
            loading={loading}
          >
            Submit Feedback
          </Button>

        </form>

      </div>
    </div>
  )
}

export default Feedback
