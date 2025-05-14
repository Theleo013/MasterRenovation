import React from "react";
import { Header, Footer } from "@/shared/Components";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/shared/Components/ScrollToTop";
import ScrollToUp from "@/shared/Components/ScrollToUpButton";

const Layout = () => {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToUp />
    </React.Fragment>
  );
};

export default Layout;
