import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const DashboardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          {/* Navbar can go here if you have one */}
          <main className="content-wrapper">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
