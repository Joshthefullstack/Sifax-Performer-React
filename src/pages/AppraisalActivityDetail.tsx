import AppraisalActivityDetailContent from "../components/AppraisalActivityDetailContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const AppraisalActivityDetail = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <AppraisalActivityDetailContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default AppraisalActivityDetail