"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { useRouter } from "next/navigation";
import {
  StoredAuthData,
  getStoredAuth,
  setStoredAuth,
  clearStoredAuth,
  getPoint3GuardedRoute,
  isGuestRole,
  isRegisteredRole,
} from "@/src/utils/authStorage";

export interface AuthContextType {
  auth: StoredAuthData;
  isAuthenticated: boolean;
  role: string | null;
  userId: string | null;
  registrationStatus: string | null;
  isLoading: boolean;
  login: (data: {
    accessToken: string;
    refreshToken?: string;
    userId?: string | number;
    role?: string;
    registrationStatus?: string;
  }) => void;
  logout: () => void;
  setRole: (role: string) => void;
  getGuardedTargetRoute: () => string;
  navigateGuardedAction: () => void;
  isGuest: boolean;
  isRegistered: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [auth, setAuth] = useState<StoredAuthData>({
    accessToken: null,
    refreshToken: null,
    userId: null,
    role: null,
    registrationStatus: null,
    isAuthenticated: false,
  });
  const [isLoading, setIsLoading] = useState(true);

  const syncAuth = useCallback(() => {
    const current = getStoredAuth();
    setAuth(current);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    syncAuth();

    const handleStorageChange = (e: StorageEvent) => {
      if (
        e.key === "accessToken" ||
        e.key === "role" ||
        e.key === "userId" ||
        e.key === "registrationStatus" ||
        e.key === null
      ) {
        syncAuth();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [syncAuth]);

  const login = useCallback(
    (data: {
      accessToken: string;
      refreshToken?: string;
      userId?: string | number;
      role?: string;
      registrationStatus?: string;
    }) => {
      setStoredAuth(data);
      syncAuth();
    },
    [syncAuth]
  );

  const logout = useCallback(() => {
    clearStoredAuth();
    syncAuth();
  }, [syncAuth]);

  const setRole = useCallback(
    (newRole: string) => {
      setStoredAuth({ role: newRole });
      syncAuth();
    },
    [syncAuth]
  );

  const getGuardedTargetRoute = useCallback(() => {
    return getPoint3GuardedRoute(auth.role, auth.isAuthenticated);
  }, [auth.role, auth.isAuthenticated]);

  const navigateGuardedAction = useCallback(() => {
    const target = getPoint3GuardedRoute(auth.role, auth.isAuthenticated);
    router.push(target);
  }, [auth.role, auth.isAuthenticated, router]);

  return (
    <AuthContext.Provider
      value={{
        auth,
        isAuthenticated: auth.isAuthenticated,
        role: auth.role,
        userId: auth.userId,
        registrationStatus: auth.registrationStatus,
        isLoading,
        login,
        logout,
        setRole,
        getGuardedTargetRoute,
        navigateGuardedAction,
        isGuest: isGuestRole(auth.role),
        isRegistered: isRegisteredRole(auth.role),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
