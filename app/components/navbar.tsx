import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        id="navbar"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        role="banner"
        className="navbar w-nav"
      >
        <div className="w-layout-blockcontainer container w-container">
          <div className="navbar-wrapper">
            <a
              data-w-id="49d5cebd-e07c-c183-6eda-25050fcec6ce"
              href="/"
              aria-current="page"
              className="navbar-brand w-nav-brand w--current"
            >
              <div className="logo-icon-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481159ac351ecc350e4da1_Logo%20Icon.svg"
                  loading="lazy"
                  alt="Logo Icon"
                />
              </div>
              <div className="logo-text-wrapper hidden md:block">
                <div className="logo-text">Stellerbyte</div>
                <div className="logo-text hide">Stellerbyte</div>
              </div>
            </a>
            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu w-list-unstyled">
                <li className="nav-list-item">
                  <a href="/" className="nav-link w-inline-block">
                    <div className="icon-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6848195ebef1b8a896fa8190_49ba7746069894de64e35a0743768047_Navbar%20Icon%2004.svg"
                        loading="eager"
                        alt="Navbar Icon"
                      />
                    </div>
                    <div>Home</div>
                  </a>
                </li>

                <li className="nav-list-item">
                  <a href="#services" className="nav-link w-inline-block">
                    <div className="icon-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6848195d8d2149316f36870d_cc2f060de8b0afdda64a35049a662fe2_Navbar%20Icon%2002.svg"
                        loading="eager"
                        alt="Navbar Icon"
                      />
                    </div>
                    <div>Services</div>
                  </a>
                </li>

                <li className="nav-list-item">
                  <Link href="#work" className="nav-link w-inline-block">
                    <div className="icon-wrapper">
                      <img
                        src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/6848195dfb203ef0a29d14bc_b0c373f625d479147468dc3d6dd3f3fe_Navbar%20Icon%2003.svg"
                        loading="eager"
                        alt="Navbar Icon"
                      />
                    </div>
                    <div>Work</div>
                  </Link>
                </li>

                {/* <li className="nav-list-item res-show">
                  <a
                    href="/contact-us"
                    className="primary-button w-inline-block"
                  >
                    <div>Contact us</div>
                    <div className="button-arrow">
                      <img
                        src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481d2acc3934f31f164c0c_arrow-right.svg"
                        loading="eager"
                        alt="Arrow Right"
                      />
                    </div>
                    <div className="button-hover-block"></div>
                  </a>
                </li> */}
              </ul>
            </nav>
            {/* <div className="nav-button-wrapper">
              <div className="nav-button-block">
                <a
                  data-w-id="5ba6058c-1fe5-b8d4-9873-e29282f4c0f8"
                  href="/contact-us"
                  className="primary-button w-inline-block"
                >
                  <div className="button-text">Contact us</div>
                  <div className="button-arrow">
                    <img
                      src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481d2acc3934f31f164c0c_arrow-right.svg"
                      loading="eager"
                      alt="Arrow Right"
                    />
                  </div>
                  <div className="button-hover-block"></div>
                </a>
              </div>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
