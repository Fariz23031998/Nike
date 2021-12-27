import React from 'react';
import './features.css'
import featuresBg from '../../assets/image/features-bg.png';
import featuresShoe from '../../assets/image/features-shoe.png';

const Features = () => {
   return (
      <div className="features">
         <div className="features_image">
            <img className="features_image-bg" src={featuresBg} alt="#" />
            <img className="features_image-shoe" src={featuresShoe} alt="#" />
         </div>

         <div className="features_content">
            <h2 className="gradient_text">Features</h2>
            <h1>Bring The Future to Light</h1>
            <p>The Nike SB Nyjah Free 2 is a sequel worthy of its predecessor. Inspired by the iconic Nike Air Zoom Spiridon, the original rubber design has been updated with mesh panels to help your feet stay cool through your hottest skate sessions.</p>
            <div className="features_content-colors">
               <p>Colors:</p>
               <div className="features_content-colors-picker gray" />
               <div className="features_content-colors-picker orange" />
               <div className="features_content-colors-picker yellow" />
               <div className="features_content-colors-picker blue" />
            </div>
            <div className="features_content-size">
               <p>Size:</p>
               <div>UK 5.5</div>
               <div>EU 39</div>
               <div>UK 6.5</div>
               <div>UK 7.5</div>
            </div>
            <div className="features_content-buttons">
               <button className="features_content-buttons-bag" type="button">Add to bag</button>
               <button className="features_content-buttons-wishlist" type="button">Wishlist</button>
            </div>
         </div>
      </div>
   );
};

export default Features;
