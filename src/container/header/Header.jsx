import React from 'react';
import { AiOutlineMenuFold, AiFillHeart } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { RiShoppingBasketFill } from 'react-icons/ri';
import { GoSearch } from 'react-icons/go';

import nikeLogo from '../../assets/image/nike-logo.png';


import './header.css';

const Header = () => {
   return (
      <div className="header">
         <div className="header_nav">
            <img src={nikeLogo} alt="Nike" />
            <a className="header_nav-link" href="#">Men</a>
            <a className="header_nav-link" href="#">Women</a>
            <a className="header_nav-link" href="#">Kids</a>
            <a className="header_nav-link" href="#">Customise</a>
         </div>

         <div className="header_menu">
            <IconContext.Provider value={{ className: "header_menu-search-like-cart-icons" }}>
               <div className="header_menu-search-like-cart">
                  <GoSearch /> 
                  <AiFillHeart />
                  <RiShoppingBasketFill />
               </div>
            </IconContext.Provider>
            <IconContext.Provider value={{ className: "header_menu-toggle-icon" }}>
               <div className="header_menu-toggle">
                  <AiOutlineMenuFold  />
               </div>
            </IconContext.Provider>
         </div>
      </div>
   )
};

export default Header;
