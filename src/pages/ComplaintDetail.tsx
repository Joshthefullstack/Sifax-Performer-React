import ComplaintDetailContent from "../components/ComplaintDetailContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const ComplaintDetail = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <ComplaintDetailContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default ComplaintDetail