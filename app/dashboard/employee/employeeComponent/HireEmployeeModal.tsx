'use client'

import Button from '@/src/components/ui/Button'
import SuccessModal from '@/src/components/ui/SuccessModal'
import { X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from "next/navigation";


interface Props {
  onClose?: () => void
}

export default function HireEmployeeModal({ onClose }: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const handleSendHireRequest = () => {
    // 👉 call API here if needed
    // await sendHireRequest();

    // open success modal
    setIsSuccessOpen(true);
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-zinc-900 p-6 animate-fade">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-white"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <h2 className="text-xl font-bold text-primary mb-2">
          Hire This Worker
        </h2>
        <p className="text-sm text-muted mb-6">
          Share your work details. The worker will contact you if interested.
        </p>

        {/* Form */}
        <div className="space-y-4">

          <input
            type="text"
            placeholder="Your Name / Company Name"
            className="w-full rounded-lg border px-4 py-3 bg-background
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="tel"
            placeholder="Your Contact Number"
            className="w-full rounded-lg border px-4 py-3 bg-background
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <input
            type="text"
            placeholder="Work Location"
            className="w-full rounded-lg border px-4 py-3 bg-background
                       focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="grid grid-cols-2 gap-3">
            <input
              type="number"
              placeholder="Duration (days)"
              className="w-full rounded-lg border px-4 py-3"
            />
            <input
              type="number"
              placeholder="Daily Wage (₹)"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>

          <textarea
            placeholder="Brief work description (optional)"
            rows={3}
            className="w-full rounded-lg border px-4 py-3 resize-none"
          />
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-3">
          <Button onClick={handleSendHireRequest}>
            Send Hire Request
          </Button>

          <button
            onClick={onClose}
            className="w-full text-sm text-muted hover:underline"
          >
            Cancel
          </button>
        </div>

      </div>

      <SuccessModal
        open={isSuccessOpen}
        onClose={() => {
          setIsSuccessOpen(false)
        }}
        title="Hire request sent."
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          HIRE request sent successfully 🎉
        </p>

        <Button
          variant="success"
          onClick={() => {
            router.push("/dashboard/employee");
          }}
        >
          Go to Employee
        </Button>
      </SuccessModal>
    </div>

  )
}
