'use client'

import { useState } from 'react'
import Button from '@/src/components/common/Button'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import UserMenu from '@/src/components/features/dashboard/UserMenu'
import { Bell, User } from 'lucide-react';

const TABS = [
  { label: "Employees", href: "/dashboard/employee" },
  { label: "Projects", href: "/dashboard/project" },
  { label: "Employers", href: "/dashboard/employer" },
  { label: "Shops", href: "/dashboard/shop" },
] as const;

type Tab = (typeof TABS)[number]

const mockEmployees = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
}))

const DashBoardHeader = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [showUserMenu, setShowUserMenu] = useState(false)

  return (
    <div>
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-lg font-semibold">Dashboard</h1>

          {/* Tabs */}
          <nav className="hidden md:flex items-center gap-3">
            {TABS.map((tab) => {
              const isActive = pathname.startsWith(tab.href);

              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition
          ${isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 relative">

            {/* Notification */}
            <Button href='/dashboard/notification'>
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Button + Dropdown */}
            <div className="relative">

              <Button
                onClick={() => setShowUserMenu((prev) => !prev)}
              // className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
              >
                <User className="h-5 w-5" />
              </Button>

              {showUserMenu && (
                <UserMenu
                  showUserMenu={showUserMenu}
                  setShowUserMenu={setShowUserMenu}
                />
              )}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default DashBoardHeader
