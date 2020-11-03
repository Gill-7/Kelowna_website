import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';
import Dropdown from './Dropdown';



function Navbar() {

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

  return (
    <>
      <nav className="navbar">
        
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Kelowna Travel <i class="fas fa-map-marker"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                  <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                      Home
                  </Link>
              </li>
              <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                  <Link to='/ThingsTodo' className="nav-links" onClick={closeMobileMenu}>
                      Things to do <i className='fas fa-caret-down' />
                  </Link>
                  {dropdown && <Dropdown />}
              </li>
              <li className="nav-item">
                  <Link to='/places' className="nav-links" onClick={closeMobileMenu}>
                      Places <i className='fas fa-caret-down' />
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/bookings' className="nav-links" onClick={closeMobileMenu}>
                      Bookings <i className='fas fa-caret-down' />
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/sign-out' className="nav-links-mobile" onClick={closeMobileMenu}>
                      Sign Up
                  </Link>
              </li>
              
          </ul>
          <Button />
        
      </nav>
    </>
  );
}

export default Navbar;
