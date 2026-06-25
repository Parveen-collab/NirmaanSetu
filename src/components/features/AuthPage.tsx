'use client'

import { sendOtp } from '@/src/services/authService';

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

  useEffect(() => {
    if (type === 'mobile' && phoneNumber.length > selectedCountry.length) {
      setPhoneNumber(phoneNumber.slice(0, selectedCountry.length));
    }
  }, [selectedCountry, type, phoneNumber]);

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

  const handleSendOtp = async () => {
  if (!isValid || loading) return;

  try {
    setLoading(true);

    const payload =
      type === 'mobile'
        ? { phoneNumber: value }
        : { email: value };

    const result = await sendOtp(payload);

    console.log(result);

    setShowSuccess(true);
  } catch (error: any) {
    alert(
      error.response?.data?.message ||
      error.message ||
      'Something went wrong'
    );
  } finally {
    setLoading(false);
  }
};

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
          // Change validation to 'custom' for mobile to use our logic
          validation={type === 'mobile' ? 'custom' : config.validation}
          customValidator={type === 'mobile' ? validatePhone : undefined}
          errorMessage={`Enter a valid ${selectedCountry.length}-digit number`}
          placeholder={config.placeholder}
          value={type === 'mobile' ? phoneNumber : value}
          maxLength={type === 'mobile' ? selectedCountry.length : undefined}
          onChange={(e) => {
            if (type === 'mobile') {
              const val = e.target.value.replace(/\D/g, ''); // Only digits
              if (val.length <= selectedCountry.length) {
                setPhoneNumber(val);
              }
            } else {
              setValue(e.target.value);
            }
          }}
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
);
};
