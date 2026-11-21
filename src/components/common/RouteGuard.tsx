"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import { isGuestRole, isRegisteredRole } from "@/src/utils/authStorage";

interface RouteGuardProps {
  children: React.ReactNode;
  /**
   * 'protected': User must be authenticated with registered role. Unauthenticated -> /login, GUEST -> /register.
   * 'guestOnly': Only unauthenticated or GUEST users can access. Registered users -> /dashboard.
   * 'point3': Point 3 check: GUEST -> /register, else /login.
   */
  mode?: "protected" | "guestOnly" | "point3";
  fallback?: React.ReactNode;
}

export default function RouteGuard({
  children,
  mode = "protected",
  fallback = null,
}: RouteGuardProps) {
  const router = useRouter();
  const { isAuthenticated, role, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;

    if (mode === "protected") {
      if (!isAuthenticated) {
        router.push("/login");
      } else if (isGuestRole(role)) {
        router.push("/register");
      }
    } else if (mode === "guestOnly") {
      if (isAuthenticated && isRegisteredRole(role)) {
        router.push("/dashboard");
      }
    } else if (mode === "point3") {
      if (isAuthenticated && isGuestRole(role)) {
        router.push("/register");
      } else {
        router.push("/login");
      }
    }
  }, [isLoading, isAuthenticated, role, mode, router]);

  if (isLoading) {
    return fallback ? <>{fallback}</> : null;
  }

  if (mode === "protected" && (!isAuthenticated || isGuestRole(role))) {
    return fallback ? <>{fallback}</> : null;
  }

  if (mode === "guestOnly" && isAuthenticated && isRegisteredRole(role)) {
    return fallback ? <>{fallback}</> : null;
  }

  return <>{children}</>;
}
