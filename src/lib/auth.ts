import { AuthResponse } from "@/src/types/auth";
import { setStoredAuth } from "@/src/utils/authStorage";

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

        setStoredAuth({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            userId: data.userId,
            role: data.role,
            registrationStatus: data.registrationStatus,
        });

        return data;

    } catch (error) {
        console.error(
            "Token refresh failed:",
            error
        );

        return null;
    }
}