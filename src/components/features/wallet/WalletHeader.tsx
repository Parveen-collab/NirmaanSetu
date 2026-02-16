"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Wallet,
  PlusCircle,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

const WalletHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">

      <div className="max-w-6xl mx-auto px-4 py-4">

        {/* Top Row */}
        <div className="flex items-center justify-between">

          {/* Left Section */}
          <div className="flex items-center gap-3">

            {/* Back Button */}
            <Link
              href="/dashboard"
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <ArrowLeft size={18} />
            </Link>

            {/* Title */}
            <div>
              <h1 className="text-lg font-semibold">
                Wallet
              </h1>

              <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-400">
                <ShieldCheck size={12} />
                Secure Payments
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">

            {/* Add Money */}
            <Link
              href="/wallet/add-money"
              className="hidden sm:flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:opacity-90 transition"
            >
              <PlusCircle size={16} />
              Add Money
            </Link>

            {/* Pay */}
            <Link
              href="/wallet/payments/pay"
              className="flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 px-3 py-1.5 rounded-lg text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              <CreditCard size={16} />
              Pay
            </Link>

          </div>

        </div>

        {/* Wallet Balance Bar */}
        <div className="mt-4 flex items-center justify-between bg-zinc-100 dark:bg-zinc-800 rounded-xl px-4 py-3">

          <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-300">
            <Wallet size={16} />
            Wallet Balance
          </div>

          <div className="font-semibold text-zinc-900 dark:text-white">
            ₹48,500
          </div>

        </div>

      </div>

    </header>
  );
};

export default WalletHeader;
