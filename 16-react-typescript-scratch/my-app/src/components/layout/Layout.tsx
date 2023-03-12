import { Fragment, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import '../../assets/styles/index.scss';
import { BackToTop } from './BackToTop';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </Fragment>
  );
};
