import CompanyStaffContent from "../components/CompanyStaffContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const CompanyStaff = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompanyStaffContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default CompanyStaff