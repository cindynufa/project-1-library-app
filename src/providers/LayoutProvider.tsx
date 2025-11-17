import { Fragment } from 'react';
import Header from '../components/container/header';
import Footer from '../components/container/footer';
import { Outlet } from 'react-router';

export default function LayoutProvider() {
  return (
    <Fragment>
      <Header />
      <main className="flex flex-col w-full px-30 gap-12 mt-32 mb-32">
        <Outlet></Outlet>
      </main>
      <Footer />
    </Fragment>
  );
}
