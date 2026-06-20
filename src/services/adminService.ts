import axios from "axios";


export interface Address {
  areaVillage: string;
  district: string;
  pincode: string;
  state: string;
  type: "CURRENT" | "PERMANENT";
  wardNumber: string;
  landmark: string;
}

export interface CreateAdminRequest {
  phoneNumber: string;
  name: string;
  email: string;
  username: string;
  password: string;
  aadhaarNumber: string;
  role: "ADMIN" | "SUPPLIER";
  addresses: Address[];
}


export const createAdmin = async (
  userData: CreateAdminRequest,
  photo?: File
) => {
  const formData = new FormData();

  formData.append(
    "user",
    new Blob([JSON.stringify(userData)], {
      type: "application/json",
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await axios.post(
    "/api/v1/admin/create-admin",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};