'use client'

export default function ApplyModal({ onClose }: { onClose?: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-md p-6 animate-fade">

        <h2 className="text-xl font-bold text-primary mb-3">
          Apply for Job
        </h2>

        <p className="text-sm text-muted mb-6">
          You are applying for this work. The contractor will be able to contact you directly.
        </p>

        <div className="space-y-4">
          <input
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Mobile Number"
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            placeholder="Your Skill (e.g. Mason)"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button className="mt-6 w-full rounded-full bg-primary py-3 text-white font-semibold">
          Submit Application
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
