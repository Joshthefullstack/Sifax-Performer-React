import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import StaffCompetencyContent from "../components/StaffCompetencyContent";
import "../assets/vendor/css/pages/page-profile.css";

const StaffCompetency = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <StaffCompetencyContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default StaffCompetency