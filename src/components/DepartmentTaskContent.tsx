import React from 'react'
import PageBanner from "../assets/img/pages/page-banner2.jpg"
import DeptIcon from "../assets/img/illustrations/department-icon.jpg"
import Avatar2 from "../assets/img/avatars/2.png"

const DepartmentTaskContent = () => {
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
                              <li className="list-inline-item">
                                <i className="ri-building-line me-2 btn-icon rounded-pill btn-label-warning ri-24px"></i><span className="fw-medium">Sky Capital</span>
                              </li>
                              <li className="list-inline-item">
                                <i className="ri-account-circle-line me-2 btn-icon rounded-pill btn-label-primary ri-24px"></i><span className="fw-medium">Peter Ishola</span>
                              </li>
                              <li className="list-inline-item">
                                <i className="ri-team-line me-2 btn-icon rounded-pill btn-label-secondary ri-24px"></i
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
                        <a className="nav-link" href="/department-detail"
                          ><i className="ri-menu-search-line me-2"></i>Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/department-members"><i className="ri-team-line me-2"></i>Members</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="/department-task"
                          ><i className="ri-list-check-3 me-2"></i>Tasks</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!--/ Navbar pills -->

              <!-- User Profile Content --> */}
              <div className="card">
                <div className="card-header border-bottom">
                  <div className="row">
                    <div className="col-md-2 mb-4">
                      <div className="d-flex">
                        <div className="btn-group me-4">
                          <button
                            type="button"
                            className="btn btn-outline-secondary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"><i className="ri-upload-2-line ri-16px me-2"></i>
                            Export
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="javascript:void(0);"><span><i className="ri-printer-line me-1"></i>Print</span></a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"><span><i className="ri-file-text-line me-1"></i>Csv</span></a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"><span><i className="ri-file-excel-line me-1"></i>Excel</span></a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"><span><i className="ri-file-pdf-line me-1"></i>PDF</span></a></li>
                            <li><a className="dropdown-item" href="javascript:void(0);"><span><i className="ri-file-copy-line me-1"></i>Copy</span></a></li>
                          </ul>
                        </div>
                        <div className="btn-group dropend">
                          <button
                            type="button"
                            className="btn btn-primary dropdown-toggle"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"><i className="ri-filter-line ri-16px me-2"></i>
                            Filter
                          </button>
                          <div className="dropdown-menu dropdown-menu-end w-px-300">
                            <form className="p-6" onSubmit={()=>{}}>
                              <div className="mb-5">
                                <label htmlFor="TypeaheadBasic" className="form-label">Select Subsidiary</label>
                                <input
                                  id="TypeaheadBasic"
                                  className="form-control typeahead form-control-sm"
                                  type="text"
                                  autoComplete="off"
                                  placeholder="Enter states from USA" />
                              </div>
                              <div className="mb-5">
                                <label htmlFor="TypeaheadBasic" className="form-label">Select Department</label>
                                <input
                                  id="TypeaheadBasic"
                                  className="form-control typeahead form-control-sm"
                                  type="text"
                                  autoComplete="off"
                                  placeholder="Enter states from USA" />
                              </div>
                              <div className="form-floating form-floating-outline mb-5">
                                <select id="user-role" className="form-select form-select-sm" data-allow-clear="true">
                                  <option value="male">Active</option>
                                  <option value="female">Pending</option>
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
                            <label><input type="search" className="form-control form-control-sm" placeholder="Search Task"/></label>
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
                            <th>ID</th>
                            <th>Title</th>
                            <th>Assigned To</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Due Date</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                        <tr>
                            <td><span>123</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
                            <td>
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="avatar-wrapper"><div className="avatar avatar-sm me-3">
                                        <img src={Avatar2} alt="Avatar" className="rounded-circle"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="app-user-view-account.html" className="text-truncate text-heading">
                                        <span className="fw-medium">Zsazsa McCleverty</span>
                                    </a>
                                </div>
                            </td>
                            <td><span>High</span></td>
                            <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                           <td>August 10, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-success me-1">Complete</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-danger me-1">Overdue</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-secondary me-1">In Progress</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-success me-1">Complete</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-secondary me-1">In Progress</span></td>
                            <td>June 15, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    </div>
                                </div>
                            </td>
                            <td>Normal</td>
                            <td><span className="badge rounded-pill bg-label-primary me-1">Pending Approval</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Approve New Immigration Bill</span></td>
                            <td>
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="avatar-wrapper">
                                        <div className="avatar avatar-sm me-3">
                                            <span className="avatar-initial rounded-circle bg-label-warning">JW</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <a href="app-user-view-account.html" className="text-truncate text-heading">
                                            <span className="fw-medium">James Whitehouse</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>High</td>
                            <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                            <td>July 20, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td><span>124</span></td>
                            <td className="text-wrap"><span className="fw-medium">Write out five new song lyrics</span></td>
                            <td>
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="avatar-wrapper">
                                        <div className="avatar avatar-sm me-3">
                                            <span className="avatar-initial rounded-circle bg-label-warning">JL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <a href="app-user-view-account.html" className="text-truncate text-heading">
                                            <span className="fw-medium">Jennifa Lopez</span>
                                        </a>
                                    </div>
                                </div>
                            </td>
                            <td>Low</td>
                            <td><span className="badge rounded-pill bg-label-danger me-1">Overdue</span></td>
                            <td>MArch 5, 2025</td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a
                                >
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
              {/* <!--/ User Profile Content --> */}
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default DepartmentTaskContent