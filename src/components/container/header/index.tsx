import Logo from '../../ui/logo';
import SearchBox from '../../ui/search';
import HeaderCart from './HeaderCart';
import HeaderProfile from './HeaderProfile';

export default function Header() {
  return (
    <header className="fixed flex w-full top-0 z-50 h-20 px-30 justify-between items-center shadow">
      <Logo />
      <SearchBox text="Search book" />
      <div className="flex flex-row gap-6 justify-between items-center">
        <HeaderCart />
        <HeaderProfile />
      </div>
    </header>
  );
}
