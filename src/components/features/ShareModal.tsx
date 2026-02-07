'use client'

export default function ShareModal({ onClose }: { onClose?: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-zinc-900 rounded-xl w-full max-w-sm p-6 animate-fade">

        <h2 className="text-xl font-bold text-primary mb-4">
          Share This Work
        </h2>

        <p className="text-sm text-muted mb-6">
          Share this job with others using the options below.
        </p>

        <div className="space-y-3">
          <button className="w-full rounded-lg border py-3 hover:bg-zinc-100">
            Share on WhatsApp
          </button>

          <button className="w-full rounded-lg border py-3 hover:bg-zinc-100">
            Copy Link
          </button>

          <button className="w-full rounded-lg border py-3 hover:bg-zinc-100">
            Share via SMS
          </button>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full text-sm text-muted hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  )
}
