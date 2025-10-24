import CompanyDetailContent from "../components/CompanyDetailContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const CompanyDetail = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompanyDetailContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default CompanyDetail