import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import OperationalFormContent from "../components/OperationalFormContent";

const OperationalForm = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <OperationalFormContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default OperationalForm