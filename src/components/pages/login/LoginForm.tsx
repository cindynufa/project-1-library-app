import { Link } from 'react-router';
import { Button } from '../../ui/button';
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '../../ui/field';
import { Input } from '../../ui/input';
import { useLogin } from '../../../api/auth/useLogin';
import { useForm } from 'react-hook-form';
import type { LoginRequest } from '../../../api/auth/LoginTypes';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../../api/auth/LoginSchema';

export default function LoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginRequest) => {
    mutate(data);
  };

  return (
    <FieldSet className="flex flex-col w-full gap-4">
      <FieldGroup>
        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="email"
            className="text-sm font-bold text-neutral-950"
          >
            Email
          </FieldLabel>
          <Input
            id="email"
            type="email"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('email')}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>
        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="password"
            className="text-sm font-bold text-neutral-950"
          >
            Password
          </FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder=""
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('password')}
          />
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>

        <Button
          variant={'borrowbook'}
          className="w-full h-12 p-2 gap-2"
          disabled={isPending}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? 'Logging in...' : 'Login'}
        </Button>

        <div className="flex flex-row gap-1 justify-center">
          <p className="text-md font-semibold text-neutral-950">
            Don't have an account?
          </p>
          <Link to="/Register">
            <span className="text-md font-bold text-primary-100c hover:underline cursor-pointer">
              Register
            </span>
          </Link>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
