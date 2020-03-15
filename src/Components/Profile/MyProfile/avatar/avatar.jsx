import React from 'react';
import ava from './avatar.module.css';
import {Link} from 'react-router-dom';
import userPhoto from '../../../../assets/images/user.png'

const Avatar = (props) => {

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    };

    debugger;
   	return (
      <div className={ava.div}>
         <img className={ava.img} src={props.photo.large || userPhoto}  />
          { props.isOwner && <input type={'file'}
                                    onChange={onMainPhotoSelected}/> }
         <Link to={'/profile/edit'} className={ava.editAva}><div className={ava.edit}>Edit</div></Link>
      </div>
   )
};

export default Avatar;
