import React from "react";
import "../assets/css/dashboard.css";
import "../assets/vendor/css/pages/app-logistics-dashboard.css";
import "../assets/vendor/css/pages/cards-analytics.css";
import "../assets/vendor/css/pages/cards-statistics.css";
import DashboardContent from "../components/DashboardContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
// import {FaUser, FaChartLine, FaTrophy, FaPercent} from "react-icons/fa";

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

//    <header className="header">
//      <h1>Dashboard</h1>
//    </header>

//    <section className="stats">
//      {/* <StatCard
//             title="Total Employees"
//             value="3042"
//             color="#28a745"
//             subtitle="+18.2% than last week"
//             icon={<FaUser />}
//             iconBg="#28a745"
//           />
//           <StatCard
//             title="Total KPI Achieved"
//             value="2567"
//             color="#ffc107"
//             subtitle="-8.7% than last week"
//             icon={<FaChartLine />}
//             iconBg="#ffc107"
//           />
//           <StatCard
//             title="Last Appraisal"
//             value="89.4%"
//             color="#e83e8c"
//             subtitle="+4.3% than last week"
//             icon={<FaTrophy />}
//             iconBg="#e83e8c"
//           />
//           <StatCard
//             title="Overall Performance"
//             value="76%"
//             color="#007bff"
//             subtitle="-2.5% Outstanding"
//             icon={<FaPercent />}
//             iconBg="#007bff"
//           /> */}
//    </section>

//    <section className="chart-section">
//      <ChartCard title="Appraisal Status" data={chartData} colors={COLORS} />
//    </section>
//    <section className="table-section">
//      <ComplaintTable />
//    </section>
//  </main>;
