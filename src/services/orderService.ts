import axios from "axios";

export interface OrderItem {
  id: number;
  materialId: number;
  materialName: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  userId: number;
  userName: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
}

export interface OrderItem {
  id: number;
  materialId: number;
  materialName: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: number;
  orderNumber: string;
  userId: number;
  userName: string;
  status: string;
  totalAmount: number;
  items: OrderItem[];
  createdAt: string;
  updatedAt: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const getOrderById = async (id: number) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/orders/${id}`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching order details:", error);
    throw error;
  }
};


export const getOrdersByUserId = async (
  userId: number
): Promise<Order[]> => {
  const response = await axios.get<Order[]>(
    `/api/v1/orders/user/${userId}`
  );

  return response.data;
};


export const getAllOrders = async (): Promise<Order[]> => {
  const response = await axios.get<Order[]>("/api/v1/orders");

  return response.data;
};