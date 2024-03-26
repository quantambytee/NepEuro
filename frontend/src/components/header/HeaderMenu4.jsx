import React, { useEffect, useState } from "react";
import SocialShare from "../others/SocialShare";
import MobileHeader from "./MobileHeader";
import NavigationMenu from "./NavigationMenu";
import MeetBtn from "./MeetBtn";
import logo from "/images/logos/logo.png";
import nepLogo from "../../assets/logo/NepeuroLogo2.png";
import NepeLogo from "../../assets/logo/NEPEURO2.svg";
import { HashLink as Link } from "react-router-hash-link";

const HeaderMenu4 = () => {
  const [formVisible, setFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`${isSticky ? "fixed-header" : ""}`}>
        <MobileHeader />
        <div className="main-header header-four">
          <div className="header-top-wrap bg-lighter lg-py-10">
            <div className="container">
              <div className="header-top">
                <div className="top-left">
                  <ul>
                    <li>
                      Call Us: <a href="tel:17664892368">+49 17664892368</a>
                    </li>
                    <li>
                      Email us:{" "}
                      <a href="mailto:ssinha@nepeuro.com">ssinha@nepeuro.com</a>
                    </li>
                    <li>
                      Our address: Schlossstr.30 16909 OT Freyenstein
                      Wittstock/Dosse, Germany
                    </li>
                  </ul>
                </div>
                <div className="top-right">
                  <div className="office-time">
                    <i className="far fa-clock"></i>
                    <span>08:00 am - 06:00 pm</span>
                  </div>
                  {/* <div className="social-style-one">
                    <SocialShare />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="header-upper text-white">
            <div className="container clearfix">
              <div className="header-inner d-flex align-items-center">
                <div className="logo-outer">
                  <div className="logo">
                    <Link to="/#">
                      <img src={NepeLogo} alt="Logo" title="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="nav-outer clearfix d-flex align-items-center">
                  <nav className="main-menu navbar-expand-lg mx-lg-auto">
                    <NavigationMenu />
                  </nav>
                  {/* <div className="nav-search mx-25 transition">
                    <button
                      className="fa fa-search"
                      onClick={toggleFormVisibility}
                    ></button>
                    <form
                      className={formVisible ? "" : "hide"}
                      onSubmit={handleSearch}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className="searchbox"
                        required
                      />
                      <button
                        type="submit"
                        className="searchbutton fa fa-search"
                      ></button>
                    </form>
                  </div> */}
                  <MeetBtn />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderMenu4;
