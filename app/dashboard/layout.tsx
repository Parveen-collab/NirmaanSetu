'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import CopyrightFooter from '@/src/components/layout/CopyrightFooter'
import DashBoardHeader from '@/src/components/features/dashboardComponent/DashBoardHeader'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const tabs = [
    { label: 'Employees', href: '/dashboard/employees' },
    { label: 'Employers', href: '/dashboard/employers' },
    { label: 'Projects', href: '/dashboard/projects' },
    { label: 'Shops', href: '/dashboard/shops' },
  ]

  // Show tabs only on dashboard sub-routes
  const showTabs = tabs.some(tab => pathname.startsWith(tab.href))

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      
      {/* Header */}
      <DashBoardHeader />

      {/* Tabs */}
      {showTabs && (
        <nav
          className="flex gap-3 border-b bg-white px-6 py-3 dark:bg-black"
          role="tablist"
        >
          {tabs.map(tab => {
            const isActive = pathname === tab.href

            return (
              <Link
                key={tab.href}
                href={tab.href}
                role="tab"
                aria-selected={isActive}
                className={`rounded-md px-4 py-2 text-sm font-medium transition
                  ${isActive
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300'}
                `}
              >
                {tab.label}
              </Link>
            )
          })}
        </nav>
      )}

      {/* Main content */}
      <main className="flex-1 px-6 py-4">
        {children}
      </main>

      {/* Footer */}
      <div className="border-t bg-white dark:bg-black">
        <CopyrightFooter />
      </div>
    </div>
  )
}
