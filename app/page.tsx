'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Input from '@/src/components/ui/Input'
import Button from '@/src/components/ui/Button'
import Modal from '@/src/components/ui/SuccessModal'
import VerifyOtpModal from '@/src/components/ui/auth/VerifyOtpModal'

export default function MobileVerificationPage() {
  const router = useRouter()

  const [mobile, setMobile] = useState('')
  const [loading, setLoading] = useState(false)
  const [isMobileValid, setIsMobileValid] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showOtp, setShowOtp] = useState(false)

  const handleSendOtp = () => {
    setLoading(true)

    // Simulated API call
    setTimeout(() => {
      setLoading(false)
      setMobile('')
      setIsMobileValid(false)
      setShowSuccess(true)
    }, 1500)
  }

  return (
    <>
      {/* Main Page */}
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md dark:bg-zinc-900">
          <h1 className="mb-2 text-center text-2xl font-semibold dark:text-white">
            Mobile Verification
          </h1>

          <p className="mb-6 text-center text-sm text-zinc-500">
            Enter your mobile number to receive an OTP
          </p>

          <Input
            label="Mobile Number"
            validation="mobile"
            type="tel"
            placeholder="Enter mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            onValidityChange={setIsMobileValid}
          />

          <div className="mt-4">
            <Button
              loading={loading}
              disabled={!isMobileValid}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </div>
        </div>
      </div>

      {/* OTP Sent Success Modal */}
      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="OTP Sent"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          OTP has been sent successfully to your mobile number.
        </p>

        <Button
          variant="success"
          onClick={() => {
            setShowSuccess(false)
            setShowOtp(true)
          }}
        >
          OK
        </Button>
      </Modal>

      {/* Verify OTP Modal */}
      <VerifyOtpModal
        open={showOtp}
        onClose={() => setShowOtp(false)}
        onVerifySuccess={() => router.push('/home')}
      />
    </>
  )
}
