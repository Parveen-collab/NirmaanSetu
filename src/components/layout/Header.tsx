'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Button from '@/src/components/ui/Button'

const NAV_LINKS = [
  { label: 'Home', href: '/home' },
  { label: 'Media & Coverages', href: '/home/media-coverage' },
  { label: 'Blogs', href: '/home/blogs' },
  { label: 'About Us', href: '/home/aboutUs' },
  { label: 'Contact Us', href: '/home/contactUs' },
  { label: 'FAQs', href: '/home/faq' },
]

const Header = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/logo-NirmaanSetu.jpg"
            alt="NirmaanSetu logo"
            width={32}
            height={32}
            priority
          />
          <span className="text-lg font-semibold text-zinc-800 dark:text-white">
            NirmaanSetu
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-4 text-sm"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={`transition
                ${
                  isActive(href)
                    ? 'text-blue-600 font-medium dark:text-blue-400'
                    : 'text-zinc-600 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400'
                }
              `}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Actions + Mobile Toggle */}
        <div className="flex items-center gap-2">
          <div className="hidden md:flex gap-2">
            <Button href="/home/login" variant="secondary">
              Login
            </Button>
            <Button href="/home/register">
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="md:hidden rounded-md p-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
          <nav className="flex flex-col space-y-3 px-4 py-4">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(href) ? 'page' : undefined}
                className={`text-sm transition
                  ${
                    isActive(href)
                      ? 'text-blue-600 font-medium dark:text-blue-400'
                      : 'text-zinc-700 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400'
                  }
                `}
              >
                {label}
              </Link>
            ))}

            <div className="pt-3 flex gap-2">
              <Button href="/home/login" variant="secondary">
                Login
              </Button>
              <Button href="/home/register">
                Register
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
