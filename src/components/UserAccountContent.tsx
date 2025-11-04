import React from 'react'
import pageBanner from "../assets/img/pages/page-banner.jpg"
import Avatar1 from "../assets/img/avatars/1.png"

const UserAccountContent = () => {
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
                          <div className="user-profile-info">
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
                        <a className="nav-link active" href="javascript:void(0);"
                          ><i className="ri-group-line me-2"></i>Account</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/user-security"
                          ><i className="ri-lock-line me-2"></i>Security</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--/ Navbar pills --> */}
              <div className="row">
                <div className="col-md-12">
                    <div className="card mb-6">
                        {/* <!-- Account --> */}
                        <div className="card-body">
                          <div className="d-flex align-items-start align-items-sm-center gap-6">
                            <img
                              src={Avatar1}
                              alt="user-avatar"
                              className="d-block w-px-100 h-px-100 rounded-4"
                              id="uploadedAvatar" />
                            <div className="button-wrapper">
                              <label htmlFor="upload" className="btn btn-primary me-3 mb-4" tabIndex={0}>
                                <span className="d-none d-sm-block">Upload new photo</span>
                                <i className="ri-upload-2-line d-block d-sm-none"></i>
                                <input
                                  type="file"
                                  id="upload"
                                  className="account-file-input"
                                  hidden
                                  accept="image/png, image/jpeg" />
                              </label>
                              <button type="button" className="btn btn-outline-danger account-image-reset mb-4">
                                <i className="ri-refresh-line d-block d-sm-none"></i>
                                <span className="d-none d-sm-block">Reset</span>
                              </button>
    
                              <div>Allowed JPG, GIF or PNG. Max size of 800K</div>
                            </div>
                          </div>
                        </div>
                        <div className="card-body pt-0">
                          <form id="formAccountSettings" method="GET" onSubmit={()=>{}}>
                            <div className="row mt-1 g-5">
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input className="form-control" type="text" id="firstName" name="firstName" value="John" autoFocus />
                                  <label htmlFor="firstName">First Name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input className="form-control" type="text" name="surName" id="surName" value="Doe" />
                                  <label htmlFor="surName">Surname</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input className="form-control" type="text" name="midName" id="midName" value="Doe" />
                                  <label htmlFor="midName">Middle Name</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <select id="gender" className="select2 form-select">
                                    <option value="usd" selected>Male</option>
                                    <option value="euro">Female</option>
                                  </select>
                                  <label htmlFor="gender">Gender</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                    <input type="text" className="form-control" placeholder="YYYY-MM-DD" value="1985-02-28" id="flatpickr-date" />
                                    <label htmlFor="flatpickr-date">Date of Birth</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input className="form-control" type="text" id="email" name="email" value="john.doe@example.com" placeholder="john.doe@example.com" />
                                  <label htmlFor="email">E-mail</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="input-group input-group-merge">
                                  <div className="form-floating form-floating-outline">
                                    <input type="text" id="phoneNumber" name="phoneNumber" className="form-control" value="+234 (917) 543-9876" />
                                    <label htmlFor="phoneNumber">Phone Number</label>
                                  </div>
                                  <span className="input-group-text">NG (+234)</span>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input type="text" className="form-control" id="address" name="address" value="123 Main St, New York, NY 10001" />
                                  <label htmlFor="address">Address</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input className="form-control" type="text" id="state" name="state" value="Lagos" />
                                  <label htmlFor="state">State</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="zipCode"
                                    name="zipCode"
                                    value="648391"
                                    maxLength={6} />
                                  <label htmlFor="zipCode">Zip Code</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <select id="country" className="select2 form-select">
                                    <option value="Australia">Australia</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="Canada">Canada</option>
                                    <option value="China">China</option>
                                    <option value="France">France</option>
                                    <option value="Germany">Germany</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Korea">Korea, Republic of</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Nigeria" selected>Nigeria</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Russia">Russian Federation</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                  </select>
                                  <label htmlFor="country">Country</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <input
                                    id="TagifyLanguageSuggestion"
                                    name="TagifyLanguageSuggestion"
                                    className="form-control h-auto"
                                    placeholder="select language"
                                    value="English" />
                                  <label htmlFor="TagifyLanguageSuggestion">Language</label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-floating form-floating-outline">
                                  <select id="timeZones" className="select2 form-select">
                                    <option value="-12" selected>(GMT-12:00) International Date Line West</option>
                                    <option value="-11">(GMT-11:00) Midway Island, Samoa</option>
                                    <option value="-10">(GMT-10:00) Hawaii</option>
                                    <option value="-9">(GMT-09:00) Alaska</option>
                                    <option value="-8">(GMT-08:00) Pacific Time (US & Canada)</option>
                                    <option value="-8">(GMT-08:00) Tijuana, Baja California</option>
                                    <option value="-7">(GMT-07:00) Arizona</option>
                                    <option value="-7">(GMT-07:00) Chihuahua, La Paz, Mazatlan</option>
                                    <option value="-7">(GMT-07:00) Mountain Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Central America</option>
                                    <option value="-6">(GMT-06:00) Central Time (US & Canada)</option>
                                    <option value="-6">(GMT-06:00) Guadalajara, Mexico City, Monterrey</option>
                                    <option value="-6">(GMT-06:00) Saskatchewan</option>
                                    <option value="-5">(GMT-05:00) Bogota, Lima, Quito, Rio Branco</option>
                                    <option value="-5">(GMT-05:00) Eastern Time (US & Canada)</option>
                                    <option value="-5">(GMT-05:00) Indiana (East)</option>
                                    <option value="-4">(GMT-04:00) Atlantic Time (Canada)</option>
                                    <option value="-4">(GMT-04:00) Caracas, La Paz</option>
                                  </select>
                                  <label htmlFor="timeZones">Timezone</label>
                                </div>
                              </div>
                            </div>
                            <div className="mt-6">
                              <button type="submit" className="btn btn-primary me-3">Save changes</button>
                              <button type="reset" className="btn btn-outline-secondary">Reset</button>
                            </div>
                          </form>
                        </div>
                        {/* <!-- /Account --> */}
                      </div>
                      <div className="card">
                        <h5 className="card-header mb-1">Deactivate Account</h5>
                        <div className="card-body">
                          <div className="mb-6 col-12 mb-0">
                            <div className="alert alert-warning">
                              <h6 className="alert-heading mb-1">Are you sure you want to deactivate your account?</h6>
                              <p className="mb-0">Once you deactivate your account, there is no going back. You will need to contact your administrator for account reactivation. Please be certain.</p>
                            </div>
                          </div>
                          <form id="formAccountDeactivation" onSubmit={()=>{}}>
                            <div className="form-check mb-6">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="accountActivation"
                                id="accountActivation" />
                              <label className="form-check-label" htmlFor="accountActivation"
                                >I confirm my account deactivation</label>
                            </div>
                            <button type="submit" className="btn btn-danger deactivate-account" disabled>
                              Deactivate Account
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
              </div>

            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default UserAccountContent