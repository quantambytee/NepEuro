import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const NavigationMenu = () => {
  return (
    <>
      <div className="navbar-collapse collapse clearfix">
        <ul className="navigation clearfix">
          <li className="current dropdown">
            <Link to="/#">Home</Link>
            {/* <ul>
                            <li><Link to="/#">Home One</Link></li>
                            <li><Link to="/home-2#">Home Two</Link></li>
                            <li><Link to="/home-3#">Home Three</Link></li>
                            <li><Link to="/home-4#">Home Four</Link></li>
                            <li><Link to="/home-5#">Home Five</Link></li>
                            <li><Link to="/home-6#">Home Six</Link></li>
                            <li><Link to="/home-7#">Home Seven</Link></li>
                            <li><Link to="/home-8#">Home Eight</Link></li>
                            <li><Link to="/home-9#">Home Nine</Link></li>
                            <li><Link to="/home-10#">Home Ten</Link></li>
                        </ul> */}
          </li>
          <li className="dropdown">
            <Link to="#/">About Us</Link>
            {/* <ul>
                            <li><Link to="/about#">About One</Link></li>
                            <li><Link to="/about-2#">About Two</Link></li>
                            <li><Link to="/about-3#">About Three</Link></li>
                            <li><Link to="/about-4#">About Four</Link></li>
                            <li><Link to="/about-5#">About Five</Link></li>
                            <li><Link to="/about-6#">About Six</Link></li>
                            <li><Link to="/about-7#">About Seven</Link></li>
                        </ul> */}
          </li>

          <li className="dropdown">
            <Link to="#/">Our Services</Link>
            <ul>
              <li>
                <Link to="/marketEntry-service#">Market Entry Services</Link>
              </li>
              <li>
                <Link to="/consulting-service#">Consulting Services</Link>
              </li>
              <li>
                <Link to="/branding-service#">Branding Services</Link>
              </li>
              <li>
                <Link to="/recruitment-service#">Recruitment Services</Link>
              </li>
              <li>
                <Link to="/itTraining-service#">
                  IT Training and Placement Services
                </Link>
              </li>
            </ul>
          </li>
          <li className="dropdown">
            <Link to="#/">blog</Link>
            {/* <ul>
                            <li><Link to="/blog#">Blog Standard</Link></li>
                            <li><Link to="/blog-details#">Blog Details</Link></li>
                        </ul> */}
          </li>
          <li>
            <Link to="/contact-us#">Contact Us</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavigationMenu;
