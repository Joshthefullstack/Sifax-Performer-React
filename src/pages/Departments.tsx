import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import DepartmentContent from '../components/DepartmentContent'

const Departments = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <DepartmentContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default Departments