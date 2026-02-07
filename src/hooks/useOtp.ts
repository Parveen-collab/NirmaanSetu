import { useEffect, useRef, useState } from 'react'

export function useOtp(length = 4, open: boolean) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''))
  const [error, setError] = useState('')
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  // Reset OTP when modal opens
  useEffect(() => {
    if (open) {
      setOtp(Array(length).fill(''))
      setError('')
      setTimeout(() => {
        inputRefs.current[0]?.focus()
      }, 100)
    }
  }, [open, length])

  const handleChange = (value: string, index: number) => {
    if (!/^\d?$/.test(value)) return

    const updated = [...otp]
    updated[index] = value
    setOtp(updated)
    setError('')

    if (value && index < length - 1) {
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
    const pasted = e.clipboardData.getData('text').slice(0, length)
    if (!new RegExp(`^\\d{${length}}$`).test(pasted)) return

    setOtp(pasted.split(''))
    setError('')
    inputRefs.current[length - 1]?.focus()
  }

  const isComplete = otp.every(Boolean)
  const value = otp.join('')

  return {
    otp,
    value,
    error,
    setError,
    isComplete,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  }
}
