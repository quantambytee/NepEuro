import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/images/logos/logo-two.png'
import NavigationMenu from './NavigationMenu';
import MobileHeader from './MobileHeader';

const HeaderMenu10 = () => {

    const [formVisible, setFormVisible] = useState(false);

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        event.target.reset()
    }

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
                <div className="main-header header-ten">
                    <div className="header-top bg-blue py-10 text-center text-white">
                        <div className="container">
                            <p>Welcome to Saaxio a modern saas landing template. Have any project <Link to="/contact#">Contact Us</Link></p>
                        </div>
                    </div>
                    <div className="header-upper">
                        <div className="container clearfix">
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
                                    <div className="menu-icons">
                                        <div className="nav-search mx-15">
                                            <button className="fa fa-search" onClick={toggleFormVisibility}></button>
                                            <form className={formVisible ? '' : 'hide'} onSubmit={handleSearch}>
                                                <input type="text" placeholder="Search" className="searchbox" />
                                                <button type="submit" className="searchbutton fa fa-search"></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="menu-btn">
                                        <Link to="#" className="login"><i className="fas fa-lock"></i> LogIn</Link>
                                        <Link to="#" className="theme-btn style-six">Sign up<i className="fas fa-arrow-right rtl-margin"></i></Link>
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

export default HeaderMenu10;