import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import '../Navbar/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Top Bar */}
            <div className="navbar__topbar">
                <div className="topbar__left">
                    <FontAwesomeIcon icon={["fas", "mobile-screen-button"]} className="topbar__icon" />
                    <span className="topbar__text">Download BeliBeli App</span>
                </div>

                <div className="topbar__right">
                    <ul className="topbar__menu">
                        <li className="topbar__item">Mitra BeliBeli</li>
                        <li className="topbar__item">About BeliBeli</li>
                        <li className="topbar__item">BeliBeli Care</li>
                        <li className="topbar__item">Promo</li>

                        <li className="topbar__divider"></li>

                        <li className="topbar__item topbar__item--signup">
                            <Link to="/signup" className="topbar__link">Sign Up</Link>
                        </li>

                        <li className="topbar__divider"></li>

                        <li className="topbar__item topbar__item--login">
                            <Link to="/login" className="topbar__link">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="navbar__divider-line"></div>

            {/* Main Navigation */}
            <div className="navbar__main">
                {/* Logo */}
                <div className="navbar__logo">
                    <span className='logo__icon'>𝔅</span>BeliBeli.com
                </div>

                {/* Search Section */}
                <div className="navbar__search">
                    <div className="search__dropdown">
                        <select id="product-categories" name="product-categories">
                            <option value="category" selected hidden>All Category</option>

                            <optgroup label="Fashion">
                                <option>Men</option>
                                <option>Women</option>
                                <option>Kids</option>
                                <option>Footwear</option>
                                <option>Accessories</option>
                            </optgroup>

                            <optgroup label="Beauty">
                                <option>Skincare</option>
                                <option>Haircare</option>
                                <option>Makeup</option>
                                <option>Fragrance</option>
                            </optgroup>

                            <optgroup label="Kids">
                                <option>Toys</option>
                                <option>Kits</option>
                                <option>Diapers</option>
                            </optgroup>


                            <optgroup label="Grocery">
                                <option>Snacks</option>
                                <option>Spices</option>
                                <option>Organic</option>
                            </optgroup>

                        </select>
                    </div>

                    <div className="search__divider"></div>

                    <div className="search__input-box">
                        <FontAwesomeIcon icon={["fas", "search"]} className='search__icon' />
                        <input type="search" className='search__input' placeholder='Search product and brand here...' />
                    </div>
                </div>

                {/* Icons */}
                <div className="navbar__icons">
                    <Link to="/cart" className='icon__link'>
                        <FontAwesomeIcon icon={["fas", "shopping-bag"]} className="icon__shopping" />
                    </Link>
                    <Link to="/notification" className='icon__link'>
                        <FontAwesomeIcon icon={["fas", "bell"]} className="icon__notification" />
                    </Link>
                </div>
            </div>

            {/* Divider */}
            <div className="navbar__divider-line"></div>
        </nav>
    );
};

export default Navbar;
