import { Link } from 'react-router';
import Image from '../../ui/image';

export default function HeaderCart() {
  return (
    <Link to='/Cart'>
      <div className="flex flex-row cursor-pointer">
        <Image
          src="/icons/cart.png"
          alt="Cart"
          className="relative w-6 h-auto"
        />
        <div className="absolute top-1/4 right-[17%]">
          <Image
            src="/icons/cart-notif.png"
            alt="Cart Notif"
            className="w-5 h-5"
          />
        </div>
      </div>
    </Link>
  );
}
