import { Link } from 'react-router';
import Image from './image';

export default function Logo() {
  return (
    <Link to="/">
      <div className="flex flex-row gap-3.75 items-center">
        <Image src="/icons/logo.png" alt="Logo" className="w-10.5 h-10.5" />
        <h1 className="text-display-md font-bold text-neutral-950">Booky</h1>
      </div>
    </Link>
  );
}
