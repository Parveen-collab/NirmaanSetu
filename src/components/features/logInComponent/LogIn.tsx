"use client";

import React from "react";
import Link from "next/link";
import Input from "@/src/components/features/Input";
import Button from "@/src/components/features/Button";

const LogIn = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {/* Card */}
      <div className="w-full max-w-md animate-fade rounded-2xl border bg-white p-8 shadow-md dark:border-zinc-800 dark:bg-zinc-900">
        {/* Title */}
        <h1 className="mb-2 text-center text-3xl font-bold text-primary">
          Welcome Back
        </h1>
        <p className="mb-8 text-center text-sm text-muted">
          Login to your NirmaanSetu account
        </p>

        {/* Form */}
        <form className="space-y-6">
          {/* Username */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Username
            </label>
            <Input placeholder="Enter username or mobile" />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Password
            </label>
            <Input type="password" placeholder="Enter password" />
          </div>

          {/* Login Button */}
          <Button href="/dashboard" className="w-full">
            Log In
          </Button>
        </form>

        {/* Forgot Password */}
        <p className="mt-6 text-center text-sm text-muted">
          Forgot your password?{" "}
          <Link
            href="/home/reset-password"
            className="font-medium text-primary hover:underline"
          >
            Click here
          </Link>
        </p>

        {/* Register */}
        <p className="mt-4 text-center text-sm text-muted">
          New user?{" "}
          <Link
            href="/home/register"
            className="font-medium text-primary hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
