import { BackendUserRole } from "@/src/types/user";
import { setCookie, getCookie, deleteCookie } from "./cookieHelpers";

export interface StoredAuthData {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
  role: BackendUserRole | string | null;
  registrationStatus: string | null;
  isAuthenticated: boolean;
}

export const REGISTERED_ROLES: string[] = [
  "EMPLOYEE",
  "EMPLOYER",
  "SUPPLIER",
  "ADMIN",
  "SUPER_ADMIN",
];

export function isGuestRole(role?: string | null): boolean {
  if (!role) return false;
  return role.trim().toUpperCase() === "GUEST";
}

export function isRegisteredRole(role?: string | null): boolean {
  if (!role) return false;
  return REGISTERED_ROLES.includes(role.trim().toUpperCase());
}

/**
 * Point 3 Route Guard logic:
 * - If role is GUEST -> route to /register
 * - If unauthenticated / registered role -> route to /login
 */
export function getPoint3GuardedRoute(
  role?: string | null,
  isAuthenticated?: boolean
): string {
  if (isAuthenticated && isGuestRole(role)) {
    return "/register";
  }
  return "/login";
}

export function getStoredAuth(): StoredAuthData {
  if (typeof window === "undefined") {
    return {
      accessToken: null,
      refreshToken: null,
      userId: null,
      role: null,
      registrationStatus: null,
      isAuthenticated: false,
    };
  }

  const accessToken =
    localStorage.getItem("accessToken") || getCookie("accessToken");
  const refreshToken =
    localStorage.getItem("refreshToken") || getCookie("refreshToken");
  const userId = localStorage.getItem("userId") || getCookie("userId");
  const role = localStorage.getItem("role") || getCookie("role");
  const registrationStatus =
    localStorage.getItem("registrationStatus") ||
    getCookie("registrationStatus");

  return {
    accessToken: accessToken || null,
    refreshToken: refreshToken || null,
    userId: userId || null,
    role: role || null,
    registrationStatus: registrationStatus || null,
    isAuthenticated: Boolean(accessToken),
  };
}

export function setStoredAuth(data: {
  accessToken?: string;
  refreshToken?: string;
  userId?: string | number;
  role?: string;
  registrationStatus?: string;
}): void {
  if (typeof window === "undefined") return;

  if (data.accessToken) {
    localStorage.setItem("accessToken", data.accessToken);
    setCookie("accessToken", data.accessToken);
  }
  if (data.refreshToken) {
    localStorage.setItem("refreshToken", data.refreshToken);
    setCookie("refreshToken", data.refreshToken);
  }
  if (data.userId !== undefined && data.userId !== null) {
    const uid = String(data.userId);
    localStorage.setItem("userId", uid);
    setCookie("userId", uid);
  }
  if (data.role) {
    localStorage.setItem("role", data.role);
    setCookie("role", data.role);
  }
  if (data.registrationStatus) {
    localStorage.setItem("registrationStatus", data.registrationStatus);
    setCookie("registrationStatus", data.registrationStatus);
  }
}

export function clearStoredAuth(): void {
  if (typeof window === "undefined") return;

  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("userId");
  localStorage.removeItem("role");
  localStorage.removeItem("registrationStatus");

  deleteCookie("accessToken");
  deleteCookie("refreshToken");
  deleteCookie("userId");
  deleteCookie("role");
  deleteCookie("registrationStatus");
}
