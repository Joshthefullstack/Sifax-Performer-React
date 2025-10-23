import React, { useEffect, useRef, useState } from "react";
import "../../assets/vendor/css/rtl/core.css"
import "../../assets/css/demo.css"
import "../../assets/vendor/css/rtl/theme-semi-dark.css"
import avatar from "../../assets/img/avatars/1.png";
import avatar2 from "../../assets/img/avatars/2.png";
import { title } from "process";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const typeofNotifics = [
    "connection-request",
    "new-message",
    "congratulatory-message",
    "new-order",
    "report-generated"
  ];
  const notificationData = [
    {
      title: "Congratulations, Lettie",
      detail: "Won the monthly best seller gold badge",
      timestamp: "1h ago",
      type: "congratulatory-message",
      unRead: false,
      imgURL: avatar,
    },
    {
      title: "Charles Franklin",
      detail: "Accepted your connection",
      timestamp: "12h ago",
      type: "connection-request",
      unRead: false,
      imgURL: avatar,
    },
    {
      title: "New Message",
      detail: "You have new message from Natalie",
      timestamp: "1h ago",
      type: "new-message",
      unRead: false,
      imgURL: avatar2,
    },
  ];

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-4 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-6" href="javascript:void(0)">
          <i className="ri-menu-fill ri-22px"></i>
        </a>
      </div>

      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse">
        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* Notification */}
          <li
            ref={dropdownRef}
            className={`nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1 ${
              isOpen ? "show" : ""
            }`}
            // className="nav-item dropdown-notifications navbar-dropdown dropdown me-4 me-xl-1"
          >
            <a
              className="nav-link btn btn-text-secondary rounded-pill btn-icon hide-arrow"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen((prev) => !prev);
                setOpenDropdown(null);
              }}>
              <i className="ri-notification-2-line ri-22px"></i>
              <span className="position-absolute top-0 start-50 translate-middle-y badge badge-dot bg-danger mt-2 border"></span>
            </a>
            {/* Notification Drop down */}
            {isOpen && (
              <ul className="dropdown-menu dropdown-menu-end py-0 show notification-dd">
                <li className="dropdown-menu-header border-bottom py-50">
                  <div className="dropdown-header d-flex align-items-center py-2">
                    <h6 className="mb-0 me-auto">Notification</h6>
                    <div className="d-flex align-items-center">
                      <span className="badge rounded-pill bg-label-primary fs-xsmall me-2">
                        {`${notificationData.length} New`}
                      </span>
                      <a
                        href="#"
                        className="btn btn-text-secondary rounded-pill btn-icon"
                        title="Mark all as read">
                        <i className="ri-mail-open-line text-heading ri-20px"></i>
                      </a>
                    </div>
                  </div>
                </li>

                {/* There is a classname for it to be marked as read */}

                <li className="dropdown-notifications-list scrollable-container">
                  <ul className="list-group list-group-flush">
                    {/* <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src={avatar}
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="small mb-1">
                            Congratulations Lettie 🎉
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Won the monthly best seller gold badge
                          </small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-danger">
                              CF
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">Charles Franklin</h6>
                          <small className="mb-1 d-block text-body">
                            Accepted your connection
                          </small>
                          <small className="text-muted">12hr ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="assets/img/avatars/2.png"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">New Message ✉️</h6>
                          <small className="mb-1 d-block text-body">
                            You have new message from Natalie
                          </small>
                          <small className="text-muted">1h ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="ri-shopping-cart-2-line"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Whoo! You have new order 🛒
                          </h6>
                          <small className="mb-1 d-block text-body">
                            ACME Inc. made new order $1,154
                          </small>
                          <small className="text-muted">1 day ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="assets/img/avatars/9.png"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Application has been approved 🚀
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Your ABC project application has been approved.
                          </small>
                          <small className="text-muted">2 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-success">
                              <i className="ri-pie-chart-2-line"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Monthly report is generated
                          </h6>
                          <small className="mb-1 d-block text-body">
                            July monthly financial report is generated{" "}
                          </small>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="assets/img/avatars/5.png"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">
                            Send connection request
                          </h6>
                          <small className="mb-1 d-block text-body">
                            Peter sent you connection request
                          </small>
                          <small className="text-muted">4 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <img
                              src="assets/img/avatars/6.png"
                              alt=""
                              className="rounded-circle"
                            />
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">New message from Jane</h6>
                          <small className="mb-1 d-block text-body">
                            Your have new message from Jane
                          </small>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar">
                            <span className="avatar-initial rounded-circle bg-label-warning">
                              <i className="ri-error-warning-line"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1 small">CPU is running high</h6>
                          <small className="mb-1 d-block text-body">
                            CPU Utilization Percent is currently at 88.63%,
                          </small>
                          <small className="text-muted">5 days ago</small>
                        </div>
                        <div className="flex-shrink-0 dropdown-notifications-actions">
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-read">
                            <span className="badge badge-dot"></span>
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="dropdown-notifications-archive">
                            <span className="ri-close-line ri-20px"></span>
                          </a>
                        </div>
                      </div>
                    </li> */}

                    {notificationData.map((notification, key) => {
                      return (
                         <li className={`list-group-item list-group-item-action dropdown-notifications-item ${
                        notification.unRead ? "" : "marked-as-read"
                      }`}>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <div className="avatar">
                        <img src={notification.imgURL} alt="" className="rounded-circle" />
                        {/* I should specify, that just incase the user doesn't have a profile picture, something else should show. */}
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="small mb-1">{notification.title}</h6>
                      <small className="mb-1 d-block text-body">
                        {notification.detail}
                      </small>
                      <small className="text-muted">{notification.timestamp}</small>
                    </div>
                    <div className="flex-shrink-0 dropdown-notifications-actions">
                      <a
                        href="javascript:void(0)"
                        className="dropdown-notifications-read">
                        <span className="badge badge-dot"></span>
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="dropdown-notifications-archive">
                        <span className="ri-close-line ri-20px"></span>
                      </a>
                    </div>
                  </div>
                </li> 
                      );
                    })}
                  </ul>
                </li>

                <li className="border-top">
                  <div className="d-grid p-4">
                    <a className="btn btn-primary btn-sm d-flex" href="#">
                      <small className="align-middle">
                        View all notifications
                      </small>
                    </a>
                  </div>
                </li>
              </ul>
            )}
          </li>
          {/* <!--/ Notification -->

                <!-- User --> */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a
              className="nav-link dropdown-toggle hide-arrow"
              href="#"
              data-bs-toggle="dropdown"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown("user");
              }}>
              <div className="avatar avatar-online">
                <img src={avatar} alt="" className="rounded-circle" />
              </div>
            </a>
            {/* User dropdown */}
            <ul
              className={`dropdown-menu dropdown-menu-end user-dd ${
                openDropdown === "user" ? "show" : ""
              }`}>
              <li>
                <a
                  className="dropdown-item"
                  href="pages-account-settings-account.html">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar avatar-online">
                        <img src={avatar} alt="" className="rounded-circle" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <span className="fw-medium d-block small">
                        Titilope Samuel
                      </span>
                      <small className="text-muted">mail@example.com</small>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <a className="dropdown-item" href="user-profile.html">
                  <i className="ri-profile-line ri-22px me-3"></i>
                  <span className="align-middle">My Profile</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="user-account.html">
                  <i className="ri-account-box-line ri-22px me-3"></i>
                  <span className="align-middle">Account</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="user-security.html">
                  <i className="flex-shrink-0 ri-lock-2-line ri-22px me-3"></i>
                  <span className="flex-grow-1 align-middle">Security</span>
                </a>
              </li>
              <li>
                <div className="dropdown-divider"></div>
              </li>
              <li>
                <div className="d-grid px-4 pt-2 pb-1">
                  <a
                    className="btn btn-sm btn-danger d-flex"
                    href="login.html"
                    target="_blank">
                    <small className="align-middle">Logout</small>
                    <i className="ri-logout-box-r-line ms-2 ri-16px"></i>
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
