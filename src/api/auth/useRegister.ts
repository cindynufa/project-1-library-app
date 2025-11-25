import { useMutation } from '@tanstack/react-query';
import { registerRequest } from './RegisterServices';
import { useNavigate } from 'react-router';

export const useRegister = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: registerRequest,

    onSuccess: (data) => {
      console.log('REGISTER SUCCESS -> data:', data);

      alert('Register Success!');

      navigate('/login');
    },

    onError: (error: Error) => {
      console.log(error);
    },
  });
};
