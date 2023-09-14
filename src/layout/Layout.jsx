import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: "50vh" }}>{<Outlet />}</main>
      <Footer />
    </>
  );
};

export default Layout;
