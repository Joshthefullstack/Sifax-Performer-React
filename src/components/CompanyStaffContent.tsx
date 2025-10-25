import React from 'react'
import PageBanner from "../assets/img/pages/page-banner2.jpg"
import CompIcon from "../assets/img/illustrations/department-icon.jpg"

const CompanyStaffContent = () => {
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
                          src={CompIcon}
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
                                ><span className="fw-medium"> 234 <small>Staff</small></span>
                              </li>
                            </ul>
                          </div>
                          <div className="dropdown">
                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                            <i className="ri-more-2-line"></i>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#createApp"><i className="ri-edit-2-line me-1"></i> Edit Subsidiary</a>
                            <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBackdrop" aria-controls="offcanvasBackdrop"><i className="ri-account-circle-line me-1"></i> Set Subsidiary Head</a>
                            <a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-6-line me-1"></i> Delete Subsidiary</a>
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
                        <a className="nav-link" href="subsidiary-detail.html"><i className="ri-menu-search-line me-2"></i>Details</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="subsidiary-dept.html"><i className="ri-menu-search-line me-2"></i>Departments</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link active" href="subsidiary-staff.html"><i className="ri-team-line me-2"></i>Staff</a>
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
                        <div className="">
                          <div className="dataTables_filter">
                            <label><input type="search" className="form-control form-control-sm" placeholder="Search User" /></label>
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
                            <th className="dt-checkboxes-cell dt-checkboxes-select-all"><input type="checkbox" className="dt-checkboxes form-check-input"/></th>
                            <th>Staff Name</th>
                            <th>Staff ID</th>
                            <th>Subsidiary</th>
                            <th>Department</th>
                            <th>Designation</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                        <tr>
                            <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                            <td>
                                <div className="d-flex justify-content-start align-items-center user-name">
                                    <div className="avatar-wrapper"><div className="avatar avatar-sm me-3">
                                        <img src="assets/img/avatars/2.png" alt="Avatar" className="rounded-circle"/>
                                    </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column">
                                    <a href="app-user-view-account.html" className="text-truncate text-heading">
                                        <span className="fw-medium">Zsazsa McCleverty</span>
                                    </a><small>zmcclevertye@soundcloud.com</small>
                                </div>
                            </td>
                            <td>SAH2341</td>
                            <td>SAHCO Plc</td>
                            <td>Human Resources</td>
                            <td>HR Executive</td>
                            <td>Abuja</td>
                            <td><span className="badge rounded-pill bg-label-success me-1">Active</span></td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-shield-user-line me-1"></i> Make Supervisor</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-delete-bin-7-line me-1"></i> Make Admin</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-user-forbid-line me-1"></i> Deactivate</a>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
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
                            <td>SAH2341</td>
                            <td>SAHCO Plc</td>
                            <td>Human Resources</td>
                            <td>HR Executive</td>
                            <td>Abuja</td>
                            <td><span className="badge rounded-pill bg-label-success me-1">Active</span></td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-shield-user-line me-1"></i> Make Supervisor</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-delete-bin-7-line me-1"></i> Make Admin</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-user-forbid-line me-1"></i> Deactivate</a>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
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
                            <td>SAH2341</td>
                            <td>SAHCO Plc</td>
                            <td>Human Resources</td>
                            <td>HR Executive</td>
                            <td>Abuja</td>
                            <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-shield-user-line me-1"></i> Make Supervisor</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-delete-bin-7-line me-1"></i> Make Admin</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-user-forbid-line me-1"></i> Deactivate</a>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
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
                            <td>SAH2341</td>
                            <td>SAHCO Plc</td>
                            <td>Human Resources</td>
                            <td>HR Executive</td>
                            <td>Abuja</td>
                            <td><span className="badge rounded-pill bg-label-danger me-1">Inactive</span></td>
                            <td>
                            <div className="dropdown">
                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                <i className="ri-more-2-line"></i>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-eye-line me-1"></i> View Details</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-shield-user-line me-1"></i> Make Supervisor</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-delete-bin-7-line me-1"></i> Make Admin</a>
                                <a className="dropdown-item" href="javascript:void(0);"
                                    ><i className="ri-user-forbid-line me-1"></i> Deactivate</a>
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
                              ><i className="tf-icon ri-skip-back-mini-line ri-20px"></i></a>
                          </li>
                          <li className="page-item prev">
                            <a className="page-link" href="javascript:void(0);"
                              ><i className="tf-icon ri-arrow-left-s-line ri-20px"></i></a>
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
                              ><i className="tf-icon ri-arrow-right-s-line ri-20px"></i></a>
                          </li>
                          <li className="page-item last">
                            <a className="page-link" href="javascript:void(0);"
                              ><i className="tf-icon ri-skip-forward-mini-line ri-20px"></i></a>
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

export default CompanyStaffContent