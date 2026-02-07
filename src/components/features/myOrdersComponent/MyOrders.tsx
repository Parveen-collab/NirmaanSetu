'use client'

import React from 'react'
import Button from '@/src/components/features/Button'

const orders = [
  {
    id: 'ORD-1001',
    date: '2026-01-28',
    status: 'Delivered',
    amount: '₹1,299',
  },
  {
    id: 'ORD-1002',
    date: '2026-01-29',
    status: 'Pending',
    amount: '₹799',
  },
  {
    id: 'ORD-1003',
    date: '2026-01-30',
    status: 'Cancelled',
    amount: '₹499',
  },
]

const statusStyles: Record<string, string> = {
  Delivered: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  Pending: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  Cancelled: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
}

const MyOrders = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            My Orders
          </h1>

          <Button href="/dashboard" variant="secondary">
            Back to Dashboard
          </Button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
              <tr>
                <th className="px-4 py-3 text-left">Order ID</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {orders.map(order => (
                <tr
                  key={order.id}
                  className="border-t border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition"
                >
                  <td className="px-4 py-3 font-medium">{order.id}</td>
                  <td className="px-4 py-3">{order.date}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[order.status]}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{order.amount}</td>
                  <td className="px-4 py-3 text-right">
                    <Button variant="primary">
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State (ready for API) */}
        {orders.length === 0 && (
          <div className="text-center py-12 text-zinc-500">
            No orders found.
          </div>
        )}
      </div>
    </div>
  )
}

export default MyOrders
