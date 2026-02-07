'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@/src/components/features/Button'
import SuccessModal from '@/src/components/features/SuccessModal'

const Payment = () => {
  const router = useRouter()
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black px-4">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
          Payment
        </h1>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Click below to complete your payment
        </p>

        <Button
          variant="primary"
          onClick={() => setShowSuccess(true)}
          disabled={showSuccess}
        >
          Pay Now
        </Button>
      </div>

      {/* Payment Success Modal */}
      <SuccessModal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Payment Done"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Payment completed successfully 🎉
        </p>

        <Button
          variant="success"
          onClick={() => {
            setShowSuccess(false)
            router.push('/dashboard/shop')
          }}
          className="w-full"
        >
          OK
        </Button>
      </SuccessModal>
    </div>
  )
}

export default Payment
