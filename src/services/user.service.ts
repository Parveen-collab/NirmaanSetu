import api from "@/src/lib/axios";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await api.get(`/users/${id}`);
  return response.data;
};

export const createUser = async (payload: any) => {
  const response = await api.post("/users", payload);
  return response.data;
};