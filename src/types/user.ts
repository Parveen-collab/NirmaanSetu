
export type BackendUserRole =
  | "EMPLOYEE"
  | "EMPLOYER"
  | "SUPPLIER"
  | "ADMIN"
  | "SUPER_ADMIN"
  | "GUEST";

export type UserRole =
  | "EMPLOYEE"
  | "EMPLOYER"
  | "SUPPLIER";

export interface Address {
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

export interface EmployeeProfile {
  serviceCategory: string;
  serviceSpeciality: string;
  experienceYears: number;
  verificationDocumentUrl?: string;
}

export interface EmployerProfile {
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

export interface SupplierProfile {
  shopName: string;
  shopCategory: string;
  shopSpeciality: string;
  shopType: ShopType;
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

export interface ShopType {
  construction: string;
}

export interface RegisterPayload {
  phoneNumber: string;
  name: string;
  email?: string;
  aadhaarNumber: string;

  addresses: Address[];

  role: UserRole;

  employeeProfile?: EmployeeProfile;
  employerProfile?: EmployerProfile;
  supplierProfile?: SupplierProfile;
}
