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
import { useRegister } from '../../../api/auth/useRegister';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type RegisterFormValues,
  RegisterSchema,
} from '../../../api/auth/RegisterSchema';

export default function RegisterForm() {
  const { mutate, isPending} = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterFormValues) => {
    mutate({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      password: data.password,
    });
  };

  return (
    <FieldSet className="flex flex-col w-full gap-4">
      <FieldGroup>
        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="name"
            className="text-sm font-bold text-neutral-950"
          >
            Name
          </FieldLabel>
          <Input
            type="name"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('name')}
          />
          {errors.name && <FieldError>{errors.name.message}</FieldError>}
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="email"
            className="text-sm font-bold text-neutral-950"
          >
            Email
          </FieldLabel>
          <Input
            type="email"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('email')}
          />
          {errors.email && <FieldError>{errors.email.message}</FieldError>}
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="phoneNumber"
            className="text-sm font-bold text-neutral-950"
          >
            Nomor Handphone
          </FieldLabel>
          <Input
            type="text"
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('phoneNumber')}
          />
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="password"
            className="text-sm font-bold text-neutral-950"
          >
            Password
          </FieldLabel>
          <Input
            type="password"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('password')}
          />
          {errors.password && (
            <FieldError>{errors.password.message}</FieldError>
          )}
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="password"
            className="text-sm font-bold text-neutral-950"
          >
            Confirm Password
          </FieldLabel>
          <Input
            type="password"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
            {...register('confirmPassword')}
          />
          {errors.confirmPassword && (
            <FieldError>{errors.confirmPassword.message}</FieldError>
          )}
        </Field>

        <Button
          variant={'borrowbook'}
          className="w-full h-12 p-2 gap-2"
          onClick={handleSubmit(onSubmit)}
          disabled={isPending}
        >
          {isPending ? 'Processing...' : 'Submit'}
        </Button>

        <div className="flex flex-row gap-1 justify-center">
          <p className="text-md font-semibold text-neutral-950">
            Already have an account?
          </p>
          <Link to="/Login">
            <span className="text-md font-bold text-primary-100c hover:underline cursor-pointer">
              Login
            </span>
          </Link>
        </div>
      </FieldGroup>
    </FieldSet>
  );
}
