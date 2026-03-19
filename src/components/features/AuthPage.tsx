'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Input from '@/src/components/common/Input'
import Button from '@/src/components/common/Button'
import Modal from '@/src/components/features/SuccessModal'
import VerifyOtpModal from '@/src/components/features/auth/VerifyOtpModal'

import { authConfig } from '@/src/config/authConfig'
import { AuthType } from '@/src/types/auth'
import Select from '@/src/components/common/Select'

const COUNTRIES = [
  { label: 'India', value: '+91', length: 10 },
  { label: 'Norway', value: '+47', length: 8 },
  { label: 'China', value: '+86', length: 11 },
  // Add more countries as needed
];


type Props = {
  type: AuthType
}

export default function AuthPage({ type }: Props) {

  // Inside AuthPage component
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhone = (val: string) => {
    return val.length === selectedCountry.length && /^\d+$/.test(val);
  };

  // Update the main 'value' state whenever country or phone changes
  useEffect(() => {
    if (type === 'mobile') {
      setValue(`${selectedCountry.value}${phoneNumber}`);
    }
  }, [selectedCountry, phoneNumber, type]);

  const router = useRouter()
  const config = authConfig[type]

  const [value, setValue] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showOtp, setShowOtp] = useState(false)

  const handleSendOtp = () => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setShowSuccess(true)
    }, 1500)
  }

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
        <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-md dark:bg-zinc-900">
          <h1 className="mb-2 text-center text-2xl font-semibold dark:text-white">
            {config.title}
          </h1>

          <p className="mb-6 text-center text-sm text-zinc-500">
            {config.description}
          </p>

          {type === 'mobile' && (
            <div className="mb-4">
              <Select
                label="Select Country"
                options={COUNTRIES.map(c => ({ label: `${c.label} (${c.value})`, value: c.value }))}
                value={selectedCountry.value}
                onChange={(e) => {
                  const country = COUNTRIES.find(c => c.value === e.target.value);
                  if (country) setSelectedCountry(country);
                }}
              />
            </div>
          )}


          <Input
            label={config.label}
            type={config.type}
            validation={config.validation}
            placeholder={config.placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onValidityChange={setIsValid}
          />

          <div className="mt-4 flex justify-center">
            <Button
              loading={loading}
              disabled={!isValid || loading}
              onClick={handleSendOtp}
            >
              Send OTP
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="OTP Sent"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          {config.successText}
        </p>

        <div className="flex justify-center">
          <Button
            variant="success"
            onClick={() => {
              setShowSuccess(false)
              setShowOtp(true)
            }}
          >
            OK
          </Button>
        </div>
      </Modal>

      <VerifyOtpModal
        open={showOtp}
        onClose={() => setShowOtp(false)}
        identifier={value}
        type={type}
        onVerifySuccess={() => router.push(config.redirectTo)}
      />
    </>
  )
}
