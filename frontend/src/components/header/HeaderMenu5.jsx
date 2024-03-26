import React, { useEffect, useState } from 'react';
import NavigationMenu from './NavigationMenu';
import MeetBtn from './MeetBtn';
import SocialShare from '../others/SocialShare';
import { HashLink as Link } from 'react-router-hash-link';
import MobileHeader from './MobileHeader';
import logo from '/images/logos/logo-two.png'

const HeaderMenu5 = () => {

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
                <div className="main-header header-five">
                    <div className="header-top-wrap bg-lighter lg-py-10">
                        <div className="container">
                            <div className="header-top">
                                <div className="top-left">
                                    <ul>
                                        <li>Call Us: <a href="tel:548978478">548978478</a></li>
                                        <li>Email us: <a href="mailto:demo@example.com">demo@example.com</a></li>
                                        <li>Our address: 45 Dream street Austria</li>
                                    </ul>
                                </div>
                                <div className="top-right">
                                    <div className="office-time">
                                        <i className="far fa-clock"></i><span>08:00 am - 06:00 pm</span>
                                    </div>
                                    <div className="social-style-one">
                                        <SocialShare />
                                    </div>
                                </div>
                            </div>
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
                                    <nav className="main-menu navbar-expand-lg mx-lg-auto">
                                        <NavigationMenu />
                                    </nav>
                                    <div className="nav-search mx-25 transition">
                                        <button className="fa fa-search" onClick={toggleFormVisibility}></button>
                                        <form className={formVisible ? '' : 'hide'} onSubmit={handleSearch}>
                                            <input type="text" placeholder="Search" className="searchbox" required />
                                            <button type="submit" className="searchbutton fa fa-search"></button>
                                        </form>
                                    </div>
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

export default HeaderMenu5;