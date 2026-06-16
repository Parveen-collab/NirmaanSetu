import axios from "axios";

const BASE_URL = "YOUR_BASE_URL";

export interface Employer {
  id: number;
  companyName: string;
  state: string;
  district: string;
  wardNumber: string;
  landmark: string;
  pincode: string;
  areaVillage: string;
  building: string;
  photoUrl: string;
  name: string;
  phoneNumber: string;
  email: string;
  profileImageUrl: string;
}

export const getEmployerById = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/employers`
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching employer:", error);
    throw error;
  }
};