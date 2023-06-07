import React, { useCallback, useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaFacebookF, FaVimeoV, FaPinterestP } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
import { TiSocialGooglePlus } from 'react-icons/ti';
import navbar from '../styles/Navbar.module.css';

const handleActive = ({ isActive }) => (isActive
  ? {
    backgroundColor: '#95C010',
    color: 'white',
    textDecoration: 'none',
    transition: '0.5s ease-out',
  }
  : {
    color: 'black',
  });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItems, setMenuItems] = useState('');
  const location = useLocation();
  const user = localStorage.getItem('user');

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem('user');
  };

  useEffect(() => {
    switch (location.pathname) {
      case '/reservation':
        setMenuItems('white-bars');
        break;
      default:
        setMenuItems('');
    }
  }, [location.pathname]);

  return (
    <>
      <div className="sidebar">
        <nav className={navbar.nav}>
          <div role="presentation" className={`${navbar.menu__bars} ${isOpen ? navbar.open : ''}`} onClick={toggleMenu}>
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menu__close : navbar.menu__lines} ${isOpen ? navbar.menubar__firstLine : ''}`} />
            <div id={`${isOpen ? '' : menuItems}`} className={`${isOpen ? navbar.menu__close : navbar.menu__lines} ${isOpen ? navbar.menubar__secondLine : ''}`} />
          </div>
          <div className={`${navbar.menuItems} ${isOpen ? navbar.open : ''}`}>
            <NavLink to="/" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Vehicles
            </NavLink>
            <NavLink to="/reservation" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Reservation
            </NavLink>
            <NavLink to="/my-reservations" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              My Reservation
            </NavLink>
            <NavLink to="/add-vehicle" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Add Vehicle
            </NavLink>
            <NavLink to="/delete-vehicle" style={handleActive} className={navbar.link} onClick={toggleMenu}>
              Delete Vehicle
            </NavLink>
            {!user ? (
              <>
                <NavLink to="/registration" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                  Sign Up
                </NavLink>
                <NavLink to="/login" style={handleActive} className={navbar.link} onClick={toggleMenu}>
                  Log In
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" style={handleActive} className={navbar.link} onClick={handleLogout}>
                  Log Out
                </NavLink>
              </>
            )}
            <div className={navbar.nav__footer}>
              <div className={navbar.social__icons}>
                <NavLink to="https://twitter.com/" className={navbar.social_links}>
                  <AiOutlineTwitter />
                </NavLink>
                <NavLink to="https://facebook.com/" className={navbar.social_links}>
                  <FaFacebookF />
                </NavLink>
                <NavLink to="https://www.google.com/" className={navbar.social_links}>
                  <TiSocialGooglePlus />
                </NavLink>
                <NavLink to="https://www.vimo.me/" className={navbar.social_links}>
                  <FaVimeoV />
                </NavLink>
                <NavLink to="https://www.pinterest.com/" className={navbar.social_links}>
                  <FaPinterestP />
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
