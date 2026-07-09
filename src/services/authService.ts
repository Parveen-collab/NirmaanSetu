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

export interface ResetPasswordPayload {
  confirmPassword: string,
  newPassword: string,
  otp: string,
  phoneNumber: string
}

export interface ResetPasswordResponse {
  message: string;
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
  payload: LoginPayload
): Promise<LoginResponse> => {
  try {
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

export const resetPassword = async (
  payload: ResetPasswordPayload
): Promise<ResetPasswordResponse> => {
  try {
    const response = await axios.post<ResetPasswordResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      payload
    );

    return response.data;

  } catch (error) {
    console.error("Reset Password failed:", error);
    throw error;
  }

}

export interface SendForgotOtpPayload {
  phoneNumber: string;
}

export interface SendForgotOtpResponse {
  message: string;
}

export const sendForgotOtp = async (
  payload: SendForgotOtpPayload
): Promise<SendForgotOtpResponse> => {
  try {
    const response = await axios.post<SendForgotOtpResponse>(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/send-otp-forgot`,
      payload
    );

    return response.data;
  } catch (error) {
    console.error("Send Forgot OTP failed:", error);
    throw error;
  }
};