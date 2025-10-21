import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../assets/css/style.css"; 
import "../../assets/vendor/libs/node-waves/node-waves.css"
import "../../assets/vendor/css/rtl/core.css"
import "../../assets/css/demo.css"
import "../../assets/vendor/css/rtl/theme-semi-dark.css"
import "../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import {
  FaUser,
  FaTasks,
  FaChartPie,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { useEffect } from "react";
import logo from "../../assets/img/favicon/favicon.png";
import { RiGroup2Line } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import type { IconType } from "react-icons";
const GroupIcon: IconType = RiGroup2Line;



const Sidebar: React.FC = () => {

  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const [hovered, setHovered] = useState(false);

  // 🔹 Load saved collapsed state on mount
  useEffect(() => {
    const savedState = localStorage.getItem("sidebarCollapsed");
    if (savedState === "true") setCollapsed(true);
  }, []);

  // 🔹 Save collapsed state whenever it changes
  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  }, [collapsed]);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const sidebarExpanded = !collapsed || hovered;


  return (
    <aside
      id="layout-menu"
      className={`layout-menu menu-vertical menu bg-menu-theme transition-all duration-200 ease-in-out ${sidebarExpanded ? "width-big" : "width-small"
        }`}
      onMouseEnter={() => collapsed && setHovered(true)}
      onMouseLeave={() => collapsed && setHovered(false)}>
      <div className="app-brand demo">
        <a href="index.html" className="app-brand-link">
          <span className="app-brand-logo demo">
            <span
              style={{
                color: "var(--bs-primary)",
                display: "inline-flex",
                alignItems: "center",
              }}>
              <img
                src={logo}
                width="30"
                alt="Logo"
                style={{ marginRight: "6px" }}
              />
            </span>
          </span>
          {sidebarExpanded && (
            <span className="app-brand-text demo menu-text fw-semibold ms-2">
              SIFAX Performer
            </span>
          )}
        </a>

        <a
          href="#"
          className="layout-menu-toggle menu-link text-large ms-auto"
          onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (
            // → Arrow (expand)
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g transform="scale(-1,1) translate(-24,0)">
                <path
                  d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z"
                  fillOpacity="0.9"
                />
                <path
                  d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z"
                  fillOpacity="0.4"
                />
              </g>
            </svg>
          ) : (
            // ← Arrow (collapse)
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.47365 11.7183C8.11707 12.0749 8.11707 12.6531 8.47365 13.0097L12.071 16.607C12.4615 16.9975 12.4615 17.6305 12.071 18.021C11.6805 18.4115 11.0475 18.4115 10.657 18.021L5.83009 13.1941C5.37164 12.7356 5.37164 11.9924 5.83009 11.5339L10.657 6.707C11.0475 6.31653 11.6805 6.31653 12.071 6.707C12.4615 7.09747 12.4615 7.73053 12.071 8.121L8.47365 11.7183Z"
                fillOpacity="0.9"
              />
              <path
                d="M14.3584 11.8336C14.0654 12.1266 14.0654 12.6014 14.3584 12.8944L18.071 16.607C18.4615 16.9975 18.4615 17.6305 18.071 18.021C17.6805 18.4115 17.0475 18.4115 16.657 18.021L11.6819 13.0459C11.3053 12.6693 11.3053 12.0587 11.6819 11.6821L16.657 6.707C17.0475 6.31653 17.6805 6.31653 18.071 6.707C18.4615 7.09747 18.4615 7.73053 18.071 8.121L14.3584 11.8336Z"
                fillOpacity="0.4"
              />
            </svg>
          )}
        </a>
      </div>

      <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        {/* <!-- Dashboards --> */}
        <li
          className={`active ${sidebarExpanded ? "menu-item" : "menu-small-active"
            }`}>
          <a href="index.html" className="menu-link">
            <i className="menu-icon tf-icons ri-dashboard-line"></i>
            {/* <div data-i18n="Dashboard">Dashboard</div> */}
            {sidebarExpanded && <div data-i18n="Dashboard">Dashboard</div>}
          </a>
        </li>

        {/* Users */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // 🔥 Prevents page reload
              toggleMenu("users");
            }}
            className={`menu-link  ${openMenu === "users" ? "bg-[#3b2a1f]" : ""
              }`}>
            <i className="menu-icon tf-icons ri-group-2-line"></i>
            {sidebarExpanded && (
              <div data-i18n="Users" className="menu-flex">
                Users
                {sidebarExpanded && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow-icon ${openMenu === "users" ? "open" : ""
                      }`}
                    height="20"
                    width="20"
                    viewBox="0 0 640 640">
                    <path
                      fill="#fff"
                      d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                    />
                  </svg>
                )}
              </div>
            )}
          </a>

          {openMenu === "users" && (
            <ul className="submenu">
              <li className="menu-item">
                <a href="/staff" className="menu-link listing-style">
                  <span className="circle"></span>
                  <div data-i18n="Staff List">Staff List</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="/admin-users" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Admin Users">Admin Users</div>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* <!-- Task --> */}
        <li className={` ${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="/all-tasks" className="menu-link">
            <i className="menu-icon tf-icons ri-list-check-3"></i>
            {sidebarExpanded && <div data-i18n="Task">Task</div>}
          </a>
        </li>

        {/* <!-- Cycle --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="/performance-cycle" className="menu-link">
            <i className="menu-icon tf-icons ri-refresh-line"></i>
            {sidebarExpanded && <div data-i18n="Cycle">Cycle</div>}
          </a>
        </li>

        {/* <!-- Appraisal --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // 🔥 Prevents page reload
              toggleMenu("appraisals");
            }}
            className={`menu-link  ${openMenu === "appraisals" ? "bg-[#3b2a1f]" : ""
              }`}>
            <i className="menu-icon tf-icons ri-dashboard-2-line"></i>
            {sidebarExpanded && (
              <div data-i18n="Appraisal" className="menu-flex">
                Appraisal
                {sidebarExpanded && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow-icon ${openMenu === "appraisals" ? "open" : ""
                      }`}
                    height="20"
                    width="20"
                    viewBox="0 0 640 640">
                    <path
                      fill="#fff"
                      d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                    />
                  </svg>
                )}
              </div>
            )}
          </a>

          {openMenu === "appraisals" && (
            <ul className="submenu">
              <li className="menu-item">
                <a href="/appraisal-forms" className="menu-link listing-style">
                  <span className="circle"></span>
                  <div data-i18n="Appraisal Forms">Appraisal Forms</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="/appraisal-activity" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Appraisal Activities">
                    Appraisal Activities
                  </div>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* <!-- Competency --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // 🔥 Prevents page reload
              toggleMenu("competencies");
            }}
            className={`menu-link  ${openMenu === "competencies" ? "bg-[#3b2a1f]" : ""
              }`}>
            <i className="menu-icon tf-icons ri-lightbulb-flash-line"></i>
            {sidebarExpanded && (
              <div data-i18n="Competencies" className="menu-flex">
                Competencies
                {sidebarExpanded && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow-icon ${openMenu === "competencies" ? "open" : ""
                      }`}
                    height="20"
                    width="20"
                    viewBox="0 0 640 640">
                    <path
                      fill="#fff"
                      d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                    />
                  </svg>
                )}
              </div>
            )}
          </a>

          {openMenu === "competencies" && (
            <ul className="submenu">
              <li className="menu-item">
                <a href="/competency" className="menu-link listing-style">
                  <span className="circle"></span>
                  <div data-i18n="All Competencies">All Competencies</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="/competency-rating" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Competency Ratings">Competency Ratings</div>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* <!-- Feedback --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="/feedback" className="menu-link">
            <i className="menu-icon tf-icons ri-wechat-line"></i>
            {sidebarExpanded && (
              <div data-i18n="360° Feedbacks">360° Feedbacks</div>
            )}
          </a>
        </li>

        {/* <!-- Complaint --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="/complaint" className="menu-link">
            <i className="menu-icon tf-icons ri-feedback-line"></i>
            {sidebarExpanded && <div data-i18n="Complaints">Complaints</div>}
          </a>
        </li>

        {/* <!-- Report --> */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="reports.html" className="menu-link">
            <i className="menu-icon tf-icons ri-file-chart-line"></i>
            {sidebarExpanded && <div data-i18n="Reports">Reports</div>}
          </a>
        </li>

        {/* Settings */}
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault(); // 🔥 Prevents page reload
              toggleMenu("settings");
            }}
            className={`menu-link  ${openMenu === "settings" ? "bg-[#3b2a1f]" : ""
              }`}>
            <i className="menu-icon tf-icons ri-settings-3-line"></i>
            {sidebarExpanded && (
              <div data-i18n="Setting" className="menu-flex">
                Settings
                {sidebarExpanded && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`arrow-icon ${openMenu === "settings" ? "open" : ""
                      }`}
                    height="20"
                    width="20"
                    viewBox="0 0 640 640">
                    <path
                      fill="#fff"
                      d="M471.1 297.4C483.6 309.9 483.6 330.2 471.1 342.7L279.1 534.7C266.6 547.2 246.3 547.2 233.8 534.7C221.3 522.2 221.3 501.9 233.8 489.4L403.2 320L233.9 150.6C221.4 138.1 221.4 117.8 233.9 105.3C246.4 92.8 266.7 92.8 279.2 105.3L471.2 297.3z"
                    />
                  </svg>
                )}
              </div>
            )}
          </a>

          {openMenu === "settings" && (
            <ul className="submenu">
              <li className="menu-item">
                <a href="competency.html" className="menu-link listing-style">
                  <span className="circle"></span>
                  <div data-i18n="Perspectives">Perspectives</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Subsidiaries">Subsidiaries</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Departments">Departments</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Grades">Grades</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Designations">Designations</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Appraisal Ratings">Appraisal Ratings</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Complaint Categories">
                    Complaint Categories
                  </div>
                </a>
              </li>
              <li className="menu-item">
                <a href="competency-rating.html" className="menu-link">
                  <span className="circle"></span>
                  <div data-i18n="Import/Export">Import/Export</div>
                </a>
              </li>
            </ul>
          )}
        </li>

        {/* <!-- Misc --> */}
        <li className="menu-header mt-5">
          <span className="menu-header-text" data-i18n="Misc">
            {sidebarExpanded ? "Others" : <hr />}
          </span>
        </li>
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="user-profile.html" className="menu-link">
            <i className="menu-icon tf-icons ri-profile-line"></i>
            {sidebarExpanded && <div data-i18n="Profile">Profile</div>}
          </a>
        </li>
        <li className={`${sidebarExpanded ? "menu-item" : "menu-small"}`}>
          <a href="login.html" className="menu-link">
            <i className="menu-icon tf-icons ri-logout-box-r-line"></i>
            {sidebarExpanded && <div data-i18n="Logout">Logout</div>}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;




