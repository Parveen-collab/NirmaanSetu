// src/components/ui/Button.tsx
import React from 'react'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: ButtonVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `
    bg-blue-600 hover:bg-blue-700 focus:ring-blue-500
    dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400
  `,
  secondary: `
    bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-500
    dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-400
  `,
  success: `
    bg-green-600 hover:bg-green-700 focus:ring-green-500
    dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-400
  `,
  warning: `
    bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-400 text-black
    dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-black dark:focus:ring-yellow-300
  `,
  error: `
    bg-red-600 hover:bg-red-700 focus:ring-red-500
    dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400
  `,
}

export default function Button({
  children,
  loading = false,
  variant = 'primary',
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={loading || disabled}
      className={`
        w-full rounded-lg px-4 py-2 text-sm font-medium transition
        inline-flex items-center justify-center gap-2
        active:scale-95 focus:outline-none focus:ring-2
        disabled:cursor-not-allowed disabled:opacity-60
        text-white
        ${VARIANT_CLASSES[variant]}
        ${className}
      `}
    >
      {loading ? (
        'Sending...'
      ) : (
        <>
          {leftIcon && <span className="flex items-center">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  )
}
