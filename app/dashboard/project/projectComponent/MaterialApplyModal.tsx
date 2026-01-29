'use client'

export default function MaterialApplyModal({ onClose }: { onClose?: () => void }) {
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

        <button className="mt-6 w-full rounded-full bg-primary py-3 text-white font-semibold">
          Submit Material Request
        </button>

        <button
          onClick={onClose}
          className="mt-3 w-full text-sm text-muted hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
