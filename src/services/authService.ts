import axios from "axios";

interface VerifyOtpPayload {
  otp: string;
  phoneNumber?: string;
  email?: string;
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


export interface LoginPayload {
  password: string,
  phoneNumber: string
}

export interface LoginResponse {
  success: boolean,
  message: string
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

export const userLogin = async (
  payload:LoginPayload
): Promise<LoginResponse> => {
  try{
        const response = await axios.post<LoginResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      payload
    );

    return response.data;

  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }

}