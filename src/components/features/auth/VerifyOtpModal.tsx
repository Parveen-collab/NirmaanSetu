'use client'

import { useState } from 'react'

import { verifyOtp } from '@/src/services/authService'

import Input from '@/src/components/common/Input'
import Button from '@/src/components/common/Button'
import SuccessModal from '@/src/components/features/SuccessModal'

import { useOtp } from '@/src/hooks/useOtp'

interface VerifyOtpModalProps {
  open: boolean
  onClose: () => void
  onVerifySuccess: () => void
  identifier: string
  type: 'mobile' | 'email'
}

export default function VerifyOtpModal({
  open,
  onClose,
  onVerifySuccess,
  identifier,
  type,
}: VerifyOtpModalProps) {
  const otp = useOtp(4, open)

  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [error, setError] = useState('')

  if (!open) return null

  const handleVerifyOtp = async () => {
    if (!otp.isComplete || loading) return

    try {
      setLoading(true)
      setError('')

      const payload =
        type === 'mobile'
          ? {
              otp: otp.value,
              phoneNumber: identifier,
            }
          : {
              otp: otp.value,
              email: identifier,
            }

      const result = await verifyOtp(payload)

      console.log('OTP Verification Response:', result)

      // Optional: Save tokens if returned
      if (result.accessToken) {
        localStorage.setItem('accessToken', result.accessToken)
      }

      if (result.refreshToken) {
        localStorage.setItem('refreshToken', result.refreshToken)
      }

      setShowSuccess(true)
    } catch (err: any) {
      setError(
        err?.response?.data?.message ||
          err?.message ||
          'OTP verification failed'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* OTP Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div className="relative w-full max-w-sm rounded-xl bg-white p-6 dark:bg-zinc-900">
          <button
            onClick={onClose}
            className="absolute right-3 top-3"
          >
            ✕
          </button>

          <h2 className="mb-2 text-center text-xl font-semibold">
            Verify OTP
          </h2>

          <p className="mb-4 text-center text-sm text-gray-500">
            Enter the OTP sent to
            <br />
            <span className="font-medium">{identifier}</span>
          </p>

          <div className="mb-3 flex justify-center gap-3">
            {otp.otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  otp.inputRefs.current[index] = el
                }}
                value={digit}
                onChange={(e) =>
                  otp.handleChange(e.target.value, index)
                }
                onKeyDown={(e) =>
                  otp.handleKeyDown(e, index)
                }
                onPaste={otp.handlePaste}
                className="h-12 w-12 text-center"
              />
            ))}
          </div>

          {(otp.error || error) && (
            <p className="mb-4 text-center text-red-500">
              {otp.error || error}
            </p>
          )}

          <div className="flex justify-center">
            <Button
              loading={loading}
              disabled={!otp.isComplete}
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      <SuccessModal
        open={showSuccess}
        title="OTP Verified"
        onClose={() => {
          setShowSuccess(false)
          onClose()
          onVerifySuccess()
        }}
      >
        <p className="text-center">
          OTP verified successfully 🎉
        </p>

        <div className="mt-5 flex justify-center">
          <Button
            variant="success"
            onClick={() => {
              setShowSuccess(false)
              onClose()
              onVerifySuccess()
            }}
          >
            OK
          </Button>
        </div>
      </SuccessModal>
    </>
  )
}