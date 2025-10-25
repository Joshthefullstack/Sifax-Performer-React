import React from 'react'
import GradeImg from "../assets/img/illustrations/grade-icon.png"

const GradesContent = () => {
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
                                <h4 className="card-title mb-4">Manage <span className="fw-bold">Employee Grade</span> 🎉</h4>
                                <p className="mb-0">Manage all Employee Grades on this page.</p>
                                <p>Add, Edit, View, Delete Grade Level here.</p>
                                <div className="add-new">
                                    <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBoth"
                                    aria-controls="offcanvasBoth">
                                    <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block">  New Employee Grade </span>
                                  </button>
                                  <div
                                    className="offcanvas offcanvas-end"
                                    tabIndex={-1}
                                    id="offcanvasBoth"
                                    aria-labelledby="offcanvasBothLabel">
                                    <div className="offcanvas-header">
                                      <h5 id="offcanvasBothLabel" className="offcanvas-title">Create New Grade Level</h5>
                                      <button
                                        type="button"
                                        className="btn-close text-reset"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                      <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={() => {}}>
                                        <div className="form-floating form-floating-outline mb-5">
                                          <input
                                            type="text"
                                            className="form-control"
                                            id="add-grade-name"
                                            placeholder="Grade name"
                                            name="gradeName"
                                            aria-label="" />
                                          <label htmlFor="add-grade-name">Grade Name</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <input
                                              type="number"
                                              className="form-control"
                                              id="add-grade-steps"
                                              placeholder="Grade Steps"
                                              name="gradeStep"
                                              aria-label="" />
                                            <label htmlFor="add-grade-steps">Grade Steps</label>
                                          </div>
                                          <div className="form-floating form-floating-outline mb-5">
                                            <input
                                              type="number"
                                              className="form-control"
                                              id="add-grade-level"
                                              placeholder="Grade Level"
                                              name="gradeLevel"
                                              aria-label="" />
                                            <label htmlFor="add-grade-level">Grade Level</label>
                                          </div>
                                            <div className="mb-5">
                                            <input
                                              id="TypeaheadBasic"
                                              className="form-control typeahead"
                                              type="text"
                                              autoComplete="off"
                                              placeholder="Enter states from USA" />
                                              <label htmlFor="TypeaheadBasic" className="form-label">Type to Select Subsidiary</label>
                                            </div>
                                          <div className="form-floating form-floating-outline mb-5">
                                            <select
                                              id="selectsubsidiaryHead"
                                              className="selectpicker w-100"
                                              data-style="btn-default"
                                              data-live-search="true">
                                              <option>Professional Staff</option>
                                              <option>Operational Staff</option>
                                            </select>
                                            <label htmlFor="selectsubsidiaryHead">Grade Type</label>
                                          </div>
                            <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add Grade</button>
                                      </form>              
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end order-1 order-md-2">
                              <div className="card-body pb-0 px-0 pt-2">
                                <img
                                  src={GradeImg}
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
                                <label><input type="search" className="form-control form-control-sm" placeholder="Search grades"/></label>
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
                                <th>Grade Name</th>
                                <th>Step Number</th>
                                <th>Level</th>
                                <th>Subsidiary </th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            <tr>
                                <td>234</td>
                                <td>Executive One</td>
                                <td>7 Steps</td>
                                <td>Level 12</td>
                                <td>SAHCO Plc</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i> Edit</a>
                                    <div className="subsidiary-head">
                                    </div>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>235</td>
                                <td>Agent One</td>
                                <td>7 Steps</td>
                                <td>Level 13</td>
                                <td>SAHCO Plc</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i> Edit</a>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>236</td>
                                <td>Agent Two</td>
                                <td>6 Steps</td>
                                <td>Level 14</td>
                                <td>Sky Capital</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i> Edit</a>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i> Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>237</td>
                                <td>Deputy Manager</td>
                                <td>4 Steps</td>
                                <td>Level 15</td>
                                <td>Head Office</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i> Edit </a>
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
             </div> 
              {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default GradesContent