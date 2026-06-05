import axios from "axios";

export const getDashboardStats = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/dashboard/stats`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );

  return response.data;
};