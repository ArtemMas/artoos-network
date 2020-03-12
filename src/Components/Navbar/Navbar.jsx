import React from 'react';
import nb from './Navbar.module.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className={nb.nav}>
         <div>
            <Link className={nb.nav_a} to='/profile'>Profile</Link>
         </div>
         <div>
            <Link className={nb.nav_a} to='/dialogs'>Messages</Link>
         </div>
         <div>
            <Link className={nb.nav_a} to='/news'>News</Link>
         </div>
         <div>
            <Link className={nb.nav_a} to='/music'>Music</Link>
         </div>
         <br/><br/>
         <div>
            <Link className={nb.nav_a} to='/settings'>Settings</Link>
         </div>
      </nav>
   );
};

export default Navbar;
