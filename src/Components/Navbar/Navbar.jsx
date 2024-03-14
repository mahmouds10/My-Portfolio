import styles from "./Navbar.module.scss";
import { Link } from 'react-scroll';
import React from "react";
import Headroom from "react-headroom";
export default function Navbar() {
  function switchToDark() {
    document.getElementById("lightMod").style.display = "block";
    document.getElementById("darkMod").style.display = "none";
    document.documentElement.style.setProperty("--font-color", "#fff");
    document.documentElement.style.setProperty(
      "--odd-section-color",
      "#262626"
    );
    document.documentElement.style.setProperty(
      "--even-section-color",
      "#272727"
    );
    document.documentElement.style.setProperty(
      "--secondary-link-color",
      "#d2d2d2db"
    );
    document.documentElement.style.setProperty("--span-bg", "#2a2a2a");
    document.documentElement.style.setProperty("--span-color", "#e2e2e2");
  }
  function switchToLight() {
    document.getElementById("lightMod").style.display = "none";
    document.getElementById("darkMod").style.display = "block";
    document.documentElement.style.setProperty("--font-color", "#000");
    document.documentElement.style.setProperty(
      "--odd-section-color",
      "#e9f3fd"
    );
    document.documentElement.style.setProperty(
      "--even-section-color",
      "#f1f6fa"
    );
    document.documentElement.style.setProperty(
      "--secondary-link-color",
      "#3f3e3ee1"
    );
    document.documentElement.style.setProperty("--span-bg", "#e1e6ec");
    document.documentElement.style.setProperty("--span-color", "#000");
  }
  return (
    <Headroom>
      <nav className="navbar navbar-expand-lg">
        <div className="container justify-content-between">
          <span className={styles.header + " navbar-brand m-0 col-md-3"}>
            <span className={styles.firstChild}>M</span>
            ahmoud
            <span className={styles.lastChild}>/</span>
          </span>
          <div className="d-flex gap-3 col-md-3 order-md-3 order-2 justify-content-end">
            <div className="d-flex flex-grow-0 my-2">
              <ul className="d-flex list-unstyled align-items-center gap-2 m-0">
                <li className="d-flex align-items-center">
                  <i
                    onClick={switchToLight}
                    id="lightMod"
                    className="fa-solid fa-sun"
                    style={{
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                      fontSize: "21px",
                      color: "#fff",
                    }}
                  ></i>
                  <i
                    onClick={switchToDark}
                    id="darkMod"
                    className="fa-solid fa-moon"
                    style={{
                      display: "none",
                      cursor: "pointer",
                      width: "16px",
                      height: "16px",
                      fontSize: "21px",
                      color: "#000",
                    }}
                  ></i>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <i className="fa-solid fa-bars"></i>
              </span>
            </button>
          </div>
          <div className="collapse navbar-collapse order-md-2 order-3 flex-grow-1 flex col-md-3 justify-content-center">
            <ul className="navbar-nav mb-2 mb-lg-0 gap-md-3 gap-2">
              <li className="nav-item mx-3 overflow-hidden py-0 py-md-2">
                <Link
                  style={{cursor:"pointer"}}
                  className="nav-link"
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3 overflow-hidden py-0 py-md-2">
                <Link
                style={{cursor:"pointer"}}
                  className="nav-link"
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item mx-3 overflow-hidden py-0 py-md-2">
                <Link
                style={{cursor:"pointer"}}
                  className="nav-link"
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Headroom>
  );
}
