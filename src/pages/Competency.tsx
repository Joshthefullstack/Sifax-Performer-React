import CompetencyContent from "../components/CompetencyContent";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const Competency = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompetencyContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default Competency