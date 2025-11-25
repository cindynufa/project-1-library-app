import { ENDPOINTS } from '../../config/api';
import { api } from '../axios';
import type { RegisterResponse, RegisterRequest } from './RegisterTypes';

export const registerRequest = async (data: RegisterRequest) => {
  const res = await api.post<RegisterResponse>(ENDPOINTS.auth.register, data);
  return res.data;
};