"use client";

import React from "react";
import {
  Wallet,
  CreditCard,
  ArrowDownToLine,
  ArrowUpFromLine,
  Lock,
  History,
} from "lucide-react";
import Button from "@/src/components/common/Button";

const WalletPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Wallet
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Manage your balance, payments, escrow, and transactions.
        </p>
      </div>

      {/* Balance Card */}
      <div className="mb-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-zinc-500">Total Wallet Balance</p>
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-1">
              ₹48,500
            </h2>
          </div>

          <Wallet className="text-primary" size={36} />
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/wallet/payments">
            <CreditCard size={16} />
            Payments
          </Button>

          <Button variant="secondary">
            <ArrowDownToLine size={16} />
            Add Money
          </Button>

          <Button variant="secondary">
            <ArrowUpFromLine size={16} />
            Withdraw
          </Button>
        </div>
      </div>

      {/* Wallet Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

        {/* Payments */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition">
          <CreditCard className="mb-3 text-primary" size={24} />
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Payments
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            Send payments to workers, contractors, or shops.
          </p>

          <div className="mt-4">
            <Button href="/wallet/payments">
              Open Payments
            </Button>
          </div>
        </div>

        {/* Escrow */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition">
          <Lock className="mb-3 text-yellow-500" size={24} />
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Escrow
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            Manage secure payments held until work completion.
          </p>

          <div className="mt-4">
            <Button href="/wallet/payments">
              View Escrow
            </Button>
          </div>
        </div>

        {/* Transactions */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm hover:shadow-md transition">
          <History className="mb-3 text-green-500" size={24} />
          <h3 className="font-semibold text-zinc-900 dark:text-white">
            Transactions
          </h3>
          <p className="text-sm text-zinc-500 mt-1">
            View your payment and wallet transaction history.
          </p>

          <div className="mt-4">
            <Button href="/wallet/payments">
              View Transactions
            </Button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default WalletPage;
