import CycleContent from "../components/CycleContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const PerformanceCycle = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CycleContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default PerformanceCycle