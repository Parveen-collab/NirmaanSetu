import { useState } from 'react'

export function useOtpVerification() {
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)
  const [error, setError] = useState('')

  const verifyOtp = (otp: string) => {
    setLoading(true)
    setError('')

    setTimeout(() => {
      setLoading(false)

      // ✅ Accept any 4-digit OTP
      if (!/^\d{4}$/.test(otp)) {
        setError('Please enter a valid 4-digit OTP.')
        return
      }

      setVerified(true)
    }, 800)
  }

  return {
    loading,
    error,
    verified,
    setVerified,
    verifyOtp,
  }
}
