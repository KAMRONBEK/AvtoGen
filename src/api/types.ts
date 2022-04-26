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
export interface EntriesRequest {
  category_id: number;
  service_id: number;
  pricelist_id: number;
  when: string;
  datetime: string;
}

export interface EntriesResponse {
  category_id: number;
  service_id: number;
  pricelist_id: number;
  datetime: string;
  user_id: number;
  status: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}
