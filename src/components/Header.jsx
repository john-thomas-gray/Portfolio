import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Header(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleNavItemClick = (section) => {
    props.scroll(section);
    setIsCollapsed(true);
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginRight: "1rem" }}
            onClick={toggleNavbar}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse sticky-top" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  className="nav-link nav-content"
                  onClick={() => handleNavItemClick("landing")}
                  style={{ cursor: "pointer" }}
                >
                  Home
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link nav-content"
                  onClick={() => handleNavItemClick("about")}
                  style={{ cursor: "pointer" }}
                >
                  About
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link nav-content"
                  onClick={() => handleNavItemClick("skills")}
                  style={{ cursor: "pointer" }}
                >
                  Skills
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link nav-content"
                  onClick={() => handleNavItemClick("projects")}
                  style={{ cursor: "pointer" }}
                >
                  Projects
                </span>
              </li>
              <li className="nav-item">
                <span
                  className="nav-link nav-content"
                  onClick={() => handleNavItemClick("contact")}
                  style={{ cursor: "pointer" }}
                >
                  Contact
                </span>
              </li>
              {/* <li className="nav-item">
                        <a
                          className="nav-link nav-content"
                          href="./resume/Resume.pdf"
                          role="button"
                          target="_blank"
                        >
                          {" "}
                          Resume
                        </a>
                    </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
