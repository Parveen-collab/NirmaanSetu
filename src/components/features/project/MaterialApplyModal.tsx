'use client'

import Button from "@/src/components/common/Button"
import SuccessModal from "@/src/components/features/SuccessModal";
import { useState } from "react";

export default function MaterialApplyModal({ onClose }: { onClose?: () => void }) {
  const [showSuccess, setShowSuccess] = useState(false)
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md p-6 animate-fade">

        <h2 className="text-xl font-bold text-primary mb-3">
          Apply to Supply Materials
        </h2>

        <p className="text-sm text-muted mb-6">
          Share your shop details to supply materials for this work.
        </p>

        <div className="space-y-4">
          <input
            placeholder="Shop Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Material Type (e.g. Cement, Steel)"
            className="w-full border rounded-lg px-4 py-3"
          />

          <select className="w-full border rounded-lg px-4 py-3">
            <option>Retail</option>
            <option>Bulk</option>
            <option>Retail & Bulk</option>
          </select>

          <input
            placeholder="Contact Number"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <Button onClick={() => setShowSuccess(true)}>
          Submit
        </Button>
        {/* <button className="mt-6 w-full rounded-full bg-primary py-3 text-red font-semibold">
          Submit Material Request
        </button> */}

        <button
          onClick={onClose}
          className="mt-3 w-full text-sm text-muted hover:underline"
        >
          Cancel
        </button>
      </div>
      {/* Applied for Materials Success Modal */}
      <SuccessModal
        open={showSuccess}
        onClose={() => {
          setShowSuccess(false);
        }}
        title="Applied for Materials"
      >
        <p className="mb-6 text-center text-sm text-zinc-600 dark:text-zinc-300">
          Applied for Materials successfully 🎉
        </p>

        <Button
          variant="success"
          onClick={() => {
            setShowSuccess(false);
            onClose?.();
          }}
        >
          ok
        </Button>
      </SuccessModal>
    </div>
  )
}
