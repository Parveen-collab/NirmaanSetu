import { AuthResponse } from "@/src/types/auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function refreshAccessToken(): Promise<AuthResponse | null> {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await fetch(
      `${API_URL}/auth/refresh?refreshToken=${encodeURIComponent(refreshToken)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return null;
    }

    const data: AuthResponse = await response.json();

    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);

    return data;
  } catch (error) {
    console.error("Token refresh failed:", error);
    return null;
  }
}