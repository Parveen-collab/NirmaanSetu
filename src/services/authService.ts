import axios from "axios";

interface VerifyOtpPayload {
  otp: string;
  phoneNumber: string;
}

interface SendOtpPayload {
  phoneNumber?: string;
  email?: string;
}


interface SendOtpResponse {
  success: boolean;
  message: string;
}

interface VerifyOtpResponse {
  success?: boolean;
  accessToken: string;
  refreshToken: string;
  token?: string;
  message?: string;
}

export const sendOtp = async (
  payload: SendOtpPayload
): Promise<SendOtpResponse> => {
  try {
    const response = await axios.post<SendOtpResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/send-otp`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Send OTP failed:", error);
    throw error;
  }
};

export const verifyOtp = async (
  payload: VerifyOtpPayload
): Promise<VerifyOtpResponse> => {
  try {
    const response = await axios.post<VerifyOtpResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/verify-otp`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Verify OTP failed:", error);
    throw error;
  }
};
