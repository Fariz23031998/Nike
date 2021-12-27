import React from 'react'
import './intro.css';
import introShoe from '../../assets/image/intro-shoe.png';
import mouse from '../../assets/image/mouse.png';
import { VscTriangleRight } from 'react-icons/vsc';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { IconContext } from 'react-icons';

const Intro = () => {
   return (
      <div className="intro">
         <div className="intro_content">
            <h2>Men's Shoes</h2>
            <h1>Nike SB Nyjah Free 2</h1>
            <p>$259.00</p>
            <button type="submit"><p>Buy Now</p> <VscTriangleRight /></button>
         </div>
         <div className="intro_image">
            <img className="intro-image-main" src={introShoe} alt="Nike Shoes" />
            <p>scroll down</p>
            <div className="intro_image-line" />
            <img className="intro_image-mouse" src={mouse} alt="m" />
            <div className="intro_image-social-icons">
               <IconContext.Provider value={ { className: "intro_image-social-icons-each"}}>
                  <a href="#"><FaFacebookF /></a>
                  <a href="#"><AiOutlineTwitter /></a>
                  <a href="#"><AiFillInstagram /></a>
                  <a href="#"><AiFillYoutube /></a>
               </IconContext.Provider>
            </div>
         </div>
      </div>
   );
};

export default Intro;
