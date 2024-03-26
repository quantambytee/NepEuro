import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import logo from '/images/logos/logo-black.png'
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';

const HeaderMenu7 = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`${isSticky ? 'fixed-header' : ''}`}>
                <MobileHeader />
                <div className="main-header header-seven">
                    <div className="header-upper">
                        <div className="container-fluid clearfix">
                            <div className="header-inner d-flex align-items-center">
                                <div className="logo-outer">
                                    <div className="logo">
                                        <Link to="/#"><img src={logo} alt="Logo" title="Logo" /></Link>
                                    </div>
                                </div>

                                <div className="nav-outer clearfix d-flex align-items-center">
                                    <nav className="main-menu navbar-expand-lg">
                                        <NavigationMenu />
                                    </nav>
                                    <div className="header-number">
                                        <i className="fas fa-phone-alt"></i>
                                        <div className="number-content">
                                            <span>Tell Us</span>
                                            <a href="tel:+1223558656">+12  235 - 586 - 56</a>
                                        </div>
                                    </div>
                                    <div className="menu-btn">
                                        <Link to="#" className="theme-btn style-eight">Start Free Tral <i className="fas fa-long-arrow-alt-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderMenu7;