"use client";

import React from "react";

export default function PostWorkPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black px-4 py-6 sm:px-6 lg:px-10">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-zinc-900 dark:text-white">
          Post New Work
        </h1>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          Create a new job and notify employees & shops
        </p>
      </div>

      {/* Form Card */}
      <div className="max-w-3xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
        <form className="space-y-6">

          {/* Work Category */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Work Category
            </label>
            <input
              type="text"
              placeholder="e.g. Residential Building"
              className="mt-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Address / Work Location
            </label>
            <textarea
              rows={3}
              placeholder="Enter full project address"
              className="mt-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Duration of Work
            </label>
            <input
              type="text"
              placeholder="e.g. 120 days"
              className="mt-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:focus:ring-zinc-700"
            />
          </div>

          {/* Required Persons */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-3">
              Required Persons
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <input
                type="number"
                placeholder="Labour"
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none"
              />
              <input
                type="number"
                placeholder="Mason"
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none"
              />
              <input
                type="number"
                placeholder="Electrician"
                className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Project Value */}
          <div>
            <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Project Value (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 400000"
              className="mt-2 w-full rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent px-4 py-2 text-sm outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="rounded-xl border border-zinc-300 dark:border-zinc-700 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-black px-5 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Create Work
            </button>
          </div>
        </form>
      </div>

      {/* Info Section */}
      <div className="mt-6 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          📢 Once work is created, notifications will be sent to relevant employees and shops.
        </p>
        <p className="mt-1">
          ⭐ After project completion, a feedback link will be generated automatically.
        </p>
      </div>
    </div>
  );
}
