import axios from "axios";

interface VerifyOtpPayload {
  otp: string;
  phoneNumber: string;
}

export const verifyOtp = async (
  payload: VerifyOtpPayload
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/verify-otp`,
    payload
  );

  return response.data;
};



interface SendOtpPayload {
  phoneNumber: string;
}

export const sendOtp = async (
  payload: SendOtpPayload
) => {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/send-otp`,
    payload
  );

  return response.data;
};