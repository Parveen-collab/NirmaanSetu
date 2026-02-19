// src/components/features/Input.tsx
'use client'

import React, {
  useId,
  useState,
  forwardRef,
  useMemo,
} from 'react'

/* =========================
   Validation Types
========================= */

export type ValidationType =
  | 'text'
  | 'number'
  | 'mobile'
  | 'email'
  | 'password'
  | 'file'
  | 'custom'

export type InputVariant =
  | 'aadhaar'
  | 'otp'
  | 'bankAccount'
  | 'phone'
  | 'name'
  | 'address'

/* =========================
   Props
========================= */

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  validation?: ValidationType
  variant?: InputVariant
  errorMessage?: string
  customValidator?: (value: string) => boolean
  onValidityChange?: (isValid: boolean) => void
  /* NEW */
  required?: boolean
  optionalText?: string

}

/* =========================
   Variant Rules
========================= */

const variantRules: Record<
  InputVariant,
  {
    regex: RegExp
    message: string
    maxLength?: number
  }
> = {
  aadhaar: {
    regex: /^\d{12}$/,
    message: 'Aadhaar must be exactly 12 digits',
    maxLength: 12,
  },

  otp: {
    regex: /^\d{4,6}$/,
    message: 'OTP must be 4–6 digits',
    maxLength: 6,
  },

  bankAccount: {
    regex: /^\d{9,18}$/,
    message: 'Enter valid bank account number',
    maxLength: 18,
  },

  phone: {
    regex: /^[6-9]\d{9}$/,
    message: 'Enter valid 10-digit phone number',
    maxLength: 10,
  },

  name: {
    regex: /^[A-Za-z ]+$/,
    message: 'Name should contain only letters',
  },

  address: {
    regex: /^.{5,200}$/,
    message: 'Enter valid address',
  },
}

/* =========================
   Component
========================= */

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className = '',
      validation,
      variant,
      errorMessage,
      customValidator,
      onValidityChange,
      onFocus,
      onBlur,
      onChange,
      value,
      required = true,
      optionalText = 'optional',

      ...props
    },
    ref
  ) => {
    const id = useId()

    const [error, setError] = useState('')
    const [focused, setFocused] = useState(false)
    const [touched, setTouched] = useState(false)

    /* =========================
       Check if has value
    ========================= */

    const hasValue = useMemo(() => {
      if (value !== undefined)
        return String(value).length > 0
      return false
    }, [value])

    /* =========================
       Max length from variant
    ========================= */

    const maxLength =
      variant && variantRules[variant]?.maxLength

    /* =========================
       Validation Function
    ========================= */

    const validate = (val: string, files?: FileList | null) => {
      let isValid = true
      let message = ''

      /* Required validation FIRST */

      if (required) {
        if (validation === 'file') {
          isValid = !!files && files.length > 0
          message = 'This field is required'
        } else {
          isValid = val.trim().length > 0
          message = 'This field is required'
        }

        if (!isValid) {
          setError(message)
          onValidityChange?.(false)
          return false
        }
      }

      /* Continue existing validation */


      /* Fallback validation */

      else if (validation) {
        switch (validation) {
          case 'text':
            isValid = val.trim().length > 0
            message = 'This field cannot be empty.'
            break

          case 'number':
            isValid = /^\d+$/.test(val)
            message = 'Enter valid number'
            break

          case 'mobile':
            isValid = /^[6-9]\d{9}$/.test(val)
            message = 'Enter valid mobile number'
            break

          case 'email':
            isValid =
              /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
            message = 'Enter valid email'
            break

          case 'password':
            isValid =
              /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
                val
              )
            message =
              'Password must be 8+ chars with uppercase, lowercase, number & symbol'
            break

          case 'file':
            isValid = !!files && files.length > 0
            message = 'Please upload file'
            break

          case 'custom':
            if (customValidator) {
              isValid = customValidator(val)
              message =
                errorMessage || 'Invalid input'
            }
            break
        }
      }

      setError(isValid ? '' : message)
      onValidityChange?.(isValid)

      return isValid
    }

    /* =========================
       Render
    ========================= */

    return (
      <div className="flex flex-col gap-1 w-full">
        {/* Floating Input Wrapper */}

        <div className="relative w-full">

          {/* Input */}

          <input
            {...props}
            ref={ref}
            id={id}
            value={value}
            maxLength={maxLength}
            placeholder=" "
            aria-invalid={!!error}
            aria-describedby={
              error ? `${id}-error` : undefined
            }
            onFocus={(e) => {
              setFocused(true)
              onFocus?.(e)
            }}
            onBlur={(e) => {
              setFocused(false)
              setTouched(true)
              validate(e.target.value)
              onBlur?.(e)
            }}
            onChange={(e) => {
              validate(e.target.value)
              onChange?.(e)
            }}
            className={`
              peer w-full rounded-lg border
              px-4 pt-5 pb-2
              text-base outline-none
              transition-all duration-200

              bg-white dark:bg-zinc-800
              text-zinc-900 dark:text-white

              ${error
                ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                : 'border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-zinc-700'
              }

              ${className}
            `}
          />

          {/* Floating Label */}

          {label && (
            <label
              htmlFor={id}
              className={`
      absolute left-3 px-1
      bg-white dark:bg-zinc-800
      pointer-events-none
      transition-all duration-200 ease-in-out

      ${focused || hasValue
                  ? '-top-2 text-xs text-blue-600 dark:text-blue-400'
                  : 'top-3 text-base text-zinc-500 dark:text-zinc-400'
                }
    `}
            >
              {label}

              {/* Required */}
              {required && (
                <span className="text-red-500 ml-0.5">*</span>
              )}

              {/* Optional */}
              {!required && (
                <span className="text-zinc-400 ml-1 text-[10px]">
                  ({optionalText})
                </span>
              )}
            </label>
          )}

        </div>

        {/* Error */}

        {error && touched && (
          <span
            id={`${id}-error`}
            role="alert"
            className="text-xs text-red-500"
          >
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
