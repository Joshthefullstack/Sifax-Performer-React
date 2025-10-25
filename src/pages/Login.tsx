import React from 'react';
import favIcon from "../assets/img/favicon/favicon.png";
import authLoginIllustrationLight  from "../assets/img/illustrations/auth-login-illustration-light.png";
import authCoverLoginMaskLight from "../assets/img/illustrations/auth-cover-login-mask-light.png";
import "../assets/vendor/css/pages/page-auth.css"


const Login = () => {
  return (
    <div className="authentication-wrapper authentication-cover">
      {/* <!-- Logo --> */}
      <a href="index.html" className="auth-cover-brand d-flex align-items-center gap-2">
        <span className="app-brand-logo demo">
          <span style={{color: "var(--bs-primary)"}}>
            <img src={favIcon} alt=""/>
          </span>
        </span>
        <span className="app-brand-text demo text-heading fw-semibold">SIFAX Performer</span>
      </a>
      {/* <!-- /Logo --> */}
      <div className="authentication-inner row m-0">
        {/* <!-- /Left Section --> */}
        <div className="d-none d-lg-flex col-lg-7 col-xl-8 align-items-center justify-content-center p-12 pb-2">
          <img
            src={authLoginIllustrationLight}
            className="auth-cover-illustration w-100"
            alt="auth-illustration"
            data-app-light-img="illustrations/auth-login-illustration-light.png"
            data-app-dark-img="illustrations/auth-login-illustration-dark.png" />
          <img
            src={authCoverLoginMaskLight}
            className="authentication-image"
            alt="mask"
            data-app-light-img="illustrations/auth-cover-login-mask-light.png"
            data-app-dark-img="illustrations/auth-cover-login-mask-dark.png" />
        </div>
        {/* <!-- /Left Section --> */}

        {/* <!-- Login --> */}
        <div
          className="d-flex col-12 col-lg-5 col-xl-4 align-items-center authentication-bg position-relative py-sm-12 px-12 py-6">
          <div className="w-px-400 mx-auto pt-5 pt-lg-0">
            <h4 className="mb-2">Welcome to SIFAX Performer!</h4>
            <p className="mb-5">Please sign-in to your account</p>

            <form id="formAuthentication" className="mb-5" action="index.html" method="GET">
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email-username"
                  placeholder="Enter your email address"
                  autoFocus />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="mb-5">
                <div className="form-password-toggle">
                  <div className="input-group input-group-merge">
                    <div className="form-floating form-floating-outline">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password" />
                      <label htmlFor="password">Password</label>
                    </div>
                    <span className="input-group-text cursor-pointer"><i className="ri-eye-off-line"></i></span>
                  </div>
                </div>
              </div>
              <div className="mb-5 d-flex justify-content-between mt-5">
                <div className="form-check mt-2">
                  <input className="form-check-input" type="checkbox" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me"> Remember Me </label>
                </div>
                <a href="forgot-password.html" className="float-end mb-1 mt-2">
                  <span>Forgot Password?</span>
                </a>
              </div>
              <button className="btn btn-primary d-grid w-100">Sign in</button>
            </form>

          <p className="text-center">
              <span>New on our platform?</span>
              <a href="auth-register-cover.html">
                <span>Create an account</span>
              </a>
            </p>

          </div>
        </div>
        {/* <!-- /Login --> */}
      </div>
    </div>
  )
}

export default Login