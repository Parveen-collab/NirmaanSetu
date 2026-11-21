"use client";

import { useEffect, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/context/AuthContext";
import {
  getPoint3GuardedRoute,
  isGuestRole,
  isRegisteredRole,
} from "@/src/utils/authStorage";

export interface UseRouteGuardOptions {
  /**
   * If true, automatically runs route check on mount
   */
  autoGuard?: boolean;
  /**
   * Mode:
   * - 'point3':
   *     - role is GUEST -> /register
   *     - unauthenticated / registered role -> /login
   * - 'protected':
   *     - unauthenticated -> /login
   *     - role is GUEST -> /register
   *     - registered role -> allow
   * - 'guestOnly':
   *     - registered role -> /dashboard
   *     - unauthenticated or GUEST -> allow
   */
  mode?: "point3" | "protected" | "guestOnly";
}

export function useRouteGuard(options: UseRouteGuardOptions = {}) {
  const router = useRouter();
  const { auth, isAuthenticated, role, isLoading } = useAuth();
  const [, startTransition] = useTransition();

  const getGuardedRoute = (
    targetMode: "point3" | "protected" | "guestOnly" = options.mode || "point3"
  ): string | null => {
    if (targetMode === "point3") {
      return getPoint3GuardedRoute(role, isAuthenticated);
    }
    if (targetMode === "protected") {
      if (!isAuthenticated) return "/login";
      if (isGuestRole(role)) return "/register";
      return null;
    }
    if (targetMode === "guestOnly") {
      if (isAuthenticated && isRegisteredRole(role)) {
        return "/dashboard";
      }
      return null;
    }
    return null;
  };

  const navigateGuarded = (
    overrideMode?: "point3" | "protected" | "guestOnly"
  ) => {
    const target = getGuardedRoute(overrideMode || options.mode || "point3");
    if (target) {
      startTransition(() => {
        router.push(target);
      });
    }
  };

  useEffect(() => {
    if (!options.autoGuard || isLoading) return;

    const target = getGuardedRoute(options.mode);
    if (target) {
      router.push(target);
    }
  }, [options.autoGuard, options.mode, isLoading, isAuthenticated, role, router]);

  return {
    isAuthenticated,
    role,
    isLoading,
    auth,
    getGuardedRoute,
    navigateGuarded,
  };
}
