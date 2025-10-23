import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import CompetencyRatingContent from '../components/CompetencyRatingContent'

const CompetencyRating = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompetencyRatingContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default CompetencyRating