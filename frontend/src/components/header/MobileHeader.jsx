import React, { useEffect, useState } from "react";
import useToggle from "../hooks/useToggle";
import Drawer from "./Drawer";
import { HashLink as Link } from "react-router-hash-link";
import logo from "/images/logos/logo-two.png";
import mobileLogo from "../../assets/logo/mobileLogo.svg";

const MobileHeader = () => {
  const [drawer, setValue] = useToggle(false);

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
      <Drawer drawer={drawer} action={setValue.toggle} />
      <div
        className={`mobile-header d-block d-lg-none ${
          isSticky ? "fixed-header" : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center p-2 px-3 h-100">
          <Link to="/#" className="logo-area">
            <img src={mobileLogo} alt="logo" />
          </Link>
          <div className="button-area">
            <span onClick={setValue.toggle}>
              <i className="fa-solid fa-bars"></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
