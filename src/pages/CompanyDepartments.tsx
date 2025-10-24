import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import CompanyDepartmentsContent from '../components/CompanyDepartmentsContent'

const CompanyDepartments = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompanyDepartmentsContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default CompanyDepartments