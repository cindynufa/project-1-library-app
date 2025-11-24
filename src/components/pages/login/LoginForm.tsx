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

export default function LoginForm() {
  return (
    <FieldSet className="flex flex-col w-full gap-4">
      <FieldGroup>
        <Field className='flex flex-col gap-0.5'>
          <FieldLabel htmlFor="email" className='text-sm font-bold text-neutral-950'>Email</FieldLabel>
          <Input id="email" type="email" required />
          <FieldError className="hidden">Please enter your email</FieldError>
        </Field>
        <Field className='flex flex-col gap-0.5'>
          <FieldLabel htmlFor="password" className='text-sm font-bold text-neutral-950'>Password</FieldLabel>
          <Input id="password" type="password" placeholder="" required />
          <FieldError className="hidden">Please enter your password</FieldError>
        </Field>

        <Button variant={'borrowbook'} className="w-full h-12 p-2 gap-2">
          Login
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
