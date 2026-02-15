"use client";

import React from "react";
import {
  Wallet2,
  Lock,
  ArrowUpRight,
  ArrowDownLeft,
  IndianRupee,
  PlusCircle,
  ArrowDownCircle,
  Briefcase,
  Package,
} from "lucide-react";

import Button from "@/src/components/common/Button";

interface Transaction {
  id: number;
  title: string;
  amount: string;
  status: "escrow" | "completed";
  type: "work" | "material";
  to: string;
  date: string;
}

const transactions: Transaction[] = [
  {
    id: 1,
    title: "Residential Wiring Job",
    amount: "₹15,000",
    status: "escrow",
    type: "work",
    to: "Amit Kumar",
    date: "20 Jan 2026",
  },
  {
    id: 2,
    title: "Cement Purchase",
    amount: "₹8,500",
    status: "completed",
    type: "material",
    to: "Patna Hardware Store",
    date: "18 Jan 2026",
  },
  {
    id: 3,
    title: "Road Construction",
    amount: "₹25,000",
    status: "completed",
    type: "work",
    to: "Rahul Verma",
    date: "12 Jan 2026",
  },
];

export default function Payment() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Wallet Payments
        </h1>

        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Manage escrow, transactions, and securely pay workers or suppliers.
        </p>
      </div>

      {/* Wallet Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">

        {/* Wallet Balance */}
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Wallet2 className="text-primary" />
            <p className="text-sm text-zinc-500">Wallet Balance</p>
          </div>

          <h3 className="mt-3 text-2xl font-semibold">
            ₹48,500
          </h3>
        </div>

        {/* Escrow */}
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <Lock className="text-yellow-500" />
            <p className="text-sm text-zinc-500">In Escrow</p>
          </div>

          <h3 className="mt-3 text-2xl font-semibold">
            ₹15,000
          </h3>
        </div>

        {/* Available */}
        <div className="rounded-2xl border bg-white dark:bg-zinc-900 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <IndianRupee className="text-green-500" />
            <p className="text-sm text-zinc-500">Available Balance</p>
          </div>

          <h3 className="mt-3 text-2xl font-semibold">
            ₹33,500
          </h3>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="flex flex-wrap gap-3 mb-8">

        <Button href="/wallet/payments/pay">
          <PlusCircle size={16} />
          New Payment
        </Button>

        <Button variant="secondary">
          <ArrowDownCircle size={16} />
          Add Money
        </Button>

        <Button variant="secondary">
          Withdraw
        </Button>

      </div>

      {/* Transactions */}
      <div className="rounded-2xl border bg-white dark:bg-zinc-900 shadow-sm">

        {/* Header */}
        <div className="p-5 border-b">
          <h2 className="text-lg font-semibold">
            Recent Transactions
          </h2>
        </div>

        {/* List */}
        <div className="divide-y">

          {transactions.map((tx) => (

            <div
              key={tx.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
            >

              {/* Left */}
              <div className="flex items-start gap-3">

                {/* Icon */}
                <div className="mt-1">

                  {tx.type === "work" ? (
                    <Briefcase size={18} className="text-blue-500" />
                  ) : (
                    <Package size={18} className="text-purple-500" />
                  )}

                </div>

                {/* Text */}
                <div>

                  <h3 className="font-medium">
                    {tx.title}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    To: {tx.to}
                  </p>

                  <p className="text-xs text-zinc-400">
                    {tx.date}
                  </p>

                </div>

              </div>

              {/* Right */}
              <div className="flex items-center gap-4">

                {/* Status */}
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full
                  ${
                    tx.status === "escrow"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {tx.status === "escrow" ? "In Escrow" : "Completed"}
                </span>

                {/* Amount */}
                <span className="font-semibold">
                  {tx.amount}
                </span>

                {/* Action */}
                {tx.status === "escrow" ? (
                  <button className="flex items-center gap-2 bg-primary text-white px-3 py-1.5 rounded-lg text-sm hover:opacity-90 transition">
                    <ArrowUpRight size={14} />
                    Release
                  </button>
                ) : (
                  <ArrowDownLeft size={18} className="text-green-600" />
                )}

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Commission Info */}
      <div className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
        <p>💡 Commission applies only on work payments.</p>
        <p>Material purchases have zero commission.</p>
      </div>

      {/* Sticky Pay Button (Mobile Friendly) */}
      <div className="fixed bottom-6 right-6 sm:hidden">
        <Button href="/wallet/payments/pay">
          Pay
        </Button>
      </div>

    </div>
  );
}
