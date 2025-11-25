import { Link } from 'react-router';
import { Button } from '../../ui/button';
import Logo from '../../ui/logo';

export default function HeaderBeforeLogin() {
  return (
    <header className="fixed flex w-full top-0 z-50 h-20 px-30 justify-between items-center bg-white shadow">
      <Logo classnameImage="size-10.5" classnameBrand="text-display-md" />

      <div className="flex flex-row gap-4">
        <Link to="/Login">
          <Button variant={'default'}>Login</Button>
        </Link>

        <Link to="/Register">
          <Button variant={'borrowbook'}>Register</Button>
        </Link>
      </div>
    </header>
  );
}
