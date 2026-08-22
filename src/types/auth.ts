export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  userId: number;
  role: string;
  registrationStatus: string;
}