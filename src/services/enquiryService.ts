import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getAllEnquiries = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/enquiries`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error: any) {
    console.error("Get Enquiries API Error:", error);

    throw (
      error?.response?.data ||
      error?.message ||
      "Something went wrong"
    );
  }
};

import axiosInstance from "@/src/lib/axios";

export interface CreateEnquiryPayload {
  email: string;
  message: string;
  name: string;
  phone: string;
}

export const createEnquiry = async (
  payload: CreateEnquiryPayload
) => {
  const { data } = await axiosInstance.post(
    "/api/v1/enquiries",
    payload
  );

  return data;
};