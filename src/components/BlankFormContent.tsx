import React from 'react'
import "../assets/vendor/libs/bs-stepper/bs-stepper.css";

const BlankFormContent = () => {
    return (
        <div className="content-wrapper">
            {/* <!-- Content --> */}
            <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="mb-1">Blank Form Template</h4>
                <p className="mb-6">
                    Create a new form from scratch on this page.
                </p>
                <div className="row">
                    {/* <!-- Form Repeater --> */}
                    <div className="col-12">
                        <div className="bs-stepper wizard-numbered mt-2">
                            <div className="bs-stepper-header">
                                <div className="step" data-target="#form-details">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="ri-check-line"></i></span>
                                        <span className="bs-stepper-label">
                                            <span className="bs-stepper-number">01</span>
                                            <span className="d-flex flex-column gap-1 ms-2">
                                                <span className="bs-stepper-title">Form Details</span>
                                                <span className="bs-stepper-subtitle">Setup Form Details</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <div className="step" data-target="#form-questions">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="ri-check-line"></i></span>
                                        <span className="bs-stepper-label">
                                            <span className="bs-stepper-number">02</span>
                                            <span className="d-flex flex-column gap-1 ms-2">
                                                <span className="bs-stepper-title">Form Questions</span>
                                                <span className="bs-stepper-subtitle">Add questions to form</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                                <div className="line"></div>
                                <div className="step" data-target="#form-questions">
                                    <button type="button" className="step-trigger">
                                        <span className="bs-stepper-circle"><i className="ri-check-line"></i></span>
                                        <span className="bs-stepper-label">
                                            <span className="bs-stepper-number">03</span>
                                            <span className="d-flex flex-column gap-1 ms-2">
                                                <span className="bs-stepper-title">Form Comments</span>
                                                <span className="bs-stepper-subtitle">Add comments to form</span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="bs-stepper-content">
                                <form onSubmit={() => { }}>
                                    {/* <!-- Form Details --> */}
                                    <div id="form-details" className="content">
                                        <div className="content-header mb-4">
                                            <h6 className="mb-0">Form Details</h6>
                                            <small>Enter Form Details.</small>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-sm-6">
                                                <div className="form-floating form-floating-outline mb-6">
                                                    <input type="text" className="form-control bg-transparent" id="form-name" placeholder="Form Name" />
                                                    <label htmlFor="form-name">Form Name</label>
                                                </div>
                                                <div className="form-floating form-floating-outline  mb-6">
                                                    <textarea id="form-description" className="form-control bg-transparent"
                                                        placeholder="Add form's description here..." style={{ height: "100px" }}></textarea>
                                                    <label htmlFor="form-description">Form Description</label>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-between">
                                                <button className="btn btn-outline-secondary btn-prev" disabled>
                                                    <i className="ri-arrow-left-line me-sm-1 me-0"></i>
                                                    <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                                </button>
                                                <button className="btn btn-primary btn-next">
                                                    <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                                                    <i className="ri-arrow-right-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Form Questions --> */}
                                    <div id="form-questions" className="content">
                                        <div className="content-header mb-4">
                                            <h6 className="mb-0">Form Questions</h6>
                                            <small>Setup Form Questions</small>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-12">
                                                {/* <!-- Sections Container --> */}
                                                <div id="sections"></div>

                                                <button id="addSection" className="btn btn-primary">+ Add Section</button>
                                                <button id="previewForm" className="btn btn-success">Preview Form</button>

                                                {/* <!-- Global Total --> */}
                                                <div className="alert alert-info mt-3">
                                                    Overall Allocated Score: <span id="overallAllocated">0</span> / 100
                                                    <div id="overallWarning" className="warning"></div>
                                                </div>

                                                {/* <!-- Preview Modal --> */}
                                                <div className="modal fade" id="kraModal" tabIndex={-1}>
                                                    <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                            <div className="modal-header">
                                                                <h5 className="modal-title">Form Preview</h5>
                                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                            </div>
                                                            <div className="modal-body" id="previewBody"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-between">
                                                <button className="btn btn-outline-secondary btn-prev">
                                                    <i className="ri-arrow-left-line me-sm-1 me-0"></i>
                                                    <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                                </button>
                                                <button className="btn btn-primary btn-next">
                                                    <span className="align-middle d-sm-inline-block d-none me-sm-1">Next</span>
                                                    <i className="ri-arrow-right-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Form Commentss --> */}
                                    <div id="form-comments" className="content">
                                        <div className="content-header mb-4">
                                            <h6 className="mb-0">Form Comments</h6>
                                            <small>Set Comment Titles for this Form.</small>
                                        </div>
                                        <div className="row g-5">
                                            <div className="col-sm-6">
                                                <div className="form-floating form-floating-outline">
                                                    <input type="text" className="form-control" placeholder="e.g. Developmental Need" />
                                                    <label htmlFor="twitter">Comment One</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-floating form-floating-outline">
                                                    <input type="text" className="form-control" placeholder="e.g. Recommendation" />
                                                    <label htmlFor="facebook">Comment Two</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-floating form-floating-outline">
                                                    <input type="text" className="form-control" placeholder="e.g. Additional Comment" />
                                                    <label htmlFor="google">Comment Three</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-floating form-floating-outline">
                                                    <input type="text" className="form-control" placeholder="e.g. Employee's Comment" />
                                                    <label htmlFor="google">Add Staff Comment</label>
                                                </div>
                                            </div>
                                            <div className="col-12 d-flex justify-content-between">
                                                <button className="btn btn-outline-secondary btn-prev">
                                                    <i className="ri-arrow-left-line me-sm-1 me-0"></i>
                                                    <span className="align-middle d-sm-inline-block d-none">Previous</span>
                                                </button>
                                                <button className="btn btn-primary btn-submit">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /Form Repeater --> */}
                </div>
            </div>
            {/* <!-- / Content --> */}

            <div className="content-backdrop fade"></div>
        </div>
    )
}

export default BlankFormContent