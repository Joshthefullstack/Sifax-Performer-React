import React from 'react'
import pageBanner from "../assets/img/pages/page-banner.jpg"
import Avatar1 from "../assets/img/avatars/1.png"


const UserSecurityContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              {/* <!-- Header --> */}
              <div className="row">
                <div className="col-12">
                  <div className="card mb-6">
                    <div className="user-profile-header-banner">
                      <img src={pageBanner} alt="Banner image" className="rounded-top" />
                    </div>
                    <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-5">
                      <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                        <img
                          src={Avatar1}
                          alt="user image"
                          className="d-block h-auto ms-0 ms-sm-5 rounded-4 user-profile-img" />
                      </div>
                      <div className="flex-grow-1 mt-4 mt-sm-12">
                        <div
                          className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-6">
                          <div className="user-profile-secondary">
                            <h4 className="mb-0">Oluwakayode Alonge</h4>
                            <div className="d-flex">
                                <small className="mb-2 me-3">SAH0123</small>
                                <small>General Manager Step 4</small>

                            </div>
                            <ul
                              className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                              <li className="list-inline-item text-body">
                                <i className="ri-briefcase-2-line me-2 ri-24px"></i><span className="fw-medium">Group Head of HR</span>
                              </li>
                              <li className="list-inline-item text-body">
                                <i className="ri-account-circle-line me-2 ri-24px"></i><span className="fw-medium">Human Resources</span>
                              </li>
                              <li className="list-inline-item text-body">
                                <i className="ri-building-line me-2 ri-24px"></i><span className="fw-medium">Head Office</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Header -->

              <!-- Navbar pills --> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="nav-align-top">
                    <ul className="nav nav-pills flex-column flex-md-row mb-6 gap-2 gap-lg-0">
                      <li className="nav-item">
                        <a className="nav-link" href="/user-account"
                          ><i className="ri-group-line me-2"></i>Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="javascript:void(0);"
                          ><i className="ri-lock-line me-2"></i>Security</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--/ Navbar pills --> */}
              <div className="row">
                <div className="col-md-12">
                  {/* <!-- Change Password --> */}
                  <div className="card mb-6">
                    <h5 className="card-header">Change Password</h5>
                    <div className="card-body pt-1">
                      <form id="formAccountSettings" method="GET" onSubmit={()=>{}}>
                        <div className="row">
                          <div className="mb-5 col-md-6 form-password-toggle">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="password"
                                  name="currentPassword"
                                  id="currentPassword"
                                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                <label htmlFor="currentPassword">Current Password</label>
                              </div>
                              <span className="input-group-text cursor-pointer"><i className="ri-eye-off-line"></i></span>
                            </div>
                          </div>
                        </div>
                        <div className="row g-5 mb-6">
                          <div className="col-md-6 form-password-toggle">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="password"
                                  id="newPassword"
                                  name="newPassword"
                                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                <label htmlFor="newPassword">New Password</label>
                              </div>
                              <span className="input-group-text cursor-pointer"><i className="ri-eye-off-line"></i></span>
                            </div>
                          </div>
                          <div className="col-md-6 form-password-toggle">
                            <div className="input-group input-group-merge">
                              <div className="form-floating form-floating-outline">
                                <input
                                  className="form-control"
                                  type="password"
                                  name="confirmPassword"
                                  id="confirmPassword"
                                  placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;" />
                                <label htmlFor="confirmPassword">Confirm New Password</label>
                              </div>
                              <span className="input-group-text cursor-pointer"><i className="ri-eye-off-line"></i></span>
                            </div>
                          </div>
                        </div>
                        <h6 className="text-body">Password Requirements:</h6>
                        <ul className="ps-4 mb-0">
                          <li className="mb-4">Minimum 8 characters long - the more, the better</li>
                          <li className="mb-4">At least one lowercase character</li>
                          <li>At least one number, symbol, or whitespace character</li>
                        </ul>
                        <div className="mt-6">
                          <button type="submit" className="btn btn-primary me-3">Save changes</button>
                          <button type="reset" className="btn btn-outline-secondary">Reset</button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!--/ Change Password -->

                  <!-- Two-steps verification --> */}
                  <div className="card mb-6">
                    <div className="card-body">
                      <h5 className="mb-6">Two-steps verification</h5>
                      <p className="mb-4">Two factor authentication is not enabled yet.</p>
                      <p className="w-75">
                        Two-factor authentication adds an additional layer of security to your account by requiring more
                        than just a password to log in.
                        <a href="javascript:void(0);">Learn more.</a>
                      </p>
                      <button className="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#enableOTP">
                        Enable Two-Factor Authentication
                      </button>
                    </div>
                  </div>
                  {/* <!-- Modal -->
                  <!-- Enable OTP Modal --> */}
                  <div className="modal fade" id="enableOTP" tabIndex={-1} aria-hidden="true">
                    <div className="modal-dialog modal-simple modal-enable-otp modal-dialog-centered">
                      <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body p-0">
                          <div className="text-center mb-6">
                            <h4 className="mb-2">Enable One Time Password</h4>
                            <p>Verify Your Mobile Number for SMS</p>
                          </div>
                          <p className="mb-5">
                            Enter your mobile phone number with country code and we will send you a verification code.
                          </p>
                          <form id="enableOTPForm" className="row g-5" onSubmit={()=>{}}>
                            <div className="col-12">
                              <div className="input-group input-group-merge">
                                <span className="input-group-text">US (+1)</span>
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    id="modalEnableOTPPhone"
                                    name="modalEnableOTPPhone"
                                    className="form-control phone-number-otp-mask"
                                    placeholder="202 555 0111" />
                                  <label htmlFor="modalEnableOTPPhone">Phone Number</label>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                              <button type="submit" className="btn btn-primary">Submit</button>
                              <button
                                type="reset"
                                className="btn btn-outline-secondary"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                                Cancel
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Enable OTP Modal -->

                  <!-- /Modal -->

                  <!--/ Two-steps verification -->
                  <!-- Recent Devices --> */}
                  <div className="card">
                    <h6 className="card-header">Recent Devices</h6>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-truncate">Browser</th>
                            <th className="text-truncate">Device</th>
                            <th className="text-truncate">Location</th>
                            <th className="text-truncate">Recent Activities</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="text-truncate text-heading">
                              <i className="ri-macbook-line ri-20px text-warning me-3"></i>Chrome on Windows
                            </td>
                            <td className="text-truncate">HP Spectre 360</td>
                            <td className="text-truncate">Switzerland</td>
                            <td className="text-truncate">10, July 2021 20:07</td>
                          </tr>
                          <tr>
                            <td className="text-truncate text-heading">
                              <i className="ri-android-line ri-20px text-success me-3"></i>Chrome on iPhone
                            </td>
                            <td className="text-truncate">iPhone 12x</td>
                            <td className="text-truncate">Australia</td>
                            <td className="text-truncate">13, July 2021 10:10</td>
                          </tr>
                          <tr>
                            <td className="text-truncate text-heading">
                              <i className="ri-smartphone-line ri-20px text-danger me-3"></i>Chrome on Android
                            </td>
                            <td className="text-truncate">Oneplus 9 Pro</td>
                            <td className="text-truncate">Dubai</td>
                            <td className="text-truncate">14, July 2021 15:15</td>
                          </tr>
                          <tr>
                            <td className="text-truncate text-heading">
                              <i className="ri-mac-line ri-20px text-info me-3"></i>Chrome on MacOS
                            </td>
                            <td className="text-truncate">Apple iMac</td>
                            <td className="text-truncate">India</td>
                            <td className="text-truncate">16, July 2021 16:17</td>
                          </tr>
                          <tr>
                            <td className="text-truncate text-heading">
                              <i className="ri-macbook-line ri-20px text-warning me-3"></i>Chrome on Windows
                            </td>
                            <td className="text-truncate">HP Spectre 360</td>
                            <td className="text-truncate">Switzerland</td>
                            <td className="text-truncate">20, July 2021 21:01</td>
                          </tr>
                          <tr className="border-transparent">
                            <td className="text-truncate text-heading">
                              <i className="ri-android-line ri-20px text-success me-3"></i>Chrome on Android
                            </td>
                            <td className="text-truncate">Oneplus 9 Pro</td>
                            <td className="text-truncate">Dubai</td>
                            <td className="text-truncate">21, July 2021 12:22</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <!--/ Recent Devices --> */}

                </div>
              </div>

            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default UserSecurityContent