import React from 'react'
import PerspectivesImg from "../assets/img/illustrations/perspective-icon.jpg";

const PerspectivesContent = () => {
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
                                <h4 className="card-title mb-4">Manage <span className="fw-bold">Perspectives</span> 🎉</h4>
                                <p className="mb-0">Manage the 4 perspective of Balanced Scorecard.</p>
                                <p>Add, Edit, View, Delete Perspectives here.</p>
                                <div className="add-new">
                                    <button
                                    className="btn btn-primary"
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasBoth"
                                    aria-controls="offcanvasBoth">
                                    <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block">  New Perspective </span>
                                  </button>
                                  <div
                                    className="offcanvas offcanvas-end"
                                    tabIndex={-1}
                                    id="offcanvasBoth"
                                    aria-labelledby="offcanvasBothLabel">
                                    <div className="offcanvas-header">
                                      <h5 id="offcanvasBothLabel" className="offcanvas-title">Create New Perspective</h5>
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
                                            id="add-subsidiary-name"
                                            placeholder="Subsidiary name"
                                            name="subsidiaryName"
                                            aria-label="" />
                                          <label htmlFor="add-subsidiary-name">Perspective Name</label>
                                        </div>
                                        <div className="form-floating form-floating-outline mb-5">
                                            <textarea className="form-control h-px-100" id="add-subsidiary-description" placeholder="Add description here..."></textarea>
                                            <label htmlFor="add-subsidiary-description">Description</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add Subsidiary</button>
                                      </form>              
                                    </div>
                                  </div>
                                </div>
                                <div className="add-head">
                                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBackdrop" aria-labelledby="offcanvasBackdropLabel">
                                        <div className="offcanvas-header">
                                        <h5 id="offcanvasBackdropLabel" className="offcanvas-title">Add Subsidiary Head for SAHCO Plc</h5>
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
                                            <button type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary d-grid w-100"
                                            data-bs-dismiss="offcanvas">
                                            Cancel
                                        </button>
                                        </div>
                                    </div>

                                </div>
                                  </div>
                            </div>
                            <div className="col-md-6 text-center text-md-end order-1 order-md-2">
                              <div className="card-body pb-0 px-0 pt-2">
                                <img
                                  src={PerspectivesImg}
                                  height={186}
                                  className="scaleX-n1-rtl"
                                  alt="View Profile" />
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
                                <label><input type="search" className="form-control form-control-sm" placeholder="Search perspectives"/></label>
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
                                <th>Perspective Name</th>
                                <th className="text-wrap">Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                            <tr>
                                <td>1</td>
                                <td>Finance</td>
                                <td className="text-wrap">Finance Perspective</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i>Edit</a>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i>Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Internal Processes</td>
                                <td className="text-wrap">Internal Processes perspective</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i>Edit</a>
                                    <a className="dropdown-item" href="javascript:void(0);"><i className="ri-delete-bin-6-line me-1"></i>Delete</a>
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Customer Services</td>
                                <td className="text-wrap">Customer Services Perspective</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i>Edit</a
                                    >
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i>Delete</a
                                    >
                                    </div>
                                </div>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>People Learning & Growth</td>
                                <td className="text-wrap">People Learning and Growth perspective</td>
                                <td>
                                <div className="dropdown">
                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                    <i className="ri-more-2-line"></i>
                                    </button>
                                    <div className="dropdown-menu">
                                    <a className="dropdown-item" href="javascript:void(0);" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                        ><i className="ri-edit-2-line me-1"></i>Edit</a>
                                    <a className="dropdown-item" href="javascript:void(0);"
                                        ><i className="ri-delete-bin-6-line me-1"></i>Delete</a>
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
             </div> 
              {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default PerspectivesContent