import React from 'react';
import avatar2 from "../assets/img/avatars/2.png";

const DashboardContent = () => {
  return (
    <div className="content-wrapper">
      {/* <!-- Content --> */}

      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row g-6">
          {/* <!-- Card Border Shadow --> */}
          <div className="col-sm-6 col-lg-3">
            <div className="card card-border-shadow-success h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar me-4">
                    <span className="avatar-initial rounded-3 bg-label-success">
                      <i className="ri-group-line ri-24px"></i>
                    </span>
                  </div>
                  <h4 className="mb-0">3042</h4>
                </div>
                <h6 className="mb-0 fw-normal">Total Employees</h6>
                <p className="mb-0">
                  <span className="me-1 fw-medium">+18.2%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-border-shadow-warning h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar me-4">
                    <span className="avatar-initial rounded-3 bg-label-warning">
                      <i className="ri-bubble-chart-line ri-24px"></i>
                    </span>
                  </div>
                  <h4 className="mb-0">2567</h4>
                </div>
                <h6 className="mb-0 fw-normal">Total KPI Achieved</h6>
                <p className="mb-0">
                  <span className="me-1 fw-medium">-8.7%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-border-shadow-danger h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar me-4">
                    <span className="avatar-initial rounded-3 bg-label-danger">
                      <i className="ri-bar-chart-grouped-line ri-24px"></i>
                    </span>
                  </div>
                  <h4 className="mb-0">89.4%</h4>
                </div>
                <h6 className="mb-0 fw-normal">Last Appraisal</h6>
                <p className="mb-0">
                  <span className="me-1 fw-medium">+4.3%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="card card-border-shadow-info h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar me-4">
                    <span className="avatar-initial rounded-3 bg-label-info">
                      <i className="ri-trophy-line ri-24px"></i>
                    </span>
                  </div>
                  <h4 className="mb-0">76%</h4>
                </div>
                <h6 className="mb-0 fw-normal">Overall Performance</h6>
                <p className="mb-0">
                  <span className="me-1 fw-medium">-2.5%</span>
                  <small className="text-muted">Outstanding</small>
                </p>
              </div>
            </div>
          </div>
          {/* <!--/ Card Border Shadow --> */}

          {/* <!-- Appraisal statistics--> */}
          <div className="col-lg-8 col-xxl-8">
            <div className="card border shadow-none h-100">
              <div className="card-header d-flex align-items-center justify-content-between">
                <div className="card-title mb-0">
                  <h5 className="m-0 me-2 mb-1">Appraisal Overview</h5>
                  <p className="card-subtitle mb-0">
                    Overview of Quarterly Appraisal Activities
                  </p>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn-outline-primary">
                    January
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary dropdown-toggle dropdown-toggle-split"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-reference="parent">
                    <span className="visually-hidden">Toggle Dropdown</span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        January
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        February
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        March
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        April
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        May
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        June
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        July
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        August
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        September
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        October
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        November
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        December
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div id="appraisalChart"></div>
              </div>
            </div>
          </div>
          {/* <!--/ Appraisal statistics --> */}

          {/* <!-- Recent Feedbacks --> */}
          <div className="col-lg-4 col-xxl-4">
            <div className="card h-100 border shadow-none">
              <div className="card-header d-flex align-items-center justify-content-between">
                <div>
                  <h5 className="card-title mb-0">Appraisal Status</h5>
                  <span className="text-muted">
                    Spending on various categories
                  </span>
                </div>
                <div className="dropdown d-none d-sm-flex">
                  <button
                    type="button"
                    className="btn dropdown-toggle px-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <i className="ri-calendar-2-line"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Today
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Yesterday
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Last 7 Days
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Last 30 Days
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Current Month
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:void(0);"
                        className="dropdown-item d-flex align-items-center">
                        Last Month
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body">
                <div id="donutChart"></div>
              </div>
            </div>
          </div>
          {/* <!--/ Recent Feedbacks --> */}

          {/* <!-- Recent Complaints --> */}
          <div className="col-12">
            <div className="card shadow-none border">
              <div className="card-header border-bottom">
                <div className="row">
                  <div className="col-md-7">
                    <div className="d-flex">
                      <h5 className="mb-0">Recent Complaints</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive text-nowrap">
                <table className="table border-bottom">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Staff</th>
                      <th>Subsidiary</th>
                      <th>Department</th>
                      <th>Priority</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody className="table-border-bottom-0">
                    <tr>
                      <td className="text-wrap">
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td className='avatarDisplay'>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <img
                                src={avatar2}
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-column">
                          <a
                            href="app-user-view-account.html"
                            className="text-truncate text-heading">
                            <span className="fw-medium">Zsazsa McCleverty</span>
                          </a>
                        </div>
                      </td>
                      <td>
                        <span>SKY Capital</span>
                      </td>
                      <td>
                        <span>Procurement</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-danger"></i>
                        <span className="align-middle ms-2">High</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-warning me-1">
                          Pending
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                VK
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="app-user-view-account.html"
                              className="text-truncate text-heading">
                              <span className="fw-medium">
                                Vladamir Koschek
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>SKY Capital</span>
                      </td>
                      <td>
                        <span>Administration</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-warning"></i>
                        <span className="align-middle ms-2">Medium</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-success me-1">
                          Complete
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                VK
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="app-user-view-account.html"
                              className="text-truncate text-heading">
                              <span className="fw-medium">
                                Vladamir Koschek
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>Head Office</span>
                      </td>
                      <td>
                        <span>Customer Service</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-danger"></i>
                        <span className="align-middle ms-2">High</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-danger me-1">
                          Overdue
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                VK
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="app-user-view-account.html"
                              className="text-truncate text-heading">
                              <span className="fw-medium">
                                Vladamir Koschek
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>PCHS</span>
                      </td>
                      <td>
                        <span>Finance</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-warning"></i>
                        <span className="align-middle ms-2">Medium</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-secondary me-1">
                          In Progress
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                VK
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="app-user-view-account.html"
                              className="text-truncate text-heading">
                              <span className="fw-medium">
                                Vladamir Koschek
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>SAHCO Plc</span>
                      </td>
                      <td>
                        <span>Operations</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-primary"></i>
                        <span className="align-middle ms-2">Low</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-success me-1">
                          Complete
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="fw-medium">
                          Conduct interview sessions
                        </span>
                      </td>
                      <td>
                        <div className="d-flex justify-content-start align-items-center user-name">
                          <div className="avatar-wrapper">
                            <div className="avatar avatar-sm me-3">
                              <span className="avatar-initial rounded-circle bg-label-warning">
                                VK
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <a
                              href="app-user-view-account.html"
                              className="text-truncate text-heading">
                              <span className="fw-medium">
                                Vladamir Koschek
                              </span>
                            </a>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span>SKY Capital</span>
                      </td>
                      <td>
                        <span>Information Technology</span>
                      </td>
                      <td>
                        <i className="badge badge-dot bg-primary"></i>
                        <span className="align-middle ms-2">Low</span>
                      </td>
                      <td>
                        <span className="badge rounded-pill bg-label-secondary me-1">
                          In Progress
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <!--/ Recent Complaints --> */}
        </div>
      </div>
      {/* <!-- / Content --> */}

      <div className="content-backdrop fade"></div>
    </div>
  );
}

export default DashboardContent