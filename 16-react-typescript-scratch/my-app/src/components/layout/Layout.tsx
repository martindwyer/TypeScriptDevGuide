import { Fragment, ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { CookiesApproval } from "./CookiesApproval";

import "../../assets/styles/index.scss";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BackToTop } from "./BackToTop";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
      <CookiesApproval />
    </Fragment>
  );
};
