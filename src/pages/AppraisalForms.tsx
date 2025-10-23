import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import AppraisalFormContent from "../components/AppraisalFormContent";

const AppraisalForms = () => {
    return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <AppraisalFormContent />

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default AppraisalForms