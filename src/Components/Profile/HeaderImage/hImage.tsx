import React from 'react';
import img from './hImage.module.css';
import logo from './hImage.jpg';

const HImage = () => {
   return (
      <div>
         <img className={img.img} src={logo} alt='aaa' />
      </div>
   )
}

export default HImage;
