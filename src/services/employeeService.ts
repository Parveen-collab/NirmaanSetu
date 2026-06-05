import axios from "axios";

export const getEmployees = async () => {
  try {
    const response = await axios.get("/api/v1/employees");

    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error);
    throw error;
  }
};