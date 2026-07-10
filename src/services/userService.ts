
import axios from "axios";

import {Address, EmployeeDetails, EmployerDetails, ShopDetails, UserRole} from "@/src/types/user"

export interface RegisterPayload {
  // Step 1 - Identity
  mobileNumber: string;
  fullName: string;
  aadhaarNumber: string;

  // Step 2 - Address
  permanentAddress: Address;
  currentAddress: Address;

  // Step 3 - Role
  role: UserRole;

  // Step 4 - Role Specific Details
  employeeDetails?: EmployeeDetails;
  employerDetails?: EmployerDetails;
  shopDetails?: ShopDetails;
}


export const registerUser = async (
  user: RegisterPayload,
  photo?: File
) => {
  const formData = new FormData();

  // Convert object to JSON string
  formData.append(
    "user",
    new Blob([JSON.stringify(user)], {
      type: "application/json",
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/user/register`,
    formData
  );

  return response.data;
};


export interface FullAddress {
  areaVillage: string;
  district: string;
  state: string;
  pincode: string;
  wardNumber: string;
  landmark: string;
  building: string;
  latitude: number;
  longitude: number;
  type: "CURRENT" | "PERMANENT";
}

export interface EmployeeProfile {
  experienceYears: number;
  serviceCategory: string;
  serviceSpeciality: string;
  verificationDocumentUrl: string;
}

export interface EmployerProfile {
  companyName: string;
}

export interface SupplierProfile {
  shopName: string;
  shopCategory: string;
  shopSpeciality: string;
  shopType: string;
}

export interface User {
  id: number;
  phoneNumber: string;
  name: string;
  email: string;
  username: string;
  aadhaarNumber: string;
  role: string;
  profileImageUrl: string;

  addresses: FullAddress[];

  employeeProfile?: EmployeeProfile;

  employerProfile?: EmployerProfile;

  supplierProfile?: SupplierProfile;

  message: string;
}


interface Params {
  role?: string;
  keyword?: string;
}

export const getUsers = async ({
  role,
  keyword,
}: Params): Promise<User[]> => {

  const response = await axios.get("/user/all", {
    params: {
      role,
      keyword,
    },
  });

  return response.data;
};