import axios from "axios";

export interface Review {
  id: number;
  reviewerId: number;
  reviewerName: string;
  reviewedUserId: number;
  rating: number;
  comment: string;
  sentiment: string;
  sentimentScore: number;
  flagReason: string;
  createdAt: string;
  flagged: boolean;
}

export interface CreateReviewPayload {
  reviewerId: number;
  reviewedUserId: number;
  rating: number;
  comment: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const getUserReviews = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/reviews/user/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user reviews:", error);
    throw error;
  }
};


export const getFlaggedReviews = async () => {
  const { data } = await axios.get("/api/v1/reviews/flagged");
  return data;
};


export const createReview = async (
  payload: CreateReviewPayload
): Promise<Review> => {
  const { data } = await axios.post<Review>(
    "/api/v1/reviews",
    payload
  );

  return data;
};