import React from 'react'

const AppraisalRatingContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}

              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">Appraisal Ratings</h4>
                <p className="mb-6">
                    Set and manage all appraisal ratings here.
                </p>
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
                                <form id="formAuthentication" method="post" className="p-6" onSubmit={()=>{}}>
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
                                <label><input type="search" className="form-control form-control-sm" placeholder="Search Rating"/></label>
                              </div>
                            </div>
                            <div className="add-new">
                                <button
                                className="btn btn-primary"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasBoth"
                                aria-controls="offcanvasBoth">
                                <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block"> New Rating </span>
                              </button>
                              <div
                                className="offcanvas offcanvas-end"
                                tabIndex={-1}
                                id="offcanvasBoth"
                                aria-labelledby="offcanvasBothLabel">
                                <div className="offcanvas-header">
                                  <h5 id="offcanvasBothLabel" className="offcanvas-title">Add New Rating</h5>
                                  <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body mx-0 flex-grow-0">
                                  <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={()=>{}}>
                                    <div className="form-floating form-floating-outline mb-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="add-rating-name"
                                        placeholder="Enter rating name"
                                        name="ratingName"
                                        aria-label="Exceptional" />
                                      <label htmlFor="add-rating-name">Rating Name</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="add-rating-description"
                                        placeholder="Enter description"
                                        name="ratingDescription"
                                        aria-label="Rating description" />
                                      <label htmlFor="add-rating-description">Description</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                      <input
                                        type="text"
                                        className="form-control"
                                        id="add-rating-abbrev"
                                        placeholder="Enter rating abbreviation"
                                        name="ratingAbbreviation"
                                        aria-label="Rating Abbrev" />
                                      <label htmlFor="add-rating-abbrev">Abbreviation</label>
                                    </div>
                                    <div className="divider divider-dashed">
                                        <div className="divider-text">SCORE RANGE</div>
                                     </div>
                                     <div className="d-flex justify-content-between">
                                        <div className="form-floating form-floating-outline mb-5 me-2">
                                            <input
                                              type="number"
                                              id="add-rating-from"
                                              className="form-control"
                                              placeholder="00"
                                              aria-label="00"
                                              name="ratingFrom" />
                                            <label htmlFor="add-rating-from">From</label>
                                          </div>
                                          <div className="form-floating form-floating-outline mb-5">
                                            <input
                                              type="number"
                                              id="add-rating-to"
                                              className="form-control"
                                              placeholder="100"
                                              aria-label="100"
                                              name="ratingTo" />
                                            <label htmlFor="add-rating-to">To</label>
                                          </div>
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
                                <th className="dt-checkboxes-cell dt-checkboxes-select-all"><input type="checkbox" className="dt-checkboxes form-check-input"/></th>
                                <th>Rating Name</th>
                                <th>Description</th>
                                <th>Abbreviation</th>
                                <th>Range</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            <tr>
                                <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                <td><span>Outstanding</span></td>
                                <td>
                                    <p className="text-wrap">Consistently exceeds expectations, demonstrating exceptional performance in all areas. </p>
                                </td>
                                <td><span>A+</span></td>
                                <td>90-100</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                        <i className="ri-edit-2-line me-1"></i> Edit </a>
                                    <a className="dropdown-item" href="">
                                        <i className="ri-close-circle-line me-1"></i> Remove </a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                <td><span>Exceeds Expectations</span></td>
                                <td>
                                    <p className="text-wrap">Regularly goes above and beyond established standards, showing significant initiative and high-quality work. </p>
                                </td>
                                <td><span>B</span></td>
                                <td>80-89</td>
                                <td>
                                  <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                            <i className="ri-edit-2-line me-1"></i> Edit </a>
                                        <a className="dropdown-item" href="">
                                            <i className="ri-close-circle-line me-1"></i> Remove </a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                <td><span>Meets Expectations</span></td>
                                <td>
                                    <p className="text-wrap">Performs at the expected level, consistently fulfilling job responsibilities and meeting deadlines. </p>
                                </td>
                                <td><span>C</span></td>
                                <td><span>60-79</span></td>
                                <td>
                                  <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                            <i className="ri-edit-2-line me-1"></i> Edit </a>
                                        <a className="dropdown-item" href="">
                                            <i className="ri-close-circle-line me-1"></i> Remove </a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                <td><span>Needs Improvement</span></td>
                                <td>
                                    <p className="text-wrap">Performance falls below expectations in some areas, requiring additional guidance and development. </p>
                                </td>
                                <td><span>D</span></td>
                                <td><span>50-59</span></td>
                                <td>
                                  <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="" data-bs-target="#addRoleModal" data-bs-toggle="modal"
                                        ><i className="ri-edit-2-line me-1"></i> Edit </a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-close-circle-line me-1"></i> Remove </a
                                    >
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="  dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
                                <td><span>Unsatisfactory</span></td>
                                <td>
                                    <p className="text-wrap">Fails to meet basic performance standards, requiring significant intervention and potential corrective action. </p>
                                </td>
                                <td><span>E</span></td>
                                <td><span>0-49</span></td>
                                <td>
                                  <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                        <i className="ri-edit-2-line me-1"></i> Edit </a>
                                    <a className="dropdown-item" href="">
                                        <i className="ri-close-circle-line me-1"></i> Remove </a>
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

              {/* <!-- Add Role Modal --> */}
              <div className="modal fade" id="addRoleModal" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-dialog-centered modal-add-new-role">
                  <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                      <div className="text-center mb-6">
                        <h4 className="role-title mb-2 pb-0">Edit Administrator</h4>
                        <p>Update administrator permissions for <strong>Titilope Samuel</strong></p>
                      </div>
                      {/* <!-- Add role form --> */}
                      <form id="addRoleForm" className="row g-3" onSubmit={()=>{}}>
                        <div className="col-12">
                          <h5 className="mb-6">Administrator Permissions</h5>
                          {/* <!-- Permission table --> */}
                          <div className="table-responsive">
                            <table className="table table-flush-spacing">
                              <tbody>
                                <tr>
                                  <td className="text-nowrap fw-medium">
                                    Administrator Access
                                    <i
                                      className="ri-information-line"
                                      data-bs-toggle="tooltip"
                                      data-bs-placement="top"
                                      title="Allows a full access to the system"></i>
                                  </td>
                                  <td></td>
                                  <td>
                                      <div className="form-check mb-0 mt-1">
                                        <input className="form-check-input" type="checkbox" id="selectAll" />
                                        <label className="form-check-label" htmlFor="selectAll"> Select All </label>
                                      </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Dashboard</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="userManagementRead" />
                                        <label className="form-check-label" htmlFor="userManagementRead"> All Dashboard </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="userManagementWrite" />
                                      <label className="form-check-label" htmlFor="userManagementWrite"> My Dashboard </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">User Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="contentManagementRead" />
                                        <label className="form-check-label" htmlFor="contentManagementRead"> All Users </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="contentManagementWrite" />
                                      <label className="form-check-label" htmlFor="contentManagementWrite"> My Users </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Administrator Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="dispManagementRead" />
                                        <label className="form-check-label" htmlFor="dispManagementRead"> All Administrators </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="dispManagementWrite" />
                                      <label className="form-check-label" htmlFor="dispManagementWrite"> My Administrators </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Subsidiary Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="dbManagementRead" />
                                        <label className="form-check-label" htmlFor="dbManagementRead"> All Subsidiaries </label>
                                      </div>
                                  </td>
                                  <td></td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Department Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="finManagementRead" />
                                        <label className="form-check-label" htmlFor="finManagementRead"> All Departments </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="finManagementWrite" />
                                      <label className="form-check-label" htmlFor="finManagementWrite"> My Departments </label>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Designation Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="reportingRead" />
                                        <label className="form-check-label" htmlFor="reportingRead"> All Designations </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="reportingWrite" />
                                      <label className="form-check-label" htmlFor="reportingWrite"> My Designations </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Grade Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="apiRead" />
                                        <label className="form-check-label" htmlFor="apiRead"> All Grades </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="apiWrite" />
                                      <label className="form-check-label" htmlFor="apiWrite"> My Grades </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Appraisal Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="repoRead" />
                                        <label className="form-check-label" htmlFor="repoRead"> All Appraisals </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="repoWrite" />
                                      <label className="form-check-label" htmlFor="repoWrite"> My Appraisals </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Task Manager</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="payrollRead" />
                                        <label className="form-check-label" htmlFor="payrollRead"> All Tasks </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="payrollWrite" />
                                      <label className="form-check-label" htmlFor="payrollWrite"> My Tasks </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Feedback Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="payrollRead" />
                                        <label className="form-check-label" htmlFor="payrollRead"> All Feedbacks </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="payrollWrite" />
                                      <label className="form-check-label" htmlFor="payrollWrite"> My Feedbacks </label>
                                    </div>
                                </td>
                                </tr>
                                <tr>
                                  <td className="text-nowrap fw-medium">Complaint Management</td>
                                  <td>
                                      <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                        <input className="form-check-input" type="checkbox" id="payrollRead" />
                                        <label className="form-check-label" htmlFor="payrollRead"> All Complaints </label>
                                      </div>
                                  </td>
                                  <td>
                                    <div className="form-check mb-0 mt-1 me-4 me-lg-12">
                                      <input className="form-check-input" type="checkbox" id="payrollWrite" />
                                      <label className="form-check-label" htmlFor="payrollWrite"> My Complaints </label>
                                    </div>
                                </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          {/* <!-- Permission table --> */}
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
                      {/* <!--/ Add role form --> */}
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Add Role Modal --> */}
            </div> 
              {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default AppraisalRatingContent