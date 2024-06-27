import React, { useState, useContext } from "react";
import Link from "next/link";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import {
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialFacebook,
  TiSocialGithub,
} from "react-icons/ti";

//INTERNAL IMPORT
import { CONTEXT } from "../context/index";

const Header = () => {
  const { connect, address, loader } = useContext(CONTEXT);
  const menus = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Airdrop",
      path: "#airdrop",
    },
    {
      name: "Bonus",
      path: "#feature",
    },
    {
      name: "Tokenomics",
      path: "#chart",
    },
    // {
    //   name: "FAQ",
    //   path: "#faq",
    // },
    // {
    //   name: "Contact",
    //   path: "#contact",
    // },
  ];
  return (
    <header id="header">
      <div id="sticky-header" className="menu-area transparent-header">
        <div className="container custom-container">
          <div className="row">
            <div className="col-12">
              <div className="menu-wrap">
                <nav className="menu-nav">
                  <div className="logo">
                    <Link href="/">
                      <img
                        src="https://blog.bullflame.com/wp-content/uploads/2024/04/BFLogo-300x300.png"
                        alt="Logo"
                      />
                    </Link>
                  </div>
                  <div className="navbar-wrap  d-none d-lg-flex">
                    <ul className="navigation">
                      {menus.map((menu, index) => (
                        <li
                          className={menu.name == "Home" ? "active" : ""}
                          key={index}
                        >
                          <a href={`${menu.path}`} className="section-link">
                            {menu.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="header-action">
                    <ul className="list-wrap">
                      {address ? (
                        <li className="header-login">
                          <Link href="/airdrop">
                            {loader ? "loading..." : " Airdrop"}
                            <i className="fas ">
                              <MdOutlineGeneratingTokens />
                            </i>
                          </Link>
                        </li>
                      ) : (
                        <li className="header-login">
                          <a onClick={() => connect()}>
                            Connect
                            <i className="fas ">
                              <MdOutlineGeneratingTokens />
                            </i>
                          </a>
                        </li>
                      )}

                      {/* <li className="offcanvas-menu">
                        <a className="menu-tigger">
                          <RiMenu3Line />
                        </a>
                      </li> */}
                    </ul>
                  </div>
                  <div className="mobile-nav-toggler">
                    <i className="fas ">
                      <RiMenu3Line />
                    </i>
                  </div>
                </nav>
              </div>

              <div className="mobile-menu">
                <nav className="menu-box">
                  <div className="close-btn">
                    <i className="fas ">
                      <IoMdClose />
                    </i>
                  </div>
                  <div className="nav-logo">
                    <a href="index.html">
                      <img
                        src="https://blog.bullflame.com/wp-content/uploads/2024/04/BFLogo-300x300.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="menu-outer">
                    <ul className="navigation">
                      {menus.map((menu, index) => (
                        <li
                          className={menu.name == "Home" ? "active" : ""}
                          key={menu.name}
                        >
                          <a href={`${menu.path}`} className="section-link">
                            {menu.name}
                          </a>
                        </li>
                      ))}

                      {address ? (
                        <li className="header-login">
                          <Link href="/airdrop">Airdrop</Link>
                        </li>
                      ) : (
                        <li className="header-login">
                          <a onClick={() => connect()}>Connect</a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <div className="social-links">
                    <ul className="clearfix list-wrap">
                      <li>
                        <a href="#">
                          <i className="fab ">
                            <TiSocialFacebook />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab">
                            <TiSocialTwitter />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab ">
                            <TiSocialLinkedin />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab ">
                            <TiSocialYoutube />
                          </i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab ">
                            <TiSocialGithub />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="menu-backdrop"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="extra-info">
        <div className="close-icon menu-close">
          <button>
            <i className="fas ">
              <IoMdClose />
            </i>
          </button>
        </div>
        <div className="logo-side mb-30">
          <a href="index.html">
            <img src="assets/img/logo/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="side-info mb-30">
          <div className="contact-list mb-30">
            <h4>Office Address</h4>
            <p>
              123/A, Miranda City Likaoli <br />
              Prikano, Dope
            </p>
          </div>
          <div className="contact-list mb-30">
            <h4>Phone Number</h4>
            <p>+0989 7876 9865 9</p>
            <p>+(090) 8765 86543 85</p>
          </div>
          <div className="contact-list mb-30">
            <h4>Email Address</h4>
            <p>info@example.com</p>
            <p>example.mail@hum.com</p>
          </div>
        </div>
        <div className="social-icon-right mt-30">
          <a href="#">
            <i className="fab ">
              <TiSocialFacebook />
            </i>
          </a>
          <a href="#">
            <i className="fab ">
              <TiSocialTwitter />
            </i>
          </a>
          <a href="#">
            <i className="fab ">
              <TiSocialGithub />
            </i>
          </a>
          <a href="#">
            <i className="fab ">
              <TiSocialYoutube />
            </i>
          </a>
        </div>
      </div>
      <div className="offcanvas-overly"></div>
    </header>
  );
};

export default Header;
