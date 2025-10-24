import React from 'react'
import PageBanner from "../assets/img/pages/page-banner2.jpg"
import DeptIcon from "../assets/img/illustrations/department-icon.jpg"
import Accordion, { AccordionItemData } from "../components/Accordion";


const DepartmentDetailContent = () => {
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
                        <img
                          src={DeptIcon}
                          alt="user image"
                          className="d-block h-auto ms-0 ms-sm-5 rounded-4 user-profile-img" />
                      </div>
                      <div className="flex-grow-1 mt-4 mt-sm-12">
                        <div
                          className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-6">
                          <div className="user-profile-info">
                            <h4 className="mb-2">Human Resources</h4>
                            <ul
                              className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                              <li className="list-inline-item text-body">
                                <i className="ri-building-line me-2 ri-24px"></i><span className="fw-medium">Sky Capital</span>
                              </li>
                              <li className="list-inline-item text-body">
                                <i className="ri-account-circle-line me-2 ri-24px"></i><span className="fw-medium">Peter Ishola</span>
                              </li>
                              <li className="list-inline-item text-body">
                                <i className="ri-team-line me-2 ri-24px"></i
                                ><span className="fw-medium"> 234 <small>Members</small></span>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="ri-more-2-line"></i>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"
                                ><i className="ri-edit-2-line me-1"></i> Edit Department</a>
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"
                                ><i className="ri-account-circle-line me-1"></i> Add Department Head</a>
                            <a className="dropdown-item" href="javascript:void(0);"
                                ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                          </div>
                          <div className="add-head">
                            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBackdrop" aria-labelledby="offcanvasBackdropLabel">
                                <div className="offcanvas-header">
                                <h5 id="offcanvasBackdropLabel" className="offcanvas-title">Add Department Head</h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-floating form-floating-outline mb-5">
                                                <select
                                                  id="selectsubsidiaryHead"
                                                  className="selectpicker w-100"
                                                  data-style="btn-default"
                                                  data-live-search="true">
                                                  <option>Zsazsa McCleverty</option>
                                                  <option>Joy Kolawole</option>
                                                  <option>Titilope Edet</option>
                                                  <option>John Doe</option>
                                                </select>
                                                <label htmlFor="selectsubsidiaryHead">Select Staff</label>
                                              </div>
                                            </div>
                                    </div>
                                    <button type="button" className="btn btn-primary mb-2 d-grid w-100">Submit</button>
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
                        <a className="nav-link active" href="/department-detail"><i className="ri-menu-search-line me-2"></i>Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/department-members"><i className="ri-team-line me-2"></i>Members</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/department-task"><i className="ri-list-check-3 me-2"></i>Tasks</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--/ Navbar pills -->

              <!-- User Profile Content --> */}
              <div className="row">
                {/* <!-- Popular Instructors --> */}
                <div className="col-xl-4 col-lg-5 col-md-5">
                    <div className="card">
                      <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="card-title mb-0">
                          <h5 className="m-0 me-2"><i className="ri-bar-chart-2-line ri-24px text-body me-4"></i>Perspective Weights</h5>
                        </div>
                      </div>
                      <div className="px-5 py-4 border border-start-0 border-end-0">
                        <div className="d-flex justify-content-between align-items-center">
                          <h6 className="mb-0 fs-xsmall text-uppercase fw-normal">Perspective</h6>
                          <h6 className="mb-0 fs-xsmall text-uppercase fw-normal">Weight</h6>
                        </div>
                      </div>
                      <div className="card-body pt-5">
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                                <i className="ri-wallet-3-line ri-28px"></i>
                            </div>
                            <div>
                              <div>
                                <h6 className="mb-0 text-truncate">Finance</h6>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h6 className="mb-0">10</h6>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                                <i className="ri-file-settings-line ri-28px"></i>
                            </div>
                            <div>
                              <div>
                                <h6 className="mb-0 text-truncate">Internal Processes</h6>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h6 className="mb-0">40</h6>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-6">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                                <i className="ri-customer-service-2-line ri-28px"></i>
                            </div>
                            <div>
                              <div>
                                <h6 className="mb-0 text-truncate">Customer Service</h6>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h6 className="mb-0">20</h6>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="d-flex align-items-center">
                            <div className="me-2">
                                <i className="ri-presentation-line ri-26px"></i>
                            </div>
                            <div>
                              <div>
                                <h6 className="mb-0 text-truncate">People Learning & Growth</h6>
                              </div>
                            </div>
                          </div>
                          <div className="text-end">
                            <h6 className="mb-0">30</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Popular Instructors -->
  
                  <!-- Top Courses --> */}
                  <div className="col-xl-8 col-lg-7 col-md-7">
                    <h4 className="card-action-title mb-0">
                      <i className="ri-focus-2-line ri-24px text-body me-4"></i>Department Objectives</h4>
                      <div className="row mb-4">
                        <div className="col-12">
                            <div className="card card-action mb-3 bordered">
                                <div className="card-header header-elements border-bottom">
                                  <h6 className="card-action-title mb-0">Finance</h6>
                                    <div className="card-header-elements ms-auto me-3">
                                        <div className="me-1">
                                          <div className="progress bg-label-success" style={{width: "100px"}}>
                                            <div
                                              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                              role="progressbar"
                                                    style={{width: "100%"}}
                                                    aria-valuenow={100}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                          </div>
                                        </div>
                                        <span className="me-4">100%</span>
                                        <span className="badge bg-label-success rounded-pill">Completed</span>
                                    </div>
                                  <div className="card-action-element">
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <a href="javascript:void(0);" className="card-collapsible"
                                          ><i className="tf-icons ri-arrow-up-s-line"></i
                                        ></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="collapse show">
                                  <div className="card-body pt-4">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-success me-1"></span>
                                                    <small>Complete</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-success" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>2500</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-warning me-1"></span>
                                                    <small>Behind</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-warning" style={{width: "100px;"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>10,900</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-primary me-1"></span>
                                                    <small>On Track</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-primary" style={{width: "100px;"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>75%</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-danger me-1"></span>
                                                    <small>Overdue</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-danger" style={{width: "100px;"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                    role="progressbar"
                                                    style={{width: "30%"}}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>  
                                </div>
                                </div>
                            </div>
                            <div className="card card-action mb-3 bordered">
                                <div className="card-header header-elements border-bottom">
                                  <h6 className="card-action-title mb-0">Internal Processes</h6>
                                    <div className="card-header-elements ms-auto me-3">
                                        <div className="me-1">
                                          <div className="progress bg-label-danger" style={{width: "100px"}}>
                                            <div
                                              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                              role="progressbar"
                                                    style={{width: "25%"}}
                                                    aria-valuenow={25}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                          </div>
                                        </div>
                                        <span className="me-4">25%</span>
                                        <span className="badge bg-label-danger rounded-pill">Overdue</span>
                                    </div>
                                  <div className="card-action-element">
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <a href="javascript:void(0);" className="card-collapsible"
                                          ><i className="tf-icons ri-arrow-up-s-line"></i
                                        ></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="collapse hide">
                                  <div className="card-body pt-4">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-success me-1"></span>
                                                    <small>Complete</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-success" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>2500</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-warning me-1"></span>
                                                    <small>Behind</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-warning" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>10,900</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-primary me-1"></span>
                                                    <small>On Track</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-primary" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>75%</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-danger me-1"></span>
                                                    <small>Overdue</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-danger" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                    role="progressbar"
                                                    style={{width: "30%"}}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="card card-action mb-3 bordered">
                                <div className="card-header header-elements border-bottom">
                                  <h6 className="card-action-title mb-0">Customer Services</h6>
                                    <div className="card-header-elements ms-auto me-3">
                                        <div className="me-1">
                                          <div className="progress bg-label-primary" style={{width: "100px"}}>
                                            <div
                                              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                              role="progressbar"
                                                    style={{width: "64%"}}
                                                    aria-valuenow={64}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                          </div>
                                        </div>
                                        <span className="me-4">64%</span>
                                        <span className="badge bg-label-primary rounded-pill">On Track</span>
                                    </div>
                                  <div className="card-action-element">
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <a href="javascript:void(0);" className="card-collapsible"
                                          ><i className="tf-icons ri-arrow-up-s-line"></i
                                        ></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="collapse hide">
                                  <div className="card-body pt-4">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-success me-1"></span>
                                                    <small>Complete</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-success" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>2500</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-warning me-1"></span>
                                                    <small>Behind</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-warning" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>10,900</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-primary me-1"></span>
                                                    <small>On Track</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-primary" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>75%</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-danger me-1"></span>
                                                    <small>Overdue</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-danger" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                    role="progressbar"
                                                    style={{width: "30%"}}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>  
                                    </div>
                                </div>
                            </div>
                            <div className="card card-action mb-3 bordered">
                                <div className="card-header header-elements border-bottom">
                                  <h6 className="card-action-title mb-0">People Learning & Growth</h6>
                                    <div className="card-header-elements ms-auto me-3">
                                        <div className="me-1">
                                          <div className="progress bg-label-warning" style={{width: "100px"}}>
                                            <div
                                              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                              role="progressbar"
                                                    style={{width: "53%"}}
                                                    aria-valuenow={53}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                          </div>
                                        </div>
                                        <span className="me-4">53%</span>
                                        <span className="badge bg-label-primary rounded-pill">Behind</span>
                                    </div>
                                  <div className="card-action-element">
                                    <ul className="list-inline mb-0">
                                      <li className="list-inline-item">
                                        <a href="javascript:void(0);" className="card-collapsible"
                                          ><i className="tf-icons ri-arrow-up-s-line"></i
                                        ></a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="collapse hide">
                                  <div className="card-body pt-4">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-success me-1"></span>
                                                    <small>Complete</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-success" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>2500</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-warning me-1"></span>
                                                    <small>Behind</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-warning" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>10,900</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-primary me-1"></span>
                                                    <small>On Track</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-primary" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                    role="progressbar"
                                                    style={{width: "75%"}}
                                                    aria-valuenow={75}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
                                                </div>    
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                          <div className="w-100">
                                            <div className="d-flex justify-content-between align-items-center">
                                              <div className="user-info">
                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                <div className="d-flex align-items-center">
                                                  <small className="me-2"><strong>Target: </strong>75%</small>
                                                  <div className="user-status d-flex align-items-center">
                                                    <span className="badge badge-dot bg-danger me-1"></span>
                                                    <small>Overdue</small>
                                                  </div>
                                                </div>
                                              </div>
                                              <div className="add-btn">
                                                <div className="progress bg-label-danger" style={{width: "100px"}}>
                                                  <div
                                                    className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                    role="progressbar"
                                                    style={{width: "30%"}}
                                                    aria-valuenow={30}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}></div>
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
                      </div>
                  </div>
                  {/* <!--/ Top Courses --> */}
                </div>
              {/* <!--/ User Profile Content -->
              <!-- Create Department Modal --> */}
              <div className="modal fade" id="createApp" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-simple modal-upgrade-plan">
                  <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                      <div className="text-center">
                        <h4 className="mb-2">Create Department</h4>
                        <p className="mb-6">Provide data with this form to add a new department.</p>
                      </div>
                      {/* <!-- Property Listing Wizard --> */}
                      <div id="wizard-create-app" className="bs-stepper vertical wizard-vertical-icons mt-2 shadow-none">
                        <div className="bs-stepper-header border-0 p-1">
                          <div className="step" data-target="#details">
                            <button type="button" className="step-trigger">
                              <span className="avatar">
                                <span className="avatar-initial rounded-3">
                                  <i className="ri-file-text-line ri-24px"></i>
                                </span>
                              </span>
                              <span className="bs-stepper-label flex-column align-items-start gap-1 ms-4">
                                <span className="bs-stepper-title text-uppercase">Details</span>
                                <small className="bs-stepper-subtitle">Enter Department's Details</small>
                              </span>
                            </button>
                          </div>
                          <div className="step" data-target="#frameworks">
                            <button type="button" className="step-trigger">
                              <span className="avatar">
                                <span className="avatar-initial rounded-3">
                                  <i className="ri-scales-3-line ri-24px"></i>
                                </span>
                              </span>
                              <span className="bs-stepper-label flex-column align-items-start gap-1 ms-4">
                                <span className="bs-stepper-title text-uppercase">Weight</span>
                                <small className="bs-stepper-subtitle">Add Perspective Weight</small>
                              </span>
                            </button>
                          </div>
                          <div className="step" data-target="#database">
                            <button type="button" className="step-trigger">
                              <span className="avatar">
                                <span className="avatar-initial rounded-3">
                                  <i className="ri-crosshair-2-line ri-24px"></i>
                                </span>
                              </span>
                              <span className="bs-stepper-label flex-column align-items-start gap-1 ms-4">
                                <span className="bs-stepper-title text-uppercase">Objectives</span>
                                <small className="bs-stepper-subtitle">Add Department Objective</small>
                              </span>
                            </button>
                          </div>
                          <div className="step" data-target="#submit">
                            <button type="button" className="step-trigger">
                              <span className="avatar">
                                <span className="avatar-initial rounded-3">
                                  <i className="ri-check-double-line ri-24px"></i>
                                </span>
                              </span>
                              <span className="bs-stepper-label flex-column align-items-start gap-1 ms-4">
                                <span className="bs-stepper-title text-uppercase">Submit</span>
                                <small className="bs-stepper-subtitle">Submit</small>
                              </span>
                            </button>
                          </div>
                        </div>
                        <div className="bs-stepper-content p-1">
                          <form onSubmit={()=>{}} className="form-repeater">
                            {/* <!-- Details --> */}
                            <div id="details" className="content pt-4 pt-lg-0">
                              <div className="form-floating form-floating-outline mb-6">
                                <input
                                  type="text"
                                  className="form-control form-control-lg"
                                  id="modalAppName"
                                  placeholder="Application Name" />
                                <label htmlFor="modalAppName">Department Name</label>
                              </div>
                              <div className="mb-6">
                                <input
                                  id="TypeaheadBasic"
                                  className="form-control typeahead form-control-lg"
                                  type="text"
                                  autoComplete="off"
                                  placeholder="Enter states from USA" />
                                  <label htmlFor="TypeaheadBasic" className="form-label">Type to select the subsidiary of the department</label>
                                </div>
                              <div className="col-12 d-flex justify-content-between mt-6">
                                <button className="btn btn-outline-secondary btn-prev" disabled>
                                  <i className="ri-arrow-left-line ri-16px"></i>
                                  <span className="align-middle d-sm-block d-none ms-2">Previous</span>
                                </button>
                                <button className="btn btn-primary btn-next">
                                  <span className="align-middle d-sm-block d-none me-2">Next</span>
                                  <i className="ri-arrow-right-line ri-16px"></i>
                                </button>
                              </div>
                            </div>

                            {/* <!-- Perspective Weight --> */}
                            <div id="frameworks" className="content pt-4 pt-lg-0">
                              <h5>Add Perspective Weight</h5>
                              <div data-repeater-list="group-a">
                                <div data-repeater-item>
                                  <div className="row">
                                    <div className="mb-6 col-lg-6 col-xl-6 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <select id="form-repeater-1-3" className="form-select form-select-sm">
                                          <option value="Male">Finance</option>
                                          <option value="Female">Internal Processes</option>
                                          <option value="Male">Customer Services</option>
                                          <option value="Female">People Learning & Growth</option>
                                        </select>
                                        <label htmlFor="form-repeater-1-3">Perspective</label>
                                      </div>
                                    </div>
                                    <div className="mb-6 col-lg-6 col-xl-3 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="number"
                                          id="form-repeater-1-1"
                                          className="form-control form-control-sm"
                                          placeholder="10" />
                                        <label htmlFor="form-repeater-1-1">Weight</label>
                                      </div>
                                    </div>
                                    <div className="mb-6 col-lg-12 col-xl-2 col-12 d-flex align-items-center mb-0">
                                      <button className="btn rounded-pill btn-icon btn-outline-danger" data-repeater-delete><span className="tf-icons ri-close-line ri-22px"></span>
                                        </button>
                                    </div>
                                  </div>
                                  <hr className="mt-0" />
                                </div>
                              </div>
                              <div className="mb-0">
                                <button className="btn btn-primary" data-repeater-create>
                                  <i className="ri-add-line me-1"></i>
                                  <span className="align-middle">Add</span>
                                </button>
                              </div>
      
                              <div className="col-12 d-flex justify-content-between mt-6">
                                <button className="btn btn-outline-secondary btn-prev">
                                  <i className="ri-arrow-left-line ri-16px"></i>
                                  <span className="align-middle d-sm-block d-none ms-2">Previous</span>
                                </button>
                                <button className="btn btn-primary btn-next">
                                  <span className="align-middle d-sm-block d-none me-2">Next</span>
                                  <i className="ri-arrow-right-line ri-16px"></i>
                                </button>
                              </div>
                            </div>

                            {/* <!-- Objectives --> */}
                            <div id="database" className="content pt-4 pt-lg-0">
                              <h5>Add Perspective Objectives</h5>
                              <div data-repeater-list="group-a">
                                <div data-repeater-item>
                                  <div className="row">
                                    <div className="mb-6 col-lg-4 col-xl-4 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <select id="form-repeater-1-3" className="form-select form-select-sm">
                                          <option value="Male">Finance</option>
                                          <option value="Female">Internal Processes</option>
                                          <option value="Male">Customer Services</option>
                                          <option value="Female">People Learning & Growth</option>
                                        </select>
                                        <label htmlFor="form-repeater-1-3">Perspective</label>
                                      </div>
                                    </div>
                                    <div className="mb-6 col-lg-7 col-xl-7 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          id="form-repeater-1-1"
                                          className="form-control form-control-sm"
                                          placeholder="Type Objective" />
                                        <label htmlFor="form-repeater-1-1">Objective</label>
                                      </div>
                                    </div>
                                    <div className="mb-6 col-lg-1 col-xl-1 col-12 d-flex align-items-center mb-0">
                                      <button className="btn rounded-pill btn-icon btn-outline-danger" data-repeater-delete><span className="tf-icons ri-close-line ri-22px"></span>
                                        </button>
                                    </div>
                                  </div>
                                  <hr className="mt-0" />
                                </div>
                              </div>
                              <div className="mb-0">
                                <button className="btn btn-primary" data-repeater-create>
                                  <i className="ri-add-line me-1"></i>
                                  <span className="align-middle">Add</span>
                                </button>
                              </div>
                              <div className="col-12 d-flex justify-content-between mt-6">
                                <button className="btn btn-outline-secondary btn-prev">
                                  <i className="ri-arrow-left-line ri-16px"></i>
                                  <span className="align-middle d-sm-block d-none ms-2">Previous</span>
                                </button>
                                <button className="btn btn-primary btn-next">
                                  <span className="align-middle d-sm-block d-none me-2">Next</span>
                                  <i className="ri-arrow-right-line ri-16px"></i>
                                </button>
                              </div>
                            </div>

                            {/* <!-- submit --> */}
                            <div id="submit" className="content text-center pt-4 pt-lg-0">
                              <h5 className="mb-1 mt-4">You're Done!</h5>
                              <p className="mb-6">Click Submit button to add new department. Ensure you review before saving it. </p>
                              {/* <!-- image --> */}
                              <div className="col-12 d-flex justify-content-between mt-4 pt-2">
                                <button className="btn btn-outline-secondary btn-prev">
                                  <i className="ri-arrow-left-line ri-16px"></i>
                                  <span className="align-middle d-none d-sm-block ms-2">Previous</span>
                                </button>
                                <button className="btn btn-primary btn-submit">
                                  <span className="align-middle d-none d-sm-block me-2">Submit</span
                                  ><i className="ri-check-line"></i>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Property Listing Wizard --> */}
                  </div>
                </div>
              </div>
              {/* <!--/ Create Department Modal --> */}

            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default DepartmentDetailContent