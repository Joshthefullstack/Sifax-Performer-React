import React from 'react'
import FeedbackCycle from "../assets/img/icons/misc/performance-feedback.png";
import EmployeeFeedback from "../assets/img/icons/misc/employee-feedback.png";
import ExternalFeedback from "../assets/img/icons/misc/blank-feedback.png"

const FeedbackContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">360° Feebdack</h4>
                <p className="mb-6">
                    Create and manage all Feedbacks here.
                </p>
                <div className="row g-6 mb-6">
                    <div className="col-md-12 col-xxl-8">
                        <div className="card shadow-none border">
                          <div className="d-flex row">
                            <div className="col-md-12">
                                <div className="card-body">
                                    <h5 className="card-title">Create New Feedback</h5>
                                    <p className="text-truncate mb-4">Select any of these template to create a new feedback</p>
                                    <div className="row">
                                        <div className="col-md-3">
                                          <div className="card text-center align-items-center shadow-none border border-warning bg-warning-subtle mx-3">
                                            <div className="card-body align-items-center">
                                              <a href="professional-form.html" className="nav-link align-items-center justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth">
                                                <img src={FeedbackCycle} className="image-fluid" height="100px" alt="professional-form" />
                                              <p className="icon-name text-capitalize fw-medium mb-0 mt-2">360° Feedback Cycle</p>
                                            </a>
                                          </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="card text-center align-items-center shadow-none border border-primary bg-primary-subtle mx-3">
                                            <div className="card-body align-items-center">
                                              <a href="create-feedback.html" className="nav-link align-items-center justify-content-center">
                                                <img src={EmployeeFeedback} className="image-fluid" height="100px" alt="operational-form" />
                                              <p className="icon-name text-capitalize fw-medium mb-0 mt-2">Employee Feedback</p>
                                            </a>
                                          </div>
                                          </div>
                                        </div>
                                        <div className="col-md-3">
                                          <div className="card text-center align-items-center shadow-none border border-success bg-success-subtle mx-3">
                                            <div className="card-body align-items-center">
                                              <a href="blank-feedback.html" className="nav-link align-items-center justify-content-center">
                                                <img src={ExternalFeedback} className="image-fluid" height="100px" alt="blank-form" />
                                              <p className="icon-name text-capitalize fw-medium mb-0 mt-2">External Feedback</p>
                                            </a>
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
                <div className="card">
                    <div className="card-header border-bottom">
                        <div className="row">
                          <div className="col-md-2 mb-4">
                            <div className="d-flex">
                              <div className="btn-group dropend">
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                  aria-expanded="false"><i className="ri-filter-line ri-16px me-2"></i>
                                  Filter
                                </button>
                                <div className="dropdown-menu dropdown-menu-end w-px-300">
                                  <form id="formAuthentication" method="post" className="p-6" onSubmit={() => {}}>
                                    <div className="form-floating form-floating-outline mb-5">
                                      <select id="user-role" className="form-select form-select-sm" data-allow-clear="true">
                                        <option value="male">360° Feedback Cycle</option>
                                        <option value="female">Employee Feedbacks</option>
                                        <option value="female">External Feedbacks</option>
                                      </select>
                                      <label htmlFor="user-role">Feedback Type</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                      <select id="user-role" className="form-select form-select-sm" data-allow-clear="true">
                                        <option value="male">Active</option>
                                        <option value="female">Draft</option>
                                        <option value="female">Inactive</option>
                                      </select>
                                      <label htmlFor="user-role">User Status</label>
                                    </div>
                                    <button type="button" className="btn btn-primary btn-sm">Filter</button>
                                    <button type="button" className="btn btn-outline-primary btn-sm">Clear</button>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-10">
                            <div className="d-flex justify-content-md-end">
                              <div className="me-4">
                                <div className="dataTables_filter">
                                  <label><input type="search" className="form-control form-control-sm" placeholder="Search Feedback"/></label>
                                </div>
                              </div>
                              <div className="add-new">
                                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBoth" aria-labelledby="offcanvasBothLabel">
                                  <div className="offcanvas-header">
                                    <h5 id="offcanvasBothLabel" className="offcanvas-title">Create New 360° Feebdack Activity</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                  </div>
                                  <div className="offcanvas-body mx-0 flex-grow-0">
                                    <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={() => {}}>
                                      <div className="form-floating form-floating-outline mb-5">
                                        <input type="text" className="form-control" id="add-rating-name" placeholder="Enter rating name" name="ratingName" aria-label="Exceptional" />
                                        <label htmlFor="add-rating-name">Feedback Name</label>
                                      </div>
                                      <div className="form-floating form-floating-outline mb-5">
                                        <select name="" className="form-select">
                                            <option value="2023">Year 2023 Performance Cycle</option>
                                            <option value="2024">Year 2024 Performance Cycle</option>
                                            <option value="2025">Year 2025 Performance Cycle</option>
                                            <option value="2026">Year 2026 Performance Cycle</option>
                                        </select>
                                        <label htmlFor="add-rating-description">Performance Cycle</label>
                                      </div>
                                      <div className="mb-5">
                                        <label htmlFor="subsidiary" className="form-label">Subsidiary</label>
                                        <select name="" className="form-select" id="">
                                          <option value="">All Subsidiaries</option>
                                          <option value="">Head Office</option>
                                          <option value="">Ports & Cargo</option>
                                          <option value="">SAHCO Plc</option>
                                        </select>
                                      </div>
                                      <div className="mb-5">
                                        <label htmlFor="dept" className="form-label">Department</label>
                                        <select name="" className="form-select" id="">
                                          <option value="">All Departments</option>
                                          <option value="">Administration</option>
                                          <option value="">Procurement</option>
                                          <option value="">Operations</option>
                                        </select>
                                      </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input type="text" className="form-control" placeholder="YYYY-MM-DD to YYYY-MM-DD" id="flatpickr-range" />
                                            <label htmlFor="flatpickr-range">Feedback Duration</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-6">
                                            <textarea className="form-control h-px-100" id="feedbackDesc" placeholder="Description here..."></textarea>
                                            <label htmlFor="feedbackDesc">Description</label>
                                        </div>
                                        <div className="mb-5">
                                            <div className="text-light small fw-medium mb-4">Allow Comments from Participants</div>
                                            <label className="switch">
                                            <input type="checkbox" className="switch-input" />
                                            <span className="switch-toggle-slider">
                                                <span className="switch-on"></span>
                                                <span className="switch-off"></span>
                                            </span>
                                            <span className="switch-label">Allow Comments</span>
                                            </label>
                                        </div>
                                        <hr/>
                                      <h5>Rater Group Weights</h5>
                                        <div className="form-floating form-floating-outline mb-5">
                                          <input type="number" className="form-control raterWeight" id="managerWeight" min={0} max={100} required />
                                          <label>Manager (%)</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                          <input type="number" className="form-control raterWeight" id="peersWeight" min={0} max={100} required />
                                          <label>Peers (%)</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                          <input type="number" className="form-control raterWeight" id="directReportsWeight" min={0} max={100} required />
                                          <label>Direct Reports (%)</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                          <input type="number" className="form-control raterWeight" id="selfWeight" min={0} max={100} required />
                                          <label>Self (%)</label>
                                        </div>
                                      <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                      <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                    </form>              
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                        <div className="table-responsive text-nowrap">
                            <table className="table border-bottom">
                                <thead>
                                <tr>
                                    <th className="dt-checkboxes-cell dt-checkboxes-select-all"><input type="checkbox" className="dt-checkboxes form-check-input" /></th>
                                    <th>Feedback Title</th>
                                    <th>Period</th>
                                    <th>Created by</th>
                                    <th>Created Date</th>
                                    <th>Expiraton Date</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                        <td><span>Q3 2023 Feedbacks</span></td>
                                        <td><span>Jul-Sep 2023</span></td>
                                        <td><span>Femi Badmus</span></td>
                                        <td><span>01/09/2023</span></td>
                                        <td><span>30/09/2023</span></td>
                                        <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                            <a className="dropdown-item" href="appraisal-activity-detail.html">
                                                <i className="ri-eye-line me-1"></i> View Details </a>
                                            <a className="dropdown-item" href="">
                                                <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                        <td><span>Q4 2023 Feedbacks</span></td>
                                        <td><span>Oct-Dec 2023</span></td>
                                        <td><span>Bolaji Idowu</span></td>
                                        <td><span>01/12/2023</span></td>
                                        <td><span>31/12/2023</span></td>
                                        <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                            <a className="dropdown-item" href="appraisal-activity-detail.html">
                                                <i className="ri-eye-line me-1"></i> View Details </a>
                                            <a className="dropdown-item" href="">
                                                <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                        <td><span>1st Half 2024 Feedbacks</span></td>
                                        <td><span>Jan-Jun 2024</span></td>
                                        <td><span>2024 Appraisal form</span></td>
                                        <td><span>01/07/2024</span></td>
                                        <td><span>30/07/2024</span></td>
                                        <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                            <a className="dropdown-item" href="appraisal-activity-detail.html">
                                                <i className="ri-eye-line me-1"></i> View Details </a>
                                            <a className="dropdown-item" href="">
                                                <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                        <td><span>2nd Half 2024 Fedbacks</span></td>
                                        <td><span>Jul-Dec 2024</span></td>
                                        <td><span>Hammed Musa</span></td>
                                        <td><span>01/12/2024</span></td>
                                        <td><span>30/12/2024</span></td>
                                        <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                            <a className="dropdown-item" href="appraisal-activity-detail.html">
                                                <i className="ri-eye-line me-1"></i> View Details </a>
                                            <a className="dropdown-item" href="">
                                                <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                            </div>
                                        </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                        <td><span>Q1 2025 Feedback</span></td>
                                        <td><span>Jan-Mar 2025</span></td>
                                        <td><span>Funso Balogun</span></td>
                                        <td><span>01/03/2025</span></td>
                                        <td><span>30/03/2025</span></td>
                                        <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                            <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                            <a className="dropdown-item" href="appraisal-activity-detail.html">
                                                <i className="ri-eye-line me-1"></i> View Details </a>
                                            <a className="dropdown-item" href="">
                                                <i className="ri-close-circle-line me-1"></i> Deactivate </a>
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

export default FeedbackContent