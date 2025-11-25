import { useMutation } from '@tanstack/react-query';
import { registerRequest } from './RegisterServices';

export const useRegister = () => {
  return useMutation({
    mutationFn: registerRequest,

    onSuccess: (data) => {
      console.log('REGISTER SUCCESS -> data:', data);

      alert('Register Success!');
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
};
