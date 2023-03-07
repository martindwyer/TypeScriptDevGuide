import React from 'react';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <main>{}</main>
      <Footer />
    </React.Fragment>
  );
};
