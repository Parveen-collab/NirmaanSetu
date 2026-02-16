"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Link from 'next/link'
import { Lock, MessageCircle, HelpCircle, UserCircle, Wallet, ShoppingBag } from 'lucide-react'

/* ================= MENU ITEM COMPONENT ================= */
function MenuItem({
    href,
    icon,
    label,
    onClick,
}: {
    href: string
    icon: React.ReactNode
    label: string
    onClick?: () => void
}) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
            {icon}
            {label}
        </Link>
    )
}


export default function UserMenu({

    showUserMenu,
    setShowUserMenu,
}: {
    showUserMenu: boolean
    setShowUserMenu: React.Dispatch<React.SetStateAction<boolean>>
}) {
    const handleMenuClick = () => {
        setShowUserMenu(false)
    }
    const router = useRouter()
    const menuRef = useRef<HTMLDivElement>(null)

    // Close on outside click
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setShowUserMenu(false)
            }
        }

        function handleEsc(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setShowUserMenu(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        document.addEventListener("keydown", handleEsc)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            document.removeEventListener("keydown", handleEsc)
        }
    }, [setShowUserMenu])

    return (
        <div className="relative" ref={menuRef}>
            {/* Dropdown */}
            <div className="absolute right-0 mt-2 w-56 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl z-50 overflow-hidden transition-all duration-200 animate-in fade-in zoom-in-95">

                <MenuItem href="/dashboard/profile" icon={<UserCircle size={18} />} label="Profile" onClick={handleMenuClick} />
                <MenuItem href="/dashboard/help" icon={<HelpCircle size={18} />} label="Help" onClick={handleMenuClick}/>
                <MenuItem href="/dashboard/feedback" icon={<MessageCircle size={18} />} label="Feedback" onClick={handleMenuClick}/>
                <MenuItem href="/home/reset-password" icon={<Lock size={18} />} label="reset Password" onClick={handleMenuClick}/>
                <MenuItem href="/wallet" icon={<Wallet size={18} />} label="Wallet" onClick={handleMenuClick}/>
                <MenuItem href="/dashboard/my-orders" icon={<ShoppingBag size={18} />} label="My Orders" onClick={handleMenuClick}/>

                <div className="border-t border-zinc-200 dark:border-zinc-800 my-1" />

                <button
                    className="flex w-full items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition"
                    onClick={() => router.push("/home/login")}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

