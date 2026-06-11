import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getPaymentsByUserId = async (userId: number | string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/payments/user/${userId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user payments:", error);
    throw error;
  }
};