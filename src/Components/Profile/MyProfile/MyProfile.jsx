import React from 'react';
import myPr from './MyProfile.module.css';
import Avatar from './avatar/avatar.jsx';
import Description from './description/description.jsx';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const MyProfile = (props) => {
   
   if (!props.profile) {
   		return <Preloader />
   }

   return (
      <div className={myPr.prof}>
         <Avatar photo={props.profile.photos} />
         <Description prof={props.profile} />
         <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
   );
};

export default MyProfile;
