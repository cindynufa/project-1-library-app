import Logo from '../../ui/logo';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <main className="w-full mt-23.5 bg-white ">
      <div className="flex flex-col w-100 mx-auto gap-5">
        <Logo classnameImage="size-8.25" classnameBrand="text-2xl" />
        <div className="flex flex-col gap-2">
          <h2 className="text-display-sm font-bold text-neutral-950">
            Register
          </h2>
          <p className="text-md font-semibold text-neutral-700">
            Create your account to start borrowing books.
          </p>
        </div>

        <RegisterForm />
      </div>
    </main>
  );
}
