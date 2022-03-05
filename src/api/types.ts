export interface LoginRequest {
  name: string;
  phone: number;
  device: number;
}

export interface LoginResponse {
  success: boolean;
  code: string;
  message: string;
  data: any[];
}

export interface VerifyResponse {
  success: boolean;
  code: string;
  message: string;
  data: any[];
}

export interface VerifyRequest {
  phone: string;
  code: string;
  device: string;
}
