import axios from "axios";

export interface CreateMaterialPayload {
  name: string;
  description: string;
  price: number;
  unit: string;
}

export interface MaterialResponse {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
}

export const createMaterial = async (
  shopId: number,
  payload: CreateMaterialPayload
): Promise<MaterialResponse> => {
  const response = await axios.post(
    `/api/v1/shops/${shopId}/materials`,
    payload
  );

  return response.data;
};

export interface ShopOwner {
  id: number;
  phoneNumber: string;
  name: string;
  email: string;
  username: string;
  password: string;
  aadhaarNumber: string;
  role: string;
}

export interface ShopResponse {
  id: number;
  name: string;
  address: string;
  contactNumber: string;
  owner: ShopOwner;
}

export const getShopById = async (
  shopId: number
): Promise<ShopResponse> => {
  const response = await axios.get(
    `/api/v1/shops/${shopId}`
  );

  return response.data;
};