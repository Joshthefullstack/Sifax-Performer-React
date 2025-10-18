import AdminUsersContent from "../components/AdminUsersContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const AdminUsers = () => {
  return (
    <div className="dashboard-container layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />

        <div className="layout-page">
          <Navbar />

          <AdminUsersContent/>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminUsers;
