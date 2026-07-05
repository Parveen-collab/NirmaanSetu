
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