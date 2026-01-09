import Button from '@/src/components/ui/context/Button'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      
      {/* Header */}
      <header className="border-b border-zinc-200 bg-white px-6 py-4 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/nirmaansetu/public/logo-NirmaanSetu.jpg" alt="Logo" width={32} height={32} />
          </div>
          <h1 className="text-lg font-semibold text-zinc-800 dark:text-white">
            NirmaanSetu
          </h1>

          <nav className="space-x-4 text-sm text-zinc-600 dark:text-zinc-300">
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Home
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Media & Coverages
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Blogs
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              About Us
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              Contact Us
            </a>
            <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">
              FAQs
            </a> 
          </nav>
          <div className="flex space-x-2">
            <Button>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-4">
        <section className="text-center">
          <h2 className="mb-2 text-3xl font-semibold text-zinc-800 dark:text-white">
            Welcome to Home Page 🎉
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            This is your home page content area.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-3 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          © {new Date().getFullYear()} NirmaanSetu. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
