import { ChevronDown } from 'lucide-react';
import Image from '../../ui/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../ui/dropdown-menu';
import { Link, useNavigate } from 'react-router';
import { removeToken } from '../../../lib/auth';

export default function HeaderProfile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken();
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <div className="flex flex-row gap-4 justify-between items-center cursor-pointer">
            <Image
              src="/images/photo-profile.png"
              alt="Photo Profile"
              className="lg:size-12 size-10"
            />
            <p className="text-lg font-semibold text-neutral-950 lg:block hidden">John Doe</p>
            <ChevronDown className="text-neutral-950" />
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-46 p-4 gap-4 border-0 bg-white rounded-2xl shadow">
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

            <DropdownMenuItem onClick={handleLogout}>
              <span className="text-accent-red2 cursor-pointer">Logout</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
