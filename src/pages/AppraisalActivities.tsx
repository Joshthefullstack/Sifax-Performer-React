import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import AppraisalActivitiesContent from "../components/AppraisalActivitiesContent";

const AppraisalActivities = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <AppraisalActivitiesContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AppraisalActivities