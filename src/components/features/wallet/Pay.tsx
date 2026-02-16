"use client";

import React, { useState } from "react";
import {
  Landmark,
  CreditCard,
  Smartphone,
  Wallet,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";
import Button from "@/src/components/common/Button";

const Pay = () => {
  const [method, setMethod] = useState("upi");

  const paymentMethods = [
    {
      id: "upi",
      title: "UPI / Wallet",
      icon: <Smartphone size={20} />,
      desc: "Pay using Google Pay, PhonePe, Paytm, etc.",
    },
    {
      id: "card",
      title: "Debit / Credit Card",
      icon: <CreditCard size={20} />,
      desc: "Visa, MasterCard, RuPay supported",
    },
    {
      id: "netbanking",
      title: "Internet Banking",
      icon: <Landmark size={20} />,
      desc: "All major banks supported",
    },
    {
      id: "wallet",
      title: "Wallet Balance",
      icon: <Wallet size={20} />,
      desc: "Pay directly using your NirmaanSetu wallet",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Complete Payment
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Select your payment method to complete the transaction.
        </p>
      </div>

      <div className="max-w-xl mx-auto">

        {/* Payment Summary */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5 shadow-sm mb-6">
          <h3 className="text-sm text-zinc-500 mb-2">Payment Summary</h3>

          <div className="flex justify-between text-sm mb-2">
            <span>Recipient</span>
            <span className="font-medium">Amit Kumar</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Purpose</span>
            <span className="font-medium">Residential Wiring Job</span>
          </div>

          <div className="flex justify-between font-semibold text-lg mt-3">
            <span>Total Amount</span>
            <span className="flex items-center gap-1">
              <IndianRupee size={18} />
              15,000
            </span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">

          <div className="p-5 border-b border-zinc-200 dark:border-zinc-800">
            <h2 className="font-semibold">
              Select Payment Method
            </h2>
          </div>

          <div className="divide-y divide-zinc-200 dark:divide-zinc-800">

            {paymentMethods.map((pm) => (
              <button
                key={pm.id}
                onClick={() => setMethod(pm.id)}
                className={`w-full flex items-center justify-between p-5 text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition
                ${
                  method === pm.id
                    ? "bg-primary/10 border-l-4 border-primary"
                    : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  {pm.icon}
                  <div>
                    <p className="font-medium">{pm.title}</p>
                    <p className="text-xs text-zinc-500">{pm.desc}</p>
                  </div>
                </div>

                <input
                  type="radio"
                  checked={method === pm.id}
                  readOnly
                />
              </button>
            ))}

          </div>
        </div>

        {/* Security Info */}
        <div className="flex items-center gap-2 mt-4 text-sm text-green-600">
          <ShieldCheck size={16} />
          Secure payment protected with escrow & encryption
        </div>

        {/* Pay Button */}
        <div className="mt-6">
          <Button fullWidth>
            Pay ₹15,000
          </Button>
        </div>

        {/* Cancel */}
        <div className="mt-3">
          <Button variant="secondary" href="/wallet/payments" fullWidth>
            Cancel
          </Button>
        </div>

      </div>

    </div>
  );
};

export default Pay;
