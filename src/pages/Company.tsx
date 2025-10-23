import CompanyContent from '../components/CompanyContent'
import Navbar from '../components/layout/Navbar'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'

const Company = () => {
  return (
        <div className="dashboard-container layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <Sidebar />

                <div className="layout-page">
                    <Navbar />

                    <CompanyContent />

                    <Footer />
                </div>
            </div>
        </div>
  )
}

export default Company