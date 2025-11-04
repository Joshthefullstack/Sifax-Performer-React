import React from 'react'
import favIcon from "../assets/img/favicon/favicon.png";
import authLight  from "../assets/img/illustrations/auth-basic-forgot-password-mask-light.png";
import authDark from "../assets/img/illustrations/auth-basic-forgot-password-mask-dark.png"
import "../assets/vendor/css/pages/page-auth.css"


const ForgotPassword = () => {
  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y p-4 p-sm-0">
        <div className="authentication-inner py-6">
          {/* <!-- Logo --> */}
          <div className="card p-md-7 p-1">
            {/* <!-- Forgot Password --> */}
            <div className="app-brand my-5">
                <a href="index.html" className="auth-cover-brand d-flex justify-content-center align-items-center gap-2">
                    <span className="app-brand-logo demo">
                    <span style={{color: "var(--bs-primary)"}}>
                        <img src={favIcon} alt="" height={40} />
                    </span>
                    </span>
                    <span className="app-brand-text demo text-heading fw-semibold">SIFAX Performer</span>
                </a>
            </div>
            {/* <!-- /Logo --> */}
            <div className="card-body mt-1">
              <h4 className="mb-1">Forgot Password? 🔒</h4>
              <p className="mb-5">Enter your email and we'll send you instructions to reset your password</p>
              <form id="formAuthentication" className="mb-5" action="auth-reset-password-basic.html" method="GET">
                <div className="form-floating form-floating-outline mb-5 form-control-validation">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoFocus />
                  <label>Email</label>
                </div>
                <button className="btn btn-primary d-grid w-100 mb-5">Send Reset Link</button>
              </form>
              <div className="text-center">
                <a href="/login" className="d-flex align-items-center justify-content-center">
                  <i className="icon-base ri ri-arrow-left-s-line scaleX-n1-rtl icon-20px me-1_5"></i>
                  Back to login
                </a>
              </div>
            </div>
          </div>
          {/* <!-- /Forgot Password --> */}
          <img
            alt="mask"
            src={authLight}
            className="authentication-image d-none d-lg-block"
            data-app-light-img={authLight}
            data-app-dark-img={authDark} />
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword