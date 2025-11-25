import { ENDPOINTS } from '../../config/api';
import { api } from '../axios';
import type { RegisterResponse, RegisterPayload } from './RegisterTypes';

export const registerRequest = async (data: RegisterPayload) => {
  const res = await api.post<RegisterResponse>(ENDPOINTS.auth.register, data);
  return res.data;
};

// export const registerRequest = async (data: RegisterPayload) => {
//   try {
//     const res = await api.post<RegisterResponse>(ENDPOINTS.auth.register, data);
//     return res.data;
//   } catch (error: any) {
//     console.log("REGISTER ERROR:", error.response?.data);
//     throw error;
//   }
// }
