import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/images/logos/logo-three.png'
import MobileHeader from './MobileHeader';

const HeaderMenu6 = () => {

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
                <div className="main-header header-six">
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
                                                <input type="text" placeholder="Search" className="searchbox" required />
                                                <button type="submit" className="searchbutton fa fa-search"></button>
                                            </form>
                                        </div>
                                        <button>
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                    </div>
                                    <div className="menu-btn">
                                        <Link to="#" className="theme-btn style-seven">LogIn/Sign up</Link>
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

export default HeaderMenu6;