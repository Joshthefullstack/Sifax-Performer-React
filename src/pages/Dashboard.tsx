import React from "react";
import "../assets/css/dashboard.css";
import "../assets/vendor/css/pages/app-logistics-dashboard.css";
import "../assets/vendor/css/pages/cards-analytics.css";
import "../assets/vendor/css/pages/cards-statistics.css";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />

        <div className="layout-page">
          <Navbar />

          <DashboardContent />

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

