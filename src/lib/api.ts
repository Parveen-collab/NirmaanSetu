import { refreshAccessToken } from "./auth";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetch(
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> {
  let accessToken = localStorage.getItem("accessToken");

  let response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  // Access token expired
  if (response.status === 401) {
    const refreshed = await refreshAccessToken();

    if (!refreshed) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");

      window.location.href = "/login";

      throw new Error("Session expired");
    }

    accessToken = refreshed.accessToken;

    // Retry original request
    response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  return response;
}