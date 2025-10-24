import DepartmentMembersContent from "../components/DepartmentMembersContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DepartmentMembers = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <DepartmentMembersContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default DepartmentMembers