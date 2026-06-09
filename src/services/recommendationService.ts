import axios from "axios"; // Update with your axios instance path

export interface EmployeeRecommendation {
  userId: number;
  name: string;
  phoneNumber: string;
  serviceCategory: string;
  serviceSpeciality: string;
  experienceYears: number;
  location: string;
  score: number;
}

export const reindexRecommendations = async (): Promise<string> => {
  const response = await axios.post(
    "/api/v1/recommendations/reindex"
  );

  return response.data;
};

export interface SupplierRecommendation {
  userId: number;
  name: string;
  phoneNumber: string;
  serviceCategory: string;
  serviceSpeciality: string;
  experienceYears: number;
  location: string;
  score: number;
}

export const getRecommendedSuppliers = async (
  query: string,
  limit: number = 5
): Promise<SupplierRecommendation[]> => {
  const response = await axios.get(
    "/api/v1/recommendations/suppliers",
    {
      params: {
        query,
        limit,
      },
    }
  );

  return response.data;
};

export const getRecommendedEmployees = async (
  query: string,
  limit: number = 5
): Promise<EmployeeRecommendation[]> => {
  const response = await axios.get<EmployeeRecommendation[]>(
    "/api/v1/recommendations/employees",
    {
      params: {
        query,
        limit,
      },
    }
  );

  return response.data;
};