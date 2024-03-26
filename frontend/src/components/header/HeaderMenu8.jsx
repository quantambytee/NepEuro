import React, { useEffect, useState } from 'react';
import SocialShare from '../others/SocialShare';
import MobileHeader from './MobileHeader';
import NavigationMenu from './NavigationMenu';
import logoWhite from '/images/logos/logo-white-two.png'
import { HashLink as Link } from 'react-router-hash-link';

const HeaderMenu8 = () => {

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
                <div className="main-header header-eight">
                    <div className="header-top-wrap bg-black text-white py-10 d-none d-lg-block">
                        <div className="container">
                            <div className="header-top">
                                <div className="top-left">
                                    <ul>
                                        <li><i className="far fa-envelope"></i> <a href="mailto:info.Restly@gmail.com">info.Restly@gmail.com</a></li>
                                        <li>
                                            <i className="fas fa-globe"></i>
                                            <select name="language" id="language">
                                                <option value="English">English</option>
                                                <option value="Arabic">Arabic</option>
                                                <option value="Spanish">Spanish</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                                <div className="top-right">
                                    <div className="hotline">
                                        <i className="fas fa-headset"></i><span>Hotline : </span> <a href="tel:+125846589">+12 584 6589</a>
                                    </div>
                                    <div className="social-style-one">
                                        <SocialShare />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-upper bg-white">
                        <div className="container clearfix">
                            <div className="header-inner d-flex align-items-center">
                                <div className="logo-outer">
                                    <div className="logo">
                                        <Link to="/#"><img src={logoWhite} alt="Logo" title="Logo" /></Link>
                                    </div>
                                </div>
                                <div className="nav-outer clearfix d-flex align-items-center">
                                    <nav className="main-menu navbar-expand-lg mx-lg-auto">
                                        <NavigationMenu />
                                    </nav>
                                    <div className="nav-search mx-25">
                                        <button className="fa fa-search" onClick={toggleFormVisibility}></button>
                                        <form className={formVisible ? '' : 'hide'} onSubmit={handleSearch}>
                                            <input type="text" placeholder="Search" className="searchbox" required />
                                            <button type="submit" className="searchbutton fa fa-search"></button>
                                        </form>
                                    </div>
                                    <div className="menu-btn">
                                        <Link to="/contact#" className="theme-btn style-nine">contact us <i className="far fa-paper-plane"></i></Link>
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

export default HeaderMenu8;