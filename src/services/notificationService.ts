import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export interface Notification {
  id: number;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export const getNotificationById = async (id: number) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/v1/notifications/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
    throw error;
  }
};