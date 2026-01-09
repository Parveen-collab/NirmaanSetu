'use client'

import React from 'react'

interface SuccessModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
}

export default function Modal({ open, onClose, title, children }: SuccessModalProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-sm rounded-xl bg-white p-6 shadow-lg dark:bg-zinc-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-zinc-400 hover:text-zinc-600 dark:hover:text-white"
        >
          ✕
        </button>

        {title && (
          <h2 className="mb-4 text-center text-lg font-semibold dark:text-white">
            {title}
          </h2>
        )}

        {children}
      </div>
    </div>
  )
}
