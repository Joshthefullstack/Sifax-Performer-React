import React from 'react'
import Avatar2 from "../assets/img/avatars/2.png"

const CompanyDepartmentsContent = () => {
  return (
                <div className="content-wrapper">
                    {/* <!-- Content --> */}

                    <div className="container-xxl flex-grow-1 container-p-y">
                        {/* <!-- Header --> */}
                        <div className="row">
                            <div className="col-12">
                                <div className="card mb-6">
                                    <div className="user-profile-header-banner">
                                        <img src="assets/img/pages/page-banner2.jpg" alt="Banner image"
                                            className="rounded-top" />
                                    </div>
                                    <div
                                        className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-5">
                                        <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                            <img src="assets/img/illustrations/company-icon.jpg" alt="user image"
                                                className="d-block h-auto ms-0 ms-sm-5 rounded-4 user-profile-img" />
                                        </div>
                                        <div className="flex-grow-1 mt-4 mt-sm-12">
                                            <div
                                                className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-6">
                                                <div className="user-profile-info">
                                                    <h4 className="mb-2">SAHCO Plc</h4>
                                                    <ul
                                                        className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                                                        <li className="list-inline-item text-body">
                                                            <i className="ri-map-pin-range-line me-2 ri-24px"></i><span
                                                                className="fw-medium">Lagos,
                                                                Nigeria</span>
                                                        </li>
                                                        <li className="list-inline-item text-body">
                                                            <i className="ri-account-circle-line me-2 ri-24px"></i><span
                                                                className="fw-medium">Peter
                                                                Ishola</span>
                                                        </li>
                                                        <li className="list-inline-item text-body">
                                                            <i className="ri-team-line me-2 ri-24px"></i><span
                                                                className="fw-medium"> 234
                                                                <small>Staff</small></span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="dropdown">
                                                    <button type="button" className="btn p-0 dropdown-toggle hide-arrow"
                                                        data-bs-toggle="dropdown">
                                                        <i className="ri-more-2-line"></i>
                                                    </button>
                                                    <div className="dropdown-menu">
                                                        <a className="dropdown-item" href="javascript:void(0);"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#offcanvasBoth"><i
                                                                className="ri-edit-2-line me-1"></i> Edit Subsidiary</a>
                                                        <a className="dropdown-item" href="javascript:void(0);"
                                                            data-bs-toggle="offcanvas" data-bs-target="#stratObj"><i
                                                                className="ri-focus-2-line me-1"></i> Add Objective</a>
                                                        <a className="dropdown-item" href="javascript:void(0);"
                                                            data-bs-toggle="offcanvas"
                                                            data-bs-target="#offcanvasBackdrop"
                                                            aria-controls="offcanvasBackdrop"><i
                                                                className="ri-account-circle-line me-1"></i> Set Subsidiary
                                                            Head</a>
                                                        <a className="dropdown-item" href="javascript:void(0);"><i
                                                                className="ri-delete-bin-6-line me-1"></i> Delete
                                                            Subsidiary</a>
                                                    </div>
                                                    <div className="add-head">
                                                        <div className="offcanvas offcanvas-end" tabIndex={-1}
                                                            id="offcanvasBackdrop"
                                                            aria-labelledby="offcanvasBackdropLabel">
                                                            <div className="offcanvas-header">
                                                                <h5 id="offcanvasBackdropLabel" className="offcanvas-title">
                                                                    Add Subsidiary Head for SAHCO
                                                                    Plc</h5>
                                                                <button type="button" className="btn-close text-reset"
                                                                    data-bs-dismiss="offcanvas"
                                                                    aria-label="Close"></button>
                                                            </div>
                                                            <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <div
                                                                            className="form-floating form-floating-outline mb-5">
                                                                            <select id="selectsubsidiaryHead"
                                                                                className="selectpicker w-100"
                                                                                data-style="btn-default"
                                                                                data-live-search="true">
                                                                                <option>Zsazsa McCleverty</option>
                                                                                <option>Joy Kolawole</option>
                                                                                <option>Titilope Edet</option>
                                                                                <option>John Doe</option>
                                                                            </select>
                                                                            <label htmlFor="selectsubsidiaryHead">Select
                                                                                Staff</label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <button type="button"
                                                                    className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                                                                <button type="button"
                                                                    className="btn btn-outline-secondary d-grid w-100"
                                                                    data-bs-dismiss="offcanvas">
                                                                    Cancel
                                                                </button>
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
                        {/* <!--/ Header -->

                        <!-- Navbar pills --> */}
                        <div className="row">
                            <div className="col-md-12">
                                <div className="nav-align-top">
                                    <ul className="nav nav-pills flex-column flex-sm-row mb-6 row-gap-2">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/subsidiary-detail"><i
                                                    className="ri-menu-search-line me-2"></i>Details</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" href="/subsidiary-dept"><i
                                                    className="ri-folders-line me-2"></i>Departments</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/subsidiary-staff"><i
                                                    className="ri-team-line me-2"></i>Staff</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!--/ Navbar pills -->

                        <!-- Department Table --> */}
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
                                                <label><input type="search" className="form-control form-control-sm"
                                                        placeholder="Search Departments"/></label>
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
                                            <th>Name</th>
                                            <th>Members</th>
                                            <th>Manager</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">
                                        <tr>
                                            <td>234</td>
                                            <td>Human Resources</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <ul
                                                            className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Vinnie Mostowy"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/5.png" alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Allen Rieske"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/12.png"
                                                                    alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Julee Rossignol"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/6.png" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span
                                                                    className="avatar-initial rounded-circle pull-up text-heading"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="9 more">+9</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="avatar-wrapper">
                                                        <div className="avatar avatar-sm me-3">
                                                            <img src={Avatar2} alt="Avatar"
                                                                className="rounded-circle"/>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <a href="app-user-view-account.html"
                                                            className="text-truncate text-heading">
                                                            <span className="fw-medium">Zsazsa McCleverty</span>
                                                        </a><small>zmcclevertye@soundcloud.com</small>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>235</td>
                                            <td>Information Technology</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <ul
                                                            className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Vinnie Mostowy"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/5.png" alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Allen Rieske"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/12.png"
                                                                    alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Julee Rossignol"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/6.png" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span
                                                                    className="avatar-initial rounded-circle pull-up text-heading"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="9 more">+9</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="avatar-wrapper">
                                                        <div className="avatar avatar-sm me-3">
                                                            <span
                                                                className="avatar-initial rounded-circle bg-label-danger"><i
                                                                    className="ri-close-circle-line"></i></span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <a href="" className="text-truncate text-heading">
                                                            <span className="fw-medium">No Subsidiary Head</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>236</td>
                                            <td>Operations</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <ul
                                                            className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Vinnie Mostowy"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/5.png" alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Allen Rieske"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/12.png"
                                                                    alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Julee Rossignol"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/6.png" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span
                                                                    className="avatar-initial rounded-circle pull-up text-heading"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="9 more">+9</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="avatar-wrapper">
                                                        <div className="avatar avatar-sm me-3">
                                                            <span
                                                                className="avatar-initial rounded-circle bg-label-warning">VK</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <a href="app-user-view-account.html"
                                                            className="text-truncate text-heading">
                                                            <span className="fw-medium">Vladamir Koschek</span>
                                                        </a>
                                                        <small>vkoschek17@abc.net.au</small>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>237</td>
                                            <td>Finance</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="d-flex align-items-center">
                                                        <ul
                                                            className="list-unstyled d-flex align-items-center avatar-group mb-0">
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Vinnie Mostowy"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/5.png" alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Allen Rieske"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/12.png"
                                                                    alt="Avatar" />
                                                            </li>
                                                            <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                                data-bs-placement="top" title="Julee Rossignol"
                                                                className="avatar avatar-sm pull-up">
                                                                <img className="rounded-circle"
                                                                    src="../../assets/img/avatars/6.png" alt="Avatar" />
                                                            </li>
                                                            <li className="avatar avatar-sm">
                                                                <span
                                                                    className="avatar-initial rounded-circle pull-up text-heading"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="9 more">+9</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex justify-content-start align-items-center user-name">
                                                    <div className="avatar-wrapper">
                                                        <div className="avatar avatar-sm me-3">
                                                            <span
                                                                className="avatar-initial rounded-circle bg-label-warning">VK</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <a href="app-user-view-account.html"
                                                            className="text-truncate text-heading">
                                                            <span className="fw-medium">Vladamir Koschek</span>
                                                        </a>
                                                        <small>vkoschek17@abc.net.au</small>
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
                                            <div className="" id="" role="status"><span>Showing 1 to 10 of 50 entries</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <nav aria-label="Page navigation">
                                            <ul className="pagination justify-content-end">
                                                <li className="page-item first">
                                                    <a className="page-link" href="javascript:void(0);"><i
                                                            className="tf-icon ri-skip-back-mini-line ri-20px"></i></a>
                                                </li>
                                                <li className="page-item prev">
                                                    <a className="page-link" href="javascript:void(0);"><i
                                                            className="tf-icon ri-arrow-left-s-line ri-20px"></i></a>
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
                                                    <a className="page-link" href="javascript:void(0);"><i
                                                            className="tf-icon ri-arrow-right-s-line ri-20px"></i></a>
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
                        {/* <!--/ Department Table -->

                        <!-- Create Subsidiary Modal --> */}
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasBoth"
                            aria-labelledby="offcanvasBothLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasBothLabel" className="offcanvas-title">Edit Subsidiary</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={()=>{}}>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <input type="text" className="form-control" id="add-subsidiary-name"
                                            placeholder="Subsidiary name" name="subsidiaryName" aria-label="" />
                                        <label htmlFor="add-subsidiary-name">Subsidiary Name</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <input type="text" className="form-control" id="add-subsidiary-location"
                                            placeholder="Subsidiary location" name="subsidiaryLocation" aria-label="" />
                                        <label htmlFor="add-subsidiary-location">Location</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <textarea className="form-control h-px-100" id="add-subsidiary-description"
                                            placeholder="Add description here..."></textarea>
                                        <label htmlFor="add-subsidiary-description">Subsidiary Description</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add
                                        Subsidiary</button>
                                </form>
                            </div>
                        </div>
                        {/* <!--/ Create Subsidiary Modal -->
                        <!-- Create Objectives Modal --> */}
                        <div className="offcanvas offcanvas-end" tabIndex={-1} id="stratObj"
                            aria-labelledby="offcanvasBothLabel">
                            <div className="offcanvas-header">
                                <h5 id="offcanvasBothLabel" className="offcanvas-title">Add Strategic Objective</h5>
                                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={()=>{}}>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <input type="text" className="form-control" id="add-obj-name"
                                            placeholder="Subsidiary name" name="subsidiaryName" aria-label="" />
                                        <label htmlFor="add-obj-name">Objective Name</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <textarea className="form-control h-px-100" id="add-obj-description"
                                            placeholder="Add description here..."></textarea>
                                        <label htmlFor="add-obj-description">Objective Description</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <select name="" className="form-select" id="">
                                            <option value="">Finance</option>
                                            <option value="">Internal Processes</option>
                                            <option value="">Customer Services</option>
                                            <option value="">Learning and Growth</option>
                                        </select>
                                        <label htmlFor="">Perspectives</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <select name="" className="form-select" id="">
                                            <option value="">2025</option>
                                            <option value="">2026</option>
                                            <option value="">2027</option>
                                            <option value="">2028</option>
                                        </select>
                                        <label htmlFor="">Cycle Year</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <select name="" className="form-select" id="">
                                            <option value="">Daily</option>
                                            <option value="">Weekly</option>
                                            <option value="">Monthly</option>
                                            <option value="">Quarterly</option>
                                            <option value="">Yearly</option>
                                        </select>
                                        <label htmlFor="">Review Frequency</label>
                                    </div>
                                    <div className="form-floating form-floating-outline mb-5">
                                        <input id="TagifyCustomInlineSuggestion" name="TagifyCustomInlineSuggestion"
                                            className="form-control h-auto" placeholder="select department/business unit"
                                            value="Customer Service, Procurement, Operations" />
                                        <label htmlFor="TagifyCustomInlineSuggestion">Business Units/Departments</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Add
                                        Objective</button>
                                </form>
                            </div>
                        </div>
                        {/* <!--/ Create Objectives Modal --> */}

                    </div>
                    {/* <!-- / Content --> */}

                    <div className="content-backdrop fade"></div>
                </div>
  )
}

export default CompanyDepartmentsContent