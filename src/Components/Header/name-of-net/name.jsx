import React from 'react';
import na from './name.module.css';

const Name = () => {
   return (
      <a className={na.net} href='/news'>
         <span className={na.ar}>Artoo's</span><span className={na.nw}>Network</span>
      </a>
   )
}

export default Name;
