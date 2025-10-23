import React from 'react'
import avatar2 from "../assets/img/avatars/2.png";
import avatar1 from "../assets/img/avatars/1.png";
import avatar5 from "../assets/img/avatars/5.png";

const ComplaintDetailContent = () => {
  return (
          <div className="content-wrapper">
            {/* <!-- Content --> */}

              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start mb-6 row-gap-4">
                  <div>
                    <div className="d-flex justify-content-start align-items-center">
                      <h4 className="mb-1 me-2">Admin officer's System Hardware Issues</h4>
                      <div><span className="badge rounded-pill bg-info">Open</span></div>
                    </div>
                    <nav className="mb-6" aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="javascript:void(0);">Home</a>
                        </li>
                        <li className="breadcrumb-item">
                          <a href="javascript:void(0);">Issue List</a>
                        </li>
                        <li className="breadcrumb-item active">Issue Detail</li>
                      </ol>
                    </nav>
                  </div>
                </div>
                  <hr/>

              <div className="row">
                {/* <!-- Issue Details --> */}
                <div className="col-xl-4 col-lg-4 col-md-4">
                    <div className="card shadow-none border">
                      <div className="card-header d-flex align-items-center justify-content-between border-bottom">
                        <div className="card-title mb-0">
                          <h5 className="m-0 me-2"><i className="ri-folder-open-line ri-24px text-body me-4"></i>Complaint Details</h5>
                        </div>
                      </div>
                      <div className="card-body pt-0">
                        <div className="info-container">
                          <ul className="list-unstyled my-3 py-1">
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-account-circle-line ri-24px"></i><span className="mx-2">Requestor:</span>
                              <span>Muhmmed Bala</span>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-account-circle-line ri-24px"></i><span className="mx-2">Assigned To:</span>
                              <span>Muhmmed Bala</span>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-calendar-schedule-line ri-24px"></i><span className="mx-2">Date Posted:</span>
                              <span>August 10, 2021</span>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-calendar-schedule-line ri-24px"></i><span className="mx-2">Last Updated:</span>
                              <span>20 Days Ago</span>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-star-smile-line ri-24px"></i><span className="mx-2">Priority:</span>
                              <div className="d-flex align-items-center lh-1 me-4 mb-4 mb-sm-0">
                                <span className="badge badge-dot bg-warning me-1"></span> Medium
                              </div>
                            </li>
                            <li className="d-flex align-items-center mb-6">
                              <i className="ri-star-smile-line ri-24px"></i><span className="mx-2">Status:</span>
                              <span className="badge bg-label-info rounded-pill">Open</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!--/ Issue Details --> */}
  
                  {/* <!-- Issue Conversations --> */}
                  <div className="col-xl-8 col-lg-8 col-md-8">
                        {/* <!-- Email View : Previous mails--> */}
                        <div className="card shadow-none border">
                          <div
                            className="card-header d-flex justify-content-between align-items-center flex-wrap border-bottom">
                            <div className="d-flex align-items-center mb-sm-0 mb-3">
                              <img src={avatar2} alt="user-avatar" className="flex-shrink-0 rounded-circle me-4"
                                height="38" width="38" />
                              <div className="flex-grow-1 ms-1">
                                <h6 className="m-0 fw-normal">Ross Geller</h6>
                                <small className="text-body">Author</small>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-4 text-muted">June 20th 2020, 08:30 AM</p>
                            </div>
                          </div>
                          <div className="card-body pt-5">
                            <p className="fw-medium">Greetings!</p>
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of
                              a page when looking at its layout.The point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters, as opposed to using 'Content here, content
                              here',making it look like readable English.
                            </p>
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but the majority have
                              suffered alteration in some form, by injected humour, or randomised words which don't look
                              even slightly believable.
                            </p>
                            <p className="mb-0">Sincerely yours,</p>
                            <p className="fw-medium mb-0">Envato Design Team</p>
                            <hr />
                            <p className="text-muted mb-2">Attachments</p>
                            <div className="cursor-pointer">
                              <i className="ri-file-text-line"></i>
                              <span className="align-middle ms-1">report.xlsx</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Email View : Last mail--> */}
                        <div className="card shadow-none border mt-4">
                          <div
                            className="card-header d-flex justify-content-between align-items-center flex-wrap border-bottom">
                            <div className="d-flex align-items-center mb-sm-0 mb-3">
                              <img src={avatar1} alt="user-avatar" className="flex-shrink-0 rounded-circle me-4"
                                height="38" width="38" />
                              <div className="flex-grow-1 ms-1">
                                <h6 className="m-0 fw-normal">Chandler Bing</h6>
                                <small className="text-body">Contributor</small>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-4 text-muted">June 20th 2020, 08:10 AM</p>
                            </div>
                          </div>
                          <div className="card-body pt-5">
                            <p className="fw-medium">Greetings!</p>
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of
                              a page when looking at its layout.The point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters, as opposed to using 'Content here, content
                              here',making it look like readable English.
                            </p>
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but the majority have
                              suffered alteration in some form, by injected humour, or randomised words which don't look
                              even slightly believable.
                            </p>
                            <p className="mb-0">Sincerely yours,</p>
                            <p className="fw-medium mb-0">Envato Design Team</p>
                            <hr />
                            <p className="text-muted mb-2">Attachments</p>
                            <div className="cursor-pointer">
                              <i className="ri-file-text-line"></i>
                              <span className="align-middle ms-1">report.xlsx</span>
                            </div>
                          </div>
                        </div>
                        <div className="card shadow-none border mt-4">
                          <div
                            className="card-header d-flex justify-content-between align-items-center flex-wrap border-bottom">
                            <div className="d-flex align-items-center mb-sm-0 mb-3">
                              <img
                                src={avatar5}
                                alt="user-avatar"
                                className="flex-shrink-0 rounded-circle me-4"
                                height="38"
                                width="38" />
                              <div className="flex-grow-1 ms-1">
                                <h6 className="m-0 fw-normal">John Doe</h6>
                                <small className="text-body">Reviewer</small>
                              </div>
                            </div>
                            <div className="d-flex align-items-center">
                              <p className="mb-0 me-4 text-muted">June 20th 2020, 08:10 AM</p>
                            </div>
                          </div>
                          <div className="card-body pt-5">
                            <p className="fw-medium">Greetings!</p>
                            <p>
                              It is a long established fact that a reader will be distracted by the readable content of
                              a page when looking at its layout.The point of using Lorem Ipsum is that it has a
                              more-or-less normal distribution of letters, as opposed to using 'Content here, content
                              here',making it look like readable English.
                            </p>
                            <p>
                              There are many variations of passages of Lorem Ipsum available, but the majority have
                              suffered alteration in some form, by injected humour, or randomised words which don't look
                              even slightly believable.
                            </p>
                            <p className="mb-0">Sincerely yours,</p>
                            <p className="fw-medium mb-0">Envato Design Team</p>
                            <hr />
                            <p className="text-muted mb-2">Attachments</p>
                            <div className="cursor-pointer">
                              <i className="ri-file-text-line"></i>
                              <span className="align-middle ms-1">report.xlsx</span>
                            </div>
                          </div>
                        </div>
                        {/* <!-- Email View : Reply mail--> */}
                        <div className="card shadow-none border mt-4 mb-4">
                          <h6 className="card-header border-0 fw-normal pb-4">Reply to Ross Geller</h6>
                          <div className="card-body pt-0 ps-3">
                            <div className="d-flex justify-content-start">
                              <div className="email-reply-toolbar border-0 w-100 ps-0 pb-4">
                                <span className="ql-formats me-0">
                                  <button className="ql-bold"></button>
                                  <button className="ql-italic"></button>
                                  <button className="ql-underline"></button>
                                  <button className="ql-list" value="ordered"></button>
                                  <button className="ql-list" value="bullet"></button>
                                  <button className="ql-link"></button>
                                  <button className="ql-image"></button>
                                </span>
                              </div>
                            </div>
                            <div className="email-reply-editor"></div>
                            <div className="d-flex justify-content-end align-items-center mt-4">
                              <div className="cursor-pointer btn btn-text-secondary text-secondary me-4">
                                <i className="ri-attachment-2 ri-16px me-2"></i>
                                <input className="form-control" type="file" id="formFile" />
                              </div>
                              <button className="btn btn-primary">
                                <span className="align-middle">Send</span>
                                <i className="ri-send-plane-line ri-16px ms-2"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                    {/* <!-- Email View --> */}
                      
                  </div>
                  {/* <!--/ Issue Conversations --> */}
                </div>

              {/* <!--/ Add New Issue Modal --> */}
              <div className="modal fade" id="newResolution" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-lg modal-simple modal-add-new-address">
                  <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-body p-0">
                      <div className="text-center mb-6">
                        <h4 className="address-title mb-2">New Resolution</h4>
                        <p className="address-subtitle">Fill this form to add a resolution to the knowledgebase</p>
                      </div>
                      <form id="newIssueForm" className="row g-5" onSubmit={() => {}}>
                        <div className="col-12">
                          <div className="form-floating form-floating-outline">
                            <input type="text" id="issueTitle" name="issueTitle" className="form-control"
                              placeholder="Add Issue title here" />
                            <label htmlFor="modalAddressAddress1">Resolution Title</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating form-floating-outline">
                            <select id="issueDept" name="issueDept" className="select2 form-select" data-allow-clear="true">
                              <option value="">Select</option>
                              <option value="Russia">Russian Federation</option>
                              <option value="South Africa">South Africa</option>
                              <option value="Thailand">Thailand</option>
                              <option value="Turkey">Turkey</option>
                              <option value="Ukraine">Ukraine</option>
                              <option value="United Arab Emirates">United Arab Emirates</option>
                              <option value="United Kingdom">United Kingdom</option>
                              <option value="United States">United States</option>
                            </select>
                            <label htmlFor="issueDept">Department</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6">
                          <div className="form-floating form-floating-outline">
                            <select id="issuePriority" name="issuePriority" className="select2 form-select" data-allow-clear="true">
                              <option value="">Select</option>
                              <option value="Russia">Critical</option>
                              <option value="South Africa">High</option>
                              <option value="Thailand">Medium</option>
                              <option value="Turkey">Low</option>
                              <option value="Ukraine">Ukraine</option>
                            </select>
                            <label htmlFor="issuePriority">Category</label>
                          </div>
                        </div>
                        <div className="col-12">
                          <h6 className="heading-6">Description</h6>
                          <div className="card-body">
                            <div id="snow-toolbar">
                                <span className="ql-formats">
                                <select className="ql-font"></select>
                                <select className="ql-size"></select>
                                </span>
                                <span className="ql-formats">
                                <button className="ql-bold"></button>
                                <button className="ql-italic"></button>
                                <button className="ql-underline"></button>
                                <button className="ql-strike"></button>
                                </span>
                                <span className="ql-formats">
                                <select className="ql-color"></select>
                                <select className="ql-background"></select>
                                </span>
                                <span className="ql-formats">
                                <button className="ql-script" value="sub"></button>
                                <button className="ql-script" value="super"></button>
                                </span>
                                <span className="ql-formats">
                                <button className="ql-header" value="1"></button>
                                <button className="ql-header" value="2"></button>
                                <button className="ql-blockquote"></button>
                                <button className="ql-code-block"></button>
                                </span>
                            </div>
                            <div id="snow-editor">
                                <h6>Quill Rich Text Editor</h6>
                                <p>
                                Cupcake ipsum dolor sit amet. Halvah cheesecake chocolate bar gummi bears cupcake. Pie
                                macaroon bear claw. Soufflé I love candy canes I love cotton candy I love.
                                </p>
                            </div>
                          </div>
                        </div>
                      </form>
                      <div className="row">
                        <div className="col-12">
                          <h6 className="heading-6 mt-3">Upload Files</h6>
                            <form action="/upload" className="dropzone needsclick" id="dropzone-basic">
                                <div className="dz-message needsclick">
                                Drop files here or click to upload
                                </div>
                                <div className="fallback">
                                <input name="file" type="file" />
                                </div>
                            </form>
                        </div>
                      </div>
                        <div className="col-12 mt-6 d-flex flex-wrap justify-content-center gap-4 row-gap-4">
                          <button type="submit" className="btn btn-primary">Post Issue</button>
                          <button type="reset" className="btn btn-outline-secondary" data-bs-dismiss="modal" aria-label="Close">
                            Cancel
                          </button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--/ Add New Issue Modal --> */}
              </div> 
            {/* <!--/ Content --> */}

            <div className="content-backdrop fade"></div>
          </div>
  )
}

export default ComplaintDetailContent