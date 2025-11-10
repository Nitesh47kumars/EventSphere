import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop"

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop/>
      <Navbar />
      <main className="grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
