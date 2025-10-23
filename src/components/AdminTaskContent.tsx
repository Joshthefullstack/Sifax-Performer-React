import avatar1 from "../assets/img/avatars/1.png";
import avatar2 from "../assets/img/avatars/2.png";
import avatar5 from "../assets/img/avatars/5.png";
import avatar6 from "../assets/img/avatars/6.png";
import avatar9 from "../assets/img/avatars/9.png";
import pdf from "../assets//img/icons/misc/pdf.png"
import "../assets/vendor/css/pages/app-chat.css"


const AdminTaskContent = () => {
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
                                        <p className="text-heading mb-1">All Tasks</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-2">15</h4>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-primary rounded-3">
                                            <div className="ri-todo-line ri-26px"></div>
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
                                        <p className="text-heading mb-1">Completed</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-1">267</h4>
                                            <p className="text-success mb-1">(+18%)</p>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-success rounded-3">
                                            <div className="ri-calendar-check-line ri-26px"></div>
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
                                        <p className="text-heading mb-1">Pending</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-1">19,860</h4>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-warning rounded-3">
                                            <div className="ri-calendar-schedule-line ri-26px"></div>
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
                                        <p className="text-heading mb-1">Overdue</p>
                                        <div className="d-flex align-items-center">
                                            <h4 className="mb-1 me-1">237</h4>
                                        </div>
                                    </div>
                                    <div className="avatar">
                                        <div className="avatar-initial bg-label-danger rounded-3">
                                            <div className="ri-error-warning-line ri-26px"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card">
                    <h5 className="card-header">Task List</h5>
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
                                        <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="ri-filter-line ri-16px me-2"></i>Filter
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end w-px-300">
                                            <form id="formAuthentication" method="post" className="p-6" onSubmit={() => { }}>
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <input type="date" className="form-control form-control-sm" name="dateFilter" id="" />
                                                    <label htmlFor="dateFilter">Set Date</label>
                                                </div>
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select className="form-select form-select-sm" id="subFilter">
                                                        <option value="">Head Office</option>
                                                        <option value="">Ports & Cargo</option>
                                                        <option value="">SAHCO</option>
                                                        <option value="">SIFAX ICT</option>
                                                    </select>
                                                    <label htmlFor="subsidiary">Select Subsidiary</label>
                                                </div>
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select className="form-select form-select-sm" id="deptFilter">
                                                        <option value="">Operations</option>
                                                        <option value="">Procurement</option>
                                                        <option value="">Human Resources</option>
                                                        <option value="">ICT</option>
                                                    </select>
                                                    <label htmlFor="department">Select Department</label>
                                                </div>
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <input type="text" className="form-control form-control-sm" name="staffFilter" id="" />
                                                    <label htmlFor="staffFilter">Select Staff</label>
                                                </div>
                                                <div className="form-floating form-floating-outline mb-5">
                                                    <select id="user-role" className="form-select form-select-sm">
                                                        <option value="">Completed</option>
                                                        <option value="">Pending</option>
                                                        <option value="">Overdue</option>
                                                        <option value="">In-Progress</option>
                                                    </select>
                                                    <label htmlFor="user-role">Task Status</label>
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
                                            <label><input type="search" className="form-control form-control-sm" placeholder="Search by task title" /></label>
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
                                    <th>Subsidiary</th>
                                    <th>Department</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Due Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody className="table-border-bottom-0">
                                <tr>
                                    <td><span>123</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
                                    <td>
                                        <div className="d-flex justify-content-start align-items-center user-name">
                                            <div className="avatar-wrapper"><div className="avatar avatar-sm me-3">
                                                <img src={avatar2} alt="Avatar" className="rounded-circle" />
                                            </div>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <a href="app-user-view-account.html" className="text-truncate text-heading">
                                                    <span className="fw-medium">Zsazsa McCleverty</span>
                                                </a>
                                            </div>
                                        </div>
                                    </td>
                                    <td><span>SKY Capital</span></td>
                                    <td><span>Procurement</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-danger"></i>
                                        <span className="align-middle ms-2">High</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                                    <td>August 10, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href=""
                                                    data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasBoth"
                                                    aria-controls="offcanvasBoth"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>SKY Capital</span></td>
                                    <td><span>Administration</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-warning"></i>
                                        <span className="align-middle ms-2">Medium</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-success me-1">Complete</span></td>
                                    <td>March 5, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>Head Office</span></td>
                                    <td><span>Customer Service</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-danger"></i>
                                        <span className="align-middle ms-2">High</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-danger me-1">Overdue</span></td>
                                    <td>March 5, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>PCHS</span></td>
                                    <td><span>Finance</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-warning"></i>
                                        <span className="align-middle ms-2">Medium</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-secondary me-1">In Progress</span></td>
                                    <td>March 5, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>SAHCO Plc</span></td>
                                    <td><span>Operations</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-primary"></i>
                                        <span className="align-middle ms-2">Low</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-success me-1">Complete</span></td>
                                    <td>March 25, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>SKY Capital</span></td>
                                    <td><span>Information Technology</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-primary"></i>
                                        <span className="align-middle ms-2">Low</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-secondary me-1">In Progress</span></td>
                                    <td>June 15, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Conduct interview sessions</span></td>
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
                                    <td><span>SKY Capital</span></td>
                                    <td><span>Human Resources</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-warning"></i>
                                        <span className="align-middle ms-2">Medium</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-primary me-1">Pending Approval</span></td>
                                    <td>March 20, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Approve New Immigration Bill</span></td>
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
                                    <td><span>SIFAX OffDock</span></td>
                                    <td><span>Procurement</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-danger"></i>
                                        <span className="align-middle ms-2">High</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-warning me-1">Pending</span></td>
                                    <td>July 20, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>124</span></td>
                                    <td><span className="fw-medium">Write out five new song lyrics</span></td>
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
                                    <td><span>SKY Capital</span></td>
                                    <td><span>Procurement</span></td>
                                    <td>
                                        <i className="badge badge-dot bg-primary"></i>
                                        <span className="align-middle ms-2">Low</span>
                                    </td>
                                    <td><span className="badge rounded-pill bg-label-danger me-1">Overdue</span></td>
                                    <td>March 5, 2025</td>
                                    <td>
                                        <div className="dropdown">
                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                <i className="ri-more-2-line"></i>
                                            </button>
                                            <div className="dropdown-menu">
                                                <a className="dropdown-item" href="javascript:void(0);"
                                                ><i className="ri-eye-line me-1"></i> View Details</a>
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


            <div
                className="offcanvas offcanvas-end offcanvas-b" style={{ width: "500px" }}
                tabIndex={-1}
                id="offcanvasBoth"
                aria-labelledby="offcanvasBothLabel">
                <div className="offcanvas-header border-bottom">
                    <h6 id="offcanvasBothLabel" className="offcanvas-title">This is the task title for the task to be done</h6>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div className="offcanvas-body mx-0 flex-grow-0">
                    <div className="card-body">
                        <div>
                            <dl className="row mt-2">
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-calendar-todo-line"></i>
                                        </div>
                                        <span className="">Created Date:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <span className="">March 26, 2025</span>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-calendar-schedule-line"></i>
                                        </div>
                                        <span className="">Due Date:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <span className="">August 10, 2025</span>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-scales-3-line"></i>
                                        </div>
                                        <span className="">Priority:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <i className="badge badge-dot bg-primary"></i>
                                    <span className="align-middle ms-2">Low</span>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-timer-flash-line"></i>
                                        </div>
                                        <span className="">Status:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <span className="badge rounded-pill bg-label-primary me-1">In Progress</span>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-group-line"></i>
                                        </div>
                                        <span className="">Created by:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-xs me-3">
                                                <img src={avatar2} alt="Avatar" className="rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="fw-medium">Joy Kolawole</span>
                                        </div>
                                    </div>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-group-line"></i>
                                        </div>
                                        <span className="">Assignee:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <div className="d-flex justify-content-start align-items-center">
                                        <div className="avatar-wrapper">
                                            <div className="avatar avatar-xs me-3">
                                                <img src={avatar2} alt="Avatar" className="rounded-circle" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <span className="fw-medium">Zsazsa McCleverty</span>
                                        </div>
                                    </div>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-dashboard-2-line"></i>
                                        </div>
                                        <span className="">KPI:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <span className="">Make 10 sales calls daily</span>
                                </dd>
                                <dt className="col-sm-4 col-xs-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-bar-chart-2-line"></i>
                                        </div>
                                        <span className="">Perspective:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-3">
                                    <span className="">Finance</span>
                                </dd>
                                <dt className="col-sm-4">
                                    <div className="d-flex align-items-center text-body">
                                        <div className="me-2">
                                            <i className="ri-article-line"></i>
                                        </div>
                                        <span className="">Description:</span>
                                    </div>
                                </dt>
                                <dd className="col-sm-8 mb-4">
                                    <p className="">
                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus. Duis mollis, est non commodo luctus.Duis mollis, est non commodo luctus.
                                    </p>
                                </dd>
                            </dl>
                        </div>
                    </div>

                    <div className="p-0">
                        <div className="nav-align-top">
                            <ul className="nav nav-tabs nav-fill" role="tablist">
                                <li className="nav-item">
                                    <button type="button" className="nav-link active" role="tab" data-bs-toggle="tab"
                                        data-bs-target="#navs-justified-subtask"
                                        aria-controls="navs-justified-subtask"
                                        aria-selected="true">
                                        <span className="d-none d-sm-block">Subtask</span
                                        ><i className="ri-todo-line ri-20px d-sm-none"></i>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" role="tab" data-bs-toggle="tab"
                                        data-bs-target="#navs-justified-comments"
                                        aria-controls="navs-justified-comments"
                                        aria-selected="false">
                                        <span className="d-none d-sm-block">Comments
                                            <span className="badge small rounded-pill badge-center h-px-20 w-px-20 bg-label-danger ms-2 pt-50">3</span>
                                        </span
                                        ><i className="ri-discuss-line ri-20px d-sm-none"></i>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-justified-activities"
                                        aria-controls="navs-justified-activities"
                                        aria-selected="false">
                                        <span className="d-none d-sm-block">Activity</span
                                        ><i className="ri-hourglass-line ri-20px d-sm-none"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pt-5">
                        <div className="tab-content p-0">
                            <div className="tab-pane fade show active" id="navs-justified-subtask" role="tabpanel">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="fw-medium">Task Progress</h6>
                                    <div className="justify-content-end align-items-center d-flex">
                                        <div className="chart-progress me-2" data-color="warning" data-series="75"></div>
                                        <span className="fw-medium"> <span className="text-warning">3</span>/4</span>
                                    </div>
                                </div>
                                <div className="card shadow-none bg-transparent border mb-3 p-3">
                                    <div className="card-body p-0">
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" checked disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck1"> This is the first subtask for this task </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none bg-transparent border mb-3 p-3">
                                    <div className="card-body p-0">
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck2" checked disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck2"> This is the second subtask for this task </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none bg-transparent border mb-3 p-3">
                                    <div className="card-body p-0">
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck3" checked disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck3"> This is the third subtask for this task </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow-none bg-transparent border mb-3 p-3">
                                    <div className="card-body p-0">
                                        <div className="form-check mt-2">
                                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck4" disabled />
                                            <label className="form-check-label" htmlFor="defaultCheck4"> This is the fourth subtask for this task </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="navs-justified-comments" role="tabpanel">
                                <div className="app-chat card overflow-hidden shadow-none">
                                    <div className="row">
                                        <div className="col app-chat-history overflow-hidden">
                                            <div className="chat-history-wrapper">
                                                <div className="chat-history-body">
                                                    <ul className="chat-history ps-0">
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src={avatar2} className="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="small mb-1">John Lettie 🎉</h6>
                                                                <small className="mb-1 d-block text-body">Won the monthly best seller gold badge</small>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <small className="text-muted">1h ago</small>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <span className="avatar-initial rounded-circle bg-label-danger">CF</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 small">Charles Franklin</h6>
                                                                <small className="mb-1 d-block text-body">Accepted your connection</small>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <small className="text-muted">12hr ago</small>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src={avatar2} className="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 small">Joy Kolwole</h6>
                                                                <small className="mb-1 d-block text-body">You have new message from Natalie</small>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <small className="text-muted">1h ago</small>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src={avatar9} className="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 small">Titilope Edet</h6>
                                                                <small className="mb-1 d-block text-body"
                                                                >Your ABC project application has been approved.</small>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <small className="text-muted">2 days ago</small>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src={avatar5} className="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 small">Peter Akindele</h6>
                                                                <small className="mb-1 d-block text-body">Peter sent you connection request</small>
                                                            </div>
                                                            <div className="flex-shrink-0 ">
                                                                <small className="text-muted">4 days ago</small>
                                                            </div>
                                                        </li>
                                                        <li className="chat-message list-unstyled border-bottom pb-4">
                                                            <div className="flex-shrink-0 me-3">
                                                                <div className="avatar">
                                                                    <img src={avatar6} className="rounded-circle" />
                                                                </div>
                                                            </div>
                                                            <div className="flex-grow-1">
                                                                <h6 className="mb-1 small">Janet Bamidele</h6>
                                                                <small className="mb-1 d-block text-body">Your have new message from Jane</small>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <small className="text-muted">5 days ago</small>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="chat-history-footer">
                                                <form className="form-send-message d-flex justify-content-between align-items-center">
                                                    <input
                                                        className="form-control message-input me-4 shadow-none"
                                                        placeholder="Type your message here..." />
                                                    <div className="message-actions d-flex align-items-center">

                                                        <label htmlFor="attach-doc" className="form-label mb-0">
                                                            <i
                                                                className="ri-attachment-2 ri-20px cursor-pointer btn btn-sm btn-text-secondary btn-icon rounded-pill me-2 ms-1 text-heading"></i>
                                                            <input type="file" id="attach-doc" hidden />
                                                        </label>
                                                        <button className="btn btn-primary d-flex send-msg-btn">
                                                            <span className="align-middle">Send</span>
                                                            <i className="ri-send-plane-line ri-16px ms-md-2 ms-0"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="navs-justified-activities" role="tabpanel">
                                <ul className="timeline mb-0 pb-5">
                                    <li className="timeline-item timeline-item-transparent">
                                        <span className="timeline-point timeline-point-primary"></span>
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-3">
                                                <h6 className="mb-0 small">A new document was added to this task</h6>
                                                <small className="text-muted small">12 min ago</small>
                                            </div>
                                            <p className="mb-2 text-body d-block small">Invoices have been paid to the company</p>
                                            <div className="d-flex align-items-center mb-1">
                                                <div className="badge bg-lighter rounded-3 mb-1_5">
                                                    <img src={pdf} alt="img" width="15" className="me-2" />
                                                    <span className="h6 mb-0 text-body small">invoices.pdf</span>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent">
                                        <span className="timeline-point timeline-point-success"></span>
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-3">
                                                <h6 className="mb-0 small">Task status was updated to pending</h6>
                                                <small className="text-muted small">45 min ago</small>
                                            </div>
                                            <p className="mb-2 text-body d-block small">Task status was updated from Pending Approval to Completed by:</p>
                                            <div className="d-flex justify-content-between flex-wrap gap-2 mb-1_5">
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="avatar avatar-sm me-2">
                                                        <img src={avatar1} alt="Avatar" className="rounded-circle avatar-sm" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0">Titilope Samuel</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="timeline-item timeline-item-transparent">
                                        <span className="timeline-point timeline-point-info"></span>
                                        <div className="timeline-event">
                                            <div className="timeline-header mb-3">
                                                <h6 className="mb-0 small">Someone was added to this task</h6>
                                                <small className="text-muted small">2 Day Ago</small>
                                            </div>
                                            <p className="mb-2 text-body d-block small">6 team members in a project</p>
                                            <ul className="list-group list-group-flush">
                                                <li
                                                    className="list-group-item d-flex justify-content-between align-items-center flex-wrap border-top-0 p-0">
                                                    <div className="d-flex flex-wrap align-items-center">
                                                        <ul className="list-unstyled users-list d-flex align-items-center avatar-group m-0 me-2">
                                                            <li
                                                                data-bs-toggle="tooltip"
                                                                data-popup="tooltip-custom"
                                                                data-bs-placement="top"
                                                                title="Vinnie Mostowy"
                                                                className="avatar pull-up">
                                                                <img className="rounded-circle" src={avatar1} alt="Avatar" />
                                                            </li>
                                                            <li
                                                                data-bs-toggle="tooltip"
                                                                data-popup="tooltip-custom"
                                                                data-bs-placement="top"
                                                                title="Allen Rieske"
                                                                className="avatar pull-up">
                                                                <img className="rounded-circle" src={avatar1} alt="Avatar" />
                                                            </li>
                                                            <li
                                                                data-bs-toggle="tooltip"
                                                                data-popup="tooltip-custom"
                                                                data-bs-placement="top"
                                                                title="Julee Rossignol"
                                                                className="avatar pull-up">
                                                                <img className="rounded-circle" src={avatar1} alt="Avatar" />
                                                            </li>
                                                            <li className="avatar">
                                                                <span
                                                                    className="avatar-initial rounded-circle pull-up text-heading"
                                                                    data-bs-toggle="tooltip"
                                                                    data-bs-placement="bottom"
                                                                    title="3 more"
                                                                >+3</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>

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

export default AdminTaskContent