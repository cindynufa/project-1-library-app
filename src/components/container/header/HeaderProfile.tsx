import { ChevronDown } from 'lucide-react';
import Image from '../../ui/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Link } from 'react-router';

export default function HeaderProfile() {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row gap-4 justify-between items-center cursor-pointer">
            <Image
              src="/images/photo-profile.png"
              alt="Photo Profile"
              className="w-12 h-12"
            />
            <p className="text-lg font-semibold text-neutral-950">John Doe</p>
            <ChevronDown className="text-neutral-950" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-46 p-4 gap-4 border-0 bg-white rounded-2xl shadow'>
          <DropdownMenuGroup className="text-md font-semibold">
            <DropdownMenuItem>
              <Link to="/borrowedList" className="text-neutral-950">
                Profile
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/borrowedList" className="text-neutral-950">
                Borrowed List
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/borrowedList" className="text-neutral-950">
                Reviews
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to="/borrowedList" className="text-accent-red2">
                Logout
              </Link>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
