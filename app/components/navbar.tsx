import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div id="navbar" className="navbar w-nav">
        <div className="w-layout-blockcontainer container w-container">
          <div className="navbar-wrapper">
            <Link href="/" className="navbar-brand w-nav-brand">
              <div className="logo-icon-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/68480b7872cd627b975251ca/68481159ac351ecc350e4da1_Logo%20Icon.svg"
                  loading="lazy"
                  alt="Logo Icon"
                />
              </div>

              <div className="logo-text-wrapper  md:block">
                <div className="logo-text">Stellerbyte</div>
              </div>
            </Link>

            <nav role="navigation" className="nav-menu-wrapper w-nav-menu">
              <ul role="list" className="nav-menu w-list-unstyled">
                <li className="nav-list-item">
                  <a href="#hero" className="nav-link w-inline-block">
                    Home
                  </a>
                </li>

                <li className="nav-list-item">
                  <a href="#services" className="nav-link w-inline-block">
                    Services
                  </a>
                </li>

                <li className="nav-list-item">
                  <a href="#work" className="nav-link w-inline-block">
                    Work
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
