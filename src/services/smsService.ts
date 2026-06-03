import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const sendSmsApi = async (phone: string) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/v1/sms/send`,
      {},
      {
        params: {
          phone,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    throw error?.response?.data || error;
  }
};