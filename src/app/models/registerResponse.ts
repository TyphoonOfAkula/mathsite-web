export interface RegisterResponse {
  token?: string;
  expiration?: Date;
  success?: boolean;
  message?: string;
}
