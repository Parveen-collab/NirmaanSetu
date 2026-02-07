'use client'

import React, { useEffect, useId, useRef } from 'react'

interface SuccessModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  closeOnOverlayClick?: boolean
}

export default function SuccessModal({
  open,
  onClose,
  title,
  children,
  closeOnOverlayClick = true,
}: SuccessModalProps) {
  const titleId = useId()
  const modalRef = useRef<HTMLDivElement>(null)

  /* Focus modal on open & handle Escape */
  useEffect(() => {
    if (!open) return

    modalRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-sm
          rounded-xl bg-white
          p-4 sm:p-6
          shadow-lg
          outline-none
          dark:bg-zinc-900
        "
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
        >
          ✕
        </button>

        {title && (
          <h2
            id={titleId}
            className="mb-4 text-center text-lg font-semibold dark:text-white"
          >
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  )
}
