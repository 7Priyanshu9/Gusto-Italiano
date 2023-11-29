import React, { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import {images} from '../../constants';
import './Navbar.css';

const Navbar = () => {

  const[toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.Gusto} alt="Our_logo"/>
        </div>

        <ul className='app__navbar-links'>
            {/* p means paragraph and opensans is the font beign used */}
            <li className='p__opensans'>
                <a href="#home">
                    Home
                </a>
            </li>
            <li className='p__opensans'>
                <a href="#about">
                    About
                </a>
            </li>
            <li className='p__opensans'>
                <a href="#menu">
                    Menu
                </a>
            </li>
            <li className='p__opensans'>
                <a href="#awards">
                    Awards
                </a>
            </li>
            <li className='p__opensans'>
                <a href="#contact">
                    Contact
                </a>
            </li>
        </ul>

        <div className='app__navbar-login'>
            <a href="#login" className='p__opensans'>
                Log in / Register
            </a>
            <div/>
            <a href="/" className='p__opensans'>
                Book Table
            </a>
        </div>

        <div className='app__navbar-smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)}/>

            {/* this is a type of if condition which says if toggle menu is true then open the overlay or else dont do anything */}

            {toggleMenu &&(

            <div className='app__navbar-smallscreen_overlay flex__centre slide-bottom'>
              <MdOutlineRestaurantMenu fontSize={27 } className='overlay__close'  onClick={()=> setToggleMenu(false)}/>
              <ul className='app__navbar-smallscreen_links'>
                <li className='p__opensans'>
                    <a href="#home">
                        Home
                    </a>
                </li>
                <li className='p__opensans'>
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className='p__opensans'>
                    <a href="#menu">
                        Menu
                    </a>
                </li>
                <li className='p__opensans'>
                    <a href="#awards">
                        Awards
                    </a>
                </li>
                <li className='p__opensans'>
                    <a href="#contact">
                        Contact
                    </a>
                </li>
            </ul>

            </div>
            )}

           
        </div>

    </nav>
);
  }
export default Navbar;