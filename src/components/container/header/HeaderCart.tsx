import { Link } from 'react-router';
import Image from '../../ui/image';

export default function HeaderCart() {
  return (
    <Link to='/Cart'>
      <div className="flex flex-row w-full cursor-pointer">
        <Image
          src="/icons/cart.png"
          alt="Cart"
          className="relative lg:size-6 size-7"
        />
        <div className="absolute top-1/4 right-[17%]">
          <Image
            src="/icons/cart-notif.png"
            alt="Cart Notif"
            className="size-5"
          />
        </div>
      </div>
    </Link>
  );
}
