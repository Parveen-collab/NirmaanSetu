'use client'

import Input from '@/src/components/common/Input'
import Button from '@/src/components/common/Button'
import SuccessModal from '@/src/components/features/SuccessModal'
import { useOtp } from '@/src/hooks/useOtp'
import { useOtpVerification } from '@/src/hooks/useOtpVerification'

interface VerifyOtpModalProps {
  open: boolean
  onClose: () => void
  onVerifySuccess: () => void
  identifier: string
  type: string
}

export default function VerifyOtpModal({
  open,
  onClose,
  onVerifySuccess,
}: VerifyOtpModalProps) {
  const otp = useOtp(4, open)
  const verification = useOtpVerification()

  if (!open) return null

  return (
    <>
      {/* OTP Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
        <div className="relative w-full max-w-sm rounded-xl bg-white p-6 dark:bg-zinc-900">
          <button onClick={onClose} className="absolute right-3 top-3">✕</button>

          <h2 className="mb-2 text-center text-xl font-semibold">
            Verify OTP
          </h2>

          <div className="mb-3 flex justify-center gap-3">
            {otp.otp.map((digit, index) => (
              <Input
                key={index}
                ref={(el) => {
                  otp.inputRefs.current[index] = el
                }}
                value={digit}
                onChange={(e) => otp.handleChange(e.target.value, index)}
                onKeyDown={(e) => otp.handleKeyDown(e, index)}
                onPaste={otp.handlePaste}
                className="h-12 w-12 text-center"
              />
            ))}
          </div>

          {(otp.error || verification.error) && (
            <p className="text-center text-red-500">
              {otp.error || verification.error}
            </p>
          )}

          <div className="mt-4 flex justify-center">
            <Button
              loading={verification.loading}
              disabled={!otp.isComplete}
              onClick={() => verification.verifyOtp(otp.value)}
            >
              Verify OTP
            </Button>
          </div>
        </div>
      </div>

      <SuccessModal
        open={verification.verified}
        title="OTP Verified"
        onClose={() => {
          verification.setVerified(false)
          onClose()
          onVerifySuccess()
        }}
      >
        <p className="text-center">OTP verified successfully 🎉</p>
        <div className='flex item-center justify-center mt-5'>
          <Button
          variant='success'
          href='/home/register'
          >
            ok
          </Button>
        </div>
      </SuccessModal>
    </>
  )
}
