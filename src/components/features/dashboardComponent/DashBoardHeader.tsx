'use client'

import { useState } from 'react'
import { Bell, User, LogOut, Lock, MessageCircle, HelpCircle, UserCircle, Wallet,
  ShoppingBag } from 'lucide-react'
import Button from '@/src/components/common/Button'
import Link from 'next/link'
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

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
    <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black">
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
                  <MenuItem href="/dashboard/wallet" icon={<Wallet size={18} />} label="Wallet" />
                  <MenuItem href="/dashboard/my-orders" icon={<ShoppingBag size={18} />} label="My Orders" />

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
    </div>
  )
}

export default DashBoardHeader
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
