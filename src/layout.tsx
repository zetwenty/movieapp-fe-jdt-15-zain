import React from "react";
import { Outlet } from "react-router";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="grow">
        <Outlet />
      </div>
      {/* Footer Tetap di Bawah */}
      <Footer />
    </div>
  );
};

export default Layout;
