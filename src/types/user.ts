export interface Address {
  state: string;
  district: string;
  area: string;
  building: string;
  landmark?: string;
  pincode: string;
}

export interface EmployeeDetails {
  serviceCategory: string;
  serviceSpecialty: string;
  experience: number;
}

export interface EmployerDetails {
  companyName: string;
  companyAddress: string;
  companyPhotos: string[];
}

export interface ShopDetails {
  shopName: string;
  shopCategory: string;
  shopSpeciality: string;
  shopType: string;
  shopAddress: string;
}

export type UserRole = "EMPLOYEE" | "EMPLOYER" | "SHOP";
