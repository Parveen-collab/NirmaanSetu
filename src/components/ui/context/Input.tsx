// src/components/ui/Input.tsx
import React, { useState, forwardRef } from 'react'

type ValidationType = 'mobile' | 'email' | 'password' | 'custom'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  validation?: ValidationType
  errorMessage?: string
  customValidator?: (value: string) => boolean
  onValidityChange?: (isValid: boolean) => void
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      className = '',
      validation,
      errorMessage,
      customValidator,
      onValidityChange,
      ...props
    },
    ref
  ) => {
    const [error, setError] = useState('')

    const validate = (value: string) => {
      let isValid = true
      let message = ''

      switch (validation) {
        case 'mobile':
          isValid = /^[6-9]\d{9}$/.test(value)
          message = 'Enter a valid 10-digit mobile number'
          break

        case 'email':
          isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          message = 'Enter a valid email address'
          break

        case 'password':
          isValid =
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(value)
          message =
            'Password must be 8+ chars, include uppercase, lowercase, number & symbol'
          break

        case 'custom':
          if (customValidator) {
            isValid = customValidator(value)
            message = errorMessage || 'Invalid input'
          }
          break
      }

      setError(isValid ? '' : message)
      onValidityChange?.(isValid)
    }

    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            {label}
          </label>
        )}

        <input
          {...props}
          ref={ref}
          onBlur={(e) => validate(e.target.value)}
          onChange={(e) => {
            props.onChange?.(e)
            validate(e.target.value)
          }}
          className={`w-full rounded-lg border px-4 py-2 text-sm outline-none transition
            ${
              error
                ? 'border-red-500 focus:ring-red-200'
                : 'border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
            }
            dark:border-zinc-700 dark:bg-zinc-800 dark:text-white
            ${className}`}
        />

        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
