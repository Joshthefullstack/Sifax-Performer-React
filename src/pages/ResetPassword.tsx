import React from 'react'
import favIcon from "../assets/img/favicon/favicon.png";
import authCover from "../assets/img/illustrations/auth-basic-reset-password-mask-light.png"
import authDark from "../assets/img/illustrations/auth-basic-reset-password-mask-dark.png"
import "../assets/vendor/css/pages/page-auth.css"


const ResetPassword = () => {
  return (
    <div className="position-relative">
      <div className="authentication-wrapper authentication-basic container-p-y p-4 p-sm-0">
        <div className="authentication-inner py-6">
          <div className="card p-md-7 p-1">
            {/* <!-- Logo --> */}
            <div className="app-brand justify-content-center mt-5 mb-5">
                <a href="index.html" className="auth-cover-brand d-flex justify-content-center align-items-center gap-2">
                    <span className="app-brand-logo demo">
                    <span style={{color: "var(--bs-primary)"}}>
                        <img src={favIcon} alt="" height={40} />
                    </span>
                    </span>
                    <span className="app-brand-text demo text-heading fw-semibold">SIFAX Performer</span>
                </a>
            </div>
            {/* <!-- /Logo -->
            <!-- Reset Password --> */}
            <div className="card-body">
              <h4 className="mb-1">Reset Password 🔒</h4>
              <p className="mb-5">Your new password must be different from previously used passwords</p>
              <form id="formAuthentication" className="mb-5" action="auth-login-basic.html" method="GET">
                <div className="mb-5 form-password-toggle form-control-validation">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password" />
                      <label htmlFor="password">New Password</label>
                    </div>
                    <span className="input-group-text cursor-pointer"
                      ><i className="icon-base ri ri-eye-off-line icon-20px"></i></span>
                  </div>
                </div>
                <div className="mb-5 form-password-toggle form-control-validation">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="password"
                        id="confirm-password"
                        className="form-control"
                        name="confirm-password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password" />
                      <label htmlFor="confirm-password">Confirm Password</label>
                    </div>
                    <span className="input-group-text cursor-pointer"
                      ><i className="icon-base ri ri-eye-off-line icon-20px"></i></span>
                  </div>
                </div>
                <button className="btn btn-primary d-grid w-100 mb-5">Set new password</button>
                <div className="text-center">
                  <a href="/login" className="d-flex align-items-center justify-content-center">
                    <i className="icon-base ri ri-arrow-left-s-line scaleX-n1-rtl icon-20px me-1_5"></i>
                    Back to login
                  </a>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- /Reset Password --> */}
          <img
            alt="mask"
            src={authCover}
            className="authentication-image d-none d-lg-block"
            data-app-light-img={authCover}
            data-app-dark-img={authDark} />
        </div>
      </div>
    </div>
  )
}

export default ResetPassword