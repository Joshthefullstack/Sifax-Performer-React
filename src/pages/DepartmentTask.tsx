import DepartmentTaskContent from "../components/DepartmentTaskContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DepartmentTask = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <DepartmentTaskContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default DepartmentTask