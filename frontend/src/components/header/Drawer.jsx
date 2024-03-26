import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import logo from "/images/logos/logo-two.png";
import mobileLogo from "../../assets/logo/mobileLogo.svg";

function Drawer({ drawer, action }) {
  const [itemSize, setSize] = useState("0px");
  const [item, setItem] = useState("");

  const handler = (e, value) => {
    const getItems = document.querySelectorAll(`#${value} li`).length;

    if (getItems > 0) {
      if (item !== value) {
        setSize(`${50 * getItems}px`);
        setItem(value);
      } else {
        setItem("");
      }
    }
  };

  return (
    <>
      <div
        className={`off_canvars_overlay ${drawer ? "active" : ""}`}
        onClick={(e) => action(e)}
      ></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${drawer ? "active" : ""}`}
              >
                <Link
                  to="/#"
                  className="offcanvas-brand text-center mb-40 d-block"
                >
                  <img src={mobileLogo} alt="logo" />
                </Link>
                <div id="menu" className="text-left">
                  <ul className="offcanvas_main_menu">
                    <li
                      className="menu-item-has-children active"
                      id="home"
                      onClick={(e) => handler(e, "home")}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="#/">Home</Link>
                      {/* <ul className="sub-menu" style={{ height: item === "home" ? itemSize : "0px" }}>
                                                <li>
                                                    <Link to="/#">Home 1</Link>
                                                </li>
                                                <li>
                                                    <Link to="/home-2#">Home 2</Link>
                                                </li>
                                             
                                               
                                            </ul> */}
                    </li>
                    <li
                      className="menu-item-has-children active"
                      id="about"
                      onClick={(e) => handler(e, "about")}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="#/">About Us</Link>
                      {/* <ul
                        className="sub-menu"
                        style={{ height: item === "about" ? itemSize : "0px" }}
                      >
                        <li>
                          <Link to="/about#">About 1</Link>
                        </li>
                     
                      </ul> */}
                    </li>
                    <li
                      className="menu-item-has-children active"
                      id="service"
                      onClick={(e) => handler(e, "service")}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="">Our Service</Link>
                      <ul
                        className="sub-menu"
                        style={{
                          height: item === "service" ? itemSize : "0px",
                        }}
                      >
                        <li>
                          <Link to="/marketEntry-service#">
                            Market Entry Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/consulting-service#">
                            Consulting Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/branding-service#">Branding Services</Link>
                        </li>
                        <li>
                          <Link to="/recruitment-service#">
                            Recruitment Services
                          </Link>
                        </li>
                        <li>
                          <Link to="/itTraining-service#">
                            IT Training and Placement Services
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li
                      className="menu-item-has-children active"
                      id="Blogs"
                      onClick={(e) => handler(e, "Blogs")}
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <Link to="">Blog</Link>
                      {/* <ul
                        className="sub-menu"
                        style={{ height: item === "Blogs" ? itemSize : "0px" }}
                      >
                        <li>
                          <Link to="/blog#">Blog Page</Link>
                        </li>
                        <li>
                          <Link to="/blog-details#">Blog Details</Link>
                        </li>
                      </ul> */}
                    </li>
                    <li
                      className="menu-item-has-children active"
                      onClick={(e) => handler(e, "contact")}
                      id="contact"
                    >
                      <Link to="/#">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
