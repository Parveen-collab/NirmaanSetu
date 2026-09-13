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
import AuthPageSkeleton from '@/src/components/common/skeletons/AuthPageSkeleton';
import { ChevronDown } from 'lucide-react';

const COUNTRIES = [
  { label: 'India', value: '+91', length: 10 },
  // { label: 'Norway', value: '+47', length: 8 },
  // { label: 'China', value: '+86', length: 11 },
  // Add more countries as needed
];


type Props = {
  type: AuthType
}

export default function AuthPage({ type }: Props) {

  const [pageLoading, setPageLoading] = useState(true);

  // Inside AuthPage component
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validatePhone = (val: string) => {
    return val.length === selectedCountry.length && /^\d+$/.test(val);
  };

  useEffect(() => {
    setPageLoading(false);
  }, []);

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

  if (pageLoading) {
    return <AuthPageSkeleton />;
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

          {type === 'mobile' ? (
            <div className="mb-4">
              <label className="mb-1 block text-sm font-medium">
                Mobile Number <span className="text-red-500">*</span>
              </label>

              <div className="flex h-[67px] overflow-hidden rounded-xl border border-zinc-300 bg-white focus-within:border-blue-500 dark:border-zinc-700 dark:bg-zinc-900">

                {/* Country Code */}
                <div className="relative flex items-center border-r border-zinc-300 dark:border-zinc-700">
                  <select
                    value={selectedCountry.value}
                    onChange={(e) => {
                      const country = COUNTRIES.find(
                        c => c.value === e.target.value
                      );

                      if (country) {
                        setSelectedCountry(country);

                        // Adjust number if the new country has a shorter length
                        setPhoneNumber(prev =>
                          prev.slice(0, country.length)
                        );
                      }
                    }}
                    className="h-full appearance-none bg-transparent py-2 pl-4 pr-8 text-base outline-none"
                    aria-label="Select country code"
                  >
                    {COUNTRIES.map((country) => (
                      <option
                        key={country.value}
                        value={country.value}
                      >
                        {country.value}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    className="pointer-events-none absolute right-2"
                  />
                </div>

                {/* Mobile Number */}
                <input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter mobile number"
                  value={phoneNumber}
                  maxLength={selectedCountry.length}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');

                    if (val.length <= selectedCountry.length) {
                      setPhoneNumber(val);

                      setIsValid(
                        val.length === selectedCountry.length &&
                        /^\d+$/.test(val)
                      );
                    }
                  }}
                  className="min-w-0 flex-1 bg-transparent px-4 text-base outline-none placeholder:text-zinc-500"
                  aria-label="Mobile number"
                />

              </div>

              {phoneNumber.length > 0 &&
                !validatePhone(phoneNumber) && (
                  <p className="mt-1 text-sm text-red-500">
                    Enter a valid {selectedCountry.length}-digit number
                  </p>
                )}
            </div>
          ) : (
            <Input
              label={config.label}
              type={config.type}
              validation={config.validation}
              placeholder={config.placeholder}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onValidityChange={setIsValid}
            />
          )}


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
