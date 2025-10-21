import React from 'react'

const ComplaintContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row g-6 mb-6">
                <div className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="me-1">
                          <p className="text-heading mb-1">Total Complaints</p>
                          <div className="d-flex align-items-center">
                            <h4 className="mb-1 me-2">15</h4>
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="avatar-initial bg-label-primary rounded-3">
                            <div className="ri-feedback-line ri-26px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="me-1">
                          <p className="text-heading mb-1">Closed</p>
                          <div className="d-flex align-items-center">
                            <h4 className="mb-1 me-1">267</h4>
                            <p className="text-success mb-1">(+18%)</p>
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="avatar-initial bg-label-danger rounded-3">
                            <div className="ri-mail-close-line ri-26px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="me-1">
                          <p className="text-heading mb-1">Open</p>
                          <div className="d-flex align-items-center">
                            <h4 className="mb-1 me-1">19,860</h4>
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="avatar-initial bg-label-success rounded-3">
                            <div className="ri-mail-open-line ri-26px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-3">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="me-1">
                          <p className="text-heading mb-1">Unresolved</p>
                          <div className="d-flex align-items-center">
                            <h4 className="mb-1 me-1">237</h4>
                          </div>
                        </div>
                        <div className="avatar">
                          <div className="avatar-initial bg-label-warning rounded-3">
                            <div className="ri-spam-2-line ri-26px"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Basic Bootstrap Table --> */}
              {/* <!--/ Basic Bootstrap Table --> */}
            
            </div>
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">Competency Ratings</h4>
                <p className="mb-6">
                    Create and manage all Competencies here.
                </p>
                  <div className="card shadow-none border">
                    <div className="card-header border-bottom">
                      <div className="row">
                        <div className="col-md-2 mb-4">
                          <div className="d-flex">
                            <div className="btn-group me-4">
                              <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
                                aria-expanded="false"><i className="ri-upload-2-line ri-16px me-2"></i>
                                Export
                              </button>
                              <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="javascript:void(0);"><span><i
                                        className="ri-printer-line me-1"></i>Print</span></a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);"><span><i
                                        className="ri-file-text-line me-1"></i>Csv</span></a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);"><span><i
                                        className="ri-file-excel-line me-1"></i>Excel</span></a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);"><span><i
                                        className="ri-file-pdf-line me-1"></i>PDF</span></a></li>
                                <li><a className="dropdown-item" href="javascript:void(0);"><span><i
                                        className="ri-file-copy-line me-1"></i>Copy</span></a></li>
                              </ul>
                            </div>
                            <div className="btn-group dropend">
                              <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <i className="ri-filter-line ri-16px me-2"></i>Filter
                              </button>
                              <div className="dropdown-menu dropdown-menu-end w-px-300">
                                <form id="formAuthentication" method="post" className="p-6" onSubmit={() => { }}>
                                  <div className="mb-5">
                                    <label htmlFor="TypeaheadBasic" className="form-label">Date Range</label>
                                    <input id="TypeaheadBasic" className="form-control typeahead form-control-sm" type="text"
                                      autoComplete="off" placeholder="Enter states from USA" />
                                  </div>
                                  <div className="mb-5">
                                    <label htmlFor="TypeaheadBasic" className="form-label">Select Department</label>
                                    <input id="TypeaheadBasic" className="form-control typeahead form-control-sm" type="text"
                                      autoComplete="off" placeholder="Enter states from USA" />
                                  </div>
                                  <div className="form-floating form-floating-outline mb-5">
                                    <select id="user-role" className="form-select form-select-sm" data-allow-clear="true">
                                      <option value="male">Active</option>
                                      <option value="female">Pending</option>
                                      <option value="female">Inactive</option>
                                    </select>
                                    <label htmlFor="user-role">Issue Status</label>
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
                                <label><input type="search" className="form-control form-control-sm" placeholder="Search for Issues"/></label>
                              </div>
                            </div>
                            <div className="add-new">
                              <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#newIssue">
                                <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block">
                                  New Issue </span>
                              </button>
                              <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasSupervisor"
                                aria-labelledby="offcanvasSupervisorLabel">
                                <div className="offcanvas-header">
                                  <h5 id="offcanvasSupervisorLabel" className="offcanvas-title">Add Staffs to Supervisor</h5>
                                  <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                  <div className="row mb-4">
                                    <div className="col-md-12">
                                      <div className="form-floating form-floating-outline">
                                        <input id="TagifyUserList" name="TagifyUserList" className="form-control h-auto"
                                          value="abatisse2@nih.gov, Justinian Hattersley" />
                                        <label htmlFor="TagifyUserList">Users List</label>
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
                    <div className="table-responsive text-nowrap" id="horizontal-example">
                      <table className="table border-bottom">
                        <thead>
                          <tr>
                            <th className="dt-checkboxes-cell dt-checkboxes-select-all"><input type="checkbox"
                                className="dt-checkboxes form-check-input"/></th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Date Opened</th>
                            <th>Last Updated</th>
                            <th>Requester</th>
                            <th>Assigned To</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                          <tr>
                            <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                            <td>TL002341</td>
                            <td>
                              <a href="app-user-view-account.html" className="text-truncate text-heading">
                                <span className="fw-medium">Admin officer's System Hardware Issues</span>
                              </a>
                            </td>
                            <td>21/03/2025</td>
                            <td>21 Days ago</td>
                            <td>Admin</td>
                            <td>Operations</td>
                            <td>
                              <div className="d-flex align-items-center lh-1 me-4 mb-4 mb-sm-0">
                                <span className="badge badge-dot bg-danger me-1"></span> High
                              </div>
                            </td>
                            <td><span className="badge rounded-pill bg-label-info me-1">Open</span></td>
                            <td>
                              <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                  <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="issue-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-checkbox-line me-1"></i> Mark as
                                    Resolved</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-close-circle-line me-1"></i> Close
                                    Issue</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-archive-line me-1"></i> Archive</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                            <td>SAH2341</td>
                            <td>
                              <a href="" className="text-truncate text-heading">
                                <span className="fw-medium">Office Internet Connectivity Issues</span>
                              </a>
                            </td>
                            <td>110/07/2025</td>
                            <td>5 Days ago</td>
                            <td>PRS</td>
                            <td>Info Tech</td>
                            <td>
                              <div className="d-flex align-items-center lh-1 me-4 mb-4 mb-sm-0">
                                <span className="badge badge-dot bg-warning me-1"></span> Medium
                              </div>
                            </td>
                            <td><span className="badge rounded-pill bg-label-secondary me-1">closed</span></td>
                            <td>
                              <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                  <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="issue-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-checkbox-line me-1"></i> Mark as
                                    Resolved</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-close-circle-line me-1"></i> Close
                                    Issue</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-archive-line me-1"></i> Archive</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                            <td>SAH2341</td>
                            <td>
                              <a href="app-user-view-account.html" className="text-truncate text-heading">
                                <span className="fw-medium">HR Requisition is till not delivered</span>
                              </a>
                            </td>
                            <td>04/05/2024</td>
                            <td>323 Days ago</td>
                            <td>HRM</td>
                            <td>Procurement</td>
                            <td>
                              <div className="d-flex align-items-center lh-1 me-4 mb-4 mb-sm-0">
                                <span className="badge badge-dot bg-success me-1"></span> Low
                              </div>
                            </td>
                            <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                            <td>
                              <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                  <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="issue-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-checkbox-line me-1"></i> Mark as
                                    Resolved</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-close-circle-line me-1"></i> Close
                                    Issue</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-archive-line me-1"></i> Archive</a>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                            <td>SAH2341</td>
                            <td>
                              <a href="app-user-view-account.html" className="text-truncate text-heading">
                                <span className="fw-medium">May 2025 Bonus has not been paid</span>
                              </a>
                            </td>
                            <td>01/01/2025</td>
                            <td>30 Days ago</td>
                            <td>Operations</td>
                            <td>HRM</td>
                            <td>
                              <div className="d-flex align-items-center lh-1 me-4 mb-4 mb-sm-0">
                                <span className="badge badge-dot bg-warning me-1"></span> Medium
                              </div>
                            </td>
                            <td><span className="badge rounded-pill bg-label-success me-1">Resolved</span></td>
                            <td>
                              <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                  <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                  <a className="dropdown-item" href="issue-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-checkbox-line me-1"></i> Mark as
                                    Resolved</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-close-circle-line me-1"></i> Close
                                    Issue</a>
                                  <a className="dropdown-item" href="javascript:void(0);"><i className="ri-archive-line me-1"></i> Archive</a>
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
                              <select name="" className="form-select form-select-sm">
                                <option value="10">10</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                                <option value="100">100</option>
                              </select>
                            </div>
                            <div className="" id="" role="status"><span>Showing 1 to 10 of 50 entries</span></div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                          <nav aria-label="Page navigation">
                            <ul className="pagination justify-content-end">
                              <li className="page-item first">
                                <a className="page-link" href="javascript:void(0);"><i className="tf-icon ri-skip-back-mini-line ri-20px"></i></a>
                              </li>
                              <li className="page-item prev">
                                <a className="page-link" href="javascript:void(0);"><i className="tf-icon ri-arrow-left-s-line ri-20px"></i></a>
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
                                <a className="page-link" href="javascript:void(0);"><i className="tf-icon ri-arrow-right-s-line ri-20px"></i></a>
                              </li>
                              <li className="page-item last">
                                <a className="page-link" href="javascript:void(0);"><i
                                    className="tf-icon ri-skip-forward-mini-line ri-20px"></i></a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
              {/* <!-- Create Department Modal --> */}
              <div className="modal fade" id="compScale" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-simple modal-upgrade-plan">
                  <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                      <div className="text-center">
                        <h4 className="mb-2">Setup Competency Rating Scale</h4>
                        <p className="mb-6">Fill this form to setup competency ratings.</p>
                      </div>
                                    <form id="ratingScaleForm">
                                        <div className="row">
                                            <div className="col-12">
                                              <div className="form-floating form-floating-outline mb-5">
                                                <input type="text" className="form-control" id="scaleName" placeholder="e.g., 5-Point Performance Scale" required/>
                                                <label className="form-label">Scale Name</label>
                                              </div>          
                                            </div>
                                            <div className="col-12">
                                                <div id="scaleLevelsContainer"><h5>Scale Levels</h5></div>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-outline-primary mb-3" id="addLevelBtn">Add Level</button>
                                        <button type="submit" className="btn btn-primary">Save Rating Scale</button>
                                    </form>
                    </div>
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

export default ComplaintContent