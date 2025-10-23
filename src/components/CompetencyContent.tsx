import React from 'react'

const CompetencyContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">Competencies</h4>
                <p className="mb-6">
                    Create and manage all Competencies here.
                </p>
                <div className="card">
                    <div className="card-header border-bottom">
                        <div className="row">
                          <div className="col-md-2 mb-4">
                            <div className="d-flex">
                              <div className="btn-group me-4">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-upload-2-line ri-16px me-2"></i>
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
                                  <form id="formAuthentication" method="post" className="p-6" onSubmit={() => {}}>
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
                                  <label><input type="search" className="form-control form-control-sm" placeholder="Search Feedback"/></label>
                                </div>
                              </div>
                              <div className="add-new">
                                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                  <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block"> New Feedback </span>
                                </button>
                                <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBoth" aria-labelledby="offcanvasBothLabel">
                                  <div className="offcanvas-header">
                                    <h5 id="offcanvasBothLabel" className="offcanvas-title">Create New Competency</h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                  </div>
                                  <div className="offcanvas-body mx-0 flex-grow-0">
                                    <form id="form">
                                        <div className="row">
                                            <div className="col-12">
                                            <div className="form-floating form-floating-outline mb-5">
                                                <select className="form-select select2" id="subsidiary">
                                                    <option value="head">Head Office</option>
                                                    <option value="PCHS">Ports & Cargo</option>
                                                    <option value="offdock">SIFAX offdock </option>
                                                    <option value="sahco">SAHCO Plc</option>
                                                    <option value="marine">SIFAX Marine</option>
                                                </select>
                                                <label htmlFor="subsidiary">Subsidiary</label>
                                            </div>          
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-floating-outline mb-5">
                                                <input id="name" type="text" className="form-control" />
                                                <label htmlFor="name" className="required">Competency Name</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select id="category" className="form-select select2">
                                                        <option value="">Select category</option>
                                                        <option value="core">Core</option>
                                                        <option value="leadership">Leadership</option>
                                                        <option value="functional">Functional</option>
                                                        <option value="culture">Culture</option>
                                                    </select>
                                                    <label htmlFor="category" className="required">Competency Category</label>
                                                    <div className="invalid-feedback" id="errCategory"></div>
                                                </div>
                                            </div>
                                            <div id="deptWrap" className="col-12 hidden">
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select id="departments" className="form-select select2 h-px-100" multiple>
                                                        <option value="Finance">Finance</option>
                                                        <option value="HR">HR</option>
                                                        <option value="Engineering">Engineering</option>
                                                        <option value="Sales">Sales</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Operations">Operations</option>
                                                        <option value="Customer Support">Customer Support</option>
                                                    </select>
                                                    <label htmlFor="departments" className="required">Applicable Departments/Job Groups</label>
                                                    <div className="invalid-feedback" id="errDepartments"></div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select id="roles" className="form-select select2 h-px-100" multiple>
                                                        <option value="Manager">Manager</option>
                                                        <option value="Peer">Peer</option>
                                                        <option value="Direct Report">Direct Report</option>
                                                        <option value="Self">Self</option>
                                                    </select>
                                                    <label htmlFor="roles" className="required">Applicable Roles</label>
                                                    <div className="invalid-feedback" id="errRoles"></div>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <textarea id="description" className="form-control h-px-100"></textarea>
                                                    <label htmlFor="description">Description</label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="input-group mb-5">
                                                    <input id="indicatorInput" className="form-control" placeholder="Type Behavioural indicator and press Enter"/>
                                                    <button id="addIndicatorBtn" type="button" className="btn btn-outline-secondary">Add</button>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div id="indicatorList" className="d-flex flex-wrap gap-2 border rounded p-2 bg-white mb-5"></div>
                                            </div>
                                            <div className="col-12">
                                              <div className="form-floating form-floating-outline mb-5">
                                                <select className="select2 form-select" id="ratingScaleSelect" required>
                                                  <option value="">Select from defined scales</option>
                                                </select>
                                                <label className="form-label">Rating Scale</label>
                                              </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <input name="compWeight" id="weight" type="number" className="form-control" min="0" max="100" />
                                                    <label htmlFor="weight" className="required">Weight (%)</label>
                                                    <div className="invalid-feedback" id="errWeight"></div>
                                                </div>
                                            </div>
                                            <hr className="my-3"/>
                                            <div className="col-12 mb-5">
                                                <div className="d-flex justify-content-between align-items-center mb-1">
                                                    <div className="small-muted">Running total</div>
                                                    <div id="totalText" className="fw-semibold small-muted">0 / 100</div>
                                                </div>
                                                <div className="weight-bar">
                                                    <div id="totalBar" className="progress-bar bg-warning" role="progressbar" style={{width:"0%"}}></div>
                                                </div>
                                                <div id="totalHint" className="form-text small-muted mt-1">This is informational only — submissions are allowed regardless of total.</div>
                                            </div>
                                        </div>
                                        <button id="saveBtn" type="submit" className="btn btn-primary me-sm-3 me-1">Add Competency</button>
                                        <button id="resetBtn" type="button" className="btn btn-outline-secondary">Reset</button>
                                        <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Close</button>
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
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Departments</th>
                                    <th>Roles</th>
                                    <th>Description</th>
                                    <th>Indicators</th>
                                    <th>Scale</th>
                                    <th>Weight</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody id="tableBody">
                                    <tr className="text-muted">
                                        <td colSpan={9} className="text-center py-4">No competencies yet.</td>
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
                <div className="modal-dialog modal-xl modal-dialog-centered modal-simple modal-upgrade-plan">
                  <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                      <div className="text-center">
                        <h4 className="mb-2">Add New Competency</h4>
                        <p className="mb-6">Fill this form to add a new competency.</p>
                      </div>
                      <form id="form">
                        <div className="row">
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline mb-3">
                              <input id="name" type="text" className="form-control" />
                              <label htmlFor="name" className="required">Competency Name</label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline mb-3">
                                <select id="category" className="form-select">
                                    <option value="">Select category</option>
                                    <option value="core">Core</option>
                                    <option value="leadership">Leadership</option>
                                    <option value="functional">Functional</option>
                                    <option value="culture">Culture</option>
                                </select>
                                <label htmlFor="category" className="required">Competency Category</label>
                                <div className="invalid-feedback" id="errCategory"></div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline mb-3">
                                <select id="departments" className="form-select h-px-100" multiple>
                                    <option value="Finance">Finance</option>
                                    <option value="HR">HR</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Sales">Sales</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Operations">Operations</option>
                                    <option value="Customer Support">Customer Support</option>
                                </select>
                                <label htmlFor="departments" className="required">Applicable Departments / Job Groups</label>
                                <div className="invalid-feedback" id="errDepartments"></div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline mb-3">
                                <select id="roles" className="form-select h-px-100" multiple>
                                    <option value="Manager">Manager</option>
                                    <option value="Peer">Peer</option>
                                    <option value="Direct Report">Direct Report</option>
                                    <option value="Self">Self</option>
                                </select>
                                <label htmlFor="roles" className="required">Applicable Roles</label>
                                <div className="invalid-feedback" id="errRoles"></div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="form-floating form-floating-outline mb-3">
                                <textarea id="description" className="form-control h-px-100"></textarea>
                                <label htmlFor="description">Description</label>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <input id="indicatorInput" className="form-control" placeholder="Type Behavioural indicator and press Enter"/>
                                <button id="addIndicatorBtn" type="button" className="btn btn-outline-secondary">Add</button>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline mb-3">
                                <input name="compWeight" id="weight" type="number" className="form-control" min="0" max="100" />
                                <label htmlFor="weight" className="required">Weight (%)</label>
                                <div className="invalid-feedback" id="errWeight"></div>
                            </div>
                          </div>
                          <div className="col-12">
                            <div id="indicatorList" className="d-flex flex-wrap gap-2 border rounded p-2 bg-white"></div>
                          </div>
                          <hr className="my-3"/>
                          <div className="col-sm-6">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <div className="small-muted">Running total</div>
                <div id="totalText" className="fw-semibold small-muted">0 / 100</div>
              </div>
              <div className="weight-bar">
                <div id="totalBar" className="progress-bar bg-warning" role="progressbar" style={{width:"0%"}}></div>
              </div>
              <div id="totalHint" className="form-text small-muted mt-1">This is informational only — submissions are allowed regardless of total.</div>
                          </div>
                          <div className="col-sm-6">
                            <div className="form-floating form-floating-outline">

                            </div>
                          </div>
                        </div>
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

export default CompetencyContent