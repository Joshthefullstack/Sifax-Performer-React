import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import PerspectivesContent from "../components/PerspectivesContent";

const Perspectives = () => {
  return (
    <div className="dashboard-container layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />

        <div className="layout-page">
          <Navbar />

          <PerspectivesContent />

          <Footer />
        </div>
      </div>
      {/* <!-- Overlay --> */}
      <div className="layout-overlay layout-menu-toggle"></div>

      {/* <!-- Drag Target Area To SlideIn Menu On Small Screens --> */}
      <div className="drag-target"></div>
    </div>
  )
}

export default Perspectives