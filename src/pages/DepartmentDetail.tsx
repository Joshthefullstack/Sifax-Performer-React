import DepartmentDetailContent from "../components/DepartmentDetailContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DepartmentDetail = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <DepartmentDetailContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default DepartmentDetail