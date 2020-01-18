/* eslint-disable no-unneeded-ternary */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import Logo from "../../assets/img/logo.png";

const Navbar = () => {
  const [isOpen, setNavbar] = useState(false);
  return (
    <header
      className={
        !isOpen
          ? "globalHeader is-visible is-white"
          : "globalHeader mix_blend_off is-visible is-white"
      }
    >
      <div className="container">
        <div className="row">
          <div className="menu">
            <div className="logo">
              <h1 className="logo__kanji">片平里菜</h1>
              <span className="logo__alfabeth">RINA KATAHIRA</span>
            </div>
            <nav
              className={
                isOpen !== false ? "full-navbar nav-active" : "full-navbar"
              }
            >
              <div className="full-navbar__bg" />
              <div className="full-navbar__main">
                <ul className="full-navbar__main__list">
                  <li className="full-navbar__main__list__menu">News</li>
                  <li className="full-navbar__main__list__menu">Top</li>
                  <li className="full-navbar__main__list__menu">Media</li>
                  <li className="full-navbar__main__list__menu">Discography</li>
                  <li className="full-navbar__main__list__menu">Mail</li>
                  <li className="full-navbar__main__list__menu">Profile</li>
                  <li className="full-navbar__main__list__menu">Live</li>
                </ul>
              </div>
            </nav>
            <div
              role="button"
              onClick={() => setNavbar(isOpen === false ? true : false)}
              className={isOpen ? "menu-btn-active" : "menu-btn"}
            >
              <svg
                className="circle"
                viewBox="0 0 80 80"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <ellipse
                    className={isOpen ? "background-active" : "background"}
                    ry="38"
                    rx="38"
                    cy="40"
                    cx="40"
                    strokeWidth="2"
                  />
                  <ellipse
                    className={isOpen ? "foreground-active" : "foreground"}
                    ry="38"
                    rx="38"
                    cy="40"
                    cx="40"
                    strokeWidth="2"
                  />
                  {/* <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    className="text-menu open"
                  >
                    Menu
                  </text> */}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
