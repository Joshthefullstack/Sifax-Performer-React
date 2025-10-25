import React from 'react'
import CompImg from "../assets/img/illustrations/company-icon.jpg"
import PageBanner from "../assets/img/pages/page-banner2.jpg"

const CompanyDetailContent = () => {
  return (
        <div className="content-wrapper">
          {/* <!-- Content --> */}

          <div className="container-xxl flex-grow-1 container-p-y">
            {/* <!-- Header --> */}
            <div className="row">
              <div className="col-12">
                <div className="card mb-6">
                  <div className="user-profile-header-banner">
                    <img src={PageBanner} alt="Banner image" className="rounded-top" />
                  </div>
                  <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-5">
                    <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                      <img src={CompImg} alt="user image"
                        className="d-block h-auto ms-0 ms-sm-5 rounded-4 user-profile-img" />
                    </div>
                    <div className="flex-grow-1 mt-4 mt-sm-12">
                      <div
                        className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-6">
                        <div className="user-profile-info">
                          <h4 className="mb-2">SAHCO Plc</h4>
                          <ul
                            className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                            <li className="list-inline-item text-body">
                              <i className="ri-map-pin-range-line me-2 ri-24px"></i><span className="fw-medium">Lagos,
                                Nigeria</span>
                            </li>
                            <li className="list-inline-item text-body">
                              <i className="ri-account-circle-line me-2 ri-24px"></i><span className="fw-medium">Peter
                                Ishola</span>
                            </li>
                            <li className="list-inline-item text-body">
                              <i className="ri-team-line me-2 ri-24px"></i><span className="fw-medium"> 234
                                <small>Staff</small></span>
                            </li>
                          </ul>
                        </div>
                        <div className="dropdown">
                          <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="ri-more-2-line"></i>
                          </button>
                          <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasBoth"><i className="ri-edit-2-line me-1"></i> Edit Subsidiary</a>
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas"
                              data-bs-target="#stratObj"><i className="ri-focus-2-line me-1"></i> Add Objective</a>
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"><i
                                className="ri-account-circle-line me-1"></i> Set Subsidiary Head</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i
                                className="ri-delete-bin-6-line me-1"></i> Delete Subsidiary</a>
                          </div>
                          <div className="add-head">
                            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBackdrop"
                              aria-labelledby="offcanvasBackdropLabel">
                              <div className="offcanvas-header">
                                <h5 id="offcanvasBackdropLabel" className="offcanvas-title">Add Subsidiary Head for SAHCO
                                  Plc</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                  aria-label="Close"></button>
                              </div>
                              <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                <div className="row">
                                  <div className="col-md-12">
                                    <div className="form-floating form-floating-outline mb-5">
                                      <select id="selectsubsidiaryHead" className="selectpicker w-100"
                                        data-style="btn-default" data-live-search="true">
                                        <option>Zsazsa McCleverty</option>
                                        <option>Joy Kolawole</option>
                                        <option>Titilope Edet</option>
                                        <option>John Doe</option>
                                      </select>
                                      <label htmlFor="selectsubsidiaryHead">Select Staff</label>
                                    </div>
                                  </div>
                                </div>
                                <button type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                <button type="button" className="btn btn-outline-secondary d-grid w-100"
                                  data-bs-dismiss="offcanvas">
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>

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
                  <ul className="nav nav-pills flex-column flex-sm-row mb-6 row-gap-2">
                    <li className="nav-item">
                      <a className="nav-link active" href="/company-detail"><i
                          className="ri-menu-search-line me-2"></i>Details</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/company-departments"><i
                          className="ri-folders-line me-2"></i>Departments</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/company-staff"><i className="ri-team-line me-2"></i>Staff</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <!--/ Navbar pills -->

            <!-- User Profile Content --> */}
            <div className="row">
              {/* <!-- Company Objectives --> */}
              <div className="col-12">
                <h4 className="card-action-title mb-0">
                  <i className="ri-focus-2-line ri-24px text-body me-4"></i>Strategic Objectives
                </h4>
                <div className="row mb-4">
                  <div className="col-12">
                    <div className="card card-action mb-3 bordered">
                      <div className="card-header header-elements border-bottom">
                        <h6 className="card-action-title mb-0">Finance</h6>
                        <div className="card-header-elements ms-auto me-3">
                          <div className="me-1">
                            <div className="progress bg-label-success" style={{width: "100px"}}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                aria-valuemax={100}></div>
                            </div>
                          </div>
                          <span className="me-4">100%</span>
                          <span className="badge bg-label-success rounded-pill">Completed</span>
                        </div>
                        <div className="card-action-element">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="javascript:void(0);" className="card-collapsible"><i
                                  className="tf-icons ri-arrow-up-s-line"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="collapse show">
                        <div className="card-body pt-4">
                          <table className="table border-bottom">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Objective</th>
                                <th>Description</th>
                                <th>Business Units</th>
                                <th>Cycle Year</th>
                                <th>Review Frequency</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              <tr>
                                <td><small>OBJ-001</small></td>
                                <td className="text-wrap"><span>Increase profitability</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Administration, Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Quarterly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100px"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-002</small></td>
                                <td className="text-wrap"><span>Expand funding sources</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Administration, Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Quarterly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-003</small></td>
                                <td className="text-wrap"><span>Reduce operational costs</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Administration, Operations, Human Resources</span></td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card card-action mb-3 bordered">
                      <div className="card-header header-elements border-bottom">
                        <h6 className="card-action-title mb-0">Internal Processes</h6>
                        <div className="card-header-elements ms-auto me-3">
                          <div className="me-1">
                            <div className="progress bg-label-danger" style={{width: "100%"}}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                            </div>
                          </div>
                          <span className="me-4">25%</span>
                          <span className="badge bg-label-danger rounded-pill">Overdue</span>
                        </div>
                        <div className="card-action-element">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="javascript:void(0);" className="card-collapsible"><i
                                  className="tf-icons ri-arrow-up-s-line"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="collapse hide">
                        <div className="card-body pt-4">
                          <table className="table border-bottom">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Objective</th>
                                <th>Description</th>
                                <th>Business Units</th>
                                <th>Cycle Year</th>
                                <th>Review Frequency</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              <tr>
                                <td><small>OBJ-004</small></td>
                                <td className="text-wrap"><span>Enhance user experience</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Customer Services, Operations</span>
                                </td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-005</small></td>
                                <td className="text-wrap"><span>Broaden market reach</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Quarterly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-006</small></td>
                                <td className="text-wrap"><span>Elevate service reliability</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Administration, Operations, Human Resources</span></td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card card-action mb-3 bordered">
                      <div className="card-header header-elements border-bottom">
                        <h6 className="card-action-title mb-0">Customer Services</h6>
                        <div className="card-header-elements ms-auto me-3">
                          <div className="me-1">
                            <div className="progress bg-label-primary" style={{width: "100%"}}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                            </div>
                          </div>
                          <span className="me-4">64%</span>
                          <span className="badge bg-label-primary rounded-pill">On Track</span>
                        </div>
                        <div className="card-action-element">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="javascript:void(0);" className="card-collapsible"><i
                                  className="tf-icons ri-arrow-up-s-line"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="collapse hide">
                        <div className="card-body pt-4">
                          <table className="table border-bottom">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Objective</th>
                                <th>Description</th>
                                <th>Business Units</th>
                                <th>Cycle Year</th>
                                <th>Review Frequency</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              <tr>
                                <td><small>OBJ-007</small></td>
                                <td className="text-wrap"><span>Streamline logistics</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Information technology,
                                    Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-008</small></td>
                                <td className="text-wrap"><span>Innovate faster</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Quarterly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-009</small></td>
                                <td className="text-wrap"><span>Go green in operations</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Administration, Operations, Human Resources</span></td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card card-action mb-3 bordered">
                      <div className="card-header header-elements border-bottom">
                        <h6 className="card-action-title mb-0">People Learning & Growth</h6>
                        <div className="card-header-elements ms-auto me-3">
                          <div className="me-1">
                            <div className="progress bg-label-warning" style={{width: "100%"}}>
                              <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                role="progressbar" style={{width: "53%"}} aria-valuenow={53} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                            </div>
                          </div>
                          <span className="me-4">53%</span>
                          <span className="badge bg-label-primary rounded-pill">Behind</span>
                        </div>
                        <div className="card-action-element">
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                              <a href="javascript:void(0);" className="card-collapsible"><i
                                  className="tf-icons ri-arrow-up-s-line"></i></a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="collapse hide">
                        <div className="card-body pt-4">
                          <table className="table border-bottom">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Objective</th>
                                <th>Description</th>
                                <th>Business Units</th>
                                <th>Cycle Year</th>
                                <th>Review Frequency</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                              <tr>
                                <td><small>OBJ-0010</small></td>
                                <td className="text-wrap"><span>Develop tech expertise</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Customer Services, Operations</span>
                                </td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-0011</small></td>
                                <td className="text-wrap"><span>Foster a collaborative culture</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Sales and Marketing, Operations</span></td>
                                <td><span>2025</span></td>
                                <td><span>Quarterly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td><small>OBJ-0012</small></td>
                                <td className="text-wrap"><span>Promote Agile methodologies</span></td>
                                <td className="text-wrap"><span>Ensure current net profit of the buiness surpasses previous
                                    achievement</span></td>
                                <td className="text-wrap"><span>Administration, Operations, Human Resources, Information
                                    technology</span></td>
                                <td><span>2025</span></td>
                                <td><span>Monthly</span></td>
                                <td>
                                  <div className="me-1">
                                    <div className="progress bg-label-success" style={{width: "100%"}}>
                                      <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                        role="progressbar" style={{width: "100%"}} aria-valuenow={100} aria-valuemin={0}
                                        aria-valuemax={100}></div>
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Company Objectives --> */}
            </div>
            {/* <!--/ User Profile Content -->
            <!-- Create Subsidiary Modal --> */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBoth" aria-labelledby="offcanvasBothLabel">
              <div className="offcanvas-header">
                <h5 id="offcanvasBothLabel" className="offcanvas-title">Edit Subsidiary</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
              </div>
              <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={()=>{}}>
                  <div className="form-floating form-floating-outline mb-5">
                    <input type="text" className="form-control" id="add-subsidiary-name" placeholder="Subsidiary name"
                      name="subsidiaryName" aria-label="" />
                    <label htmlFor="add-subsidiary-name">Subsidiary Name</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <input type="text" className="form-control" id="add-subsidiary-location"
                      placeholder="Subsidiary location" name="subsidiaryLocation" aria-label="" />
                    <label htmlFor="add-subsidiary-location">Location</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <textarea className="form-control h-px-100" id="add-subsidiary-description"
                      placeholder="Add description here..."></textarea>
                    <label htmlFor="add-subsidiary-description">Subsidiary Description</label>
                  </div>
                  <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add Subsidiary</button>
                </form>
              </div>
            </div>
            {/* <!--/ Create Subsidiary Modal -->
            <!-- Create Objectives Modal --> */}
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="stratObj" aria-labelledby="offcanvasBothLabel">
              <div className="offcanvas-header">
                <h5 id="offcanvasBothLabel" className="offcanvas-title">Add Strategic Objective</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                  aria-label="Close"></button>
              </div>
              <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={()=>{}}>
                  <div className="form-floating form-floating-outline mb-5">
                    <input type="text" className="form-control" id="add-obj-name" placeholder="Subsidiary name"
                      name="subsidiaryName" aria-label="" />
                    <label htmlFor="add-obj-name">Objective Name</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <textarea className="form-control h-px-100" id="add-obj-description"
                      placeholder="Add description here..."></textarea>
                    <label htmlFor="add-obj-description">Objective Description</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <select name="" className="form-select" id="">
                      <option value="">Finance</option>
                      <option value="">Internal Processes</option>
                      <option value="">Customer Services</option>
                      <option value="">Learning and Growth</option>
                    </select>
                    <label htmlFor="">Perspectives</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <select name="" className="form-select" id="">
                      <option value="">2025</option>
                      <option value="">2026</option>
                      <option value="">2027</option>
                      <option value="">2028</option>
                    </select>
                    <label htmlFor="">Cycle Year</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <select name="" className="form-select" id="">
                      <option value="">Daily</option>
                      <option value="">Weekly</option>
                      <option value="">Monthly</option>
                      <option value="">Quarterly</option>
                      <option value="">Yearly</option>
                    </select>
                    <label htmlFor="">Review Frequency</label>
                  </div>
                  <div className="form-floating form-floating-outline mb-5">
                    <input id="TagifyCustomInlineSuggestion" name="TagifyCustomInlineSuggestion"
                      className="form-control h-auto" placeholder="select department/business unit"
                      value="Customer Service, Procurement, Operations" />
                    <label htmlFor="TagifyCustomInlineSuggestion">Business Units/Departments</label>
                  </div>
                  <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add Objective</button>
                </form>
              </div>
            </div>
            {/* <!--/ Create Objectives Modal --> */}

          </div>
          {/* <!-- / Content --> */}

          <div className="content-backdrop fade"></div>
        </div>
  )
}

export default CompanyDetailContent