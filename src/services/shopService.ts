import api from "@/src/lib/axios";

export interface CreateMaterialPayload {
  name: string;
  price: number;
  unit: string;
  description: string;
}

export const createMaterial = async (
  shopId: string,
  payload: CreateMaterialPayload
) => {
  try {
    const response = await api.post(
      `/api/v1/shops/${shopId}/materials`,
      payload
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};