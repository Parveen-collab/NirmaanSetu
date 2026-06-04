import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const sendChatMessage = async (message: string) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/v1/chat/message`,
      {
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Chat API Error:", error);

    throw (
      error?.response?.data ||
      error?.message ||
      "Something went wrong"
    );
  }
};