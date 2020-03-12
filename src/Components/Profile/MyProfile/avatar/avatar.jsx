import React from 'react';
import ava from './avatar.module.css';
import {Link} from 'react-router-dom';

const Avatar = (props) => {
   	return (
      <div className={ava.div}>
         <img className={ava.img} src={props.photo.large}  />
         <Link className={ava.editAva}><div className={ava.edit}>Edit</div></Link>
      </div>
   )
}

export default Avatar;
