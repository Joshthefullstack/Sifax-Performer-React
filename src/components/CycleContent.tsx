import React from 'react'

const CycleContent = () => {
    return (
        <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">Appraisal Cycles</h4>
                <p className="mb-6">
                    Create and manage all appraisal cycles here.
                </p>
                <div className="card">
                    <div className="card-header border-bottom">
                        <div className="row">
                            <div className="col-md-2 mb-4">
                            </div>
                            <div className="col-md-10">
                                <div className="d-flex justify-content-md-end">
                                    <div className="me-4">
                                        <div className="dataTables_filter">
                                            <label><input type="search" className="form-control form-control-sm" placeholder="Search Cycles" /></label>
                                        </div>
                                    </div>
                                    <div className="add-new">
                                        <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                            <i className="ri-add-line me-0 me-sm-1 d-inline-block d-sm-none"></i><span className="d-none d-sm-inline-block"> New Cycle </span>
                                        </button>
                                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBoth" aria-labelledby="offcanvasBothLabel">
                                            <div className="offcanvas-header">
                                                <h5 id="offcanvasBothLabel" className="offcanvas-title">Create New Performance Cycle</h5>
                                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                            </div>
                                            <div className="offcanvas-body mx-0 flex-grow-0">
                                                <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={() => { }}>
                                                    <div className="form-floating form-floating-outline mb-5">
                                                        <input type="text" className="form-control" id="add-rating-name" placeholder="Enter rating name" name="ratingName" aria-label="Exceptional" />
                                                        <label htmlFor="add-rating-name">Cycle Name</label>
                                                    </div>
                                                    <div className="form-floating form-floating-outline mb-5">
                                                        <select name="" className="form-select">
                                                            <option value="2023">2023</option>
                                                            <option value="2024">2024</option>
                                                            <option value="2025">2025</option>
                                                            <option value="2026">2026</option>
                                                            <option value="2027">2027</option>
                                                            <option value="2028">2028</option>
                                                            <option value="2029">2029</option>
                                                            <option value="2030">2030</option>
                                                        </select>
                                                        <label htmlFor="add-rating-description">Performance Year</label>
                                                    </div>
                                                    <div className="form-floating form-floating-outline mb-5">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="YYYY-MM-DD to YYYY-MM-DD"
                                                            id="flatpickr-range" />
                                                        <label htmlFor="flatpickr-range">Cycle Period</label>
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
                    <div className="card-body">
                        <div className="table-responsive text-nowrap">
                            <table className="table border-bottom">
                                <thead>
                                    <tr>
                                        <th className="dt-checkboxes-cell dt-checkboxes-select-all">
                                            <input type="checkbox" className="dt-checkboxes form-check-input" /></th>
                                        <th>Cycle Name</th>
                                        <th>Performance Year</th>
                                        <th>Cycle period</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="table-border-bottom-0">
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                                        <td><span>Year 2023 Performance Cycle</span></td>
                                        <td><span>Year 2023</span></td>
                                        <td><span>January 2023 - December 2023</span></td>
                                        <td><span className="badge rounded-pill bg-label-danger me-1">Closed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="ri-more-2-line"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                        <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                                    <a className="dropdown-item" href="appraisal-cycle-detail.html">
                                                        <i className="ri-edit-2-line me-1"></i> Dashboard </a>
                                                    <a className="dropdown-item" href="">
                                                        <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                                        <td><span>Year 2024 Performance Cycle</span></td>
                                        <td><span>Year 2024</span></td>
                                        <td><span>January 2024 - December 2024</span></td>
                                        <td><span className="badge rounded-pill bg-label-danger me-1">Closed</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="ri-more-2-line"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                        <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                                    <a className="dropdown-item" href="appraisal-cycle-detail.html">
                                                        <i className="ri-edit-2-line me-1"></i> Dashboard </a>
                                                    <a className="dropdown-item" href="">
                                                        <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                                        <td><span>Year 2025 Performance Cycle</span></td>
                                        <td><span>Year 2025</span></td>
                                        <td><span>January 2025 - December 2025</span></td>
                                        <td><span className="badge rounded-pill bg-label-success me-1">Open</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="ri-more-2-line"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                        <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                                    <a className="dropdown-item" href="appraisal-cycle-detail.html">
                                                        <i className="ri-edit-2-line me-1"></i> Dashboard </a>
                                                    <a className="dropdown-item" href="">
                                                        <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input" /></td>
                                        <td><span>Year 2026 Performance Cycle</span></td>
                                        <td><span>Year 2026</span></td>
                                        <td><span>January 2026 - December 2026</span></td>
                                        <td><span className="badge rounded-pill bg-label-primary me-1">Up coming</span></td>
                                        <td>
                                            <div className="dropdown">
                                                <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                    <i className="ri-more-2-line"></i>
                                                </button>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth">
                                                        <i className="ri-edit-2-line me-1"></i> Edit Cycle </a>
                                                    <a className="dropdown-item" href="appraisal-cycle-detail.html">
                                                        <i className="ri-edit-2-line me-1"></i> Dashboard </a>
                                                    <a className="dropdown-item" href="">
                                                        <i className="ri-close-circle-line me-1"></i> Deactivate </a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
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
                                        <form onSubmit={() => { }} className="form-repeater">
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

export default CycleContent