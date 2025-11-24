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

export default function RegisterForm() {
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
            id="text"
            type="name"
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
          />
          <FieldError className="hidden">Please enter your name</FieldError>
        </Field>

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
          />
          <FieldError className="hidden">Please enter your email</FieldError>
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="phone"
            className="text-sm font-bold text-neutral-950"
          >
            Name
          </FieldLabel>
          <Input
            id="number"
            type="phone"
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
          />
          <FieldError className="hidden">
            Please enter your phone number
          </FieldError>
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
          />
          <FieldError className="hidden">Please enter your password</FieldError>
        </Field>

        <Field className="flex flex-col gap-0.5">
          <FieldLabel
            htmlFor="password"
            className="text-sm font-bold text-neutral-950"
          >
            Confirm Password
          </FieldLabel>
          <Input
            id="password"
            type="password"
            placeholder=""
            required
            className="w-full h-12 px-4 py-2 gap-2 rounded-xl"
          />
          <FieldError className="hidden">Password must be the same</FieldError>
        </Field>

        <Button variant={'borrowbook'} className="w-full h-12 p-2 gap-2">
          Submit
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
