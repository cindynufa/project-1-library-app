import { ChevronDown } from 'lucide-react';
import Image from '../../ui/image';

export default function HeaderProfile() {
  return (
    <div className="flex flex-row gap-4 justify-between items-center">
      <Image
        src="/images/photo-profile.png"
        alt="Photo Profile"
        className="w-12 h-12"
      />
      <p className='text-lg font-semibold text-neutral-950'>John Doe</p>
      <ChevronDown className='text-neutral-950 cursor-pointer' />
    </div>
  );
}
