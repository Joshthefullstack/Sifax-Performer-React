import React from 'react';
import profileBanner from "../assets/img/pages/profile-banner.png";
import avatar1 from "../assets/img/avatars/1.png";

const StaffDetailContent = () => {
    return (
        <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
                {/* <!-- Header --> */}
                <div className="row">
                    <div className="col-12">
                        <div className="card mb-6">
                            <div className="user-profile-header-banner">
                                <img src={profileBanner} alt="Banner image" className="rounded-top" />
                            </div>
                            <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-5">
                                <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                                    <img src={avatar1} alt="user image" className="d-block h-auto ms-0 ms-sm-5 rounded-4 user-profile-img" />
                                </div>
                                <div className="flex-grow-1 mt-4 mt-sm-12">
                                    <div
                                        className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-5 flex-md-row flex-column gap-6">
                                        <div className="user-profile-info">
                                            <h4 className="mb-0">Oluwakayode Alonge</h4>
                                            <ul className="list-inline mb-2 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-0">
                                               <li className="list-inline-item text-body">
                                                <small className="mb-2 me-3">SAH0123</small>
                                                </li> 
                                               <li className="list-inline-item text-body">
                                                <small>General Manager Step 4</small>
                                                </li> 
                                            </ul>
                                            <ul
                                                className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                                                <li className="list-inline-item text-body">
                                                    <i className="ri-briefcase-2-line me-2 ri-24px"></i><span className="fw-medium">Group Head of HR</span>
                                                </li>
                                                <li className="list-inline-item text-body">
                                                    <i className="ri-account-circle-line me-2 ri-24px"></i><span className="fw-medium">Human Resources</span>
                                                </li>
                                                <li className="list-inline-item text-body">
                                                    <i className="ri-building-line me-2 ri-24px"></i><span className="fw-medium">Head Office</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBoth" aria-controls="offcanvasBoth"
                                                ><i className="ri-edit-2-line me-1"></i> Edit Staff</a>
                                                <a className="dropdown-item" href="" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSupervisor" aria-controls="offcanvasSupervisor"
                                                ><i className="ri-account-circle-line me-1"></i> Make Supervisor</a>
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-user-forbid-line me-1"></i> Deactivate</a>
                                            </div>
                                            <div
                                                className="offcanvas offcanvas-end"
                                                tabIndex={-1}
                                                id="offcanvasBoth"
                                                aria-labelledby="offcanvasBothLabel">
                                                <div className="offcanvas-header">
                                                    <h5 id="offcanvasBothLabel" className="offcanvas-title">Edit User Details</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close text-reset"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                                                    <form className="add-new-user pt-0" id="addNewUserForm" onSubmit={() => { }}>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="add-user-firstname"
                                                                placeholder="First name"
                                                                name="userFirstname"
                                                                aria-label="John Doe" />
                                                            <label htmlFor="add-user-firstname">First Name</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="add-user-surname"
                                                                placeholder="Enter surname"
                                                                name="userSurname"
                                                                aria-label="John Doe" />
                                                            <label htmlFor="add-user-surname">Surname</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="add-user-midname"
                                                                placeholder="Middle name"
                                                                name="userMidname"
                                                                aria-label="John Doe" />
                                                            <label htmlFor="add-user-midname">Middle Name</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input type="text" className="form-control" placeholder="YYYY-MM-DD" id="flatpickr-date" />
                                                            <label htmlFor="flatpickr-date">Date of Birth</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <select id="user-role" className="form-select">
                                                                <option value="male">Male</option>
                                                                <option value="female">Female</option>
                                                            </select>
                                                            <label htmlFor="user-role">Gender</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                id="add-user-email"
                                                                className="form-control"
                                                                placeholder="john.doe@example.com"
                                                                aria-label="john.doe@example.com"
                                                                name="userEmail" />
                                                            <label htmlFor="add-user-email">Email Address</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                id="add-user-contact"
                                                                className="form-control phone-mask"
                                                                placeholder="+1 (609) 988-44-11"
                                                                aria-label="john.doe@example.com"
                                                                name="userContact" />
                                                            <label htmlFor="add-user-contact">Phone Number</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="add-user-staffid"
                                                                placeholder="Staff ID number"
                                                                name="userStaffid"
                                                                aria-label="Staff ID number" />
                                                            <label htmlFor="add-user-staffid">Staff ID</label>
                                                        </div>
                                                        <div className="form-floating form-floating-outline mb-5">
                                                            <input type="text" id="bs-datepicker-basic" placeholder="MM/DD/YYYY" className="form-control" />
                                                            <label htmlFor="bs-datepicker-basic">Employment Date</label>
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Subsidiary</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Location/Station</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Department</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Unit/Team</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Designation</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <div className="mb-5">
                                                            <label htmlFor="TypeaheadBasic" className="form-label">Grade Level</label>
                                                            <input
                                                                id="TypeaheadBasic"
                                                                className="form-control typeahead"
                                                                type="text"
                                                                autoComplete="off"
                                                                placeholder="Enter states from USA" />
                                                        </div>
                                                        <button type="submit" className="btn btn-primary me-sm-3 me-1 data-submit">Submit</button>
                                                        <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="offcanvas">Cancel</button>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasSupervisor" aria-labelledby="offcanvasSupervisorLabel">
                                                <div className="offcanvas-header">
                                                    <h5 id="offcanvasSupervisorLabel" className="offcanvas-title">Add Staff to Supervisor</h5>
                                                    <button
                                                        type="button"
                                                        className="btn-close text-reset"
                                                        data-bs-dismiss="offcanvas"
                                                        aria-label="Close"></button>
                                                </div>
                                                <div className="offcanvas-body my-auto mx-0 flex-grow-1">
                                                    <div className="row mb-4">
                                                        <div className="col-md-12">
                                                            <div className="form-floating form-floating-outline">
                                                                <input
                                                                    id="TagifyUserList"
                                                                    name="TagifyUserList"
                                                                    className="form-control h-auto"
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
                    </div>
                </div>
                {/* <!--/ Header --> */}

                {/* <!-- Navbar pills --> */}
                <div className="row">
                    <div className="col-md-12">
                        <div className="nav-align-top">
                            <ul className="nav nav-pills flex-column flex-sm-row mb-6 row-gap-2">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/staff-detail"><i className="ri-menu-search-line me-2"></i>Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/staff-task"><i className="ri-list-check-3 me-2"></i>Tasks</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/staff-competency"><i className="ri-lightbulb-flash-line me-2"></i>Competencies</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!--/ Navbar pills --> */}

                {/* <!-- User Profile Content --> */}
                <div className="row">
                    {/* <!-- Popular Instructors --> */}
                    <div className="col-xl-4 col-lg-5 col-md-5">
                        <div className="card mb-6">
                            <div className="card-body">
                                <div className="plan-statistics mb-4 border-bottom pb-4">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-1">KPI Progress</h6>
                                        <h6 className="mb-1">74%</h6>
                                    </div>
                                    <div className="progress bg-label-primary mb-1 rounded">
                                        <div className="progress-bar progress-bar-animated progress-bar-striped bg-primary rounded" style={{ width: "74%" }} role="progressbar"
                                            aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                    </div>
                                    {/* <!--<small>Your plan requires update</small> --> */}
                                </div>
                                <div className="d-flex gap-0">
                                    <div className="d-flex align-items-center me-5 gap-2">
                                        <div className="avatar">
                                            <div className="avatar-initial bg-label-primary rounded-3">
                                                <i className="ri-check-line ri-24px"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">10,543</h5>
                                            <small>Tasks Done</small>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="avatar">
                                            <div className="avatar-initial bg-label-primary rounded-3">
                                                <i className="ri-briefcase-line ri-24px"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <h5 className="mb-0">78%</h5>
                                            <small>Last Appraisal</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header d-flex align-items-center justify-content-between border-bottom">
                                <div className="card-title mb-0">
                                    <h5 className="m-0 me-2"><i className="ri-folder-open-line ri-24px text-body me-4"></i>Staff Details</h5>
                                </div>
                            </div>
                            <div className="card-body pt-0">
                                <div className="info-container">
                                    <small className="card-text text-uppercase text-muted small">Employment</small>
                                    <ul className="list-unstyled my-3 py-1">
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-calendar-schedule-line ri-24px"></i><span className="fw-medium mx-2">Employment Date:</span>
                                            <span>August 10, 2021</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-account-circle-line ri-24px"></i><span className="fw-medium mx-2">Manager:</span>
                                            <span>Muhmmed Bala</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-star-smile-line ri-24px"></i><span className="fw-medium mx-2">Status:</span>
                                            <span className="badge bg-label-success rounded-pill">Active</span>
                                        </li>
                                    </ul>
                                    <small className="card-text text-uppercase text-muted small">Personal</small>
                                    <ul className="list-unstyled my-3 py-1">
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-calendar-event-line ri-24px"></i><span className="fw-medium mx-2">Date of Birth:</span>
                                            <span>March 20, 1980</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-genderless-line ri-24px"></i><span className="fw-medium mx-2">Gender:</span>
                                            <span>Male</span>
                                        </li>
                                    </ul>
                                    <small className="card-text text-uppercase text-muted small">Contacts</small>
                                    <ul className="list-unstyled my-3 py-1">
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-mail-open-line ri-24px"></i><span className="fw-medium mx-2">Email:</span>
                                            <span>john.doe@example.com</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-4">
                                            <i className="ri-phone-line ri-24px"></i><span className="fw-medium mx-2">Phone:</span>
                                            <span>(123) 456-7890</span>
                                        </li>
                                        <li className="d-flex align-items-center mb-2">
                                            <i className="ri-map-pin-2-line ri-24px"></i><span className="fw-medium mx-2">Location:</span>
                                            <span>Lagos, Nigeria</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--/ Popular Instructors --> */}

                    {/* <!-- Top Courses --> */}
                    <div className="col-xl-8 col-lg-7 col-md-7">
                        <h4 className="card-action-title mb-0">
                            <i className="ri-focus-2-line ri-24px text-body me-4"></i>KPI Overview</h4>
                        <div className="row mb-4">
                            <div className="col-12">
                                <div className="card card-action mb-3 bordered">
                                    <div className="card-header header-elements border-bottom">
                                        <h6 className="card-action-title mb-0">Finance</h6>
                                        <div className="card-header-elements ms-auto me-3">
                                            <div className="me-1">
                                                <div className="progress bg-label-success" style={{ width: "100px" }}>
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                        role="progressbar" style={{ width: "100%" }}
                                                        aria-valuenow={100}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <span className="me-4">100%</span>
                                            <span className="badge bg-label-success rounded-pill">Completed</span>
                                        </div>
                                        <div className="card-action-element">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a href="javascript:void(0);" className="card-collapsible"
                                                    ><i className="tf-icons ri-arrow-up-s-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse show">
                                        <div className="card-body pt-4">
                                            <div className="list-group list-group-flush">
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-success me-1"></span>
                                                                        <small>Complete</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-success" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>2500</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-warning me-1"></span>
                                                                        <small>Behind</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-warning" style={{ width: "100px" }}>
                                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>10,900</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-primary me-1"></span>
                                                                        <small>On Track</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-primary" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>75%</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-danger me-1"></span>
                                                                        <small>Overdue</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-danger" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                                        role="progressbar"
                                                                        style={{ width: "30%" }}
                                                                        aria-valuenow={30}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-action mb-3 bordered">
                                    <div className="card-header header-elements border-bottom">
                                        <h6 className="card-action-title mb-0">Internal Processes</h6>
                                        <div className="card-header-elements ms-auto me-3">
                                            <div className="me-1">
                                                <div className="progress bg-label-danger" style={{ width: "100px" }}>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                        role="progressbar"
                                                        style={{ width: "25%" }}
                                                        aria-valuenow={25}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <span className="me-4">25%</span>
                                            <span className="badge bg-label-danger rounded-pill">Overdue</span>
                                        </div>
                                        <div className="card-action-element">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a href="javascript:void(0);" className="card-collapsible"
                                                    ><i className="tf-icons ri-arrow-up-s-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse hide">
                                        <div className="card-body pt-4">
                                            <div className="list-group list-group-flush">
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-success me-1"></span>
                                                                        <small>Complete</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-success" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>2500</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-warning me-1"></span>
                                                                        <small>Behind</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-warning" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>10,900</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-primary me-1"></span>
                                                                        <small>On Track</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-primary" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>75%</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-danger me-1"></span>
                                                                        <small>Overdue</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-danger" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                                        role="progressbar"
                                                                        style={{ width: "30%" }}
                                                                        aria-valuenow={30}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-action mb-3 bordered">
                                    <div className="card-header header-elements border-bottom">
                                        <h6 className="card-action-title mb-0">Customer Services</h6>
                                        <div className="card-header-elements ms-auto me-3">
                                            <div className="me-1">
                                                <div className="progress bg-label-primary" style={{ width: "100px" }}>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                        role="progressbar"
                                                        style={{ width: "64%" }}
                                                        aria-valuenow={64}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <span className="me-4">64%</span>
                                            <span className="badge bg-label-primary rounded-pill">On Track</span>
                                        </div>
                                        <div className="card-action-element">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a href="javascript:void(0);" className="card-collapsible"
                                                    ><i className="tf-icons ri-arrow-up-s-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse hide">
                                        <div className="card-body pt-4">
                                            <div className="list-group list-group-flush">
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-success me-1"></span>
                                                                        <small>Complete</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-success" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>2500</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-warning me-1"></span>
                                                                        <small>Behind</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-warning" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>10,900</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-primary me-1"></span>
                                                                        <small>On Track</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-primary" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>75%</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-danger me-1"></span>
                                                                        <small>Overdue</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-danger" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                                        role="progressbar"
                                                                        style={{ width: "30%" }}
                                                                        aria-valuenow={30}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-action mb-3 bordered">
                                    <div className="card-header header-elements border-bottom">
                                        <h6 className="card-action-title mb-0">People Learning & Growth</h6>
                                        <div className="card-header-elements ms-auto me-3">
                                            <div className="me-1">
                                                <div className="progress bg-label-warning" style={{ width: "100px" }}>
                                                    <div
                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                        role="progressbar"
                                                        style={{ width: "53%" }}
                                                        aria-valuenow={53}
                                                        aria-valuemin={0}
                                                        aria-valuemax={100}></div>
                                                </div>
                                            </div>
                                            <span className="me-4">53%</span>
                                            <span className="badge bg-label-primary rounded-pill">Behind</span>
                                        </div>
                                        <div className="card-action-element">
                                            <ul className="list-inline mb-0">
                                                <li className="list-inline-item">
                                                    <a href="javascript:void(0);" className="card-collapsible"
                                                    ><i className="tf-icons ri-arrow-up-s-line"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="collapse hide">
                                        <div className="card-body pt-4">
                                            <div className="list-group list-group-flush">
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Danish sesame snaps halvah</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>₦200,000,000</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-success me-1"></span>
                                                                        <small>Complete</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-success" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-success"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Cake halvah biscuit cheesecake</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>2500</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-warning me-1"></span>
                                                                        <small>Behind</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-warning" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Tart cheesecake jujubes caramels</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>10,900</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-primary me-1"></span>
                                                                        <small>On Track</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-primary" style={{ width: "100px" }}>
                                                                    <div
                                                                        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
                                                                        role="progressbar"
                                                                        style={{ width: "75%" }}
                                                                        aria-valuenow={75}
                                                                        aria-valuemin={0}
                                                                        aria-valuemax={100}></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="list-group-item list-group-item-action d-flex align-items-center cursor-pointer">
                                                    <div className="w-100">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="user-info">
                                                                <h6 className="mb-1 fw-normal">Icing sweet gummies</h6>
                                                                <div className="d-flex align-items-center">
                                                                    <small className="me-2"><strong>Target: </strong>75%</small>
                                                                    <div className="user-status d-flex align-items-center">
                                                                        <span className="badge badge-dot bg-danger me-1"></span>
                                                                        <small>Overdue</small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="add-btn">
                                                                <div className="progress bg-label-danger" style={{ width: "100px" }}>
                                                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
                                                                        role="progressbar" style={{ width: "30%" }} aria-valuenow={30} aria-valuemin={0}
                                                                        aria-valuemax={100}>
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
                            </div>
                        </div>

                    </div>
                    {/* <!--/ Top Courses --> */}
                </div>
                {/* <!--/ User Profile Content --> */}
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
        </div >
    )
}

export default StaffDetailContent