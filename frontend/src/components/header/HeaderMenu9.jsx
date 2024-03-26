import React, { useEffect, useState } from 'react';
import logo from '/images/logos/logo-white-three.png'
import NavigationMenu from './NavigationMenu';
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';

const HeaderMenu9 = () => {

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
                <div className="main-header header-nine">
                    <div className="header-upper">
                        <div className="container clearfix">
                            <div className="header-inner d-flex align-items-center">
                                <div className="logo-outer">
                                    <div className="logo">
                                        <Link to="/#"><img src={logo} alt="Logo" title="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix d-flex align-items-center justify-content-end">
                                    <nav className="main-menu navbar-expand-lg ml-lg-auto">
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
                                            <i className="fas fa-shopping-bag"></i>
                                            <span className="number">0</span>
                                        </button>
                                    </div>
                                    <div className="menu-btn">
                                        <Link to="#" className="theme-btn gradient-btn-one">wallet connect</Link>
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

export default HeaderMenu9;