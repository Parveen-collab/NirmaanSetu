'use client'

import { useState } from 'react'
import { Bell, User, LogOut, Lock, MessageCircle, HelpCircle, UserCircle } from 'lucide-react'
import Button from '@/src/components/ui/Button'
import Link from 'next/link'
import { useRouter } from "next/navigation";

const TABS = ['Employee', 'Employer', 'Shops', 'Projects'] as const
type Tab = (typeof TABS)[number]

const mockEmployees = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Employee ${i + 1}`,
}))

export default function DashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<Tab>('Employee')
  const [visibleCount, setVisibleCount] = useState(8)
  const [showUserMenu, setShowUserMenu] = useState(false)

  const visibleEmployees = mockEmployees.slice(0, visibleCount)

  return (
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <h1 className="text-lg font-semibold">Dashboard</h1>

          {/* Tabs */}
          <nav className="hidden md:flex items-center gap-3">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition
                  ${activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center gap-3 relative">

            {/* Notification */}
            <Button href='/dashboard/notification'>
              <Bell className="h-5 w-5" />
            </Button>

            {/* User Button + Menu */}
            <div className="relative">
              <Button onClick={() => setShowUserMenu((prev) => !prev)}>
                <User className="h-5 w-5" />
              </Button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl border bg-white dark:bg-zinc-900 shadow-lg z-50 overflow-hidden animate-fade">

                  <MenuItem href="/dashboard/profile" icon={<UserCircle size={18} />} label="Profile" />
                  <MenuItem href="/dashboard/help" icon={<HelpCircle size={18} />} label="Help" />
                  <MenuItem href="/dashboard/feedback" icon={<MessageCircle size={18} />} label="Feedback" />
                  <MenuItem href="/dashboard/change-password" icon={<Lock size={18} />} label="Change Password" />
                  <MenuItem href="/dashboard/wallet" icon={<Lock size={18} />} label="Wallet" />

                  <div className="border-t my-1" />

                  <button
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition"
                    onClick={() => router.push("/home/login")}
                  >
                    <LogOut size={18} />
                    Logout
                  </button>

                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <main className="flex-1 mx-auto max-w-7xl px-4 py-6">

        <h2 className="text-xl font-semibold mb-4">
          {activeTab} List
        </h2>

        {activeTab === 'Employee' && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {visibleEmployees.map((emp) => (
                <div
                  key={emp.id}
                  className="border rounded-lg p-4 bg-white dark:bg-zinc-900 shadow-sm hover:shadow transition"
                >
                  <div className="h-24 bg-zinc-100 dark:bg-zinc-800 rounded mb-3" />
                  <h3 className="font-medium">{emp.name}</h3>
                  <p className="text-sm text-zinc-500">ID: {emp.id}</p>
                </div>
              ))}
            </div>

            {visibleCount < mockEmployees.length && (
              <div className="text-center mt-6">
                <Button onClick={() => setVisibleCount((c) => c + 4)}>
                  Load More Employees
                </Button>
              </div>
            )}
          </>
        )}

        {activeTab !== 'Employee' && (
          <div className="flex items-center justify-center h-64 text-zinc-500">
            {activeTab} data will appear here
          </div>
        )}
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="border-t bg-white dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-4 py-3 text-sm text-zinc-500 text-center">
          © 2026 Dashboard App. All rights reserved.
        </div>
      </footer>

    </div>
  )
}

/* ================= MENU ITEM COMPONENT ================= */

function MenuItem({
  href,
  icon,
  label,
}: {
  href: string
  icon: React.ReactNode
  label: string
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {icon}
      {label}
    </Link>
  )
}
