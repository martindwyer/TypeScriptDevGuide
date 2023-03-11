import { Fragment, ReactNode } from 'react';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

import '../../assets/styles/index.scss';
import { BackToTop } from './BackToTop';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps): JSX.Element => {
  console.log(children);
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
      <BackToTop />
    </Fragment>
  );
};
