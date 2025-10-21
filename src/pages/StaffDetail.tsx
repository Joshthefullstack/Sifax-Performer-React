import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import StaffDetailContent from "../components/StaffDetailContent";
import "../assets/vendor/css/pages/page-profile.css";

const StaffDetail = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <StaffDetailContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default StaffDetail