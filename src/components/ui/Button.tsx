// src/components/ui/Button.tsx
'use client'

import React from 'react'
import Link from 'next/link'

type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  variant?: ButtonVariant
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
  href?: string // ⭐ optional navigation
}

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: `
    bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500
    dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-400
  `,
  secondary: `
    bg-zinc-600 text-white hover:bg-zinc-700 focus:ring-zinc-500
    dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:focus:ring-zinc-400
  `,
  success: `
    bg-green-600 text-white hover:bg-green-700 focus:ring-green-500
    dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-400
  `,
  warning: `
    bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-400
    dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:text-black dark:focus:ring-yellow-300
  `,
  error: `
    bg-red-600 text-white hover:bg-red-700 focus:ring-red-500
    dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-400
  `,
}

function ButtonContent({
  children,
  loading,
  leftIcon,
  rightIcon,
}: {
  children: React.ReactNode
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}) {
  return (
    <>
      {leftIcon && (
        <span className={`flex items-center ${loading ? 'opacity-0' : ''}`}>
          {leftIcon}
        </span>
      )}

      <span>{loading ? 'Sending…' : children}</span>

      {rightIcon && (
        <span className={`flex items-center ${loading ? 'opacity-0' : ''}`}>
          {rightIcon}
        </span>
      )}
    </>
  )
}

export default function Button({
  children,
  loading = false,
  variant = 'primary',
  leftIcon,
  rightIcon,
  fullWidth = true,
  className = '',
  disabled,
  href,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = `
    ${fullWidth ? 'w-full' : ''}
    rounded-lg px-4 py-2 text-sm font-medium
    inline-flex items-center justify-center gap-2
    transition active:scale-95
    focus:outline-none focus:ring-2
    disabled:cursor-not-allowed disabled:opacity-60
    ${VARIANT_CLASSES[variant]}
    ${className}
  `

  const isDisabled = disabled || loading

  // 🔹 CASE 1: Navigation button
  if (href && !isDisabled) {
    return (
      <Link href={href} className={classes}>
        <ButtonContent
          loading={loading}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
        >
          {children}
        </ButtonContent>
      </Link>
    )
  }

  // 🔹 CASE 2: Regular button
  return (
    <button
      {...props}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      aria-busy={loading}
      className={classes}
    >
      <ButtonContent
        loading={loading}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
      >
        {children}
      </ButtonContent>
    </button>
  )
}
