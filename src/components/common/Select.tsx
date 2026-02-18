'use client'

import React, {
  useId,
  useState,
  forwardRef,
} from 'react'

interface Option {
  label: string
  value: string
}

interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: Option[]
  error?: string
}

const Select = forwardRef<
  HTMLSelectElement,
  SelectProps
>(
  (
    {
      label,
      options,
      error,
      value,
      className = '',
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const id = useId()

    const [focused, setFocused] =
      useState(false)

    const hasValue =
      value !== undefined &&
      value !== ''

    return (
      <div className="flex flex-col gap-1 w-full">
        <div className="relative">

          {/* Select */}

          <select
            {...props}
            ref={ref}
            id={id}
            value={value}
            onFocus={(e) => {
              setFocused(true)
              onFocus?.(e)
            }}
            onBlur={(e) => {
              setFocused(false)
              onBlur?.(e)
            }}
            className={`
              peer w-full rounded-lg border
              px-4 pt-5 pb-2
              text-base outline-none
              transition-all duration-200

              bg-white dark:bg-zinc-800
              text-zinc-900 dark:text-white

              appearance-none

              ${
                error
                  ? 'border-red-500 focus:ring-2 focus:ring-red-200'
                  : 'border-zinc-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:border-zinc-700'
              }

              ${className}
            `}
          >
            <option value=""></option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Floating Label */}

          {label && (
            <label
              htmlFor={id}
              className={`
                absolute left-3 px-1
                bg-white dark:bg-zinc-800
                pointer-events-none

                transition-all duration-200

                ${
                  focused || hasValue
                    ? '-top-2 text-xs text-blue-600 dark:text-blue-400'
                    : 'top-3 text-base text-zinc-500 dark:text-zinc-400'
                }
              `}
            >
              {label}
            </label>
          )}

          {/* Arrow */}

          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            ▼
          </div>

        </div>

        {/* Error */}

        {error && (
          <span className="text-xs text-red-500">
            {error}
          </span>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export default Select
