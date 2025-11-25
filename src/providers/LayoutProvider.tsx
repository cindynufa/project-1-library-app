import { Fragment } from 'react';
import Header from '../components/container/header';
import Footer from '../components/container/footer';
import { Outlet } from 'react-router';
import HeaderBeforeLogin from '../components/container/header/HeaderBeforeLogin';
import { TOKEN_KEY } from '../lib/auth';

export default function LayoutProvider() {
  const token = localStorage.getItem(TOKEN_KEY);
  const isLoggedIn = !!token;

  return (
    <Fragment>
      {isLoggedIn ? <Header /> : <HeaderBeforeLogin />}

      <main className="flex flex-col w-full px-30 gap-12 mt-32 mb-32">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
}
