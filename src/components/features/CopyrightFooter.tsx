'use client'

const CopyrightFooter = () => {
  return (
      <footer className="dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-zinc-500 text-center">
          © {new Date().getFullYear()} NirmaanSetu. All Rights Reserved.
        </div>
      </footer>
  )
}

export default CopyrightFooter