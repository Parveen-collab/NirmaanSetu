'use client'

import React from 'react'
import Link from 'next/link'

const LogIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      
      {/* Card */}
      <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-md dark:bg-zinc-900 dark:border-zinc-800 animate-fade">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-primary text-center mb-2">
          Welcome Back
        </h1>
        <p className="text-sm text-muted text-center mb-8">
          Login to your NirmaanSetu account
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Mobile / Email */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Mobile Number or Email
            </label>
            <input
              type="text"
              placeholder="Enter your mobile number or email"
              className="w-full rounded-lg border px-4 py-3 bg-background
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Password / OTP */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Password / OTP
            </label>
            <input
              type="password"
              placeholder="Enter password or OTP"
              className="w-full rounded-lg border px-4 py-3 bg-background
                         focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Forgot password */}
          <div className="text-right">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-primary py-3 font-semibold text-white
                       hover:opacity-90 transition cursor-pointer"
          >
            Log In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
          <span className="text-xs text-muted">OR</span>
          <div className="h-px flex-1 bg-zinc-300 dark:bg-zinc-700" />
        </div>

        {/* OTP Login */}
        <button
          className="w-full rounded-full border border-primary py-3
                     text-primary font-semibold hover:bg-primary hover:text-white
                     transition cursor-pointer"
        >
          Login with OTP
        </button>

        {/* Signup */}
        <p className="mt-6 text-center text-sm text-muted">
          Don’t have an account?{' '}
          <Link href="/register" className="text-primary font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogIn
