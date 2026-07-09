'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Input from '@/src/components/common/Input';
import Button from '@/src/components/common/Button';
import Modal from '@/src/components/features/SuccessModal';

import { sendForgotOtp, resetPassword } from '@/src/services/authService';

type Props = {
  identifier: string;
  otp: string;
};

export default function ResetPassword({ identifier, otp }: Props) {
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [otpSent, setOtpSent] = useState(false);
  const [sendingOtp, setSendingOtp] = useState(false);

  const [number, setNumber] = useState('');
  const [otpValue, setOtpValue] = useState('');

  const [numberValid, setNumberValid] = useState(false);
  const [otpValueValid, setOtpValueValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmValid, setConfirmValid] = useState(false);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSendOtp = async () => {
    if (!numberValid || sendingOtp) return;

    try {
      setSendingOtp(true);

      await sendForgotOtp({
        phoneNumber: number,
      });

      alert("OTP sent successfully");

      setOtpSent(true);
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        "Failed to send OTP"
      );
    } finally {
      setSendingOtp(false);
    }
  };

  const handleResetPassword = async () => {
    if (!passwordValid || !confirmValid || loading) return;

    try {
      setLoading(true);

      await resetPassword({
        phoneNumber: number,
        otp: otpValue,
        newPassword: password,
        confirmPassword,
      });

      setShowSuccess(true);
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
        error.message ||
        'Failed to reset password'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4 dark:bg-black">
        <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-md dark:bg-zinc-900">

          <h1 className="mb-2 text-center text-2xl font-semibold dark:text-white">
            Reset Password
          </h1>

          <p className="mb-6 text-center text-sm text-zinc-500">
            Create a new secure password.
          </p>

          <Input
            label="Mobile Number"
            type="number"
            validation="number"
            value={number}
            placeholder="Enter Mobile Number"
            onChange={(e) => setNumber(e.target.value)}
            onValidityChange={setNumberValid}
          />

          <div className="mt-4 flex justify-center">
            <Button
              loading={sendingOtp}
              disabled={!numberValid || sendingOtp}
              onClick={handleSendOtp}
            >
              {otpSent ? "Resend OTP" : "Send OTP"}
            </Button>
          </div>

          {otpSent && (
            <Input
              label="OTP"
              type="tel"
              validation="number"
              value={otpValue}
              placeholder="Enter OTP"
              onChange={(e) => setOtpValue(e.target.value)}
              onValidityChange={setOtpValueValid}
            />
          )}

          <Input
            label="New Password"
            type="password"
            validation="password"
            value={password}
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
            onValidityChange={setPasswordValid}
          />

          <div className="mt-4">
            <Input
              label="Confirm Password"
              type="password"
              validation="custom"
              customValidator={(value) =>
                value.length > 0 && value === password
              }
              errorMessage="Passwords do not match"
              value={confirmPassword}
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              onValidityChange={setConfirmValid}
            />
          </div>

          <div className="mt-6 flex justify-center">
            <Button
              loading={loading}
              disabled={
                !numberValid ||
                !otpValueValid ||
                !passwordValid ||
                !confirmValid ||
                loading
              }
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </div>

        </div>
      </div>

      <Modal
        open={showSuccess}
        title="Password Updated"
        onClose={() => setShowSuccess(false)}
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Your password has been updated successfully.
        </p>

        <div className="flex justify-center">
          <Button
            variant="success"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
        </div>
      </Modal>
    </>
  );
}