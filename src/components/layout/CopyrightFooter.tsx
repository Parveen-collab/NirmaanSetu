'use client'

const CopyrightFooter = () => {
  return (
    <div>
        {/* ================= FOOTER ================= */}
      <footer className="border-t bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} NirmaanSetu. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default CopyrightFooter