import React from 'react'

const AppraisalActivityDetailContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row g-6">
                {/* <!-- Gamification Card --> */}
                <div className="col-md-12 col-xxl-8">
                    <div className="card">
                        <div className="card-body row pb-5">
                        <div className="col-12 col-md-9 card-separator">
                            <h5 className="mb-2"><span className="h4 fw-semibold">Q1 2024 Performance Appraisal </span></h5>
                            <div className="col-12 col-lg-12 border-bottom mb-6">
                              <ul
                              className="list-inline mb-4 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-4">
                              <li className="list-inline-item">
                                <i className="ri-calendar-2-line me-2 ri-24px"></i>Year: <span className="fw-medium">2024</span>
                              </li>
                              <li className="list-inline-item">
                                <i className="ri-calendar-schedule-line me-2 ri-24px"></i> Period: <span className="fw-medium">January 2024 - March 2024</span>
                              </li>
                              <li className="list-inline-item">
                                <i className="ri-timer-line me-2 ri-24px"></i> Deadline: <span className="fw-medium">April 20, 2024</span>
                              </li>
                            </ul>
                            </div>
                            <div className="d-flex justify-content-between flex-wrap gap-4 me-12">
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="avatar me-4">
                                  <div className="avatar-initial bg-label-primary rounded-3">
                                    <i className="ri-list-check-3 ri-24px"> </i>
                                  </div>
                                </div>
                                <div className="card-info">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0 me-2">228,458</h5>
                                    {/* <!-- <i className="ri-arrow-down-s-line text-danger ri-20px"></i>
                                    <small className="text-danger">8.10%</small> --> */}
                                  </div>
                                  <p className="mb-0">Total Employees</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="avatar me-4">
                                  <div className="avatar-initial bg-label-warning rounded-3">
                                    <i className="ri-task-line ri-24px"></i>
                                  </div>
                                </div>
                                <div className="card-info">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0 me-2">92.5%</h5>
                                    {/* <!-- <i className="ri-arrow-up-s-line text-success ri-20px"></i>
                                    <small className="text-success">25.8%</small> --> */}
                                  </div>
                                  <p className="mb-0">Overall Rating</p>
                                </div>
                              </div>
                              <div className="d-flex align-items-center flex-wrap">
                                <div className="avatar me-4">
                                  <div className="avatar-initial bg-label-info rounded-3">
                                    <i className="ri-bar-chart-2-line ri-24px"></i>
                                  </div>
                                </div>
                                <div className="card-info">
                                  <div className="d-flex align-items-center">
                                    <h5 className="mb-0 me-2">89.7%</h5>
                                    {/* <!-- <i className="ri-arrow-down-s-line text-danger ri-20px"></i>
                                    <small className="text-danger">12.1%</small> --> */}
                                  </div>
                                  <p className="mb-0">Last Appraisal Rating</p>
                                </div>
                              </div>        
                            </div>
                        </div>
                        <div className="col-12 col-md-3 ps-md-3 ps-lg-6 align-items-center">
                            <div>
                                <div>
                                <h5 className="mb-1">Appraisal Progress</h5>
                                </div>
                                {/* <!-- <div className="time-spending-chart">
                                <span className="badge bg-label-success rounded-pill">+18.4%</span>
                                </div> --> */}
                            </div>
                            {/* <!-- <div id="leadsReportChart"></div> --> */}
                            <div id="overviewChart" className=""></div>
                        </div>
                        </div>
                    </div>
                </div>
                {/* <!--/ Gamification Card --> */}

                {/* <!-- Appraisal Activity Status --> */}
                <div className="col-12 col-xxl-8">
                  <div className="card h-100">
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Appraisal Activity Status</h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                          type="button" id="topic" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="ri-more-2-line ri-20px"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="topic">
                          <a className="dropdown-item" href="javascript:void(0);">Highest Views</a>
                          <a className="dropdown-item" href="javascript:void(0);">See All</a>
                        </div>
                      </div>
                    </div>
                    <div className="card-body row g-3">
                      <div className="col-md-4">
                        <div id="donutChart"></div>
                      </div>
                      <div className="col-md-8 d-flex justify-content-around align-items-center">
                         <div id="monthlyBudgetChart"></div>
                        {/* <!-- <div>
                          <div className="d-flex align-items-baseline">
                            <span className="text-danger me-2"><i className="ri-circle-fill ri-12px"></i></span>
                            <div>
                              <p className="mb-0">Not Started</p>
                              <h5 className="mb-0">200</h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline my-10">
                            <span className="text-warning me-2"><i className="ri-circle-fill ri-12px"></i></span>
                            <div>
                              <p className="mb-0">No Manager Appraisal</p>
                              <h5 className="mb-0">480</h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline">
                            <span className="text-info me-2"><i className="ri-circle-fill ri-12px"></i></span>
                            <div>
                              <p className="mb-0">No Manager Comment</p>
                              <h5 className="mb-0">400</h5>
                            </div>
                          </div>
                        </div> --> */}

                        {/* <!-- <div>
                          <div className="d-flex align-items-baseline">
                            <span className="text-primary me-2"><i className="ri-circle-fill ri-12px"></i></span>
                            <div>
                              <p className="mb-0">No Staff Comment</p>
                              <h5 className="mb-0">700</h5>
                            </div>
                          </div>
                          <div className="d-flex align-items-baseline my-10">
                            <span className="text-success me-2"><i className="ri-circle-fill ri-12px"></i></span>
                            <div>
                              <p className="mb-0">Completed</p>
                              <h5 className="mb-0">280</h5>
                            </div>
                          </div>
                        </div> --> */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!--/ Appraisal Activity Status --> */}

                {/* <!-- Subsidiary Breakdown --> */}
                <div className="col-md-4 col-xxl-4">
                  <div className="card overflow-hidden" style={{height: "500px"}}>
                    <div className="card-header d-flex align-items-center justify-content-between">
                      <h5 className="card-title m-0 me-2">Subsidiary Breakdown</h5>
                      <div className="dropdown">
                        <button
                          className="btn btn-text-secondary rounded-pill text-muted border-0 p-1"
                          type="button"
                          id="projectStatus"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          <i className="ri-more-2-line ri-20px"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="projectStatus">
                          <a className="dropdown-item" href="javascript:void(0);">Last 28 Days</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Month</a>
                          <a className="dropdown-item" href="javascript:void(0);">Last Year</a>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between p-4 border-bottom">
                      <p className="mb-0 fs-xsmall">SUBSIDIARY</p>
                      <p className="mb-0 fs-xsmall">RATING</p>
                    </div>
                    <div className="card-body" id="vertical-example">
                      <ul className="p-0 m-0">
                        <li className="d-flex align-items-center mb-3">
                          <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                            <div className="me-2">
                              <h6 className="mb-1">Head Office</h6>
                              <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                            </div>
                            <div className="chart-progress me-4" data-color="primary" data-series="72"data-progress_variant="true"></div>
                          </div>
                        </li>
                        <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                          <li className="d-flex align-items-center mb-3">
                            <div className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                              <div className="me-2">
                                <h6 className="mb-1">Head Office</h6>
                                <small>RATING: <span className="fw-medium">OUTSTANDING</span></small>
                              </div>
                              <div
                              className="chart-progress me-4"
                              data-color="primary"
                              data-series="72"
                              data-progress_variant="true"></div>
                            </div>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
                {/* <!--/ Subsidiary Breakdown --> */}

                {/* <!-- Appraisal Statistics --> */}
                <div className="col-xxl-2 col-sm-8">
                  <div className="card h-100">
                    <div className="card-header header-elements">
                      <h5 className="card-title mb-0">Appraisal Analysis </h5>
                      <div className="card-action-element ms-auto py-0">
                        <div className="dropdown">
                          <button type="button" className="btn dropdown-toggle px-0" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="ri-calendar-2-line"></i>
                          </button>
                          <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Today</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Yesterday</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Last 7 Days</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Last 30 Days</a>
                            </li>
                            <li>
                              <hr className="dropdown-divider" />
                            </li>
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Current Month</a>
                            </li>
                            <li>
                              <a href="javascript:void(0);" className="dropdown-item d-flex align-items-center">Last Month</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <canvas id="barChart" className="chartjs" data-height="400"></canvas>
                    </div>
                  </div>
                </div>
                {/* <!--/ Appraisal Statistics --> */}

                {/* <!-- Appraisal Score Sheet  --> */}
                <div className="col-12 col-xxl-8">
                  <div className="card">
                      <div className="card-header">
                        <h4 className="mb-1">Appraisal Score Sheet</h4>
                        <p className="mb-6">
                          Find the overall appraisal score of each of employee.
                        </p>
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
                                <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ri-filter-line ri-16px me-2"></i>
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
                                  <label><input type="search" className="form-control form-control-sm" placeholder="Search User"/></label>
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
                                    <th>Subsidiary</th>
                                    <th>Department</th>
                                    <th>Manager</th>
                                    <th>Supervisor</th>
                                    <th className="text-wrap">Key Result Area</th>
                                    <th className="text-wrap">Core Values</th>
                                    <th className="text-wrap">Overall Score</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody className="table-border-bottom-0">
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
                                    <td>SAHCO Plc</td>
                                    <td>Human Resources</td>
                                    <td>Bukola Williams</td>
                                    <td>Jonathan Edwards</td>
                                    <td>63</td>
                                    <td>21</td>
                                    <td>84</td>
                                    <td><span className="badge bg-label-success me-1">Completed</span></td>
                                    <td>
                                      <div className="dropdown">
                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="ri-more-2-line"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-refresh-line me-1"></i> Reset Appraisal</a>
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
                                    <td>SAHCO Plc</td>
                                    <td>Human Resources</td>
                                    <td>Bukola Williams</td>
                                    <td>Jonathan Edwards</td>
                                    <td>63</td>
                                    <td>21</td>
                                    <td>84</td>
                                    <td><span className="badge bg-label-primary me-1">No Staff Comment</span></td>
                                    <td>
                                      <div className="dropdown">
                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="ri-more-2-line"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-refresh-line me-1"></i> Reset Appraisal</a>
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
                                    <td>SAHCO Plc</td>
                                    <td>Human Resources</td>
                                    <td>Bukola Williams</td>
                                    <td>Jonathan Edwards</td>
                                    <td>63</td>
                                    <td>21</td>
                                    <td>84</td>
                                    <td><span className="badge bg-label-info me-1">No Manager Comment</span></td>
                                    <td>
                                      <div className="dropdown">
                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="ri-more-2-line"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-refresh-line me-1"></i> Reset Appraisal</a>
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
                                    <td>SAHCO Plc</td>
                                    <td>Human Resources</td>
                                    <td>Bukola Williams</td>
                                    <td>Jonathan Edwards</td>
                                    <td>63</td>
                                    <td>21</td>
                                    <td>84</td>
                                    <td><span className="badge bg-label-warning me-1">No Manager Appraisal</span></td>
                                    <td>
                                      <div className="dropdown">
                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="ri-more-2-line"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-refresh-line me-1"></i> Reset Appraisal</a>
                                        </div>
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="dt-checkboxes-cell"><input type="checkbox" className="dt-checkboxes form-check-input"/></td>
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
                                    <td>SAHCO Plc</td>
                                    <td>Human Resources</td>
                                    <td>Bukola Williams</td>
                                    <td>Jonathan Edwards</td>
                                    <td>63</td>
                                    <td>21</td>
                                    <td>84</td>
                                    <td><span className="badge bg-label-danger me-1">Not Started</span></td>
                                    <td>
                                      <div className="dropdown">
                                        <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                        <i className="ri-more-2-line"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-eye-line me-1"></i> View Details</a>
                                          <a className="dropdown-item" href="staff-appraisal-detail.html"><i className="ri-refresh-line me-1"></i> Reset Appraisal</a>
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
                {/* <!--/ Appraisal Score Sheet  --> */}

              </div>
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default AppraisalActivityDetailContent