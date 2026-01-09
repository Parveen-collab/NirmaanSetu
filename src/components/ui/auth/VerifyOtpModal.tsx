'use client'

import { useRef, useState } from 'react'
import Input from '@/src/components/ui/context/Input'
import Button from '@/src/components/ui/context/Button'
import SuccessModal from '@/src/components/ui/context/SuccessModal'

interface VerifyOtpModalProps {
  open: boolean
  onClose: () => void
  onVerifySuccess: () => void
}

export default function VerifyOtpModal({
  open,
  onClose,
  onVerifySuccess,
}: VerifyOtpModalProps) {
  const [otp, setOtp] = useState(['', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [showVerifiedSuccess, setShowVerifiedSuccess] = useState(false)

  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  if (!open) return null

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const updatedOtp = [...otp]
    updatedOtp[index] = value
    setOtp(updatedOtp)

    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pasted = e.clipboardData.getData('text').slice(0, 4)
    if (!/^\d{4}$/.test(pasted)) return

    setOtp(pasted.split(''))
    inputRefs.current[3]?.focus()
  }

  const isOtpComplete = otp.every((d) => d !== '')

  const handleVerify = () => {
    setLoading(true)

    // Simulate OTP verification API
    setTimeout(() => {
      setLoading(false)
      setShowVerifiedSuccess(true)
    }, 200)
  }

  return (
    <>
      {/* OTP Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900">
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
          >
            ✕
          </button>

          <h2 className="mb-2 text-center text-xl font-semibold dark:text-white">
            Verify OTP
          </h2>

          <p className="mb-6 text-center text-sm text-zinc-500">
            Enter the 4-digit code sent to your mobile
          </p>

          <div className="mb-6 flex justify-center gap-3">
            {otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className="h-12 w-12 text-center text-lg font-semibold"
              />
            ))}
          </div>

          <Button
            loading={loading}
            disabled={!isOtpComplete}
            onClick={handleVerify}
            variant="success"
          >
            Verify OTP
          </Button>
        </div>
      </div>

      {/* OTP Verified Success Modal */}
      <SuccessModal
        open={showVerifiedSuccess}
        onClose={() => {
          setShowVerifiedSuccess(false)
          onClose()
          onVerifySuccess()
        }}
        title="OTP Verified"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          OTP verified successfully 🎉
        </p>

        <Button
          variant="success"
          onClick={() => {
            setShowVerifiedSuccess(false)
            onClose()
            onVerifySuccess()
          }}
        >
          Go to Home
        </Button>
      </SuccessModal>
    </>
  )
}
