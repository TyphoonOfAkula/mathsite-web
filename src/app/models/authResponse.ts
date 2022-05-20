export interface AuthResponse {
  token?: string;
  expiration?: Date;
  success?: boolean;
  message?: string;
}
