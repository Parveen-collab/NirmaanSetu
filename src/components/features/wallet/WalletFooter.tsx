"use client";

import React from "react";
import Link from "next/link";
import {
  Wallet,
  CreditCard,
  History,
  PlusCircle,
  ShieldCheck,
} from "lucide-react";
import CopyrightFooter from "@/src/components/features/CopyrightFooter";

const WalletFooter = () => {
  return (
    <footer className="mt-10 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-6">

        {/* Wallet Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-6">

          <Link
            href="/wallet"
            className="flex flex-col items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary transition"
          >
            <Wallet size={20} />
            Wallet
          </Link>

          <Link
            href="/wallet/payments"
            className="flex flex-col items-center gap-2 text-sm hover:text-primary transition"
          >
            <CreditCard size={20} />
            Payments
          </Link>

          <Link
            href="/wallet/payments"
            className="flex flex-col items-center gap-2 text-sm hover:text-primary transition"
          >
            <History size={20} />
            Transactions
          </Link>

          <Link
            href="/wallet/payments/pay"
            className="flex flex-col items-center gap-2 text-sm hover:text-primary transition"
          >
            <PlusCircle size={20} />
            Pay
          </Link>

        </div>

        {/* Security Message */}
        <div className="flex items-center justify-center gap-2 text-xs text-green-600 dark:text-green-400 mb-4">
          <ShieldCheck size={14} />
          Secure escrow & encrypted payments powered by NirmaanSetu
        </div>

        {/* Copyright */}
        <CopyrightFooter/>

      </div>

    </footer>
  );
};

export default WalletFooter;
