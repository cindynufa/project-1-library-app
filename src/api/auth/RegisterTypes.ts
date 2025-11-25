export interface RegisterPayload {
  name: string;
  email: string;
  phoneNumber?: string;
  password: string;
}

export interface RegisterResponse {
  // message: string;
  // status: string;
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
}
