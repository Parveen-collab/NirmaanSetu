"use client"
import Button from '@/src/components/ui/Button'
import SuccessModal from '@/src/components/ui/SuccessModal'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const Payment = () => {
  const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false)
  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
      <h1>
        Welcome to Payment Page.
      </h1>
      <Button onClick={() => {setShowSuccess(true)}}>
        Pay Now
      </Button>

      {/* Paymnet Done Success Modal */}
      <SuccessModal
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
        }}
        title="Payment Done"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Payment Done successfully 🎉
        </p>

        <Button
          variant="success"
          onClick={() => {
            setShowSuccess(false);
            router.push("/dashboard/shop")
          }}
        >
          Ok
        </Button>
      </SuccessModal>
    </div>
  )
}

export default Payment