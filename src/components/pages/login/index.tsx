import Logo from '../../ui/logo';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <main className="w-full mt-73.75 bg-white ">
      <div className="flex flex-col lg:w-100 w-81 mx-auto gap-5">
        <Logo classnameImage="size-8.25" classnameBrand="text-2xl" />
        <div className="flex flex-col gap-2">
          <h2 className="lg:text-display-sm text-display-xs font-bold text-neutral-950">
            Login
          </h2>
          <p className="lg:text-md text-sm font-semibold text-neutral-700">
            Sign in to manage your library account.
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
