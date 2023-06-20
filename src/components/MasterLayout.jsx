import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import NewsLetter from "./NewsLetter";
import Footer from "./Footer";
import Announcement from "./Announcement";

const MasterLayout = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Outlet></Outlet>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default MasterLayout;
