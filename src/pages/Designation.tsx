import DesignationContent from "../components/DesignationContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Designation = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <DesignationContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default Designation