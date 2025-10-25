import React from 'react'
import Team from "../assets/img/illustrations/team.png"
import Avatar2 from "../assets/img/avatars/2.png"

const DepartmentContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
                  <div className="row g-6 mb-6">
                    <div className="col-md-12 col-xxl-8">
                        <div className="card">
                          <div className="d-flex row">
                            <div className="col-md-6 order-2 order-md-1">
                              <div className="card-body">
                                <h4 className="card-title mb-4">Manage <span className="fw-bold">Departments</span> 🎉</h4>
                                <p className="mb-0">Manage all departments on this page.</p>
                                <p>Add, Edit, View, Set Department Heads here.</p>
                                <div className="add-new">
                                    <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#createApp">
                                    <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block">  New Department </span>
                                  </button>
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
                            <div className="col-md-6 text-center text-md-end order-1 order-md-2">
                              <div className="card-body pb-0 px-0 pt-2">
                                <img
                                  src={Team}
                                  height="186"
                                  className="scaleX-n1-rtl"
                                  alt="View Profile" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
      
                </div>
                              {/* <!-- Basic Bootstrap Table -->
              <!--/ Basic Bootstrap Table --> */}

              </div>
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <div className="card-header border-bottom">
                      <div className="row">
                        <div className="col-md-2 mb-4">
                          <div className="d-flex">
                          </div>

                  </div>
                        <div className="col-md-10">
                          <div className="d-flex justify-content-md-end">
                            <div className="me-4">
                                <label><input type="search" className="form-control form-control-sm" placeholder="Search User"/></label>
                            </div>
                            </div>
                      </div>
                      </div>
                      </div>
                    <div className="table-responsive text-nowrap">
                        <table className="table border-bottom">
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Department Name</th>
                                <th>Subsidiary</th>
                                <th>Manager</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            <tr>
                                <td>234</td>
                                <td>Human Resources</td>
                                <td>SAHCO Plc</td>
                                <td>
                                    <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-sm me-3">
                                                <img src={Avatar2} alt="Avatar" className="rounded-circle"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <a href="app-user-view-account.html" className="text-truncate text-heading">
                                            <span className="fw-medium">Zsazsa McCleverty</span>
                                        </a><small>zmcclevertye@soundcloud.com</small>
                                    </div>
                                </td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="department-detail.html"
                                        ><i className="ri-eye-line me-1"></i> View Details</a>
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"
                                        ><i className="ri-edit-2-line me-1"></i> Edit Department</a>
                                    <div className="subsidiary-head">
                                        <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"
                                        ><i className="ri-account-circle-line me-1"></i> Add Department Head</a>
                                    {/* <!--Offcanvas for Adding Subsidiary Head--> */}
                                    </div>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>235</td>
                                <td>Information Technology</td>
                                <td>Head Office</td>
                                <td>
                                    <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-sm me-3">
                                                <span className="avatar-initial rounded-circle bg-label-danger"><i className="ri-close-circle-line"></i></span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="" className="text-truncate text-heading">
                                                <span className="fw-medium">No Subsidiary Head</span>
                                            </a>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="department-detail.html"
                                        ><i className="ri-eye-line me-1"></i> View Details</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"
                                        ><i className="ri-edit-2-line me-1"></i> Edit Department</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"
                                        ><i className="ri-account-circle-line me-1"></i> Add Department Head</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a
                                    >
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>236</td>
                                <td>Operations</td>
                                <td>PCHS</td>
                                <td>
                                    <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-sm me-3">
                                                <span className="avatar-initial rounded-circle bg-label-warning">VK</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="app-user-view-account.html" className="text-truncate text-heading">
                                                <span className="fw-medium">Vladamir Koschek</span>
                                            </a>
                                            <small>vkoschek17@abc.net.au</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="department-detail.html"
                                        ><i className="ri-eye-line me-1"></i> View Details</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"
                                        ><i className="ri-edit-2-line me-1"></i> Edit Department</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"
                                        ><i className="ri-account-circle-line me-1"></i> Add Department Head</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a
                                    >
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>237</td>
                                <td>Finance</td>
                                <td>SKY Capital Limited</td>
                                <td>
                                    <div className="d-flex justify-content-start align-items-center user-name">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-sm me-3">
                                                <span className="avatar-initial rounded-circle bg-label-warning">VK</span>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <a href="app-user-view-account.html" className="text-truncate text-heading">
                                                <span className="fw-medium">Vladamir Koschek</span>
                                            </a>
                                            <small>vkoschek17@abc.net.au</small>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="department-detail.html"
                                        ><i className="ri-eye-line me-1"></i> View Details</a>
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"
                                        ><i className="ri-edit-2-line me-1"></i> Edit Department</a>
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"
                                        ><i className="ri-account-circle-line me-1"></i> Add Department Head</a>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-12 col-md-6">
                          <div className="d-flex mb-4 align-items-center">
                            <div className="me-4">
                              <select name="" className="form-select form-select-sm"><option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option></select>
                            </div>
                            <div className="" id="" role="status"><span>Showing 1 to 10 of 50 entries</span></div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end">
                              <li className="page-item first">
                                <a className="page-link" href="javascript:void(0);"
                                  ><i className="tf-icon ri-skip-back-mini-line ri-20px"></i
                                ></a>
                              </li>
                              <li className="page-item prev">
                                <a className="page-link" href="javascript:void(0);"
                                  ><i className="tf-icon ri-arrow-left-s-line ri-20px"></i
                                ></a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0);">1</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0);">2</a>
                              </li>
                              <li className="page-item active">
                                <a className="page-link" href="javascript:void(0);">3</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0);">4</a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="javascript:void(0);">5</a>
                              </li>
                              <li className="page-item next">
                                <a className="page-link" href="javascript:void(0);"
                                  ><i className="tf-icon ri-arrow-right-s-line ri-20px"></i
                                ></a>
                              </li>
                              <li className="page-item last">
                                <a className="page-link" href="javascript:void(0);"
                                  ><i className="tf-icon ri-skip-forward-mini-line ri-20px"></i
                                ></a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                    </div>
                    </div>
                </div>
              {/* <!-- Create Department Modal --> */}
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
                          <form onSubmit={() => {}} className="form-repeater">
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
                          </form>
                            {/* <!-- Perspective Weight --> */}
                            <div id="frameworks" className="content pt-4 pt-lg-0">
                              <h5>Add Perspective Weight</h5>
                              <form action="" className="form-repeater">
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
                              </form>
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
                              <form action="" className="form-repeater">
                              <div data-repeater-list="group-b">
                                <div data-repeater-item>
                                  <div className="row">
                                    <div className="mb-6 col-lg-4 col-xl-4 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <select id="form-repeater-2-1" className="form-select form-select-sm">
                                          <option value="Male">Finance</option>
                                          <option value="Female">Internal Processes</option>
                                          <option value="Male">Customer Services</option>
                                          <option value="Female">People Learning & Growth</option>
                                        </select>
                                        <label htmlFor="form-repeater-2-1">Perspective</label>
                                      </div>
                                    </div>
                                    <div className="mb-6 col-lg-7 col-xl-7 col-12 mb-0">
                                      <div className="form-floating form-floating-outline">
                                        <input
                                          type="text"
                                          id="form-repeater-2-2"
                                          className="form-control form-control-sm"
                                          placeholder="Type Objective" />
                                        <label htmlFor="form-repeater-2-2">Objective</label>
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
                              </form>
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
                        </div>
                      </div>
                    </div>
                    {/* <!--/ Property Listing Wizard --> */}
                  </div>
                </div>
              </div>
              {/* <!--/ Create Department Modal --> */}

              <script>
                // Check selected custom option
                window.Helpers.initCustomOptionCheck();
              </script>
            </div> 
              {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default DepartmentContent