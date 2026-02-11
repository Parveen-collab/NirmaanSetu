import type { ValidationType } from '@/src/components/common/Input'
import type { AuthType } from '@/src/types/auth'

type AuthFieldConfig = {
  title: string
  description: string
  label: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  validation: ValidationType
  successText: string
  redirectTo: string
}

export const authConfig: Record<AuthType, AuthFieldConfig> = {
  mobile: {
    title: 'Mobile Verification',
    description: 'Enter your mobile number to receive an OTP',
    label: 'Mobile Number',
    placeholder: 'Enter mobile number',
    type: 'tel',
    validation: 'mobile',
    successText: 'OTP has been sent to your mobile number.',
    redirectTo: '/home/register',
  },
  email: {
    title: 'Email Verification',
    description: 'Enter your email address to receive an OTP',
    label: 'Email Address',
    placeholder: 'Enter email address',
    type: 'email',
    validation: 'email',
    successText: 'OTP has been sent to your email address.',
    redirectTo: '/home/register', // example
  },
}
