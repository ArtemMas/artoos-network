import React from 'react';
import im from './image.module.css';

const Image = () => {
   return (
      <div className={im.divImStyle}>
         <img className={im.ima} src="http://bestriders.com.br/wp-content/uploads/2012/04///1102_sbkp_01_z%2Bducati%2Blogo.jpg" alt=""/>
      </div>
      )
}
export default Image;
