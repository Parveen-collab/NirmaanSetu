"use client";

import React from "react";
import { Wallet2, Lock, ArrowUpRight, ArrowDownLeft, IndianRupee } from "lucide-react";

interface Transaction {
  id: number;
  title: string;
  amount: string;
  status: "escrow" | "completed";
  to: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Residential Wiring Job",
    amount: "₹15,000",
    status: "escrow",
    to: "Amit Kumar",
    date: "20 Jan 2026",
  },
  {
    id: 2,
    title: "Cement Purchase",
    amount: "₹8,500",
    status: "completed",
    to: "Patna Hardware Store",
    date: "18 Jan 2026",
  },
  {
    id: 3,
    title: "Road Construction",
    amount: "₹25,000",
    status: "completed",
    to: "Rahul Verma",
    date: "12 Jan 2026",
  },
];

export default function WalletPage() {
  return (
    <div className="bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Wallet
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Manage payments, escrow, and transactions securely
        </p>
      </div>

      {/* Wallet Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Wallet2 className="text-zinc-600 dark:text-zinc-300" />
            <p className="text-sm text-zinc-500">Wallet Balance</p>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">
            ₹48,500
          </h3>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Lock className="text-zinc-600 dark:text-zinc-300" />
            <p className="text-sm text-zinc-500">In Escrow</p>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">
            ₹15,000
          </h3>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <IndianRupee className="text-zinc-600 dark:text-zinc-300" />
            <p className="text-sm text-zinc-500">Available Balance</p>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-white">
            ₹33,500
          </h3>
        </div>
      </div>

      {/* Transactions */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Transactions
          </h2>
        </div>

        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >
              {/* Info */}
              <div>
                <h3 className="font-medium text-zinc-900 dark:text-white">
                  {tx.title}
                </h3>
                <p className="text-sm text-zinc-500">
                  To: {tx.to} • {tx.date}
                </p>
              </div>

              {/* Amount & Status */}
              <div className="flex items-center gap-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    tx.status === "escrow"
                      ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                  }`}
                >
                  {tx.status === "escrow" ? "In Escrow" : "Completed"}
                </span>
                <span className="font-semibold text-zinc-900 dark:text-white">
                  {tx.amount}
                </span>

                {tx.status === "escrow" ? (
                  <button className="flex items-center gap-2 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black px-3 py-1.5 text-sm hover:opacity-90 transition">
                    <ArrowUpRight size={14} />
                    Release
                  </button>
                ) : (
                  <ArrowDownLeft className="text-green-600" size={18} />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Platform Commission Info */}
      <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400 max-w-3xl">
        <p>💡 Platform Commission applies only on work payments.</p>
        <p>No commission is charged on material purchases.</p>
      </div>
    </div>
  );
}
