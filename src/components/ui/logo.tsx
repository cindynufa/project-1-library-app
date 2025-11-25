import { Link } from 'react-router';
import Image from './image';

interface LogoProps {
  classnameImage?: string;
  classnameBrand?: string;
}

export default function Logo({classnameImage, classnameBrand}: LogoProps) {
  return (
    <Link to="/">
      <div className="flex flex-row gap-3.75 items-center">
        <Image src="/icons/logo.png" alt="Logo" className={`${classnameImage} lg:size-10.5 size-10`} />
        <h1 className={`${classnameBrand} font-bold text-neutral-950 lg:block hidden`}>Booky</h1>
      </div>
    </Link>
  );
}
