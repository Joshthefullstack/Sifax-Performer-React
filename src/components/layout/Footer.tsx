import React from 'react'

const Footer = () => {
  return (
    <div>
      {" "}
      {/* <!-- Footer --> */}
      <footer className="content-footer footer bg-footer-theme">
        <div className="container-xxl">
          <div className="footer-container d-flex align-items-center justify-content-between py-4 flex-md-row flex-column">
            <div className="text-body mb-2 mb-md-0">
              ©<script>document.write(new Date().getFullYear());</script>,
              <a
                href="https://imberlabs.ng"
                target="_blank"
                className="footer-link">
                Imberlabs
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- / Footer --> */}
    </div>
  );
}

export default Footer