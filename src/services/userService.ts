import api from "@/src/lib/axios";

import {
  Address,
  EmployeeDetails,
  EmployerDetails,
  ShopDetails,
  UserRole,
} from "@/src/types/user";

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

  // Convert user object to JSON
  formData.append(
    "user",
    new Blob([JSON.stringify(user)], {
      type: "application/json",
    })
  );

  if (photo) {
    formData.append("photo", photo);
  }

  const response = await api.post("/user/register", formData);

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
  pincode: number;
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
  const response = await api.get("/user/all", {
    params: {
      role,
      keyword,
    },
  });

  return response.data;
};

export const getUserById = async (
  id: number | string
): Promise<User> => {
  const response = await api.get(`/user/${id}`);

  return response.data;
};

export interface UpdateUserPayload {
    phoneNumber: string;
    name: string;
    email?: string;
    aadhaarNumber: string;
    role: string;
    profileImageUrl?: string;

    addresses?: AddressDto[];

    employeeProfile?: EmployeeProfileDto;
    employerProfile?: EmployerProfileDto;
    supplierProfile?: SupplierProfileDto;
}

export interface AddressDto {
    type: "PERMANENT" | "CURRENT";
    state: string;
    district: string;
    wardNumber?: string;
    landmark?: string;
    pincode: string;
    areaVillage: string;
    building?: string;
    latitude?: number;
    longitude?: number;
}

export interface EmployeeProfileDto {
    serviceCategory: string;
    serviceSpeciality: string;
    experienceYears: number;
    verificationDocumentUrl?: string;
}

export interface EmployerProfileDto {
    companyName: string;
    state: string;
    district: string;
    wardNumber?: string;
    landmark?: string;
    pincode: string;
    areaVillage: string;
    building?: string;
    latitude?: number;
    longitude?: number;
}

export interface SupplierProfileDto {
    shopName: string;
    shopCategory: string;
    shopSpeciality: string;
    shopType: string;
    state: string;
    district: string;
    wardNumber?: string;
    landmark?: string;
    pincode: string;
    areaVillage: string;
    building?: string;
    latitude?: number;
    longitude?: number;
    verificationDocumentUrl?: string;
}

export const updateUser = async (
    id: string,
    data: any,
    photo?: File
) => {
    const formData = new FormData();

    formData.append(
        "user",
        new Blob([JSON.stringify(data)], {
            type: "application/json",
        })
    );

    if (photo) {
        formData.append("photo", photo);
    }

    const response = await api.patch(`/user/${id}`, formData);

    return response.data;
};